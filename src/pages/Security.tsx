
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Lock, Server, Database, Layers, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const SecurityFeature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-[#080822]/80 border border-gray-800 rounded-xl p-6 hover:border-[#E2FF55]/50 transition-all duration-300 shimmer-bg">
    <div className="inline-block p-3 bg-gradient-to-br from-[#E2FF55] to-[#7B78FF] rounded-xl mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Security: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      <Header />
      
      <main className="flex-grow relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white highlight-shimmer">
              Enterprise-Grade <span className="text-[#E2FF55]">Security</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At HyrDragon, we prioritize the security and privacy of your data. Our comprehensive 
              security measures ensure your recruitment information stays protected.
            </p>
          </div>
          
          {/* Security Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <SecurityFeature 
              icon={<Shield className="w-6 h-6 text-[#0A0A29]" />}
              title="Data Encryption"
              description="All data is encrypted both in transit and at rest using industry-standard protocols and strong encryption algorithms."
            />
            <SecurityFeature 
              icon={<Lock className="w-6 h-6 text-[#0A0A29]" />}
              title="Access Controls"
              description="Role-based access controls ensure that only authorized personnel can access specific information."
            />
            <SecurityFeature 
              icon={<Server className="w-6 h-6 text-[#0A0A29]" />}
              title="Secure Infrastructure"
              description="Our infrastructure is hosted in SOC 2 compliant data centers with 24/7 monitoring and physical security measures."
            />
            <SecurityFeature 
              icon={<Database className="w-6 h-6 text-[#0A0A29]" />}
              title="Regular Backups"
              description="Automated backups are performed regularly to prevent data loss and ensure business continuity."
            />
            <SecurityFeature 
              icon={<Layers className="w-6 h-6 text-[#0A0A29]" />}
              title="Multi-layered Protection"
              description="Multiple security layers including firewalls, intrusion detection, and DDoS protection defend against threats."
            />
            <SecurityFeature 
              icon={<UserCheck className="w-6 h-6 text-[#0A0A29]" />}
              title="Compliance"
              description="We maintain compliance with relevant industry standards and regulations, including GDPR, CCPA, and more."
            />
          </div>
          
          {/* Security Details Section */}
          <div className="max-w-4xl mx-auto bg-[#0F103E]/50 border border-gray-800 rounded-xl p-8 mb-16 highlight-shimmer">
            <h2 className="text-2xl font-bold text-white mb-6">Our Security Commitment</h2>
            
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Security Testing</h3>
                <p>
                  We conduct regular security assessments, including penetration testing, vulnerability scanning, 
                  and code reviews to identify and address potential security issues before they can be exploited.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Security Team</h3>
                <p>
                  Our dedicated security team continuously monitors for threats, reviews security policies, 
                  and implements best practices to ensure your data remains secure.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Incident Response</h3>
                <p>
                  We have a comprehensive incident response plan in place to quickly address any security 
                  incidents and minimize potential impact on our customers.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Vendor Management</h3>
                <p>
                  We carefully select and monitor our third-party vendors to ensure they meet our 
                  high security standards and comply with relevant regulations.
                </p>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Security FAQs</h2>
            
            <div className="text-left space-y-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">How is my data protected?</h3>
                <p className="text-gray-300">
                  Your data is protected through encryption, access controls, regular security updates, 
                  and continuous monitoring for unauthorized access attempts.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Where is my data stored?</h3>
                <p className="text-gray-300">
                  Your data is stored in secure, SOC 2 compliant data centers that implement 
                  strict physical and logical security controls.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white mb-2">How can I learn more about your security practices?</h3>
                <p className="text-gray-300">
                  Enterprise customers can request our detailed security documentation by contacting 
                  our sales team. We're happy to provide more information about our security controls.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <Link to="/contact" className="inline-block bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 px-6 py-3 rounded-lg font-medium">
                Contact Us For Security Details
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Security;
