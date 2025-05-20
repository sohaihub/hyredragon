
// This service is designed to work primarily in a Node.js environment
// For browser environments, the fallback mechanism in lib/api.ts will be used

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Extract spreadsheet ID from the Google Sheets URL
// For "https://docs.google.com/spreadsheets/d/18dTG8BLnnHkdlVIF4wS-BJZuX31dYx6_fc7MmajMP1s/edit?usp=sharing"
let spreadsheetId = '18dTG8BLnnHkdlVIF4wS-BJZuX31dYx6_fc7MmajMP1s';

// Simplified interface for spreadsheet operations
interface SpreadsheetRow {
  [key: string]: any;
}

interface SpreadsheetSheet {
  title: string;
  addRow: (rowData: SpreadsheetRow) => Promise<any>;
}

interface Spreadsheet {
  spreadsheetId: string;
  sheetsByTitle: { [key: string]: SpreadsheetSheet };
  loadInfo: () => Promise<void>;
  addSheet: (options: { title: string, headerValues: string[] }) => Promise<SpreadsheetSheet>;
}

// Mocked functionality for browser environment
const createMockedSpreadsheet = (): Spreadsheet => {
  return {
    spreadsheetId: 'mocked-id',
    sheetsByTitle: {
      ContactUs: {
        title: 'ContactUs',
        addRow: async () => {
          console.log('Mock: Adding row to ContactUs sheet');
          throw new Error('Cannot use Google Sheets in browser environment');
        }
      },
      DemoRequests: {
        title: 'DemoRequests',
        addRow: async () => {
          console.log('Mock: Adding row to DemoRequests sheet');
          throw new Error('Cannot use Google Sheets in browser environment');
        }
      },
      Newsletters: {
        title: 'Newsletters',
        addRow: async () => {
          console.log('Mock: Adding row to Newsletters sheet');
          throw new Error('Cannot use Google Sheets in browser environment');
        }
      }
    },
    loadInfo: async () => {
      console.log('Mock: Loading spreadsheet info');
    },
    addSheet: async (options) => ({ 
      title: options.title, 
      addRow: async () => {
        console.log(`Mock: Adding row to ${options.title} sheet`);
        throw new Error('Cannot use Google Sheets in browser environment');
      }
    })
  };
};

