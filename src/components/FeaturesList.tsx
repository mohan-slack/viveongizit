
import React, { useRef } from 'react';
import SectionTitle from './features/SectionTitle';
import FeatureGrid from './features/FeatureGrid';
import { getFeaturesData } from './features/featuresData';

const FeaturesList: React.FC = () => {
  const features = getFeaturesData();
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="features" 
      className="relative py-20 lg:py-32 overflow-hidden" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Revolutionary"
          highlightedText="Features"
          description="Experience cutting-edge technology with uncompromising design. 
            Our earbuds combine innovation with performance for the ultimate audio experience."
        />

        <FeatureGrid features={features} />
        
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-viveon-red/5 rounded-full filter blur-[100px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-viveon-neon-blue/5 rounded-full filter blur-[100px] -z-10 animate-pulse" />
      </div>
    </section>
  );
};

export default FeaturesList;
