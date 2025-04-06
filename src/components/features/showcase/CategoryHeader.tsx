
import React from 'react';
import { motion } from 'framer-motion';

interface CategoryHeaderProps {
  title: string;
  subtitle: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
      className="mb-12"
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
        {title}
      </h3>
      <p className="text-gray-400">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default CategoryHeader;
