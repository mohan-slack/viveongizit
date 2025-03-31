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
  return <div className="relative min-h-screen overflow-hidden bg-viveon-darker">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-viveon-red/10 rounded-full filter blur-3xl opacity-30 animate-float" style={{
        animationDelay: '0.5s'
      }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-viveon-neon-blue/10 rounded-full filter blur-3xl opacity-30 animate-float" style={{
        animationDelay: '1.2s'
      }}></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-viveon-neon-purple/10 rounded-full filter blur-3xl opacity-30 animate-float" style={{
        animationDelay: '0.8s'
      }}></div>
      </div>
      
      <div className="absolute inset-0 z-0 opacity-10" style={{
      backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 58, 47, 0.15) 25%, rgba(255, 58, 47, 0.15) 26%, transparent 27%, transparent 74%, rgba(255, 58, 47, 0.15) 75%, rgba(255, 58, 47, 0.15) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.15) 25%, rgba(0, 255, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.15) 75%, rgba(0, 255, 255, 0.15) 76%, transparent 77%, transparent)',
      backgroundSize: '50px 50px'
    }}></div>
      
      <div className="container relative z-10 mx-auto px-4 py-20 pt-40">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1 className="mb-6" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }}>
            <span className="block text-white font-light tracking-wider letter-spacing-wide text-lg md:text-xl mb-1">INTRODUCING THE FUTURE OF TECH</span>
            <span className="bg-gradient-to-r from-viveon-red/90 via-viveon-neon-purple/80 to-viveon-neon-blue/80 bg-clip-text text-transparent font-bold tracking-tighter text-7xl md:text-8xl drop-shadow-[0_3px_10px_rgba(255,58,47,0.3)]">HUX<span className="text-white text-[0.25em] align-top leading-none">™</span></span>
            <span className="block text-sm text-viveon-neon-blue/80 mt-2">by Viveon Gizit Pvt. Ltd.</span>
          </motion.h1>
          
          <motion.p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light tracking-wide" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }}>
            Where sound meets sensation. Experience our HUX QUANTUM earbuds and HUX NEXUS rings - wearable tech that doesn't just connect you to the digital world, but elevates your presence within it.
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }}>
            <Button className="bg-viveon-red/90 hover:bg-viveon-red/80 text-white px-8 py-6 text-lg font-medium tracking-wide border border-viveon-red/30 shadow-md rounded-full">
              HUX QUANTUM EARBUDS
            </Button>
            <Button variant="outline" className="border-viveon-neon-blue/70 text-viveon-neon-blue/90 hover:bg-viveon-neon-blue/10 px-8 py-6 text-lg font-medium tracking-wide group shadow-md rounded-full">
              HUX NEXUS RINGS
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
        
        <div ref={parallaxRef} className="relative mt-12 flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div className="relative group" initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 1,
            delay: 0.3
          }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-viveon-red/70 to-viveon-neon-purple/70 rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative bg-black rounded-xl overflow-hidden">
                <img src="/lovable-uploads/701c7baf-bad4-4ac1-a5c8-972935c2f4f7.png" alt="HUX Smart Ring Collection" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-bold">HUX NEXUS PRO</h3>
                  <p className="text-viveon-neon-blue/80 mt-1">Next-gen wearable technology</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="relative group row-span-2 md:mt-[-80px]" initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 1
          }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-viveon-neon-blue/70 to-viveon-neon-purple/70 rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative bg-black rounded-xl overflow-hidden">
                <img src="/lovable-uploads/677085e7-aad4-423e-8673-b7c52b1080c3.png" alt="HUX QUANTUM PRO Earbuds" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-bold">HUX QUANTUM PRO</h3>
                  <p className="text-viveon-neon-blue/80 mt-1">Wear the Future of Wellness</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="relative group" initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 1,
            delay: 0.6
          }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-viveon-neon-purple/70 to-viveon-neon-blue/70 rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative bg-black rounded-xl overflow-hidden">
                <img src="/lovable-uploads/97d37c64-bc58-45fb-9fae-1199e9856c7e.png" alt="HUX Earbuds Premium Collection" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-bold">HUX SONIC ELITE</h3>
                  <p className="text-viveon-neon-blue/80 mt-1">Crystal clear sound</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-viveon-darker to-transparent z-10"></div>
    </div>;
};
export default EnhancedHeroSection;