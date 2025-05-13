
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const companySizes = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1000+ employees'
];

const RequestDemo: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    toast({
      title: "Demo request received!",
      description: "Our team will contact you shortly to schedule your personalized demo.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full"></div>
      <div className="absolute top-40 right-40 w-2 h-2 bg-white rounded-full"></div>
      <div className="absolute bottom-60 left-1/4 w-1.5 h-1.5 bg-white rounded-full"></div>
      <div className="absolute top-96 right-1/3 w-1 h-1 bg-white rounded-full"></div>
      <div className="absolute top-1/2 left-10 w-2 h-2 bg-white rounded-full"></div>
      
      {/* Background circular gradients */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#E2FF55]/20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
      
      <Header />
      
      <main className="flex-grow relative z-10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          {!formSubmitted ? (
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  Experience the Power of <span className="text-[#E2FF55]">AI Recruitment</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Schedule a personalized demo to see how Hydragon can transform your hiring process.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Demo Form */}
                <div className="bg-[#0A0A29]/60 border border-gray-800 rounded-2xl p-6 md:p-10 backdrop-blur-lg order-2 lg:order-1">
                  <h2 className="text-2xl font-bold mb-6 text-white">Request your personalized demo</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-white">First Name</Label>
                        <Input 
                          id="firstName" 
                          type="text" 
                          placeholder="Your first name" 
                          required
                          className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-white">Last Name</Label>
                        <Input 
                          id="lastName" 
                          type="text" 
                          placeholder="Your last name" 
                          required
                          className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Work Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@company.com" 
                        required
                        className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+1 (555) 123-4567" 
                        required
                        className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-white">Company Name</Label>
                        <Input 
                          id="company" 
                          type="text" 
                          placeholder="Your company name" 
                          required
                          className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="jobTitle" className="text-white">Job Title</Label>
                        <Input 
                          id="jobTitle" 
                          type="text" 
                          placeholder="Your role" 
                          required
                          className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="companySize" className="text-white">Company Size</Label>
                      <Select required>
                        <SelectTrigger className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white">
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
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">Additional Information</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your hiring challenges and what you're looking for in a recruitment solution..." 
                        rows={4}
                        className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 w-full flex items-center gap-2 justify-center"
                    >
                      Request Demo <ArrowRight className="w-4 h-4" />
                    </Button>
                    
                    <p className="text-xs text-gray-400 text-center">
                      By submitting this form, you agree to our <Link to="#" className="text-[#7B78FF] hover:text-[#E2FF55]">Terms of Service</Link> and <Link to="#" className="text-[#7B78FF] hover:text-[#E2FF55]">Privacy Policy</Link>.
                    </p>
                  </form>
                </div>
                
                {/* Benefits */}
                <div className="order-1 lg:order-2">
                  <div className="sticky top-24 space-y-10">
                    <h2 className="text-3xl font-bold text-white mb-8">What you'll see in your demo</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="mr-4 p-2 rounded-full bg-[#E2FF55]/10">
                          <CheckCircle className="h-6 w-6 text-[#E2FF55]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Candidate Matching</h3>
                          <p className="text-gray-300">See how our proprietary AI algorithm matches candidates to your job requirements with unparalleled precision.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mr-4 p-2 rounded-full bg-[#E2FF55]/10">
                          <CheckCircle className="h-6 w-6 text-[#E2FF55]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">Streamlined Workflow</h3>
                          <p className="text-gray-300">Experience our intuitive interface that simplifies the entire recruitment process from posting to hiring.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mr-4 p-2 rounded-full bg-[#E2FF55]/10">
                          <CheckCircle className="h-6 w-6 text-[#E2FF55]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">Advanced Analytics Dashboard</h3>
                          <p className="text-gray-300">Discover how our data-rich analytics can provide insights to optimize your recruitment strategy.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mr-4 p-2 rounded-full bg-[#E2FF55]/10">
                          <CheckCircle className="h-6 w-6 text-[#E2FF55]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">Custom Integration Options</h3>
                          <p className="text-gray-300">Learn how Hydragon seamlessly integrates with your existing HR systems and tools.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#0A0A29]/60 border border-gray-800 rounded-2xl p-6 backdrop-blur-lg">
                      <h3 className="text-xl font-bold text-white mb-3">What clients are saying</h3>
                      <p className="text-gray-300 italic mb-4">
                        "Hydragon has completely transformed our hiring process. We've reduced time-to-hire by 65% and improved candidate quality significantly."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-500 mr-3"></div>
                        <div>
                          <p className="text-white font-medium">Sarah Johnson</p>
                          <p className="text-gray-400 text-sm">HR Director, TechCorp Inc.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center py-10">
              <div className="bg-[#0A0A29]/60 border border-gray-800 rounded-2xl p-10 backdrop-blur-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E2FF55]/20 mb-8">
                  <CheckCircle className="h-8 w-8 text-[#E2FF55]" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                  Thank You for Requesting a Demo!
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  We've received your request and a member of our team will contact you within the next 24 hours to schedule your personalized demo.
                </p>
                <p className="text-gray-300 mb-10">
                  Meanwhile, feel free to explore more about how Hydragon can transform your recruitment process.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <Link to="/">
                    <Button 
                      className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 rounded-full flex items-center gap-2"
                    >
                      Return to Homepage <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/resources">
                    <Button 
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 bg-transparent transition-colors rounded-full"
                    >
                      Explore Resources
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RequestDemo;
