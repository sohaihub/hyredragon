
import React from 'react';

const CompetitionComparisonSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative bg-[#2D1B69]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          HyreDragon's Edge: Slay the Competition
        </h2>
        <div className="w-52 h-1 bg-[#4ECDC4] mx-auto mb-6"></div>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
          See how HyreDragon stacks up against other platforms in the realm of hiring
        </p>
        
        <div className="bg-[#1A1A3D]/80 rounded-xl overflow-hidden">
          <table className="w-full text-white">
            <thead className="border-b border-gray-700">
              <tr>
                <th className="py-4 px-6 text-left">Platform</th>
                <th className="py-4 px-6 text-left">Pricing Model</th>
                <th className="py-4 px-6 text-left">Key Features</th>
                <th className="py-4 px-6 text-left">HyreDragon's Edge</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6">iMocha</td>
                <td className="py-4 px-6">Subscription; ₹664/assessment</td>
                <td className="py-4 px-6">AI-based skill assessments</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <span className="text-[#4ECDC4] mr-2">•</span>
                    Pay-per-use + AI + Proctoring
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6">TestDome</td>
                <td className="py-4 px-6">₹581-1,650/candidate</td>
                <td className="py-4 px-6">Coding assessments</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <span className="text-[#4ECDC4] mr-2">•</span>
                    Hour-based billing + proctoring
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6">Spark Hire</td>
                <td className="py-4 px-6">₹12,367-₹41,231/month</td>
                <td className="py-4 px-6">Video interviews</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <span className="text-[#4ECDC4] mr-2">•</span>
                    ₹1,500/hr AI-enhanced video
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6">HackerEarth</td>
                <td className="py-4 px-6">₹209/month for startups</td>
                <td className="py-4 px-6">Coding tests + remote hiring</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <span className="text-[#4ECDC4] mr-2">•</span>
                    Scalable hours; no monthly lock-in
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-800 bg-[#1A1A3D] bg-opacity-70">
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <span className="text-[#4ECDC4] mr-2">•</span>
                    HyreDragon
                  </div>
                </td>
                <td className="py-4 px-6">Pay-per-hour, flexible</td>
                <td className="py-4 px-6">All-in-one platform</td>
                <td className="py-4 px-6 text-[#E2FF55] font-bold">The Complete Package</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-[#1A1A3D]/80 p-6 rounded-xl mt-8 text-center text-white">
          <p className="text-lg">
            Only HyreDragon combines MCQ, coding, and video interviews — with built-in proctoring and real-time AI analytics. One tool. Total coverage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompetitionComparisonSection;
