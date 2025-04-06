
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { getEarbudsData } from './features/earbudsData';
import { getSmartRingsData } from './features/smartRingsData';
import { useIsMobile } from '@/hooks/use-mobile';
import { useMousePosition } from '@/hooks/use-mouse-position';
import CategorySwitch from './features/showcase/CategorySwitch';
import FeatureAnimatedBackground from './features/showcase/FeatureAnimatedBackground';
import FeatureSectionHeading from './features/showcase/FeatureSectionHeading';
import CategoryDisplay from './features/showcase/CategoryDisplay';

const FuturisticFeaturesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'earbuds' | 'smartrings'>('earbuds');
  const earbudsData = getEarbudsData();
  const smartRingsData = getSmartRingsData();
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition(containerRef);
  
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
          
          <CategoryDisplay
            activeCategory={activeCategory}
            activeData={activeData}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FuturisticFeaturesShowcase;
