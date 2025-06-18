
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
        staggerChildren: 0.08
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key="smartrings"
      >
        {activeData.map((feature, index) => (
          <motion.div
            key={`smartrings-${index}`}
            className="h-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.08,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <FeatureCard 
              {...feature} 
              index={index} 
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default CategoryDisplay;
