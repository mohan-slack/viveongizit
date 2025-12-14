import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const ProductHeroSection: React.FC = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('vibration-alert');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, hsl(var(--primary)/0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--accent)/0.2) 0%, transparent 50%)'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-amber-400 text-sm font-medium tracking-wide">NEW SMART RING APPLICATION</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              HUX AURA
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Smart Ring
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-stone-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Powerful features to help you stay in tune with your body. Track heart rate, SpO₂, body temperature, sleep quality, and manage emotional wellness in real time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/hux-aura-ring"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105"
              >
                Pre-Order Now
              </Link>
              <button
                onClick={scrollToFeatures}
                className="px-8 py-4 border border-stone-700 text-stone-300 font-semibold rounded-full hover:bg-stone-800/50 hover:border-stone-600 transition-all duration-300"
              >
                Explore Features
              </button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-stone-800"
            >
              {[
                { value: '5ATM', label: 'Waterproof' },
                { value: '4-6', label: 'Days Battery' },
                { value: '24/7', label: 'Monitoring' }
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-stone-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-full blur-[100px] scale-75" />
            
            {/* Ring Image */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <img
                src="/lovable-uploads/7461b774-3563-44bc-9ba3-de5051ce67fb.png"
                alt="HUX AURA Smart Ring"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating Feature Tags */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute top-1/4 -right-4 lg:right-0 bg-stone-900/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-stone-800"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white text-sm font-medium">Heart Rate Monitor</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-1/4 -left-4 lg:left-0 bg-stone-900/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-stone-800"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-white text-sm font-medium">SpO₂ Tracking</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToFeatures}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-stone-500 hover:text-stone-300 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ProductHeroSection;
