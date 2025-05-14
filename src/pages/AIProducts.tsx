
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  button: {
    text: string;
    link: string;
  };
  color: string;
}> = ({ icon, title, description, features, button, color }) => {
  return (
    <div className="bg-[#080822]/80 border border-gray-800 rounded-xl p-8 hover:border-[#E2FF55]/20 transition-all duration-300">
      <div className={`inline-block p-4 ${color} rounded-xl mb-6`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-[#E2FF55] mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-gray-200">{feature}</span>
          </div>
        ))}
      </div>
      
      <Link to={button.link}>
        <Button className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/80 w-full flex items-center justify-center gap-2">
          {button.text} <ArrowRight className="w-4 h-4" />
        </Button>
      </Link>
    </div>
  );
};

const IndustryCard: React.FC<{
  title: string;
  description: string;
  features: string[];
  buttonType: 'request-demo' | 'coming-soon';
  color: string;
}> = ({ title, description, features, buttonType, color }) => {
  return (
    <div className="bg-[#080822]/80 border border-gray-800 rounded-xl p-6 hover:border-[#E2FF55]/20 transition-all duration-300">
      <div className={`h-2 ${color} rounded-full mb-6`}></div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <CheckCircle className="w-4 h-4 text-[#E2FF55] mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-200 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      {buttonType === 'request-demo' ? (
        <Link to="/request-demo">
          <Button className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/80 w-full text-sm">
            Request a demo
          </Button>
        </Link>
      ) : (
        <Button disabled className="bg-gray-700/50 text-gray-400 w-full text-sm cursor-not-allowed">
          Coming Soon
        </Button>
      )}
    </div>
  );
};

const AIProducts: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-[#7B78FF]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>
      </div>
      
      <Header />
      
      <main className="flex-grow relative z-10 pt-24">
        {/* Hero Section */}
        <section className="py-12 mb-16 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                AI-Powered <span className="text-[#E2FF55]">Recruitment Products</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover our suite of advanced AI tools designed to transform your recruitment process from start to finish
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Features */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Core Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard 
                icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#0A0A29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}
                title="AI Candidate Matching"
                description="Find the perfect candidates faster with our advanced AI matching algorithm."
                features={[
                  "85%+ accuracy in candidate-job matching",
                  "Automated skill assessment and ranking",
                  "Customizable matching criteria",
                  "Bias reduction algorithms"
                ]}
                button={{text: "Request a demo", link: "/request-demo"}}
                color="bg-[#E2FF55]"
              />
              
              <FeatureCard 
                icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#0A0A29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}
                title="Smart Screening Process"
                description="Automate initial candidate screening to save time and focus on quality candidates."
                features={[
                  "Automated resume parsing and analysis",
                  "Pre-screening questionnaires",
                  "Skills assessment integration",
                  "Video interview scheduling"
                ]}
                button={{text: "Request a demo", link: "/request-demo"}}
                color="bg-[#7B78FF]"
              />
              
              <FeatureCard 
                icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="#0A0A29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#0A0A29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="#0A0A29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C17.7699 3.58317 19.0078 5.17798 19.0078 7.005C19.0078 8.83202 17.7699 10.4268 16 10.88" stroke="#0A0A29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}
                title="Interview Management"
                description="Streamline your interview process with AI-assisted tools and collaboration features."
                features={[
                  "AI-generated interview questions",
                  "Collaborative interview feedback",
                  "Structured interview templates",
                  "Candidate evaluation frameworks"
                ]}
                button={{text: "Request a demo", link: "/request-demo"}}
                color="bg-[#E2FF55]"
              />
              
              <FeatureCard 
                icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="#0A0A29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 20V4" stroke="#0A0A29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 20V14" stroke="#0A0A29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}
                title="Analytics & Reporting"
                description="Gain valuable insights into your recruitment process with advanced analytics."
                features={[
                  "Comprehensive recruitment metrics dashboard",
                  "Customizable reporting",
                  "Recruitment funnel analytics",
                  "Data-driven hiring recommendations"
                ]}
                button={{text: "Request a demo", link: "/request-demo"}}
                color="bg-[#7B78FF]"
              />
            </div>
          </div>
        </section>
        
        {/* Industry-specific solutions */}
        <section className="py-12 px-4 bg-[#07071D]/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Industry-Specific Solutions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Specialized recruitment solutions tailored for the unique challenges of different industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <IndustryCard 
                title="Tech Talent Acquisition"
                description="Specialized solutions for recruiting tech professionals and developers."
                features={[
                  "Technical skills assessment",
                  "Code challenge integration",
                  "Tech stack matching",
                  "Developer community integration"
                ]}
                buttonType="request-demo"
                color="bg-gradient-to-r from-[#E2FF55] to-[#7B78FF]"
              />
              
              <IndustryCard 
                title="Educational Institutions"
                description="Specialized solutions for educational staffing and faculty recruitment."
                features={[
                  "Academic credential verification",
                  "Course-specific expertise matching",
                  "Teaching evaluation tools",
                  "Faculty onboarding automation"
                ]}
                buttonType="request-demo"
                color="bg-gradient-to-r from-[#7B78FF] to-[#9b87f5]"
              />
              
              <IndustryCard 
                title="Healthcare Staffing Solutions"
                description="Solutions for healthcare organizations to find qualified medical professionals."
                features={[
                  "Medical credentials verification",
                  "Compliance and licensing tracking",
                  "Specialty-specific matching",
                  "Shift scheduling integration"
                ]}
                buttonType="request-demo"
                color="bg-gradient-to-r from-[#9b87f5] to-[#E2FF55]"
              />
              
              <IndustryCard 
                title="Remote Team Building"
                description="Tools specialized for building distributed teams across different time zones."
                features={[
                  "Remote work aptitude assessment",
                  "Cultural fit for distributed teams",
                  "Time zone compatibility matching",
                  "Digital collaboration skills evaluation"
                ]}
                buttonType="request-demo"
                color="bg-gradient-to-r from-[#E2FF55] to-[#7B78FF]"
              />
              
              <IndustryCard 
                title="Retail & Hospitality"
                description="Solutions for high-volume, customer-facing role recruitment."
                features={[
                  "Customer service aptitude testing",
                  "High-volume candidate processing",
                  "Seasonal staffing optimization",
                  "Soft skills assessment"
                ]}
                buttonType="request-demo"
                color="bg-gradient-to-r from-[#7B78FF] to-[#9b87f5]"
              />
              
              <IndustryCard 
                title="Financial Services"
                description="Specialized recruitment for banking, insurance, and financial institutions."
                features={[
                  "Regulatory compliance verification",
                  "Financial certification tracking",
                  "Risk assessment profiling",
                  "Ethics and compliance screening"
                ]}
                buttonType="coming-soon"
                color="bg-gradient-to-r from-[#9b87f5] to-[#E2FF55]"
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="bg-[#080822]/80 border border-gray-800 rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Hiring Process?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of organizations that have revolutionized their recruitment with HyrDragon's AI-powered platform.
              </p>
              <div className="flex justify-center">
                <Link to="/request-demo">
                  <Button 
                    size="lg"
                    className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 font-medium px-8 py-6 rounded-full flex items-center gap-2"
                  >
                    Request a demo <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIProducts;
