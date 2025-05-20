
// This service is designed to work primarily in a Node.js environment
// For browser environments, the fallback mechanism in lib/api.ts will be used
import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Service account credentials
const serviceAccountCredentials = isBrowser 
  ? { client_email: '', private_key: '' } 
  : JSON.parse(process.env.SERVICE_ACCOUNT_KEY || '{}');

// Spreadsheet ID (will be set after creation)
let spreadsheetId = '';

// Create a JWT auth client
const createJwtClient = async () => {
  try {
    if (isBrowser) {
      console.warn('Running in browser environment - Google Sheets API may not function properly');
      throw new Error('Google Sheets API requires a server environment');
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
    throw new Error('Failed to authenticate with Google Sheets API');
  }
};

// Access the spreadsheet
export const getSpreadsheet = async () => {
  try {
    if (isBrowser) {
      throw new Error('Google Sheets API requires a server environment');
    }
    
    const jwtClient = await createJwtClient();
    const doc = new GoogleSpreadsheet(spreadsheetId, jwtClient);
    await doc.loadInfo();
    return doc;
  } catch (error) {
    console.error('Error loading spreadsheet:', error);
    throw new Error('Failed to access Google Spreadsheet');
  }
};

// Initialize the spreadsheet - create it if it doesn't exist
export const initializeSpreadsheet = async () => {
  try {
    if (isBrowser) {
      throw new Error('Google Sheets API requires a server environment');
    }
    
    // Create spreadsheet if ID is not set
    if (!spreadsheetId) {
      const jwtClient = await createJwtClient();
      
      // Create new spreadsheet
      const doc = new GoogleSpreadsheet(undefined, jwtClient);
      
      // Different versions of the library have different methods
      if (typeof doc.createNewSpreadsheet === 'function') {
        // For version 4.x
        await doc.createNewSpreadsheet({ title: 'HyreDragon DB' });
      } else {
        // For version 3.x - fallback
        // @ts-ignore - older API method
        await doc.useServiceAccountAuth(jwtClient);
        // @ts-ignore - older API method
        await doc.createNewSpreadsheetDocument({ title: 'HyreDragon DB' });
      }
      
      spreadsheetId = doc.spreadsheetId;
      
      // Create required sheets
      const contactSheet = await doc.addSheet({ title: 'ContactUs', headerValues: [
        'name', 'email', 'company', 'plan', 'subject', 'message', 'created_at'
      ]});
      
      const demoSheet = await doc.addSheet({ title: 'DemoRequests', headerValues: [
        'firstName', 'lastName', 'email', 'company', 'jobTitle', 'companySize', 'preferredDate', 'message', 'created_at'
      ]});
      
      const newsletterSheet = await doc.addSheet({ title: 'Newsletters', headerValues: [
        'email', 'subscribed_at'
      ]});
      
      console.log('Spreadsheet created with ID:', spreadsheetId);
      console.log('Created sheets:', contactSheet.title, demoSheet.title, newsletterSheet.title);
      
      return doc;
    }
    
    return await getSpreadsheet();
  } catch (error) {
    console.error('Error initializing spreadsheet:', error);
    throw new Error('Failed to initialize Google Spreadsheet');
  }
};

// Add a row to a specific sheet
export const addRowToSheet = async (sheetName: string, rowData: Record<string, any>) => {
  try {
    if (isBrowser) {
      throw new Error('Google Sheets API requires a server environment');
    }
    
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
