
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DynamicBackground from '@/components/DynamicBackground';
import FeaturedProductsSection from '@/components/FeaturedProductsSection';

const Products = () => {
  return (
    <div className="min-h-screen bg-viveon-darker text-white relative overflow-hidden">
      <DynamicBackground />
      <Navbar />
      <div className="pt-32 pb-12">
        <FeaturedProductsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
