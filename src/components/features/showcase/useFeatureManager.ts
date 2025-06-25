
import { useState, useEffect } from 'react';
import { FeatureProps } from '../FeatureTypes';

export interface EnhancedFeature extends Omit<FeatureProps, 'index' | 'selected' | 'onSelect' | 'onDeselect'> {
  id: string;
  selected: boolean;
}

export const useFeatureManager = (
  features: Omit<FeatureProps, 'index' | 'selected' | 'onSelect' | 'onDeselect'>[], 
  maxVisible: number
) => {
  const [selectedFeatureId, setSelectedFeatureId] = useState<string | null>(null);
  const [visibleFeatures, setVisibleFeatures] = useState<EnhancedFeature[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  
  // Prepare features with IDs and selection state
  const enhanceFeatures = (features: Omit<FeatureProps, 'index' | 'selected' | 'onSelect' | 'onDeselect'>[]) => {
    return features.map(feature => ({
      ...feature,
      id: feature.id || `feature-${Math.random().toString(36).substr(2, 9)}`,
      selected: false
    }));
  };
  
  // Initialize features with IDs and selection states
  useEffect(() => {
    const enhancedFeatures = enhanceFeatures(features);
    updateVisibleFeatures(enhancedFeatures, 0);
  }, [features]);
  
  // Update visible features based on pagination
  const updateVisibleFeatures = (allFeatures: EnhancedFeature[], page: number) => {
    const startIdx = page * maxVisible;
    const endIdx = Math.min(startIdx + maxVisible, allFeatures.length);
    setVisibleFeatures(allFeatures.slice(startIdx, endIdx));
  };
  
  // Handle feature selection/deselection
  const handleSelect = (id: string) => {
    if (selectedFeatureId === id) {
      // Deselect if already selected
      setSelectedFeatureId(null);
      setVisibleFeatures(prev => 
        prev.map(feat => feat.id === id ? {...feat, selected: false} : feat)
      );
    } else {
      // Select the new feature
      setSelectedFeatureId(id);
      setVisibleFeatures(prev => 
        prev.map(feat => ({
          ...feat, 
          selected: feat.id === id
        }))
      );
    }
  };
  
  // Handle pagination
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const enhancedFeatures = enhanceFeatures(features);
    updateVisibleFeatures(enhancedFeatures, newPage);
    setSelectedFeatureId(null);
  };
  
  const handleNextPage = () => {
    const totalPages = Math.ceil(features.length / maxVisible);
    const nextPage = (currentPage + 1) % totalPages;
    handlePageChange(nextPage);
  };
  
  const handlePrevPage = () => {
    const totalPages = Math.ceil(features.length / maxVisible);
    const prevPage = (currentPage - 1 + totalPages) % totalPages;
    handlePageChange(prevPage);
  };
  
  return {
    visibleFeatures,
    currentPage,
    selectedFeatureId,
    handleSelect,
    handlePageChange,
    handleNextPage,
    handlePrevPage,
    totalPages: Math.ceil(features.length / maxVisible)
  };
};
