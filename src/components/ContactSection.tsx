
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <div id="contact" className="bg-viveon-dark py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-white">Connect With </span>
              <span className="gradient-text">Us</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have questions about our HUX™ products or interested in collaboration? Reach out to us through any of the following channels.
            </p>
          </div>
          
          <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-viveon-red/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Location */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-viveon-darker/50 border border-gray-800 hover:border-viveon-red/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-viveon-red/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="text-viveon-red" size={24} />
                </div>
                <h3 className="text-white text-lg font-bold mb-2">Location</h3>
                <p className="text-gray-400">
                  Electronic City, Bangalore,<br />
                  Karnataka, INDIA
                </p>
              </div>
              
              {/* Phone */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-viveon-darker/50 border border-gray-800 hover:border-viveon-neon-blue/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-viveon-neon-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="text-viveon-neon-blue" size={24} />
                </div>
                <h3 className="text-white text-lg font-bold mb-2">Phone</h3>
                <p className="text-gray-400">
                  +91 9390807900
                </p>
              </div>
              
              {/* Email */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-viveon-darker/50 border border-gray-800 hover:border-viveon-neon-purple/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-viveon-neon-purple/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="text-viveon-neon-purple" size={24} />
                </div>
                <h3 className="text-white text-lg font-bold mb-2">Email</h3>
                <p className="text-gray-400">
                  contact@viveon-tech.com
                </p>
              </div>
            </div>
            
            {/* Company Info */}
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center mb-2">
                <h3 className="text-white text-lg font-bold">Viveon Gizit Private Limited</h3>
              </div>
              <p className="text-gray-400 text-sm">
                HUX™ is a registered trademark of Viveon Gizit Private Limited. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
