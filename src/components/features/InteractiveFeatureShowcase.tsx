
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { InteractiveFeatureProps, FeatureProps } from './FeatureTypes';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

const InteractiveFeatureShowcase: React.FC<InteractiveFeatureProps> = ({ 
  features, 
  maxVisible = 6 
}) => {
  const [selectedFeatureId, setSelectedFeatureId] = useState<string | null>(null);
  const [visibleFeatures, setVisibleFeatures] = useState<(Omit<FeatureProps, 'index' | 'selected' | 'onSelect' | 'onDeselect'> & { id: string, selected: boolean })[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  
  // Initialize features
  useEffect(() => {
    const enhancedFeatures = features.map(feature => ({
      ...feature,
      id: feature.id || `feature-${Math.random().toString(36).substr(2, 9)}`,
      selected: false
    }));
    
    // Set initial visible features
    updateVisibleFeatures(enhancedFeatures, 0);
  }, [features]);
  
  const updateVisibleFeatures = (allFeatures: any[], page: number) => {
    const startIdx = page * maxVisible;
    const endIdx = Math.min(startIdx + maxVisible, allFeatures.length);
    setVisibleFeatures(allFeatures.slice(startIdx, endIdx));
  };
  
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
  
  const handleNextPage = () => {
    const newPage = currentPage + 1;
    const totalPages = Math.ceil(features.length / maxVisible);
    
    const nextPage = newPage >= totalPages ? 0 : newPage;
    setCurrentPage(nextPage);
    
    const enhancedFeatures = features.map(feature => ({
      ...feature,
      id: feature.id || `feature-${Math.random().toString(36).substr(2, 9)}`,
      selected: false
    }));
    
    updateVisibleFeatures(enhancedFeatures, nextPage);
    setSelectedFeatureId(null);
  };
  
  const handlePrevPage = () => {
    const newPage = currentPage - 1;
    const totalPages = Math.ceil(features.length / maxVisible);
    
    const prevPage = newPage < 0 ? totalPages - 1 : newPage;
    setCurrentPage(prevPage);
    
    const enhancedFeatures = features.map(feature => ({
      ...feature,
      id: feature.id || `feature-${Math.random().toString(36).substr(2, 9)}`,
      selected: false
    }));
    
    updateVisibleFeatures(enhancedFeatures, prevPage);
    setSelectedFeatureId(null);
  };
  
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
    <div className="relative py-8 px-4">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-lines opacity-5 z-0" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-viveon-darker to-viveon-darker opacity-70 z-0" />
      
      {/* Interactive particles in background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${i % 3 === 0 ? 'bg-viveon-red' : i % 3 === 1 ? 'bg-viveon-neon-blue' : 'bg-viveon-neon-purple'}`}
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`, 
              opacity: Math.random() * 0.5 + 0.2 
            }}
            animate={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "linear" 
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Interactive Feature Showcase
          </h2>
          
          <div className="flex gap-2">
            <Button 
              onClick={handlePrevPage}
              variant="ghost" 
              size="icon"
              className="rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 border border-white/10"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </Button>
            <Button 
              onClick={handleNextPage}
              variant="ghost" 
              size="icon"
              className="rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 border border-white/10"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </Button>
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {visibleFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <FeatureCard 
                  {...feature} 
                  index={index}
                  onSelect={handleSelect}
                  onDeselect={handleSelect}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(features.length / maxVisible) }).map((_, idx) => (
              <motion.button
                key={idx}
                className={cn(
                  "w-2 h-2 rounded-full",
                  currentPage === idx
                    ? "bg-viveon-red"
                    : "bg-gray-600"
                )}
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  setCurrentPage(idx);
                  const enhancedFeatures = features.map(feature => ({
                    ...feature,
                    id: feature.id || `feature-${Math.random().toString(36).substr(2, 9)}`,
                    selected: false
                  }));
                  updateVisibleFeatures(enhancedFeatures, idx);
                  setSelectedFeatureId(null);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeatureShowcase;
