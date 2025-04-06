
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { FeatureProps } from './FeatureTypes';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

// Import refactored components
import CardBackground from './card/CardBackground';
import SelectionIndicator from './card/SelectionIndicator';
import CardIcon from './card/CardIcon';
import CardContent from './card/CardContent';
import { containerVariants } from './card/CardAnimations';

const FeatureCard = ({ 
  iconName, 
  emoji, 
  title, 
  description, 
  index, 
  color, 
  glowColor, 
  additionalInfo,
  selected = false,
  onSelect,
  onDeselect,
  id
}: FeatureProps) => {
  const isMobile = useIsMobile();
  
  // Handle click events
  const handleCardClick = () => {
    if (onSelect && id) {
      onSelect(id);
    }
  };
  
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <motion.div
          className={cn(
            "relative overflow-hidden backdrop-blur-[10px] p-6 md:p-8 rounded-2xl transform-gpu cursor-pointer h-full",
            "border border-opacity-20 transition-all duration-300",
            "perspective-1000",
            selected 
              ? `${color} border-opacity-80` 
              : `${color} hover:border-opacity-60`,
            selected ? "shadow-[0_0_30px_rgba(255,255,255,0.1)]" : ""
          )}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          whileHover={selected ? "selected" : "hover"}
          animate={selected ? "selected" : "rest"}
          variants={containerVariants}
          style={{
            background: selected ? "rgba(20, 20, 30, 0.85)" : "rgba(10, 10, 15, 0.75)",
            boxShadow: `0 10px 30px rgba(0, 0, 0, ${selected ? 0.5 : 0.3})`,
            transformStyle: "preserve-3d"
          }}
          onClick={handleCardClick}
        >
          {/* Selection Indicator */}
          <SelectionIndicator visible={selected} glowColor={glowColor} />
          
          {/* Background Effects */}
          <CardBackground glowColor={glowColor} selected={selected} />
          
          <div className="flex flex-col h-full justify-between z-10 relative transform-gpu" style={{ transformStyle: "preserve-3d" }}>
            <div className="flex items-start justify-between mb-6">
              {/* Icon container with pulse effect */}
              <CardIcon iconName={iconName} color={color} selected={selected} />
              
              <span className="text-2xl" aria-hidden="true">{emoji}</span>
            </div>
            
            {/* Card Content */}
            <CardContent 
              title={title}
              description={description}
              additionalInfo={additionalInfo}
              selected={selected}
              glowColor={glowColor}
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
