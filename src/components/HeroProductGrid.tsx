
import React from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface HeroProductGridProps {
  className?: string;
}

const HeroProductGrid: React.FC<HeroProductGridProps> = ({ className }) => {
  const ringImages = [
    {
      src: '/lovable-uploads/a2b322a8-cce2-493a-8a46-c407851ccfc5.png',
      alt: 'HUX Smart Rings - Silver & Gold Edition',
      title: 'Luxury Edition'
    },
    {
      src: '/lovable-uploads/94c1797e-efb8-4507-bb13-1490c37799de.png',
      alt: 'HUX Smart Rings - Professional Series',
      title: 'Professional Series'
    },
    {
      src: '/lovable-uploads/67eb3408-bce5-4bbf-838f-42cfb22c7dd3.png',
      alt: 'HUX Smart Rings - Carbon Fiber & Designer',
      title: 'Designer Series'
    },
    {
      src: '/lovable-uploads/fe514457-06a6-4e0c-adbb-5f677bb8f4f7.png',
      alt: 'HUX Smart Rings - Black & Rose Gold with LED',
      title: 'Tech Edition'
    }
  ];

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className={className}>
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Carousel
          plugins={[autoplayPlugin.current]}
          className="w-full"
          onMouseEnter={() => autoplayPlugin.current.stop()}
          onMouseLeave={() => autoplayPlugin.current.reset()}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {ringImages.map((ring, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                <motion.div 
                  className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-viveon-red/20 hover:border-viveon-neon-blue/40 transition-all duration-500"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="relative overflow-hidden min-h-[300px] flex items-center justify-center bg-gradient-to-br from-gray-900/20 to-black/20">
                    <img 
                      src={ring.src}
                      alt={ring.alt}
                      className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 filter brightness-95 contrast-105"
                    />
                    
                    {/* Animated overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-viveon-darker/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating particles effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-viveon-neon-blue/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-viveon-red/60 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                      <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-viveon-neon-purple/60 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
                    </div>
                    
                    {/* Title overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <motion.h3 
                        className="text-white text-lg md:text-xl font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {ring.title}
                      </motion.h3>
                      <div className="w-full h-0.5 bg-gradient-to-r from-viveon-red via-viveon-neon-blue to-viveon-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-viveon-darker/80 border-viveon-red/30 text-white hover:bg-viveon-red/20" />
          <CarouselNext className="right-4 bg-viveon-darker/80 border-viveon-red/30 text-white hover:bg-viveon-red/20" />
        </Carousel>
      </motion.div>
    </div>
  );
};

export default HeroProductGrid;
