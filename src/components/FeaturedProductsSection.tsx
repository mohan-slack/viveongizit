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
      imagePath: "/lovable-uploads/aa8bef96-2dd1-4a17-98eb-52e710df2eb9.png",
      secondaryImagePath: "/lovable-uploads/8fd93b4e-b194-45bd-a3c6-9cffc1edf997.png",
      color: "red" as const,
    },
    {
      id: 2,
      name: "HUX AURA RING",
      category: "SMART RING",
      imagePath: "/lovable-uploads/2ea98b0a-5fc8-4e3d-ae84-b4471e6b27ca.png",
      secondaryImagePath: "/lovable-uploads/4e6c051d-1c01-4d13-8d3b-d868f38e392a.png",
      color: "blue" as const,
    },
    {
      id: 3,
      name: "HUX FLUX RING",
      category: "SMART RING",
      imagePath: "/lovable-uploads/b1dbfd05-9fff-498b-9f74-f970426c9d40.png",
      secondaryImagePath: "/lovable-uploads/162ee09f-6912-4594-a92f-028530a38205.png",
      tertiaryImagePath: "/lovable-uploads/33f5ef8f-c261-4411-95f2-f853a81e30b3.png",
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
