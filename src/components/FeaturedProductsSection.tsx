
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const FeaturedProductsSection: React.FC = () => {
  const earbuds = [
    {
      id: 1,
      name: "QUANTUM X Pro",
      category: "WIRELESS EARBUDS",
      price: "$249.99",
      imagePath: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "red" as const,
    },
    {
      id: 2,
      name: "NOVA TWS",
      category: "WIRELESS EARBUDS",
      price: "$199.99",
      imagePath: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "blue" as const,
    },
    {
      id: 3,
      name: "PULSE Elite",
      category: "WIRELESS EARBUDS",
      price: "$179.99",
      imagePath: "https://images.unsplash.com/photo-1631176093617-63490a3d785a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "purple" as const,
    },
  ];
  
  const smartRings = [
    {
      id: 1,
      name: "NEXUS RING",
      category: "SMART RING",
      price: "$299.99",
      imagePath: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "red" as const,
    },
    {
      id: 2,
      name: "AURA RING",
      category: "SMART RING",
      price: "$249.99",
      imagePath: "https://images.unsplash.com/photo-1611652022419-8cef789efe10?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "blue" as const,
    },
    {
      id: 3,
      name: "FLUX RING",
      category: "SMART RING",
      price: "$229.99",
      imagePath: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "purple" as const,
    },
  ];

  return (
    <div className="bg-viveon-dark py-20">
      <div className="container mx-auto px-4">
        <div id="earbuds" className="mb-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Featured <span className="text-viveon-red">Earbuds</span></h2>
              <p className="text-gray-400 mt-2">Experience sound like never before</p>
            </div>
            <Button variant="ghost" className="text-white hover:text-viveon-red group">
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
              <h2 className="text-3xl md:text-4xl font-bold text-white">Smart <span className="text-viveon-neon-blue">Rings</span></h2>
              <p className="text-gray-400 mt-2">Technology at your fingertips</p>
            </div>
            <Button variant="ghost" className="text-white hover:text-viveon-neon-blue group">
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
