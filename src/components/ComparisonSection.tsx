
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ComparisonSection: React.FC = () => {
  const competitors = [
    {
      name: 'iMocha',
      pricing: 'Subscription, ₹664/assessment',
      features: 'AI-based skill assessments',
      edge: 'Pay-per-use + AI + Proctoring',
    },
    {
      name: 'TestDome',
      pricing: '₹581-1,680/candidate',
      features: 'Coding assessments',
      edge: 'Hour-based billing + proctoring',
    },
    {
      name: 'Spark Hire',
      pricing: '₹12,367-₹41,231/month',
      features: 'Video interviews',
      edge: '₹1,500/hr AI-enhanced video',
    },
    {
      name: 'HackerEarth',
      pricing: '₹209/month for startups',
      features: 'Coding tests + remote hiring',
      edge: 'Scalable hours; no monthly lock-in',
    },
    {
      name: 'HyreDragon',
      pricing: 'Pay-per-hour, flexible',
      features: 'All-in-one platform',
      edge: 'The Complete Package',
      highlight: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-white">
          HyreDragon's <span className="text-[#E2FF55]">Edge</span>: Slay the Competition
        </h2>
        <p className="text-center text-gray-300 mb-12">
          See how HyreDragon stacks up against other platforms in the realm of hiring
        </p>
        
        <div className="overflow-x-auto">
          <Table className="w-full">
            <TableHeader className="bg-[#0F103E]">
              <TableRow className="border-0">
                <TableHead className="text-white font-semibold text-lg">Platform</TableHead>
                <TableHead className="text-white font-semibold text-lg">Pricing Model</TableHead>
                <TableHead className="text-white font-semibold text-lg">Key Features</TableHead>
                <TableHead className="text-white font-semibold text-lg">HyreDragon's Edge</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {competitors.map((competitor, index) => (
                <TableRow 
                  key={index} 
                  className={`${competitor.highlight ? 'bg-[#0F103E]/70 border-l-2 border-r-2 border-[#E2FF55]' : 'bg-[#0A0A29]/50'} border-0 hover:bg-[#0A0A29]/70`}
                >
                  <TableCell className={competitor.highlight ? 'text-[#E2FF55] font-semibold text-lg' : 'text-white text-lg'}>
                    {competitor.highlight ? (
                      <div className="flex items-center">
                        <span className="text-[#E2FF55] mr-2">🔥</span> 
                        {competitor.name}
                        <span className="text-[#E2FF55] ml-2">🔥</span>
                      </div>
                    ) : competitor.name}
                  </TableCell>
                  <TableCell className={competitor.highlight ? 'text-[#E2FF55] text-lg' : 'text-white text-lg'}>
                    {competitor.pricing}
                  </TableCell>
                  <TableCell className={competitor.highlight ? 'text-[#E2FF55] text-lg' : 'text-white text-lg'}>
                    {competitor.features}
                  </TableCell>
                  <TableCell className={competitor.highlight ? 'text-[#E2FF55] font-semibold text-lg' : 'text-white text-lg'}>
                    {competitor.edge}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-8 p-6 bg-[#0F103E]/70 rounded-lg text-center border border-[#E2FF55] animate-pulse-light">
          <p className="text-xl font-bold text-white">Only HyreDragon combines <span className="text-[#E2FF55]">MCQ, coding, and video interviews</span> — with built-in proctoring and real-time AI analytics. One tool. Total coverage.</p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
