
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, isExternal: boolean, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isExternal) return; // Let external links work normally
    
    // Close mobile menu
    setIsMobileMenuOpen(false);
    
    // For contact section or any other hash link
    if (href.includes('#')) {
      const isHomePage = location.pathname === '/';
      const hashPart = href.includes('/#') ? href.split('/#')[1] : href.split('#')[1];
      
      if (!isHomePage) {
        // If we're not on the home page, navigate to home and then scroll
        navigate('/', { state: { scrollToSection: hashPart } });
      } else {
        // We're already on home page, just scroll
        const element = document.getElementById(hashPart);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    } else {
      // Regular route navigation - just navigate, don't use state as it can cause issues
      navigate(href);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return {
    isScrolled,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    handleNavClick
  };
};
