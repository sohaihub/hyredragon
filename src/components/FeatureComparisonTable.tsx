
import React from 'react';
import { CheckIcon, XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const FeatureComparisonTable: React.FC = () => {
  // Define highlight colors for each plan
  const planColors = {
    starter: 'bg-[#E2FF55]/20 text-[#E2FF55]',
    basic: 'bg-[#8B5CF6]/20 text-[#8B5CF6]',
    standard: 'bg-[#0EA5E9]/20 text-[#0EA5E9]',
    professional: 'bg-[#F97316]/20 text-[#F97316]',
    premium: 'bg-[#E2FF55]/20 text-[#E2FF55]',
  };

  return (
    <section id="feature-comparison" className="py-16 px-4 bg-[#0A0A29]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Feature <span className="text-[#E2FF55]">Comparison</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-gray-300 table-fixed">
            <thead>
              <tr className="bg-[#080822]">
                <th className="p-4 text-left text-white border-b border-gray-700 w-1/4">Hyre Dragon Features and Pricing</th>
                <th className={cn("p-4 text-center text-white border-b border-gray-700", planColors.starter)}>
                  <div className="font-bold">Starter</div>
                  <div>(10k)</div>
                </th>
                <th className={cn("p-4 text-center text-white border-b border-gray-700", planColors.basic)}>
                  <div className="font-bold">Basic</div>
                  <div>(20k)</div>
                </th>
                <th className={cn("p-4 text-center text-white border-b border-gray-700", planColors.standard)}>
                  <div className="font-bold">Standard</div>
                  <div>(30k)</div>
                </th>
                <th className={cn("p-4 text-center text-white border-b border-gray-700", planColors.professional)}>
                  <div className="font-bold">Professional</div>
                  <div>(40k)</div>
                </th>
                <th className={cn("p-4 text-center text-white border-b border-gray-700", planColors.premium)}>
                  <div className="font-bold">Premium</div>
                  <div>(50k)</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Package Duration */}
              <tr className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <td className="p-4 text-white font-medium bg-[#0F103E]/50">Package Duration</td>
                <td className="p-4 text-white text-center">9hr + 1hr</td>
                <td className="p-4 text-white text-center">20 hours</td>
                <td className="p-4 text-white text-center">30 hours</td>
                <td className="p-4 text-white text-center">40 hours</td>
                <td className="p-4 text-white text-center">50 hours</td>
              </tr>

              {/* Basic Section */}
              <tr className="bg-gray-800/30">
                <td colSpan={6} className="p-4 text-white font-bold">Basic</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <td className="p-4 text-white">Job Posting</td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">5 Jobs</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">20 Jobs</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">30 Jobs</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">40 Jobs</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">50 Jobs</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <td className="p-4 text-white">Email Notifications (Recruiter & Candidate)</td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <td className="p-4 text-white">Candidate Tracking</td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
              </tr>

              {/* AI Features */}
              <tr className="bg-gray-800/30">
                <td colSpan={6} className="p-4 text-white font-bold">AI Features</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <td className="p-4 text-white">Match Making</td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">100 applications</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">200 applications</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">300 applications</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">400 applications</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">500 applications</span>
                  </div>
                </td>
              </tr>
              
              {/* AI Resume Parsing */}
              <tr className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <td className="p-4 text-white">AI Resume Parsing</td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">100</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">100</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">100</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">100</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">100</span>
                  </div>
                </td>
              </tr>
              
              {/* Question Gen (Gemini) */}
              <tr className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <td className="p-4 text-white">Question Gen (Gemini)</td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">100-150</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">150-200</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] inline" />
                </td>
                <td className="p-4 text-center">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] inline" />
                </td>
                <td className="p-4 text-center">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] inline" />
                </td>
              </tr>
              
              {/* Question Gen (OpenAI) */}
              <tr className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <td className="p-4 text-white">Question Gen (OpenAI)</td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">10-20</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">20-30</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] inline" />
                </td>
                <td className="p-4 text-center">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] inline" />
                </td>
                <td className="p-4 text-center">
                  <CheckIcon className="h-5 w-5 text-[#E2FF55] inline" />
                </td>
              </tr>
              
              {/* Proctoring Sessions */}
              <tr className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <td className="p-4 text-white">Proctoring Sessions</td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">1</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">2</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">3</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">4</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
                    <span className="ml-1">5</span>
                  </div>
                </td>
              </tr>
              
              {/* AI Feedback Reports */}
              <tr className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all duration-200">
                <td className="p-4 text-white">AI Feedback Reports</td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparisonTable;
