"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function RevealTextHUX() {
  const text = "HUX";
  const trademark = "™";
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(true), 1200); // triggers after INTRODUCING finishes
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center relative">
      <div className="flex relative">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight relative overflow-hidden
            bg-gradient-to-br from-slate-200 via-slate-300 to-slate-500
            bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(148,163,184,0.8)]
            [text-shadow:0_0_30px_rgba(148,163,184,0.6)]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              damping: 8,
              stiffness: 200,
              mass: 0.8,
            }}
          >
            {letter}
            {showOverlay && (
              <motion.span
                className="absolute inset-0 text-slate-300 opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                  ease: "easeInOut",
                }}
              >
                {letter}
              </motion.span>
            )}
          </motion.span>
        ))}
        <span className="absolute text-[0.5em] text-slate-400 -top-2 right-0">
          {trademark}
        </span>
      </div>
    </div>
  );
}