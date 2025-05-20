
// Import the response manager for local storage fallback
import { responseManager } from './responses';
import { ensureInitialized, addRowToSheet } from './googleSheetsService';

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Safely try to use the Google Sheets functionality with robust fallback
const safelyExecuteServerOperation = async (operation: () => Promise<any>, fallbackFn: () => void) => {
  try {
    if (isBrowser) {
      // In browser environments, try Google Sheets but be prepared to fall back
      console.info('Running in browser - attempting to use Google Sheets API with fallbacks');
    }
    
    // Try to ensure the sheet service is initialized
    await ensureInitialized();
    
    // Try the server operation (Google Sheets) first
    await operation();
    console.log('Successfully executed Google Sheets operation');
    return { success: true, usedFallback: false };
  } catch (error) {
    console.info('Using localStorage fallback for data storage:', error);
    fallbackFn();
    return { success: true, usedFallback: true };
  }
};

// Contact form submission
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  company?: string;
  plan?: string;
  subject: string;
  message: string;
}) => {
  console.log("Attempting to submit contact form data");
  
  return safelyExecuteServerOperation(
    // Google Sheets operation
    async () => {
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
    },
    // Fallback operation
    () => {
      responseManager.saveContactSubmission(formData);
      console.info('Contact form saved to localStorage as fallback');
    }
  );
};

// Demo request submission
export const submitDemoRequest = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone?: string;
  jobTitle: string;
  companySize: string;
  preferredDate?: string;
  message?: string;
}) => {
  console.log("Attempting to submit demo request");
  
  return safelyExecuteServerOperation(
    // Google Sheets operation
    async () => {
      await addRowToSheet('DemoRequests', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || '',
        company: formData.company,
        jobTitle: formData.jobTitle,
        companySize: formData.companySize,
        preferredDate: formData.preferredDate || '',
        message: formData.message || '',
        created_at: new Date().toISOString()
      });
      console.log("Successfully submitted demo request to Google Sheets");
    },
    // Fallback operation
    () => {
      responseManager.saveDemoRequest(formData);
      console.info('Demo request saved to localStorage as fallback');
    }
  );
};

// Newsletter subscription
export const subscribeToNewsletter = async (email: string) => {
  console.log("Attempting to subscribe to newsletter");
  
  return safelyExecuteServerOperation(
    // Google Sheets operation
    async () => {
      await addRowToSheet('Newsletters', {
        email: email,
        subscribed_at: new Date().toISOString()
      });
      console.log("Successfully subscribed to newsletter via Google Sheets");
    },
    // Fallback operation
    () => {
      responseManager.saveNewsletterSubscription(email);
      console.info('Newsletter subscription saved to localStorage as fallback');
    }
  );
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
  
  // For now, always fall back to local storage
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
