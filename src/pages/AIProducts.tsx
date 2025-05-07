
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AIProductsPage: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "AI Talent Matcher",
      description: "Match candidates to roles with unprecedented accuracy using our proprietary AI algorithm.",
      features: ["Skill-based matching", "Cultural fit analysis", "Learning potential assessment"],
      icon: "🧠"
    },
    {
      id: 2,
      name: "Smart Interview Assistant",
      description: "AI-powered interview tool that generates questions, analyzes responses, and provides insights.",
      features: ["Real-time question suggestions", "Sentiment analysis", "Response scoring"],
      icon: "🎯"
    },
    {
      id: 3,
      name: "Candidate Engagement Bot",
      description: "Enhance candidate experience with an AI chatbot that answers questions and guides applicants.",
      features: ["24/7 candidate support", "Personalized interactions", "Multi-language support"],
      icon: "💬"
    },
    {
      id: 4,
      name: "Recruitment Analytics Dashboard",
      description: "Comprehensive insights on your recruitment process with predictive hiring analytics.",
      features: ["Hiring funnel visualization", "Predictive time-to-hire", "Diversity metrics"],
      icon: "📊"
    },
    {
      id: 5,
      name: "Resume Parser Pro",
      description: "Extract and analyze key information from resumes with unmatched accuracy and speed.",
      features: ["Multi-format support", "Skill extraction", "Experience validation"],
      icon: "📄"
    },
    {
      id: 6,
      name: "Onboarding AI",
      description: "Streamline the onboarding process with personalized AI-driven experiences for new hires.",
      features: ["Customized onboarding paths", "Progress tracking", "Integration assistance"],
      icon: "🚀"
    }
  ];

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
              Advanced <span className="text-[#E2FF55]">AI Products</span> for Modern Recruitment
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              Cutting-edge AI tools designed to transform every aspect of your recruitment process, from sourcing to onboarding.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card 
                  key={product.id}
                  className="bg-[#0A0A29]/80 border border-[#7B78FF]/30 transition-all duration-300 hover:border-[#E2FF55]/50 hover:shadow-lg hover:shadow-[#E2FF55]/10 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                    <p className="text-gray-300 mb-6">{product.description}</p>
                    <ul className="space-y-2 mb-8">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="text-[#E2FF55] mr-2">•</span>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-[#7B78FF] text-white hover:bg-[#7B78FF]/90 rounded-full flex items-center justify-center gap-2">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-16 px-4 relative">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto bg-[#07071D]/80 border border-[#7B78FF]/30 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Seamless Integration with Your Tech Stack
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Our AI products integrate with your existing tools and workflows, providing a smooth experience without disrupting your operations.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                <div className="bg-white/10 rounded-xl p-4 w-24 h-24 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" className="w-16 h-16 object-contain" />
                </div>
                <div className="bg-white/10 rounded-xl p-4 w-24 h-24 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Workday_logo.svg" alt="Workday" className="w-16 h-16 object-contain" />
                </div>
                <div className="bg-white/10 rounded-xl p-4 w-24 h-24 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Microsoft_Office_logo_%282019%E2%80%93present%29.svg" alt="Microsoft" className="w-16 h-16 object-contain" />
                </div>
                <div className="bg-white/10 rounded-xl p-4 w-24 h-24 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud" className="w-16 h-16 object-contain" />
                </div>
                <div className="bg-white/10 rounded-xl p-4 w-24 h-24 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" alt="Slack" className="w-16 h-16 object-contain" />
                </div>
                <div className="bg-white/10 rounded-xl p-4 w-24 h-24 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="w-16 h-16 object-contain" />
                </div>
                <div className="bg-white/10 rounded-xl p-4 w-24 h-24 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LinkedIn_logo.svg" alt="LinkedIn" className="w-16 h-16 object-contain" />
                </div>
                <div className="bg-white/10 rounded-xl p-4 w-24 h-24 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" className="w-16 h-16 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Request */}
        <section className="py-16 md:py-24 px-4 relative overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Experience Our AI Products in Action
              </h2>
              <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl mx-auto">
                See how our AI recruitment tools can transform your hiring process with a personalized demonstration.
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

export default AIProductsPage;
