
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HiringPackageSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative bg-[#2D1B69]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Fuel Your Hiring Quest
        </h2>
        <div className="w-52 h-1 bg-[#4ECDC4] mx-auto mb-6"></div>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
          Choose your package to power your journey. Every session includes proctoring and AI
          analytics. Unused time carries forward to your next adventure.
        </p>
        
        <div className="bg-[#E2FF55]/10 border border-[#E2FF55]/30 text-[#E2FF55] text-sm font-semibold px-6 py-3 rounded-full inline-block mb-12 max-w-fit mx-auto">
          🔥 First 50 customers get 3 FREE HOURS! 🔥
        </div>
        
        <div className="bg-[#1A1A3D]/80 rounded-xl overflow-hidden">
          <table className="w-full text-white">
            <thead className="border-b border-gray-700">
              <tr>
                <th className="py-4 px-6 text-left">Package</th>
                <th className="py-4 px-6 text-left">Assessments (₹)</th>
                <th className="py-4 px-6 text-left">Video Interviews (₹)</th>
                <th className="py-4 px-6 text-left">Discount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6">10 Hours</td>
                <td className="py-4 px-6">₹10,000 (₹1,000/hr)</td>
                <td className="py-4 px-6">₹15,000 (₹1,500/hr)</td>
                <td className="py-4 px-6">None</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6">20 Hours</td>
                <td className="py-4 px-6">₹19,000 (₹950/hr)</td>
                <td className="py-4 px-6">₹28,500 (₹1,425/hr)</td>
                <td className="py-4 px-6 text-[#E2FF55]">5%</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6">30 Hours</td>
                <td className="py-4 px-6">₹27,000 (₹900/hr)</td>
                <td className="py-4 px-6">₹42,000 (₹1,400/hr)</td>
                <td className="py-4 px-6 text-[#E2FF55]">10%</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6">50 Hours</td>
                <td className="py-4 px-6">₹42,500 (₹850/hr)</td>
                <td className="py-4 px-6">₹68,750 (₹1,375/hr)</td>
                <td className="py-4 px-6 text-[#E2FF55]">15%</td>
              </tr>
              <tr>
                <td className="py-4 px-6">50+ Hours</td>
                <td className="py-4 px-6">Custom Pricing</td>
                <td className="py-4 px-6">Custom Pricing</td>
                <td className="py-4 px-6 text-[#E2FF55]">Negotiable</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-[#1A1A3D]/80 p-6 rounded-xl">
            <h3 className="text-xl text-white font-bold mb-4">Billing Notes</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <span className="text-[#4ECDC4] mr-2">•</span>
                Minimum session: 0.5 hours
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-[#4ECDC4] mr-2">•</span>
                Actual usage-based deduction
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-[#4ECDC4] mr-2">•</span>
                Remaining time rolls over
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-[#4ECDC4] mr-2">•</span>
                Renewal alert at 15 minutes left
              </li>
            </ul>
          </div>
          
          <div className="bg-[#1A1A3D]/80 p-6 rounded-xl">
            <h3 className="text-xl text-white font-bold mb-4">Ready To Get Started?</h3>
            <p className="text-gray-300 mb-6">
              Sign up today and receive our exclusive early adopter benefits. No credit card required for trial.
            </p>
            <Link to="/request-demo">
              <Button className="w-full bg-gradient-to-r from-[#4ECDC4] to-[#E2FF55] text-[#0A0A29] hover:opacity-90 py-6 rounded-full text-lg font-bold">
                Start Your Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringPackageSection;
