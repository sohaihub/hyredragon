
// API utility functions for managing form submissions with localStorage

import { 
  saveContactForm, 
  saveDemoRequest, 
  saveNewsletter,
  verifyAdminPassword,
  getContactForms,
  getDemoRequests,
  getNewsletters,
  downloadCsv
} from './localStorageUtils';

/**
 * Submit contact form data to localStorage
 */
export async function submitContactForm(formData: {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  try {
    console.log("Submitting contact form data:", formData);
    saveContactForm(formData);
    return true;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}

/**
 * Submit demo request to localStorage
 */
export async function submitDemoRequest(formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  jobTitle: string;
  companySize: string;
  preferredDate?: string;
  message?: string;
}): Promise<boolean> {
  try {
    console.log("Submitting demo request:", formData);
    saveDemoRequest(formData);
    return true;
  } catch (error) {
    console.error('Error submitting demo request:', error);
    throw error;
  }
}

/**
 * Submit newsletter subscription to localStorage
 */
export async function subscribeToNewsletter(email: string): Promise<boolean> {
  try {
    console.log("Subscribing to newsletter:", email);
    saveNewsletter(email);
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
    return verifyAdminPassword(password);
  } catch (error) {
    console.error('Error verifying admin:', error);
    return false;
  }
}

/**
 * Fetch all submissions (requires admin authentication)
 */
export async function getContactSubmissions(password: string) {
  try {
    if (!verifyAdminPassword(password)) {
      throw new Error("Unauthorized");
    }

    console.log("Fetching submissions...");
    
    const data = {
      contact: getContactForms(),
      demos: getDemoRequests(),
      newsletters: getNewsletters(),
      timestamp: new Date().toISOString()
    };
    
    console.log("Submissions fetched successfully, count:", {
      contacts: data.contact.length,
      demos: data.demos.length,
      newsletters: data.newsletters.length
    });
    
    return data;
  } catch (error) {
    console.error('Error fetching submissions:', error);
    throw error;
  }
}

/**
 * Download all submissions as a CSV file
 */
export function exportSubmissionsToCsv(): void {
  try {
    downloadCsv();
  } catch (error) {
    console.error('Error exporting submissions:', error);
    throw error;
  }
}
