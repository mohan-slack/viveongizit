"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import huxLogo from "@/assets/hux-logo.svg"
import ringSleekDesign from "@/assets/ring-sleek-design.png"
import ringHealthTracking from "@/assets/ring-health-tracking.png"
import ringSleepMonitoring from "@/assets/ring-sleep-monitoring.png"
import ringFitnessMonitoring from "@/assets/ring-fitness-monitoring.png"

export default function EnhancedHeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-40 px-6 text-center md:px-8 
      min-h-[calc(100vh-40px)] overflow-hidden rounded-b-xl"
    >
      {/* 4-Image Grid Background */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 grid-rows-2">
        <div className="relative overflow-hidden">
          <img 
            src={ringSleekDesign} 
            alt="Smart Ring Design" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <img 
            src={ringHealthTracking} 
            alt="Health Tracking" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <img 
            src={ringSleepMonitoring} 
            alt="Sleep Monitoring" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <img 
            src={ringFitnessMonitoring} 
            alt="Fitness Monitoring" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
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
