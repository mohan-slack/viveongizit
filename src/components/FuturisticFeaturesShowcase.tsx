
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getEarbudsData } from './features/earbudsData';
import { getSmartRingsData } from './features/smartRingsData';
import FeatureCard from './features/FeatureCard';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const FuturisticFeaturesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'earbuds' | 'smartrings'>('earbuds');
  const earbudsData = getEarbudsData();
  const smartRingsData = getSmartRingsData();
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  const featuresTitle = activeCategory === 'earbuds' ? 'Next-Gen Earbuds' : 'Smart Ring Technology';
  const featuresSubtitle = activeCategory === 'earbuds' 
    ? 'Experience sound like never before with our premium wireless earbuds'
    : 'Transform your lifestyle with wearable tech that adapts to you';
  
  const activeData = activeCategory === 'earbuds' ? earbudsData : smartRingsData;
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const switchVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section 
      id="features-showcase" 
      className="relative py-24 lg:py-32 overflow-hidden"
      ref={containerRef}
    >
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        {/* Grid lines */}
        <div className="absolute inset-0 bg-grid-lines opacity-5" />
        
        {/* Radial gradient following mouse */}
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-viveon-red/10 via-viveon-neon-purple/10 to-viveon-neon-blue/10 blur-3xl"
          animate={{
            x: mousePosition.x - 250,
            y: mousePosition.y - 250,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
            mass: 0.5
          }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`, 
              opacity: Math.random() * 0.5 
            }}
            animate={{ 
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: Math.random() * 20 + 10, 
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={titleVariants}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue bg-clip-text text-transparent">
              Revolutionary Features
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of wearable technology with cutting-edge features
            </p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center mt-10 mb-16"
            variants={switchVariants}
          >
            <div className="relative flex p-1 rounded-xl bg-black/30 backdrop-blur-lg border border-white/10 shadow-2xl">
              <button
                onClick={() => setActiveCategory('earbuds')}
                className={cn(
                  "relative px-6 py-3 text-sm md:text-base font-medium rounded-lg transition-all duration-300",
                  activeCategory === 'earbuds' 
                    ? "text-white" 
                    : "text-gray-400 hover:text-gray-200"
                )}
              >
                Earbuds
                {activeCategory === 'earbuds' && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-viveon-red/20 to-viveon-neon-blue/20 backdrop-blur-sm rounded-lg z-[-1]"
                    layoutId="categoryBackground"
                    transition={{ duration: 0.3, type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
              
              <button
                onClick={() => setActiveCategory('smartrings')}
                className={cn(
                  "relative px-6 py-3 text-sm md:text-base font-medium rounded-lg transition-all duration-300",
                  activeCategory === 'smartrings' 
                    ? "text-white" 
                    : "text-gray-400 hover:text-gray-200"
                )}
              >
                Smart Rings
                {activeCategory === 'smartrings' && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-teal-500/20 backdrop-blur-sm rounded-lg z-[-1]"
                    layoutId="categoryBackground"
                    transition={{ duration: 0.3, type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            </div>
          </motion.div>
          
          <motion.div variants={titleVariants} className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              {featuresTitle}
            </h3>
            <p className="text-gray-400">
              {featuresSubtitle}
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory} // Force re-render on category change
        >
          {activeData.map((feature, index) => (
            <FeatureCard 
              key={`${activeCategory}-${index}`}
              {...feature} 
              index={index} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FuturisticFeaturesShowcase;
