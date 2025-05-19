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
const PHONE_REGEX = /^\+?[\d\s-()]{8,}$/;

interface DemoRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  company: string;
  job_title: string;
  company_size: string;
  message?: string;
  created_at: string;
  status: 'pending' | 'contacted' | 'completed' | 'cancelled';
}

// Function to ensure the demo_requests table exists
async function ensureDemoRequestsTable(supabaseClient: any) {
  try {
    // Check if table exists by attempting to query it
    const { error: checkError } = await supabaseClient
      .from('demo_requests')
      .select('count')
      .limit(1);

    if (checkError?.code === '42P01') { // Table doesn't exist
      // Create table using RPC (you need to have this function in your database)
      const { error: createError } = await supabaseClient.rpc('create_demo_requests_table');
      if (createError) {
        console.error("Failed to create table:", createError);
        return false;
      }
    } else if (checkError) {
      console.error("Error checking table:", checkError);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error ensuring table exists:", error);
    return false;
  }
}

function validateDemoRequest(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Required fields
  if (!data.firstName?.trim()) errors.push("First name is required");
  if (!data.lastName?.trim()) errors.push("Last name is required");
  if (!data.email?.trim()) errors.push("Email is required");
  if (!data.company?.trim()) errors.push("Company name is required");
  if (!data.jobTitle?.trim()) errors.push("Job title is required");
  if (!data.companySize?.trim()) errors.push("Company size is required");

  // Email validation
  if (data.email && !EMAIL_REGEX.test(data.email.trim())) {
    errors.push("Invalid email address");
  }

  // Phone validation (if provided)
  if (data.phone && !PHONE_REGEX.test(data.phone.trim())) {
    errors.push("Invalid phone number format");
  }

  // Length validations
  if (data.message && data.message.length > 1000) {
    errors.push("Message must not exceed 1000 characters");
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

    // Ensure table exists
    const tableExists = await ensureDemoRequestsTable(supabaseClient);
    if (!tableExists) {
      return new Response(
        JSON.stringify({ 
          error: "Service unavailable",
          message: "Unable to process demo requests at this time"
        }),
        {
          status: 503,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

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

    // Validate request data
    const { isValid, errors } = validateDemoRequest(requestData);
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

    // Check for existing demo request with same email
    const { data: existingRequest } = await supabaseClient
      .from('demo_requests')
      .select('id, status, created_at')
      .eq('email', requestData.email.trim().toLowerCase())
      .single();

    if (existingRequest) {
      return new Response(
        JSON.stringify({ 
          error: "Duplicate request",
          message: "A demo request with this email already exists",
          data: {
            id: existingRequest.id,
            status: existingRequest.status,
            created_at: existingRequest.created_at
          }
        }),
        {
          status: 409,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Prepare demo request data
    const demoRequest: DemoRequest = {
      first_name: requestData.firstName.trim(),
      last_name: requestData.lastName.trim(),
      email: requestData.email.trim().toLowerCase(),
      phone: requestData.phone?.trim(),
      company: requestData.company.trim(),
      job_title: requestData.jobTitle.trim(),
      company_size: requestData.companySize.trim(),
      message: requestData.message?.trim(),
      created_at: new Date().toISOString(),
      status: 'pending'
    };

    // Insert data into the demo_requests table
    const { data, error } = await supabaseClient
      .from("demo_requests")
      .insert([demoRequest])
      .select()
      .single();

    if (error) {
      console.error("Error storing demo request:", error);
      return new Response(
        JSON.stringify({ 
          error: "Submission failed",
          message: "Unable to submit demo request",
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
        message: "Demo request submitted successfully",
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