"use client"
import React, { useEffect, useState, memo } from 'react';
import { Heart, Activity, Moon, Thermometer, Wind, Smartphone } from 'lucide-react';
import ringCenterImage from '@/assets/ring-center-orbital.png';

// --- Type Definitions ---
type FeatureType = 'heart' | 'activity' | 'sleep' | 'temperature' | 'spo2' | 'smart';

type GlowColor = 'rose' | 'emerald' | 'indigo' | 'amber' | 'cyan' | 'violet';

interface FeatureConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  featureType: FeatureType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
  description: string;
}

interface OrbitingFeatureProps {
  config: FeatureConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: 'inner' | 'outer';
  animationDelay?: number;
}

// --- Feature Icons Map ---
const featureIcons: Record<FeatureType, { icon: React.ElementType; color: string }> = {
  heart: { icon: Heart, color: '#F43F5E' },
  activity: { icon: Activity, color: '#10B981' },
  sleep: { icon: Moon, color: '#6366F1' },
  temperature: { icon: Thermometer, color: '#F59E0B' },
  spo2: { icon: Wind, color: '#06B6D4' },
  smart: { icon: Smartphone, color: '#8B5CF6' }
};

// --- Configuration for the Orbiting Features ---
const featuresConfig: FeatureConfig[] = [
  // Inner Orbit
  { 
    id: 'heart',
    orbitRadius: 100, 
    size: 48, 
    speed: 0.8, 
    featureType: 'heart', 
    phaseShift: 0, 
    glowColor: 'rose',
    label: 'Heart Rate',
    description: '24/7 Monitoring'
  },
  { 
    id: 'activity',
    orbitRadius: 100, 
    size: 48, 
    speed: 0.8, 
    featureType: 'activity', 
    phaseShift: (2 * Math.PI) / 3, 
    glowColor: 'emerald',
    label: 'Activity',
    description: 'Real-time Tracking'
  },
  { 
    id: 'sleep',
    orbitRadius: 100, 
    size: 48, 
    speed: 0.8, 
    featureType: 'sleep', 
    phaseShift: (4 * Math.PI) / 3, 
    glowColor: 'indigo',
    label: 'Sleep',
    description: 'Nightly Analysis'
  },
  // Outer Orbit
  { 
    id: 'temperature',
    orbitRadius: 170, 
    size: 44, 
    speed: -0.5, 
    featureType: 'temperature', 
    phaseShift: 0, 
    glowColor: 'amber',
    label: 'Temperature',
    description: 'Continuous'
  },
  { 
    id: 'spo2',
    orbitRadius: 170, 
    size: 44, 
    speed: -0.5, 
    featureType: 'spo2', 
    phaseShift: (2 * Math.PI) / 3, 
    glowColor: 'cyan',
    label: 'SpO₂',
    description: 'On-demand'
  },
  { 
    id: 'smart',
    orbitRadius: 170, 
    size: 44, 
    speed: -0.5, 
    featureType: 'smart', 
    phaseShift: (4 * Math.PI) / 3, 
    glowColor: 'violet',
    label: 'Smart Features',
    description: 'Always Ready'
  },
];

// --- Memoized Orbiting Feature Component ---
const OrbitingFeature = memo(({ config, angle }: OrbitingFeatureProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, featureType, label, description } = config;
  const { icon: Icon, color } = featureIcons[featureType];

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2.5 bg-white/95 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer border border-stone-200/50
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${color}40, 0 0 60px ${color}20`
            : `0 4px 20px rgba(0,0,0,0.1)`
        }}
      >
        <Icon 
          className="w-full h-full" 
          style={{ color }} 
          strokeWidth={1.5}
        />
        {isHovered && (
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-stone-900/95 backdrop-blur-sm rounded-lg text-center whitespace-nowrap pointer-events-none">
            <div className="text-xs font-medium text-white">{label}</div>
            <div className="text-[10px] text-stone-400">{description}</div>
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingFeature.displayName = 'OrbitingFeature';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'inner', animationDelay = 0 }: GlowingOrbitPathProps) => {
  const glowColors = {
    inner: {
      primary: 'rgba(244, 63, 94, 0.15)',
      secondary: 'rgba(16, 185, 129, 0.1)',
      border: 'rgba(168, 162, 158, 0.3)'
    },
    outer: {
      primary: 'rgba(139, 92, 246, 0.15)',
      secondary: 'rgba(6, 182, 212, 0.1)',
      border: 'rgba(168, 162, 158, 0.25)'
    }
  };

  const colors = glowColors[glowColor];

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      {/* Glowing background */}
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
          boxShadow: `0 0 40px ${colors.primary}, inset 0 0 40px ${colors.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />

      {/* Static ring for depth */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1.5px dashed ${colors.border}`,
          boxShadow: `inset 0 0 15px ${colors.secondary}`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main Component ---
export default function OrbitingFeatures() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{ radius: number; glowColor: 'inner' | 'outer'; delay: number }> = [
    { radius: 100, glowColor: 'inner', delay: 0 },
    { radius: 170, glowColor: 'outer', delay: 1.5 }
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-stone-100 via-amber-50/30 to-stone-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">
            Complete Health Ecosystem
          </h2>
          <p className="text-stone-600 max-w-xl mx-auto">
            Six powerful sensors working in harmony to give you a complete picture of your health
          </p>
        </div>

        {/* Orbital Visualization */}
        <div className="flex items-center justify-center overflow-hidden">
          <div 
            className="relative w-[380px] h-[380px] md:w-[420px] md:h-[420px] flex items-center justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Central Ring Image */}
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center z-10 relative">
              <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-xl animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-stone-400/10 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <img 
                src={ringCenterImage} 
                alt="HUX Smart Ring" 
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              />
            </div>

            {/* Render glowing orbit paths */}
            {orbitConfigs.map((config) => (
              <GlowingOrbitPath
                key={`path-${config.radius}`}
                radius={config.radius}
                glowColor={config.glowColor}
                animationDelay={config.delay}
              />
            ))}

            {/* Render orbiting feature icons */}
            {featuresConfig.map((config) => {
              const angle = time * config.speed + (config.phaseShift || 0);
              return (
                <OrbitingFeature
                  key={config.id}
                  config={config}
                  angle={angle}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
