
import { FeatureProps } from './FeatureTypes';

export const getEarbudsData = (): Omit<FeatureProps, 'index'>[] => [
  {
    id: 'earbuds-1',
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
    id: 'earbuds-2',
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
    id: 'earbuds-3',
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
    id: 'earbuds-4',
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
    id: 'earbuds-5',
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
    id: 'earbuds-6',
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
    id: 'earbuds-7',
    iconName: "Droplets",
    emoji: "💧",
    title: "Sweat & Water Resistance",
    description: "IPX7 rating ensures durability for workouts and outdoor use.",
    color: "border-sky-500/30 bg-sky-500/5",
    glowColor: "bg-sky-500",
    additionalInfo: "Nano-coating technology provides complete protection against sweat and water immersion up to 1 meter for 30 minutes.",
    category: "earbuds"
  },
  {
    id: 'earbuds-8',
    iconName: "Heart",
    emoji: "❤️",
    title: "Health Monitoring",
    description: "Track heart rate and activity metrics during workouts.",
    color: "border-red-500/30 bg-red-500/5",
    glowColor: "bg-red-500",
    additionalInfo: "Precision sensors monitor heart rate, steps, calories burned and can detect irregular heartbeat patterns for improved fitness tracking.",
    category: "earbuds"
  },
  {
    id: 'earbuds-9',
    iconName: "Shield",
    emoji: "🔒",
    title: "Enhanced Security",
    description: "Biometric ear mapping ensures only you can use your earbuds.",
    color: "border-amber-500/30 bg-amber-500/5",
    glowColor: "bg-amber-500",
    additionalInfo: "Proprietary ear canal mapping creates a unique biometric signature that prevents unauthorized use and protects your personal audio data.",
    category: "earbuds"
  }
];
