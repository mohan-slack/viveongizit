"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const GoogleGeminiEffect = ({
  pathLengths,
  title,
  description,
  className,
}: {
  pathLengths: any[];
  title?: string;
  description?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div
      className={cn(
        "h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip",
        className
      )}
      ref={ref}
    >
      <GoogleGeminiEffectSVG scrollYProgress={scrollYProgress} pathLengths={pathLengths} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        {/* Ring Image with HUX Branding */}
        <div className="relative w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40">
          <img 
            src="/lovable-uploads/0f277784-a470-4aa9-86e1-79dc17d5755d.png"
            alt="HUX Smart Ring"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
          {/* HUX Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span 
              className="text-white font-bold text-lg md:text-2xl lg:text-3xl tracking-wider"
              style={{
                textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(34,211,238,0.3)'
              }}
            >
              HUX
            </span>
          </div>
        </div>
      </div>
      
      {title && (
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white text-center absolute bottom-20 left-1/2 transform -translate-x-1/2 z-50">
          {title}
        </h1>
      )}
      {description && (
        <p className="text-base md:text-lg text-gray-300 max-w-4xl text-center mx-auto absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50">
          {description}
        </p>
      )}
    </div>
  );
};

const GoogleGeminiEffectSVG = ({
  scrollYProgress,
  pathLengths,
}: {
  scrollYProgress: any;
  pathLengths: any[];
}) => {
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <svg
      width="1440"
      height="890"
      viewBox="0 0 1440 890"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
    >
      <defs>
        <linearGradient id="path" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#ea384c" />
        </linearGradient>
      </defs>
      
      {/* Animated paths */}
      <motion.path
        d="M0,445 Q360,200 720,445 T1440,445"
        fill="none"
        stroke="url(#path)"
        strokeWidth="2"
        strokeOpacity="0.4"
        pathLength={pathLengths[0]}
        style={{
          pathLength: progress,
        }}
      />
      
      <motion.path
        d="M0,445 Q360,690 720,445 T1440,445"
        fill="none"
        stroke="url(#path)"
        strokeWidth="2"
        strokeOpacity="0.3"
        pathLength={pathLengths[1]}
        style={{
          pathLength: progress,
        }}
      />
      
      <motion.path
        d="M0,445 Q180,300 360,445 Q540,590 720,445 Q900,300 1080,445 Q1260,590 1440,445"
        fill="none"
        stroke="url(#path)"
        strokeWidth="2"
        strokeOpacity="0.5"
        pathLength={pathLengths[2]}
        style={{
          pathLength: progress,
        }}
      />
      
      <motion.path
        d="M0,445 Q180,590 360,445 Q540,300 720,445 Q900,590 1080,445 Q1260,300 1440,445"
        fill="none"
        stroke="url(#path)"
        strokeWidth="2"
        strokeOpacity="0.2"
        pathLength={pathLengths[3]}
        style={{
          pathLength: progress,
        }}
      />
      
      {/* Central circle highlight */}
      <motion.circle
        cx="720"
        cy="445"
        r="60"
        fill="none"
        stroke="url(#path)"
        strokeWidth="1"
        strokeOpacity="0.6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, delay: 1 }}
      />
      
      <motion.circle
        cx="720"
        cy="445"
        r="80"
        fill="none"
        stroke="url(#path)"
        strokeWidth="1"
        strokeOpacity="0.3"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2.5, delay: 1.2 }}
      />
    </svg>
  );
};

export const GoogleGeminiEffectDemo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLengths = [
    useTransform(scrollYProgress, [0, 0.25], [0, 1]),
    useTransform(scrollYProgress, [0.25, 0.5], [0, 1]), 
    useTransform(scrollYProgress, [0.5, 0.75], [0, 1]),
    useTransform(scrollYProgress, [0.75, 1], [0, 1]),
  ];

  return (
    <div className="bg-black" ref={ref}>
      <GoogleGeminiEffect
        pathLengths={pathLengths}
        title="Experience the Future"
        description="HUX Smart Rings - Where innovation meets elegance"
      />
    </div>
  );
};