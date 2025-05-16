
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      bio: "Former HR Executive with 15+ years experience in talent acquisition for tech companies.",
      image: "/lovable-uploads/3420832d-d75f-46bf-8164-2cd0b8d420ae.png"
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      bio: "AI expert with a PhD in Machine Learning from Stanford. Led AI teams at top tech firms.",
      image: "/lovable-uploads/8efa0dbf-ae1e-4bef-8fa5-cf8c1411991e.png"
    },
    {
      name: "Priya Patel",
      position: "Head of Product",
      bio: "Product leader specialized in HR tech with previous roles at LinkedIn and Indeed.",
      image: "/lovable-uploads/d2c17d09-78a5-4cba-b252-f9b5b5bd0f19.png"
    }
  ];

  const values = [
    {
      title: "Innovation",
      icon: <Star className="h-8 w-8 text-[#E2FF55]" />,
      description: "We continuously push the boundaries of what's possible in AI-powered recruitment."
    },
    {
      title: "Integrity",
      icon: <Shield className="h-8 w-8 text-[#E2FF55]" />,
      description: "We are committed to ethical AI practices and transparent operations in everything we do."
    },
    {
      title: "Inclusivity",
      icon: <Users className="h-8 w-8 text-[#E2FF55]" />,
      description: "We design our technology to eliminate bias and promote diverse, equitable hiring practices."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/5 blur-3xl animate-pulse"></div>
      </div>
      
      <Header />
      
      <main className="flex-grow relative z-10 pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                About <span className="text-[#E2FF55]">HyreDragon</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're on a mission to revolutionize recruitment with AI technology that makes hiring smarter, faster, and more equitable.
              </p>
            </div>
            
            <div className="bg-[#0F103E] border border-gray-800 rounded-xl p-8 mb-16">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Story</h2>
              <p className="text-gray-300 mb-6">
                Founded in 2023, HyreDragon was born out of a simple observation: traditional recruitment processes are inefficient, biased, and don't result in the best hires. Our founder, Sarah Johnson, experienced these challenges firsthand as an HR executive at several tech companies.
              </p>
              <p className="text-gray-300 mb-6">
                Sarah teamed up with AI expert Michael Chen to build an innovative platform that leverages advanced machine learning to transform how companies find and evaluate talent. What started as a small startup has quickly grown into a team of 30+ passionate individuals dedicated to changing recruitment for the better.
              </p>
              <p className="text-gray-300">
                Today, HyreDragon works with companies across industries to help them identify the best candidates faster, reduce bias in their hiring processes, and make data-driven recruitment decisions.
              </p>
            </div>
            
            {/* Our Values */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">Our Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-[#080822] border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center transform hover:translate-y-[-4px] transition-all duration-300"
                  >
                    <div className="mb-4 rounded-full bg-[#1A1A3D] p-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Our Team */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">Our Leadership Team</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div 
                    key={index}
                    className="bg-[#080822] border border-gray-800 rounded-xl overflow-hidden transform hover:translate-y-[-4px] transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-1 text-white">{member.name}</h3>
                      <p className="text-[#E2FF55] text-sm mb-2">{member.position}</p>
                      <p className="text-gray-300 text-sm">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-[#0F103E] border border-[#E2FF55]/10 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">Ready to transform your hiring?</h2>
              <p className="text-gray-300 mb-6">
                Join hundreds of companies already using HyreDragon to find better talent faster.
              </p>
              <Link to="/request-demo">
                <Button className="bg-[#E2FF55] hover:bg-[#E2FF55]/90 text-[#0A0A29] px-6 py-6 rounded-full font-medium text-lg flex items-center gap-2 mx-auto">
                  Get Started <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Add scroll to top button */}
      <div className="fixed bottom-8 left-8 z-40">
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default About;
