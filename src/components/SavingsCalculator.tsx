
import React, { useState, useEffect } from 'react';
import { Slider } from "@/components/ui/slider";
import { Users, Clock, Percent, DollarSign, Clock3 } from 'lucide-react';

const SavingsCalculator: React.FC = () => {
  // Initial values
  const [applicants, setApplicants] = useState<number>(2000);
  const [timePerCall, setTimePerCall] = useState<number>(10); // in minutes
  const [callRatio, setCallRatio] = useState<number>(10); // percentage

  // Calculated values
  const [potentialSavings, setPotentialSavings] = useState<number>(0);
  const [hoursSaved, setHoursSaved] = useState<number>(0);
  
  // Calculate savings
  useEffect(() => {
    // Calculate calls made
    const totalCalls = applicants * (callRatio / 100);
    
    // Calculate time spent in hours
    const timeSpentHours = (totalCalls * timePerCall) / 60;
    
    // Assuming 40% reduction in calls
    const hoursSavedValue = Math.round(timeSpentHours * 0.4);
    
    // Assuming $120/hr as recruiter cost
    const savingsValue = Math.round(hoursSavedValue * 120);
    
    setHoursSaved(hoursSavedValue);
    setPotentialSavings(savingsValue);
  }, [applicants, timePerCall, callRatio]);

  return (
    <div className="bg-[#e9ffd7]/20 p-6 md:p-10 rounded-xl backdrop-blur-sm border border-[#E2FF55]/20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Savings Calculator</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-gray-800 font-medium">Monthly applicants</label>
                <span className="font-bold">{applicants}</span>
              </div>
              <Slider 
                defaultValue={[applicants]} 
                max={5000}
                min={100}
                step={100}
                onValueChange={(value) => setApplicants(value[0])}
                className="my-4"
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-gray-800 font-medium">Time per call</label>
                <span className="font-bold">{timePerCall} minutes</span>
              </div>
              <Slider 
                defaultValue={[timePerCall]} 
                max={30}
                min={1}
                step={1}
                onValueChange={(value) => setTimePerCall(value[0])}
                className="my-4"
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-gray-800 font-medium">Application to call ratio</label>
                <span className="font-bold">{callRatio}%</span>
              </div>
              <Slider 
                defaultValue={[callRatio]} 
                max={50}
                min={1}
                step={1}
                onValueChange={(value) => setCallRatio(value[0])}
                className="my-4"
              />
            </div>
          </div>
        </div>
        
        <div className="p-8 bg-[#E2FF55]/20 rounded-lg backdrop-blur-lg border border-[#E2FF55]/30">
          <h3 className="text-xl font-medium text-white mb-6">Your potential savings</h3>
          <div className="flex items-center">
            <DollarSign className="w-10 h-10 text-[#E2FF55] mr-2" />
            <span className="text-5xl font-bold text-white">${potentialSavings.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="p-8 bg-[#E2FF55]/20 rounded-lg backdrop-blur-lg border border-[#E2FF55]/30">
          <h3 className="text-xl font-medium text-white mb-6">Total hours saved</h3>
          <div className="flex items-center">
            <Clock3 className="w-10 h-10 text-[#E2FF55] mr-2" />
            <span className="text-5xl font-bold text-white">{hoursSaved}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 space-y-4 text-white">
        <div className="flex items-center">
          <Users className="w-5 h-5 text-[#E2FF55] mr-3" />
          <p>HyreDragon enables you to screen <span className="font-bold">all applicants</span> efficiently</p>
        </div>
        <div className="flex items-center">
          <Percent className="w-5 h-5 text-[#E2FF55] mr-3" />
          <p>HyreDragon reduces recruiter calls by <span className="font-bold">40%</span> of qualified candidates</p>
        </div>
        <div className="flex items-center">
          <Clock className="w-5 h-5 text-[#E2FF55] mr-3" />
          <p>HyreDragon allows you to do all your calls <span className="font-bold">same day</span></p>
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;
