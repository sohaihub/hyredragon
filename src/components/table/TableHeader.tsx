
import React from 'react';
import {
  TableHead,
  TableHeader as UITableHeader,
  TableRow
} from '@/components/ui/table';

const ComparisonTableHeader: React.FC = () => {
  return (
    <UITableHeader>
      <TableRow className="bg-[#080822]">
        <TableHead className="p-4 text-center text-white border-b border-r border-gray-700 w-1/4">
          <div className="font-bold">Features</div>
        </TableHead>
        <TableHead className="p-4 text-center text-white border-b border-r border-gray-700 bg-[#E2FF55]/10 w-1/6">
          <div className="font-bold">Starter (10k)</div>
          <div className="text-xs">FREE TRIAL for 14 days</div>
        </TableHead>
        <TableHead className="p-4 text-center text-white border-b border-r border-gray-700 w-1/6">
          <div className="font-bold">Basic (20k)</div>
        </TableHead>
        <TableHead className="p-4 text-center text-white border-b border-r border-gray-700 w-1/6">
          <div className="font-bold">Standard (30k)</div>
        </TableHead>
        <TableHead className="p-4 text-center text-white border-b border-r border-gray-700 w-1/6">
          <div className="font-bold">Professional (40k)</div>
        </TableHead>
        <TableHead className="p-4 text-center text-white border-b border-gray-700 w-1/6">
          <div className="font-bold">Premium (50k)</div>
        </TableHead>
      </TableRow>
    </UITableHeader>
  );
};

export default ComparisonTableHeader;
