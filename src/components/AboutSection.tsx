
import React from 'react';
import { Button } from './ui/button';
import AboutFounders from './AboutFounders';

const AboutSection: React.FC = () => {
  return (
    <div id="about" className="bg-gradient-to-b from-viveon-dark to-black py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue rounded-2xl blur-md opacity-50"></div>
              <div className="relative bg-black rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/6c2a0bec-beee-4711-8b62-ab7cdc642158.png" 
                  alt="HUX Technology by Viveon" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-viveon-red font-bold tracking-wider">HUX™</span>
                  <h3 className="text-white text-2xl font-bold tracking-tight">By Viveon Gizit Private Limited</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="text-viveon-red font-bold tracking-wider">ABOUT US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6 tracking-tight">Pioneering the Next Generation of <span className="gradient-text">Wearable Tech</span></h2>
            
            <p className="text-gray-300 mb-6 font-light tracking-wide">
              At Viveon Gizit Private Limited, we believe that technology should not only be powerful but also seamlessly integrated into your lifestyle. Our flagship brand HUX™ represents our commitment to innovation and excellence in wearable technology.
            </p>
            
            <p className="text-gray-300 mb-6 font-light tracking-wide">
              Founded in 2025, our team of engineers, designers, and audio experts work tirelessly to create products that combine cutting-edge technology with sleek, minimalist design. The HUX™ line embodies our vision of developing devices that enhance your daily life without getting in the way.
            </p>
            
            <p className="text-gray-300 mb-8 font-light tracking-wide">
              From our state-of-the-art HUX QUANTUM earbuds that deliver unparalleled sound quality to our HUX NEXUS smart rings that put the power of technology at your fingertips, every product is crafted with precision, innovation, and attention to detail.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-viveon-red/10 flex items-center justify-center mr-4">
                  <span className="text-viveon-red font-bold text-2xl">50+</span>
                </div>
                <div>
                  <p className="text-white font-bold">Engineers</p>
                  <p className="text-gray-400 text-sm">Dedicated experts</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-viveon-neon-blue/10 flex items-center justify-center mr-4">
                  <span className="text-viveon-neon-blue font-bold text-2xl">12</span>
                </div>
                <div>
                  <p className="text-white font-bold">Patents</p>
                  <p className="text-gray-400 text-sm">Innovative technology</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-viveon-neon-purple/10 flex items-center justify-center mr-4">
                  <span className="text-viveon-neon-purple font-bold text-2xl">24/7</span>
                </div>
                <div>
                  <p className="text-white font-bold">Support</p>
                  <p className="text-gray-400 text-sm">Always available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Adding founders section */}
        <AboutFounders />
      </div>
    </div>
  );
};

export default AboutSection;
