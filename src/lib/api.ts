
// API utility functions for interacting with serverless functions

import { ContactFormData, DemoRequestData } from './types';

// Base URL for API calls
const API_BASE_URL = "https://hyhvmvsxrxnwybrfkpqu.supabase.co/functions/v1";

/**
 * Submit contact form data to serverless function
 */
export async function submitContactForm(formData: ContactFormData): Promise<boolean> {
  try {
    console.log("Submitting contact form data:", formData);
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Failed to parse error response' }));
      console.error("Error response:", errorData);
      throw new Error(errorData.error || errorData.message || 'Failed to submit form');
    }

    const responseData = await response.json();
    console.log("Contact form submission successful:", responseData);
    
    return true;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}

/**
 * Submit demo request to serverless function
 */
export async function submitDemoRequest(formData: DemoRequestData): Promise<boolean> {
  try {
    console.log("Submitting demo request:", formData);
    const response = await fetch(`${API_BASE_URL}/demo-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Failed to parse error response' }));
      console.error("Error response:", errorData);
      throw new Error(errorData.error || errorData.message || 'Failed to submit demo request');
    }

    const responseData = await response.json();
    console.log("Demo request submission successful:", responseData);
    
    return true;
  } catch (error) {
    console.error('Error submitting demo request:', error);
    throw error;
  }
}

/**
 * Submit newsletter subscription
 */
export async function subscribeToNewsletter(email: string): Promise<boolean> {
  try {
    console.log("Subscribing to newsletter:", email);
    const response = await fetch(`${API_BASE_URL}/newsletter-subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Failed to parse error response' }));
      console.error("Error response:", errorData);
      throw new Error(errorData.error || errorData.message || 'Failed to subscribe');
    }

    const responseData = await response.json();
    console.log("Newsletter subscription successful:", responseData);
    
    return true;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
}

/**
 * Verify admin credentials
 */
export async function verifyAdmin(password: string): Promise<boolean> {
  try {
    console.log("Verifying admin credentials...");
    const response = await fetch(`${API_BASE_URL}/admin-submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      console.error("Admin verification failed:", response.status);
      return false;
    }

    console.log("Admin verification successful");
    return true;
  } catch (error) {
    console.error('Error verifying admin:', error);
    return false;
  }
}

/**
 * Fetch all contact submissions (requires admin authentication)
 */
export async function getContactSubmissions(password: string) {
  try {
    console.log("Fetching submissions with password...");
    const response = await fetch(`${API_BASE_URL}/admin-submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      console.error("Response not OK:", response.status);
      const errorData = await response.json().catch(() => ({ error: 'Failed to parse error response' }));
      throw new Error(errorData.error || errorData.message || 'Failed to fetch submissions');
    }

    const data = await response.json();
    console.log("Submissions fetched successfully, count:", {
      contacts: data.contact?.length || 0,
      demos: data.demos?.length || 0,
      newsletters: data.newsletters?.length || 0
    });
    return data;
  } catch (error) {
    console.error('Error fetching submissions:', error);
    throw error;
  }
}
