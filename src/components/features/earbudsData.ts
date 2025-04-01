import { FeatureProps } from './FeatureTypes';

export const getEarbudsData = (): Omit<FeatureProps, 'index'>[] => [
  {
    id: 'earbuds-1',
    iconName: "BatteryCharging",
    emoji: "⚡",
    title: "Quantum Charge Pro",
    description: "15-min charge delivers 8hrs playback with LED power matrix display",
    color: "border-amber-500/30 bg-gradient-to-br from-amber-900/10 to-amber-500/5",
    glowColor: "bg-gradient-to-r from-amber-400 to-rose-600",
    image: "/assets/features/charge-animation.gif",
    productAngle: "left-45-degree",
    additionalInfo: "Dual-layer graphene battery with thermal visualization in companion app",
    category: "earbuds"
  },
  {
    id: 'earbuds-2',
    iconName: "Waveform",
    emoji: "🌀",
    title: "Hyper ANC 2.0",
    description: "40dB noise reduction with adaptive soundscapes",
    color: "border-indigo-500/30 bg-gradient-to-tr from-slate-900/20 to-indigo-500/10",
    glowColor: "bg-[radial-gradient(circle_at_center,#4f46e5,#9333ea)]",
    image: "/assets/features/anc-interface.png",
    productAngle: "top-down",
    additionalInfo: "6-mic beamforming array creates dynamic quiet zones in crowded spaces",
    category: "earbuds"
  },
  {
    id: 'earbuds-3',
    iconName: "BluetoothConnected",
    emoji: "📶",
    title: "ZeroLatency Link",
    description: "Bluetooth 5.3 with 12ms gaming mode & multipoint pairing",
    color: "border-sky-500/30 bg-gradient-to-b from-sky-900/15 to-sky-500/10",
    glowColor: "bg-[conic-gradient(at_top_left,#0ea5e9,#6366f1)]",
    image: "/assets/features/connection-diagram.svg",
    productAngle: "right-profile",
    additionalInfo: "Simultaneous dual-device streaming with automatic source switching",
    category: "earbuds"
  },
  {
    id: 'earbuds-4',
    iconName: "Biohazard",
    emoji: "🦠",
    title: "NanoGuard Coating",
    description: "IP58 certified with antimicrobial silver ion treatment",
    color: "border-emerald-500/30 bg-gradient-to-r from-emerald-900/10 to-emerald-500/5",
    glowColor: "bg-[linear-gradient(45deg,#10b981,#3b82f6)]",
    image: "/assets/features/water-resistance.jpg",
    productAngle: "splash-perspective",
    additionalInfo: "Self-cleaning drivers maintain audio clarity through intense workouts",
    category: "earbuds"
  },
  {
    id: 'earbuds-5',
    iconName: "Globe",
    emoji: "🌐",
    title: "360° Soundstage",
    description: "7.1 virtual surround with head-tracking gyroscope",
    color: "border-purple-500/30 bg-gradient-to-bl from-purple-900/20 to-purple-500/10",
    glowColor: "bg-[radial-gradient(circle_at_bottom_right,#8b5cf6,#ec4899)]",
    image: "/assets/features/spatial-audio-demo.webp",
    productAngle: "front-illuminated",
    additionalInfo: "Dolby Atmos integration creates theater-grade audio positioning",
    category: "earbuds"
  },
  {
    id: 'earbuds-6',
    iconName: "Ear",
    emoji: "👂",
    title: "EarID Biometrics",
    description: "3D ear mapping for personalized audio profiles",
    color: "border-rose-500/30 bg-gradient-to-tl from-rose-900/15 to-rose-500/10",
    glowColor: "bg-[conic-gradient(at_top_right,#f43f5e,#d946ef)]",
    image: "/assets/features/biometric-scan.gif",
    productAngle: "angled-insertion",
    additionalInfo: "Infrared sensors detect unique ear canal shape for perfect fit detection",
    category: "earbuds"
  }
];
