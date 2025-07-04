import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import RotatingRing from './3D/RotatingRing';

const HeroContent: React.FC = () => {
  return <div className="max-w-4xl mx-auto text-center mb-16">
      <motion.div className="mb-8" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      ease: "easeOut"
    }}>
        <img 
          src="/lovable-uploads/51bd4a63-8d7e-4ee9-a0bd-8f1b88aec749.png" 
          alt="HUX - Introducing the Future of Tech" 
          className="w-full max-w-3xl mx-auto h-auto mb-8"
        />
      </motion.div>
      
      {/* 3D Rotating Ring */}
      <motion.div className="mb-8" initial={{
      opacity: 0,
      scale: 0.8
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 1,
      delay: 0.4
    }}>
        <RotatingRing />
      </motion.div>
      
      <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 0.8
    }}>
        <Button className="bg-viveon-red/90 hover:bg-viveon-red/80 text-white px-8 py-6 text-lg font-medium tracking-wide border border-viveon-red/30 shadow-md rounded-full">
          HUX NEXUS RINGS
        </Button>
        <Button variant="outline" className="border-viveon-neon-blue/70 px-8 py-6 text-lg font-medium tracking-wide group shadow-md rounded-full bg-gray-950 hover:bg-gray-800 text-[#00eeea]">
          EXPLORE FEATURES
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </div>;
};
export default HeroContent;