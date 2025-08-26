"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { DecryptedText } from "./ui/decrypted-text";

export function RevealTextHUX() {
  const text = "HUX";
  const trademark = "™";
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center relative">
      <div className="flex relative">
        <DecryptedText 
          text={text}
          className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight
            bg-gradient-to-br from-slate-200 via-slate-300 to-slate-500
            bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(148,163,184,0.8)]
            [text-shadow:0_0_30px_rgba(148,163,184,0.6)]"
          encryptedClassName="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight
            text-slate-500/50 drop-shadow-[0_0_10px_rgba(148,163,184,0.4)]"
          speed={100}
          maxIterations={15}
          sequential={true}
          revealDirection="start"
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
          animateOn="hover"
        />
        <span className="absolute text-[0.5em] text-slate-400 -top-2 right-0">
          {trademark}
        </span>
      </div>
    </div>
  );
}