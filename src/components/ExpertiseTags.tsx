
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Cpu, Settings, Zap, TrendingUp, LineChart, Code, Lightbulb, Binary } from 'lucide-react';
import { Badge } from './ui/badge';

interface ExpertiseTagsProps {
  expertise: string[];
  role: string;
  interactive?: boolean;
}

export const ExpertiseTags: React.FC<ExpertiseTagsProps> = ({ expertise, role, interactive = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Get role-specific expertise icons
  const getExpertiseIcons = (role: string) => {
    const icons = [];
    
    if (role === "CEO") {
      icons.push(<Zap key="innovation" size={18} className="text-viveon-red" />);
      icons.push(<Briefcase key="strategy" size={18} className="text-viveon-neon-blue" />);
      icons.push(<Lightbulb key="vision" size={18} className="text-yellow-400" />);
    } else if (role === "COO") {
      icons.push(<TrendingUp key="growth" size={18} className="text-green-400" />);
      icons.push(<LineChart key="operations" size={18} className="text-viveon-neon-blue" />);
      icons.push(<Settings key="execution" size={18} className="text-viveon-neon-purple" />);
    } else if (role === "CTO") {
      icons.push(<Cpu key="tech" size={18} className="text-viveon-red" />);
      icons.push(<Code key="innovation" size={18} className="text-viveon-neon-blue" />);
      icons.push(<Binary key="r&d" size={18} className="text-viveon-neon-purple" />);
    }
    
    return icons;
  };

  const icons = getExpertiseIcons(role);

  if (!interactive) {
    return (
      <div className="flex flex-wrap gap-2 justify-center">
        {expertise.map((skill, index) => (
          <Badge 
            key={index} 
            variant="glow" 
            className="py-1 text-sm"
          >
            {icons[index % 3]}
            <span className="ml-1">{skill}</span>
          </Badge>
        ))}
      </div>
    );
  }

  // For interactive 3D floating tags
  return (
    <div ref={containerRef} className="flex flex-wrap gap-3 justify-center relative min-h-[100px]">
      {expertise.map((skill, index) => {
        // Calculate different animation parameters for each tag
        const xOffset = (index % 3 - 1) * 20;
        const yOffset = (Math.floor(index / 3) - 1) * 15;
        const delay = index * 0.1;
        
        return (
          <motion.div
            key={index}
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              x: xOffset,
              transition: { delay, duration: 0.4 }
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: [-1, 1, -1],
              transition: { rotate: { repeat: Infinity, duration: 1 } }
            }}
            drag 
            dragConstraints={containerRef}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue rounded-full blur opacity-30" />
            
            <Badge 
              variant="glow" 
              className="py-1.5 px-3 text-sm backdrop-blur-md bg-black/40 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              {icons[index % 3]}
              <span className="ml-1.5 font-medium tracking-wide">{skill}</span>
            </Badge>
            
            {/* Particle effects around the badges */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-white"
              animate={{
                opacity: [0, 0.8, 0],
                x: [0, (Math.random() - 0.5) * 30],
                y: [0, (Math.random() - 0.5) * 30],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 1,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
