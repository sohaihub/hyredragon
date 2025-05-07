
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-4 md:px-8 w-full bg-transparent z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="text-hyregram-neon text-2xl font-bold tracking-tight">
              Hyregram
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/pricing" className="text-white hover:text-hyregram-neon transition-colors duration-300">
              Pricing
            </Link>
            <Link to="/" className="text-white hover:text-hyregram-neon transition-colors duration-300">
              Solutions
            </Link>
            <Link to="/" className="text-white hover:text-hyregram-neon transition-colors duration-300">
              Resources
            </Link>
            <Link to="/" className="text-white hover:text-hyregram-neon transition-colors duration-300">
              Contact Us
            </Link>
          </nav>
          
          <Button 
            variant="outline" 
            className="border-hyregram-neon text-hyregram-neon hover:bg-hyregram-neon hover:text-hyregram-dark-bg transition-colors duration-300"
          >
            Request a demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
