
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle, Flame } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
        <div className="flex items-center justify-center mb-4">
          <div className="h-[3px] w-16 bg-[#E2FF55]"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mx-4 text-white">
            HyreDragon's <span className="text-[#E2FF55]">Edge</span>: Slay the Competition
          </h2>
          <div className="h-[3px] w-16 bg-[#E2FF55]"></div>
        </div>
        <p className="text-center text-gray-300 mb-12">
          See how HyreDragon stacks up against other platforms in the realm of hiring
        </p>
        
        <div className="overflow-x-auto bg-[#151444]/80 rounded-xl shadow-2xl border border-gray-800">
          <Table className="w-full">
            <TableHeader className="bg-[#0F103E]">
              <TableRow>
                <TableHead className="text-white font-semibold text-lg py-4 border-b border-gray-700">Platform</TableHead>
                <TableHead className="text-white font-semibold text-lg py-4 border-b border-gray-700">Pricing Model</TableHead>
                <TableHead className="text-white font-semibold text-lg py-4 border-b border-gray-700">Key Features</TableHead>
                <TableHead className="text-white font-semibold text-lg py-4 border-b border-gray-700">HyreDragon's Edge</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {competitors.map((competitor, index) => (
                <TableRow 
                  key={index} 
                  className={competitor.highlight ? 'bg-[#0F103E]/90 border-l-2 border-r-2 border-[#E2FF55]' : index % 2 === 0 ? 'bg-[#0A0A29]/80' : 'bg-[#0A0A29]/50'}
                >
                  <TableCell className={competitor.highlight ? 'text-[#E2FF55] font-bold text-lg' : 'text-white text-lg'}>
                    {competitor.highlight ? (
                      <div className="flex items-center">
                        <Flame className="h-5 w-5 text-[#E2FF55] mr-2 animate-pulse" /> 
                        {competitor.name}
                      </div>
                    ) : competitor.name}
                  </TableCell>
                  <TableCell className={competitor.highlight ? 'text-[#E2FF55] font-medium text-lg' : 'text-white text-lg'}>
                    {competitor.pricing}
                  </TableCell>
                  <TableCell className={competitor.highlight ? 'text-[#E2FF55] font-medium text-lg' : 'text-white text-lg'}>
                    {competitor.features}
                  </TableCell>
                  <TableCell className={competitor.highlight ? 'text-[#E2FF55] font-bold text-lg' : 'text-[#7B78FF] text-lg'}>
                    {competitor.edge}
                    {competitor.highlight && (
                      <div className="absolute -right-2 -top-2">
                        <div className="bg-[#E2FF55] text-[#0A0A29] text-xs font-bold px-2 py-1 rounded-full animate-pulse-light">
                          BEST CHOICE
                        </div>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-8 p-6 bg-[#0F103E]/70 rounded-lg text-center text-white border border-[#0F103E] hover:border-[#E2FF55]/50 transition-all duration-300">
          <p className="animated-text text-lg hover:text-[#E2FF55] transition-all duration-300 animate-glow">
            Only HyreDragon combines MCQ, coding, and video interviews — with built-in proctoring and real-time AI analytics. One tool. Total coverage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
