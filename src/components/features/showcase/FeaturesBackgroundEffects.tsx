
import React, { Suspense, lazy } from 'react';

// Lazy load the animated background for better initial load time
const FeatureAnimatedBackground = lazy(() => 
  import('./FeatureAnimatedBackground')
);

interface FeaturesBackgroundEffectsProps {
  isDataLoaded: boolean;
  isMobile: boolean;
  mousePosition: { x: number, y: number };
}

const FeaturesBackgroundEffects: React.FC<FeaturesBackgroundEffectsProps> = ({
  isDataLoaded,
  isMobile,
  mousePosition
}) => {
  return (
    <>
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
    </>
  );
};

export default FeaturesBackgroundEffects;
