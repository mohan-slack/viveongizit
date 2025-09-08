
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { GradientButton } from './ui/gradient-button';
import { cn } from '@/lib/utils';
import { Clock, Heart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  category: string;
  imagePath: string;
  secondaryImagePath?: string;
  tertiaryImagePath?: string;
  color: 'red' | 'blue' | 'purple';
  className?: string;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  name, 
  category, 
  imagePath, 
  secondaryImagePath,
  tertiaryImagePath,
  color = 'red',
  className,
  onClick
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = [imagePath, secondaryImagePath, tertiaryImagePath].filter(Boolean) as string[];

  // Auto-transition images for products with multiple images
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [images.length]);

  const colorMap = {
    red: {
      border: 'border-viveon-red/30',
      glow: 'before:shadow-[0_0_25px_rgba(255,58,47,0.3)]',
      text: 'text-viveon-red/90',
      comingSoon: 'bg-gradient-to-r from-viveon-red/80 to-viveon-red/60 hover:from-viveon-red/90 hover:to-viveon-red/70 text-white border border-viveon-red/40 shadow-lg shadow-viveon-red/20',
      cardGlow: 'shadow-[0_0_30px_rgba(255,58,47,0.2)]',
      imageGlow: 'drop-shadow-[0_0_15px_rgba(255,58,47,0.4)]',
    },
    blue: {
      border: 'border-viveon-neon-blue/30',
      glow: 'before:shadow-[0_0_25px_rgba(0,255,255,0.3)]',
      text: 'text-viveon-neon-blue/90',
      comingSoon: 'bg-gradient-to-r from-viveon-neon-blue/80 to-viveon-neon-blue/60 hover:from-viveon-neon-blue/90 hover:to-viveon-neon-blue/70 text-white border border-viveon-neon-blue/40 shadow-lg shadow-viveon-neon-blue/20',
      cardGlow: 'shadow-[0_0_30px_rgba(0,255,255,0.2)]',
      imageGlow: 'drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]',
    },
    purple: {
      border: 'border-viveon-neon-purple/30',
      glow: 'before:shadow-[0_0_25px_rgba(155,48,255,0.3)]',
      text: 'text-viveon-neon-purple/90',
      comingSoon: 'bg-gradient-to-r from-viveon-neon-purple/80 to-viveon-neon-purple/60 hover:from-viveon-neon-purple/90 hover:to-viveon-neon-purple/70 text-white border border-viveon-neon-purple/40 shadow-lg shadow-viveon-neon-purple/20',
      cardGlow: 'shadow-[0_0_30px_rgba(155,48,255,0.2)]',
      imageGlow: 'drop-shadow-[0_0_15px_rgba(155,48,255,0.4)]',
    },
  };

  return (
    <div 
      className={cn(
        "group relative bg-black/60 backdrop-blur-md p-6 rounded-2xl transition-all duration-500 hover:translate-y-[-15px] perspective-1000",
        "before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-500 before:z-[-1] group-hover:before:opacity-100",
        colorMap[color].border,
        colorMap[color].glow,
        isHovered && colorMap[color].cardGlow,
        onClick && "cursor-pointer",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        transform: isHovered ? 'rotateX(5deg) rotateY(5deg) scale(1.02)' : 'rotateX(0deg) rotateY(0deg) scale(1)',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Enhanced glow effect */}
      <div className={cn(
        "absolute -inset-2 rounded-3xl opacity-0 blur-xl transition-opacity duration-500 z-[-2]",
        isHovered && "opacity-30",
        color === 'red' && "bg-viveon-red/20",
        color === 'blue' && "bg-viveon-neon-blue/20",
        color === 'purple' && "bg-viveon-neon-purple/20"
      )} />

      <div className="absolute top-4 right-4 z-10">
        <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white transition-colors">
          <Heart size={18} />
        </Button>
      </div>
      
      <div className="h-64 flex items-center justify-center relative mb-6 overflow-hidden rounded-xl">
        {/* Background gradient for enhanced depth */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-10"
        )} />
        
        {/* Image container with 3D effect */}
        <div className="relative w-full h-full flex items-center justify-center">
          {images.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`${name} - View ${index + 1}`} 
              className={cn(
                "absolute w-full h-full object-contain transition-all duration-1000 transform-gpu rounded-lg",
                colorMap[color].imageGlow,
                currentImageIndex === index 
                  ? "opacity-100 scale-100 rotate-0" 
                  : "opacity-0 scale-95 rotate-3",
                isHovered && "scale-110"
              )}
              style={{
                filter: `brightness(${isHovered ? 1.1 : 1}) contrast(${isHovered ? 1.05 : 1}) saturate(${isHovered ? 1.2 : 1})`,
                transform: `${currentImageIndex === index ? 'translateZ(10px)' : 'translateZ(0px)'} ${isHovered ? 'scale(1.1)' : 'scale(1)'}`,
              }}
            />
          ))}
        </div>

        {/* Image transition indicators for multi-image products */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentImageIndex === index 
                    ? `bg-${color === 'red' ? 'viveon-red' : color === 'blue' ? 'viveon-neon-blue' : 'viveon-neon-purple'}/80 scale-125` 
                    : "bg-white/40 scale-100"
                )}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="relative z-10">
        <span className={`text-sm ${colorMap[color].text} font-medium tracking-wide`}>{category}</span>
        <h3 className="text-white text-xl font-bold mt-1 mb-4 group-hover:text-glow transition-all duration-300">{name}</h3>
        <div className="flex justify-center">
          <GradientButton className="px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl backdrop-blur-sm">
            <Clock size={16} className="mr-2" />
            Coming Soon
          </GradientButton>
        </div>
      </div>

      {/* Holographic scanning effect */}
      <div className={cn(
        "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none overflow-hidden",
        "before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full",
        "before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        "before:animate-[slide-in-right_2s_ease-in-out_infinite] before:transform before:skew-x-12"
      )} />
    </div>
  );
};

export default ProductCard;
