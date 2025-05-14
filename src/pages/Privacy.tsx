
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>
      
      <Header />
      
      <main className="flex-grow relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-[#080822]/80 rounded-xl p-8 backdrop-blur-sm border border-gray-800">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              At HyrDragon, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.
            </p>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              We collect several types of information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
              <li>Personal information (name, email address, phone number)</li>
              <li>Account information</li>
              <li>Resume and job application data</li>
              <li>Usage information and analytics</li>
              <li>Cookies and tracking technologies</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use the collected information for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
              <li>Providing and maintaining our services</li>
              <li>Improving and personalizing user experience</li>
              <li>Processing job applications and recruitment activities</li>
              <li>Communicating with you about our services</li>
              <li>Analyzing usage trends and optimizing our platform</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Data Storage and Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-300 mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
              <li>Employers or organizations using our platform for recruitment</li>
              <li>Service providers and business partners</li>
              <li>Legal authorities when required by law</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Your Privacy Rights</h2>
            <p className="text-gray-300 mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate or incomplete information</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict the processing of your data</li>
              <li>Data portability</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 mb-4">
              We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">8. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us at privacy@hyrdragon.com.
            </p>
            
            <p className="text-gray-300 mt-8">
              Last updated: May 14, 2025
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
