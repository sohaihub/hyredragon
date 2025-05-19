
// Type definitions for the application

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  plan: string;
  subject: string;
  message: string;
}

export interface Submission extends ContactFormData {
  id?: string;
  created_at?: string;
}
