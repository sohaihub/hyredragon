
// Import the response manager for local storage access
import { responseManager } from './responses';

// Contact form submission
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}) => {
  try {
    responseManager.saveContactSubmission(formData);
    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Failed to submit contact form');
  }
};

// Demo request submission
export const submitDemoRequest = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  companySize: string;
  preferredDate?: string;
  message?: string;
}) => {
  try {
    responseManager.saveDemoRequest(formData);
    return { success: true };
  } catch (error) {
    console.error('Error submitting demo request:', error);
    throw new Error('Failed to submit demo request');
  }
};

// Newsletter subscription
export const subscribeToNewsletter = async (email: string) => {
  try {
    responseManager.saveNewsletterSubscription(email);
    return { success: true };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw new Error('Failed to subscribe to newsletter');
  }
};

// Admin verification
export const verifyAdmin = (password: string) => {
  return responseManager.verifyAdmin(password);
};

// Get all contact submissions for admin
export const getContactSubmissions = (password: string) => {
  // In a real app, we would verify the password here
  return responseManager.getAllSubmissions();
};

// Export all submissions to CSV
export const exportSubmissionsToCsv = () => {
  const csvContent = responseManager.exportToCsv();
  
  // Create a blob and trigger download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'hyredragon_submissions_export.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
