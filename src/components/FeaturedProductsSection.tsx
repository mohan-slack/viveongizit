
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
      imagePath: "/lovable-uploads/97d37c64-bc58-45fb-9fae-1199e9856c7e.png",
      color: "red" as const,
    },
    {
      id: 2,
      name: "HUX SONIC PRO",
      category: "WIRELESS EARBUDS",
      price: "$199.99",
      imagePath: "/lovable-uploads/701c7baf-bad4-4ac1-a5c8-972935c2f4f7.png",
      color: "blue" as const,
    },
    {
      id: 3,
      name: "HUX PULSE ELITE",
      category: "WIRELESS EARBUDS",
      price: "$179.99",
      imagePath: "/lovable-uploads/6c2a0bec-beee-4711-8b62-ab7cdc642158.png",
      color: "purple" as const,
    },
  ];
  
  const smartRings = [
    {
      id: 1,
      name: "HUX NEXUS RING",
      category: "SMART RING",
      price: "$299.99",
      imagePath: "/lovable-uploads/75db4cf4-b69c-4857-96ea-7dc22bad242c.png",
      color: "red" as const,
    },
    {
      id: 2,
      name: "HUX AURA RING",
      category: "SMART RING",
      price: "$249.99",
      imagePath: "/lovable-uploads/02af7663-ba07-41b9-b76a-29b4f90aafa9.png",
      color: "blue" as const,
    },
    {
      id: 3,
      name: "HUX FLUX RING",
      category: "SMART RING",
      price: "$229.99",
      imagePath: "/lovable-uploads/0935fe07-f357-4ada-a951-0709d047a02f.png",
      color: "purple" as const,
    },
  ];

  return (
    <div className="bg-viveon-dark py-20">
      <div className="container mx-auto px-4">
        <div id="earbuds" className="mb-20">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 md:mb-12">
            <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
              {/* Earbuds icon - displayed next to the heading */}
              <div className="hidden md:flex mr-4 bg-viveon-dark/60 p-2 rounded-full border border-viveon-red/30">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 16V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V16" stroke="#FF3A2F" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M7 21C5.34315 21 4 19.6569 4 18V12C4 10.3431 5.34315 9 7 9C8.65685 9 10 10.3431 10 12V18C10 19.6569 8.65685 21 7 21Z" stroke="#FF3A2F" strokeWidth="1.5"/>
                  <path d="M17 21C15.3431 21 14 19.6569 14 18V12C14 10.3431 15.3431 9 17 9C18.6569 9 20 10.3431 20 12V18C20 19.6569 18.6569 21 17 21Z" stroke="#FF3A2F" strokeWidth="1.5"/>
                </svg>
              </div>
              
              {/* Mobile earbuds icon - smaller for mobile */}
              <div className="md:hidden flex mr-2 bg-viveon-dark/60 p-1.5 rounded-full border border-viveon-red/30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 16V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V16" stroke="#FF3A2F" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M7 21C5.34315 21 4 19.6569 4 18V12C4 10.3431 5.34315 9 7 9C8.65685 9 10 10.3431 10 12V18C10 19.6569 8.65685 21 7 21Z" stroke="#FF3A2F" strokeWidth="1.5"/>
                  <path d="M17 21C15.3431 21 14 19.6569 14 18V12C14 10.3431 15.3431 9 17 9C18.6569 9 20 10.3431 20 12V18C20 19.6569 18.6569 21 17 21Z" stroke="#FF3A2F" strokeWidth="1.5"/>
                </svg>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-white flex items-center">
                  HUX <span className="text-viveon-red/90 ml-2">Earbuds</span>
                </h2>
                <p className="text-sm md:text-base text-gray-400 mt-1">Experience sound like never before</p>
              </div>
            </div>
            <Button variant="ghost" className="text-white hover:text-viveon-red/90 group self-center md:self-auto">
              View All
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 md:mb-12">
            <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
              {/* Rings icon - displayed next to the heading for desktop */}
              <div className="hidden md:flex mr-4 bg-viveon-dark/60 p-2 rounded-full border border-viveon-neon-blue/30">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="8" stroke="#00FFFF" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="3" stroke="#00FFFF" strokeWidth="1.5"/>
                  <path d="M18 12C18 12 21 12 21 12" stroke="#00FFFF" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M6 12C6 12 3 12 3 12" stroke="#00FFFF" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              
              {/* Mobile rings icon - smaller for mobile */}
              <div className="md:hidden flex mr-2 bg-viveon-dark/60 p-1.5 rounded-full border border-viveon-neon-blue/30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="8" stroke="#00FFFF" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="3" stroke="#00FFFF" strokeWidth="1.5"/>
                  <path d="M18 12C18 12 21 12 21 12" stroke="#00FFFF" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M6 12C6 12 3 12 3 12" stroke="#00FFFF" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-white flex items-center">
                  HUX <span className="text-viveon-neon-blue/90 ml-2">Rings</span>
                </h2>
                <p className="text-sm md:text-base text-gray-400 mt-1">Technology at your fingertips</p>
              </div>
            </div>
            <Button variant="ghost" className="text-white hover:text-viveon-neon-blue/90 group self-center md:self-auto">
              View All
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
