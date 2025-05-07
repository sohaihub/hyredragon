
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      title: "Recruitment Best Practices Guide",
      category: "Guide",
      description: "Learn the latest recruitment strategies and best practices to improve your hiring process.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "AI in Recruiting: 2025 Trends",
      category: "Report",
      description: "Discover how artificial intelligence is transforming the recruitment landscape in 2025.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Candidate Experience Masterclass",
      category: "Webinar",
      description: "Strategies to create exceptional candidate experiences that strengthen your employer brand.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Data-Driven Recruitment Metrics",
      category: "Case Study",
      description: "Learn how Fortune 500 companies are leveraging data to optimize their recruitment processes.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Diversity & Inclusion Hiring Toolkit",
      category: "Guide",
      description: "Practical tools and strategies to build more diverse and inclusive teams.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Remote Hiring Success Stories",
      category: "Case Study",
      description: "Real-world examples of companies excelling at remote recruitment and onboarding.",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
              Recruitment <span className="text-[#E2FF55]">Resources</span> Hub
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              Access valuable resources to optimize your recruitment process and stay ahead in the ever-evolving talent acquisition landscape.
            </p>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-10 px-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button variant="outline" className="bg-transparent border-[#E2FF55] text-[#E2FF55] hover:bg-[#E2FF55]/10 rounded-full">
                All Resources
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-full">
                Guides
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-full">
                Webinars
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-full">
                Case Studies
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-full">
                Reports
              </Button>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <Card key={index} className="bg-[#0A0A29]/80 border border-[#7B78FF]/20 overflow-hidden hover:border-[#E2FF55]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#E2FF55]/10">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={resource.image} 
                      alt={resource.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[#E2FF55] text-sm font-medium mb-2 inline-block">{resource.category}</span>
                    <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                    <p className="text-gray-300 mb-5">{resource.description}</p>
                    <Button variant="link" className="text-[#E2FF55] p-0 h-auto font-medium flex items-center gap-2">
                      Read more <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 relative">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
          
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="bg-[#07071D]/80 border border-[#7B78FF]/30 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Stay Updated with Recruitment Insights
                </h2>
                <p className="text-gray-300">
                  Subscribe to our newsletter to receive the latest recruitment resources, tips and industry updates.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow bg-[#0A0A29] border border-[#7B78FF]/30 text-white rounded-full px-5 py-3 focus:outline-none focus:border-[#E2FF55]"
                />
                <Button className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 rounded-full font-medium px-6">
                  Subscribe
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

export default ResourcesPage;
