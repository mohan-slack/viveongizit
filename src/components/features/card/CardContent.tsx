
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardContentProps {
  title: string;
  description: string;
  additionalInfo?: string;
  selected: boolean;
  glowColor: string;
}

const CardContent: React.FC<CardContentProps> = ({ selected, glowColor }) => {
  // Since images contain the text, we only show minimal UI elements
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
      {/* Bottom decorative line only */}
      <motion.div 
        className={`h-1 w-1/3 rounded-full ${glowColor}`}
        animate={{ 
          width: selected ? ["40%", "70%", "60%"] : ["25%", "40%", "30%"], 
          opacity: selected ? [0.8, 1, 0.8] : [0.6, 0.8, 0.6] 
        }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
};

export default CardContent;
