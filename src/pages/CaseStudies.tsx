
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Building, Users, Calendar, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudy {
  id: number;
  title: string;
  company: string;
  industry: string;
  image: string;
  summary: string;
  results: {
    metric: string;
    value: string;
    icon: React.ReactNode;
  }[];
  fullUrl: string;
}

const CaseStudies: React.FC = () => {
  // Case studies data
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "TechCorp Reduces Time-to-Hire by 65%",
      company: "TechCorp",
      industry: "Technology",
      image: "/lovable-uploads/2ac00526-118f-4870-a52a-ca8830559cc1.png",
      summary: "How a leading tech company transformed their recruitment process using HyrDragon's AI platform to dramatically decrease their hiring timeline while improving candidate quality.",
      results: [
        { metric: "Time-to-hire reduction", value: "65%", icon: <Calendar className="h-5 w-5 text-[#E2FF55]" /> },
        { metric: "Candidate quality increase", value: "47%", icon: <Users className="h-5 w-5 text-[#E2FF55]" /> },
        { metric: "Recruiter productivity", value: "3.5x", icon: <BarChart3 className="h-5 w-5 text-[#E2FF55]" /> },
      ],
      fullUrl: "#case-study-1"
    },
    {
      id: 2,
      title: "Global Retail Chain Improves Candidate Quality",
      company: "MegaMart",
      industry: "Retail",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&auto=format&fit=crop",
      summary: "A multinational retailer's journey to better hiring decisions with data-driven recruitment, resulting in higher employee retention and performance metrics.",
      results: [
        { metric: "Employee retention", value: "+38%", icon: <Users className="h-5 w-5 text-[#E2FF55]" /> },
        { metric: "Hiring cost reduction", value: "42%", icon: <Building className="h-5 w-5 text-[#E2FF55]" /> },
        { metric: "Store performance", value: "+17%", icon: <BarChart3 className="h-5 w-5 text-[#E2FF55]" /> },
      ],
      fullUrl: "#case-study-2"
    },
    {
      id: 3,
      title: "HealthCare Inc. Streamlines Medical Staffing",
      company: "HealthCare Inc.",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&auto=format&fit=crop",
      summary: "How a hospital network used HyrDragon to solve their critical staffing challenges and improve patient care through better healthcare professional matching.",
      results: [
        { metric: "Staff vacancies", value: "-78%", icon: <Users className="h-5 w-5 text-[#E2FF55]" /> },
        { metric: "Patient satisfaction", value: "+22%", icon: <BarChart3 className="h-5 w-5 text-[#E2FF55]" /> },
        { metric: "Compliance rate", value: "99.8%", icon: <FileText className="h-5 w-5 text-[#E2FF55]" /> },
      ],
      fullUrl: "#case-study-3"
    },
  ];

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

  // Money falling effect trigger for demo purposes
  const [showMoneyEffect, setShowMoneyEffect] = useState(false);
  
  const triggerMoneyEffect = () => {
    setShowMoneyEffect(true);
    createMoneyParticles();
    setTimeout(() => setShowMoneyEffect(false), 3000);
  };
  
  const createMoneyParticles = () => {
    const container = document.body;
    const symbols = ['$', '€', '£', '¥'];
    
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const particle = document.createElement('div');
        particle.className = 'money-particle';
        
        // Random symbol
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        particle.innerText = symbol;
        
        // Random position, size, and animation duration
        const posX = Math.random() * window.innerWidth;
        const size = Math.random() * 30 + 20;
        const duration = Math.random() * 3 + 2;
        
        particle.style.left = `${posX}px`;
        particle.style.fontSize = `${size}px`;
        particle.style.color = '#E2FF55';
        particle.style.animationDuration = `${duration}s`;
        
        container.appendChild(particle);
        
        // Remove after animation completes
        setTimeout(() => {
          if (particle.parentNode === container) {
            container.removeChild(particle);
          }
        }, duration * 1000);
      }, i * 100);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Background circular gradients */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-[#7B78FF]/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>

      <Header />

      <main className="flex-grow relative z-10 pt-24">
        {/* Hero Section */}
        <section className="pt-8 pb-16 md:pt-16 md:pb-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Client <span className="text-[#E2FF55]">Success Stories</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover how companies have transformed their recruitment process with HyrDragon's AI-powered platform.
              </p>
              <Button 
                onClick={triggerMoneyEffect}
                className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 px-6 py-3 rounded-full"
              >
                See ROI Impact
              </Button>
            </div>

            {/* Featured stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-[#080822]/80 border border-[#7B78FF]/30 rounded-lg p-6 text-center animate-on-scroll">
                <div className="text-[#E2FF55] text-4xl font-bold mb-2">3.7x</div>
                <p className="text-white">Average ROI</p>
              </div>
              <div className="bg-[#080822]/80 border border-[#7B78FF]/30 rounded-lg p-6 text-center animate-on-scroll">
                <div className="text-[#E2FF55] text-4xl font-bold mb-2">65%</div>
                <p className="text-white">Faster Time-to-Hire</p>
              </div>
              <div className="bg-[#080822]/80 border border-[#7B78FF]/30 rounded-lg p-6 text-center animate-on-scroll">
                <div className="text-[#E2FF55] text-4xl font-bold mb-2">41%</div>
                <p className="text-white">Cost Reduction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 px-4 bg-[#080820]">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
              Featured <span className="text-[#E2FF55]">Case Studies</span>
            </h2>

            <div className="space-y-16 md:space-y-24 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <div 
                  key={study.id} 
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 animate-on-scroll`}
                >
                  <div className="md:w-1/2">
                    <div className="bg-[#0F103E]/80 border border-gray-700 rounded-xl overflow-hidden h-full">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <div className="bg-[#0A0A29]/60 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
                      <div className="text-[#E2FF55] text-sm font-medium mb-2">{study.industry}</div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">{study.title}</h3>
                      <p className="text-gray-300 mb-6">{study.summary}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        {study.results.map((result, i) => (
                          <div key={i} className="flex flex-col items-center p-3 bg-[#080822]/80 rounded-lg">
                            {result.icon}
                            <div className="text-[#E2FF55] text-xl font-bold mt-2">{result.value}</div>
                            <div className="text-gray-400 text-xs text-center">{result.metric}</div>
                          </div>
                        ))}
                      </div>
                      
                      <Link to={study.fullUrl}>
                        <Button 
                          variant="outline" 
                          className="border-[#E2FF55] text-[#E2FF55] hover:bg-[#E2FF55]/10"
                        >
                          Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center animate-on-scroll">
              What Our Clients <span className="text-[#E2FF55]">Say</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto animate-on-scroll">
              <div className="bg-[#080822]/80 border border-gray-800 rounded-xl p-6 relative">
                <div className="absolute -top-5 -left-5 text-[#E2FF55] text-6xl opacity-30">"</div>
                <p className="text-gray-300 mb-6 relative z-10">
                  "HyrDragon has completely transformed our recruitment process. We can now find the right talent in a fraction of the time it used to take us."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#7B78FF]/30 rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-medium">John Doe</div>
                    <div className="text-gray-400 text-sm">CTO, TechCorp</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#080822]/80 border border-gray-800 rounded-xl p-6 relative">
                <div className="absolute -top-5 -left-5 text-[#E2FF55] text-6xl opacity-30">"</div>
                <p className="text-gray-300 mb-6 relative z-10">
                  "The ROI we've seen from implementing HyrDragon has been incredible. Not only have we reduced costs, but the quality of candidates has improved significantly."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#7B78FF]/30 rounded-full flex items-center justify-center text-white font-bold">
                    AS
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-medium">Alice Smith</div>
                    <div className="text-gray-400 text-sm">HR Director, MegaMart</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#080822]/80 border border-gray-800 rounded-xl p-6 relative">
                <div className="absolute -top-5 -left-5 text-[#E2FF55] text-6xl opacity-30">"</div>
                <p className="text-gray-300 mb-6 relative z-10">
                  "The AI matching technology is remarkable. We've seen a significant improvement in candidate quality and our recruiters can focus on more strategic tasks."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#7B78FF]/30 rounded-full flex items-center justify-center text-white font-bold">
                    RJ
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-medium">Robert Johnson</div>
                    <div className="text-gray-400 text-sm">CEO, HealthCare Inc.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4 relative overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your <span className="text-[#E2FF55]">Recruitment Process</span>?
              </h2>
              <p className="text-gray-300 text-xl mb-8">
                Join these success stories and see how HyrDragon can revolutionize your hiring.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/request-demo">
                  <Button 
                    className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 px-8 py-6 rounded-full text-lg"
                  >
                    Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg"
                  >
                    Contact Sales
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

export default CaseStudies;
