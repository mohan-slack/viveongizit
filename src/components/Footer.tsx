"use client";

import React from 'react';
import Logo from './Logo';
import { Button } from './ui/button';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { Input } from './ui/input';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (href === '#contact') {
      const isHomePage = location.pathname === '/';
      
      if (!isHomePage) {
        navigate('/', { state: { scrollToSection: 'contact' } });
      } else {
        const element = document.getElementById('contact');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    } else if (href.startsWith('/')) {
      if (location.pathname === href) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate(href, { state: { scrollToTop: true } });
      }
    }
  };
  
  const footerLinks = {
    quickLinks: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Features', href: '/features' },
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '#contact' }
    ],
    support: [
      { label: 'FAQs', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Shipping & Returns', href: '#' }
    ]
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-2xl font-bold text-background">HUX</span>
              <span className="text-accent text-xl">™</span>
            </div>
            <p className="text-background/60 text-sm mb-6">
              Experience the next generation of wearable technology with our cutting-edge smart rings.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-background/10 rounded-full">
                <Facebook size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-background/10 rounded-full">
                <Twitter size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-background/10 rounded-full">
                <Instagram size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-background/10 rounded-full">
                <Youtube size={18} />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-background font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-background font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-background font-semibold mb-6">Stay Updated</h3>
            <p className="text-background/60 text-sm mb-4">
              Subscribe for product updates and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/40 focus:border-background/40 rounded-full"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-4">
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Viveon Gizit Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-background/40 text-sm">
            HUX™ is a registered trademark
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
