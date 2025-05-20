
import { supabase } from '@/integrations/supabase/client';
import { responseManager } from './responses';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  plan?: string;
  subject: string;
  message: string;
}

export interface DemoRequestData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  jobTitle: string;
  companySize: string;
  preferredDate?: string;
  message?: string;
}

/**
 * Submit contact form data to Supabase
 * @param data Contact form data
 * @returns Promise with submission result
 */
export const submitContactForm = async (data: ContactFormData) => {
  try {
    // Save to Supabase for persistent storage
    const { error } = await supabase
      .from('contact form')
      .insert([
        { 
          Name: data.name,
          Email: data.email,
          Company: data.company || null,
          Plan: data.plan || null,
          Subject: data.subject,
          Message: data.message
        }
      ]);

    if (error) {
      console.error('Error submitting contact form to Supabase:', error);
      throw error;
    }

    // Also store in localStorage for offline/local access
    const storedSubmissions = getLocalStorageSubmissions('contact_forms') || [];
    const submission = {
      id: generateId(),
      ...data,
      createdAt: new Date().toISOString()
    };
    
    storedSubmissions.push(submission);
    localStorage.setItem('contact_forms', JSON.stringify(storedSubmissions));
    
    return submission;
  } catch (error) {
    // Fallback to localStorage if Supabase fails
    console.error('Falling back to localStorage only for contact form');
    
    const storedSubmissions = getLocalStorageSubmissions('contact_forms') || [];
    const submission = {
      id: generateId(),
      ...data,
      createdAt: new Date().toISOString()
    };
    
    storedSubmissions.push(submission);
    localStorage.setItem('contact_forms', JSON.stringify(storedSubmissions));
    
    return submission;
  }
};

/**
 * Submit demo request data to Supabase
 * @param data Demo request data
 * @returns Promise with submission result
 */
export const submitDemoRequest = async (data: DemoRequestData) => {
  try {
    // Save to Supabase for persistent storage
    const { error } = await supabase
      .from('demo_requests')
      .insert([
        { 
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone || '',
          company: data.company,
          job_title: data.jobTitle,
          company_size: data.companySize,
          message: data.message || null
        }
      ]);

    if (error) {
      console.error('Error submitting demo request to Supabase:', error);
      throw error;
    }

    // Also store in localStorage for offline/local access
    const storedRequests = getLocalStorageSubmissions('demo_requests') || [];
    const request = {
      id: generateId(),
      ...data,
      createdAt: new Date().toISOString()
    };
    
    storedRequests.push(request);
    localStorage.setItem('demo_requests', JSON.stringify(storedRequests));
    
    return request;
  } catch (error) {
    // Fallback to localStorage if Supabase fails
    console.error('Falling back to localStorage only for demo request');
    
    const storedRequests = getLocalStorageSubmissions('demo_requests') || [];
    const request = {
      id: generateId(),
      ...data,
      createdAt: new Date().toISOString()
    };
    
    storedRequests.push(request);
    localStorage.setItem('demo_requests', JSON.stringify(storedRequests));
    
    return request;
  }
};

/**
 * Subscribe to newsletter using Supabase Edge Function
 * @param email Email address to subscribe
 * @returns Promise with subscription result
 */
export const subscribeToNewsletter = async (email: string) => {
  try {
    // Call Supabase Edge Function
    const { data, error } = await supabase.functions.invoke('newsletter-subscribe', {
      body: { email }
    });

    if (error) {
      console.error('Error calling newsletter subscription function:', error);
      throw error;
    }

    // Also store in localStorage as backup
    try {
      responseManager.saveNewsletterSubscription(email);
    } catch (e) {
      // If already subscribed in localStorage, that's fine
      console.log('Newsletter already exists in localStorage or other error:', e);
    }

    return data;
  } catch (error) {
    console.error('Falling back to localStorage for newsletter:', error);
    
    // Fallback to local storage
    return responseManager.saveNewsletterSubscription(email);
  }
};

/**
 * Get submissions from localStorage
 * @param key Storage key
 * @returns Array of submissions
 */
const getLocalStorageSubmissions = (key: string): any[] => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

/**
 * Generate a simple ID
 * @returns Generated ID
 */
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
};
