"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div 
          className="bg-foreground rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
                               radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)`
            }} />
          </div>
          
          <div className="relative z-10">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Experience the future
              <br />
              of wellness
            </motion.h2>
            
            <motion.p 
              className="text-background/70 text-lg mb-8 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join thousands who have already elevated their health journey with HUX Smart Ring.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/products/hux-aura-ring">
                <button className="px-8 py-4 bg-background text-foreground font-medium rounded-full hover:bg-background/90 transition-all duration-300 shadow-lg hover:shadow-xl group">
                  Get HUX Ring
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/features">
                <button className="px-8 py-4 bg-transparent text-background font-medium rounded-full border-2 border-background/30 hover:border-background/60 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
