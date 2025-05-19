import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.23.0";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import { corsHeaders, handleCorsPreflightRequest, addCorsHeaders } from "../_shared/cors.ts";

const SUPABASE_URL = "https://hyhvmvsxrxnwybrfkpqu.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5aHZtdnN4cnhud3licmZrcHF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2MzYzMDksImV4cCI6MjA2MzIxMjMwOX0.gcWskABIWdkDd1JNLE7rHSvU4HXr3CW5xbusQ-gCT64";

// Hashed version of "hydragon2025admin"
const ADMIN_PASSWORD_HASH = "$2a$10$XwODPLxMMq7LpQ3hEWyuA.YCO5HRl69LuSNvEGdbV8jP9VS3mVC6e";

interface SubmissionsResponse {
  timestamp: string;
  contact: any[];
  demos: any[];
  newsletters: any[];
  errors?: Array<{
    type: string;
    message: string;
  }>;
  stats: {
    total_contacts: number;
    total_demos: number;
    total_subscribers: number;
  };
}

async function verifyAdminSession(supabaseClient: any, sessionToken: string): Promise<boolean> {
  if (!sessionToken) return false;

  const { data, error } = await supabaseClient
    .from('admin_sessions')
    .select('expires_at')
    .eq('session_token', sessionToken)
    .single();

  if (error || !data) return false;

  const expiresAt = new Date(data.expires_at);
  const now = new Date();

  return expiresAt > now;
}

async function fetchSubmissionsData(supabaseClient: any, page = 1, limit = 50) {
  const offset = (page - 1) * limit;

  return Promise.all([
    // Fetch contact form submissions
    supabaseClient
      .from("contact_form")
      .select(`
        id,
        name,
        email,
        company,
        subject,
        message,
        created_at,
        status
      `)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1),

    // Fetch demo requests
    supabaseClient
      .from("demo_requests")
      .select(`
        id,
        first_name,
        last_name,
        email,
        company,
        job_title,
        company_size,
        message,
        created_at,
        status
      `)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1),

    // Fetch newsletter subscriptions
    supabaseClient
      .from("newsletters")
      .select(`
        id,
        email,
        subscribed_at,
        status
      `)
      .order('subscribed_at', { ascending: false })
      .range(offset, offset + limit - 1)
  ]);
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return handleCorsPreflightRequest();
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
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Get request data
    const { password, sessionToken, page = 1, limit = 50 } = await req.json();

    // Check for session token first
    if (sessionToken) {
      const isValidSession = await verifyAdminSession(supabaseClient, sessionToken);
      if (!isValidSession) {
        return new Response(
          JSON.stringify({ 
            error: "Unauthorized", 
            message: "Session expired or invalid"
          }),
          {
            status: 401,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
    } else {
      // Verify password if no session token
      if (!password) {
        return new Response(
          JSON.stringify({ 
            error: "Unauthorized", 
            message: "Authentication required"
          }),
          {
            status: 401,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      const isValid = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
      if (!isValid) {
        console.log("Unauthorized access attempt");
        return new Response(
          JSON.stringify({ 
            error: "Unauthorized", 
            message: "Invalid admin credentials"
          }),
          {
            status: 401,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
    }

    // Fetch data with pagination
    const [contactResponse, demoResponse, newsletterResponse] = 
      await fetchSubmissionsData(supabaseClient, page, limit);

    // Process errors
    const errors = [];
    if (contactResponse.error) {
      console.error("Error fetching contact submissions:", contactResponse.error);
      errors.push({
        type: "contact_form",
        message: contactResponse.error.message
      });
    }

    if (demoResponse.error) {
      console.error("Error fetching demo requests:", demoResponse.error);
      errors.push({
        type: "demo_requests",
        message: demoResponse.error.message
      });
    }

    if (newsletterResponse.error) {
      console.error("Error fetching newsletter subscriptions:", newsletterResponse.error);
      errors.push({
        type: "newsletters",
        message: newsletterResponse.error.message
      });
    }

    // Prepare response
    const responseData: SubmissionsResponse = {
      timestamp: new Date().toISOString(),
      contact: contactResponse.data || [],
      demos: demoResponse.data || [],
      newsletters: newsletterResponse.data || [],
      errors: errors.length > 0 ? errors : undefined,
      stats: {
        total_contacts: contactResponse.data?.length || 0,
        total_demos: demoResponse.data?.length || 0,
        total_subscribers: newsletterResponse.data?.length || 0
      }
    };

    // Return response with CORS headers
    const response = new Response(
      JSON.stringify(responseData),
      {
        status: errors.length > 0 ? 207 : 200,
        headers: { 
          "Content-Type": "application/json",
          "Cache-Control": "no-store, private, must-revalidate",
          "Pragma": "no-cache",
          "Expires": "0"
        },
      }
    );

    return addCorsHeaders(response);

  } catch (error) {
    console.error("Server error:", error);
    return new Response(
      JSON.stringify({ 
        error: "Internal Server Error",
        message: error.message,
        timestamp: new Date().toISOString()
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
