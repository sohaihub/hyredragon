
/**
 * Local storage implementation for handling form submissions
 */

// Type definitions
export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface DemoRequest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  companySize: string;
  preferredDate?: string;
  message?: string;
  createdAt: string;
}

export interface NewsletterSubscription {
  id: string;
  email: string;
  subscribedAt: string;
}

// Key constants for localStorage
const STORAGE_KEYS = {
  CONTACT: 'hyrdragon_contact_submissions',
  DEMO: 'hyrdragon_demo_requests',
  NEWSLETTER: 'hyrdragon_newsletter_subscriptions',
};

// Helper functions
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
};

const getStoredData = (key: string): any[] => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Error retrieving data from ${key}:`, error);
    return [];
  }
};

const storeData = (key: string, data: any[]): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    // Dispatch storage event to notify other tabs
    window.dispatchEvent(new Event('storage'));
  } catch (error) {
    console.error(`Error storing data to ${key}:`, error);
  }
};

// Response manager
export const responseManager = {
  // Contact form methods
  saveContactSubmission: (submission: Omit<ContactSubmission, 'id' | 'createdAt'>): ContactSubmission => {
    const submissions = getStoredData(STORAGE_KEYS.CONTACT);
    const newSubmission = {
      ...submission,
      id: generateId(),
      createdAt: new Date().toISOString(),
    };
    
    submissions.push(newSubmission);
    storeData(STORAGE_KEYS.CONTACT, submissions);
    return newSubmission;
  },
  
  getContactSubmissions: (): ContactSubmission[] => {
    return getStoredData(STORAGE_KEYS.CONTACT);
  },
  
  // Demo request methods
  saveDemoRequest: (request: Omit<DemoRequest, 'id' | 'createdAt'>): DemoRequest => {
    const requests = getStoredData(STORAGE_KEYS.DEMO);
    const newRequest = {
      ...request,
      id: generateId(),
      createdAt: new Date().toISOString(),
    };
    
    requests.push(newRequest);
    storeData(STORAGE_KEYS.DEMO, requests);
    return newRequest;
  },
  
  getDemoRequests: (): DemoRequest[] => {
    return getStoredData(STORAGE_KEYS.DEMO);
  },
  
  // Newsletter subscription methods
  saveNewsletterSubscription: (email: string): NewsletterSubscription => {
    const subscriptions = getStoredData(STORAGE_KEYS.NEWSLETTER);
    
    // Check if email already exists
    if (subscriptions.some((sub: NewsletterSubscription) => sub.email === email)) {
      throw new Error('Email already subscribed');
    }
    
    const newSubscription = {
      id: generateId(),
      email,
      subscribedAt: new Date().toISOString(),
    };
    
    subscriptions.push(newSubscription);
    storeData(STORAGE_KEYS.NEWSLETTER, subscriptions);
    return newSubscription;
  },
  
  getNewsletterSubscriptions: (): NewsletterSubscription[] => {
    return getStoredData(STORAGE_KEYS.NEWSLETTER);
  },
  
  // Admin functions
  getAllSubmissions: () => {
    return {
      contact: getStoredData(STORAGE_KEYS.CONTACT),
      demos: getStoredData(STORAGE_KEYS.DEMO),
      newsletters: getStoredData(STORAGE_KEYS.NEWSLETTER),
    };
  },
  
  // Export to CSV function
  exportToCsv: (): string => {
    const allData = {
      contact: getStoredData(STORAGE_KEYS.CONTACT),
      demos: getStoredData(STORAGE_KEYS.DEMO),
      newsletters: getStoredData(STORAGE_KEYS.NEWSLETTER),
    };
    
    // Convert to CSV
    let csvContent = '';
    
    // Contact submissions
    if (allData.contact.length > 0) {
      csvContent += 'CONTACT SUBMISSIONS\n';
      csvContent += 'ID,Date,Name,Email,Company,Subject,Message\n';
      
      allData.contact.forEach((submission: ContactSubmission) => {
        const date = new Date(submission.createdAt).toLocaleString();
        // Escape and format CSV fields properly
        const row = [
          submission.id,
          date,
          `"${(submission.name || '').replace(/"/g, '""')}"`,
          `"${(submission.email || '').replace(/"/g, '""')}"`,
          `"${(submission.company || '').replace(/"/g, '""')}"`,
          `"${(submission.subject || '').replace(/"/g, '""')}"`,
          `"${(submission.message || '').replace(/"/g, '""')}"`
        ].join(',');
        
        csvContent += row + '\n';
      });
      
      csvContent += '\n';
    }
    
    // Demo requests
    if (allData.demos.length > 0) {
      csvContent += 'DEMO REQUESTS\n';
      csvContent += 'ID,Date,First Name,Last Name,Email,Company,Job Title,Company Size,Preferred Date,Message\n';
      
      allData.demos.forEach((request: DemoRequest) => {
        const date = new Date(request.createdAt).toLocaleString();
        const row = [
          request.id,
          date,
          `"${(request.firstName || '').replace(/"/g, '""')}"`,
          `"${(request.lastName || '').replace(/"/g, '""')}"`,
          `"${(request.email || '').replace(/"/g, '""')}"`,
          `"${(request.company || '').replace(/"/g, '""')}"`,
          `"${(request.jobTitle || '').replace(/"/g, '""')}"`,
          `"${(request.companySize || '').replace(/"/g, '""')}"`,
          `"${(request.preferredDate || '').replace(/"/g, '""')}"`,
          `"${(request.message || '').replace(/"/g, '""')}"`
        ].join(',');
        
        csvContent += row + '\n';
      });
      
      csvContent += '\n';
    }
    
    // Newsletter subscriptions
    if (allData.newsletters.length > 0) {
      csvContent += 'NEWSLETTER SUBSCRIPTIONS\n';
      csvContent += 'ID,Date,Email\n';
      
      allData.newsletters.forEach((subscription: NewsletterSubscription) => {
        const date = new Date(subscription.subscribedAt).toLocaleString();
        const row = [
          subscription.id,
          date,
          `"${(subscription.email || '').replace(/"/g, '""')}"`
        ].join(',');
        
        csvContent += row + '\n';
      });
    }
    
    return csvContent;
  },
  
  // Admin verification - simple password check
  verifyAdmin: (password: string): boolean => {
    // In a real app, this would use hashing and secure comparison
    // For demo purposes, we'll use a simple password
    return password === 'admin123';
  }
};

// Helper functions for other files to use
export const verifyAdmin = (password: string): boolean => {
  return responseManager.verifyAdmin(password);
};

export const getContactSubmissions = (): any => {
  return responseManager.getAllSubmissions();
};

export const exportSubmissionsToCsv = (): void => {
  const csvContent = responseManager.exportToCsv();
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'hyredragon_submissions.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const subscribeToNewsletter = (email: string): void => {
  responseManager.saveNewsletterSubscription(email);
};
