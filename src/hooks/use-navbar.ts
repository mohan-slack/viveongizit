
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

    const scrollToId = (id: string, attempt = 0) => {
      const element = document.getElementById(id);
      const nav = document.querySelector('nav') as HTMLElement | null;
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - ((nav?.offsetHeight ?? 80) + 8);
        window.scrollTo({ top: y, behavior: 'smooth' });
        return true;
      }
      if (attempt < 5) {
        setTimeout(() => scrollToId(id, attempt + 1), 100);
      }
      return false;
    };
    
    // For contact/feature sections or any other hash link
    if (href.includes('#')) {
      const isHomePage = location.pathname === '/';
      const hashPart = href.includes('/#') ? href.split('/#')[1] : href.split('#')[1];
      
      if (!isHomePage) {
        // If we're not on the home page, navigate to home and then scroll
        navigate('/', { state: { scrollToSection: hashPart } });
      } else {
        // We're already on home page, just scroll
        scrollToId(hashPart);
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
