
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitContactForm } from '@/lib/api';

const pricingPlans = [
  { id: 1, name: "Free", price: 0 },
  { id: 2, name: "Basic", price: 9999 },
  { id: 3, name: "Standard", price: 19999 },
  { id: 4, name: "Professional", price: 29999 },
  { id: 5, name: "Enterprise", price: 49999 }
];

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  plan: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Form state with all required fields initialized
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    plan: 'Free',
    subject: '',
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

  // Handle plan selection
  const handlePlanChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      plan: value
    }));
  };

  // Validate form data
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
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
      // Submit form data to localStorage
      await submitContactForm(formData);
      
      // Trigger a custom event to notify other tabs
      const event = new Event('storage');
      window.dispatchEvent(event);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Show success state
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
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
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  Get in <span className="text-[#E2FF55]">Touch</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Have questions about our services? We'd love to hear from you.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Contact Form */}
                <div className="lg:col-span-3 bg-[#0A0A29]/60 border border-gray-800 rounded-2xl p-6 md:p-10 backdrop-blur-lg">
                  <h2 className="text-2xl font-bold mb-6 text-white">
                    Send us a message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Name <span className="text-red-400">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="text-red-400 text-sm mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

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
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-white">
                          Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="plan" className="text-white">
                          Plan
                        </Label>
                        <Select value={formData.plan} onValueChange={handlePlanChange}>
                          <SelectTrigger className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white">
                            <SelectValue placeholder="Select a plan" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#080820] border-gray-800 text-white">
                            {pricingPlans.map((plan) => (
                              <SelectItem key={plan.id} value={plan.name}>
                                {plan.name} (₹{(plan.price / 100).toLocaleString()})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">
                        Subject <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? "subject-error" : undefined}
                      />
                      {errors.subject && (
                        <p id="subject-error" className="text-red-400 text-sm mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Message <span className="text-red-400">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        rows={5}
                        className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] resize-none text-white"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-red-400 text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
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
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </Button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-[#0A0A29]/60 border border-gray-800 rounded-2xl p-6 backdrop-blur-lg">
                    <h2 className="text-2xl font-bold mb-6 text-white">Contact Info</h2>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="p-3 bg-[#E2FF55]/10 rounded-lg mr-4">
                          <Mail className="h-5 w-5 text-[#E2FF55]" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Email</p>
                          <p className="text-white">contact@company.com</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="p-3 bg-[#E2FF55]/10 rounded-lg mr-4">
                          <Phone className="h-5 w-5 text-[#E2FF55]" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Phone</p>
                          <p className="text-white">+1 (555) 123-4567</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="p-3 bg-[#E2FF55]/10 rounded-lg mr-4">
                          <MapPin className="h-5 w-5 text-[#E2FF55]" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Location</p>
                          <p className="text-white">123 Business Avenue, Suite 100<br />San Francisco, CA 94107</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="p-3 bg-[#E2FF55]/10 rounded-lg mr-4">
                          <Clock className="h-5 w-5 text-[#E2FF55]" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Hours</p>
                          <p className="text-white">Monday - Friday: 9am - 5pm<br />Weekend: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-white py-24">
              <h2 className="text-4xl font-bold mb-6">Thank you!</h2>
              <p className="text-lg text-gray-300 mb-8">
                Your message has been received. We'll get back to you as soon as possible.
              </p>
              <Button 
                onClick={() => setFormSubmitted(false)}
                className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90"
              >
                Send another message
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
