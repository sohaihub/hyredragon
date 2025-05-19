
// Type definitions for the application

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  plan: string;
  subject: string;
  message: string;
}

export interface DemoRequestData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  companySize: string;
  message?: string;
}

export interface Submission extends ContactFormData {
  id?: string;
  created_at?: string;
}

export interface DemoSubmission extends DemoRequestData {
  id?: string;
  created_at?: string;
}
