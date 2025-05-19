
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HydragonLogo from './HydragonLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { subscribeToNewsletter } from '@/lib/api';

interface HydragonLogoProps {
  withText?: boolean;
  size?: string;
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !email.includes('@')) {
      toast({
        title: 'Invalid email',
        description: 'Please enter a valid email address',
        variant: 'destructive'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await subscribeToNewsletter(email);
      
      // Trigger a custom event to notify other tabs
      const event = new Event('storage');
      window.dispatchEvent(event);
      
      toast({
        title: 'Success!',
        description: 'You\'ve been subscribed to our newsletter'
      });
      
      // Reset form
      setEmail('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: 'Subscription failed',
        description: 'There was an error subscribing to the newsletter. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#080820] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {/* Logo and company info */}
          <div className="space-y-6">
            <div>
              <Link to="/">
                <HydragonLogo size="regular" withText={true} />
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              Revolutionizing recruitment with powerful AI tools designed to save time and reduce hiring costs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#E2FF55] transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E2FF55] transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E2FF55] transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E2FF55] transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E2FF55] transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* Products column */}
          <div className="space-y-4">
            <h3 className="text-[#E2FF55] text-lg font-semibold">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/ai-products" className="text-gray-400 hover:text-white transition-colors">
                  AI Products
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/request-demo" className="text-gray-400 hover:text-white transition-colors">
                  Request Demo
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div className="space-y-4">
            <h3 className="text-[#E2FF55] text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-400 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-gray-400 hover:text-white transition-colors">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-[#E2FF55] text-lg font-semibold">Subscribe to Newsletter</h3>
            <p className="text-gray-400 text-sm">
              Stay updated with the latest news, features, and releases.
            </p>
            <form onSubmit={handleSubscribe} className="mt-2 sm:flex">
              <Input
                type="email"
                name="email"
                id="email-newsletter"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="w-full bg-[#0A0A29] border-gray-800 focus:border-[#E2FF55] text-white"
                required
              />
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button
                  type="submit"
                  className="w-full bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#0A0A29] border-t-transparent"></div>
                  ) : "Subscribe"}
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row gap-4 justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} HyredragonAI. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/security" className="hover:text-white transition-colors">Security</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
