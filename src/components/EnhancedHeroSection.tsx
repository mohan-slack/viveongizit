"use client"

import huxLogo from "@/assets/hux-logo.svg"
import heroBlackTitanium from "@/assets/hero-ring-black-titanium.jpg"
import heroRoseGold from "@/assets/hero-ring-rose-gold-premium.jpg"
import heroSilver from "@/assets/hero-ring-silver-premium.jpg"
import heroGraphite from "@/assets/hero-ring-graphite-premium.jpg"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

export default function EnhancedHeroSection() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  const heroImages = [
    { src: heroBlackTitanium, alt: "HUX Smart Ring - Premium Black Titanium Edition" },
    { src: heroRoseGold, alt: "HUX Smart Ring - Elegant Rose Gold Finish" },
    { src: heroSilver, alt: "HUX Smart Ring - Polished Silver Premium" },
    { src: heroGraphite, alt: "HUX Smart Ring - Sophisticated Graphite Grey" },
  ]

  return (
    <section
      id="hero"
      className="hero hero-fullbleed h-[75vh] md:h-[85vh] lg:h-[92vh] relative overflow-hidden"
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
              <div className="relative z-0 w-full h-full">
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
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-tagline">INTRODUCING THE FUTURE OF TECH</h1>
          <img src={huxLogo} alt="HUX" className="hux-logo" />
          <div className="hero-buttons">
            <button className="primary">Next-Gen Productivity</button>
          </div>
        </div>
      </div>
    </section>
  );
}
