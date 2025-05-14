
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Book, Download, FileText, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

interface GuideCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  downloadLink: string;
  readLink: string;
}

const GuideCard: React.FC<GuideCardProps> = ({ 
  title, 
  description, 
  category, 
  image, 
  downloadLink,
  readLink
}) => {
  return (
    <div className="bg-[#080822]/80 border border-gray-800 rounded-xl overflow-hidden hover:border-[#E2FF55]/50 transition-all duration-300 group">
      <div className="h-48 bg-gray-800 relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080822] to-transparent opacity-60"></div>
        <div className="absolute top-4 left-4 bg-[#0A0A29]/80 backdrop-blur-sm text-[#E2FF55] text-xs px-3 py-1 rounded-full border border-[#E2FF55]/30 flex items-center">
          <Book className="h-3 w-3 mr-1" />
          <span>{category}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between">
          <Link to={readLink}>
            <Button 
              variant="link" 
              className="text-[#7B78FF] hover:text-[#E2FF55] p-0 h-auto font-medium flex items-center"
            >
              Read Online <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to={downloadLink}>
            <Button 
              variant="outline"
              size="sm"
              className="border-[#E2FF55]/50 text-[#E2FF55] hover:bg-[#E2FF55]/10"
            >
              <Download className="h-4 w-4 mr-1" /> PDF
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Guides: React.FC = () => {
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
  
  const guides = [
    {
      title: "Complete Guide to Modern Recruitment",
      description: "An in-depth handbook covering all aspects of recruitment in the digital age, from job descriptions to onboarding.",
      category: "Comprehensive Guide",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&auto=format&fit=crop",
      downloadLink: "#",
      readLink: "#"
    },
    {
      title: "Remote Hiring Playbook",
      description: "Best practices and strategies for building effective remote teams, including interview techniques and evaluation frameworks.",
      category: "Strategic Guide",
      image: "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&auto=format&fit=crop",
      downloadLink: "#",
      readLink: "#"
    },
    {
      title: "AI in Recruitment: A Practical Guide",
      description: "Learn how to implement AI tools effectively in your recruitment process to save time and improve candidate quality.",
      category: "Technical Guide",
      image: "/lovable-uploads/8efa0dbf-ae1e-4bef-8fa5-cf8c1411991e.png",
      downloadLink: "#",
      readLink: "#"
    },
    {
      title: "Diversity & Inclusion Hiring Handbook",
      description: "Strategies for building more diverse and inclusive teams through unbiased recruitment practices.",
      category: "Specialized Guide",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&auto=format&fit=crop",
      downloadLink: "#",
      readLink: "#"
    },
    {
      title: "Technical Assessment Framework",
      description: "A comprehensive framework for assessing technical candidates, including coding challenges and interview questions.",
      category: "Assessment Guide",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&auto=format&fit=crop",
      downloadLink: "#",
      readLink: "#"
    },
    {
      title: "Recruiter's Guide to Candidate Experience",
      description: "Improve your candidate experience to attract top talent and strengthen your employer brand.",
      category: "Process Guide",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&auto=format&fit=crop",
      downloadLink: "#",
      readLink: "#"
    },
  ];
  
  const featuredGuide = {
    title: "The Ultimate Guide to AI-Powered Recruitment",
    description: "A comprehensive guide covering everything you need to know about implementing AI in your recruitment process. From candidate matching to automated screening, learn how artificial intelligence is revolutionizing hiring.",
    image: "/lovable-uploads/cc45f430-2139-45ed-80b1-d62a3afbdf25.png",
    downloadLink: "#",
    readLink: "#"
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
                Recruitment <span className="text-[#E2FF55]">Guides & Resources</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10">
                Expert insights and practical resources to transform your recruitment process.
              </p>

              <div className="relative max-w-2xl mx-auto">
                <Input 
                  type="search" 
                  placeholder="Search guides and resources..." 
                  className="pl-12 bg-[#080820] border-gray-800 focus:border-[#E2FF55] rounded-full h-14 text-white"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>

              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <Button variant="outline" className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10">
                  All Guides
                </Button>
                <Button variant="outline" className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10">
                  Recruitment Strategies
                </Button>
                <Button variant="outline" className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10">
                  AI Implementation
                </Button>
                <Button variant="outline" className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10">
                  Technical Hiring
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guide */}
        <section className="py-12 px-4 bg-[#080820]">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Featured Guide</h2>
            
            <div className="flex flex-col lg:flex-row gap-8 animate-on-scroll">
              <div className="lg:w-1/2">
                <div className="bg-[#0F103E]/80 border border-gray-700 rounded-xl overflow-hidden h-full">
                  <img 
                    src={featuredGuide.image} 
                    alt={featuredGuide.title} 
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-4">{featuredGuide.title}</h3>
                <p className="text-gray-300 mb-6 text-lg">{featuredGuide.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Link to={featuredGuide.readLink}>
                    <Button 
                      className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90"
                    >
                      Read Online <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to={featuredGuide.downloadLink}>
                    <Button 
                      variant="outline" 
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      <Download className="mr-2 h-4 w-4" /> Download PDF
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Guides */}
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">All Guides</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
              {guides.map((guide, index) => (
                <GuideCard key={index} {...guide} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 md:py-24 px-4 relative overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>

          <div className="container mx-auto relative z-10 animate-on-scroll">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Get New Guides in Your Inbox
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Subscribe to our newsletter to receive new guides, resources, and recruitment insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="h-12 bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white flex-grow"
                />
                <Button 
                  className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 h-12 px-6"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                By subscribing, you agree to receive marketing emails from HyrDragon. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Guides;
