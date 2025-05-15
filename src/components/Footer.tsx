
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HyrDragonLogo from './HydragonLogo';
import { ArrowRight, Mail, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Here you would typically send the email to your backend
      toast({
        title: "Subscription Successful!",
        description: "You've been subscribed to our newsletter.",
      });
      
      setEmail('');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <footer className="bg-[#07071D] py-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#E2FF55]/5 blur-3xl animate-[pulse_10s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-1/3 left-1/6 w-80 h-80 rounded-full bg-[#7B78FF]/5 blur-3xl animate-[pulse_15s_ease-in-out_infinite]" style={{ animationDelay: '5s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-[fadeIn_0.5s_ease-out]">
            <Link to="/" className="inline-block mb-4 transform hover:scale-105 transition-transform duration-300">
              <HyrDragonLogo size="sm" withText={true} />
            </Link>
            <p className="text-gray-400 text-sm max-w-xs">
              AI-powered recruitment platform that makes hiring smarter, faster, and more efficient.
            </p>
          </div>
          
          <div className="md:col-span-1 animate-[fadeIn_0.5s_ease-out]" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-2 gap-8">
              {/* Company Section */}
              <div>
                <h4 className="text-white font-medium mb-4 relative inline-block">
                  Company
                  <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#E2FF55]/40"></div>
                </h4>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#E2FF55] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#E2FF55] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Contact Us</Link></li>
                  <li><Link to="/blog" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#E2FF55] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Blog</Link></li>
                  <li><Link to="/case-studies" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#E2FF55] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Case Studies</Link></li>
                </ul>
              </div>
              
              {/* Product Section */}
              <div>
                <h4 className="text-white font-medium mb-4 relative inline-block">
                  Product
                  <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#E2FF55]/40"></div>
                </h4>
                <ul className="space-y-2">
                  <li><Link to="/ai-products" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#E2FF55] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">AI Products</Link></li>
                  <li><Link to="/pricing" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#E2FF55] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Pricing</Link></li>
                  <li><Link to="/request-demo" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#E2FF55] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Enterprise</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="animate-[fadeIn_0.5s_ease-out]" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-white font-medium mb-4 relative inline-block">
              Subscribe to our newsletter
              <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#E2FF55]/40"></div>
            </h4>
            <p className="text-gray-400 text-sm mb-4">Get the latest news and updates from HyreDragon.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 relative group">
              <div className="flex-grow relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#131342] border-gray-700 text-white w-full focus:border-[#E2FF55] focus:ring-[#E2FF55]/20 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-md border border-[#E2FF55]/0 group-hover:border-[#E2FF55]/30 pointer-events-none transition-colors duration-500 opacity-0 group-hover:opacity-100"></div>
              </div>
              <Button 
                type="submit" 
                className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 flex items-center gap-2 relative overflow-hidden"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#0A0A29] border-r-transparent"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Subscribe
                  </>
                )}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1s_ease-out]"></span>
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 HyreDragon. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#E2FF55] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Terms</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#E2FF55] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Privacy</Link>
            <Link to="/security" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#E2FF55] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
