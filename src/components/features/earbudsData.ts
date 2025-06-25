import { FeatureProps } from './FeatureTypes';

export const getEarbudsData = (): Omit<FeatureProps, 'index'>[] => [
  {
    id: 'earbuds-1',
    iconName: "Zap",
    emoji: "⚡",
    title: "Quantum Charge Pro",
    description: "15-min quick charge delivers 8hr playback via graphene-cell technology",
    color: "border-viveon-red/30 bg-viveon-red/5",
    glowColor: "bg-viveon-red",
    additionalInfo: "Dual-path charging with thermal regulation achieves 0-80% in 12 minutes (Qi2 wireless compatible)",
    category: "earbuds"
  },
  {
    id: 'earbuds-2',
    iconName: "Headphones",
    emoji: "🎧",
    title: "Adaptive ANC 360°",
    description: "40dB hybrid noise cancellation with environmental calibration",
    color: "border-viveon-neon-blue/30 bg-viveon-neon-blue/5",
    glowColor: "bg-viveon-neon-blue",
    additionalInfo: "6-mic array with neural processor adapts to 12 noise profiles (urban/aircraft/office etc.)",
    category: "earbuds"
  },
  {
    id: 'earbuds-3',
    iconName: "Wifi",
    emoji: "📡",
    title: "ZeroLatency Link 5.4",
    description: "Bluetooth 5.4+ with 78kHz HD audio support",
    color: "border-viveon-neon-purple/30 bg-viveon-neon-purple/5",
    glowColor: "bg-viveon-neon-purple",
    additionalInfo: "Simultaneous multipoint connectivity (3 devices) with 25ms gaming mode activation",
    category: "earbuds"
  },
  {
    id: 'earbuds-4',
    iconName: "Battery",
    emoji: "🔋",
    title: "HyperCore Power Cell",
    description: "42hr total runtime with case (9hr standalone)",
    color: "border-green-500/30 bg-green-500/5",
    glowColor: "bg-green-500",
    additionalInfo: "Smart power allocation prioritizes frequently used earbud (L/R balance tracking)",
    category: "earbuds"
  },
  {
    id: 'earbuds-5',
    iconName: "Music",
    emoji: "🏟️",
    title: "Cinematic Spatial Sound",
    description: "Dolby Atmos with dynamic head tracking",
    color: "border-purple-500/30 bg-purple-500/5",
    glowColor: "bg-purple-500",
    additionalInfo: "9-axis gyroscope enables 360° soundstage positioning (±3° accuracy)",
    category: "earbuds"
  },
  {
    id: 'earbuds-6',
    iconName: "Mic",
    emoji: "🎙️",
    title: "AI Voice Isolation",
    description: "Beamforming mics with wind noise rejection",
    color: "border-blue-500/30 bg-blue-500/5", 
    glowColor: "bg-blue-500",
    additionalInfo: "Real-time voice extraction works in 60dB+ environments (construction sites/public transit)",
    category: "earbuds"
  },
  {
    id: 'earbuds-7',
    iconName: "Droplets",
    emoji: "💧",
    title: "NanoGuard IPX7",
    description: "Military-grade moisture protection",
    color: "border-sky-500/30 bg-sky-500/5",
    glowColor: "bg-sky-500",
    additionalInfo: "Conformal coating protects internal components from salt spray and chlorine exposure",
    category: "earbuds"
  },
  {
    id: 'earbuds-8',
    iconName: "Heart",
    emoji: "❤️",
    title: "Translation AI ClearCall",
    description: "Real-time voice isolation for crystal-clear calls",
    color: "border-red-500/30 bg-red-500/5",
    glowColor: "bg-red-500",
    additionalInfo: "Neural network processes 50+ voice samples per second",
    category: "earbuds"
  },
  {
    id: 'earbuds-9',
    iconName: "Shield",
    emoji: "🔒",
    title: "SecurePair Authentication",
    description: "Military-grade encryption for audio streams",
    color: "border-amber-500/30 bg-amber-500/5",
    glowColor: "bg-amber-500",
    additionalInfo: "Biometric pairing requires both device authentication and ear canal recognition",
    category: "earbuds"
  }
];
