"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const backgroundPathsVariants = cva(
  "relative w-full min-h-screen overflow-hidden flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-viveon-darker via-viveon-dark to-viveon-darker",
        dark: "bg-viveon-darker",
        gradient: "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BackgroundPathsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof backgroundPathsVariants> {
  title?: string;
  asChild?: boolean;
  children?: React.ReactNode;
}

const BackgroundPaths = React.forwardRef<HTMLDivElement, BackgroundPathsProps>(
  ({ className, variant, title = "INTRODUCING THE FUTURE OF TECH HUX™", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    const titleParts = title.split("HUX™");
    const mainTitle = titleParts[0].trim();
    const huxTitle = "HUX™";

    const letterVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.03,
        },
      },
    };

    return (
      <Comp
        className={cn(backgroundPathsVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {/* Animated SVG Background */}
        <div className="absolute inset-0 w-full h-full">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="pathGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#9B30FF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FF3A2F" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="pathGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF3A2F" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#00FFFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#9B30FF" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            
            {/* Animated paths */}
            <motion.path
              d="M0,400 Q200,200 400,400 T800,400 Q1000,600 1200,400"
              stroke="url(#pathGradient1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            />
            
            <motion.path
              d="M0,300 Q300,100 600,300 Q900,500 1200,300"
              stroke="url(#pathGradient2)"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            />
            
            <motion.path
              d="M0,500 Q400,300 800,500 Q1000,700 1200,500"
              stroke="#00FFFF"
              strokeWidth="1"
              fill="none"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, ease: "easeInOut", delay: 1, repeat: Infinity, repeatType: "reverse" }}
            />
            
            {/* Particle effects */}
            {[...Array(20)].map((_, i) => (
              <motion.circle
                key={i}
                cx={Math.random() * 1200}
                cy={Math.random() * 800}
                r="1"
                fill="#00FFFF"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, Math.random() * 200 - 100],
                  y: [0, Math.random() * 200 - 100]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          {/* Animated Title */}
          <div className="mb-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-4"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium tracking-widest text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]">
                {mainTitle.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    transition={{ duration: 0.5 }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            >
              {huxTitle}
            </motion.div>
          </div>

          {/* Optional children content */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="flex flex-col items-center gap-6"
            >
              {children}
            </motion.div>
          )}
        </div>

        {/* Ambient glow effects */}
        <div className="absolute inset-0 bg-gradient-radial from-viveon-neon-blue/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-viveon-red/10 rounded-full filter blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-viveon-neon-purple/10 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }} />
      </Comp>
    );
  }
);

BackgroundPaths.displayName = "BackgroundPaths";

export { BackgroundPaths, backgroundPathsVariants };