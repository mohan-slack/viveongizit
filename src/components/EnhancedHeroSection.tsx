"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import huxLogo from "@/assets/hux-logo.svg"
import { SpiralAnimation } from "@/components/ui/spiral-animation"

export default function EnhancedHeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-40 px-6 text-center md:px-8 
      min-h-[calc(100vh-40px)] overflow-hidden rounded-b-xl"
    >
      {/* Spiral Animation Background */}
      <div className="absolute inset-0 z-0 bg-white">
        <SpiralAnimation />
      </div>

      <div className="relative z-10">
        {/* Eyebrow */}
        <a href="#" className="group">
          <span
            className="text-sm text-gray-600 dark:text-gray-400 font-geist mx-auto px-5 py-2 
            bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  
            border-[2px] border-gray-300/20 dark:border-white/5 
            rounded-3xl w-fit tracking-tight uppercase flex items-center justify-center"
          >
            Next-Gen Productivity
            <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </a>

        {/* Title with Logo */}
        <div className="animate-fade-in mt-6 mb-6 opacity-0 flex items-center justify-center gap-3 md:gap-4">
          <div className="text-sm md:text-base lg:text-lg font-bold tracking-wider text-gray-700 dark:text-gray-300 uppercase">
            Introducing the Future of Tech
          </div>
          <img 
            src={huxLogo} 
            alt="HUX Logo" 
            className="w-[80px] md:w-[120px] lg:w-[150px] h-auto"
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
