import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollingRingCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeRing, setActiveRing] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to ring index (0, 1, 2, 1, 0 pattern)
  const ringIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 1, 0]);

  useEffect(() => {
    const unsubscribe = ringIndex.onChange((latest) => {
      setActiveRing(Math.round(latest));
    });
    return unsubscribe;
  }, [ringIndex]);

  const rings = [
    {
      id: 1,
      image: "/lovable-uploads/19008984-8282-451e-91c9-266c0d1c364b.png",
      name: "HUX NEXUS RING",
      color: "from-viveon-red/30 to-viveon-neon-purple/30"
    },
    {
      id: 2,
      image: "/lovable-uploads/29776c52-7359-45a6-83ce-18a42ea0b8aa.png", 
      name: "HUX FLUX RING",
      color: "from-viveon-neon-blue/30 to-viveon-red/30"
    },
    {
      id: 3,
      image: "/lovable-uploads/19008984-8282-451e-91c9-266c0d1c364b.png",
      name: "HUX PRIME RING", 
      color: "from-viveon-neon-purple/30 to-viveon-neon-blue/30"
    }
  ];

  const getScale = (index: number) => {
    if (index === activeRing) return 1.2;
    if (Math.abs(index - activeRing) === 1) return 0.9;
    return 0.7;
  };

  const getOpacity = (index: number) => {
    if (index === activeRing) return 1;
    if (Math.abs(index - activeRing) === 1) return 0.7;
    return 0.4;
  };

  const getZIndex = (index: number) => {
    return index === activeRing ? 30 : 10;
  };

  return (
    <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-viveon-red/10 rounded-full filter blur-[100px] transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-viveon-neon-blue/10 rounded-full filter blur-[80px] transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Ring Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {rings.map((ring, index) => (
          <motion.div
            key={ring.id}
            className="absolute"
            style={{
              zIndex: getZIndex(index),
            }}
            animate={{
              scale: getScale(index),
              opacity: getOpacity(index),
              x: index === activeRing ? 0 : (index - activeRing) * 100,
              rotateY: index === activeRing ? 0 : (index - activeRing) * 15,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {/* Ring Card */}
            <div className="relative">
              {/* Glow Effect */}
              <div 
                className={`absolute -inset-8 bg-gradient-to-r ${ring.color} rounded-full filter blur-xl opacity-60`}
                style={{
                  display: index === activeRing ? 'block' : 'none'
                }}
              />
              
              {/* Ring Image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
                <img 
                  src={ring.image}
                  alt={ring.name}
                  className="w-full h-full object-contain filter brightness-110 contrast-105"
                />
              </div>

              {/* Ring Name */}
              {index === activeRing && (
                <motion.div 
                  className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wider">
                    {ring.name}
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-viveon-red to-viveon-neon-blue rounded-full mx-auto" />
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/60">
        <div className="flex space-x-2 mb-4">
          {rings.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeRing ? 'bg-viveon-red scale-150' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        <p className="text-sm">Scroll to explore</p>
        <motion.div 
          className="w-0.5 h-8 bg-gradient-to-b from-viveon-red to-transparent mt-2"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

export default ScrollingRingCarousel;