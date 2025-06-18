
import React from 'react';
import { motion } from 'framer-motion';
import CategoryHeader from './CategoryHeader';
import { FeatureProps } from '../FeatureTypes';
import FeatureCard from '../FeatureCard';

interface CategoryDisplayProps {
  activeCategory: 'smartrings';
  activeData: Omit<FeatureProps, 'index'>[];
}

const CategoryDisplay: React.FC<CategoryDisplayProps> = ({ 
  activeData
}) => {
  const featuresTitle = 'Smart Ring Technology';
  const featuresSubtitle = 'Transform your lifestyle with wearable tech that adapts to you';
    
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
    <>
      <CategoryHeader 
        title={featuresTitle}
        subtitle={featuresSubtitle}
      />
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key="smartrings"
      >
        {activeData.map((feature, index) => (
          <FeatureCard 
            key={`smartrings-${index}`}
            {...feature} 
            index={index} 
          />
        ))}
      </motion.div>
    </>
  );
};

export default CategoryDisplay;
