import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import HyrDragonLogo from './HydragonLogo';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="py-4 px-4 md:px-8 w-full bg-[#0A0A29]/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-800/50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <HyrDragonLogo size="md" withText={true} />
          
          {/* Centered Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link 
              to="/ai-products" 
              className={`transition-colors duration-300 font-medium ${
                isActive('/ai-products') 
                  ? 'text-[#E2FF55]' 
                  : 'text-white hover:text-[#E2FF55]'
              }`}
            >
              AI Products
            </Link>
            <Link 
              to="/pricing" 
              className={`transition-colors duration-300 font-medium ${
                isActive('/pricing') 
                  ? 'text-[#E2FF55]' 
                  : 'text-white hover:text-[#E2FF55]'
              }`}
            >
              Pricing
            </Link>
          </nav>
          
          {/* Desktop buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://hyrdragon.digitaldiffuse.in/" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 bg-transparent transition-colors rounded-full"
              >
                Login/Register
              </Button>
            </a>
            <Link to="/request-demo">
              <Button 
                className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 rounded-full flex items-center gap-2"
              >
                Request a demo <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-[#0A0A29]/95 p-4 rounded-lg backdrop-blur-lg absolute left-4 right-4 z-30 border border-gray-800">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/ai-products" 
                className={`transition-colors duration-300 ${
                  isActive('/ai-products') 
                    ? 'text-[#E2FF55]' 
                    : 'text-white hover:text-[#E2FF55]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AI Products
              </Link>
              <Link 
                to="/pricing" 
                className={`transition-colors duration-300 ${
                  isActive('/pricing') 
                    ? 'text-[#E2FF55]' 
                    : 'text-white hover:text-[#E2FF55]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <a 
                href="https://hyrdragon.digitaldiffuse.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 w-full bg-transparent transition-colors"
                >
                  Login/Register
                </Button>
              </a>
              <Link 
                to="/request-demo" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button 
                  className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 w-full"
                >
                  Request a demo
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
