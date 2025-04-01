
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { FeatureProps } from './FeatureTypes';
import * as LucideIcons from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const FeatureCard = ({ iconName, emoji, title, description, index, color, glowColor, additionalInfo }: FeatureProps) => {
  const isMobile = useIsMobile();
  
  // Get the icon component dynamically
  const IconComponent = (LucideIcons as any)[iconName];
  
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
      rotateY: 5,
      rotateX: 5,
      z: 20,
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
        repeatType: "mirror" as const
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

  const textVariants = {
    rest: { y: 0 },
    hover: { 
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <motion.div
          className={cn(
            "relative overflow-hidden backdrop-blur-[10px] p-6 md:p-8 rounded-2xl transform-gpu",
            "border border-opacity-20 transition-all duration-300",
            "perspective-1000 cursor-pointer",
            `${color} hover:border-opacity-60`
          )}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          whileHover="hover"
          variants={containerVariants}
          style={{
            background: "rgba(10, 10, 15, 0.75)",
            boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3)`,
            transformStyle: "preserve-3d"
          }}
        >
          {/* Background glow effect */}
          <motion.div 
            className={`absolute -z-10 inset-0 opacity-20 ${glowColor} blur-xl rounded-full transform -translate-x-1/4 -translate-y-1/4 w-3/4 h-3/4`}
            variants={pulseVariants}
          />
          
          {/* Particle animation background */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 rounded-full ${glowColor}`}
                initial={{ 
                  x: `${Math.random() * 100}%`, 
                  y: `${Math.random() * 100}%`, 
                  opacity: Math.random() * 0.5 + 0.2 
                }}
                animate={{ 
                  x: `${Math.random() * 100}%`, 
                  y: `${Math.random() * 100}%`,
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ 
                  duration: Math.random() * 10 + 10, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
              />
            ))}
          </div>
          
          <div className="flex flex-col h-full justify-between z-10 relative transform-gpu" style={{ transformStyle: "preserve-3d" }}>
            <div>
              <div className="flex items-start justify-between mb-6">
                {/* Icon container with pulse effect */}
                <motion.div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-sm ${color} shadow-lg`}
                  variants={iconVariants}
                  style={{ transform: "translateZ(20px)" }}
                >
                  {IconComponent && <IconComponent size={24} className={iconName === "Zap" ? "text-viveon-red" : 
                                                                       iconName === "Headphones" ? "text-viveon-neon-blue" :
                                                                       iconName === "Wifi" ? "text-viveon-neon-purple" :
                                                                       "text-green-500"} />}
                </motion.div>
                
                <span className="text-2xl" aria-hidden="true">{emoji}</span>
              </div>
              
              <motion.div variants={textVariants}>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white tracking-tight neon-text"
                    style={{ textShadow: `0 0 10px rgba(255,255,255,0.3)` }}>
                  {title}
                </h3>
                
                <p className="text-gray-300 text-sm md:text-base font-light">
                  {description}
                </p>
              </motion.div>
            </div>
            
            {/* Bottom decorative line */}
            <motion.div 
              className={`h-1 w-1/3 mt-6 rounded-full ${glowColor}`}
              animate={{ width: ["25%", "60%", "40%"], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            />
          </div>
        </motion.div>
      </HoverCardTrigger>
      
      {additionalInfo && (
        <HoverCardContent 
          className="w-80 p-4 backdrop-blur-xl bg-black/80 border border-white/10 text-white"
          sideOffset={10}
        >
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-lg neon-text">{title} Details</h4>
            <p className="text-sm text-gray-300">{additionalInfo}</p>
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};

export default FeatureCard;
