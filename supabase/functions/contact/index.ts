
// This is a Supabase Edge Function
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  plan: string;
  subject: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    const { name, email, company, plan, subject, message } = await req.json() as ContactFormData
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Required fields are missing" }),
        { 
          status: 400, 
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

    // Store submission in the database
    const { data, error } = await supabaseClient
      .from("contact_submissions")
      .insert([
        {
          name,
          email,
          company,
          plan,
          subject,
          message,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) throw error

    return new Response(
      JSON.stringify({ success: true, message: "Contact form submitted successfully" }),
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
3. Create a 'contact_submissions' table in Supabase with the following columns:
   - id: uuid (primary key)
   - name: text (not null)
   - email: text (not null)
   - company: text
   - plan: text (not null)
   - subject: text (not null)
   - message: text (not null)
   - created_at: timestamp with time zone (not null)
4. Set up proper RLS policies to secure your data
*/
