
import React from 'react';
import { TableCell, TableRow } from '@/components/ui/table';

interface CategoryHeaderProps {
  title: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title }) => {
  return (
    <TableRow className="bg-gray-800/30">
      <TableCell colSpan={6} className="p-3 text-white font-bold border-b border-gray-700">{title}</TableCell>
    </TableRow>
  );
};

export default CategoryHeader;
