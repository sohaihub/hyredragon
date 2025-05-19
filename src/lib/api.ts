
// API utility functions for interacting with serverless functions

import { ContactFormData } from './types';

// Base URL for API calls
const API_BASE_URL = import.meta.env.VITE_SUPABASE_FUNCTIONS_URL || '';

/**
 * Submit contact form data to serverless function
 */
export async function submitContactForm(formData: ContactFormData): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to submit form');
    }

    return true;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}

/**
 * Verify admin credentials
 */
export async function verifyAdmin(password: string): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/admin-verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      return false;
    }

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
    const response = await fetch(`${API_BASE_URL}/admin-submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch submissions');
    }

    const data = await response.json();
    return data.submissions || [];
  } catch (error) {
    console.error('Error fetching submissions:', error);
    throw error;
  }
}
