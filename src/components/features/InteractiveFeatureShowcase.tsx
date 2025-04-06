
import React from 'react';
import { InteractiveFeatureProps } from './FeatureTypes';
import NavigationButtons from './showcase/NavigationButtons';
import FeaturePagination from './showcase/FeaturePagination';
import FeatureGrid from './showcase/FeatureGrid';
import BackgroundEffects from './showcase/BackgroundEffects';
import { useFeatureManager } from './showcase/useFeatureManager';

const InteractiveFeatureShowcase: React.FC<InteractiveFeatureProps> = ({ 
  features, 
  maxVisible = 6 
}) => {
  const {
    visibleFeatures,
    currentPage,
    handleSelect,
    handlePageChange,
    handleNextPage,
    handlePrevPage,
    totalPages
  } = useFeatureManager(features, maxVisible);

  return (
    <div className="relative py-8 px-4">
      <BackgroundEffects />
      
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Interactive Feature Showcase
          </h2>
          
          <NavigationButtons 
            onPrevPage={handlePrevPage}
            onNextPage={handleNextPage}
          />
        </div>
        
        <FeatureGrid 
          features={visibleFeatures}
          onSelect={handleSelect}
        />
        
        <FeaturePagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default InteractiveFeatureShowcase;
