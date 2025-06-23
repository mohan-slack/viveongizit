
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import EnhancedHeroSection from '@/components/EnhancedHeroSection';
import FeaturedProductsSection from '@/components/FeaturedProductsSection';
import FuturisticFeaturesShowcase from '@/components/FuturisticFeaturesShowcase';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant/AIAssistant';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Handle scroll to section from navigation
  useEffect(() => {
    // Check for scrollToTop state
    if (location.state && location.state.scrollToTop) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      // Clear the state
      window.history.replaceState({}, document.title);
      return;
    }
    
    // Check if there's state with scrollToSection
    if (location.state && location.state.scrollToSection) {
      const sectionId = location.state.scrollToSection;
      const element = document.getElementById(sectionId);
      if (element) {
        // Small timeout to ensure the page is fully loaded
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
          
          // Clear the state to prevent scrolling on refresh
          window.history.replaceState({}, document.title);
        }, 100);
      }
    }
  }, [location]);

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
    <div className="min-h-screen relative">
      <Navbar />
      <EnhancedHeroSection />
      <FeaturedProductsSection />
      <FuturisticFeaturesShowcase />
      <AboutSection />
      <ContactSection />
      <CallToAction />
      <Footer />
      
      {/* AI Assistant */}
      {isMobile && <AIAssistant />}
    </div>
  );
};

export default Index;
