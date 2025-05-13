
import React from 'react';
import { Link } from 'react-router-dom';
import HyreDragonLogo from './HydragonLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07071D] py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="inline-block mb-4">
              <HyreDragonLogo size="sm" withText={true} />
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              AI-powered recruitment platform that makes hiring smarter, faster, and more efficient.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-medium mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><Link to="/solutions" className="text-gray-400 hover:text-[#E2FF55] text-sm">Solutions</Link></li>
                  <li><Link to="/ai-products" className="text-gray-400 hover:text-[#E2FF55] text-sm">AI Products</Link></li>
                  <li><Link to="/pricing" className="text-gray-400 hover:text-[#E2FF55] text-sm">Pricing</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-[#E2FF55] text-sm">Enterprise</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><Link to="/resources" className="text-gray-400 hover:text-[#E2FF55] text-sm">Resource Library</Link></li>
                  <li><Link to="/resources" className="text-gray-400 hover:text-[#E2FF55] text-sm">Blog</Link></li>
                  <li><Link to="/resources" className="text-gray-400 hover:text-[#E2FF55] text-sm">Case Studies</Link></li>
                  <li><Link to="/resources" className="text-gray-400 hover:text-[#E2FF55] text-sm">Guides</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-[#E2FF55] text-sm">About</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-[#E2FF55] text-sm">Careers</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-[#E2FF55] text-sm">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 HyreDragon. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-400 hover:text-[#E2FF55] text-sm">Terms</Link>
            <Link to="/" className="text-gray-400 hover:text-[#E2FF55] text-sm">Privacy</Link>
            <Link to="/" className="text-gray-400 hover:text-[#E2FF55] text-sm">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
