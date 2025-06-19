
import React from 'react';
import { motion } from 'framer-motion';

interface CardContentProps {
  title: string;
  description: string;
  additionalInfo?: string;
  selected: boolean;
  glowColor: string;
}

const CardContent: React.FC<CardContentProps> = ({ selected, glowColor }) => {
  // Since images contain all the information, we only show minimal decorative elements
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 p-2">
      {/* Minimal bottom accent line */}
      <motion.div 
        className={`h-0.5 w-1/4 rounded-full ${glowColor} mx-auto`}
        animate={{ 
          width: selected ? ["25%", "40%", "30%"] : ["20%", "30%", "25%"], 
          opacity: selected ? [0.6, 0.9, 0.6] : [0.4, 0.7, 0.4] 
        }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
};

export default CardContent;
