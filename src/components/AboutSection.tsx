
import React from 'react';
import { Button } from './ui/button';
import AboutFounders from './AboutFounders';
import { Link } from 'react-router-dom';
import aboutSmartRing from '@/assets/about-smart-ring.jpg';

const AboutSection: React.FC = () => {
  return <div id="about" className="bg-white py-12 lg:py-16 w-full">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue rounded-2xl blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue rounded-2xl blur-lg opacity-40"></div>
              <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                <img src={aboutSmartRing} alt="HUX Smart Ring Technology" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-16 h-8 relative">
                    <span className="text-red-500 font-bold tracking-wider text-lg">
                      HUX<span className="text-white text-[0.5em] align-top leading-none">™</span>
                    </span>
                  </div>
                  <h3 className="tracking-tight text-zinc-50 font-normal text-base">By Viveon Gizit Pvt. Ltd.</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative inline-block mb-4 sm:mb-6">
              <span className="relative inline-block px-6 sm:px-8 py-3 sm:py-4 text-white font-sans font-bold rounded-[11px] gradient-button hover:scale-105 transition-transform duration-300 cursor-pointer text-sm sm:text-base">
                ABOUT US
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-2 mb-4 sm:mb-6 tracking-tight">Pioneering the Next Generation of <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Wearable Tech</span></h2>
            
            <p className="text-gray-700 mb-4 sm:mb-6 font-light tracking-wide text-sm sm:text-base">
              At Viveon Gizit Private Limited, we believe that technology should not only be powerful but also seamlessly integrated into your lifestyle. Our flagship brand HUX™ represents our commitment to innovation and excellence in wearable technology.
            </p>
            
            <p className="text-gray-700 mb-4 sm:mb-6 font-light tracking-wide text-sm sm:text-base">
              Founded in 2025, our team of engineers, designers, and audio experts work tirelessly to create products that combine cutting-edge technology with sleek, minimalist design. The HUX™ line embodies our vision of developing devices that enhance your daily life without getting in the way.
            </p>
            
            <p className="text-gray-700 mb-6 sm:mb-8 font-light tracking-wide text-sm sm:text-base">
              From our state-of-the-art HUX QUANTUM earbuds that deliver unparalleled sound quality to our HUX AURA smart rings that put the power of technology at your fingertips, every product is crafted with precision, innovation, and attention to detail.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-50 flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-red-500 font-bold text-lg sm:text-2xl">15+</span>
                </div>
                <div>
                  <p className="text-black font-bold text-sm sm:text-base">Engineers</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Dedicated experts</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-50 flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-blue-500 font-bold text-lg sm:text-2xl">04</span>
                </div>
                <div>
                  <p className="text-black font-bold text-sm sm:text-base">Patents</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Innovative technology</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple-50 flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-purple-500 font-bold text-lg sm:text-2xl">24/7</span>
                </div>
                <div>
                  <p className="text-black font-bold text-sm sm:text-base">Support</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Always available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <AboutFounders />
      </div>
    </div>;
};
export default AboutSection;
