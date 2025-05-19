
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { appendToGoogleSheet } from '@/lib/sheets-service';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  company: z.string().optional(),
  plan: z.enum(['Free', 'Pro', 'Enterprise']),
  subject: z.string().min(1, { message: 'Subject is required' }),
  message: z.string().min(1, { message: 'Message is required' }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      plan: 'Free',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Submit form data directly to Google Sheets
      const success = await appendToGoogleSheet(data);
      
      if (!success) {
        throw new Error('Failed to submit form');
      }
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      form.reset();
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
    <div className="min-h-screen flex flex-col bg-[#0A0A29] text-white">
      <Header />

      <main className="flex-grow relative z-10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Get in <span className="text-neon-green">Touch</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Have questions? We're here to help. Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Contact Form */}
              <div className="lg:col-span-3 bg-[#0F103E]/70 shadow-lg rounded-xl p-6 md:p-8 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white">Send us a message</h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="name" className="text-gray-300">Name</FormLabel>
                            <FormControl>
                              <Input 
                                id="name"
                                placeholder="Your name" 
                                className="bg-[#141824] border-gray-700 focus:border-[#E2FF55] text-white" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="email" className="text-gray-300">Email</FormLabel>
                            <FormControl>
                              <Input 
                                id="email"
                                type="email" 
                                placeholder="your.email@example.com" 
                                className="bg-[#141824] border-gray-700 focus:border-[#E2FF55] text-white" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="company" className="text-gray-300">Company</FormLabel>
                          <FormControl>
                            <Input 
                              id="company"
                              placeholder="Your company name" 
                              className="bg-[#141824] border-gray-700 focus:border-[#E2FF55] text-white" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="plan"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="plan" className="text-gray-300">Plan</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-[#141824] border-gray-700 focus:border-[#E2FF55] text-white">
                                <SelectValue placeholder="Select a plan" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-[#0F103E] text-white border-gray-700">
                              <SelectItem value="Free" className="focus:bg-[#1A1F2C] focus:text-white">Free</SelectItem>
                              <SelectItem value="Pro" className="focus:bg-[#1A1F2C] focus:text-white">Pro</SelectItem>
                              <SelectItem value="Enterprise" className="focus:bg-[#1A1F2C] focus:text-white">Enterprise</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="subject" className="text-gray-300">Subject</FormLabel>
                          <FormControl>
                            <Input 
                              id="subject"
                              placeholder="How can we help you?" 
                              className="bg-[#141824] border-gray-700 focus:border-[#E2FF55] text-white" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="message" className="text-gray-300">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              id="message"
                              placeholder="Your message..."
                              rows={6}
                              className="bg-[#141824] border-gray-700 focus:border-[#E2FF55] text-white resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="bg-[#E2FF55] hover:bg-[#c8e03c] text-[#0A0A29] font-medium w-full md:w-auto flex items-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Contact Information */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-[#0F103E]/70 shadow-lg rounded-xl p-6 border border-white/10">
                  <h2 className="text-2xl font-bold mb-6 text-white">Contact Info</h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="p-3 bg-[#1A1F2C] rounded-lg mr-4">
                        <Mail className="h-5 w-5 text-[#E2FF55]" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Email</p>
                        <p className="text-gray-100">contact@example.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 bg-[#1A1F2C] rounded-lg mr-4">
                        <Phone className="h-5 w-5 text-[#E2FF55]" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Phone</p>
                        <p className="text-gray-100">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 bg-[#1A1F2C] rounded-lg mr-4">
                        <MapPin className="h-5 w-5 text-[#E2FF55]" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Location</p>
                        <p className="text-gray-100">123 Business Ave,<br />Suite 100, San Francisco, CA 94107</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 bg-[#1A1F2C] rounded-lg mr-4">
                        <Clock className="h-5 w-5 text-[#E2FF55]" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Hours</p>
                        <p className="text-gray-100">Monday - Friday: 9am - 5pm<br />Weekend: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
