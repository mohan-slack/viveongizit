"use client";

import { useState, useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import huxLogo from "@/assets/hux-logo.svg";
import heroBlackGlossy from "@/assets/hero-black-glossy.jpg";
import heroDualRings from "@/assets/hero-dual-rings.jpg";
import heroFloatingGraphite from "@/assets/hero-floating-graphite.jpg";
import heroLifestyleHand from "@/assets/hero-lifestyle-hand.jpg";

// Mobile-optimized images (9:16 aspect ratio)
import heroMobileBlack from "@/assets/hero-mobile-black.jpg";
import heroMobileDual from "@/assets/hero-mobile-dual.jpg";
import heroMobileGraphite from "@/assets/hero-mobile-graphite.jpg";
import heroMobileLifestyle from "@/assets/hero-mobile-lifestyle.jpg";

interface EnhancedHeroSectionProps {
  useVideo?: boolean;
  videoSrc?: string;
  videoPoster?: string;
}

/**
 * Enhanced Hero Section with video background support,
 * carousel fade transitions, and responsive design.
 */
export default function EnhancedHeroSection({
  useVideo = false,
  videoSrc = "/hux_video_clean_trimmed_retry.mp4",
  videoPoster,
}: EnhancedHeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const heroImages = [
    {
      src: heroBlackGlossy,
      mobileSrc: heroMobileBlack,
      alt: "HUX Smart Ring – Black Titanium on Glossy Surface",
    },
    {
      src: heroDualRings,
      mobileSrc: heroMobileDual,
      alt: "HUX Smart Ring – Rose Gold & Black Duo",
    },
    {
      src: heroFloatingGraphite,
      mobileSrc: heroMobileGraphite,
      alt: "HUX Smart Ring – Floating Graphite Edition",
    },
    {
      src: heroLifestyleHand,
      mobileSrc: heroMobileLifestyle,
      alt: "HUX Smart Ring – Lifestyle Rose Gold Edition",
    },
  ];

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
    <section
      id="hero"
      className="hero hero-fullbleed relative h-[100dvh] w-full overflow-hidden"
    >
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
            poster={videoPoster || heroBlackGlossy}
            onLoadedData={handleVideoLoaded}
            onError={handleVideoError}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Gradient overlay for video */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        </div>
      )}

      {/* ---------- Background Carousel (Fallback) ---------- */}
      {showCarousel && (
        <Carousel
          opts={{ loop: true, align: "start" }}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${showVideo && videoLoaded ? 'opacity-0' : 'opacity-100'}`}
        >
          <CarouselContent className="h-full -ml-0">
            {heroImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="relative h-full w-full pl-0 basis-full"
              >
                {/* Background Image - Responsive */}
                <div className="relative w-full h-full z-0">
                  <picture className="w-full h-full">
                    {/* Mobile image (9:16 aspect ratio) for screens < 768px */}
                    <source media="(max-width: 767px)" srcSet={image.mobileSrc} />
                    {/* Desktop/tablet image (16:9 aspect ratio) for screens >= 768px */}
                    <source media="(min-width: 768px)" srcSet={image.src} />
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center block"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </picture>
                  {/* Subtle gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}

      {/* ---------- Centered Overlay Content ---------- */}
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-tagline fade-in">INTRODUCING THE FUTURE OF TECH</h1>

          <img src={huxLogo} alt="HUX Logo" className="hux-logo fade-in" />

          <div className="hero-buttons fade-in-subtitle">
            <button className="primary">Next-Gen Productivity</button>
          </div>
        </div>
      </div>
    </section>
  );
}