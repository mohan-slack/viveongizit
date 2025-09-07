
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <div id="contact" className="bg-white py-20 w-full">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-black">Connect With </span>
              <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our HUX products or interested in collaboration? Reach out to us through any of the following channels.
            </p>
          </div>
          
          <div className="bg-gray-50 backdrop-blur-lg rounded-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Location */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-red-300 transition-all group hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="text-red-500" size={24} />
                </div>
                <h3 className="text-black text-lg font-bold mb-2">Location</h3>
                <p className="text-gray-600">
                  Electronic City, Bangalore,<br />
                  Karnataka, INDIA
                </p>
              </div>
              
              {/* Phone */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-300 transition-all group hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="text-blue-500" size={24} />
                </div>
                <h3 className="text-black text-lg font-bold mb-2">Phone</h3>
                <p className="text-gray-600">
                  +91 9390807900
                </p>
              </div>
              
              {/* Email */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-purple-300 transition-all group hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="text-purple-500" size={24} />
                </div>
                <h3 className="text-black text-lg font-bold mb-2">Email</h3>
                <p className="text-gray-600">
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
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
