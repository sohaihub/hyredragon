import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.23.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SUPABASE_URL = "https://hyhvmvsxrxnwybrfkpqu.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5aHZtdnN4cnhud3licmZrcHF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2MzYzMDksImV4cCI6MjA2MzIxMjMwOX0.gcWskABIWdkDd1JNLE7rHSvU4HXr3CW5xbusQ-gCT64";

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

interface NewsletterSubscription {
  email: string;
  subscribed_at: string;
  status: 'active' | 'inactive' | 'unsubscribed';
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  try {
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Get and validate the request body
    let email: string;
    try {
      const body = await req.json();
      email = body.email?.trim().toLowerCase();
    } catch (e) {
      return new Response(
        JSON.stringify({ error: "Invalid request body" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Validate email
    if (!email || !EMAIL_REGEX.test(email)) {
      return new Response(
        JSON.stringify({ 
          error: "Invalid email address",
          details: "Please provide a valid email address"
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Check if the newsletters table exists
    const { error: tableCheckError } = await supabaseClient
      .from('newsletters')
      .select('count')
      .limit(1);

    if (tableCheckError?.code === '42P01') {
      // Table doesn't exist, create it
      try {
        await supabaseClient.rpc('create_newsletters_table');
      } catch (createError) {
        console.error("Failed to create newsletters table:", createError);
        return new Response(
          JSON.stringify({ 
            error: "Service setup failed", 
            details: "Unable to initialize newsletter service" 
          }),
          {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
    }

    // Check for existing subscription
    const { data: existingSubscription, error: checkError } = await supabaseClient
      .from('newsletters')
      .select('email, status')
      .eq('email', email)
      .single();

    if (checkError && checkError.code !== 'PGRST116') { // PGRST116 is "not found" error
      console.error("Error checking existing subscription:", checkError);
      return new Response(
        JSON.stringify({ 
          error: "Subscription check failed", 
          details: "Unable to verify subscription status" 
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (existingSubscription) {
      if (existingSubscription.status === 'active') {
        return new Response(
          JSON.stringify({ 
            success: true, 
            message: "You're already subscribed!",
            data: { email, status: 'active' }
          }),
          {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      } else {
        // Reactivate subscription
        const { error: updateError } = await supabaseClient
          .from('newsletters')
          .update({ status: 'active', subscribed_at: new Date().toISOString() })
          .eq('email', email);

        if (updateError) {
          console.error("Error reactivating subscription:", updateError);
          return new Response(
            JSON.stringify({ 
              error: "Subscription update failed", 
              details: "Unable to reactivate subscription" 
            }),
            {
              status: 500,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
          );
        }

        return new Response(
          JSON.stringify({ 
            success: true, 
            message: "Your subscription has been reactivated!",
            data: { email, status: 'active' }
          }),
          {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
    }

    // Create new subscription
    const subscription: NewsletterSubscription = {
      email,
      subscribed_at: new Date().toISOString(),
      status: 'active'
    };

    const { data, error: insertError } = await supabaseClient
      .from('newsletters')
      .insert([subscription])
      .select()
      .single();

    if (insertError) {
      console.error("Error creating subscription:", insertError);
      return new Response(
        JSON.stringify({ 
          error: "Subscription failed", 
          details: "Unable to create subscription" 
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Successfully subscribed to the newsletter!",
        data: { 
          email: data.email, 
          subscribed_at: data.subscribed_at,
          status: data.status
        }
      }),
      {
        status: 201,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("Server error:", error);
    return new Response(
      JSON.stringify({ 
        error: "Internal Server Error", 
        details: "An unexpected error occurred",
        timestamp: new Date().toISOString()
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});