import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FeaturedProductsSection: React.FC = () => {
  const navigate = useNavigate();
  
  const smartRings = [
    {
      id: 2,
      name: "HUX AURA RING",
      category: "SMART RING",
      imagePath: "/lovable-uploads/f4500f10-1a88-4387-8751-e15bcb29a6db.png",
      secondaryImagePath: "/lovable-uploads/93892fab-4b12-40ce-bec3-49c37387cde3.png",
      tertiaryImagePath: "/lovable-uploads/34f15844-10cc-451f-805f-c54ce21e93fb.png",
      color: "blue" as const,
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-background via-background to-muted py-12 lg:py-16 w-full overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-lines opacity-5" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-viveon-red/5 via-transparent to-viveon-neon-blue/5" />
      
      {/* Floating accent elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-viveon-red/10 to-viveon-neon-purple/10 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-viveon-neon-blue/10 to-viveon-neon-purple/10 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6] 
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
        <div id="rings" className="mb-12">
          <motion.div 
            className="flex justify-between items-end mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-gray-400">HUX</span>{' '}
                <span className="bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue bg-clip-text text-transparent animate-gradient-shimmer">
                  Smart Rings
                </span>
              </motion.h2>
              <motion.p 
                className="text-xl text-muted-foreground font-light"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Technology at your fingertips • Premium Edition
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button 
                variant="ghost" 
                className="group relative px-8 py-4 text-lg font-semibold rounded-2xl border border-border/50 hover:border-viveon-red/30 transition-all duration-300 hover:bg-viveon-red/5"
              >
                <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent group-hover:from-viveon-red group-hover:to-viveon-neon-purple transition-all duration-300">
                  View Collection
                </span>
                <ArrowRight className="ml-3 w-5 h-5 text-muted-foreground group-hover:text-viveon-red group-hover:translate-x-1 transition-all duration-300" />
                
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-viveon-red/0 to-viveon-neon-blue/0 group-hover:from-viveon-red/10 group-hover:to-viveon-neon-blue/10 transition-all duration-300 -z-10" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 gap-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {smartRings.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4 + (index * 0.2),
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="transform-gpu"
              >
                <ProductCard 
                  name={product.name}
                  category={product.category}
                  imagePath={product.imagePath}
                  secondaryImagePath={product.secondaryImagePath}
                  tertiaryImagePath={product.tertiaryImagePath}
                  color={product.color}
                  onClick={product.name === "HUX AURA RING" ? () => navigate('/products/hux-aura-ring') : undefined}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsSection;
