
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/ui/animated-shader-hero';
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

  const handlePrimaryClick = () => {
    const element = document.getElementById('products');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleSecondaryClick = () => {
    const element = document.getElementById('features');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Hero
        trustBadge={{
          text: "Trusted by forward-thinking innovators.",
          icons: ["✨"]
        }}
        headline={{
          line1: "INTRODUCING THE",
          line2: "FUTURE OF TECH HUX™"
        }}
        subtitle="Experience the next generation of wearable technology with our cutting-edge smart rings. Designed for the future, built for today."
        buttons={{
          primary: {
            text: "EXPLORE SMART RINGS",
            onClick: handlePrimaryClick
          },
          secondary: {
            text: "DISCOVER FEATURES",
            onClick: handleSecondaryClick
          }
        }}
      />
      <div id="products">
        <FeaturedProductsSection />
      </div>
      <div id="features">
        <FuturisticFeaturesShowcase />
      </div>
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
