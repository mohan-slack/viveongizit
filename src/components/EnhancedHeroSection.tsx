"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import huxLogo from "@/assets/hux-logo.png"

export default function EnhancedHeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-40 px-6 text-center md:px-8 
      min-h-[calc(100vh-40px)] overflow-hidden 
      bg-[linear-gradient(to_bottom,#fff,#ffffff_50%,#e8e8e8_88%)]  
      dark:bg-[linear-gradient(to_bottom,#000,#0000_30%,#898e8e_78%,#ffffff_99%_50%)] 
      rounded-b-xl"
    >
      {/* Grid BG */}
      <div
        className="absolute -z-10 inset-0 opacity-80 h-[600px] w-full 
        bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
        dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]
        bg-[size:6rem_5rem] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />

      {/* Radial Accent */}
      <div
        className="absolute left-1/2 bottom-0 
        h-[400px] w-[1000px] md:h-[500px] md:w-[1400px] lg:h-[600px] lg:w-[180%] 
        -translate-x-1/2 translate-y-[70%] sm:translate-y-[65%] md:translate-y-[60%] lg:translate-y-[55%] rounded-[100%] 
        bg-[radial-gradient(closest-side,#ffffff_0%,#e8e8e8_50%,#000000_100%)] 
        dark:bg-[radial-gradient(closest-side,#000000_0%,#1a1a1a_50%,#ffffff_100%)]"
      />

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

      {/* Small Title */}
      <div
        className="animate-fade-in mt-8 opacity-0 text-sm md:text-base lg:text-lg font-bold tracking-wider text-gray-700 dark:text-gray-300 uppercase"
      >
        Introducing the Future of Tech
      </div>

      {/* Large HUX Logo */}
      <div className="animate-fade-in mt-6 mb-8 opacity-0 flex justify-center">
        <img 
          src={huxLogo} 
          alt="HUX Logo" 
          className="w-[300px] md:w-[500px] lg:w-[700px] h-auto"
        />
      </div>

      {/* Subtitle */}
      <p
        className="animate-fade-in mb-12 text-balance 
        text-lg tracking-tight text-gray-600 dark:text-gray-400 
        opacity-0 md:text-xl max-w-3xl mx-auto"
      >
        Streamline your workflow and boost productivity with intuitive solutions. Security, speed, and simplicity—all in one platform.
      </p>

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
    </section>
  );
}
