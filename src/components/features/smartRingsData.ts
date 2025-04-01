import { FeatureProps } from './FeatureTypes';

export const getSmartRingsData = (): Omit<FeatureProps, 'index'>[] => [
  {
    id: 'ring-1',
    iconName: "Heart",
    emoji: "❤️‍🔥",
    title: "BioMetric Pulse 360°",
    description: "7-lead ECG monitoring with vascular analysis (PPG/BCG)",
    color: "border-red-500/30 bg-red-500/5",
    glowColor: "bg-red-500",
    additionalInfo: "Clinical-grade sensors provide continuous monitoring with 99.8% accuracy compared to medical devices.",
    category: "smartrings"
  },
  {
    id: 'ring-2',
    iconName: "Navigation",
    emoji: "📍",
    title: "Galileo GPS Fusion",
    description: "Dual-band L1+L5 positioning with 30cm accuracy",
    color: "border-green-400/30 bg-green-400/5",
    glowColor: "bg-green-400",
    additionalInfo: "Ultra-efficient GPS chipset provides accurate positioning while extending battery life by 60% compared to previous generations.",
    category: "smartrings"
  },
  {
    id: 'ring-3',
    iconName: "Hand",
    emoji: "🤟",
    title: "NeuroGesture Interface",
    description: "EMG-based motion recognition with haptic feedback",
    color: "border-amber-500/30 bg-amber-500/5",
    glowColor: "bg-amber-500",
    additionalInfo: "Advanced motion sensors recognize 28 distinct gestures that can be customized to control your entire smart home ecosystem.",
    category: "smartrings"
  },
  {
    id: 'ring-4',
    iconName: "CreditCard",
    emoji: "💳",
    title: "CryptoSecure Pay",
    description: "NFC/RFID multi-protocol transaction engine",
    color: "border-indigo-500/30 bg-indigo-500/5",
    glowColor: "bg-indigo-500",
    additionalInfo: "Secure element technology meets highest banking standards with support for Visa, Mastercard, and major digital wallet platforms.",
    category: "smartrings"
  },
  {
    id: 'ring-5',
    iconName: "Bell",
    emoji: "🔔",
    title: "Quantum Haptics Pro",
    description: "Multi-frequency tactile feedback system (50-250Hz)",
    color: "border-fuchsia-500/30 bg-fuchsia-500/5",
    glowColor: "bg-fuchsia-500",
    additionalInfo: "Customizable vibration patterns for different notification types with five intensity levels for personalized alerts.",
    category: "smartrings"
  },
  {
    id: 'ring-6',
    iconName: "Brain",
    emoji: "🧠",
    title: "DeepHealth Analytics",
    description: "ML-powered biomarker correlation engine",
    color: "border-teal-500/30 bg-teal-500/5",
    glowColor: "bg-teal-500",
    additionalInfo: "On-device machine learning provides privacy-focused insights by analyzing patterns without sending your data to the cloud.",
    category: "smartrings"
  },
  {
    id: 'ring-7',
    iconName: "Shield",
    emoji: "🔐",
    title: "TitanVault Security",
    description: "Post-quantum encryption core (CRYSTALS-Kyber)",
    color: "border-sky-400/30 bg-sky-400/5",
    glowColor: "bg-sky-400",
    additionalInfo: "256-bit AES encryption with biometric authentication ensures your data remains completely private and secure.",
    category: "smartrings"
  },
  {
    id: 'ring-8',
    iconName: "Hand",
    emoji: "👆",
    title: "OmniAuth Key",
    description: "FIDO2/WebAuthn compliant security token",
    color: "border-purple-400/30 bg-purple-400/5",
    glowColor: "bg-purple-400",
    additionalInfo: "Acts as a FIDO2-compliant security key, allowing you to securely log into accounts and devices with a simple tap of your finger.",
    category: "smartrings"
  },
  {
    id: 'ring-9',
    iconName: "Battery",
    emoji: "🔋",
    title: "PowerCore Infinity",
    description: "Graphene-hybrid cell with 500-cycle endurance",
    color: "border-green-500/30 bg-green-500/5",
    glowColor: "bg-green-500",
    additionalInfo: "Energy-efficient components and intelligent power management optimize battery usage based on your daily patterns and activities.",
    category: "smartrings"
  }
];
