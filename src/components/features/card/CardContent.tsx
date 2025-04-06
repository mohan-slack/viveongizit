
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { textVariants } from './CardAnimations';
import { Info } from 'lucide-react';

interface CardContentProps {
  title: string;
  description: string;
  additionalInfo?: string;
  selected: boolean;
  glowColor: string;
}

const CardContent: React.FC<CardContentProps> = ({ title, description, additionalInfo, selected, glowColor }) => {
  return (
    <div className="flex flex-col h-full justify-between z-10 relative transform-gpu" style={{ transformStyle: "preserve-3d" }}>
      <div>
        <motion.div variants={textVariants}>
          <h3 className={cn(
            "text-xl md:text-2xl font-bold mb-2 tracking-tight neon-text",
            selected ? "text-white" : "text-white"
          )}
              style={{ textShadow: `0 0 10px rgba(255,255,255,${selected ? 0.5 : 0.3})` }}>
            {title}
          </h3>
          
          <p className={cn(
            "text-sm md:text-base font-light",
            selected ? "text-white" : "text-gray-300"
          )}>
            {description}
          </p>
        </motion.div>
      </div>
      
      {/* Info button for showing details (only when not selected) */}
      {!selected && additionalInfo && (
        <div 
          className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mt-4 self-end"
          aria-hidden="true"
        >
          <Info size={16} className="text-white/70" />
        </div>
      )}
      
      {/* Bottom decorative line */}
      <motion.div 
        className={`h-1 w-1/3 mt-6 rounded-full ${glowColor}`}
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
