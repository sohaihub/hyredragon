import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, BarChart3, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetricsShowcase from '@/components/MetricsShowcase';
import RecruitmentSteps from '@/components/RecruitmentSteps';
import ComparisonSection from '@/components/ComparisonSection';
import PricingPackagesSection from '@/components/PricingPackagesSection';

const Home: React.FC = () => {
  // News headlines
  const newsItems = [
    { tag: 'NEW', tagColor: 'bg-[#E2FF55] text-[#0A0A29]', content: 'HyrDragon releases advanced AI matching algorithm' },
    { tag: 'REPORT', tagColor: 'bg-[#7B78FF] text-white', content: 'Companies using AI recruitment see 65% faster time-to-hire' },
    { tag: 'INSIGHT', tagColor: 'bg-white/20 text-white', content: 'Remote hiring challenges solved with intelligent recruitment platforms' },
    { tag: 'UPDATE', tagColor: 'bg-[#E2FF55] text-[#0A0A29]', content: 'New features added to HyrDragon platform - Try them today!' },
    { tag: 'WEBINAR', tagColor: 'bg-[#7B78FF] text-white', content: 'Join our upcoming webinar on AI-powered recruitment strategies' }
  ];
  
  // News ticker animation
  const [newsPosition, setNewsPosition] = useState(0);
  
  useEffect(() => {
    const tickerInterval = setInterval(() => {
      setNewsPosition(prev => (prev + 1) % newsItems.length);
    }, 5000);
    
    return () => clearInterval(tickerInterval);
  }, [newsItems.length]);
  
  // Add scroll animation effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Background elements */}
      <div className="fixed top-0 left-0 w-full h-full">
        {/* Background circular gradients */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-[#7B78FF]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>
      </div>
      
      <Header />
      
      <main className="flex-grow relative z-10 pt-24">
        {/* Hero Section */}
        <section className="pt-8 pb-16 md:pt-16 md:pb-24 px-4 relative overflow-hidden">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-6 mb-10 md:mb-0">
                <div className="bg-gradient-to-r from-[#E2FF55]/20 to-transparent px-4 py-2 rounded-full inline-block mb-4">
                  <span className="text-[#E2FF55] font-medium">AI-Powered Recruitment</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Find the Right Talent, <span className="text-[#E2FF55]">Faster & Smarter</span> with AI
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Transform your hiring process with our AI-powered recruitment platform. Save time, reduce bias, and hire better candidates.
                </p>
                <div className="flex justify-start mb-8">
                  <Link to="/request-demo">
                    <Button 
                      size="lg"
                      className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 text-lg px-8 py-6 rounded-full flex items-center gap-2"
                      data-trigger-money-effect="true"
                    >
                      Request a demo <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 flex items-center gap-8 justify-start">
                  <div className="flex items-center">
                    <div className="text-[#E2FF55] font-bold text-3xl">90%</div>
                    <span className="text-gray-300 text-sm ml-2">Faster <br />Hiring</span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-[#E2FF55] font-bold text-3xl">60%</div>
                    <span className="text-gray-300 text-sm ml-2">Cost <br />Reduction</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-[#0F103E]/80 border border-gray-700 rounded-xl p-4 backdrop-blur-lg shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <img 
                    src="/lovable-uploads/cc45f430-2139-45ed-80b1-d62a3afbdf25.png" 
                    alt="HyrDragon Recruitment Analytics Dashboard" 
                    className="w-full rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Metrics Showcase */}
        <MetricsShowcase />
      
        {/* Recruitment Steps */}
        <section className="py-16 md:py-24 px-4 relative">
          <div className="container mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Smarter Hiring in <span className="text-[#E2FF55]">4 Steps</span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <RecruitmentSteps />
            </div>
          </div>
        </section>
        
        {/* Features */}
        <section className="py-16 md:py-24 px-4 relative">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white animate-on-scroll">
              Features That <span className="text-[#E2FF55]">Recruiters Love</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Feature 1 */}
              <div className="bg-[#080822]/80 border border-gray-800 rounded-xl p-6 hover:border-[#E2FF55]/50 transition-all duration-300 animate-on-scroll">
                <div className="inline-block p-3 bg-gradient-to-br from-[#E2FF55] to-[#7B78FF] rounded-xl mb-4">
                  <BarChart3 className="w-6 h-6 text-[#0A0A29]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI-Powered Analytics</h3>
                <p className="text-gray-300">
                  Get valuable insights into your recruitment process with advanced analytics and predictive models that help you make better hiring decisions.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-[#080822]/80 border border-gray-800 rounded-xl p-6 hover:border-[#E2FF55]/50 transition-all duration-300 animate-on-scroll">
                <div className="inline-block p-3 bg-gradient-to-br from-[#E2FF55] to-[#7B78FF] rounded-xl mb-4">
                  <CheckCircle className="w-6 h-6 text-[#0A0A29]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Smart Screening</h3>
                <p className="text-gray-300">
                  Automatically screen candidates based on qualifications, skills, and experience to save time and focus on the most promising applicants.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-[#080822]/80 border border-gray-800 rounded-xl p-6 hover:border-[#E2FF55]/50 transition-all duration-300 animate-on-scroll">
                <div className="inline-block p-3 bg-gradient-to-br from-[#E2FF55] to-[#7B78FF] rounded-xl mb-4">
                  <Users className="w-6 h-6 text-[#0A0A29]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Collaborative Hiring</h3>
                <p className="text-gray-300">
                  Easily involve team members in the hiring process with collaborative tools for evaluation, feedback, and decision-making.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-[#080822]/80 border border-gray-800 rounded-xl p-6 hover:border-[#E2FF55]/50 transition-all duration-300 animate-on-scroll">
                <div className="inline-block p-3 bg-gradient-to-br from-[#E2FF55] to-[#7B78FF] rounded-xl mb-4">
                  <Zap className="w-6 h-6 text-[#0A0A29]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Automated Workflows</h3>
                <p className="text-gray-300">
                  Streamline your hiring process with customizable workflows that automate repetitive tasks and keep candidates moving through your pipeline.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Comparison Section */}
        <ComparisonSection />
        
        {/* Pricing Packages Section */}
        <PricingPackagesSection />
        
        {/* Why Choose Us */}
        <section className="py-16 md:py-24 px-4 relative bg-[#080820]">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#0A0A29] to-[#080820] pointer-events-none"></div>
          <div className="container mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white animate-on-scroll">
              Why <span className="text-[#E2FF55]">HyrDragon</span>?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Reason 1 */}
              <div className="relative p-6 animate-on-scroll">
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-[#E2FF55]/20 blur-xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#E2FF55] flex items-center justify-center mb-4">
                    <span className="text-[#0A0A29] font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Powerful AI Matching</h3>
                  <p className="text-gray-300">
                    Our proprietary AI algorithm precisely matches candidates to job requirements, saving you countless hours of manual screening.
                  </p>
                </div>
              </div>
              
              {/* Reason 2 */}
              <div className="relative p-6 animate-on-scroll">
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-[#7B78FF]/20 blur-xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#7B78FF] flex items-center justify-center mb-4">
                    <span className="text-[#0A0A29] font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Bias-Reducing Technology</h3>
                  <p className="text-gray-300">
                    Our platform helps eliminate unconscious bias in your hiring process, leading to more diverse and effective teams.
                  </p>
                </div>
              </div>
              
              {/* Reason 3 */}
              <div className="relative p-6 animate-on-scroll">
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-[#9b87f5]/20 blur-xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#9b87f5] flex items-center justify-center mb-4">
                    <span className="text-[#0A0A29] font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Data-Driven Insights</h3>
                  <p className="text-gray-300">
                    Gain valuable insights into your hiring process with real-time analytics and actionable recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call To Action */}
        <section className="py-16 md:py-24 px-4 relative">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Let's Make Hiring Feel Effortless
              </h2>
              <p className="text-gray-300 text-lg md:text-xl mb-8">
                Join thousands of companies that have transformed their recruitment process with HyrDragon.
              </p>
              <div className="flex justify-center">
                <Link to="/request-demo">
                  <Button 
                    size="lg"
                    className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 text-lg px-8 py-6 rounded-full flex items-center gap-2 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Request a demo</span> <ArrowRight className="w-5 h-5 relative z-10" />
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 ease-out"></span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* News Ticker - Updated with better animation */}
        <section className="py-4 bg-[#080820]/80 border-y border-gray-800 overflow-hidden">
          <div className="container mx-auto">
            <div className="flex items-center overflow-hidden relative h-12">
              <div className="whitespace-nowrap animate-marquee inline-flex items-center gap-8">
                {[...newsItems, ...newsItems].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className={`${item.tagColor} text-xs px-2 py-0.5 rounded-full font-bold`}>
                      {item.tag}
                    </span>
                    <span className="text-white font-medium">
                      {item.content}
                    </span>
                    <span className="text-gray-500 mx-4">•</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
