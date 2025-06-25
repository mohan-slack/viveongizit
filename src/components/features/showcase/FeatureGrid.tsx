
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeatureCard from '../FeatureCard';
import { FeatureProps } from '../FeatureTypes';

interface FeatureGridProps {
  features: (Omit<FeatureProps, 'index' | 'selected' | 'onSelect' | 'onDeselect'> & { id: string, selected: boolean })[];
  onSelect: (id: string) => void;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features, onSelect }) => {
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
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence mode="wait">
        {features.map((feature, index) => (
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
              onSelect={onSelect}
              onDeselect={onSelect}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default FeatureGrid;
