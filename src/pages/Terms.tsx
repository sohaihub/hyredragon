
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>
      
      <Header />
      
      <main className="flex-grow relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-[#080822]/80 rounded-xl p-8 backdrop-blur-sm border border-gray-800">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Welcome to HyrDragon. By accessing our website and services, you agree to be bound by these Terms of Service.
            </p>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing or using the HyrDragon platform, you agree to comply with and be bound by these Terms. If you do not agree, please do not use our services.
            </p>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Description of Services</h2>
            <p className="text-gray-300 mb-4">
              HyrDragon provides an AI-powered recruitment platform designed to assist organizations in their hiring processes. Our services include candidate matching, screening, interview management, and recruitment analytics.
            </p>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. User Accounts</h2>
            <p className="text-gray-300 mb-4">
              To access certain features of our platform, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Data Privacy</h2>
            <p className="text-gray-300 mb-4">
              We collect and process personal data in accordance with our Privacy Policy. By using our services, you consent to such processing and warrant that all data provided by you is accurate.
            </p>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              All content on the HyrDragon platform, including but not limited to text, graphics, logos, and software, is the property of HyrDragon and is protected by intellectual property laws.
            </p>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              HyrDragon shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
            </p>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">7. Modifications to Terms</h2>
            <p className="text-gray-300 mb-4">
              HyrDragon reserves the right to modify these Terms at any time. Your continued use of our services following any changes constitutes your acceptance of the revised Terms.
            </p>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">8. Termination</h2>
            <p className="text-gray-300 mb-4">
              HyrDragon reserves the right to terminate or suspend your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">9. Governing Law</h2>
            <p className="text-gray-300 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which HyrDragon operates, without regard to its conflict of law provisions.
            </p>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">10. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms, please contact us at support@hyrdragon.com.
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

export default Terms;
