
import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, Check, Zap } from 'lucide-react';

const PricingPackagesSection: React.FC = () => {
  const packages = [
    {
      hours: '10 Hours',
      assessments: '₹10,000 (₹1,000/hr)',
      interviews: '₹15,000 (₹1,500/hr)',
      discount: 'None'
    },
    {
      hours: '20 Hours',
      assessments: '₹19,000 (₹950/hr)',
      interviews: '₹28,500 (₹1,425/hr)',
      discount: '5%'
    },
    {
      hours: '30 Hours',
      assessments: '₹27,000 (₹900/hr)',
      interviews: '₹42,000 (₹1,400/hr)',
      discount: '10%'
    },
    {
      hours: '50 Hours',
      assessments: '₹42,500 (₹850/hr)',
      interviews: '₹68,750 (₹1,375/hr)',
      discount: '15%'
    },
    {
      hours: '>50 Hours',
      assessments: 'Custom Pricing',
      interviews: 'Custom Pricing',
      discount: 'Negotiable'
    }
  ];

  const billingNotes = [
    'Minimum session: 0.5 hours',
    'Actual usage-based deduction',
    'Remaining time rolls over',
    'Renewal alert at 15 minutes left'
  ];
  
  useEffect(() => {
    // Create the money falling animation
    const createMoneyParticle = () => {
      const container = document.querySelector('.promo-container');
      if (!container) return;
      
      const symbols = ['$', '€', '£', '¥', '₹'];
      const particle = document.createElement('div');
      particle.className = 'money-particle';
      
      // Random symbol
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      particle.innerText = symbol;
      
      // Random position, size, and animation duration
      const posX = Math.random() * container.clientWidth;
      const size = Math.random() * 20 + 20;
      const duration = Math.random() * 3 + 2;
      
      particle.style.left = `${posX}px`;
      particle.style.fontSize = `${size}px`;
      particle.style.color = '#E2FF55';
      particle.style.animationDuration = `${duration}s`;
      
      container.appendChild(particle);
      
      // Remove after animation completes
      setTimeout(() => {
        if (particle && particle.parentNode === container) {
          container.removeChild(particle);
        }
      }, duration * 1000);
    };
    
    // Create particles at random intervals for the promo
    const interval = setInterval(createMoneyParticle, 300);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 relative bg-[#080820]">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#0A0A29] to-[#080820] pointer-events-none"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-white">
          Fuel Your <span className="text-[#E2FF55]">Hiring Quest</span>
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Choose your package to power your journey. Every session includes proctoring and AI analytics. Unused time carries forward to your next adventure.
        </p>
        
        <div className="max-w-4xl mx-auto mb-8 perspective-800">
          <div className="bg-[#0F103E]/70 rounded-lg p-6 text-center relative overflow-hidden promo-container transform transition-transform duration-300">
            <div className="flex items-center justify-center gap-2 text-2xl font-bold animate-pulse">
              <Zap className="h-6 w-6 text-[#E2FF55]" />
              <span className="text-[#E2FF55]">FIRST 50 CUSTOMERS GET 3 FREE HOURS!</span>
              <Zap className="h-6 w-6 text-[#E2FF55]" />
            </div>
            
            {/* This div is for styling only, money particles will be added via JS */}
            <div className="absolute inset-0 pointer-events-none"></div>
          </div>
        </div>

        <div className="overflow-x-auto mb-12">
          <Table className="w-full">
            <TableHeader className="bg-[#0F103E]">
              <TableRow>
                <TableHead className="text-white font-semibold text-lg">Package</TableHead>
                <TableHead className="text-white font-semibold text-lg">Assessments (₹)</TableHead>
                <TableHead className="text-white font-semibold text-lg">Video Interviews (₹)</TableHead>
                <TableHead className="text-white font-semibold text-lg">Discount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {packages.map((pkg, index) => (
                <TableRow key={index} className={index === 2 ? 'bg-[#0F103E]/70 border-l-2 border-r-2 border-[#E2FF55]' : 'bg-[#0A0A29]/50'}>
                  <TableCell className="text-white text-lg font-medium">{pkg.hours}</TableCell>
                  <TableCell className="text-white text-lg">{pkg.assessments}</TableCell>
                  <TableCell className="text-white text-lg">{pkg.interviews}</TableCell>
                  <TableCell className={`text-white text-lg ${
                    pkg.discount === 'Negotiable' ? 'text-[#E2FF55] font-semibold' : 
                    pkg.discount !== 'None' ? 'text-[#E2FF55] font-semibold' : ''
                  }`}>
                    {pkg.discount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0F103E]/70 rounded-lg p-6 transform transition-transform duration-300">
            <h3 className="text-xl font-bold text-white mb-4">Billing Notes</h3>
            <ul className="space-y-3">
              {billingNotes.map((note, index) => (
                <li key={index} className="flex items-start">
                  <Clock className="mr-2 h-5 w-5 text-[#7B78FF]" />
                  <span className="text-gray-300">{note}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0F103E]/70 rounded-lg p-6 transform transition-transform duration-300">
            <h3 className="text-xl font-bold text-white mb-4">Ready To Get Started?</h3>
            <p className="text-gray-300 mb-6">
              Sign up today and receive our exclusive early adopter benefits. No credit card required.
            </p>
            <Link to="/pricing">
              <Button className="w-full bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 py-6 group relative overflow-hidden">
                <span className="relative z-10">Explore Pricing</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 ease-out"></span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPackagesSection;
