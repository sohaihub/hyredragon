import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.23.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SUPABASE_URL = "https://hyhvmvsxrxnwybrfkpqu.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5aHZtdnN4cnhud3licmZrcHF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2MzYzMDksImV4cCI6MjA2MzIxMjMwOX0.gcWskABIWdkDd1JNLE7rHSvU4HXr3CW5xbusQ-gCT64";

// Validation patterns
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

interface ContactForm {
  name: string;
  email: string;
  company?: string;
  plan?: string;
  subject: string;
  message: string;
  created_at: string;
  status: 'new' | 'read' | 'replied' | 'archived';
}

function validateContactForm(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Required fields
  if (!data.name?.trim()) errors.push("Name is required");
  if (!data.email?.trim()) errors.push("Email is required");
  if (!data.subject?.trim()) errors.push("Subject is required");
  if (!data.message?.trim()) errors.push("Message is required");

  // Email validation
  if (data.email && !EMAIL_REGEX.test(data.email.trim())) {
    errors.push("Invalid email address");
  }

  // Length validations
  if (data.message && data.message.length > 5000) {
    errors.push("Message must not exceed 5000 characters");
  }
  if (data.subject && data.subject.length > 200) {
    errors.push("Subject must not exceed 200 characters");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

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
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Parse and validate request data
    let requestData;
    try {
      requestData = await req.json();
    } catch (e) {
      return new Response(
        JSON.stringify({ 
          error: "Invalid request",
          message: "Unable to parse request body"
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Validate form data
    const { isValid, errors } = validateContactForm(requestData);
    if (!isValid) {
      return new Response(
        JSON.stringify({ 
          error: "Validation failed",
          details: errors
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Prepare contact form data
    const contactForm: ContactForm = {
      name: requestData.name.trim(),
      email: requestData.email.trim().toLowerCase(),
      company: requestData.company?.trim() || null,
      plan: requestData.plan?.trim() || null,
      subject: requestData.subject.trim(),
      message: requestData.message.trim(),
      created_at: new Date().toISOString(),
      status: 'new'
    };

    // Try to insert data first
    let { data, error } = await supabaseClient
      .from("contact_form")
      .insert([contactForm])
      .select()
      .single();

    // If table doesn't exist, create it and try again
    if (error?.code === '42P01') {
      try {
        // Create the table using raw SQL
        const { error: createError } = await supabaseClient.rpc('exec', {
          query: `
            CREATE TABLE IF NOT EXISTS contact_form (
              id BIGSERIAL PRIMARY KEY,
              name TEXT NOT NULL,
              email TEXT NOT NULL,
              company TEXT,
              plan TEXT,
              subject TEXT NOT NULL,
              message TEXT NOT NULL,
              created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
              status TEXT NOT NULL DEFAULT 'new'
            );
            
            -- Create indexes
            CREATE INDEX IF NOT EXISTS idx_contact_form_email ON contact_form(email);
            CREATE INDEX IF NOT EXISTS idx_contact_form_status ON contact_form(status);
            CREATE INDEX IF NOT EXISTS idx_contact_form_created_at ON contact_form(created_at DESC);
            
            -- Enable RLS
            ALTER TABLE contact_form ENABLE ROW LEVEL SECURITY;
            
            -- Create policies
            DROP POLICY IF EXISTS "Allow anonymous insert" ON contact_form;
            CREATE POLICY "Allow anonymous insert" ON contact_form FOR INSERT WITH CHECK (true);
            
            DROP POLICY IF EXISTS "Allow authenticated read" ON contact_form;
            CREATE POLICY "Allow authenticated read" ON contact_form
              FOR SELECT USING (auth.role() = 'authenticated');
          `
        });

        if (createError) {
          throw createError;
        }

        // Try inserting again
        ({ data, error } = await supabaseClient
          .from("contact_form")
          .insert([contactForm])
          .select()
          .single());
      } catch (createTableError) {
        console.error("Error creating table:", createTableError);
        return new Response(
          JSON.stringify({ 
            error: "Service setup failed",
            message: "Unable to process contact form submissions at this time"
          }),
          {
            status: 503,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
    }

    if (error) {
      console.error("Error storing contact form data:", error);
      return new Response(
        JSON.stringify({ 
          error: "Submission failed",
          message: "Unable to submit contact form",
          details: error.message
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Send success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Form submitted successfully",
        data: {
          id: data.id,
          created_at: data.created_at,
          status: data.status
        }
      }),
      {
        status: 201,
        headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json",
          "Cache-Control": "no-store, no-cache, must-revalidate",
          "Pragma": "no-cache"
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
