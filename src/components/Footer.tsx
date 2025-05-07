
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07071D] py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="inline-flex items-center mb-4">
              <svg width="36" height="36" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
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
            <p className="text-gray-400 text-sm max-w-xs">
              AI-powered recruitment platform that makes hiring smarter, faster, and more efficient.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-medium mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-[#E2FF55] text-sm">Features</Link></li>
                  <li><Link to="/pricing" className="text-gray-400 hover:text-[#E2FF55] text-sm">Pricing</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-[#E2FF55] text-sm">Solutions</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-[#E2FF55] text-sm">Enterprise</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-[#E2FF55] text-sm">Blog</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-[#E2FF55] text-sm">Help Center</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-[#E2FF55] text-sm">Guides</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-[#E2FF55] text-sm">Case Studies</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-[#E2FF55] text-sm">About</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-[#E2FF55] text-sm">Careers</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-[#E2FF55] text-sm">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Hyregram. All rights reserved.
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
