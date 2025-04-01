import { FeatureProps } from './FeatureTypes';

export const getEarbudsData = (): Omit<FeatureProps, 'index'>[] => [
  {
    id: 'earbuds-1',
    iconName: "BatteryCharging",
    emoji: "⚡",
    title: "Quantum Charge Pro",
    description: "15-min charge delivers 8hrs playback with LED power matrix display",
    color: "border-amber-500/30 bg-gradient-to-br from-amber-900/10 to-amber-500/5",
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
    description: "60dB noise reduction with adaptive soundscapes",
    color: "border-indigo-500/30 bg-gradient-to-tr from-slate-900/20 to-indigo-500/10",
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
    description: "Bluetooth 5.4+ with 10ms gaming mode & multipoint pairing",
    color: "border-sky-500/30 bg-gradient-to-b from-sky-900/15 to-sky-500/10",
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
    description: "8.1 virtual surround with head-tracking gyroscope",
    color: "border-purple-500/30 bg-gradient-to-bl from-purple-900/20 to-purple-500/10",
    image: "/assets/features/spatial-audio-demo.webp",
    productAngle: "front-illuminated",
    additionalInfo: "Dolby Atmos integration creates theater-grade audio positioning",
    category: "earbuds"
  },
  {
    id: 'earbuds-6',
    iconName: "Wind",
    emoji: "🌪️",
    title: "AeroShield Mics",
    description: "AI-powered wind noise cancellation up to 70km/h",
    color: "border-cyan-500/30 bg-gradient-to-tr from-cyan-900/15 to-cyan-500/10",
    image: "/assets/features/wind-reduction.jpg",
    productAngle: "outdoor-angle",
    additionalInfo: "Dual-layer mesh system with aerodynamic mic housing design",
    category: "earbuds"
  },
  {
    id: 'earbuds-7',
    iconName: "Music",
    emoji: "🎛️",
    title: "Studio EQ Presets",
    description: "10+ professional audio engineer-tuned profiles",
    color: "border-violet-500/30 bg-gradient-to-br from-violet-900/20 to-violet-500/10",
    image: "/assets/features/eq-interface.png",
    productAngle: "studio-lighting",
    additionalInfo: "Parametric equalizer with frequency range from 20Hz-60kHz",
    category: "earbuds"
  },
  {
    id: 'earbuds-8',
    iconName: "Voice",
    emoji: "🎙️",
    title: "Translation AI with ClearCall",
    description: "Real-time voice isolation for crystal-clear calls",
    color: "border-rose-500/30 bg-gradient-to-tl from-rose-900/15 to-rose-500/10",
    image: "/assets/features/voice-processing.jpg",
    productAngle: "presenter-view",
    additionalInfo: "Neural network processes 50+ voice samples per second",
    category: "earbuds"
  },
  {
    id: 'earbuds-9',
    iconName: "Ear",
    emoji: "👂",
    title: "FitCheck Pro",
    description: "Real-time seal quality monitoring with haptic feedback",
    color: "border-teal-500/30 bg-gradient-to-bl from-teal-900/15 to-teal-500/10",
    image: "/assets/features/fit-detection.gif",
    productAngle: "angled-insertion",
    additionalInfo: "Pressure sensors optimize ANC performance based on fit quality",
    category: "earbuds"
  }
];
