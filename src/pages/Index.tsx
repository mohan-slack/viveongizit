
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import EnhancedHeroSection from '@/components/EnhancedHeroSection';
import FeaturedProductsSection from '@/components/FeaturedProductsSection';
import FuturisticFeaturesShowcase from '@/components/FuturisticFeaturesShowcase';
import FeaturedSmartRingDemoSection from '@/components/FeaturedSmartRingDemoSection';
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
          const nav = document.querySelector('nav') as HTMLElement | null;
          const y = element.getBoundingClientRect().top + window.pageYOffset - ((nav?.offsetHeight ?? 80) + 8);
          window.scrollTo({ top: y, behavior: 'smooth' });
          
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
      if (target.tagName === 'A') {
        const href = (target as HTMLAnchorElement).getAttribute('href') || '';
        if (href.startsWith('#') || href.includes('/#')) {
          e.preventDefault();
          const id = href.startsWith('#') ? href.substring(1) : href.split('/#')[1];
          const element = document.getElementById(id || '');
          if (element) {
            const nav = document.querySelector('nav') as HTMLElement | null;
            const y = element.getBoundingClientRect().top + window.pageYOffset - ((nav?.offsetHeight ?? 80) + 8);
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
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
      <FeaturedSmartRingDemoSection />
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
