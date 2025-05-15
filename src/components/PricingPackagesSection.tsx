
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, Check } from 'lucide-react';

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
        
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-[#0F103E]/70 rounded-lg p-4 text-center">
            <p className="text-[#E2FF55] font-semibold flex items-center justify-center gap-2">
              <span className="text-[#E2FF55]">🔥</span> FIRST 50 CUSTOMERS GET 3 FREE HOURS! <span className="text-[#E2FF55]">🔥</span>
            </p>
          </div>
        </div>

        <div className="overflow-x-auto mb-12">
          <Table className="w-full">
            <TableHeader className="bg-[#0F103E]">
              <TableRow>
                <TableHead className="text-white font-semibold">Package</TableHead>
                <TableHead className="text-white font-semibold">Assessments (₹)</TableHead>
                <TableHead className="text-white font-semibold">Video Interviews (₹)</TableHead>
                <TableHead className="text-white font-semibold">Discount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {packages.map((pkg, index) => (
                <TableRow key={index} className={index === 2 ? 'bg-[#0F103E]/70 border-l-2 border-r-2 border-[#E2FF55]' : 'bg-[#0A0A29]/50'}>
                  <TableCell className={index === 2 ? 'font-semibold text-white' : 'text-white'}>{pkg.hours}</TableCell>
                  <TableCell className="text-gray-300">{pkg.assessments}</TableCell>
                  <TableCell className="text-gray-300">{pkg.interviews}</TableCell>
                  <TableCell className={
                    pkg.discount === 'None' ? 'text-gray-300' : 
                    pkg.discount === 'Negotiable' ? 'text-[#E2FF55]' : 
                    `text-[#E2FF55] font-semibold`
                  }>
                    {pkg.discount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0F103E]/70 rounded-lg p-6">
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
          <div className="bg-[#0F103E]/70 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Ready To Get Started?</h3>
            <p className="text-gray-300 mb-6">
              Sign up today and receive our exclusive early adopter benefits. No credit card required for trial.
            </p>
            <Link to="/request-demo">
              <Button className="w-full bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 py-6">
                Start Your Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPackagesSection;
