
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const FeaturedProductsSection: React.FC = () => {
  // Updated product names to match their image types
  const earbuds = [
    {
      id: 1,
      name: "HUX QUANTUM X",
      category: "WIRELESS EARBUDS",
      price: "$249.99",
      imagePath: "/lovable-uploads/97d37c64-bc58-45fb-9fae-1199e9856c7e.png", // Earbuds image verified
      color: "red" as const,
    },
    {
      id: 2,
      name: "HUX SONIC PRO",
      category: "WIRELESS EARBUDS",
      price: "$199.99",
      imagePath: "/lovable-uploads/701c7baf-bad4-4ac1-a5c8-972935c2f4f7.png", // Swapped: Now using NEXUS RING image
      color: "blue" as const,
    },
    {
      id: 3,
      name: "HUX PULSE ELITE",
      category: "WIRELESS EARBUDS",
      price: "$179.99",
      imagePath: "/lovable-uploads/6c2a0bec-beee-4711-8b62-ab7cdc642158.png", // Changed from 23ad61cc... to different earbuds image
      color: "purple" as const,
    },
  ];
  
  const smartRings = [
    {
      id: 1,
      name: "HUX NEXUS RING",
      category: "SMART RING",
      price: "$299.99",
      imagePath: "/lovable-uploads/75db4cf4-b69c-4857-96ea-7dc22bad242c.png", // Swapped: Now using SONIC PRO image
      color: "red" as const,
    },
    {
      id: 2,
      name: "HUX AURA RING",
      category: "SMART RING",
      price: "$249.99",
      imagePath: "/lovable-uploads/02af7663-ba07-41b9-b76a-29b4f90aafa9.png", // Smart Ring image verified
      color: "blue" as const,
    },
    {
      id: 3,
      name: "HUX FLUX RING",
      category: "SMART RING",
      price: "$229.99",
      imagePath: "/lovable-uploads/ec5c9459-580a-4a9d-96ba-a98b71e0e3f4.png", // Smart Ring image verified
      color: "purple" as const,
    },
  ];

  return (
    <div className="bg-viveon-dark py-20">
      <div className="container mx-auto px-4">
        <div id="earbuds" className="mb-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">HUX <span className="text-viveon-red/90">Earbuds</span></h2>
              <p className="text-gray-400 mt-2">Experience sound like never before</p>
            </div>
            <Button variant="ghost" className="text-white hover:text-viveon-red/90 group">
              View All
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {earbuds.map((product) => (
              <ProductCard 
                key={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                imagePath={product.imagePath}
                color={product.color}
              />
            ))}
          </div>
        </div>

        <div id="rings" className="mb-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">HUX <span className="text-viveon-neon-blue/90">Rings</span></h2>
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
                price={product.price}
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
