"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [api, setApi] = useState<CarouselApi>();

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

  // Auto-scroll carousel
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    if (useVideo && videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoError(true);
      });
    }
  }, [useVideo]);

  const handleVideoLoaded = () => setVideoLoaded(true);
  const handleVideoError = () => setVideoError(true);
  const showVideo = useVideo && !videoError;
  const showCarousel = !useVideo || videoError || !videoLoaded;

  return (
    <section id="hero" className="relative h-[100dvh] w-full overflow-hidden bg-sky-gradient cloud-bg">
      {/* Cloud overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[5%] w-[300px] h-[150px] bg-white/40 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[200px] bg-white/50 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-[25%] left-[40%] w-[250px] h-[120px] bg-white/30 rounded-full blur-3xl opacity-40" />
      </div>

      {/* ---------- Video Background ---------- */}
      {showVideo && (
        <div className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <video
            ref={videoRef}
            className="w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            poster={videoPoster || heroRingPremiumDual}
            onLoadedData={handleVideoLoaded}
            onError={handleVideoError}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* ---------- Overlay Content - Centered Like Curve ---------- */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
            All your health, one smart
            <br />
            ring - <span className="text-accent">HUX Ring</span>
          </h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Track your wellness, sleep better
            <br className="hidden sm:block" />
            and live smarter.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button className="px-8 py-4 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]">
              Discover HUX Ring
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Product Image */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md md:max-w-lg lg:max-w-xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Shadow beneath the image */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/10 rounded-full blur-xl" />
            
            {/* Product Image */}
            <img
              src={heroRingPremiumDual}
              alt="HUX Smart Ring"
              className="w-full h-auto object-contain float"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
