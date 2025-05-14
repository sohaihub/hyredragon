
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Lock, Server, FileCheck, Users, CheckCircle } from 'lucide-react';

const Security: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>
      
      <Header />
      
      <main className="flex-grow relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">Security at HyrDragon</h1>
          <p className="text-gray-300 text-center mb-12 text-lg">
            We prioritize the security and protection of your data with industry-leading measures
          </p>
          
          <div className="bg-[#080822]/80 rounded-xl p-8 backdrop-blur-sm border border-gray-800 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Our Security Commitment</h2>
            <p className="text-gray-300 mb-6">
              At HyrDragon, we understand that your recruitment data is sensitive and valuable. We implement comprehensive security protocols to ensure your information is protected at every step—from data collection and storage to processing and transmission.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#E2FF55]/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#E2FF55]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Advanced Encryption</h3>
                  <p className="text-gray-300">
                    All data is encrypted in transit and at rest using industry-standard encryption protocols.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#7B78FF]/20 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-[#7B78FF]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Access Controls</h3>
                  <p className="text-gray-300">
                    Strict role-based access controls and multi-factor authentication for system access.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#E2FF55]/20 flex items-center justify-center">
                    <Server className="w-6 h-6 text-[#E2FF55]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Secure Infrastructure</h3>
                  <p className="text-gray-300">
                    Our infrastructure is hosted in SOC 2 compliant data centers with 24/7 monitoring.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#7B78FF]/20 flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-[#7B78FF]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Regular Audits</h3>
                  <p className="text-gray-300">
                    We conduct regular security audits and vulnerability assessments to ensure compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#080822]/80 rounded-xl p-8 backdrop-blur-sm border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-6">Compliance & Certifications</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-[#E2FF55] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">GDPR Compliant for EU data protection standards</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-[#E2FF55] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">SOC 2 Type II certified for security, availability, and confidentiality</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-[#E2FF55] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">ISO 27001 certified information security management</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-[#E2FF55] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Regular penetration testing and security assessments</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-[#E2FF55] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Compliance with regional employment and data protection regulations</p>
              </div>
            </div>
            
            <div className="bg-[#0A0A29]/50 p-6 rounded-xl border border-gray-700">
              <div className="flex gap-4 items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#E2FF55]/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#E2FF55]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Data Protection Officer</h3>
                  <p className="text-gray-300">
                    For security inquiries or to report vulnerabilities, please contact our security team at security@hyrdragon.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Security;
