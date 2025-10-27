
import React from 'react';
import { GradientButton } from './ui/gradient-button';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-white py-20 w-full">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="relative bg-gradient-to-r from-gray-100 to-gray-50 overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-6xl mx-auto">
          {/* Background effects */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-red-100 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-100 rounded-full filter blur-3xl"></div>
          </div>
          
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-5" style={{ 
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.1) 76%, transparent 77%, transparent)',
            backgroundSize: '30px 30px'
          }}></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="mb-4 sm:mb-6">
              <span className="text-black font-light text-2xl sm:text-3xl lg:text-4xl">Experience The Future </span>
              <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold text-2xl sm:text-3xl lg:text-4xl">Today</span>
            </h2>
            
            <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 font-light px-4">
              Join thousands of satisfied customers who have already elevated their tech experience with VIVEON products. Grab your earbuds or smart ring now and step into the future.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
              <GradientButton className="px-6 sm:px-8 py-3 sm:py-4 font-medium text-sm sm:text-base">
                SHOP NOW
              </GradientButton>
              <GradientButton className="px-6 sm:px-8 py-3 sm:py-4 font-medium text-sm sm:text-base group">
                EXPLORE COLLECTION
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
