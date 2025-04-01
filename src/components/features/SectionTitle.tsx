
import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  highlightedText: string;
  description: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, highlightedText, description }) => {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8
      }
    }
  };

  return (
    <div className="text-center mb-16">
      <motion.h2 
        className="text-3xl md:text-5xl font-bold mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleVariants}
      >
        <span className="text-white">{title} </span>
        <span className="gradient-text">{highlightedText}</span>
      </motion.h2>
      
      <motion.p
        className="text-gray-400 max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={subtitleVariants}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default SectionTitle;
