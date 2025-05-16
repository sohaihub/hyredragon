
import React from 'react';
import { CheckIcon, XIcon } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';

interface TableFeatureRowProps {
  title: string;
  values: (boolean | string)[];
}

const TableFeatureRow: React.FC<TableFeatureRowProps> = ({ title, values }) => {
  return (
    <TableRow className="border-b border-gray-800">
      <TableCell className="p-4 text-white bg-[#0F103E]/10 border-r border-gray-700">{title}</TableCell>
      
      {values.map((value, index) => (
        <TableCell 
          key={index} 
          className={`p-4 text-center ${index < values.length - 1 ? 'border-r' : ''} border-gray-700`}
        >
          {typeof value === 'boolean' ? (
            value ? (
              <CheckIcon className="h-5 w-5 text-[#E2FF55] mx-auto" />
            ) : (
              <XIcon className="h-5 w-5 text-red-500 mx-auto" />
            )
          ) : (
            <div className="flex items-center justify-center">
              <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-1" />
              <span className="text-white text-xs sm:text-sm">{value}</span>
            </div>
          )}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default TableFeatureRow;
