
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { FeatureProps } from './FeatureTypes';

const FeatureCard = ({ icon, emoji, title, description, index, color, glowColor }: FeatureProps) => {
  const isMobile = useIsMobile();
  
  // Animations for each card
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }
    }),
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const iconVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.15,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror"
      }
    }
  };

  const pulseVariants = {
    rest: { opacity: 0.2, scale: 1 },
    hover: { 
      opacity: [0.2, 0.4, 0.2],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };
  
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden backdrop-blur-[10px] p-6 md:p-8 rounded-2xl",
        "border border-opacity-20 transition-all duration-300",
        `${color} hover:border-opacity-40`
      )}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover="hover"
      variants={containerVariants}
      style={{
        background: "rgba(15, 15, 22, 0.65)",
        boxShadow: `0 8px 32px rgba(0, 0, 0, 0.2)`,
      }}
    >
      {/* Background glow effect */}
      <motion.div 
        className={`absolute -z-10 inset-0 opacity-20 ${glowColor} blur-xl rounded-full transform -translate-x-1/4 -translate-y-1/4 w-3/4 h-3/4`}
        variants={pulseVariants}
      />
      
      <div className="flex flex-col h-full justify-between z-10">
        <div>
          <div className="flex items-start justify-between mb-6">
            {/* Icon container with pulse effect */}
            <motion.div
              className={`w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-sm ${color}`}
              variants={iconVariants}
            >
              {icon}
            </motion.div>
            
            <span className="text-2xl" aria-hidden="true">{emoji}</span>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-white tracking-tight">
            {title}
          </h3>
          
          <p className="text-gray-300 text-sm md:text-base font-light">
            {description}
          </p>
        </div>
        
        {/* Bottom decorative line */}
        <motion.div 
          className={`h-1 w-1/3 mt-6 rounded-full ${glowColor}`}
          animate={{ width: ["25%", "60%", "40%"], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
};

export default FeatureCard;
