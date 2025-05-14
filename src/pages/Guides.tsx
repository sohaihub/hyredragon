
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, BookOpen, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const guides = [
  {
    title: "Getting Started with AI Recruitment",
    description: "A comprehensive guide to understanding how AI can transform your recruitment process.",
    image: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
    category: "Beginner",
    timeToRead: "10 min"
  },
  {
    title: "Eliminating Bias in Your Hiring Process",
    description: "Learn how to use HyrDragon's algorithms to reduce unconscious bias in candidate selection.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
    category: "Advanced",
    timeToRead: "15 min"
  },
  {
    title: "Setting Up Custom Assessment Criteria",
    description: "How to customize HyrDragon's assessment criteria to match your company's unique needs.",
    image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
    category: "Intermediate",
    timeToRead: "12 min"
  },
  {
    title: "Data-Driven Recruitment Decisions",
    description: "Using analytics and reporting to make smarter hiring decisions with HyrDragon.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
    category: "Advanced",
    timeToRead: "20 min"
  },
  {
    title: "Optimizing Your Interview Process",
    description: "Strategies for using HyrDragon to create more effective and efficient interviews.",
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
    category: "Intermediate",
    timeToRead: "15 min"
  },
  {
    title: "Healthcare-Specific Recruitment Guide",
    description: "Specialized strategies for healthcare organizations using HyrDragon.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
    category: "Industry-Specific",
    timeToRead: "18 min"
  }
];

const Guides: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Background elements */}
      <div className="fixed top-0 left-0 w-full h-full">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-[#7B78FF]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>
      </div>
      
      <Header />
      
      <main className="flex-grow relative z-10 pt-24">
        {/* Hero Section */}
        <section className="pt-8 pb-16 md:pt-16 md:pb-20 px-4 relative overflow-hidden">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white highlight-shimmer">
              Recruitment <span className="text-[#E2FF55]">Guides & Resources</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Learn how to transform your hiring process with our expert guides and resources
            </p>
          </div>
        </section>
        
        {/* Guides Grid */}
        <section className="py-12 px-4 relative">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Guides</h2>
              <div className="flex gap-4">
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  All Guides
                </Button>
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  Popular
                </Button>
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  Latest
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide, index) => (
                <Link to="/coming-soon" key={index}>
                  <Card className="bg-[#080822]/60 border border-gray-800 hover:border-[#E2FF55]/40 transition-all duration-300 overflow-hidden group h-full shimmer-bg">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={guide.image} 
                        alt={guide.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-semibold px-2 py-1 bg-[#1A1A3D] text-[#E2FF55] rounded-full">
                          {guide.category}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center">
                          <BookOpen className="w-3 h-3 mr-1" /> {guide.timeToRead}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#E2FF55] transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm">
                        {guide.description}
                      </p>
                      <div className="flex items-center text-[#7B78FF] text-sm font-medium">
                        Read guide <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <Button className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 text-lg px-6 py-6 rounded-full flex items-center gap-2">
                View all guides <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 px-4 relative">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-[#1A1A3D] border border-[#7B78FF]/30 rounded-2xl p-8 md:p-12 backdrop-blur-lg relative overflow-hidden highlight-shimmer">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#7B78FF]/20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0A0A29]/50 to-transparent"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Get the latest recruitment insights
                </h2>
                <p className="text-gray-300 mb-6">
                  Subscribe to our newsletter for industry trends, AI recruitment updates, and exclusive guides
                </p>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow bg-[#080822]/60 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E2FF55]"
                  />
                  <Button className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
                
                <p className="text-gray-400 text-xs mt-4">
                  By subscribing, you agree to our <Link to="/privacy" className="text-[#7B78FF] hover:text-[#E2FF55]">Privacy Policy</Link> and 
                  <Link to="/terms" className="text-[#7B78FF] hover:text-[#E2FF55]"> Terms of Service</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Guides;
