"use client";

import Spline from '@splinetool/react-spline';
import huxLogo from "@/assets/hux-logo.svg";

/**
 * Enhanced Hero Section with carousel fade transitions,
 * responsive height (92vh desktop / 85vh tablet / 75vh mobile),
 * and centered overlay content.
 */

export default function EnhancedHeroSection() {

  return (
    <section
      id="hero"
      className="hero hero-fullbleed relative h-[90vh] min-h-[600px] md:h-[85vh] lg:h-[92vh] overflow-hidden"
    >
      {/* ---------- 3D Spline Background ---------- */}
      <div className="absolute inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/RCVKAoUYNPilq6bJ/scene.splinecode"
          className="w-full h-full"
        />
        {/* Subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none"></div>
      </div>

      {/* ---------- Centered Overlay Content ---------- */}
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-tagline fade-in">INTRODUCING THE FUTURE OF TECH</h1>

          <img src={huxLogo} alt="HUX Logo" className="hux-logo fade-in" />

          <div className="hero-buttons fade-in-subtitle">
            <button className="primary">Next-Gen Productivity</button>
          </div>
        </div>
      </div>
    </section>
  );
}
