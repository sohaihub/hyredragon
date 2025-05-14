
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      <Header />
      
      <main className="flex-grow relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-gray-400 mb-8">Last updated: May 14, 2025</p>
            
            <div className="prose text-gray-300">
              <p>
                At HyrDragon, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered recruitment platform. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the platform.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Create or modify your account</li>
                <li>Upload candidate information</li>
                <li>Configure recruitment workflows</li>
                <li>Use our assessment and matching tools</li>
                <li>Contact customer support</li>
                <li>Complete forms or surveys</li>
              </ul>
              <p>
                This information may include your name, email address, company information, billing details, and any other information you choose to provide.
              </p>
              
              <h3 className="text-xl font-bold text-white mt-6 mb-3">Automatically Collected Information</h3>
              <p>
                When you access or use our platform, we automatically collect information about you, including:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Log information (IP address, browser type, pages viewed)</li>
                <li>Device information</li>
                <li>Usage patterns and preferences</li>
                <li>Cookies and tracking technologies</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Provide, maintain, and improve our platform</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, and administrative messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Improve and personalize the user experience</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Develop new features and services</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. How We Share Your Information</h2>
              <p>
                We may share information about you as follows:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
                <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
                <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of HyrDragon or others</li>
                <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company</li>
                <li>With your consent or at your direction</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Data Retention</h2>
              <p>
                We store the information we collect about you for as long as is necessary for the purposes for which we originally collected it, or for other legitimate business purposes, including to meet our legal, regulatory, or other compliance obligations.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Security</h2>
              <p>
                We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. For more information about our security practices, please visit our <Link to="/security" className="text-[#E2FF55] hover:underline">Security</Link> page.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Your Rights and Choices</h2>
              <p>
                Account Information: You may update, correct, or delete information about you at any time by logging into your online account or emailing us. We may retain certain information as required by law or for legitimate business purposes.
              </p>
              <p>
                Cookies: Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our Services.
              </p>
              <p>
                Promotional Communications: You may opt out of receiving promotional emails from HyrDragon by following the instructions in those emails. If you opt out, we may still send you non-promotional emails, such as those about your account or our ongoing business relations.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Data Processing Addendum</h2>
              <p>
                If you are a customer who processes personal data from Europe, you may execute our Data Processing Addendum (DPA).
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Changes to this Privacy Policy</h2>
              <p>
                We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice. We encourage you to review the privacy policy whenever you access the platform to stay informed about our information practices and the ways you can help protect your privacy.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our information practices, please contact us at:
              </p>
              <p className="mt-2">
                <Link to="/contact" className="text-[#E2FF55] hover:underline">Contact Us</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
