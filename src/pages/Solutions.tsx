
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  bgColor?: string;
  linkText?: string;
  linkUrl?: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ 
  title, 
  description, 
  icon, 
  features,
  bgColor = "bg-[#080822]",
  linkText = "Learn More",
  linkUrl = "#"
}) => {
  return (
    <div className={`${bgColor} border border-gray-800 rounded-xl p-6 hover:border-[#E2FF55]/40 transition-all duration-300 h-full flex flex-col`}>
      <div className="p-3 bg-[#E2FF55]/10 rounded-xl w-12 h-12 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <div className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="mr-3 rounded-full p-1 bg-[#E2FF55]/10">
              <CheckCircle className="h-4 w-4 text-[#E2FF55]" />
            </div>
            <span className="text-gray-200 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      <Link to={linkUrl}>
        <Button 
          variant="link" 
          className="text-[#7B78FF] hover:text-[#E2FF55] p-0 h-auto font-medium flex items-center"
        >
          {linkText} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
};

const Solutions: React.FC = () => {
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

  // Recruitment solutions data
  const recruitmentSolutions = [
    {
      title: "AI Candidate Matching",
      description: "Find the perfect candidates faster with our advanced AI matching algorithm.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E2FF55]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
      features: [
        "85%+ accuracy in candidate-job matching",
        "Automated skill assessment and ranking",
        "Customizable matching criteria",
        "Bias reduction algorithms"
      ]
    },
    {
      title: "Smart Screening Process",
      description: "Automate initial candidate screening to save time and focus on quality candidates.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E2FF55]"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="m9 16 2 2 4-4"></path></svg>,
      features: [
        "Automated resume parsing and analysis",
        "Pre-screening questionnaires",
        "Skills assessment integration",
        "Video interview scheduling"
      ]
    },
    {
      title: "Interview Management",
      description: "Streamline your interview process with AI-assisted tools and collaboration features.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E2FF55]"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>,
      features: [
        "AI-generated interview questions",
        "Collaborative interview feedback",
        "Structured interview templates",
        "Candidate evaluation scorecards"
      ]
    },
    {
      title: "Analytics & Reporting",
      description: "Gain valuable insights into your recruitment process with advanced analytics.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E2FF55]"><path d="M3 3v18h18"></path><path d="M18 12V8"></path><path d="M14 16v-6"></path><path d="M10 16v-1"></path><path d="M6 16V4"></path></svg>,
      features: [
        "Comprehensive recruitment metrics dashboard",
        "Customizable reporting",
        "Recruitment funnel analytics",
        "Hiring process optimization insights"
      ]
    }
  ];

  // Industry-specific solutions data
  const industrySolutions = [
    {
      title: "Tech & IT Recruitment",
      description: "Specialized solutions for hiring developers, engineers, and IT professionals.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E2FF55]"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>,
      features: [
        "Technical skills assessment",
        "Code challenge platform",
        "Tech-specific job templates",
        "Integration with developer platforms"
      ],
      bgColor: "bg-[#121236]/80"
    },
    {
      title: "Healthcare Staffing",
      description: "Solutions for healthcare organizations to find qualified medical professionals.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E2FF55]"><path d="M19 9h-5a2 2 0 0 0-2 2v.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V11a2 2 0 0 0-2-2H4"></path><path d="M7 21h10"></path><path d="M12 11v10"></path><path d="M3 9v12"></path><path d="M21 9v12"></path><path d="M7 16h10"></path></svg>,
      features: [
        "Medical credentials verification",
        "Compliance and licensing tracking",
        "Specialty-specific matching",
        "Shift scheduling integration"
      ],
      bgColor: "bg-[#121236]/80"
    },
    {
      title: "Financial Services",
      description: "Tailored recruitment solutions for banking, finance, and insurance sectors.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E2FF55]"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="2" x2="22" y1="7" y2="7"></line><line x1="12" x2="12" y1="17" y2="11"></line><path d="M5 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"></path><path d="M15 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"></path></svg>,
      features: [
        "Financial certifications tracking",
        "Compliance-focused screening",
        "Risk assessment for candidates",
        "Background check integration"
      ],
      bgColor: "bg-[#121236]/80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Background elements */}
      <div className="fixed top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute bottom-60 left-1/4 w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="absolute top-96 right-1/3 w-1 h-1 bg-white rounded-full"></div>
        
        {/* Background circular gradients */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-[#7B78FF]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>
      </div>
      
      <Header />
      
      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                AI-Powered <span className="text-[#E2FF55]">Recruitment Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10">
                Transform your hiring process with our suite of intelligent recruitment tools designed for the modern workforce.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/request-demo">
                  <Button 
                    size="lg"
                    className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 text-lg px-8 py-6 rounded-full flex items-center gap-2"
                  >
                    Request a demo <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 bg-transparent transition-colors text-lg px-8 py-6 rounded-full"
                  onClick={() => {
                    const solutionsSection = document.getElementById('recruitment-solutions');
                    solutionsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Solutions <ChevronDown className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Recruitment Solutions */}
        <section id="recruitment-solutions" className="py-16 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Core Recruitment <span className="text-[#E2FF55]">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive suite of AI-powered recruitment tools to optimize every step of your hiring process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-on-scroll">
              {recruitmentSolutions.map((solution, index) => (
                <SolutionCard key={index} {...solution} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Industry-Specific Solutions */}
        <section className="py-16 md:py-20 px-4 bg-[#080820]">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Industry-Specific <span className="text-[#E2FF55]">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored recruitment solutions that address the unique hiring challenges of different industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-on-scroll">
              {industrySolutions.map((solution, index) => (
                <SolutionCard key={index} {...solution} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Integration Section */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Seamless <span className="text-[#E2FF55]">Integration</span>
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Hydragon integrates with your existing HR stack, ensuring a smooth workflow for your entire recruitment process.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="mr-3 rounded-full p-1 bg-[#E2FF55]/10">
                      <CheckCircle className="h-5 w-5 text-[#E2FF55]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">HRIS Integration</h3>
                      <p className="text-gray-300">Connect with popular HRIS systems for seamless data flow</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-3 rounded-full p-1 bg-[#E2FF55]/10">
                      <CheckCircle className="h-5 w-5 text-[#E2FF55]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Calendar Integration</h3>
                      <p className="text-gray-300">Sync with Google Calendar, Outlook, and more for scheduling</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-3 rounded-full p-1 bg-[#E2FF55]/10">
                      <CheckCircle className="h-5 w-5 text-[#E2FF55]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">API Access</h3>
                      <p className="text-gray-300">Robust API for custom integrations with your tech stack</p>
                    </div>
                  </div>
                </div>
                <Link to="/request-demo">
                  <Button 
                    className="bg-[#7B78FF] text-white hover:bg-[#7B78FF]/90 flex items-center gap-2"
                  >
                    Talk to an Integration Specialist <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
              
              <div className="bg-[#080822]/80 border border-gray-800 rounded-xl p-6 animate-on-scroll">
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(9)].map((_, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-4 aspect-square flex items-center justify-center">
                      <div className="w-10 h-10 bg-white/10 rounded-md"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Case Study Highlight */}
        <section className="py-16 md:py-20 px-4 bg-[#080820]">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto bg-[#121236] rounded-xl overflow-hidden animate-on-scroll">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 md:p-12">
                  <div className="inline-block bg-[#E2FF55]/20 text-[#E2FF55] text-sm px-3 py-1 rounded-full mb-6">
                    Case Study
                  </div>
                  <h2 className="text-3xl font-bold mb-6 text-white leading-tight">
                    How TechCorp Reduced Time-to-Hire by 65%
                  </h2>
                  <p className="text-gray-300 mb-6">
                    TechCorp was struggling with a lengthy hiring process that was causing them to lose top talent. After implementing Hydragon's AI recruitment platform, they saw dramatic improvements.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="w-20 text-[#E2FF55] text-2xl font-bold">65%</div>
                      <div className="text-white">Reduction in time-to-hire</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20 text-[#E2FF55] text-2xl font-bold">48%</div>
                      <div className="text-white">Increase in quality of hires</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20 text-[#E2FF55] text-2xl font-bold">30%</div>
                      <div className="text-white">Reduction in recruitment costs</div>
                    </div>
                  </div>
                  <Link to="/resources">
                    <Button 
                      variant="outline"
                      className="border-[#E2FF55] text-[#E2FF55] hover:bg-[#E2FF55]/10 bg-transparent transition-colors flex items-center gap-2"
                    >
                      Read Full Case Study <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div className="bg-gray-800 lg:h-auto">
                  <img 
                    src="/placeholder.svg" 
                    alt="TechCorp Case Study" 
                    className="w-full h-full object-cover"
                    style={{ minHeight: "300px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call To Action */}
        <section className="py-16 md:py-24 px-4 relative">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Recruitment Process?
              </h2>
              <p className="text-gray-300 text-lg md:text-xl mb-8">
                Join leading companies that have revolutionized their hiring with Hydragon's AI-powered platform.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/request-demo">
                  <Button 
                    size="lg"
                    className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 text-lg px-8 py-6 rounded-full flex items-center gap-2"
                  >
                    Request a demo <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button 
                    size="lg"
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 bg-transparent transition-colors text-lg px-8 py-6 rounded-full"
                  >
                    View pricing
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

export default Solutions;
