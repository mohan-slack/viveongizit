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
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Full-Width Carousel Background */}
      <div className="absolute inset-0 z-0">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="h-full m-0 -ml-0">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-screen p-0 pl-0 basis-full">
                <div className="relative w-full h-full bg-white">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Subtle gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Centered Content Overlay */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Small Title - Moved to top */}
          <div
            className="animate-fade-in opacity-0 text-sm md:text-base lg:text-lg font-bold tracking-widest text-gray-800 uppercase"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Introducing the Future of Tech
          </div>

          {/* Large HUX Logo - Center */}
          <div 
            className="animate-fade-in opacity-0 flex justify-center py-4"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <img 
              src={huxLogo} 
              alt="HUX Logo" 
              className="w-[280px] md:w-[400px] lg:w-[500px] h-auto drop-shadow-2xl"
            />
          </div>

          {/* Eyebrow - Moved to bottom */}
          <a 
            href="#" 
            className="group inline-block animate-fade-in opacity-0"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <span
              className="text-xs md:text-sm text-gray-700 font-geist mx-auto px-5 py-2.5 
              bg-white/60 backdrop-blur-lg
              border border-gray-300/50
              rounded-full w-fit tracking-wide uppercase flex items-center justify-center 
              shadow-lg hover:shadow-xl transition-all hover:bg-white/80"
            >
              Next-Gen Productivity
              <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>

          {/* CTA */}
          <div 
            className="flex justify-center pt-4 animate-fade-in opacity-0"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <Button
              asChild
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-base md:text-lg 
              font-medium tracking-wide shadow-2xl hover:shadow-3xl transition-all rounded-full"
            >
              <a href="#">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
