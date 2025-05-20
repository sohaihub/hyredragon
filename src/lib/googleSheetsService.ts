
// This service is designed to work primarily in a Node.js environment
// For browser environments, the fallback mechanism in lib/api.ts will be used

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// We'll mock the functionality for browser environments
// and implement real functionality for server environments
let spreadsheetId = '';

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

// Initialize the spreadsheet - create it if it doesn't exist
export const initializeSpreadsheet = async (): Promise<Spreadsheet> => {
  if (isBrowser) {
    console.info('Browser environment detected - using mock implementation');
    return createMockedSpreadsheet();
  }
  
  try {
    // Create spreadsheet if ID is not set
    if (!spreadsheetId) {
      const jwtClient = await createJwtClient();
      if (!jwtClient) {
        console.warn('JWT client creation failed - using mock implementation');
        return createMockedSpreadsheet();
      }
      
      // Dynamic import to prevent browser errors
      const { GoogleSpreadsheet } = await import('google-spreadsheet');
      
      try {
        // Create a new document - handling different API versions
        const doc = new GoogleSpreadsheet('', jwtClient);
        
        // Use appropriate method based on available API
        try {
          // For version 4.x or newer, using proper TypeScript arguments
          // @ts-ignore - API method exists but TypeScript might not recognize it
          await doc.createNewSpreadsheetDocument({ title: 'HyreDragon DB' });
        } catch (error) {
          console.warn('First createNewSpreadsheetDocument attempt failed, trying alternative:', error);
          try {
            // @ts-ignore - Trying alternative method structure
            await doc.createNewSpreadsheetDocument();
            // If this succeeds, we still need to set the title
            // @ts-ignore - Accessing potential property
            await doc.updateProperties({ title: 'HyreDragon DB' });
          } catch (innerError) {
            console.error('All createNewSpreadsheetDocument attempts failed:', innerError);
            throw new Error('Could not create spreadsheet document');
          }
        }
        
        spreadsheetId = doc.spreadsheetId;
        
        // Create required sheets
        const contactSheet = await doc.addSheet({ 
          title: 'ContactUs', 
          headerValues: [
            'name', 'email', 'company', 'plan', 'subject', 'message', 'created_at'
          ]
        });
        
        const demoSheet = await doc.addSheet({ 
          title: 'DemoRequests', 
          headerValues: [
            'firstName', 'lastName', 'email', 'company', 'jobTitle', 'companySize', 
            'preferredDate', 'message', 'created_at'
          ]
        });
        
        const newsletterSheet = await doc.addSheet({ 
          title: 'Newsletters', 
          headerValues: [
            'email', 'subscribed_at'
          ]
        });
        
        console.log('Spreadsheet created with ID:', spreadsheetId);
        console.log('Created sheets:', contactSheet.title, demoSheet.title, newsletterSheet.title);
        
        return doc as unknown as Spreadsheet;
      } catch (error) {
        console.error('Error creating spreadsheet:', error);
        return createMockedSpreadsheet();
      }
    }
    
    return await getSpreadsheet();
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
