
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DynamicBackground from '@/components/DynamicBackground';
import FeaturedProductsSection from '@/components/FeaturedProductsSection';
import { useLocation } from 'react-router-dom';

const Products = () => {
  const location = useLocation();
  
  // Handle scroll to top when navigating to this page
  useEffect(() => {
    if (location.state && location.state.scrollToTop) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      // Clear the state
      window.history.replaceState({}, document.title);
    }
  }, [location]);
  
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
