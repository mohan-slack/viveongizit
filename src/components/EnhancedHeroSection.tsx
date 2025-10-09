"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import huxLogo from "@/assets/hux-logo.svg"
import heroRingStudio from "@/assets/hero-ring-studio.jpg"
import heroRingFloating from "@/assets/hero-ring-floating.jpg"
import heroRingLifestyle from "@/assets/hero-ring-lifestyle.jpg"
import heroRingDual from "@/assets/hero-ring-dual.jpg"
import heroRingGlow from "@/assets/hero-ring-glow.jpg"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

export default function EnhancedHeroSection() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  const heroImages = [
    { src: heroRingStudio, alt: "HUX Smart Ring Studio Shot" },
    { src: heroRingFloating, alt: "HUX Smart Ring Floating Display" },
    { src: heroRingLifestyle, alt: "HUX Smart Ring Lifestyle" },
    { src: heroRingDual, alt: "HUX Smart Ring Dual Models" },
    { src: heroRingGlow, alt: "HUX Smart Ring with Glow Effects" },
  ]

  return (
    <section
      id="hero"
      className="hero-fullbleed h-[70vh] sm:h-[85vh] lg:h-screen"
    >
      {/* Full-Width Edge-to-Edge Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          opts={{
            loop: true,
            align: 'start',
          }}
        >
          <CarouselContent className="h-full -ml-0 m-0">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full p-0 pl-0 basis-full min-w-full">
                <div className="relative w-full h-full">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover object-center absolute inset-0 block"
                  />
                  {/* Subtle gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Centered Content Overlay */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-5xl w-full mx-auto text-center space-y-3 sm:space-y-4 md:space-y-6">
          {/* Small Title */}
          <div
            className="animate-fade-in opacity-0 text-xs md:text-base lg:text-lg font-bold tracking-[0.2em] text-gray-800 uppercase"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Introducing the Future of Tech
          </div>

          {/* Large HUX Logo */}
          <div 
            className="animate-fade-in opacity-0 flex justify-center py-2 md:py-4"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <img 
              src={huxLogo} 
              alt="HUX Logo" 
              className="w-[240px] sm:w-[320px] md:w-[420px] lg:w-[520px] h-auto drop-shadow-2xl"
            />
          </div>

          {/* Eyebrow Badge */}
          <a 
            href="#" 
            className="group inline-block animate-fade-in opacity-0"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <span
              className="text-xs md:text-sm text-gray-700 font-medium mx-auto px-4 md:px-6 py-2 md:py-3 
              bg-white/70 backdrop-blur-xl
              border border-gray-300/60
              rounded-full w-fit tracking-wider uppercase inline-flex items-center justify-center 
              shadow-lg hover:shadow-xl transition-all hover:bg-white/90 hover:scale-105"
            >
              Next-Gen Productivity
              <ChevronRight className="inline w-3 h-3 md:w-4 md:h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>

          {/* CTA Button */}
          <div 
            className="flex justify-center pt-2 md:pt-4 animate-fade-in opacity-0"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <Button
              asChild
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-10 py-5 md:py-6 text-sm md:text-lg 
              font-semibold tracking-wide shadow-2xl hover:shadow-3xl transition-all rounded-full hover:scale-105"
            >
              <a href="#">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
