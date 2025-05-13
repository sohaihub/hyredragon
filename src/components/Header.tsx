
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import HydragonLogo from './HydragonLogo';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="py-4 px-4 md:px-8 w-full bg-transparent z-20 relative">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <HydragonLogo size="md" withText={true} />
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/solutions" 
              className={`transition-colors duration-300 font-medium ${
                isActive('/solutions') 
                ? 'text-[#E2FF55]' 
                : 'text-white hover:text-[#E2FF55]'
              }`}
            >
              Solutions
            </Link>
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
              to="/resources" 
              className={`transition-colors duration-300 font-medium ${
                isActive('/resources') 
                ? 'text-[#E2FF55]' 
                : 'text-white hover:text-[#E2FF55]'
              }`}
            >
              Resources
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
            <Link to="/contact">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 bg-transparent transition-colors rounded-full"
              >
                Contact us
              </Button>
            </Link>
            <Link to="/login">
              <Button 
                className="bg-white text-[#0A0A29] hover:bg-white/90 rounded-full flex items-center gap-2"
              >
                Get started for free <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-[#0A0A29]/95 p-4 rounded-lg backdrop-blur-lg absolute left-4 right-4 z-30 border border-gray-800">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/solutions" 
                className={`transition-colors duration-300 ${
                  isActive('/solutions') 
                  ? 'text-[#E2FF55]' 
                  : 'text-white hover:text-[#E2FF55]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solutions
              </Link>
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
                to="/resources" 
                className={`transition-colors duration-300 ${
                  isActive('/resources') 
                  ? 'text-[#E2FF55]' 
                  : 'text-white hover:text-[#E2FF55]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
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
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 w-full bg-transparent transition-colors"
                >
                  Contact us
                </Button>
              </Link>
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button 
                  className="bg-white text-[#0A0A29] hover:bg-white/90 w-full"
                >
                  Get started for free
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
