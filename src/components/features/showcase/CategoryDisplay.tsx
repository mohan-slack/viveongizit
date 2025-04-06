
import React from 'react';
import { motion } from 'framer-motion';
import CategoryHeader from './CategoryHeader';
import { FeatureProps } from '../FeatureTypes';
import FeatureCard from '../FeatureCard';

interface CategoryDisplayProps {
  activeCategory: 'earbuds' | 'smartrings';
  activeData: Omit<FeatureProps, 'index'>[];
}

const CategoryDisplay: React.FC<CategoryDisplayProps> = ({ 
  activeCategory, 
  activeData
}) => {
  const featuresTitle = activeCategory === 'earbuds' ? 'Next-Gen Earbuds' : 'Smart Ring Technology';
  const featuresSubtitle = activeCategory === 'earbuds' 
    ? 'Experience sound like never before with our premium wireless earbuds'
    : 'Transform your lifestyle with wearable tech that adapts to you';
    
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
        key={activeCategory} // Force re-render on category change
      >
        {/* Display all cards instead of limiting to 6 */}
        {activeData.map((feature, index) => (
          <FeatureCard 
            key={`${activeCategory}-${index}`}
            {...feature} 
            index={index} 
          />
        ))}
      </motion.div>
    </>
  );
};

export default CategoryDisplay;
