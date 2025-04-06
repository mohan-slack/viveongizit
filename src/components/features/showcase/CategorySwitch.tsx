
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CategorySwitchProps {
  activeCategory: 'earbuds' | 'smartrings';
  setActiveCategory: (category: 'earbuds' | 'smartrings') => void;
}

const CategorySwitch: React.FC<CategorySwitchProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <motion.div 
      className="flex justify-center mt-10 mb-16"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        transition: {
          duration: 0.4,
          ease: "easeOut"
        }
      }}
    >
      <div className="relative flex p-1 rounded-xl bg-black/30 backdrop-blur-lg border border-white/10 shadow-2xl">
        <button
          onClick={() => setActiveCategory('earbuds')}
          className={cn(
            "relative px-6 py-3 text-sm md:text-base font-medium rounded-lg transition-all duration-300",
            activeCategory === 'earbuds' 
              ? "text-white" 
              : "text-gray-400 hover:text-gray-200"
          )}
        >
          Earbuds
          {activeCategory === 'earbuds' && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-viveon-red/20 to-viveon-neon-blue/20 backdrop-blur-sm rounded-lg z-[-1]"
              layoutId="categoryBackground"
              transition={{ duration: 0.3, type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>
        
        <button
          onClick={() => setActiveCategory('smartrings')}
          className={cn(
            "relative px-6 py-3 text-sm md:text-base font-medium rounded-lg transition-all duration-300",
            activeCategory === 'smartrings' 
              ? "text-white" 
              : "text-gray-400 hover:text-gray-200"
          )}
        >
          Smart Rings
          {activeCategory === 'smartrings' && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-teal-500/20 backdrop-blur-sm rounded-lg z-[-1]"
              layoutId="categoryBackground"
              transition={{ duration: 0.3, type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default CategorySwitch;
