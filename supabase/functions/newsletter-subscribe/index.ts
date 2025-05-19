import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.23.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SUPABASE_URL = "https://hyhvmvsxrxnwybrfkpqu.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5aHZtdnN4cnhud3licmZrcHF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2MzYzMDksImV4cCI6MjA2MzIxMjMwOX0.gcWskABIWdkDd1JNLE7rHSvU4HXr3CW5xbusQ-gCT64";

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
    });
  }

  try {
    const supabaseClient = createClient(
      SUPABASE_URL,
      SUPABASE_ANON_KEY
    );

    // Get the request body
    const { email } = await req.json();
    console.log("Newsletter subscription received:", email);

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Try to insert directly into newsletters table first
    const { data, error } = await supabaseClient
      .from("newsletters")
      .insert([{ 
        email: email,
        subscribed_at: new Date().toISOString(),
        status: 'active'
      }])
      .select()
      .single();

    if (error) {
      if (error.code === "23505") { // Duplicate key error
        return new Response(
          JSON.stringify({ success: true, message: "You're already subscribed!" }),
          {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      
      if (error.code === "42P01") { // Table doesn't exist error
        // Try to create the table and insert
        try {
          // Create the newsletters table
          await supabaseClient.rpc('create_newsletters_table');
          
          // Try inserting again
          const { error: insertError } = await supabaseClient
            .from("newsletters")
            .insert([{ 
              email: email,
              subscribed_at: new Date().toISOString(),
              status: 'active'
            }]);

          if (insertError) {
            throw insertError;
          }

          return new Response(
            JSON.stringify({ success: true, message: "Subscription successful" }),
            {
              status: 200,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
          );
        } catch (tableError) {
          console.error("Error creating table or inserting:", tableError);
          return new Response(
            JSON.stringify({ 
              error: "Failed to setup subscription service", 
              details: tableError.message 
            }),
            {
              status: 500,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
          );
        }
      }
      
      console.error("Error storing newsletter subscription:", error);
      return new Response(
        JSON.stringify({ error: "Failed to subscribe", details: error.message }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Subscription successful",
        data: { email: data.email, subscribed_at: data.subscribed_at }
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("Server error:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error", details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});