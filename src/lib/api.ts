
// Import the response manager for local storage fallback
import { responseManager } from './responses';
import { ensureInitialized, addRowToSheet } from './googleSheetsService';

// Contact form submission
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  company?: string;
  plan?: string;
  subject: string;
  message: string;
}) => {
  try {
    console.log("Attempting to submit contact form to Google Sheets");
    
    // Initialize Google Sheets connection if needed
    await ensureInitialized();
    
    // Add the row to the ContactUs sheet
    await addRowToSheet('ContactUs', {
      name: formData.name,
      email: formData.email,
      company: formData.company || '',
      plan: formData.plan || '',
      subject: formData.subject,
      message: formData.message,
      created_at: new Date().toISOString()
    });
    
    console.log("Successfully submitted contact form to Google Sheets");
    
    // Success! Return true
    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form to Google Sheets:', error);
    
    // Fallback to localStorage
    try {
      responseManager.saveContactSubmission(formData);
      console.info('Contact form saved to localStorage as fallback');
      return { success: true, usedFallback: true };
    } catch (fallbackError) {
      console.error('Fallback to localStorage failed:', fallbackError);
      throw new Error('Failed to submit contact form');
    }
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
    // Initialize Google Sheets connection if needed
    await ensureInitialized();
    
    // Add the row to the DemoRequests sheet
    await addRowToSheet('DemoRequests', {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      company: formData.company,
      jobTitle: formData.jobTitle,
      companySize: formData.companySize,
      preferredDate: formData.preferredDate || '',
      message: formData.message || '',
      created_at: new Date().toISOString()
    });
    
    // Success! Return true
    return { success: true };
  } catch (error) {
    console.error('Error submitting demo request to Google Sheets:', error);
    
    // Fallback to localStorage
    try {
      responseManager.saveDemoRequest(formData);
      console.info('Demo request saved to localStorage as fallback');
      return { success: true, usedFallback: true };
    } catch (fallbackError) {
      console.error('Fallback to localStorage failed:', fallbackError);
      throw new Error('Failed to submit demo request');
    }
  }
};

// Newsletter subscription
export const subscribeToNewsletter = async (email: string) => {
  try {
    // Initialize Google Sheets connection if needed
    await ensureInitialized();
    
    // Add the row to the Newsletters sheet
    await addRowToSheet('Newsletters', {
      email: email,
      subscribed_at: new Date().toISOString()
    });
    
    // Success! Return true
    return { success: true };
  } catch (error) {
    console.error('Error subscribing to newsletter via Google Sheets:', error);
    
    // Fallback to localStorage
    try {
      responseManager.saveNewsletterSubscription(email);
      console.info('Newsletter subscription saved to localStorage as fallback');
      return { success: true, usedFallback: true };
    } catch (fallbackError) {
      console.error('Fallback to localStorage failed:', fallbackError);
      throw new Error('Failed to subscribe to newsletter');
    }
  }
};

// Admin verification
export const verifyAdmin = (password: string) => {
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Hyredragon@123';
  return password === ADMIN_PASSWORD;
};

// Get all contact submissions for admin
export const getContactSubmissions = async (password: string) => {
  if (!verifyAdmin(password)) {
    throw new Error('Unauthorized access');
  }
  
  try {
    // Try to get data from Google Sheets
    // Initialize Google Sheets connection if needed
    await ensureInitialized();
    
    // For now, fall back to local storage
    return responseManager.getAllSubmissions();
  } catch (error) {
    console.error('Error getting submissions from Google Sheets:', error);
    // Fallback to localStorage
    return responseManager.getAllSubmissions();
  }
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
