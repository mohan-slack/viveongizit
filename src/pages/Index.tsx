import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import EnhancedHeroSection from '@/components/EnhancedHeroSection';
import FeaturedProductsSection from '@/components/FeaturedProductsSection';
import FeaturesList from '@/components/FeaturesList';
import AboutSection from '@/components/AboutSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import DynamicBackground from '@/components/DynamicBackground';
import ParallaxBackground from '@/components/ParallaxBackground';

const Index = () => {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-viveon-darker text-white relative overflow-hidden">
      {/* Enhanced background components */}
      <DynamicBackground />
      <ParallaxBackground />
      
      {/* Keep existing content */}
      <Navbar />
      <EnhancedHeroSection />
      <FeaturedProductsSection />
      <FeaturesList />
      <AboutSection />
      <ContactSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
