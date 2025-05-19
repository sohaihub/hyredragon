
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.23.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
    });
  }

  try {
    const { password } = await req.json();
    
    // Simple admin verification - in a real app, you'd use proper authentication
    if (password !== "hydragon2025admin") {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Fetch contact submissions
    const { data: contactData, error: contactError } = await supabaseClient
      .from("contact form")
      .select("*")
      .order("created_at", { ascending: false });

    if (contactError) {
      console.error("Error fetching contact submissions:", contactError);
      return new Response(
        JSON.stringify({ error: "Failed to fetch contact submissions" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Fetch demo requests
    const { data: demoData, error: demoError } = await supabaseClient
      .from("demo_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (demoError) {
      console.error("Error fetching demo requests:", demoError);
      return new Response(
        JSON.stringify({ error: "Failed to fetch demo requests" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Return both contact form submissions and demo requests
    return new Response(
      JSON.stringify({ 
        contact: contactData || [], 
        demos: demoData || [] 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Server error:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
