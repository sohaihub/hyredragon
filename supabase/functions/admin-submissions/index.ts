
// This is a Supabase Edge Function to fetch contact submissions
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    const { password } = await req.json()
    
    // Get admin password from environment variable
    const adminPassword = Deno.env.get("ADMIN_PASSWORD")
    
    if (!adminPassword) {
      console.error("ADMIN_PASSWORD environment variable not set")
      throw new Error("Server configuration error")
    }
    
    // Check if password matches
    if (password !== adminPassword) {
      return new Response(
        JSON.stringify({ success: false, message: "Authentication failed" }),
        { 
          status: 401, 
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        }
      )
    }

    // Create a Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      {
        global: { headers: { Authorization: req.headers.get("Authorization")! } },
      }
    )

    // Fetch all contact submissions ordered by most recent first
    const { data: submissions, error } = await supabaseClient
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) throw error

    return new Response(
      JSON.stringify({ success: true, submissions }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    )
  }
})

/* SETUP INSTRUCTIONS:
1. Connect your Lovable project to Supabase (click the green Supabase button)
2. Deploy this Edge Function to your Supabase project
3. Ensure the ADMIN_PASSWORD secret is set in Project Settings > Secrets
4. Make sure the 'contact_submissions' table exists in your Supabase database
*/
