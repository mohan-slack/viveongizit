
import { FeatureProps } from './FeatureTypes';

export const getEarbudsData = (): Omit<FeatureProps, 'index'>[] => [
  {
    iconName: "Zap",
    emoji: "⚡",
    title: "Lightning-Fast Charging",
    description: "Power up in 15 minutes for 8+ hours of playtime.",
    color: "border-viveon-red/30 bg-viveon-red/5",
    glowColor: "bg-viveon-red",
    additionalInfo: "Our proprietary fast-charging technology uses advanced power delivery algorithms to safely maximize battery capacity in record time.",
    category: "earbuds"
  },
  {
    iconName: "Headphones",
    emoji: "🎧",
    title: "Immersive Noise Cancellation",
    description: "Advanced ANC tech to block external noise and enhance clarity.",
    color: "border-viveon-neon-blue/30 bg-viveon-neon-blue/5",
    glowColor: "bg-viveon-neon-blue",
    additionalInfo: "Utilizing 8 microphones and AI-powered sound processing to create a bubble of silence around you, with adjustable transparency levels.",
    category: "earbuds"
  },
  {
    iconName: "Wifi",
    emoji: "📡",
    title: "Seamless Connectivity",
    description: "Instant pairing with ultra-low latency Bluetooth 5.2.",
    color: "border-viveon-neon-purple/30 bg-viveon-neon-purple/5",
    glowColor: "bg-viveon-neon-purple",
    additionalInfo: "Multi-point connection allows switching between devices instantly, with a stable range of up to 50 meters in optimal conditions.",
    category: "earbuds"
  },
  {
    iconName: "Battery",
    emoji: "🔋",
    title: "Extended Battery",
    description: "Enjoy up to 36 hours of music with the charging case.",
    color: "border-green-500/30 bg-green-500/5",
    glowColor: "bg-green-500",
    additionalInfo: "High-density lithium-polymer battery with smart power management extends battery life through adaptive playback optimization.",
    category: "earbuds"
  },
  {
    iconName: "Music",
    emoji: "🏟️",
    title: "3D Spatial Audio",
    description: "Cinematic surround sound experience with intelligent tracking.",
    color: "border-purple-500/30 bg-purple-500/5",
    glowColor: "bg-purple-500",
    additionalInfo: "Dynamic head tracking adjusts sound fields in real-time, creating an immersive audio environment that adapts to your movement.",
    category: "earbuds"
  },
  {
    iconName: "Mic",
    emoji: "🎙️",
    title: "Voice Assistant Integration",
    description: "Supports Siri, Google Assistant, and Alexa with touch-free controls.",
    color: "border-blue-500/30 bg-blue-500/5", 
    glowColor: "bg-blue-500",
    additionalInfo: "Wake-word activation and beamforming microphones ensure your voice commands are heard clearly even in noisy environments.",
    category: "earbuds"
  },
  {
    iconName: "Droplets",
    emoji: "💧",
    title: "Sweat & Water Resistance",
    description: "IPX7 rating ensures durability for workouts and outdoor use.",
    color: "border-sky-500/30 bg-sky-500/5",
    glowColor: "bg-sky-500",
    additionalInfo: "Nano-coating technology provides complete protection against sweat and water immersion up to 1 meter for 30 minutes.",
    category: "earbuds"
  }
];
