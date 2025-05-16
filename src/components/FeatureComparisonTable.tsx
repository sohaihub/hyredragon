
import React from 'react';
import { CheckIcon, XIcon } from 'lucide-react';

const FeatureComparisonTable: React.FC = () => {
  return (
    <section id="feature-comparison" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Feature <span className="text-[#E2FF55]">Comparison</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[#080822]">
                <th className="p-3 text-left text-white border-b border-gray-700 w-1/4">Hyre Dragon Features and Pricing</th>
                <th className="p-3 text-center text-white border-b border-gray-700">Starter (10k)</th>
                <th className="p-3 text-center text-white border-b border-gray-700">Basic (20k)</th>
                <th className="p-3 text-center text-white border-b border-gray-700">Standard (30k)</th>
                <th className="p-3 text-center text-white border-b border-gray-700">Professional (40k)</th>
                <th className="p-3 text-center text-white border-b border-gray-700">Premium (50k)</th>
              </tr>
            </thead>
            <tbody>
              {/* Package Duration */}
              <tr className="border-b border-gray-800">
                <td className="p-3 text-white font-medium bg-[#0F103E]/50">Package Duration</td>
                <td className="p-3 text-white text-center">9hr + 1hr</td>
                <td className="p-3 text-white text-center">20 hours</td>
                <td className="p-3 text-white text-center">30 hours</td>
                <td className="p-3 text-white text-center">40 hours</td>
                <td className="p-3 text-white text-center">50 hours</td>
              </tr>

              {/* Basic Section */}
              <tr className="bg-gray-800/30">
                <td colSpan={6} className="p-3 text-white font-bold">Basic</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-white">Job Posting</td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">5 Jobs</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">20 Jobs</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">30 Jobs</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">40 Jobs</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">50 Jobs</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-white">Email Notifications (Recruiter & Candidate)</td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-white">Candidate Tracking</td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
              </tr>

              {/* AI Features */}
              <tr className="bg-gray-800/30">
                <td colSpan={6} className="p-3 text-white font-bold">AI Features</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-white">Match Making</td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">100 applications</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">200 applications</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">300 applications</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">400 applications</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">500 applications</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-white">Resume Analyzer</td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">100 applications</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">100 applications</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">100 applications</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">100 applications</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">100 applications</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-white">Question Generation (Gemini)</td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">500 questions</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">150-200 questions</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">200-300 questions</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">300-400 questions</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">400-500 questions</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-white">Question Generation (OpenAI)</td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">10-20 questions</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">20-30 questions</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">40-50 questions</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">50-70 questions</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">70-100 questions</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-white">Proctoring</td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">1 hour for proctoring 9 hours on tests</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">2 hour for proctoring 18 hours on tests</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">3 hour for proctoring 27 hours on tests</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">4 hours for proctoring 36 hours on tests</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">5 hours for proctoring 45 hours on tests</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-white">Feedback Report</td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-white">Job Description Generator</td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">10 Job Descriptions</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">20 Job Descriptions</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">25 Job Descriptions</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">30-40 Job Descriptions</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">45+ Job Descriptions</span>
                  </div>
                </td>
              </tr>

              {/* Analytics & Report */}
              <tr className="bg-gray-800/30">
                <td colSpan={6} className="p-3 text-white font-bold">Analytics & Report</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-white">Analytic Dashboard</td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
                <td className="p-3 text-white text-center"><CheckIcon className="h-5 w-5 text-[#E2FF55] inline" /></td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-white">Basic Reporting</td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">- Downloadable</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">- Downloadable</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">- Downloadable</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">- Downloadable</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">- Downloadable</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-white">Advance Reporting</td>
                <td className="p-3 text-white text-center"><XIcon className="h-5 w-5 text-red-500 inline" /></td>
                <td className="p-3 text-white text-center"><XIcon className="h-5 w-5 text-red-500 inline" /></td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">- Downloadable</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">- Downloadable</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">- Downloadable</span>
                  </div>
                </td>
              </tr>

              {/* Support & Training */}
              <tr className="bg-gray-800/30">
                <td colSpan={6} className="p-3 text-white font-bold">Support & Training</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-white">E-mail</td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">8 hours turn around time</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">8 hours turn around time</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">8 hours turn around time</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">8 hours turn around time</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">8 hours turn around time</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-white">Phone Call Support</td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">upto 1hr</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">upto 2hr</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">upto 3hr</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">upto 4hrs</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">upto 5hrs</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-white">Chat Support</td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">upto 1hr</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">upto 2hr</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">upto 3hr</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">upto 4hrs</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">upto 5hrs</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-white">Training Session</td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">upto 1hr</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">upto 2hr</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">upto 3hr</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">upto 4hrs</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">upto 5hrs</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-3 text-white">Ticketing System</td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">9 AM - 9 PM</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">9 AM - 9 PM</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">9 AM - 9 PM</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">9 AM - 9 PM</span>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-[#E2FF55]" /> 
                    <span className="text-white ml-1">9 AM - 9 PM</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparisonTable;
