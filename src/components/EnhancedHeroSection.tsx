"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

// Desktop images (16:9)
import heroRingPremiumDual from "@/assets/hero-ring-premium-dual.jpg";
import heroRingBlackFloating from "@/assets/hero-ring-black-floating.jpg";
import heroRingRosegoldStack from "@/assets/hero-ring-rosegold-stack.jpg";
import heroRingSilverFloat from "@/assets/hero-ring-silver-float.jpg";

// Mobile images (9:16)
import heroMobilePremiumDual from "@/assets/hero-mobile-premium-dual.jpg";
import heroMobileBlackFloat from "@/assets/hero-mobile-black-float.jpg";
import heroMobileRosegoldStack from "@/assets/hero-mobile-rosegold-stack.jpg";
import heroMobileSilverFloat from "@/assets/hero-mobile-silver-float.jpg";

export default function EnhancedHeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      src: heroRingPremiumDual,
      mobileSrc: heroMobilePremiumDual,
      alt: "HUX Smart Ring – Premium Black & Silver Duo"
    },
    {
      src: heroRingBlackFloating,
      mobileSrc: heroMobileBlackFloat,
      alt: "HUX Smart Ring – Black Titanium Edition"
    },
    {
      src: heroRingRosegoldStack,
      mobileSrc: heroMobileRosegoldStack,
      alt: "HUX Smart Ring – Rose Gold & Black Stack"
    },
    {
      src: heroRingSilverFloat,
      mobileSrc: heroMobileSilverFloat,
      alt: "HUX Smart Ring – Silver Floating Edition"
    }
  ];

  // Only 2 product cards: Premium Duo and Black Edition
  const deviceMockups = [
    {
      src: heroRingPremiumDual,
      alt: "HUX Smart Ring – Premium Duo",
      label: "Premium Duo"
    },
    {
      src: heroRingBlackFloating,
      alt: "HUX Smart Ring – Black Edition",
      label: "Black Edition"
    }
  ];

  // Auto-scroll carousel
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Carousel */}
      <Carousel
        opts={{ loop: true, align: "start" }}
        setApi={setApi}
        className="absolute inset-0 w-full h-full"
      >
        <CarouselContent className="h-full -ml-0">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="relative h-full w-full pl-0 basis-full">
              <div className="relative w-full h-full">
                <picture className="w-full h-full">
                  <source media="(max-width: 767px)" srcSet={image.mobileSrc} />
                  <source media="(min-width: 768px)" srcSet={image.src} />
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center block"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </picture>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 md:py-24">
        {/* Centered Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6"
          >
            Your health, reimagined
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-slate-700 text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            Track smartly, sleep better, monitor your health automatically, and watch your wellness grow — all with HUX AURA.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <Link to="/products">
              <button className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Explore Collection
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Device Mockups - 2 Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-16 md:mt-20 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 max-w-4xl mx-auto px-4"
        >
          {deviceMockups.map((mockup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15, ease: "easeOut" }}
              className="relative group"
            >
              <div className="w-56 sm:w-64 md:w-72 lg:w-80 aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl bg-slate-200 transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-3">
                <img
                  src={mockup.src}
                  alt={mockup.alt}
                  className="w-full h-full object-cover"
                />
                {/* Overlay with label */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <span className="text-slate-800 font-semibold text-sm">{mockup.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Carousel Dots */}
        <div className="flex gap-2 mt-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-slate-900 w-6' 
                  : 'bg-slate-400 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
