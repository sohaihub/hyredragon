
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Background elements */}

      
      {/* Background circular gradients */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#E2FF55]/20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
      
      <Header />
      
      <main className="flex-grow relative z-10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Get in <span className="text-[#E2FF55]">Touch</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Have questions about Hydragon's AI recruitment platform? We're here to help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Contact Form */}
              <div className="lg:col-span-3 bg-[#0A0A29]/60 border border-gray-800 rounded-2xl p-6 md:p-10 backdrop-blur-lg">
                <h2 className="text-2xl font-bold mb-6 text-white">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Name</Label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="Your name" 
                        required
                        className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        required
                        className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">Company</Label>
                    <Input 
                      id="company" 
                      type="text" 
                      placeholder="Your company name" 
                      className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">Subject</Label>
                    <Input 
                      id="subject" 
                      type="text" 
                      placeholder="How can we help you?" 
                      required
                      className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message..." 
                      rows={6}
                      required
                      className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 w-full md:w-auto flex items-center gap-2"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-[#0A0A29]/60 border border-gray-800 rounded-2xl p-6 backdrop-blur-lg">
                  <h2 className="text-2xl font-bold mb-6 text-white">Contact Info</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="p-3 bg-[#E2FF55]/10 rounded-lg mr-4">
                        <Mail className="h-5 w-5 text-[#E2FF55]" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Email</p>
                        <p className="text-white">contact@hydragon.ai</p>
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
                        <p className="text-white">123 Tech Avenue,<br />San Francisco, CA 94107</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-3 bg-[#E2FF55]/10 rounded-lg mr-4">
                        <Clock className="h-5 w-5 text-[#E2FF55]" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Hours</p>
                        <p className="text-white">Monday - Friday: 9am - 6pm<br />Weekend: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0A0A29]/60 border border-gray-800 rounded-2xl p-6 backdrop-blur-lg">
                  <h2 className="text-2xl font-bold mb-4 text-white">Follow Us</h2>
                  <div className="flex space-x-4">
                    <a href="#" className="p-3 bg-[#E2FF55]/10 rounded-lg hover:bg-[#E2FF55]/20 transition-colors">
                      <svg className="h-5 w-5 text-[#E2FF55]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="p-3 bg-[#E2FF55]/10 rounded-lg hover:bg-[#E2FF55]/20 transition-colors">
                      <svg className="h-5 w-5 text-[#E2FF55]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="p-3 bg-[#E2FF55]/10 rounded-lg hover:bg-[#E2FF55]/20 transition-colors">
                      <svg className="h-5 w-5 text-[#E2FF55]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="p-3 bg-[#E2FF55]/10 rounded-lg hover:bg-[#E2FF55]/20 transition-colors">
                      <svg className="h-5 w-5 text-[#E2FF55]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                      </svg>
                    </a>
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
