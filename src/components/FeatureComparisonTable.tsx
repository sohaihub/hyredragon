import React from 'react';
import { CheckIcon, XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

const FeatureComparisonTable: React.FC = () => {
  // Define highlight colors for each plan - keeping them all green as requested
  const planColors = {
    starter: 'bg-[#E2FF55]/20 text-[#E2FF55]',
    basic: 'bg-[#E2FF55]/20 text-[#E2FF55]',
    standard: 'bg-[#E2FF55]/20 text-[#E2FF55]',
    professional: 'bg-[#E2FF55]/20 text-[#E2FF55]',
    premium: 'bg-[#E2FF55]/20 text-[#E2FF55]',
  };

  return (
    <section className="py-12 md:py-16 px-4 bg-[#0A0A29]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Feature <span className="text-[#E2FF55]">Comparison</span>
        </h2>

        <div className="overflow-x-auto rounded-lg border border-gray-800">
          <Table className="w-full border-collapse text-gray-300">
            <TableHeader>
              <TableRow className="bg-[#080822]">
                <TableHead className="p-4 text-left text-white border-b border-gray-700 w-1/4">Feature</TableHead>
                <TableHead className={cn("p-4 text-center text-white border-b border-gray-700", planColors.starter)}>
                  <div className="font-bold">Starter</div>
                  <div>(10k)</div>
                </TableHead>
                <TableHead className={cn("p-4 text-center text-white border-b border-gray-700", planColors.basic)}>
                  <div className="font-bold">Basic</div>
                  <div>(20k)</div>
                </TableHead>
                <TableHead className={cn("p-4 text-center text-white border-b border-gray-700", planColors.standard)}>
                  <div className="font-bold">Standard</div>
                  <div>(30k)</div>
                </TableHead>
                <TableHead className={cn("p-4 text-center text-white border-b border-gray-700", planColors.professional)}>
                  <div className="font-bold">Professional</div>
                  <div>(40k)</div>
                </TableHead>
                <TableHead className={cn("p-4 text-center text-white border-b border-gray-700", planColors.premium)}>
                  <div className="font-bold">Premium</div>
                  <div>(50k)</div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Package Duration */}
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white font-medium bg-[#0F103E]/50">Package Duration</TableCell>
                <TableCell className="p-4 text-white text-center">9hr + 1hr</TableCell>
                <TableCell className="p-4 text-white text-center">18hr + 2hr</TableCell>
                <TableCell className="p-4 text-white text-center">27hr + 3hr</TableCell>
                <TableCell className="p-4 text-white text-center">36hr + 4hr</TableCell>
                <TableCell className="p-4 text-white text-center">45hr + 5hr</TableCell>
              </TableRow>

              {/* Basic Section */}
              <TableRow className="bg-gray-800/30">
                <TableCell colSpan={6} className="p-4 text-white font-bold">Basic</TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">Job Posting</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">5 Jobs</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">20 Jobs</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">30 Jobs</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">40 Jobs</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">50 Jobs</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">Email Notifications (Recruiter & Candidate)</TableCell>
                <TableCell className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" /></TableCell>
                <TableCell className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" /></TableCell>
                <TableCell className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" /></TableCell>
                <TableCell className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" /></TableCell>
                <TableCell className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" /></TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">Candidate Tracking</TableCell>
                <TableCell className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" /></TableCell>
                <TableCell className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" /></TableCell>
                <TableCell className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" /></TableCell>
                <TableCell className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" /></TableCell>
                <TableCell className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" /></TableCell>
              </TableRow>

              {/* AI Features */}
              <TableRow className="bg-gray-800/30">
                <TableCell colSpan={6} className="p-4 text-white font-bold">AI Features</TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">Match Making</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">100 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">200 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">300 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">400 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">500 applications</span>
                  </div>
                </TableCell>
              </TableRow>
              
              {/* AI Resume Parsing */}
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">AI Resume Parsing</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">100</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">100</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">100</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">100</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">100</span>
                  </div>
                </TableCell>
              </TableRow>
              
              {/* Question Gen (Gemini) */}
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">Question Gen (Gemini)</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">100-150</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">150-200</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
              </TableRow>
              
              {/* Question Gen (OpenAI) */}
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">Question Gen (OpenAI)</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">10-20</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">20-30</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
              </TableRow>
              
              {/* Proctoring Sessions */}
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">Proctoring Sessions</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">1</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">2</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">3</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">4</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">5</span>
                  </div>
                </TableCell>
              </TableRow>
              
              {/* AI Feedback Reports */}
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">AI Feedback Reports</TableCell>
                <TableCell className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" /></TableCell>
                <TableCell className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" /></TableCell>
                <TableCell className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" /></TableCell>
                <TableCell className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" /></TableCell>
                <TableCell className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparisonTable;
