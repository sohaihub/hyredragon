
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 px-4 md:px-8 w-full bg-transparent z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M37.031 11.469C37.031 14.5657 34.5157 17.0819 31.419 17.0819C28.3223 17.0819 25.8071 14.5657 25.8071 11.469C25.8071 8.37228 28.3223 5.85706 31.419 5.85706C34.5157 5.85706 37.031 8.37228 37.031 11.469Z" stroke="#E2FF55" strokeWidth="2.5"/>
              <path d="M20.1929 34.5311C20.1929 37.6278 17.6777 40.143 14.581 40.143C11.4843 40.143 8.96906 37.6278 8.96906 34.5311C8.96906 31.4344 11.4843 28.9192 14.581 28.9192C17.6777 28.9192 20.1929 31.4344 20.1929 34.5311Z" stroke="#E2FF55" strokeWidth="2.5"/>
              <path d="M17.0819 14.581C17.0819 17.6777 14.5667 20.1929 11.47 20.1929C8.37329 20.1929 5.85806 17.6777 5.85806 14.581C5.85806 11.4843 8.37329 8.96906 11.47 8.96906C14.5667 8.96906 17.0819 11.4843 17.0819 14.581Z" stroke="#E2FF55" strokeWidth="2.5"/>
              <path d="M40.143 31.419C40.143 34.5157 37.6278 37.031 34.531 37.031C31.4343 37.031 28.9191 34.5157 28.9191 31.419C28.9191 28.3223 31.4343 25.8071 34.531 25.8071C37.6278 25.8071 40.143 28.3223 40.143 31.419Z" stroke="#E2FF55" strokeWidth="2.5"/>
              <path d="M31.419 17.0819L34.531 25.8071" stroke="#E2FF55" strokeWidth="2.5"/>
              <path d="M14.581 28.9192L11.47 20.1929" stroke="#E2FF55" strokeWidth="2.5"/>
              <path d="M17.0819 14.581H25.8071" stroke="#E2FF55" strokeWidth="2.5"/>
              <path d="M28.9191 31.419H20.1929" stroke="#E2FF55" strokeWidth="2.5"/>
            </svg>
            <div className="text-white text-xl font-semibold">
              Hyregram
            </div>
          </Link>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-[#E2FF55] transition-colors duration-300 font-medium">
              Solutions
            </Link>
            <Link to="/" className="text-white hover:text-[#E2FF55] transition-colors duration-300 font-medium">
              AI Products
            </Link>
            <Link to="/" className="text-white hover:text-[#E2FF55] transition-colors duration-300 font-medium">
              Resources
            </Link>
            <Link to="/pricing" className="text-white hover:text-[#E2FF55] transition-colors duration-300 font-medium">
              Pricing
            </Link>
          </nav>
          
          {/* Desktop buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 bg-transparent transition-colors rounded-full"
            >
              Contact us
            </Button>
            <Button 
              className="bg-white text-[#0A0A29] hover:bg-white/90 rounded-full flex items-center gap-2"
            >
              Get started for free <ArrowRight className="w-4 h-4" />
            </Button>
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
          <div className="md:hidden mt-4 bg-[#0A0A29]/95 p-4 rounded-lg">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-[#E2FF55] transition-colors duration-300">
                Solutions
              </Link>
              <Link to="/" className="text-white hover:text-[#E2FF55] transition-colors duration-300">
                AI Products
              </Link>
              <Link to="/" className="text-white hover:text-[#E2FF55] transition-colors duration-300">
                Resources
              </Link>
              <Link to="/pricing" className="text-white hover:text-[#E2FF55] transition-colors duration-300">
                Pricing
              </Link>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 w-full bg-transparent transition-colors"
              >
                Contact us
              </Button>
              <Button 
                className="bg-white text-[#0A0A29] hover:bg-white/90 w-full"
              >
                Get started for free
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
