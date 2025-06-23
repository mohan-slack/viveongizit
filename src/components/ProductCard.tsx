
import React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Clock, Heart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  category: string;
  imagePath: string;
  color: 'red' | 'blue' | 'purple';
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  name, 
  category, 
  imagePath, 
  color = 'red',
  className 
}) => {
  const colorMap = {
    red: {
      border: 'border-viveon-red/20',
      glow: 'before:shadow-[0_0_15px_rgba(255,58,47,0.2)]',
      text: 'text-viveon-red/90',
      comingSoon: 'bg-gradient-to-r from-viveon-red/80 to-viveon-red/60 hover:from-viveon-red/90 hover:to-viveon-red/70 text-white border border-viveon-red/40 shadow-lg shadow-viveon-red/20',
    },
    blue: {
      border: 'border-viveon-neon-blue/20',
      glow: 'before:shadow-[0_0_15px_rgba(0,255,255,0.2)]',
      text: 'text-viveon-neon-blue/90',
      comingSoon: 'bg-gradient-to-r from-viveon-neon-blue/80 to-viveon-neon-blue/60 hover:from-viveon-neon-blue/90 hover:to-viveon-neon-blue/70 text-white border border-viveon-neon-blue/40 shadow-lg shadow-viveon-neon-blue/20',
    },
    purple: {
      border: 'border-viveon-neon-purple/20',
      glow: 'before:shadow-[0_0_15px_rgba(155,48,255,0.2)]',
      text: 'text-viveon-neon-purple/90',
      comingSoon: 'bg-gradient-to-r from-viveon-neon-purple/80 to-viveon-neon-purple/60 hover:from-viveon-neon-purple/90 hover:to-viveon-neon-purple/70 text-white border border-viveon-neon-purple/40 shadow-lg shadow-viveon-neon-purple/20',
    },
  };

  return (
    <div 
      className={cn(
        "group relative bg-black/50 backdrop-blur-md p-6 rounded-xl transition-all duration-300 hover:translate-y-[-10px]",
        "before:content-[''] before:absolute before:inset-0 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-300 before:z-[-1] group-hover:before:opacity-100",
        colorMap[color].border,
        colorMap[color].glow,
        className
      )}
    >
      <div className="absolute top-4 right-4 z-10">
        <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white">
          <Heart size={18} />
        </Button>
      </div>
      
      <div className="h-48 flex items-center justify-center relative mb-6">
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-${color === 'red' ? 'viveon-red' : color === 'blue' ? 'viveon-neon-blue' : 'viveon-neon-purple'}/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`}></div>
        <img 
          src={imagePath} 
          alt={name} 
          className="h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div>
        <span className={`text-sm ${colorMap[color].text} font-medium`}>{category}</span>
        <h3 className="text-white text-xl font-bold mt-1 mb-4">{name}</h3>
        <div className="flex justify-center">
          <Button 
            className={cn(
              "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105",
              colorMap[color].comingSoon
            )}
          >
            <Clock size={16} className="mr-2" />
            Coming Soon
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
