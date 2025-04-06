
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveFeatureShowcase from '@/components/features/InteractiveFeatureShowcase';
import { FeatureProps } from '@/components/features/FeatureTypes';
import { useLocation } from 'react-router-dom';
import { getEarbudsData } from '@/components/features/earbudsData';
import { getSmartRingsData } from '@/components/features/smartRingsData';

// Use all features data from both product types
const featuresData: Omit<FeatureProps, 'index' | 'selected' | 'onSelect' | 'onDeselect'>[] = [
  // Get all items from earbuds data
  ...getEarbudsData(),
  // Get all items from smart rings data
  ...getSmartRingsData()
];

const Features = () => {
  const location = useLocation();
  
  // Handle scroll to top when navigating to this page
  useEffect(() => {
    // Clear any stale or incomplete navigation state
    window.history.replaceState({}, document.title);
    
    // Always ensure we're at the top when loading the features page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  
  return (
    <div className="min-h-screen relative">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue bg-clip-text text-transparent">
            Explore Our Features
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the future of wearable technology with our interactive feature showcase
          </p>
        </div>
        
        <div className="mb-24">
          <InteractiveFeatureShowcase features={featuresData} maxVisible={9} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Features;
