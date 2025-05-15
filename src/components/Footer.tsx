
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HyrDragonLogo from './HydragonLogo';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
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

    // Here you would typically send the email to your backend
    toast({
      title: "Subscription Successful!",
      description: "You've been subscribed to our newsletter.",
    });
    
    setEmail('');
  };

  return (
    <footer className="bg-[#07071D] py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4 transform hover:scale-105 transition-transform duration-300">
              <HyrDragonLogo size="sm" withText={true} />
            </Link>
            <p className="text-gray-400 text-sm max-w-xs">
              AI-powered recruitment platform that makes hiring smarter, faster, and more efficient.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <div className="grid grid-cols-2 gap-8">
              {/* Company Section */}
              <div>
                <h4 className="text-white font-medium mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#E2FF55] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#E2FF55] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Contact Us</Link></li>
                  <li><Link to="/blog" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#E2FF55] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Blog</Link></li>
                  <li><Link to="/case-studies" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#E2FF55] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Case Studies</Link></li>
                </ul>
              </div>
              
              {/* Product Section */}
              <div>
                <h4 className="text-white font-medium mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><Link to="/ai-products" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#E2FF55] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">AI Products</Link></li>
                  <li><Link to="/pricing" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#E2FF55] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Pricing</Link></li>
                  <li><Link to="/request-demo" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#E2FF55] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Enterprise</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Subscribe to our newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Get the latest news and updates from HyreDragon.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <div className="flex-grow">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#131342] border-gray-700 text-white w-full"
                />
              </div>
              <Button 
                type="submit" 
                className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 HyreDragon. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300">Terms</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300">Privacy</Link>
            <Link to="/security" className="text-gray-400 hover:text-[#E2FF55] text-sm transition-colors duration-300">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
