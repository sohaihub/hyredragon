import React from 'react';
import { CheckIcon, XIcon } from 'lucide-react';

const FeatureComparisonTable: React.FC = () => {
  return (
    <section id="feature-comparison" className="py-16 px-4 bg-[#0A0A29]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Feature <span className="text-[#E2FF55]">Comparison</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-gray-300">
            <thead>
              <tr className="bg-[#080822]">
                <th className="p-4 text-left text-white border-b border-gray-700 w-1/4">Hyre Dragon Features and Pricing</th>
                <th className="p-4 text-center text-white border-b border-gray-700">Starter (10k)</th>
                <th className="p-4 text-center text-white border-b border-gray-700">Basic (20k)</th>
                <th className="p-4 text-center text-white border-b border-gray-700">Standard (30k)</th>
                <th className="p-4 text-center text-white border-b border-gray-700">Professional (40k)</th>
                <th className="p-4 text-center text-white border-b border-gray-700">Premium (50k)</th>
              </tr>
            </thead>
            <tbody>
              {/* Package Duration */}
              <tr className="border-b border-gray-800">
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
              <tr className="border-b border-gray-800">
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
              <tr className="border-b border-gray-800">
                <td className="p-4 text-white">Email Notifications (Recruiter & Candidate)</td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-4 text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
              </tr>
              <tr className="border-b border-gray-800">
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
              <tr className="border-b border-gray-800">
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

              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparisonTable;
