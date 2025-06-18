
import React, { useState, useRef, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { getSmartRingsData } from './features/smartRingsData';
import { useIsMobile } from '@/hooks/use-mobile';
import { useMousePosition } from '@/hooks/use-mouse-position';
import FeatureSectionHeading from './features/showcase/FeatureSectionHeading';
import CategoryDisplay from './features/showcase/CategoryDisplay';

// Lazy load the animated background for better initial load time
const FeatureAnimatedBackground = lazy(() => 
  import('./features/showcase/FeatureAnimatedBackground')
);

const FuturisticFeaturesShowcase: React.FC = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition(containerRef);
  
  // Use only smart rings data
  const [smartRingsData] = useState(() => getSmartRingsData());
  
  // Load data on mount
  React.useEffect(() => {
    // Mark data as loaded with a small delay to help initial render performance
    const timer = setTimeout(() => {
      setIsDataLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: isMobile ? 0.05 : 0.1
      }
    }
  };
  
  return (
    <section 
      id="features-showcase" 
      className="relative py-16 lg:py-24 overflow-hidden"
      ref={containerRef}
    >
      {/* Only render the animated background when data is loaded and not on low-end mobile devices */}
      {isDataLoaded && !isMobile && (
        <Suspense fallback={<div className="absolute inset-0 bg-black/50" />}>
          <FeatureAnimatedBackground mousePosition={mousePosition} />
        </Suspense>
      )}
      
      {/* Static background for mobile */}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-viveon-darker/90 to-black/80" />
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <FeatureSectionHeading />
          
          <CategoryDisplay
            activeCategory="smartrings"
            activeData={smartRingsData}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FuturisticFeaturesShowcase;