// Create JWT client only in server environment
export const createJwtClient = async () => {
  if (isBrowser) {
    console.warn('Running in browser environment - cannot create JWT client');
    return null;
  }
  
  try {
    const { JWT } = await import('google-auth-library');
    
    // Get service account credentials from environment
    // In a real environment, this would be set in your server's environment variables
    const serviceAccountKeyString = process.env.SERVICE_ACCOUNT_KEY || '{}';
    
    // Parse the service account key
    let serviceAccountCredentials;
    try {
      serviceAccountCredentials = JSON.parse(serviceAccountKeyString);
    } catch (parseError) {
      console.error('Error parsing service account key:', parseError);
      return null;
    }
    
    if (!serviceAccountCredentials.client_email || !serviceAccountCredentials.private_key) {
      console.error('Invalid or missing service account credentials');
      return null;
    }
    
    const client = new JWT({
      email: serviceAccountCredentials.client_email,
      key: serviceAccountCredentials.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    
    await client.authorize();
    return client;
  } catch (error) {
    console.error('Error creating JWT client:', error);
    return null;
  }
};

// Access the spreadsheet
export const getSpreadsheet = async (): Promise<Spreadsheet> => {
  if (isBrowser) {
    console.info('Browser environment detected - using mock implementation');
    return createMockedSpreadsheet();
  }
  
  try {
    const jwtClient = await createJwtClient();
    if (!jwtClient) {
      console.warn('JWT client creation failed - using mock implementation');
      return createMockedSpreadsheet();
    }
    
    try {
      // Dynamic import to prevent browser errors
      const { GoogleSpreadsheet } = await import('google-spreadsheet');
      const doc = new GoogleSpreadsheet(spreadsheetId, jwtClient);
      await doc.loadInfo();
      return doc as unknown as Spreadsheet;
    } catch (importError) {
      console.error('Error importing GoogleSpreadsheet:', importError);
      return createMockedSpreadsheet();
    }
  } catch (error) {
    console.error('Error loading spreadsheet:', error);
    return createMockedSpreadsheet();
  }
};

// Initialize the spreadsheet - create sheets if they don't exist
export const initializeSpreadsheet = async (): Promise<Spreadsheet> => {
  if (isBrowser) {
    console.info('Browser environment detected - using mock implementation');
    return createMockedSpreadsheet();
  }
  
  try {
    // Use the existing spreadsheet ID
    const jwtClient = await createJwtClient();
    if (!jwtClient) {
      console.warn('JWT client creation failed - using mock implementation');
      return createMockedSpreadsheet();
    }
    
    try {
      // Dynamic import to prevent browser errors
      const { GoogleSpreadsheet } = await import('google-spreadsheet');
      
      try {
        // Access the existing spreadsheet
        const doc = new GoogleSpreadsheet(spreadsheetId, jwtClient);
        await doc.loadInfo();
        console.log('Successfully connected to spreadsheet:', doc.title);
        
        // Check if required sheets exist, create them if not
        if (!doc.sheetsByTitle['ContactUs']) {
          const contactSheet = await doc.addSheet({ 
            title: 'ContactUs', 
            headerValues: [
              'name', 'email', 'company', 'plan', 'subject', 'message', 'created_at'
            ]
          });
          console.log('Created ContactUs sheet');
        }
        
        if (!doc.sheetsByTitle['DemoRequests']) {
          const demoSheet = await doc.addSheet({ 
            title: 'DemoRequests', 
            headerValues: [
              'firstName', 'lastName', 'email', 'company', 'phone', 'jobTitle', 'companySize', 
              'preferredDate', 'message', 'created_at'
            ]
          });
          console.log('Created DemoRequests sheet');
        }
        
        if (!doc.sheetsByTitle['Newsletters']) {
          const newsletterSheet = await doc.addSheet({ 
            title: 'Newsletters', 
            headerValues: [
              'email', 'subscribed_at'
            ]
          });
          console.log('Created Newsletters sheet');
        }
        
        return doc as unknown as Spreadsheet;
      } catch (error) {
        console.error('Error accessing spreadsheet:', error);
        return createMockedSpreadsheet();
      }
    } catch (importError) {
      console.error('Error importing GoogleSpreadsheet:', importError);
      return createMockedSpreadsheet();
    }
  } catch (error) {
    console.error('Error initializing spreadsheet:', error);
    return createMockedSpreadsheet();
  }
};

// Add a row to a specific sheet
export const addRowToSheet = async (sheetName: string, rowData: Record<string, any>) => {
  if (isBrowser) {
    console.warn('Cannot add row to Google Sheets in browser environment');
    throw new Error('Cannot add row to Google Sheets in browser environment');
  }
  
  try {
    console.log(`Attempting to add row to ${sheetName} sheet`);
    const doc = await getSpreadsheet();
    const sheet = doc.sheetsByTitle[sheetName];
    
    if (!sheet) {
      console.error(`Sheet ${sheetName} not found`);
      throw new Error(`Sheet ${sheetName} not found`);
    }
    
    const result = await sheet.addRow(rowData);
    console.log(`Successfully added row to ${sheetName} sheet`);
    return result;
  } catch (error) {
    console.error(`Error adding row to ${sheetName}:`, error);
    throw new Error(`Failed to add data to ${sheetName}: ${error.message}`);
  }
};

// Function to check if initialization is complete
let isInitialized = false;
export const ensureInitialized = async () => {
  if (isInitialized) {
    return;
  }

  if (isBrowser) {
    // In browser, just mark as initialized but actual operations will fall back
    console.log('Browser environment detected - skipping Google Sheets initialization');
    isInitialized = true;
    return;
  }
  
  try {
    await initializeSpreadsheet();
    isInitialized = true;
    console.log('Google Sheets service initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Google Sheets service:', error);
    throw new Error('Failed to initialize Google Sheets service');
  }
};
