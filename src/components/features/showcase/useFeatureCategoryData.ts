
import { useState, useEffect } from 'react';
import { getEarbudsData } from '../earbudsData';
import { getSmartRingsData } from '../smartRingsData';
import { FeatureProps } from '../FeatureTypes';

export function useFeatureCategoryData(activeCategory: 'earbuds' | 'smartrings') {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  
  // Use state to store data for better performance
  const [earbudsData] = useState(() => getEarbudsData());
  const [smartRingsData] = useState(() => getSmartRingsData());
  
  // Load data on mount
  useEffect(() => {
    // Mark data as loaded with a small delay to help initial render performance
    const timer = setTimeout(() => {
      setIsDataLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const activeData = activeCategory === 'earbuds' ? earbudsData : smartRingsData;
  
  return { activeData, isDataLoaded, earbudsData, smartRingsData };
}
