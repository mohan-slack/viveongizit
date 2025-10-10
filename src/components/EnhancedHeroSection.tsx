"use client"

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
        <h1 className="hero-title">INTRODUCING THE FUTURE OF TECH</h1>
        <img src={huxLogo} alt="HUX" className="hux-logo" />
        <button className="primary" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Next-Gen Productivity</button>
        <div className="hero-buttons">
          <button className="secondary">Get Started</button>
        </div>
      </div>
    </section>
  );
}
