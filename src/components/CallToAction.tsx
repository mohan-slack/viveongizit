
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-viveon-darker py-20">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-r from-viveon-dark to-black overflow-hidden rounded-3xl p-12">
          {/* Background effects */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-viveon-red/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-viveon-neon-blue/20 rounded-full filter blur-3xl"></div>
          </div>
          
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-10" style={{ 
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 58, 47, 0.3) 25%, rgba(255, 58, 47, 0.3) 26%, transparent 27%, transparent 74%, rgba(255, 58, 47, 0.3) 75%, rgba(255, 58, 47, 0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 58, 47, 0.3) 25%, rgba(255, 58, 47, 0.3) 26%, transparent 27%, transparent 74%, rgba(255, 58, 47, 0.3) 75%, rgba(255, 58, 47, 0.3) 76%, transparent 77%, transparent)',
            backgroundSize: '30px 30px'
          }}></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Experience The Future </span>
              <span className="gradient-text">Today</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of satisfied customers who have already elevated their tech experience with VIVEON products. Grab your earbuds or smart ring now and step into the future.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-viveon-red hover:bg-viveon-red/80 text-white px-8">
                SHOP NOW
              </Button>
              <Button size="lg" variant="outline" className="border-viveon-neon-blue text-viveon-neon-blue hover:bg-viveon-neon-blue/10 px-8 group">
                EXPLORE COLLECTION
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
