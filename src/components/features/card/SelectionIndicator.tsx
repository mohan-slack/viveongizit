
import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface SelectionIndicatorProps {
  visible: boolean;
  glowColor: string;
}

const SelectionIndicator: React.FC<SelectionIndicatorProps> = ({ visible, glowColor }) => {
  if (!visible) return null;
  
  return (
    <motion.div 
      className="absolute top-4 right-4 z-20"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${glowColor} shadow-lg`}>
        <X size={16} className="text-white" />
      </div>
    </motion.div>
  );
};

export default SelectionIndicator;
