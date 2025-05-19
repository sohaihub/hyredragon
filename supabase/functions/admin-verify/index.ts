
// This is a Supabase Edge Function for admin authentication
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"

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

    return new Response(
      JSON.stringify({ success: true, message: "Authentication successful" }),
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
3. Add ADMIN_PASSWORD in Supabase Project Settings > Secrets with value "Hyredragon@123"
*/
