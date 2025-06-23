
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const FeaturedProductsSection: React.FC = () => {
  const smartRings = [
    {
      id: 1,
      name: "HUX NEXUS RING",
      category: "SMART RING",
      imagePath: "/lovable-uploads/75db4cf4-b69c-4857-96ea-7dc22bad242c.png",
      color: "red" as const,
    },
    {
      id: 2,
      name: "HUX AURA RING",
      category: "SMART RING",
      imagePath: "/lovable-uploads/02af7663-ba07-41b9-b76a-29b4f90aafa9.png",
      color: "blue" as const,
    },
    {
      id: 3,
      name: "HUX FLUX RING",
      category: "SMART RING",
      imagePath: "/lovable-uploads/0935fe07-f357-4ada-a951-0709d047a02f.png",
      color: "purple" as const,
    },
  ];

  return (
    <div className="bg-viveon-dark py-20">
      <div className="container mx-auto px-4">
        <div id="rings" className="mb-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">HUX <span className="text-viveon-neon-blue/90">Smart Rings</span></h2>
              <p className="text-gray-400 mt-2">Technology at your fingertips</p>
            </div>
            <Button variant="ghost" className="text-white hover:text-viveon-neon-blue/90 group">
              View All
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartRings.map((product) => (
              <ProductCard 
                key={product.id}
                name={product.name}
                category={product.category}
                imagePath={product.imagePath}
                color={product.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsSection;
