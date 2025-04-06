
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { getEarbudsData } from './features/earbudsData';
import { getSmartRingsData } from './features/smartRingsData';
import FeatureCard from './features/FeatureCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { useMousePosition } from '@/hooks/use-mouse-position';
import CategorySwitch from './features/showcase/CategorySwitch';
import FeatureAnimatedBackground from './features/showcase/FeatureAnimatedBackground';
import CategoryHeader from './features/showcase/CategoryHeader';
import FeatureSectionHeading from './features/showcase/FeatureSectionHeading';

const FuturisticFeaturesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'earbuds' | 'smartrings'>('earbuds');
  const earbudsData = getEarbudsData();
  const smartRingsData = getSmartRingsData();
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition(containerRef);
  
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
  
  return (
    <section 
      id="features-showcase" 
      className="relative py-24 lg:py-32 overflow-hidden"
      ref={containerRef}
    >
      <FeatureAnimatedBackground mousePosition={mousePosition} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <FeatureSectionHeading />
          
          <CategorySwitch 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
          <CategoryHeader 
            title={featuresTitle}
            subtitle={featuresSubtitle}
          />
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
