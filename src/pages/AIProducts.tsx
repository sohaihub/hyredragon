
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Shield, Zap, FileSpreadsheet, Users, Flame, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  buttonText: string;
  buttonUrl: string;
  accentColor: string;
  isPopular?: boolean;
  isComingSoon?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  icon,
  features,
  buttonText,
  buttonUrl,
  accentColor,
  isPopular = false,
  isComingSoon = false
}) => (
  <div className={`relative bg-[#080822]/80 border-2 ${isComingSoon ? 'border-gray-700' : `border-${accentColor}`} rounded-xl p-6 transform transition-all duration-500 hover:shadow-lg hover:shadow-${accentColor}/20 group`}>
    {isPopular && (
      <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-[#E2FF55] text-[#080820] text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full shadow-lg shadow-[#E2FF55]/30 animate-pulse">
        Most Popular
      </div>
    )}
    {isComingSoon && (
      <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-[#FF9F5A] text-[#080820] text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full shadow-lg shadow-[#FF9F5A]/30">
        Coming Soon
      </div>
    )}
    <div className={`inline-block p-3 bg-${accentColor}/20 rounded-xl mb-4 transform transition-all duration-500 group-hover:scale-110`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E2FF55] transition-colors duration-300">{title}</h3>
    <p className="text-gray-300 mb-6">{description}</p>
    
    <h4 className="text-sm font-semibold text-gray-400 mb-3">FEATURES:</h4>
    <ul className="space-y-2 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start group-hover:transform group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
          <CheckCircle className={`h-5 w-5 text-${accentColor} mr-2 flex-shrink-0`} />
          <span className="text-gray-300 text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    
    <div className="mt-auto">
      <Link to={!isComingSoon ? buttonUrl : "#"} onClick={(e) => {
        if (isComingSoon) {
          e.preventDefault();
          toast({
            title: "Coming Soon",
            description: "This feature is currently in development. Stay tuned!",
            variant: "default"
          });
        }
      }}>
        <Button 
          variant="outline"
          className={`w-full ${
            isComingSoon 
              ? 'border-gray-700 text-gray-400 cursor-not-allowed' 
              : `border-${accentColor} text-${accentColor} hover:bg-${accentColor}/20`
          } transition-all duration-300`}
          disabled={isComingSoon}
        >
          {isComingSoon ? "Coming Soon" : buttonText}
          {!isComingSoon && <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />}
        </Button>
      </Link>
    </div>
  </div>
);

const AIProducts: React.FC = () => {
  // Reordered products as requested
  const products = [
    {
      title: "AI Assessment Suite",
      description: "Conduct comprehensive skill evaluations with our adaptive AI testing platform.",
      icon: <FileSpreadsheet className="w-6 h-6 text-[#7B78FF]" />,
      features: [
        "Customizable test templates",
        "Automated grading",
        "Anti-cheating mechanisms",
        "Detailed performance analytics",
        "Integration with ATS systems"
      ],
      buttonText: "Explore Assessment Suite",
      buttonUrl: "/request-demo",
      accentColor: "[#7B78FF]",
      isPopular: true
    },
    {
      title: "AI Driven Feedback",
      description: "Get real-time insights and feedback to make better hiring decisions.",
      icon: <Flame className="w-6 h-6 text-[#4ECDC4]" />,
      features: [
        "Real-time feedback on responses",
        "Sentiment analysis of interviews",
        "Customized feedback templates",
        "Automated performance insights",
        "Bias detection and mitigation"
      ],
      buttonText: "Explore AI Feedback",
      buttonUrl: "/request-demo",
      accentColor: "[#4ECDC4]"
    },
    {
      title: "Pre-Screened Talent Pool",
      description: "Access a curated database of pre-vetted candidates ready for your opportunities.",
      icon: <Users className="w-6 h-6 text-[#E2FF55]" />,
      features: [
        "AI-filtered candidate profiles",
        "Advanced search capabilities",
        "Skill verification badges",
        "Direct messaging system",
        "Candidate availability tracking"
      ],
      buttonText: "Browse Talent Pool",
      buttonUrl: "/request-demo",
      accentColor: "[#E2FF55]",
      isComingSoon: true
    },
    {
      title: "AI Video Interview",
      description: "Streamline your interviewing process with our intelligent video platform.",
      icon: <Zap className="w-6 h-6 text-[#FF9F5A]" />,
      features: [
        "Automated interview scheduling",
        "AI sentiment analysis",
        "Built-in recording capabilities",
        "Collaborative interview scoring",
        "Candidate engagement metrics"
      ],
      buttonText: "Try Video Interviews",
      buttonUrl: "/request-demo",
      accentColor: "[#FF9F5A]",
      isComingSoon: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-[#7B78FF]/10 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-64 h-64 rounded-full bg-[#4ECDC4]/10 blur-3xl animate-[pulse_12s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <Header />
      
      <main className="flex-grow relative z-10 pt-24">
        {/* Hero Section with enhanced animation */}
        <section className="py-12 md:py-20 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white relative inline-block">
              HyreDragon's <span className="text-[#E2FF55] animate-[glow_3s_ease-in-out_infinite]">AI Products</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E2FF55] to-transparent opacity-60 animate-[pulse_4s_ease-in-out_infinite]"></div>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-[fadeIn_1s_ease-out]">
              Our suite of intelligent recruitment tools designed to revolutionize your hiring process, reduce bias, and find the perfect candidates faster.
            </p>
          </div>
        </section>
        
        {/* Products Grid with staggered animations */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="animate-[fadeIn_0.5s_ease-out]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard
                    title={product.title}
                    description={product.description}
                    icon={product.icon}
                    features={product.features}
                    buttonText={product.buttonText}
                    buttonUrl={product.buttonUrl}
                    accentColor={product.accentColor}
                    isPopular={product.isPopular}
                    isComingSoon={product.isComingSoon}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Feature Highlight with enhanced animations */}
        <section className="py-16 md:py-24 px-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#0A0A29] to-[#080820]/0"></div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#080822]/80 border-2 border-[#E2FF55] rounded-xl p-8 md:p-10 shadow-[0_0_30px_rgba(226,255,85,0.15)] hover:shadow-[0_0_40px_rgba(226,255,85,0.25)] transition-all duration-500">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                  HyreDragon's Edge: <span className="text-[#E2FF55] animate-[pulse_3s_ease-in-out_infinite]">Slay the Competition</span>
                </h2>
                <p className="text-gray-100 mb-8 text-center text-xl font-medium p-4 bg-[#E2FF55]/10 border border-[#E2FF55]/20 rounded-lg animate-[glow_3s_ease-in-out_infinite] shadow-inner">
                  Only HyreDragon combines MCQ, coding, and video interviews — with built-in proctoring and real-time AI analytics. One tool. Total coverage.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 bg-[#0A0A29]/50 rounded-lg border border-gray-800 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                    <h3 className="font-semibold text-white mb-4">Traditional Platforms</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center opacity-80 transition-all duration-300 hover:opacity-100">
                        <span className="h-2 w-2 rounded-full bg-gray-500 mr-2"></span>
                        <span className="text-gray-400">Multiple tools required</span>
                      </li>
                      <li className="flex items-center opacity-80 transition-all duration-300 hover:opacity-100">
                        <span className="h-2 w-2 rounded-full bg-gray-500 mr-2"></span>
                        <span className="text-gray-400">Complex integrations</span>
                      </li>
                      <li className="flex items-center opacity-80 transition-all duration-300 hover:opacity-100">
                        <span className="h-2 w-2 rounded-full bg-gray-500 mr-2"></span>
                        <span className="text-gray-400">Higher total cost</span>
                      </li>
                      <li className="flex items-center opacity-80 transition-all duration-300 hover:opacity-100">
                        <span className="h-2 w-2 rounded-full bg-gray-500 mr-2"></span>
                        <span className="text-gray-400">Inconsistent user experience</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-5 bg-[#0F103E]/80 rounded-lg border border-[#E2FF55]/30 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#E2FF55]/20">
                    <h3 className="font-semibold text-[#E2FF55] mb-4">HyreDragon Advantage</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center transform transition-all duration-300 hover:translate-x-1">
                        <CheckCircle className="h-5 w-5 text-[#E2FF55] mr-2" />
                        <span className="text-white">All-in-one platform</span>
                      </li>
                      <li className="flex items-center transform transition-all duration-300 hover:translate-x-1">
                        <CheckCircle className="h-5 w-5 text-[#E2FF55] mr-2" />
                        <span className="text-white">Seamless experience</span>
                      </li>
                      <li className="flex items-center transform transition-all duration-300 hover:translate-x-1">
                        <CheckCircle className="h-5 w-5 text-[#E2FF55] mr-2" />
                        <span className="text-white">Cost-effective solution</span>
                      </li>
                      <li className="flex items-center transform transition-all duration-300 hover:translate-x-1">
                        <CheckCircle className="h-5 w-5 text-[#E2FF55] mr-2" />
                        <span className="text-white">Unified data analytics</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Link to="/request-demo">
                    <Button 
                      size="lg"
                      className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 px-8 relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center">
                        See It In Action <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1s_ease-out]"></span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section with enhanced animations */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Recruitment?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the companies already using HyreDragon to build better teams faster.
              </p>
              <Link to="/request-demo">
                <Button 
                  size="lg"
                  className="bg-[#7B78FF] text-white hover:bg-[#7B78FF]/90 px-8 rounded-full relative overflow-hidden group"
                >
                  <span className="relative z-10">Schedule a Demo</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1s_ease-out]"></span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIProducts;
