import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, MonitorSmartphone, Clock, Shield, Star, Download, Users, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const AIProducts = () => {
  const products = [
    {
      name: "AI Assessment Suite",
      icon: <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500"><MonitorSmartphone className="h-5 w-5" /></div>,
      description: "Our adaptive testing platform evaluates technical skills, problem-solving abilities, and job-specific knowledge.",
      features: ["Customized test templates", "Automated scoring", "Anti-cheating mechanisms", "Advanced analytics", "24/7 support"],
      status: "available"
    },
    {
      name: "AI Video Interviews",
      icon: <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500"><Users className="h-5 w-5" /></div>,
      description: "Conduct seamless remote interviews with AI-assisted evaluation and candidate assessment.",
      features: ["Automated scheduling", "AI sentiment analysis", "Candidate engagement metrics", "Recording & playback", "Team collaboration"],
      status: "coming-soon"
    },
    {
      name: "Candidate Matching",
      icon: <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-500"><Star className="h-5 w-5" /></div>,
      description: "Our AI algorithms match candidates to your job requirements with exceptional accuracy.",
      features: ["Skill-based matching", "Cultural fit assessment", "Bias reduction", "Candidate ranking", "Integration with ATS"],
      status: "available"
    },
    {
      name: "Pre-vetted Talent Pool",
      icon: <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500"><Shield className="h-5 w-5" /></div>,
      description: "Access our database of pre-screened candidates who are ready to interview.",
      features: ["Verified credentials", "Skill certifications", "Technical assessments", "Availability tracking", "Direct messaging"],
      status: "coming-soon"
    }
  ];

  const benefits = [
    {
      title: "Time Savings",
      icon: <Clock className="h-6 w-6 text-[#E2FF55]" />,
      description: "Reduce time-to-hire by up to 80% with automated screening and AI-powered candidate matching."
    },
    {
      title: "Higher Quality Candidates",
      icon: <Star className="h-6 w-6 text-[#E2FF55]" />,
      description: "Our AI algorithms identify the best talent based on skills, experience and cultural fit."
    },
    {
      title: "Reduced Bias",
      icon: <Shield className="h-6 w-6 text-[#E2FF55]" />,
      description: "Our technology is designed to minimize unconscious bias in the hiring process."
    },
    {
      title: "Cost Efficiency",
      icon: <Download className="h-6 w-6 text-[#E2FF55]" />,
      description: "Save on recruitment costs by streamlining your hiring process with AI automation."
    }
  ];

  const comparisonData = [
    {
      feature: "Automated candidate screening",
      traditional: false,
      ai: true
    },
    {
      feature: "Bias reduction technology",
      traditional: false,
      ai: true
    },
    {
      feature: "Skill-based assessments",
      traditional: true,
      ai: true
    },
    {
      feature: "Automated interview scheduling",
      traditional: false,
      ai: true
    },
    {
      feature: "AI-powered candidate matching",
      traditional: false,
      ai: true
    },
    {
      feature: "Real-time analytics & insights",
      traditional: false,
      ai: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#E2FF55]/15 to-[#E2FF55]/5 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-[#7B78FF]/15 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <Header />
      
      <main className="flex-grow relative z-10 pt-24">
        {/* Products Section */}
        <section className="py-16 md:py-24 bg-[#080820] px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Our <span className="text-[#E2FF55]">AI-Powered</span> Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform every stage of your hiring process with our innovative AI tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="bg-[#0F103E] border border-gray-800 rounded-xl p-6 transform hover:translate-y-[-4px] transition-all duration-300 hover:shadow-lg hover:shadow-[#E2FF55]/10 flex flex-col"
                >
                  <div className="mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#E2FF55] mr-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    {product.status === "available" ? (
                      <Link to="/pricing">
                        <Button className="w-full bg-[#E2FF55] hover:bg-[#E2FF55]/90 text-[#0A0A29] flex items-center justify-center gap-2">
                          Try {product.name} <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    ) : (
                      <Button disabled className="w-full bg-gray-700 hover:bg-gray-700 text-white flex items-center justify-center">
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Why Choose <span className="text-[#E2FF55]">AI-Powered</span> Recruitment?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our solutions deliver measurable improvements to your hiring outcomes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start p-6 bg-[#0F103E]/50 border border-gray-800 rounded-xl transform hover:translate-y-[-4px] transition-all duration-300"
                >
                  <div className="mr-4 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Comparison Table */}
        <section className="py-16 md:py-24 bg-[#080820] px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                AI vs. Traditional <span className="text-[#E2FF55]">Recruitment</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how AI-powered solutions outperform traditional recruiting methods
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-[#0F103E] rounded-xl overflow-hidden border border-gray-800">
              <div className="grid grid-cols-3 bg-[#0A0A29] py-4">
                <div className="text-gray-300 font-bold text-center">Feature</div>
                <div className="text-gray-300 font-bold text-center">Traditional Recruiting</div>
                <div className="text-[#E2FF55] font-bold text-center">AI-Powered Recruiting</div>
              </div>
              
              {comparisonData.map((item, index) => (
                <div key={index} className={`grid grid-cols-3 py-4 ${index % 2 === 0 ? 'bg-[#0F103E]' : 'bg-[#0F103E]/50'}`}>
                  <div className="text-white text-center px-4">{item.feature}</div>
                  <div className="text-center">
                    {item.traditional ? 
                      <CheckCircle className="h-5 w-5 text-green-400 mx-auto" /> : 
                      <XCircle className="h-5 w-5 text-red-400 mx-auto" />}
                  </div>
                  <div className="text-center">
                    {item.ai ? 
                      <CheckCircle className="h-5 w-5 text-[#E2FF55] mx-auto" /> : 
                      <XCircle className="h-5 w-5 text-red-400 mx-auto" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section - Updated to remove the image */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto bg-[#0F103E] rounded-xl overflow-hidden shadow-lg border border-[#E2FF55]/10 transform transition-all duration-500 hover:shadow-xl hover:shadow-[#E2FF55]/20">
              <div className="bg-gradient-to-r from-[#0F103E]/90 to-[#080822]/90 p-8 md:p-10">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to <span className="text-[#E2FF55]">Revolutionize</span> Your Hiring?</h2>
                  <p className="text-gray-300 mb-6 text-lg">HyreDragon helps you find the best talent faster with AI-powered assessments.</p>
                  <Link to="/request-demo">
                    <Button className="bg-[#E2FF55] hover:bg-[#E2FF55]/90 text-[#0A0A29] px-6 py-6 rounded-full font-medium text-lg flex items-center gap-2 shadow-lg">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Repositioned scroll to top button to the left side */}
      <div className="fixed bottom-8 left-8 z-40">
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default AIProducts;
