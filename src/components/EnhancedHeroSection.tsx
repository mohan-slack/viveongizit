"use client";

import { useState, useRef, useEffect, useCallback } from "react";
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
    <section id="hero" className="hero hero-fullbleed relative h-[100dvh] w-full overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20"></div>
        </div>
      )}

      {/* ---------- Background Carousel ---------- */}
      {showCarousel && (
        <Carousel
          opts={{ loop: true, align: "start" }}
          setApi={setApi}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${showVideo && videoLoaded ? 'opacity-0' : 'opacity-100'}`}
        >
          <CarouselContent className="h-full -ml-0">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="relative h-full w-full pl-0 basis-full">
                <div className="relative w-full h-full z-0">
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
      )}

      {/* ---------- Overlay Content - Left Aligned Like Reference ---------- */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-xl">
            {/* Tagline */}
            <p className="text-slate-500 text-sm md:text-base lg:text-lg font-medium tracking-wide mb-4 fade-in">
              Fashion Health Smart Ring
            </p>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
              Smart Life at<br />
              Your Fingertips
            </h1>

            {/* Logo */}
            <img
              alt="HUX Logo"
              className="h-12 md:h-16 lg:h-20 object-contain fade-in mb-8"
              src="/lovable-uploads/f866d3b7-d8bf-4fa5-a6de-96bab5fedc3f.png"
              style={{ animationDelay: '0.4s' }}
            />

            {/* CTA Button */}
            <div className="fade-in" style={{ animationDelay: '0.6s' }}>
              <button className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
