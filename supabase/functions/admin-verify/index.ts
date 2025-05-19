import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.23.0";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SUPABASE_URL = "https://hyhvmvsxrxnwybrfkpqu.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5aHZtdnN4cnhud3licmZrcHF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2MzYzMDksImV4cCI6MjA2MzIxMjMwOX0.gcWskABIWdkDd1JNLE7rHSvU4HXr3CW5xbusQ-gCT64";

// Maximum failed attempts before temporary lockout
const MAX_FAILED_ATTEMPTS = 5;
// Lockout duration in minutes
const LOCKOUT_DURATION = 15;

interface AdminVerifyResponse {
  verified: boolean;
  message?: string;
  expiresAt?: string;
}

// Store for tracking failed attempts
const failedAttempts = new Map<string, { count: number; lastAttempt: Date }>();

function isLockedOut(ip: string): { locked: boolean; remainingTime?: number } {
  const attempts = failedAttempts.get(ip);
  if (!attempts) return { locked: false };

  if (attempts.count >= MAX_FAILED_ATTEMPTS) {
    const lockoutEnd = new Date(attempts.lastAttempt.getTime() + LOCKOUT_DURATION * 60000);
    const now = new Date();
    if (now < lockoutEnd) {
      return { 
        locked: true, 
        remainingTime: Math.ceil((lockoutEnd.getTime() - now.getTime()) / 60000)
      };
    } else {
      failedAttempts.delete(ip);
      return { locked: false };
    }
  }

  return { locked: false };
}

function recordFailedAttempt(ip: string) {
  const attempts = failedAttempts.get(ip) || { count: 0, lastAttempt: new Date() };
  attempts.count += 1;
  attempts.lastAttempt = new Date();
  failedAttempts.set(ip, attempts);
}

function resetFailedAttempts(ip: string) {
  failedAttempts.delete(ip);
}

// Clean up old entries every hour
setInterval(() => {
  const now = new Date();
  for (const [ip, attempts] of failedAttempts.entries()) {
    const lockoutEnd = new Date(attempts.lastAttempt.getTime() + LOCKOUT_DURATION * 60000);
    if (now > lockoutEnd) {
      failedAttempts.delete(ip);
    }
  }
}, 3600000);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
    });
  }

  // Only accept POST requests
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ 
        error: "Method not allowed",
        message: "Only POST requests are accepted"
      }),
      {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  try {
    // Get client IP
    const clientIP = req.headers.get("x-forwarded-for") || "unknown";

    // Check for lockout
    const { locked, remainingTime } = isLockedOut(clientIP);
    if (locked) {
      return new Response(
        JSON.stringify({ 
          verified: false,
          message: `Too many failed attempts. Please try again in ${remainingTime} minutes.`,
          lockedUntil: new Date(Date.now() + (remainingTime || 0) * 60000).toISOString()
        }),
        {
          status: 429,
          headers: { 
            ...corsHeaders, 
            "Content-Type": "application/json",
            "Retry-After": `${remainingTime * 60}`,
          },
        }
      );
    }

    // Parse request body
    let password: string;
    try {
      const body = await req.json();
      password = body.password;
    } catch (e) {
      return new Response(
        JSON.stringify({ 
          verified: false,
          message: "Invalid request format"
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Validate password
    if (!password || typeof password !== 'string') {
      return new Response(
        JSON.stringify({ 
          verified: false,
          message: "Password is required"
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Verify password with constant-time comparison
    const isValid = await bcrypt.compare(
      password,
      "$2a$10$XwODPLxMMq7LpQ3hEWyuA.YCO5HRl69LuSNvEGdbV8jP9VS3mVC6e" // Hashed version of "hydragon2025admin"
    );

    if (!isValid) {
      recordFailedAttempt(clientIP);
      const attempts = failedAttempts.get(clientIP);
      const remainingAttempts = MAX_FAILED_ATTEMPTS - (attempts?.count || 0);

      return new Response(
        JSON.stringify({ 
          verified: false,
          message: `Invalid password. ${remainingAttempts} attempts remaining before lockout.`
        }),
        {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Reset failed attempts on successful login
    resetFailedAttempts(clientIP);

    // Generate session token
    const sessionToken = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Store session in Supabase
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    await supabaseClient
      .from('admin_sessions')
      .insert([{
        session_token: sessionToken,
        expires_at: expiresAt.toISOString(),
        ip_address: clientIP,
        created_at: new Date().toISOString()
      }])
      .select()
      .single();

    const response: AdminVerifyResponse = {
      verified: true,
      message: "Authentication successful",
      expiresAt: expiresAt.toISOString()
    };

    return new Response(
      JSON.stringify(response),
      {
        status: 200,
        headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sessionToken}`,
          "Cache-Control": "no-store, private",
        },
      }
    );

  } catch (error) {
    console.error("Server error:", error);
    return new Response(
      JSON.stringify({ 
        error: "Internal Server Error",
        message: "An unexpected error occurred",
        timestamp: new Date().toISOString()
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});