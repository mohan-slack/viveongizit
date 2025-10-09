"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import huxLogo from "@/assets/hux-logo.svg"
import heroBlackGlossy from "@/assets/hero-black-glossy.jpg"
import heroDualRings from "@/assets/hero-dual-rings.jpg"
import heroFloatingGraphite from "@/assets/hero-floating-graphite.jpg"
import heroLifestyleHand from "@/assets/hero-lifestyle-hand.jpg"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

export default function EnhancedHeroSection() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  const heroImages = [
    { src: heroBlackGlossy, alt: "HUX Smart Ring - Black Titanium on Glossy Surface" },
    { src: heroDualRings, alt: "HUX Smart Ring - Rose Gold & Black Duo" },
    { src: heroFloatingGraphite, alt: "HUX Smart Ring - Floating Graphite Edition" },
    { src: heroLifestyleHand, alt: "HUX Smart Ring - Lifestyle Rose Gold" },
  ]

  return (
    <section
      id="hero"
      className="hero hero-fullbleed h-[70vh] md:h-[80vh] lg:h-[92vh] relative overflow-hidden"
    >
      {/* Full-Width Edge-to-Edge Carousel Background */}
      <Carousel
        plugins={[plugin.current]}
        className="absolute inset-0 w-full h-full"
        opts={{
          loop: true,
          align: 'start',
        }}
      >
        <CarouselContent className="h-full -ml-0" style={{ height: '100%' }}>
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full pl-0 basis-full" style={{ height: '100%' }}>
              <div className="relative w-full h-full">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover object-center"
                  style={{ minHeight: '100%' }}
                />
                {/* Subtle gradient overlay for text readability and depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Centered Content Overlay */}
      <div className="absolute inset-0 z-20 w-full h-full flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 pointer-events-none">
        <div className="max-w-5xl w-full mx-auto text-center space-y-3 sm:space-y-4 md:space-y-6 pointer-events-auto">
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
