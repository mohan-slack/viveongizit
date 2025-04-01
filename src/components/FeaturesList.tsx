
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Headphones, 
  Wifi, 
  Battery, 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface FeatureProps {
  icon: React.ReactNode;
  emoji: string;
  title: string;
  description: string;
  index: number;
  color: string;
  glowColor: string;
}

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
        repeatType: "mirror" // Fixed: Using a valid repeatType value
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

// Connector line component for desktop
const ConnectorLines = () => {
  return (
    <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
        {/* Animated connector paths */}
        <motion.path 
          d="M250,130 C400,90 500,200 750,150" 
          stroke="rgba(255,58,47,0.2)" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path 
          d="M250,350 C400,300 600,400 750,350" 
          stroke="rgba(0,255,255,0.2)" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
        <motion.path 
          d="M250,240 C500,190 500,300 750,240" 
          stroke="rgba(155,48,255,0.2)" 
          strokeWidth="2" 
          fill="none" 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.1 }}
        />
      </svg>
    </div>
  );
};

const FeaturesList: React.FC = () => {
  const features = [
    {
      icon: <Zap size={24} className="text-viveon-red" />,
      emoji: "⚡",
      title: "Lightning-Fast Charging",
      description: "Power up in a flash! Just 15 minutes of charging gives you 8 hours of uninterrupted playtime.",
      color: "border-viveon-red/30 bg-viveon-red/5",
      glowColor: "bg-viveon-red",
    },
    {
      icon: <Headphones size={24} className="text-viveon-neon-blue" />,
      emoji: "🎧",
      title: "Immersive Noise Cancellation",
      description: "Block distractions, dive into pure audio bliss, and experience music like never before.",
      color: "border-viveon-neon-blue/30 bg-viveon-neon-blue/5",
      glowColor: "bg-viveon-neon-blue",
    },
    {
      icon: <Wifi size={24} className="text-viveon-neon-purple" />,
      emoji: "📡",
      title: "Instant Bluetooth 5.4 Connectivity",
      description: "Seamlessly pair with any device and enjoy ultra-stable, lag-free connections.",
      color: "border-viveon-neon-purple/30 bg-viveon-neon-purple/5",
      glowColor: "bg-viveon-neon-purple",
    },
    {
      icon: <Battery size={24} className="text-green-500" />,
      emoji: "🔋",
      title: "Marathon Battery Life",
      description: "Go the distance with up to 36 hours of total playtime, including the charging case.",
      color: "border-green-500/30 bg-green-500/5",
      glowColor: "bg-green-500",
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  // Staggered layout
  const getStaggeredGrid = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 relative">
        <div className="md:mt-0 space-y-6 lg:space-y-10">
          <FeatureCard {...features[0]} index={0} />
          <FeatureCard {...features[2]} index={2} />
        </div>
        <div className="md:mt-12 space-y-6 lg:space-y-10">
          <FeatureCard {...features[1]} index={1} />
          <FeatureCard {...features[3]} index={3} />
        </div>
        <ConnectorLines />
      </div>
    );
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8
      }
    }
  };

  return (
    <section 
      id="features" 
      className="relative py-20 lg:py-32 overflow-hidden" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
          >
            <span className="text-white">Revolutionary </span>
            <span className="gradient-text">Features</span>
          </motion.h2>
          
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={subtitleVariants}
          >
            Experience cutting-edge technology with uncompromising design. 
            Our earbuds combine innovation with performance for the ultimate audio experience.
          </motion.p>
        </div>

        {getStaggeredGrid()}
        
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-viveon-red/5 rounded-full filter blur-[100px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-viveon-neon-blue/5 rounded-full filter blur-[100px] -z-10 animate-pulse" />
      </div>
    </section>
  );
};

export default FeaturesList;
