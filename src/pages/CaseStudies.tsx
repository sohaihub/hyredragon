
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, BarChart3, Users, Clock, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: "HealthFirst Medical Center",
    description: "How a leading healthcare provider reduced time-to-hire by 70% with HyrDragon.",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
    industry: "Healthcare",
    result: "70% faster hiring"
  },
  {
    title: "TechVision Solutions",
    description: "A tech company's journey to scaling their engineering team with AI-driven recruitment.",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
    industry: "Technology",
    result: "3x more qualified candidates"
  },
  {
    title: "Global Education Alliance",
    description: "How an educational institution streamlined faculty hiring across multiple departments.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
    industry: "Education",
    result: "40% cost reduction"
  },
  {
    title: "Prime Financial Services",
    description: "Implementing bias-free recruitment in a highly regulated financial environment.",
    image: "https://images.unsplash.com/photo-1579532536935-619928decd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
    industry: "Financial Services",
    result: "85% more diverse talent pool"
  },
  {
    title: "RetailMart Chain",
    description: "How a national retail chain managed seasonal hiring peaks with HyrDragon.",
    image: "https://images.unsplash.com/photo-1577977715277-4947a7b26957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
    industry: "Retail",
    result: "500+ positions filled in 2 weeks"
  },
  {
    title: "Global Remote Team",
    description: "Building a distributed team across 12 countries with uniform hiring standards.",
    image: "https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
    industry: "Remote Work",
    result: "95% team retention rate"
  }
];

const metrics = [
  { number: "500+", label: "Success Stories", icon: <Building className="w-6 h-6 text-[#E2FF55]" /> },
  { number: "85%", label: "Faster Hiring", icon: <Clock className="w-6 h-6 text-[#E2FF55]" /> },
  { number: "60%", label: "Cost Reduction", icon: <BarChart3 className="w-6 h-6 text-[#E2FF55]" /> },
  { number: "30K+", label: "Positions Filled", icon: <Users className="w-6 h-6 text-[#E2FF55]" /> }
];

const CaseStudies: React.FC = () => {
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
              Customer <span className="text-[#E2FF55]">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              See how organizations like yours are transforming their recruitment with HyrDragon
            </p>
            
            {/* Metrics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              {metrics.map((metric, index) => (
                <div 
                  key={index} 
                  className="bg-[#080822]/60 border border-gray-800 rounded-xl p-6 shimmer-bg"
                >
                  <div className="flex justify-center mb-3">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1 highlight-shimmer">{metric.number}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Case Studies Grid */}
        <section className="py-12 px-4 relative">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Success Stories</h2>
              <div className="flex gap-4">
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  All Industries
                </Button>
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  Filter by Results
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <Link to="/coming-soon" key={index}>
                  <Card className="bg-[#080822]/60 border border-gray-800 hover:border-[#E2FF55]/40 transition-all duration-300 overflow-hidden group h-full shimmer-bg">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-semibold px-2 py-1 bg-[#1A1A3D] text-[#E2FF55] rounded-full">
                          {study.industry}
                        </span>
                        <span className="text-xs text-[#7B78FF] font-medium">
                          {study.result}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#E2FF55] transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm">
                        {study.description}
                      </p>
                      <div className="flex items-center text-[#7B78FF] text-sm font-medium">
                        Read case study <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <Button className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 text-lg px-6 py-6 rounded-full flex items-center gap-2">
                View all case studies <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 relative">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-[#1A1A3D] border border-[#7B78FF]/30 rounded-2xl p-8 md:p-12 backdrop-blur-lg relative overflow-hidden highlight-shimmer">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#7B78FF]/20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0A0A29]/50 to-transparent"></div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to transform your recruitment process?
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join hundreds of companies that have improved their hiring with HyrDragon's AI-powered platform
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/request-demo">
                    <Button className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 px-6 py-3">
                      Request a demo
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-3">
                      Contact sales
                    </Button>
                  </Link>
                </div>
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
