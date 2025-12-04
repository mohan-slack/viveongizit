"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Ring mockup images for the showcase
import heroRingPremiumDual from "@/assets/hero-ring-premium-dual.jpg";
import heroRingBlackFloating from "@/assets/hero-ring-black-floating.jpg";
import heroRingRosegoldStack from "@/assets/hero-ring-rosegold-stack.jpg";

interface EnhancedHeroSectionProps {
  useVideo?: boolean;
  videoSrc?: string;
  videoPoster?: string;
}

export default function EnhancedHeroSection({
  useVideo = false,
  videoSrc = "/hux_video_clean_trimmed_retry.mp4",
  videoPoster
}: EnhancedHeroSectionProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const deviceMockups = [
    {
      src: heroRingPremiumDual,
      alt: "HUX Smart Ring – Premium Duo",
      color: "€3,126"
    },
    {
      src: heroRingBlackFloating,
      alt: "HUX Smart Ring – Black Edition",
      color: "€6,012"
    },
    {
      src: heroRingRosegoldStack,
      alt: "HUX Smart Ring – Rose Gold",
      color: "€2,350"
    }
  ];

  // Auto-cycle images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % deviceMockups.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20 md:py-24 lg:py-28">
      {/* Centered Content */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6"
        >
          Your health, reimagined
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Track smartly, sleep better, monitor your health automatically, and watch your wellness grow — all with HUX AURA.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/products">
            <button className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Explore Collection
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Device Mockups - 3 Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 md:mt-20 flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto px-4"
      >
        {deviceMockups.map((mockup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className="relative group"
          >
            <div className="w-48 sm:w-56 md:w-64 lg:w-72 aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
              <img
                src={mockup.src}
                alt={mockup.alt}
                className="w-full h-full object-cover"
              />
              {/* Overlay with price badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-slate-800 font-semibold text-sm truncate">{mockup.alt.split(' – ')[1]}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Dots */}
      <div className="flex gap-2 mt-8">
        {deviceMockups.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImage === index 
                ? 'bg-slate-900 w-6' 
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
