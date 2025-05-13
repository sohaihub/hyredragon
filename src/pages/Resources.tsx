
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, BookOpen, FileText, Video, Download } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  icon: React.ReactNode;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  description, 
  category, 
  image, 
  link,
  icon
}) => {
  return (
    <div className="bg-[#080822]/80 border border-gray-800 rounded-xl overflow-hidden hover:border-[#E2FF55]/50 transition-all duration-300 group">
      <div className="h-48 bg-gray-800 relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080822] to-transparent opacity-60"></div>
        <div className="absolute top-4 left-4 bg-[#0A0A29]/80 backdrop-blur-sm text-[#E2FF55] text-xs px-3 py-1 rounded-full border border-[#E2FF55]/30 flex items-center">
          {icon}
          <span className="ml-1">{category}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
        <Link to={link}>
          <Button 
            variant="link" 
            className="text-[#7B78FF] hover:text-[#E2FF55] p-0 h-auto font-medium flex items-center"
          >
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Resources: React.FC = () => {
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
  
  const blogs = [
    {
      title: "How AI is Transforming the Recruitment Industry",
      description: "Discover the ways artificial intelligence is revolutionizing hiring processes and improving candidate matches.",
      category: "Blog",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&auto=format&fit=crop",
      link: "#",
      icon: <BookOpen className="h-3 w-3" />
    },
    {
      title: "5 Key Metrics for Measuring Recruitment Success",
      description: "Learn which KPIs matter most when evaluating the effectiveness of your hiring strategies.",
      category: "Blog",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&auto=format&fit=crop",
      link: "#",
      icon: <BookOpen className="h-3 w-3" />
    },
    {
      title: "Reducing Bias in the Hiring Process with AI",
      description: "Explore how artificial intelligence can help create more diverse and inclusive workplaces.",
      category: "Blog",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&auto=format&fit=crop",
      link: "#",
      icon: <BookOpen className="h-3 w-3" />
    }
  ];
  
  const caseStudies = [
    {
      title: "TechCorp Reduces Time-to-Hire by 65%",
      description: "How a leading tech company transformed their recruitment process using HyreDragon's AI platform.",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1576267423048-15c0030e5605?q=80&auto=format&fit=crop",
      link: "#",
      icon: <FileText className="h-3 w-3" />
    },
    {
      title: "Global Retail Chain Improves Candidate Quality",
      description: "A multinational retailer's journey to better hiring decisions with data-driven recruitment.",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&auto=format&fit=crop",
      link: "#",
      icon: <FileText className="h-3 w-3" />
    }
  ];
  
  const videos = [
    {
      title: "Getting Started with HyreDragon",
      description: "A comprehensive walkthrough of setting up and using the HyreDragon AI recruitment platform.",
      category: "Video",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&auto=format&fit=crop",
      link: "#",
      icon: <Video className="h-3 w-3" />
    },
    {
      title: "AI Matching Algorithm Explained",
      description: "Our Chief Data Scientist explains how our proprietary matching technology works.",
      category: "Video",
      image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&auto=format&fit=crop",
      link: "#",
      icon: <Video className="h-3 w-3" />
    }
  ];
  
  const guides = [
    {
      title: "Complete Guide to Modern Recruitment",
      description: "An in-depth handbook covering all aspects of recruitment in the digital age.",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&auto=format&fit=crop",
      link: "#",
      icon: <Download className="h-3 w-3" />
    },
    {
      title: "Remote Hiring Playbook",
      description: "Best practices and strategies for building effective remote teams.",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&auto=format&fit=crop",
      link: "#",
      icon: <Download className="h-3 w-3" />
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
                Resources & <span className="text-[#E2FF55]">Insights</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10">
                Discover the latest trends, strategies, and best practices in AI-powered recruitment.
              </p>
              
              <div className="relative max-w-2xl mx-auto">
                <Input 
                  type="search" 
                  placeholder="Search resources..." 
                  className="pl-12 bg-[#080820] border-gray-800 focus:border-[#E2FF55] rounded-full h-14 text-white"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <Button variant="outline" className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10">
                  All Resources
                </Button>
                <Button variant="outline" className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10">
                  Blogs
                </Button>
                <Button variant="outline" className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10">
                  Case Studies
                </Button>
                <Button variant="outline" className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10">
                  Videos
                </Button>
                <Button variant="outline" className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10">
                  Guides
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Articles */}
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Latest Articles</h2>
              <Button variant="link" className="text-[#7B78FF] hover:text-[#E2FF55]">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
              {blogs.map((blog, index) => (
                <ResourceCard key={index} {...blog} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Case Studies */}
        <section className="py-12 md:py-16 px-4 bg-[#080820]">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Case Studies</h2>
              <Button variant="link" className="text-[#7B78FF] hover:text-[#E2FF55]">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll">
              {caseStudies.map((study, index) => (
                <ResourceCard key={index} {...study} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Videos and Guides */}
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Videos & Tutorials</h2>
              <Button variant="link" className="text-[#7B78FF] hover:text-[#E2FF55]">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 animate-on-scroll">
              {videos.map((video, index) => (
                <ResourceCard key={index} {...video} />
              ))}
            </div>
            
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Guides & Ebooks</h2>
              <Button variant="link" className="text-[#7B78FF] hover:text-[#E2FF55]">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll">
              {guides.map((guide, index) => (
                <ResourceCard key={index} {...guide} />
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
                Stay Updated with the Latest in AI Recruitment
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Subscribe to our newsletter for industry insights, recruitment trends, and product updates.
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
                By subscribing, you agree to receive marketing emails from HyreDragon. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
