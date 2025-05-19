
// This file would be used on the server side in a real implementation
// For a frontend-only app, we must use client-side code with caution regarding credentials

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  plan: string;
  subject: string;
  message: string;
}

// In a real implementation, these would be environment variables
// ⚠️ WARNING: Do not include actual credentials in frontend code
// This is a placeholder showing how the service would be implemented
export const appendToGoogleSheet = async (data: ContactFormData): Promise<boolean> => {
  try {
    // Get credentials from environment
    const credentials = process.env.GOOGLE_SHEETS_CREDENTIALS;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!credentials || !sheetId) {
      throw new Error('Missing Google Sheets credentials or sheet ID');
    }

    const parsedCredentials = JSON.parse(credentials);
    
    // Create JWT client
    const serviceAccountAuth = new JWT({
      email: parsedCredentials.client_email,
      key: parsedCredentials.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Initialize the sheet
    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
    await doc.loadInfo();
    
    // Get the first sheet
    const sheet = doc.sheetsByIndex[0];
    
    // Append the data
    await sheet.addRow({
      Name: data.name,
      Email: data.email,
      Company: data.company || '',
      Plan: data.plan,
      Subject: data.subject,
      Message: data.message,
    });

    return true;
  } catch (error) {
    console.error('Error appending to Google Sheet:', error);
    return false;
  }
};

export const getSheetData = async (): Promise<ContactFormData[]> => {
  try {
    // Get credentials from environment
    const credentials = process.env.GOOGLE_SHEETS_CREDENTIALS;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!credentials || !sheetId) {
      throw new Error('Missing Google Sheets credentials or sheet ID');
    }

    const parsedCredentials = JSON.parse(credentials);
    
    // Create JWT client
    const serviceAccountAuth = new JWT({
      email: parsedCredentials.client_email,
      key: parsedCredentials.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Initialize the sheet
    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
    await doc.loadInfo();
    
    // Get the first sheet
    const sheet = doc.sheetsByIndex[0];
    
    // Get rows
    const rows = await sheet.getRows();
    
    return rows.map(row => ({
      name: row.Name,
      email: row.Email,
      company: row.Company,
      plan: row.Plan,
      subject: row.Subject,
      message: row.Message,
    }));
  } catch (error) {
    console.error('Error getting sheet data:', error);
    return [];
  }
};
