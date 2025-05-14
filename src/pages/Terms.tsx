
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      <Header />
      
      <main className="flex-grow relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="text-gray-400 mb-8">Last updated: May 14, 2025</p>
            
            <div className="prose text-gray-300">
              <p>
                Welcome to HyrDragon. Please read these Terms of Service ("Terms") carefully as they contain important information about your legal rights, remedies, and obligations. By accessing or using the HyrDragon platform, you agree to comply with and be bound by these Terms.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Description of Service</h2>
              <p>
                HyrDragon provides an AI-powered recruitment platform that helps organizations streamline their hiring process through candidate matching, smart screening, interview management, and analytics. The specific features and functionality may change over time.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of HyrDragon and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of HyrDragon.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. User Content</h2>
              <p>
                You retain all rights to any content you submit, post, or display on or through the Service. By submitting, posting, or displaying content on or through the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute such content.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Privacy Policy</h2>
              <p>
                Please refer to our <Link to="/privacy" className="text-[#E2FF55] hover:underline">Privacy Policy</Link> for information on how we collect, use, and disclose personal information from our users.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Limitation of Liability</h2>
              <p>
                In no event shall HyrDragon, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              <p>
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please <Link to="/contact" className="text-[#E2FF55] hover:underline">contact us</Link>.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
