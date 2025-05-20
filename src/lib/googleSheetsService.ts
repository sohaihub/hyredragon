
import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';

// Service account credentials
const serviceAccountCredentials = JSON.parse(process.env.SERVICE_ACCOUNT_KEY || '{}');

// Spreadsheet ID (will be set after creation)
let spreadsheetId = '';

// Create a JWT auth client
const createJwtClient = async () => {
  try {
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
    // Create spreadsheet if ID is not set
    if (!spreadsheetId) {
      const jwtClient = await createJwtClient();
      
      // Create new spreadsheet - using the correct method
      const doc = new GoogleSpreadsheet(undefined, jwtClient);
      try {
        // For version 4.x of google-spreadsheet
        await doc.createNewSpreadsheet({ title: 'HyreDragon DB' });
      } catch (e) {
        // For version 3.x of google-spreadsheet - fallback
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
  if (!isInitialized) {
    await initializeSpreadsheet();
    isInitialized = true;
  }
};
