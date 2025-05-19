
// This file would be used on the server side in a real implementation
// For a frontend-only app, we must use client-side code with caution regarding credentials

import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';
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
// This version uses the credentials directly for demo purposes
export const appendToGoogleSheet = async (data: ContactFormData): Promise<boolean> => {
  try {
    // Get credentials from .env file
    const sheetId = "18dTG8BLnnHkdlVIF4wS-BJZuX31dYx6_fc7MmajMP1s";
    
    // Parse the credentials (in a production app, this would come from env variables)
    const credentialsObj = {
      "type": "service_account",
      "project_id": "deep-byte-452408-k6",
      "private_key_id": "799fbef3f222294be309836674be0fbd7deb52ff",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC/nuLQ9CfnoGmB\n4tvdc6v0prxR8o1tQCwmsPpxgcJ6OQlbzsafqu/2bi2DuoEeDQRX0BSUGnLrz85J\nnUsBIa0uk+sqxZMJ653OvhSvcOr+tn4M0hUwLOXp3LR5KbAA3WJVwkWMKV2+DdnD\n9nEYE3v3z1RF+PepJMzBTMY6TUXXw4DUPKif+hN0kXXjlRvyUKyz+P0GUhNiBzev\nlp9O3H6fNB76lJoSNgutZ2SFuHeUSYZ2FJNOXyVuIbToxtTAQgxukZxfdKoSutzy\nQSepnqcyjZGN8UWnDneEh5wmBiRNnSldwc7L7L17UcBpWBTy2KBZKODHVuAvk1WK\nX5jfGBDpAgMBAAECggEAAtbGbF5wEy5qALERYXHZtnMcN+QP1owINyjNFzk496He\n5ezQTyJI52NVXX71t+UXz0eETXeyLqXhW/fqQHbwoa2H0fyjttJHZn49lgP3kGXJ\nkQiX6Oc+uKWDayBEFoUPBWj7VLvpoLy3dndKv3SaLbA5cccESFIE44RmYBzSGqX+\nW2Zj7FoXUDZ/LioxTmWiOFnhWUG4doQcAk/hc8wByiESnaqC+51Q4ekUcr7qhD1f\nQCy3vCSMUVwqhPf22qi/icCpHYjk/SphnM1ni8dUseXnIyZO1GwuVKi8SokEJwaA\nQ4BWvmwlkSTArkXhsbjyFaNcJmTMzShgXoF9Y7ob+QKBgQD4nk3xSQZV+eeZA6LR\n4gZcLxaVelDF8U0zBqneyBB1TEHy8fIvYivdP8KifWQnOaPRLXDz/mks1g6cyvC+\n/X5deViLA5Qgw3PDyRNG3WbmtT+mk4lng3pHltoMMGSb+21JHVTDLqEx/4P2L+Qd\nJ01OfL7177xN+55WLOknQHPP/QKBgQDFT1qY+1rLXSqrMdzBoAG8EWCLuChltpo5\nPpq2SzsFZRGqt+nl8rondfnpaDHht/dtEu6lqwXafcZeB1VPXPm3PshvJGJKzsM9\n1KxibrSd861aAcRxPdPGhriNYiY7s2ZnFYdWYSqtvmOcGH0OG6ZMcVlxKz+PCpzu\nAzK2Tl4qXQKBgQCSDFTXMEHDkenGToeAahm4X4URzGfU0Bq8peZ2U+qvLVv0fsL5\nqN8Buun4kFacYFTmlZ4sB0D7sMemveTNHZb1DErCZxjGYmsIEX/8eiVv0/uPPE5U\ne70CfxCaZndD1mBtughIHIVfHK4Fmj6UDblxKQD48psY6H4sO3e/sjIWdQKBgHGC\n2IUgPbi3LZ/1fKHr8nOGr7tRw/PYHFuId6seFqNg5MwJKEfA33VqOs8bwW6wzmhy\nttaaUDDFoQRhRaP1wje4p8jA7sdIsiv1GQM72y7vjDA2yhO31QjmYm/8IjDAYc42\nJXj9R3dTC602rWMbZw2dPC6OCe+51FRdhKQ665OFAoGBANy0ShaQ5b3LhGYdUAvX\nJaZEC/NWvFQE5WValvuK8uWrktEI8B/cIkF8dAraquWLRel3AdHqi8hAZJoUAn6Q\n1TU4r/dKIKMB1G6/LJ5VI5W/auiGknmS3q+bG4gFufOIbXGQj2okJFGhmtLYao1L\nuEhCN58YwM4jgr1UVxf9ZGZd\n-----END PRIVATE KEY-----\n",
      "client_email": "contact-form@deep-byte-452408-k6.iam.gserviceaccount.com",
      "client_id": "110588157820069017463",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/contact-form%40deep-byte-452408-k6.iam.gserviceaccount.com",
      "universe_domain": "googleapis.com"
    };
    
    // Create JWT client
    const serviceAccountAuth = new JWT({
      email: credentialsObj.client_email,
      key: credentialsObj.private_key,
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
    // Get credentials for demo
    const sheetId = "18dTG8BLnnHkdlVIF4wS-BJZuX31dYx6_fc7MmajMP1s";
    
    // Parse the credentials (in a production app, this would come from env variables)
    const credentialsObj = {
      "type": "service_account",
      "project_id": "deep-byte-452408-k6",
      "private_key_id": "799fbef3f222294be309836674be0fbd7deb52ff",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC/nuLQ9CfnoGmB\n4tvdc6v0prxR8o1tQCwmsPpxgcJ6OQlbzsafqu/2bi2DuoEeDQRX0BSUGnLrz85J\nnUsBIa0uk+sqxZMJ653OvhSvcOr+tn4M0hUwLOXp3LR5KbAA3WJVwkWMKV2+DdnD\n9nEYE3v3z1RF+PepJMzBTMY6TUXXw4DUPKif+hN0kXXjlRvyUKyz+P0GUhNiBzev\nlp9O3H6fNB76lJoSNgutZ2SFuHeUSYZ2FJNOXyVuIbToxtTAQgxukZxfdKoSutzy\nQSepnqcyjZGN8UWnDneEh5wmBiRNnSldwc7L7L17UcBpWBTy2KBZKODHVuAvk1WK\nX5jfGBDpAgMBAAECggEAAtbGbF5wEy5qALERYXHZtnMcN+QP1owINyjNFzk496He\n5ezQTyJI52NVXX71t+UXz0eETXeyLqXhW/fqQHbwoa2H0fyjttJHZn49lgP3kGXJ\nkQiX6Oc+uKWDayBEFoUPBWj7VLvpoLy3dndKv3SaLbA5cccESFIE44RmYBzSGqX+\nW2Zj7FoXUDZ/LioxTmWiOFnhWUG4doQcAk/hc8wByiESnaqC+51Q4ekUcr7qhD1f\nQCy3vCSMUVwqhPf22qi/icCpHYjk/SphnM1ni8dUseXnIyZO1GwuVKi8SokEJwaA\nQ4BWvmwlkSTArkXhsbjyFaNcJmTMzShgXoF9Y7ob+QKBgQD4nk3xSQZV+eeZA6LR\n4gZcLxaVelDF8U0zBqneyBB1TEHy8fIvYivdP8KifWQnOaPRLXDz/mks1g6cyvC+\n/X5deViLA5Qgw3PDyRNG3WbmtT+mk4lng3pHltoMMGSb+21JHVTDLqEx/4P2L+Qd\nJ01OfL7177xN+55WLOknQHPP/QKBgQDFT1qY+1rLXSqrMdzBoAG8EWCLuChltpo5\nPpq2SzsFZRGqt+nl8rondfnpaDHht/dtEu6lqwXafcZeB1VPXPm3PshvJGJKzsM9\n1KxibrSd861aAcRxPdPGhriNYiY7s2ZnFYdWYSqtvmOcGH0OG6ZMcVlxKz+PCpzu\nAzK2Tl4qXQKBgQCSDFTXMEHDkenGToeAahm4X4URzGfU0Bq8peZ2U+qvLVv0fsL5\nqN8Buun4kFacYFTmlZ4sB0D7sMemveTNHZb1DErCZxjGYmsIEX/8eiVv0/uPPE5U\ne70CfxCaZndD1mBtughIHIVfHK4Fmj6UDblxKQD48psY6H4sO3e/sjIWdQKBgHGC\n2IUgPbi3LZ/1fKHr8nOGr7tRw/PYHFuId6seFqNg5MwJKEfA33VqOs8bwW6wzmhy\nttaaUDDFoQRhRaP1wje4p8jA7sdIsiv1GQM72y7vjDA2yhO31QjmYm/8IjDAYc42\nJXj9R3dTC602rWMbZw2dPC6OCe+51FRdhKQ665OFAoGBANy0ShaQ5b3LhGYdUAvX\nJaZEC/NWvFQE5WValvuK8uWrktEI8B/cIkF8dAraquWLRel3AdHqi8hAZJoUAn6Q\n1TU4r/dKIKMB1G6/LJ5VI5W/auiGknmS3q+bG4gFufOIbXGQj2okJFGhmtLYao1L\nuEhCN58YwM4jgr1UVxf9ZGZd\n-----END PRIVATE KEY-----\n",
      "client_email": "contact-form@deep-byte-452408-k6.iam.gserviceaccount.com",
      "client_id": "110588157820069017463",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/contact-form%40deep-byte-452408-k6.iam.gserviceaccount.com",
      "universe_domain": "googleapis.com"
    };
    
    // Create JWT client
    const serviceAccountAuth = new JWT({
      email: credentialsObj.client_email,
      key: credentialsObj.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Initialize the sheet
    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
    await doc.loadInfo();
    
    // Get the first sheet
    const sheet = doc.sheetsByIndex[0];
    
    // Get rows
    const rows = await sheet.getRows();
    
    // Correctly access row values using the array-like notation
    return rows.map(row => ({
      name: row.get('Name') || '',
      email: row.get('Email') || '',
      company: row.get('Company') || '',
      plan: row.get('Plan') || '',
      subject: row.get('Subject') || '',
      message: row.get('Message') || '',
    }));
  } catch (error) {
    console.error('Error getting sheet data:', error);
    return [];
  }
};
