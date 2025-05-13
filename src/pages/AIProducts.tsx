
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Sparkles, Zap, LineChart, Layers, Cpu, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon, features }) => {
  return (
    <div className="bg-[#080822]/80 border border-gray-800 rounded-xl p-6 md:p-8 hover:border-[#E2FF55]/50 transition-all duration-300 h-full flex flex-col">
      <div className="p-3 bg-gradient-to-br from-[#E2FF55]/20 to-[#7B78FF]/20 rounded-xl w-12 h-12 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <div className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="mr-3 text-[#E2FF55]">
              <Check className="h-5 w-5" />
            </div>
            <span className="text-gray-200 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      <Link to="/request-demo">
        <Button 
          className="bg-[#7B78FF]/90 hover:bg-[#7B78FF] text-white w-full"
        >
          Learn More
        </Button>
      </Link>
    </div>
  );
};

const AIProducts: React.FC = () => {
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

  const aiProducts = [
    {
      title: "AI Talent Matcher",
      description: "Our core AI technology that matches candidates to job requirements with unprecedented accuracy.",
      icon: <Sparkles className="h-6 w-6 text-[#E2FF55]" />,
      features: [
        "85% more accurate candidate matching than traditional methods",
        "Considers hard skills, soft skills, and cultural fit",
        "Reduces time-to-hire by up to 65%",
        "Continuously learns and improves from your hiring decisions"
      ]
    },
    {
      title: "Smart Screening Assistant",
      description: "Automate the initial screening process to quickly identify the most promising candidates.",
      icon: <Zap className="h-6 w-6 text-[#E2FF55]" />,
      features: [
        "Automated resume parsing and analysis",
        "Intelligent Q&A screening with custom parameters",
        "Candidate ranking based on your specific criteria",
        "Integration with assessment tools"
      ]
    },
    {
      title: "Recruitment Analytics Engine",
      description: "Gain actionable insights into your recruitment process with advanced analytics.",
      icon: <LineChart className="h-6 w-6 text-[#E2FF55]" />,
      features: [
        "Comprehensive recruitment metrics dashboard",
        "Predictive hiring trends based on historical data",
        "Bottleneck identification in your hiring funnel",
        "Custom reports and analytics"
      ]
    },
    {
      title: "Interview Intelligence",
      description: "Enhance your interview process with AI-powered insights and tools.",
      icon: <BrainCircuit className="h-6 w-6 text-[#E2FF55]" />,
      features: [
        "AI-generated interview questions tailored to each role",
        "Sentiment analysis for interview feedback",
        "Skills gap identification during interviews",
        "Bias detection and reduction tools"
      ]
    },
    {
      title: "Candidate Engagement Bot",
      description: "Keep candidates informed and engaged throughout the hiring process.",
      icon: <Layers className="h-6 w-6 text-[#E2FF55]" />,
      features: [
        "Automated updates at each stage of recruitment",
        "Intelligent responses to common candidate questions",
        "Scheduling and rescheduling capabilities",
        "Personalized candidate communications"
      ]
    },
    {
      title: "HR Process Automation",
      description: "Streamline repetitive HR tasks with intelligent automation.",
      icon: <Cpu className="h-6 w-6 text-[#E2FF55]" />,
      features: [
        "Automated workflow management",
        "Document processing and verification",
        "Onboarding process automation",
        "Custom triggers and actions"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Background elements */}

      <Header />
      
      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-[#E2FF55]/20 px-4 py-2 rounded-full mb-6">
                <span className="text-[#E2FF55] font-medium text-sm">Powered by Advanced AI</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our <span className="text-[#E2FF55]">AI Products</span> for Smarter Recruitment
              </h1>
              <p className="text-xl text-gray-300 mb-10">
                Discover our suite of AI-powered products designed to transform every aspect of your hiring process.
              </p>
              <div className="flex justify-center">
                <Link to="/request-demo">
                  <Button 
                    size="lg"
                    className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 text-lg px-8 py-6 rounded-full flex items-center gap-2"
                  >
                    Request a demo <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Product Grid */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-on-scroll">
              {aiProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Technology Behind */}
        <section className="py-16 md:py-20 px-4 bg-[#080820]">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  The Technology <span className="text-[#E2FF55]">Behind Our AI</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our proprietary AI algorithms combine multiple advanced technologies to deliver unparalleled recruitment intelligence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
                <div className="bg-[#0A0A29] border border-gray-800 rounded-xl overflow-hidden p-1">
                  <div className="aspect-video bg-[#080822] rounded-lg flex items-center justify-center">
                    {/* This would be a tech diagram or animation */}
                    <div className="w-64 h-64 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#E2FF55]/20 to-[#7B78FF]/20 rounded-full animate-pulse-light"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#080822] rounded-full flex items-center justify-center">
                        <BrainCircuit className="h-20 w-20 text-[#E2FF55]" />
                      </div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#E2FF55] rounded-full"></div>
                      <div className="absolute top-1/4 right-0 w-3 h-3 bg-[#7B78FF] rounded-full"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-[#9b87f5] rounded-full"></div>
                      <div className="absolute bottom-0 left-1/3 w-3 h-3 bg-[#E2FF55] rounded-full"></div>
                      <div className="absolute top-1/3 left-0 w-3 h-3 bg-[#7B78FF] rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Machine Learning</h3>
                    <p className="text-gray-300">
                      Our algorithms continuously learn from successful hires and improve matching accuracy over time, adapting to your specific hiring preferences and needs.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Natural Language Processing</h3>
                    <p className="text-gray-300">
                      Advanced NLP capabilities extract meaningful insights from resumes, job descriptions, and candidate communications for better matching and understanding.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Predictive Analytics</h3>
                    <p className="text-gray-300">
                      Our systems analyze patterns in your hiring data to predict future outcomes, such as candidate success, time-to-hire, and retention rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Success Metrics */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Delivering <span className="text-[#E2FF55]">Measurable Results</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI products deliver concrete improvements to your recruitment metrics. Here's what our clients experience on average:
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
                <div className="bg-[#080822]/80 border border-gray-800 rounded-xl p-6 text-center">
                  <div className="text-[#E2FF55] font-bold text-5xl mb-4">65%</div>
                  <p className="text-white font-medium">Reduction in time-to-hire</p>
                </div>
                
                <div className="bg-[#080822]/80 border border-gray-800 rounded-xl p-6 text-center">
                  <div className="text-[#E2FF55] font-bold text-5xl mb-4">85%</div>
                  <p className="text-white font-medium">Increase in candidate quality</p>
                </div>
                
                <div className="bg-[#080822]/80 border border-gray-800 rounded-xl p-6 text-center">
                  <div className="text-[#E2FF55] font-bold text-5xl mb-4">40%</div>
                  <p className="text-white font-medium">Reduction in recruitment costs</p>
                </div>
                
                <div className="bg-[#080822]/80 border border-gray-800 rounded-xl p-6 text-center">
                  <div className="text-[#E2FF55] font-bold text-5xl mb-4">50%</div>
                  <p className="text-white font-medium">Improvement in retention rates</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 md:py-20 px-4 bg-[#080820]">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  What Our <span className="text-[#E2FF55]">Clients Say</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Hear from organizations that have transformed their recruitment with our AI products.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
                <div className="bg-[#0A0A29] border border-gray-800 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&auto=format&crop=faces&fit=crop&h=50&w=50" 
                      alt="Sarah Johnson" 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-white font-bold">Sarah Johnson</h3>
                      <p className="text-gray-400">HR Director, TechCorp Inc.</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "HyreDragon's AI Talent Matcher has completely transformed our hiring process. We're finding better candidates in half the time, and our hiring managers are thrilled with the quality of matches."
                  </p>
                </div>
                
                <div className="bg-[#0A0A29] border border-gray-800 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&auto=format&crop=faces&fit=crop&h=50&w=50" 
                      alt="Michael Chen" 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-white font-bold">Michael Chen</h3>
                      <p className="text-gray-400">Recruitment Lead, Global Retail Co.</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "The analytics engine has given us insights we never had before. We can now see exactly where candidates drop off in our process and optimize accordingly. Our cost-per-hire has decreased by 42%."
                  </p>
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
                Ready to Experience the Future of Recruitment?
              </h2>
              <p className="text-gray-300 text-lg md:text-xl mb-8">
                Schedule a personalized demo to see our AI products in action and learn how they can transform your hiring process.
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

export default AIProducts;
