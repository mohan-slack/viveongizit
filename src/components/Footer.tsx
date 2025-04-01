
import React from 'react';
import Logo from './Logo';
import { Button } from './ui/button';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { Input } from './ui/input';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* First column */}
          <div>
            {/* Logo and copy moved to the bottom */}
            <h3 className="text-white text-lg font-bold mb-6 tracking-tight">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-viveon-red transition-colors">Home</a></li>
              <li><a href="#earbuds" className="text-gray-400 hover:text-viveon-red transition-colors">Earbuds</a></li>
              <li><a href="#rings" className="text-gray-400 hover:text-viveon-red transition-colors">Smart Rings</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-viveon-red transition-colors">Features</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-viveon-red transition-colors">About Us</a></li>
            </ul>
          </div>
          
          {/* Second column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 tracking-tight">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-viveon-red transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-viveon-red transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-viveon-red transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-viveon-red transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-viveon-red transition-colors">Contact Support</a></li>
            </ul>
          </div>
          
          {/* Third column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 tracking-tight">Newsletter</h3>
            <p className="text-gray-400 mb-4 font-light">Subscribe to get special offers, free giveaways, and product launches.</p>
            <div className="flex mb-4">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-900 border-gray-700 text-white focus:border-viveon-red"
              />
              <Button className="ml-2 bg-viveon-red hover:bg-viveon-red/80">
                <ArrowRight size={16} />
              </Button>
            </div>
            <p className="text-gray-500 text-sm">By subscribing, you agree to our Privacy Policy</p>
          </div>
          
          {/* Fourth column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 tracking-tight">Social Media</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-viveon-red">
                <Facebook size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-viveon-red">
                <Twitter size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-viveon-red">
                <Instagram size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-viveon-red">
                <Youtube size={20} />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Logo and tagline bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-center gap-6">
          <Logo className="mb-4 md:mb-0" size="xlarge" showSoundWaves={false} />
          <p className="text-gray-400 font-light tracking-wide text-center md:text-left max-w-xl">
            Experience the next generation of wearable technology with our cutting-edge earbuds and smart rings.
          </p>
        </div>
        
        {/* Copyright notice */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} VIVEON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
