
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, Building2, SendIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from '@/lib/utils';
import { submitDemoRequest } from '@/lib/api';

interface DemoRequestFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  companySize: string;
  preferredDate: string;
  message: string;
}

const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501-1000 employees",
  "1000+ employees"
];

const RequestDemo: React.FC = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  
  // Form state with required fields initialized
  const [formData, setFormData] = useState<DemoRequestFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    companySize: '',
    preferredDate: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle company size selection
  const handleCompanySizeChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      companySize: value
    }));
    
    if (errors.companySize) {
      setErrors(prev => ({
        ...prev,
        companySize: ''
      }));
    }
  };

  // Handle date selection
  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    
    if (selectedDate) {
      setFormData(prev => ({
        ...prev,
        preferredDate: format(selectedDate, 'PPP')
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        preferredDate: ''
      }));
    }
  };

  // Validate form data
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!formData.companySize) newErrors.companySize = 'Company size is required';
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Validate phone format (optional field)
    const phoneRegex = /^\+?[\d\s-()]{8,}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await submitDemoRequest(formData);
      
      // Trigger a custom event to notify other tabs
      const event = new Event('storage');
      window.dispatchEvent(event);
      
      toast({
        title: "Demo request submitted!",
        description: "We'll contact you soon to schedule your demo.",
      });
      
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error submitting demo request:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#E2FF55]/20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>

      <Header />

      <main className="flex-grow relative z-10 py-12 md:py-20">
        <div className="container mx-auto px-4 pt-8 md:pt-12">
          {!formSubmitted ? (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  Request a <span className="text-[#E2FF55]">Demo</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Experience the power of our platform firsthand. Fill out the form below to schedule a personalized demo.
                </p>
              </div>

              <div className="bg-[#0A0A29]/60 border border-gray-800 rounded-2xl p-6 md:p-10 backdrop-blur-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white">
                        First Name <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Your first name"
                        className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                        aria-invalid={!!errors.firstName}
                        aria-describedby={errors.firstName ? "firstName-error" : undefined}
                      />
                      {errors.firstName && (
                        <p id="firstName-error" className="text-red-400 text-sm mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white">
                        Last Name <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Your last name"
                        className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                        aria-invalid={!!errors.lastName}
                        aria-describedby={errors.lastName ? "lastName-error" : undefined}
                      />
                      {errors.lastName && (
                        <p id="lastName-error" className="text-red-400 text-sm mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-400 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-red-400 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">
                        Company <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                        aria-invalid={!!errors.company}
                        aria-describedby={errors.company ? "company-error" : undefined}
                      />
                      {errors.company && (
                        <p id="company-error" className="text-red-400 text-sm mt-1">
                          {errors.company}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="jobTitle" className="text-white">
                        Job Title <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        placeholder="Your position"
                        className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                        aria-invalid={!!errors.jobTitle}
                        aria-describedby={errors.jobTitle ? "jobTitle-error" : undefined}
                      />
                      {errors.jobTitle && (
                        <p id="jobTitle-error" className="text-red-400 text-sm mt-1">
                          {errors.jobTitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companySize" className="text-white">
                        Company Size <span className="text-red-400">*</span>
                      </Label>
                      <Select value={formData.companySize} onValueChange={handleCompanySizeChange}>
                        <SelectTrigger 
                          id="companySize"
                          className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                          aria-invalid={!!errors.companySize}
                          aria-describedby={errors.companySize ? "companySize-error" : undefined}
                        >
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#080820] border-gray-800 text-white">
                          {companySizes.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.companySize && (
                        <p id="companySize-error" className="text-red-400 text-sm mt-1">
                          {errors.companySize}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredDate" className="text-white">
                        Preferred Demo Date
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal bg-[#080820] border-gray-800 hover:bg-[#080820]/70 text-white",
                              !date && "text-gray-400"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 text-[#E2FF55]" />
                            {date ? format(date, "PPP") : "Select a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-[#080820] border-gray-800 text-white">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={handleDateSelect}
                            initialFocus
                            disabled={(date) => 
                              date < new Date(new Date().setHours(0, 0, 0, 0)) || 
                              date > new Date(new Date().setMonth(new Date().getMonth() + 3))
                            }
                            className="bg-[#080820] text-white"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Additional Information
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your specific requirements or questions"
                      rows={4}
                      className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] resize-none text-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 w-full md:w-auto px-8 transition-colors flex items-center gap-2"
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#0A0A29] border-t-transparent"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <SendIcon className="h-4 w-4" />
                        <span>Request Demo</span>
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          ) : (
            <div className="text-center text-white py-24">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E2FF55]/20 text-[#E2FF55]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-6">Thanks for your interest!</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Thanks for your interest! Your demo request has been received. One of our representatives will contact you soon to schedule a personalized demo at your preferred time.
              </p>
              <Button 
                onClick={() => setFormSubmitted(false)}
                className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90"
              >
                Request another demo
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RequestDemo;
