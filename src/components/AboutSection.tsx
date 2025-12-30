"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import aboutSmartRing from '@/assets/about-smart-ring.jpg';
import AboutFounders from './AboutFounders';

const AboutSection: React.FC = () => {
  const stats = [
    { value: "15+", label: "Engineers", sublabel: "Dedicated experts" },
    { value: "04", label: "Patents", sublabel: "Innovative technology" },
    { value: "24/7", label: "Support", sublabel: "Always available" }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="relative bg-secondary rounded-3xl overflow-hidden shadow-elevated">
                <img 
                  src={aboutSmartRing} 
                  alt="HUX Smart Ring Technology" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-accent font-bold text-2xl">HUX</span>
                  <span className="text-background text-xs align-top">™</span>
                  <p className="text-background/80 text-sm mt-1">By Viveon Gizit Pvt. Ltd.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-secondary text-foreground text-sm font-medium rounded-full mb-6">
              About Us
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              Pioneering the next generation of{' '}
              <span className="text-accent">wearable tech</span>
            </h2>
            
            <p className="text-muted-foreground mb-4 text-lg">
              At Viveon Gizit Private Limited, we believe that technology should not only be powerful but also seamlessly integrated into your lifestyle.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Founded in 2025, our team of engineers, designers, and health experts work tirelessly to create products that combine cutting-edge technology with sleek, minimalist design.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center">
                    <span className="text-accent font-bold text-xl">{stat.value}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{stat.label}</p>
                    <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/about">
              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-3">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
        </div>
        
        <AboutFounders />
      </div>
    </section>
  );
};

export default AboutSection;
