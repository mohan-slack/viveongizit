import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from './ui/gradient-button';
import { ArrowRight } from 'lucide-react';
import { DecryptedText } from './ui/decrypted-text';

const HeroContent: React.FC = () => {
  return <div className="max-w-4xl mx-auto text-center mb-16">
      <motion.div className="mb-4 sm:mb-6" initial={{
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
          className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto h-auto"
        />
      </motion.div>
      
      <motion.p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto font-light tracking-wide px-4" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.8,
      delay: 0.3
    }}>
        Reality redefined. <DecryptedText 
          text="HUX NEXUS rings"
          className="text-base sm:text-lg md:text-xl text-white font-medium"
          encryptedClassName="text-base sm:text-lg md:text-xl text-gray-500"
          speed={80}
          maxIterations={12}
          sequential={true}
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
          animateOn="hover"
        /> don't just connect—they transform your lifestyle with cutting-edge wearable technology.
      </motion.p>
      
      <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 0.6
    }}>
        <GradientButton className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium tracking-wide">
          <DecryptedText 
            text="HUX NEXUS RINGS"
            className="text-base sm:text-lg font-medium tracking-wide text-white"
            encryptedClassName="text-base sm:text-lg font-medium tracking-wide text-white/50"
            speed={60}
            maxIterations={10}
            sequential={true}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            animateOn="hover"
          />
        </GradientButton>
        <GradientButton variant="variant" className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium tracking-wide group">
          <DecryptedText 
            text="EXPLORE FEATURES"
            className="text-base sm:text-lg font-medium tracking-wide"
            encryptedClassName="text-base sm:text-lg font-medium tracking-wide text-gray-400"
            speed={60}
            maxIterations={10}
            sequential={true}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            animateOn="hover"
          />
          <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </GradientButton>
      </motion.div>
    </div>;
};
export default HeroContent;