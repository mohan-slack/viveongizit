
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FeaturePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const FeaturePagination: React.FC<FeaturePaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex space-x-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <motion.button
            key={idx}
            className={cn(
              "w-2 h-2 rounded-full",
              currentPage === idx
                ? "bg-viveon-red"
                : "bg-gray-600"
            )}
            whileHover={{ scale: 1.2 }}
            onClick={() => onPageChange(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturePagination;
