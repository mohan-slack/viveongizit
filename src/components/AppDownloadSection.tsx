import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Smartphone } from 'lucide-react';

const AppDownloadSection: React.FC = () => {
  return (
    <section className="bg-stone-950 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* App Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto w-64 md:w-80">
              {/* Phone Mockup */}
              <div className="relative bg-stone-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-stone-950 rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* App Screen Content */}
                  <div className="w-full h-full bg-gradient-to-b from-stone-800 to-stone-900 p-6 flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-white text-xs">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-white/50 rounded-sm" />
                        <div className="w-4 h-2 bg-white/50 rounded-sm" />
                        <div className="w-6 h-3 bg-green-500 rounded-sm" />
                      </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-3">
                        <span className="text-white font-bold text-2xl">H</span>
                      </div>
                      <h4 className="text-white font-bold">HUX AURA</h4>
                      <p className="text-stone-400 text-xs">Smart Ring App</p>
                    </div>

                    {/* Health Stats Preview */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-stone-800/50 rounded-xl p-3 text-center">
                        <div className="text-red-400 text-lg font-bold">72</div>
                        <div className="text-stone-400 text-xs">BPM</div>
                      </div>
                      <div className="bg-stone-800/50 rounded-xl p-3 text-center">
                        <div className="text-blue-400 text-lg font-bold">98%</div>
                        <div className="text-stone-400 text-xs">SpO₂</div>
                      </div>
                      <div className="bg-stone-800/50 rounded-xl p-3 text-center">
                        <div className="text-purple-400 text-lg font-bold">7.5h</div>
                        <div className="text-stone-400 text-xs">Sleep</div>
                      </div>
                      <div className="bg-stone-800/50 rounded-xl p-3 text-center">
                        <div className="text-green-400 text-lg font-bold">8,432</div>
                        <div className="text-stone-400 text-xs">Steps</div>
                      </div>
                    </div>

                    {/* Ring Status */}
                    <div className="mt-auto bg-stone-800/50 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-stone-400 text-sm">Ring Connected</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-green-400 text-sm">85%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-full blur-[80px] -z-10" />
            </div>
          </motion.div>

          {/* Download Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="text-amber-400 text-sm font-medium tracking-wide">COMPANION APP</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Smart Ring
              <span className="block text-stone-400">Application</span>
            </h2>

            <p className="text-stone-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Download our companion app to unlock the full potential of your HUX AURA ring. Track your health metrics, customize settings, and get personalized insights.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-stone-950 rounded-xl hover:bg-stone-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-stone-500">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </button>
              <button className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-stone-950 rounded-xl hover:bg-stone-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-stone-500">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            {/* Features List */}
            <div className="mt-10 grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              {['Real-time Sync', 'Health Reports', 'Custom Alerts', 'Sleep Analysis'].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-stone-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
