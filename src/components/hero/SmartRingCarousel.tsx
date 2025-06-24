
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

interface SmartRing {
  id: number;
  name: string;
  model: string;
  imagePath: string;
  color: 'red' | 'blue' | 'purple';
  description: string;
}

const SmartRingCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const smartRings: SmartRing[] = [
    {
      id: 1,
      name: "HUX NEXUS",
      model: "Pro Model",
      imagePath: "/lovable-uploads/aa8bef96-2dd1-4a17-98eb-52e710df2eb9.png",
      color: "red",
      description: "Advanced biometric tracking with AI-powered insights"
    },
    {
      id: 2,
      name: "HUX AURA",
      model: "Elite Edition",
      imagePath: "/lovable-uploads/2ea98b0a-5fc8-4e3d-ae84-b4471e6b27ca.png",
      color: "blue",
      description: "Premium wellness monitoring with gesture control"
    },
    {
      id: 3,
      name: "HUX FLUX",
      model: "Future Series",
      imagePath: "/lovable-uploads/b1dbfd05-9fff-498b-9f74-f970426c9d40.png",
      color: "purple",
      description: "Next-gen connectivity with neural interface technology"
    }
  ];

  const colorMap = {
    red: {
      glow: 'drop-shadow-[0_0_30px_rgba(255,58,47,0.8)]',
      border: 'border-viveon-red/30',
      bg: 'from-viveon-red/20 to-viveon-red/5'
    },
    blue: {
      glow: 'drop-shadow-[0_0_30px_rgba(0,255,255,0.8)]',
      border: 'border-viveon-neon-blue/30',
      bg: 'from-viveon-neon-blue/20 to-viveon-neon-blue/5'
    },
    purple: {
      glow: 'drop-shadow-[0_0_30px_rgba(155,48,255,0.8)]',
      border: 'border-viveon-neon-purple/30',
      bg: 'from-viveon-neon-purple/20 to-viveon-neon-purple/5'
    }
  };

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % smartRings.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, smartRings.length]);

  const nextRing = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % smartRings.length);
  };

  const prevRing = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + smartRings.length) % smartRings.length);
  };

  const currentRing = smartRings[currentIndex];

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Main Carousel Container */}
      <div className="relative h-96 md:h-[500px] flex items-center justify-center">
        
        {/* Background Ring Glow */}
        <div className={`absolute inset-0 bg-gradient-radial ${colorMap[currentRing.color].bg} rounded-full filter blur-3xl opacity-30 transition-all duration-1000`} />
        
        {/* Central Ring Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRing.id}
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              rotateY: { duration: 0.6 }
            }}
            className="relative z-10"
          >
            <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 ${colorMap[currentRing.color].border} bg-black/20 backdrop-blur-sm flex items-center justify-center overflow-hidden`}>
              {/* Ring Image */}
              <motion.img
                src={currentRing.imagePath}
                alt={currentRing.name}
                className={`w-full h-full object-contain p-8 transition-all duration-500 ${colorMap[currentRing.color].glow}`}
                whileHover={{ 
                  scale: 1.1,
                  filter: "brightness(1.2) contrast(1.1)",
                  transition: { duration: 0.3 }
                }}
              />
              
              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 transform rotate-45 animate-pulse" />
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevRing}
          className="absolute left-4 md:left-8 z-20 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={nextRing}
          className="absolute right-4 md:right-8 z-20 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </Button>
      </div>
      
      {/* Ring Information */}
      <div className="text-center mt-8 space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRing.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {currentRing.name}
            </h3>
            <p className="text-viveon-neon-blue/80 text-lg font-medium mb-3">
              {currentRing.model}
            </p>
            <p className="text-gray-300 max-w-md mx-auto">
              {currentRing.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Carousel Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {smartRings.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? `bg-${currentRing.color === 'red' ? 'viveon-red' : currentRing.color === 'blue' ? 'viveon-neon-blue' : 'viveon-neon-purple'} scale-125` 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SmartRingCarousel;
