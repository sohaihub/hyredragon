
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const SolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Background stars/dots */}
      <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full"></div>
      <div className="absolute top-40 right-40 w-2 h-2 bg-white rounded-full"></div>
      <div className="absolute bottom-60 left-1/4 w-1.5 h-1.5 bg-white rounded-full"></div>
      <div className="absolute top-96 right-1/3 w-1 h-1 bg-white rounded-full"></div>
      <div className="absolute top-1/2 left-10 w-2 h-2 bg-white rounded-full"></div>
      <div className="absolute bottom-1/3 right-24 w-1 h-1 bg-white rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full"></div>
      
      {/* Background circular gradients */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#E2FF55]/20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="text-center py-16 md:py-20 px-4 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>
          
          <div className="container mx-auto relative z-10 max-w-5xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Recruitment <span className="text-[#E2FF55]">Solutions</span> for Every Business
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              Streamline your hiring process with AI-powered solutions tailored to your organization's specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 rounded-full font-medium px-8 py-6"
              >
                Explore Solutions
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 py-6"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  <span className="text-[#E2FF55]">AI-Powered</span> Candidate Matching
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Our advanced AI algorithms analyze thousands of data points to find the perfect match between job requirements and candidate profiles, reducing time-to-hire by up to 50%.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="text-[#E2FF55] mr-3 mt-1" size={20} />
                    <span className="text-gray-300">Skills-based matching beyond keyword searching</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#E2FF55] mr-3 mt-1" size={20} />
                    <span className="text-gray-300">Personality and cultural fit assessment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#E2FF55] mr-3 mt-1" size={20} />
                    <span className="text-gray-300">Bias mitigation for more diverse hiring</span>
                  </li>
                </ul>
                <Button 
                  className="bg-[#7B78FF] text-white hover:bg-[#7B78FF]/90 rounded-full flex items-center gap-2"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="order-1 md:order-2 bg-[#0A0A29]/80 border border-[#7B78FF]/20 rounded-xl p-6 relative">
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-[#E2FF55]/10 rounded-full blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="AI Candidate Matching" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
              <div className="bg-[#0A0A29]/80 border border-[#7B78FF]/20 rounded-xl p-6 relative">
                <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-[#E2FF55]/10 rounded-full blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Automated Screening" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  <span className="text-[#E2FF55]">Automated</span> Candidate Screening
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Save countless hours with intelligent screening that processes applications, conducts initial assessments, and ranks candidates based on your specific criteria.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="text-[#E2FF55] mr-3 mt-1" size={20} />
                    <span className="text-gray-300">Customizable screening parameters</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#E2FF55] mr-3 mt-1" size={20} />
                    <span className="text-gray-300">Automated skill assessments and challenges</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#E2FF55] mr-3 mt-1" size={20} />
                    <span className="text-gray-300">Real-time scoring and ranking system</span>
                  </li>
                </ul>
                <Button 
                  className="bg-[#7B78FF] text-white hover:bg-[#7B78FF]/90 rounded-full flex items-center gap-2"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  <span className="text-[#E2FF55]">Intelligent</span> Interview Management
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Transform your interview process with AI-assisted scheduling, structured interview guides, and post-interview analysis to make more informed hiring decisions.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="text-[#E2FF55] mr-3 mt-1" size={20} />
                    <span className="text-gray-300">Smart scheduling with calendar integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#E2FF55] mr-3 mt-1" size={20} />
                    <span className="text-gray-300">AI-generated interview questions and scoring</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#E2FF55] mr-3 mt-1" size={20} />
                    <span className="text-gray-300">Collaborative feedback and decision tools</span>
                  </li>
                </ul>
                <Button 
                  className="bg-[#7B78FF] text-white hover:bg-[#7B78FF]/90 rounded-full flex items-center gap-2"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="order-1 md:order-2 bg-[#0A0A29]/80 border border-[#7B78FF]/20 rounded-xl p-6 relative">
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-[#E2FF55]/10 rounded-full blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Interview Management" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 relative overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Revolutionize Your Recruitment?
              </h2>
              <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl mx-auto">
                Join leading companies that have transformed their hiring with Hydragon's innovative solutions.
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg"
                  className="bg-[#7B78FF] text-white hover:bg-[#7B78FF]/90 text-lg px-8 py-6 rounded-full flex items-center gap-2"
                >
                  Request a demo <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SolutionsPage;
