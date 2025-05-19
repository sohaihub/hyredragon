
// Response manager for storing and retrieving form submissions from localStorage

// Types for our form data
interface FormResponse {
  id: string;
  timestamp: string;
  [key: string]: any;
}

// Define response types
type ResponseType = 'contact' | 'demo' | 'newsletter';

// Storage keys
const STORAGE_KEYS: Record<ResponseType, string> = {
  contact: 'hyredragon_contact_forms',
  demo: 'hyredragon_demo_requests',
  newsletter: 'hyredragon_newsletters',
};

// Initialize storage if needed
const initializeStorage = (): void => {
  Object.values(STORAGE_KEYS).forEach(key => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify([]));
    }
  });
};

// Generate a simple ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
};

// Response manager class
class ResponseManager {
  constructor() {
    // Initialize storage when the manager is created
    initializeStorage();
  }

  // Save a new response
  saveResponse(type: ResponseType, data: any): FormResponse {
    const responses = this.getResponsesByType(type);
    
    const newResponse: FormResponse = {
      id: generateId(),
      ...data,
      timestamp: new Date().toISOString()
    };
    
    responses.push(newResponse);
    localStorage.setItem(STORAGE_KEYS[type], JSON.stringify(responses));
    
    // Dispatch a storage event so other tabs can update
    window.dispatchEvent(new Event('storage'));
    
    return newResponse;
  }

  // Get responses by type
  getResponsesByType(type: ResponseType): FormResponse[] {
    const data = localStorage.getItem(STORAGE_KEYS[type]);
    return data ? JSON.parse(data) : [];
  }

  // Get all responses
  getAllResponses(): Record<ResponseType, FormResponse[]> {
    return {
      contact: this.getResponsesByType('contact'),
      demo: this.getResponsesByType('demo'),
      newsletter: this.getResponsesByType('newsletter')
    };
  }

  // Export all data as CSV
  exportAllDataToCsv(): string {
    const contacts = this.getResponsesByType('contact');
    const demos = this.getResponsesByType('demo');
    const newsletters = this.getResponsesByType('newsletter');
    
    // Prepare CSV data
    let csvContent = "data:text/csv;charset=utf-8,";
    
    // Contact forms section
    csvContent += "CONTACT FORMS\r\n";
    if (contacts.length > 0) {
      const headers = Object.keys(contacts[0]).filter(key => key !== 'id');
      csvContent += headers.join(",") + "\r\n";
      
      contacts.forEach(contact => {
        csvContent += headers.map(header => {
          const value = contact[header];
          return typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : value;
        }).join(",") + "\r\n";
      });
    } else {
      csvContent += "No contact submissions\r\n";
    }
    
    // Demo requests section
    csvContent += "\r\nDEMO REQUESTS\r\n";
    if (demos.length > 0) {
      const headers = Object.keys(demos[0]).filter(key => key !== 'id');
      csvContent += headers.join(",") + "\r\n";
      
      demos.forEach(demo => {
        csvContent += headers.map(header => {
          const value = demo[header];
          return typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : value;
        }).join(",") + "\r\n";
      });
    } else {
      csvContent += "No demo requests\r\n";
    }
    
    // Newsletter subscriptions section
    csvContent += "\r\nNEWSLETTER SUBSCRIPTIONS\r\n";
    if (newsletters.length > 0) {
      const headers = Object.keys(newsletters[0]).filter(key => key !== 'id');
      csvContent += headers.join(",") + "\r\n";
      
      newsletters.forEach(newsletter => {
        csvContent += headers.map(header => {
          const value = newsletter[header];
          return typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : value;
        }).join(",") + "\r\n";
      });
    } else {
      csvContent += "No newsletter subscriptions\r\n";
    }
    
    return csvContent;
  }
}

// Create and export a singleton instance
export const responseManager = new ResponseManager();
