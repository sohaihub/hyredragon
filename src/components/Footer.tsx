
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-hyregram-darker-bg py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="text-hyregram-neon text-xl font-bold">
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
                  <li><Link to="/" className="text-gray-400 hover:text-hyregram-neon text-sm">Features</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-hyregram-neon text-sm">Pricing</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-hyregram-neon text-sm">Solutions</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-hyregram-neon text-sm">Enterprise</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-hyregram-neon text-sm">Blog</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-hyregram-neon text-sm">Help Center</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-hyregram-neon text-sm">Guides</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-hyregram-neon text-sm">Case Studies</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-hyregram-neon text-sm">About</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-hyregram-neon text-sm">Careers</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-hyregram-neon text-sm">Contact Us</Link></li>
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
            <Link to="/" className="text-gray-400 hover:text-hyregram-neon text-sm">Terms</Link>
            <Link to="/" className="text-gray-400 hover:text-hyregram-neon text-sm">Privacy</Link>
            <Link to="/" className="text-gray-400 hover:text-hyregram-neon text-sm">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
