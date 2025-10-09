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
      className="relative mx-auto w-full pt-40 px-6 text-center md:px-8 
      min-h-[calc(100vh-40px)] overflow-hidden rounded-b-xl"
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
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10">
        {/* Eyebrow */}
        <a href="#" className="group">
          <span
            className="text-sm text-white/90 font-geist mx-auto px-5 py-2 
            bg-white/10 backdrop-blur-sm
            border-[2px] border-white/30
            rounded-3xl w-fit tracking-tight uppercase flex items-center justify-center"
          >
            Next-Gen Productivity
            <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </a>

        {/* Small Title */}
        <div
          className="animate-fade-in mt-6 opacity-0 text-sm md:text-base lg:text-lg font-bold tracking-wider text-white uppercase"
        >
          Introducing the Future of Tech
        </div>

        {/* Large HUX Logo */}
        <div className="animate-fade-in mt-0 mb-6 opacity-0 flex justify-center">
          <img 
            src={huxLogo} 
            alt="HUX Logo" 
            className="w-[350px] md:w-[550px] lg:w-[700px] h-auto"
          />
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button
            asChild
            className="w-fit md:w-52 z-20 font-geist tracking-tighter text-center text-lg"
          >
            <a href="#">Get Started</a>
          </Button>
        </div>

        {/* Bottom Fade */}
        <div
          className="animate-fade-up relative mt-32 opacity-0 [perspective:2000px] 
          after:absolute after:inset-0 after:z-50 
          after:[background:linear-gradient(to_top,hsl(var(--background))_10%,transparent)]"
        />
      </div>
    </section>
  );
}
