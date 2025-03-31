
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const EnhancedHeroSection: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollValue = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollValue * 0.3}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-viveon-darker">
      {/* Background particles effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-viveon-red/10 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-viveon-neon-blue/10 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-viveon-neon-purple/10 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '0.8s' }}></div>
      </div>
      
      {/* Grid lines for futuristic effect */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ 
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 58, 47, 0.2) 25%, rgba(255, 58, 47, 0.2) 26%, transparent 27%, transparent 74%, rgba(255, 58, 47, 0.2) 75%, rgba(255, 58, 47, 0.2) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.2) 25%, rgba(0, 255, 255, 0.2) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.2) 75%, rgba(0, 255, 255, 0.2) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="container relative z-10 mx-auto px-4 py-20 pt-40">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="block text-white font-light tracking-wider letter-spacing-wide text-lg md:text-xl mb-1">IMMERSE IN THE FUTURE WITH</span>
            <span className="gradient-text font-bold tracking-tighter text-7xl md:text-8xl drop-shadow-[0_5px_20px_rgba(255,58,47,0.4)]">VIVEON</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Where sound meets sensation. Experience our quantum earbuds and nexus rings - wearable tech that doesn't just connect you to the digital world, but elevates your presence within it.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="bg-viveon-red hover:bg-viveon-red/80 text-white px-8 py-6 text-lg font-medium tracking-wide neon-border border border-viveon-red">
              EXPLORE EARBUDS
            </Button>
            <Button variant="outline" className="border-viveon-neon-blue text-viveon-neon-blue hover:bg-viveon-neon-blue/10 px-8 py-6 text-lg font-medium tracking-wide group neon-border">
              DISCOVER RINGS
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
        
        <div ref={parallaxRef} className="relative mt-12 flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Smart Ring Display */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-viveon-red to-viveon-neon-purple rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/ae7d9563-090c-483c-83fc-da6455eefaaa.png" 
                  alt="VIVEON Smart Ring Collection" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-bold">NEXUS RING</h3>
                  <p className="text-viveon-neon-blue mt-1">Technology at your fingertips</p>
                </div>
              </div>
            </motion.div>
            
            {/* Earbuds in Case */}
            <motion.div 
              className="relative group row-span-2 md:mt-[-80px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-viveon-neon-blue to-viveon-neon-purple rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/3eebc2bb-d694-4ba4-b8a5-9a4a6cb23287.png" 
                  alt="VIVEON Quantum Earbuds" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-bold">QUANTUM EARBUDS</h3>
                  <p className="text-viveon-neon-blue mt-1">Immersive audio experience</p>
                </div>
              </div>
            </motion.div>
            
            {/* Earbuds Outside Case */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-viveon-neon-purple to-viveon-neon-blue rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/148630aa-7dc0-48ab-8e8a-206789faeea5.png" 
                  alt="VIVEON Earbuds Premium Collection" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-bold">ELITE AUDIO</h3>
                  <p className="text-viveon-neon-blue mt-1">Crystal clear sound</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-viveon-darker to-transparent z-10"></div>
    </div>
  );
};

export default EnhancedHeroSection;
