
import React from 'react';
import { Zap, Headphones, Wifi, Battery } from 'lucide-react';
import { FeatureProps } from './FeatureTypes';

export const getFeaturesData = (): Omit<FeatureProps, 'index'>[] => [
  {
    icon: <Zap size={24} className="text-viveon-red" />,
    emoji: "⚡",
    title: "Lightning-Fast Charging",
    description: "Power up in a flash! Just 15 minutes of charging gives you 8 hours of uninterrupted playtime.",
    color: "border-viveon-red/30 bg-viveon-red/5",
    glowColor: "bg-viveon-red",
  },
  {
    icon: <Headphones size={24} className="text-viveon-neon-blue" />,
    emoji: "🎧",
    title: "Immersive Noise Cancellation",
    description: "Block distractions, dive into pure audio bliss, and experience music like never before.",
    color: "border-viveon-neon-blue/30 bg-viveon-neon-blue/5",
    glowColor: "bg-viveon-neon-blue",
  },
  {
    icon: <Wifi size={24} className="text-viveon-neon-purple" />,
    emoji: "📡",
    title: "Instant Bluetooth 5.4 Connectivity",
    description: "Seamlessly pair with any device and enjoy ultra-stable, lag-free connections.",
    color: "border-viveon-neon-purple/30 bg-viveon-neon-purple/5",
    glowColor: "bg-viveon-neon-purple",
  },
  {
    icon: <Battery size={24} className="text-green-500" />,
    emoji: "🔋",
    title: "Marathon Battery Life",
    description: "Go the distance with up to 36 hours of total playtime, including the charging case.",
    color: "border-green-500/30 bg-green-500/5",
    glowColor: "bg-green-500",
  },
];
