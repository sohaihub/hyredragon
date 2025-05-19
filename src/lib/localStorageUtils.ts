
// Utility functions for managing form submissions in localStorage

// Types for our form data
export interface ContactFormData {
  id: string;
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface DemoRequestData {
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

export interface NewsletterData {
  id: string;
  email: string;
  subscribedAt: string;
}

// Storage keys
const STORAGE_KEYS = {
  CONTACT_FORMS: 'hyredragon_contact_forms',
  DEMO_REQUESTS: 'hyredragon_demo_requests',
  NEWSLETTERS: 'hyredragon_newsletters',
  ADMIN_PASSWORD: 'hyredragon_admin_password',
};

// Default admin password (in a real app, this should be more secure)
const DEFAULT_ADMIN_PASSWORD = 'admin123';

// Initialize storage if needed
export const initializeStorage = (): void => {
  // Set up contact forms
  if (!localStorage.getItem(STORAGE_KEYS.CONTACT_FORMS)) {
    localStorage.setItem(STORAGE_KEYS.CONTACT_FORMS, JSON.stringify([]));
  }

  // Set up demo requests
  if (!localStorage.getItem(STORAGE_KEYS.DEMO_REQUESTS)) {
    localStorage.setItem(STORAGE_KEYS.DEMO_REQUESTS, JSON.stringify([]));
  }

  // Set up newsletters
  if (!localStorage.getItem(STORAGE_KEYS.NEWSLETTERS)) {
    localStorage.setItem(STORAGE_KEYS.NEWSLETTERS, JSON.stringify([]));
  }

  // Set default admin password if not set
  if (!localStorage.getItem(STORAGE_KEYS.ADMIN_PASSWORD)) {
    localStorage.setItem(STORAGE_KEYS.ADMIN_PASSWORD, DEFAULT_ADMIN_PASSWORD);
  }
};

// Generate a simple ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
};

// Contact form functions
export const saveContactForm = (formData: Omit<ContactFormData, 'id' | 'createdAt'>): ContactFormData => {
  const submissions: ContactFormData[] = getContactForms();
  
  const newSubmission: ContactFormData = {
    id: generateId(),
    ...formData,
    createdAt: new Date().toISOString()
  };
  
  submissions.push(newSubmission);
  localStorage.setItem(STORAGE_KEYS.CONTACT_FORMS, JSON.stringify(submissions));
  
  return newSubmission;
};

export const getContactForms = (): ContactFormData[] => {
  const data = localStorage.getItem(STORAGE_KEYS.CONTACT_FORMS);
  return data ? JSON.parse(data) : [];
};

// Demo request functions
export const saveDemoRequest = (formData: Omit<DemoRequestData, 'id' | 'createdAt'>): DemoRequestData => {
  const submissions: DemoRequestData[] = getDemoRequests();
  
  const newSubmission: DemoRequestData = {
    id: generateId(),
    ...formData,
    createdAt: new Date().toISOString()
  };
  
  submissions.push(newSubmission);
  localStorage.setItem(STORAGE_KEYS.DEMO_REQUESTS, JSON.stringify(submissions));
  
  return newSubmission;
};

export const getDemoRequests = (): DemoRequestData[] => {
  const data = localStorage.getItem(STORAGE_KEYS.DEMO_REQUESTS);
  return data ? JSON.parse(data) : [];
};

// Newsletter functions
export const saveNewsletter = (email: string): NewsletterData => {
  const subscriptions: NewsletterData[] = getNewsletters();
  
  // Check for existing subscription
  const existing = subscriptions.find(sub => sub.email.toLowerCase() === email.toLowerCase());
  if (existing) {
    return existing;
  }
  
  const newSubscription: NewsletterData = {
    id: generateId(),
    email,
    subscribedAt: new Date().toISOString()
  };
  
  subscriptions.push(newSubscription);
  localStorage.setItem(STORAGE_KEYS.NEWSLETTERS, JSON.stringify(subscriptions));
  
  return newSubscription;
};

export const getNewsletters = (): NewsletterData[] => {
  const data = localStorage.getItem(STORAGE_KEYS.NEWSLETTERS);
  return data ? JSON.parse(data) : [];
};

// Admin functions
export const verifyAdminPassword = (password: string): boolean => {
  const storedPassword = localStorage.getItem(STORAGE_KEYS.ADMIN_PASSWORD);
  return password === storedPassword;
};

export const changeAdminPassword = (newPassword: string): void => {
  localStorage.setItem(STORAGE_KEYS.ADMIN_PASSWORD, newPassword);
};

// Export all data as CSV
export const exportAllDataToCsv = (): string => {
  const contacts = getContactForms();
  const demos = getDemoRequests();
  const newsletters = getNewsletters();
  
  // Prepare CSV data
  let csvContent = "data:text/csv;charset=utf-8,";
  
  // Contact forms section
  csvContent += "CONTACT FORMS\r\n";
  csvContent += "ID,Name,Email,Company,Subject,Message,Created At\r\n";
  
  contacts.forEach(contact => {
    csvContent += `${contact.id},${contact.name},"${contact.email}","${contact.company || ''}","${contact.subject}","${contact.message.replace(/"/g, '""')}",${contact.createdAt}\r\n`;
  });
  
  // Add a blank line between sections
  csvContent += "\r\n";
  
  // Demo requests section
  csvContent += "DEMO REQUESTS\r\n";
  csvContent += "ID,First Name,Last Name,Email,Company,Job Title,Company Size,Preferred Date,Message,Created At\r\n";
  
  demos.forEach(demo => {
    csvContent += `${demo.id},"${demo.firstName}","${demo.lastName}","${demo.email}","${demo.company}","${demo.jobTitle}","${demo.companySize}","${demo.preferredDate || ''}","${(demo.message || '').replace(/"/g, '""')}",${demo.createdAt}\r\n`;
  });
  
  // Add a blank line between sections
  csvContent += "\r\n";
  
  // Newsletter subscriptions section
  csvContent += "NEWSLETTER SUBSCRIPTIONS\r\n";
  csvContent += "ID,Email,Subscribed At\r\n";
  
  newsletters.forEach(newsletter => {
    csvContent += `${newsletter.id},"${newsletter.email}",${newsletter.subscribedAt}\r\n`;
  });
  
  return csvContent;
};

// Helper function to download CSV
export const downloadCsv = (filename = 'hyredragon-submissions.csv'): void => {
  const csvContent = exportAllDataToCsv();
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Initialize storage on module import
initializeStorage();
