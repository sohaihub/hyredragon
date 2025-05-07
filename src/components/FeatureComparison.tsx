
import React from 'react';
import { Check, X, HelpCircle } from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface FeatureRow {
  feature: string;
  basic: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
  tooltip?: string;
}

const FeatureComparison: React.FC = () => {
  const features: FeatureRow[] = [
    {
      feature: "Job Postings",
      basic: "10",
      pro: "50",
      enterprise: "Unlimited",
      tooltip: "Maximum number of active job postings at any time"
    },
    {
      feature: "AI Candidate Matching",
      basic: "Basic",
      pro: "Advanced",
      enterprise: "Enterprise-grade",
      tooltip: "AI-powered algorithm that matches candidates to job requirements"
    },
    {
      feature: "Job Templates",
      basic: "Standard",
      pro: "Custom",
      enterprise: "Custom + Industry",
      tooltip: "Pre-built templates to quickly create job postings"
    },
    {
      feature: "Support",
      basic: "Email",
      pro: "Email & Chat",
      enterprise: "Dedicated Manager",
      tooltip: "Available support channels and response times"
    },
    {
      feature: "Analytics",
      basic: "Basic",
      pro: "Full Suite",
      enterprise: "Advanced + Custom",
      tooltip: "Reporting tools to track hiring efficiency and outcomes"
    },
    {
      feature: "Team Collaboration",
      basic: false,
      pro: true,
      enterprise: true,
      tooltip: "Tools for team members to collaborate on hiring decisions"
    },
    {
      feature: "API Access",
      basic: false,
      pro: false,
      enterprise: true,
      tooltip: "Access to Hyregram's API for custom integrations"
    },
    {
      feature: "Custom Branding",
      basic: false,
      pro: false,
      enterprise: true,
      tooltip: "Customize the interface with your company branding"
    },
    {
      feature: "Workflow Automation",
      basic: false,
      pro: true,
      enterprise: "Advanced",
      tooltip: "Automate repetitive tasks in your hiring process"
    },
    {
      feature: "Candidate Nurturing",
      basic: false,
      pro: true,
      enterprise: "Advanced",
      tooltip: "Tools to build relationships with potential candidates"
    },
    {
      feature: "Data Export",
      basic: "Limited",
      pro: true,
      enterprise: "Unlimited",
      tooltip: "Export data from the platform for external analysis"
    }
  ];

  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? 
        <Check className="mx-auto h-5 w-5 text-[#E2FF55]" /> : 
        <X className="mx-auto h-5 w-5 text-gray-500" />;
    }
    
    return <span className="text-white">{value}</span>;
  };

  return (
    <section className="py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Background neon circles */}
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
          Feature <span className="text-[#E2FF55]">Comparison</span>
        </h2>
        
        <div className="max-w-5xl mx-auto bg-[#0A0A29]/80 border border-[#7B78FF]/30 rounded-xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-[#7B78FF]/30">
                  <TableHead className="w-1/3 text-white">Feature</TableHead>
                  <TableHead className="text-center text-white">Basic</TableHead>
                  <TableHead className="text-center text-white">Pro</TableHead>
                  <TableHead className="text-center text-white">Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((row, index) => (
                  <TableRow 
                    key={index} 
                    className={index % 2 === 0 ? "bg-[#0A0A29]/40" : ""}
                  >
                    <TableCell className="font-medium text-gray-200 flex items-center">
                      {row.feature}
                      {row.tooltip && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircle className="h-4 w-4 text-gray-400 ml-2 cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-sm max-w-xs">{row.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </TableCell>
                    <TableCell className="text-center">{renderValue(row.basic)}</TableCell>
                    <TableCell className="text-center">{renderValue(row.pro)}</TableCell>
                    <TableCell className="text-center">{renderValue(row.enterprise)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;
