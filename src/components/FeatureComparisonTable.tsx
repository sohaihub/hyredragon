
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
  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          Feature <span className="text-[#E2FF55]">Comparison</span>
        </h2>

        <div className="overflow-x-auto rounded-lg border border-gray-800 bg-[#080822]/90 backdrop-blur-sm shadow-2xl">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-[#080822]">
                <TableHead className="p-4 text-left text-white border-b border-r border-gray-700 w-1/5"></TableHead>
                <TableHead className="p-4 text-center text-white border-b border-r border-gray-700 bg-[#E2FF55]/10 w-1/5">
                  <div className="font-bold">Starter (10k)</div>
                  <div className="text-xs">FREE TRIAL for 14 days</div>
                </TableHead>
                <TableHead className="p-4 text-center text-white border-b border-r border-gray-700 w-1/5">
                  <div className="font-bold">Basic (20k)</div>
                </TableHead>
                <TableHead className="p-4 text-center text-white border-b border-r border-gray-700 w-1/5">
                  <div className="font-bold">Standard (30k)</div>
                </TableHead>
                <TableHead className="p-4 text-center text-white border-b border-r border-gray-700 w-1/5">
                  <div className="font-bold">Professional (40k)</div>
                </TableHead>
                <TableHead className="p-4 text-center text-white border-b border-gray-700 w-1/5">
                  <div className="font-bold">Premium (50k)</div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Package Duration */}
              <TableRow className="border-b border-gray-800">
                <TableCell className="p-4 text-white font-medium bg-[#0F103E]/30 border-r border-gray-700">Package Duration</TableCell>
                <TableCell className="p-4 text-white text-center border-r border-gray-700">10 hours</TableCell>
                <TableCell className="p-4 text-white text-center border-r border-gray-700">20 hours</TableCell>
                <TableCell className="p-4 text-white text-center border-r border-gray-700">30 hours</TableCell>
                <TableCell className="p-4 text-white text-center border-r border-gray-700">40 hours</TableCell>
                <TableCell className="p-4 text-white text-center">50 hours</TableCell>
              </TableRow>

              {/* Basic Section */}
              <TableRow className="bg-gray-800/30">
                <TableCell colSpan={6} className="p-3 text-white font-bold border-b border-gray-700">Basic</TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="p-4 text-white bg-[#0F103E]/10 border-r border-gray-700">Job Posting</TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">5 Jobs</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">20 Jobs</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">30 Jobs</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">40 Jobs</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">50 Jobs</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="p-4 text-white bg-[#0F103E]/10 border-r border-gray-700">Assessment Rounds - 3 rounds</TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white text-xs sm:text-sm">Round 1 - MCQ or Round 2 - Coding</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white text-xs sm:text-sm">Round 1 - MCQ + Round 2 - Coding</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white text-xs sm:text-sm">Round 1 - MCQ + Round 2 - Coding</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white text-xs sm:text-sm">Round 1 - MCQ + Round 2 - Coding</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white text-xs sm:text-sm">Round 1 - MCQ + Round 2 - Coding</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="p-4 text-white bg-[#0F103E]/10 border-r border-gray-700">Email Notifications (Recruiter & Candidate)</TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="p-4 text-white bg-[#0F103E]/10 border-r border-gray-700">Candidate Tracking</TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
              </TableRow>

              {/* AI Features Section */}
              <TableRow className="bg-gray-800/30">
                <TableCell colSpan={6} className="p-3 text-white font-bold border-b border-gray-700">AI Features</TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="p-4 text-white bg-[#0F103E]/10 border-r border-gray-700">Proctoring - full features</TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white text-xs sm:text-sm">1 hour for proctoring 9 hours on tests</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white text-xs sm:text-sm">2 hour for proctoring 18 hours on tests</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white text-xs sm:text-sm">3 hour for proctoring 27 hours on tests</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white text-xs sm:text-sm">4 hours for proctoring 36 hours on tests</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white text-xs sm:text-sm">5 hours for proctoring 45 hours on tests</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="p-4 text-white bg-[#0F103E]/10 border-r border-gray-700">AI - Match Making - ATS</TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">100 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">200 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">300 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">400 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">500 applications</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="p-4 text-white bg-[#0F103E]/10 border-r border-gray-700">AI - Resume Analyzer - ATS</TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">100 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">200 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">300 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">400 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">500 applications</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="p-4 text-white bg-[#0F103E]/10 border-r border-gray-700">AI Question Generation (OpenAI)</TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">500 questions</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">1000 questions</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">1500 questions</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">2000 questions</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">3000 questions</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="p-4 text-white bg-[#0F103E]/10 border-r border-gray-700">AI Job Description Generator</TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">10 Job Descriptions</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">20 Job Descriptions</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">25 Job Descriptions</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">40 Job Descriptions</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">50 Job Descriptions</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="p-4 text-white bg-[#0F103E]/10 border-r border-gray-700">AI Candidate Feedback</TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">100 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">200 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">300 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">400 applications</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">500 applications</span>
                  </div>
                </TableCell>
              </TableRow>

              {/* Analytics & Report Section */}
              <TableRow className="bg-gray-800/30">
                <TableCell colSpan={6} className="p-3 text-white font-bold border-b border-gray-700">Analytics & Report</TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="p-4 text-white bg-[#0F103E]/10 border-r border-gray-700">Analytic Dashboard</TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="p-4 text-white bg-[#0F103E]/10 border-r border-gray-700">Basic Reporting</TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="text-white text-center">Downloadable</div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="text-white text-center">Downloadable</div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="text-white text-center">Downloadable</div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="text-white text-center">Downloadable</div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="p-4 text-white bg-[#0F103E]/10 border-r border-gray-700">Advance Reporting</TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <XIcon className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <XIcon className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
                <TableCell className="p-4 text-center">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
                </TableCell>
              </TableRow>

              {/* Support & Training Section */}
              <TableRow className="bg-gray-800/30">
                <TableCell colSpan={6} className="p-3 text-white font-bold border-b border-gray-700">Support & Training</TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="p-4 text-white bg-[#0F103E]/10 border-r border-gray-700">E-mail</TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">8 hours turn around time</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">4 hours turn around time</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">2 hours turn around time</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">1 hour turn around time</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">30 mins TAT</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="p-4 text-white bg-[#0F103E]/10 border-r border-gray-700">Phone Call Support</TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">upto 1 hr</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">upto 2 hr</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">upto 3 hr</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">upto 4 hrs</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">upto 5 hrs</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="p-4 text-white bg-[#0F103E]/10 border-r border-gray-700">Chat Support</TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">upto 1 hr</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">upto 2 hr</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">upto 3 hr</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">upto 4 hrs</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">upto 5 hrs</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="p-4 text-white bg-[#0F103E]/10 border-r border-gray-700">Training Session</TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">upto 1 hr</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">upto 2 hr</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">upto 3 hr</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">upto 4 hrs</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">upto 5 hrs</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="p-4 text-white bg-[#0F103E]/10 border-r border-gray-700">Ticketing System</TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">9 AM - 9 PM</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">9 AM - 9 PM</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">24 x 7 submission</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center border-r border-gray-700">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">24 x 7 submission</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
                    <span className="text-white">24 x 7 submission</span>
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
