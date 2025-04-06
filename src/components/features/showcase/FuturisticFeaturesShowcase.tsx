
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { useMousePosition } from '@/hooks/use-mouse-position';
import CategorySwitch from './CategorySwitch';
import FeatureSectionHeading from './FeatureSectionHeading';
import CategoryDisplay from './CategoryDisplay';
import FeaturesBackgroundEffects from './FeaturesBackgroundEffects';
import { useFeatureCategoryData } from './useFeatureCategoryData';

const FuturisticFeaturesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'earbuds' | 'smartrings'>('earbuds');
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition(containerRef);
  
  const { activeData, isDataLoaded } = useFeatureCategoryData(activeCategory);
  
  return (
    <section 
      id="features-showcase" 
      className="relative py-16 lg:py-24 overflow-hidden"
      ref={containerRef}
    >
      <FeaturesBackgroundEffects 
        isDataLoaded={isDataLoaded} 
        isMobile={isMobile} 
        mousePosition={mousePosition} 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: isMobile ? 0.05 : 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
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
