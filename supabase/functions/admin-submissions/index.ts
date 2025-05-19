import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.23.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SUPABASE_URL = "https://hyhvmvsxrxnwybrfkpqu.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5aHZtdnN4cnhud3licmZrcHF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2MzYzMDksImV4cCI6MjA2MzIxMjMwOX0.gcWskABIWdkDd1JNLE7rHSvU4HXr3CW5xbusQ-gCT64";
const ADMIN_PASSWORD = "hydragon2025admin";

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
    });
  }

  try {
    const { password } = await req.json();
    
    // Verify admin password
    if (password !== ADMIN_PASSWORD) {
      console.log("Unauthorized access attempt with password:", password);
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

    const supabaseClient = createClient(
      SUPABASE_URL,
      SUPABASE_ANON_KEY
    );

    // Fetch all data in parallel for better performance
    const [contactResponse, demoResponse, newsletterResponse] = await Promise.all([
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
        .order('created_at', { ascending: false }),

      // Fetch demo requests
      supabaseClient
        .from("demo_requests")
        .select(`
          id,
          name,
          email,
          company,
          plan,
          message,
          created_at,
          status
        `)
        .order('created_at', { ascending: false }),

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
    ]);

    // Check for errors
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

    // If there are any errors, include them in the response
    const responseData = {
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

    // Return the combined data
    return new Response(
      JSON.stringify(responseData),
      {
        status: errors.length > 0 ? 207 : 200, // Use 207 Multi-Status if there are partial errors
        headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store, must-revalidate",
          "Pragma": "no-cache",
          "Expires": "0"
        },
      }
    );

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