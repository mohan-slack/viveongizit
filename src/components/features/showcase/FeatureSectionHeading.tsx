
import React from 'react';
import { motion } from 'framer-motion';

const FeatureSectionHeading: React.FC = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div variants={titleVariants}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue bg-clip-text text-transparent">
        Revolutionary Features
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
        Experience the future of wearable technology with cutting-edge features
      </p>
    </motion.div>
  );
};

export default FeatureSectionHeading;
