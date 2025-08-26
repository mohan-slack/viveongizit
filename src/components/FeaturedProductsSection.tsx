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
      imagePath: "/lovable-uploads/8ff34480-1523-4e10-a35f-a8b2e6060aae.png",
      secondaryImagePath: "/lovable-uploads/c81b7a9e-d4b0-4903-8b12-0dd8947f7d31.png",
      tertiaryImagePath: "/lovable-uploads/079821f2-8a8b-4705-856a-29d19cdc60f6.png",
      color: "red" as const,
    },
    {
      id: 2,
      name: "HUX AURA RING",
      category: "SMART RING",
      imagePath: "/lovable-uploads/f4500f10-1a88-4387-8751-e15bcb29a6db.png",
      secondaryImagePath: "/lovable-uploads/93892fab-4b12-40ce-bec3-49c37387cde3.png",
      tertiaryImagePath: "/lovable-uploads/34f15844-10cc-451f-805f-c54ce21e93fb.png",
      color: "blue" as const,
    },
  ];

  return (
    <div className="bg-white py-16 sm:py-20 w-full"  style={{ marginTop: '0' }}>
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div id="rings" className="mb-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">HUX <span className="text-blue-600">Smart Rings</span></h2>
              <p className="text-gray-600 mt-2">Technology at your fingertips</p>
            </div>
            <Button variant="ghost" className="text-black hover:text-blue-600 group">
              View All
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-0">
            {smartRings.map((product) => (
              <ProductCard 
                key={product.id}
                name={product.name}
                category={product.category}
                imagePath={product.imagePath}
                secondaryImagePath={product.secondaryImagePath}
                tertiaryImagePath={product.tertiaryImagePath}
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
