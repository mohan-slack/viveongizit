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
      className="relative mx-auto w-full pt-20 px-6 text-center md:px-8 
      min-h-[60vh] overflow-hidden rounded-b-xl"
    >
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="h-full m-0">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full p-0">
                <div className="relative w-full h-full">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="relative z-20">
        {/* Large HUX Logo - Moved to top */}
        <div className="animate-fade-in mb-4 opacity-0 flex justify-center">
          <img 
            src={huxLogo} 
            alt="HUX Logo" 
            className="w-[250px] md:w-[350px] lg:w-[450px] h-auto drop-shadow-2xl"
          />
        </div>

        {/* Small Title */}
        <div
          className="animate-fade-in mb-4 opacity-0 text-xs md:text-sm lg:text-base font-bold tracking-wider text-white uppercase drop-shadow-lg"
        >
          Introducing the Future of Tech
        </div>

        {/* Eyebrow */}
        <a href="#" className="group inline-block mb-6">
          <span
            className="text-xs text-white font-geist mx-auto px-4 py-2 
            bg-white/20 backdrop-blur-md
            border-[2px] border-white/40
            rounded-3xl w-fit tracking-tight uppercase flex items-center justify-center shadow-lg"
          >
            Next-Gen Productivity
            <ChevronRight className="inline w-3 h-3 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </a>

        {/* CTA */}
        <div className="flex justify-center mb-8">
          <Button
            asChild
            className="w-fit md:w-48 z-20 font-geist tracking-tighter text-center text-base shadow-xl"
          >
            <a href="#">Get Started</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
