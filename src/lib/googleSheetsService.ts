
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
        addRow: async () => ({ success: true, mocked: true })
      },
      DemoRequests: {
        title: 'DemoRequests',
        addRow: async () => ({ success: true, mocked: true })
      },
      Newsletters: {
        title: 'Newsletters',
        addRow: async () => ({ success: true, mocked: true })
      }
    },
    loadInfo: async () => {},
    addSheet: async (options) => ({ 
      title: options.title, 
      addRow: async () => ({ success: true, mocked: true }) 
    })
  };
};

// Safely try to create a JWT client
export const createJwtClient = async () => {
  if (isBrowser) {
    console.warn('Running in browser environment - using mock implementation');
    return null;
  }
  
  try {
    // In a Node.js environment, we would import and use the actual library
    // We're importing dynamically to prevent browser errors
    const { JWT } = await import('google-auth-library');
    const serviceAccountCredentials = JSON.parse(process.env.SERVICE_ACCOUNT_KEY || '{}');
    
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
    
    // Dynamic import to prevent browser errors
    const { GoogleSpreadsheet } = await import('google-spreadsheet');
    const doc = new GoogleSpreadsheet(spreadsheetId, jwtClient);
    await doc.loadInfo();
    return doc as unknown as Spreadsheet;
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
  } catch (error) {
    console.error('Error initializing spreadsheet:', error);
    return createMockedSpreadsheet();
  }
};

// Add a row to a specific sheet
export const addRowToSheet = async (sheetName: string, rowData: Record<string, any>) => {
  try {
    const doc = await getSpreadsheet();
    const sheet = doc.sheetsByTitle[sheetName];
    
    if (!sheet) {
      throw new Error(`Sheet ${sheetName} not found`);
    }
    
    const result = await sheet.addRow(rowData);
    return result;
  } catch (error) {
    console.error(`Error adding row to ${sheetName}:`, error);
    throw new Error(`Failed to add data to ${sheetName}`);
  }
};

// Function to check if initialization is complete
let isInitialized = false;
export const ensureInitialized = async () => {
  if (isBrowser) {
    // In browser, just mark as initialized but actual operations will fall back
    isInitialized = true;
    return;
  }
  
  if (!isInitialized) {
    await initializeSpreadsheet();
    isInitialized = true;
  }
};
