import React from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { getSmartRingsData } from './features/smartRingsData';

interface FeatureCardsGridProps {
  className?: string;
}

const FeatureCardsGrid: React.FC<FeatureCardsGridProps> = ({ className }) => {
  const featuresData = getSmartRingsData().slice(0, 8); // Get first 8 features

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  );

  return (
    <div className={className}>
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue bg-clip-text text-transparent">
            Smart Ring Features
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of wearable technology
          </p>
        </motion.div>

        <Carousel
          plugins={[autoplayPlugin.current]}
          className="w-full"
          onMouseEnter={() => autoplayPlugin.current.stop()}
          onMouseLeave={() => autoplayPlugin.current.reset()}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuresData.map((feature, index) => (
              <CarouselItem key={feature.id} className={`pl-2 md:pl-4 ${
                // Different basis sizes for variety
                index % 4 === 0 ? 'basis-full md:basis-2/3 lg:basis-1/2' :
                index % 4 === 1 ? 'basis-full md:basis-1/2 lg:basis-1/3' :
                index % 4 === 2 ? 'basis-full md:basis-1/2 lg:basis-2/5' :
                'basis-full md:basis-3/5 lg:basis-1/3'
              }`}>
                <motion.div 
                  className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border-2 transition-all duration-500 ${feature.color} hover:border-opacity-70`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{
                    // Different heights for variety
                    minHeight: index % 3 === 0 ? '400px' : index % 3 === 1 ? '350px' : '300px'
                  }}
                >
                  <div className="relative overflow-hidden h-full flex flex-col">
                    {/* Feature image */}
                    {feature.backgroundImage && (
                      <div className="flex-1 flex items-center justify-center p-6 relative">
                        <img 
                          src={feature.backgroundImage}
                          alt={feature.title}
                          className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 filter brightness-95 contrast-105"
                        />
                        
                        {/* Feature number indicator */}
                        <div className="absolute top-4 left-4 z-20">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${feature.glowColor} shadow-lg backdrop-blur-sm`}>
                            {index + 1}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Animated overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-viveon-darker/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating particles effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-viveon-neon-blue/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-viveon-red/60 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                      <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-viveon-neon-purple/60 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
                    </div>
                    
                    {/* Feature info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                      <motion.h3 
                        className="text-white text-lg md:text-xl font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span className="mr-2">{feature.emoji}</span>
                        {feature.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {feature.description}
                      </motion.p>
                      
                      <div className={`w-full h-0.5 mt-3 bg-gradient-to-r from-transparent via-${feature.glowColor.replace('bg-', '')} to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`} />
                    </div>
                  </div>

                  {/* Subtle glow effect */}
                  <div 
                    className="absolute -inset-2 rounded-[2rem] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${feature.glowColor.replace('bg-', '').replace('-500', '')}, transparent, ${feature.glowColor.replace('bg-', '').replace('-500', '')})`
                    }}
                  />
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

export default FeatureCardsGrid;