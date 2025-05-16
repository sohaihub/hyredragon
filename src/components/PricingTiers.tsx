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
                  <div>(10K) - Free Trial for 14 days</div>
                </TableHead>
                <TableHead className={cn("p-4 text-center text-white border-b border-gray-700", planColors.basic)}>
                  <div className="font-bold">Basic</div>
                  <div>(20K)</div>
                </TableHead>
                <TableHead className={cn("p-4 text-center text-white border-b border-gray-700", planColors.standard)}>
                  <div className="font-bold">Standard</div>
                  <div>(30K)</div>
                </TableHead>
                <TableHead className={cn("p-4 text-center text-white border-b border-gray-700", planColors.professional)}>
                  <div className="font-bold">Professional</div>
                  <div>(40K)</div>
                </TableHead>
                <TableHead className={cn("p-4 text-center text-white border-b border-gray-700", planColors.premium)}>
                  <div className="font-bold">Premium</div>
                  <div>(50K)</div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Package Duration */}
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white font-medium bg-[#0F103E]/50">Package Duration</TableCell>
                <TableCell className="p-4 text-white text-center">10 hours</TableCell>
                <TableCell className="p-4 text-white text-center">20 hours</TableCell>
                <TableCell className="p-4 text-white text-center">30 hours</TableCell>
                <TableCell className="p-4 text-white text-center">40 hours</TableCell>
                <TableCell className="p-4 text-white text-center">50 hours</TableCell>
              </TableRow>

              {/* Basic Section */}
              <TableRow className="bg-gray-800/30">
                <TableCell colSpan={6} className="p-4 text-white font-bold">Basic</TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">Job Posting</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>5 Jobs</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>20 Jobs</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>30 Jobs</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>40 Jobs</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>50 Jobs</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">Assessment Rounds</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>Round 1 - MCQ or Round 2 - Coding</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>Round 1 - MCQ + Round 2 - Coding</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>Round 1 - MCQ + Round 2 - Coding</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>Round 1 - MCQ + Round 2 - Coding</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>Round 1 - MCQ + Round 2 - Coding</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">Email Notifications (Recruiter & Candidate)</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">Candidate Tracking</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
              </TableRow>

              {/* AI Features Section */}
              <TableRow className="bg-gray-800/30">
                <TableCell colSpan={6} className="p-4 text-white font-bold">AI Features</TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">Proctoring - full features on tests</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>1 hour for proctoring 9 hours on tests</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>2 hour for proctoring 18 hours on tests</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>3 hour for proctoring 27 hours on tests</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>4 hours for proctoring 36 hours on tests</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>5 hours for proctoring 45 hours on tests</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">AI - Match Making - ATS</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>100 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>200 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>300 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>400 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>500 applications</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">AI - Resume Analyzer - ATS</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>100 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>200 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>300 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>400 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>500 applications</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">AI - Question Generation (OpenAI)</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>500 questions</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>1000 questions</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>1500 questions</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>2000 questions</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>3000 questions</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">AI - Job Description Generator</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>10 Job Descriptions</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>20 Job Descriptions</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>30 Job Descriptions</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>40 Job Descriptions</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>50 Job Descriptions</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">AI Candidate Feedback</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>100 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>200 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>300 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>400 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>500 applications</span>
                  </div>
                </TableCell>
              </TableRow>

              {/* Analytics & Report Section */}
              <TableRow className="bg-gray-800/30">
                <TableCell colSpan={6} className="p-4 text-white font-bold">Analytics & Report</TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">Analytic Dashboard</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">Basic Reporting</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">Advance Reporting</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <XIcon className="h-5 w-5 text-red-500" />
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <XIcon className="h-5 w-5 text-red-500" />
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <span>Downloadable</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <span>Downloadable</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <span>Downloadable</span>
                  </div>
                </TableCell>
              </TableRow>

              {/* Support & Training Section */}
              <TableRow className="bg-gray-800/30">
                <TableCell colSpan={6} className="p-4 text-white font-bold">Support & Training</TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">E-mail</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>8 hours turn around time</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>4 hours turn around time</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>2 hours turn around time</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>1 hour turn around time</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>30 mins TAT</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">Phone Support</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>upto 1 hr</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>upto 2 hr</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>upto 3 hr</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>upto 4 hrs</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>upto 5 hrs</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">Chat Support</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>upto 1 hr</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>upto 2 hr</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>upto 3 hr</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>upto 4 hrs</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>upto 5 hrs</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <TableCell className="p-4 text-white">Training Session</TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>9 AM - 9 PM</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>9 AM - 9 PM</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>24 x 7 submission</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>24 x 7 submission</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span>24 x 7 submission</span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparisonTable;
