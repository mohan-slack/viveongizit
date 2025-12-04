import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { ScrollReveal } from './ui/scroll-reveal';

const ContactSection: React.FC = () => {
  return (
    <div id="contact" className="bg-white py-10 lg:py-12 w-full">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-8 sm:mb-12">
            <div className="relative inline-block mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold relative z-10">
                <span className="relative inline-block px-6 sm:px-8 py-3 sm:py-4 text-white font-sans font-bold rounded-[11px] gradient-button hover:scale-105 transition-transform duration-300 cursor-pointer text-sm sm:text-base">
                  Connect With Us
                </span>
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto px-4 text-sm sm:text-base">
              Have questions about our HUX products or interested in collaboration? Reach out to us through any of the following channels.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="bg-gray-50 backdrop-blur-lg rounded-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Location */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-red-300 transition-all group hover:shadow-lg">
                <div className="relative w-16 h-16 mb-4 group-hover:scale-110 transition-transform">
                  {/* 3D Location Pin */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400 via-red-500 to-red-600 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    <div className="absolute inset-1 bg-gradient-to-br from-red-300 to-red-500 rounded-full">
                      <div className="absolute inset-1 bg-gradient-to-br from-white/30 to-transparent rounded-full">
                        <MapPin className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" size={20} />
                      </div>
                    </div>
                  </div>
                  {/* Shadow */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-red-500/20 rounded-full blur-sm"></div>
                </div>
                <h3 className="text-black text-base sm:text-lg font-bold mb-2">Location</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Electronic City, Bangalore,<br />
                  Karnataka, INDIA
                </p>
              </div>
              
              {/* Phone */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-300 transition-all group hover:shadow-lg">
                <div className="relative w-16 h-16 mb-4 group-hover:scale-110 transition-transform">
                  {/* 3D Phone */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                    <div className="absolute inset-1 bg-gradient-to-br from-blue-300 to-blue-500 rounded-xl">
                      <div className="absolute inset-1 bg-gradient-to-br from-white/40 to-transparent rounded-xl">
                        <Phone className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" size={18} />
                      </div>
                    </div>
                  </div>
                  {/* Shadow */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-blue-500/20 rounded-full blur-sm"></div>
                </div>
                <h3 className="text-black text-base sm:text-lg font-bold mb-2">Phone</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  +91 9390807900
                </p>
              </div>
              
              {/* Email */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-purple-300 transition-all group hover:shadow-lg">
                <div className="relative w-16 h-16 mb-4 group-hover:scale-110 transition-transform">
                  {/* 3D Email Envelope */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-lg shadow-lg transform rotate-6 group-hover:rotate-0 transition-transform duration-300">
                    <div className="absolute inset-1 bg-gradient-to-br from-purple-300 to-purple-500 rounded-md">
                      <div className="absolute inset-1 bg-gradient-to-br from-white/30 to-transparent rounded-md">
                        <Mail className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" size={18} />
                      </div>
                    </div>
                  </div>
                  {/* Shadow */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-purple-500/20 rounded-full blur-sm"></div>
                </div>
                <h3 className="text-black text-base sm:text-lg font-bold mb-2">Email</h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base break-all">
                  viveongizitpvtltd@gmail.com
                </p>
              </div>
            </div>
            
            {/* Company Info */}
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center mb-2">
                <h3 className="text-black text-lg font-bold">Viveon Gizit Private Limited</h3>
              </div>
              <p className="text-gray-600 text-sm">
                HUX™ is a registered trademark of Viveon Gizit Private Limited. All rights reserved.
              </p>
            </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
