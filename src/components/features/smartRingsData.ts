
import { FeatureProps } from './FeatureTypes';

export const getSmartRingsData = (): Omit<FeatureProps, 'index'>[] => [
  {
    id: 'ring-1',
    iconName: "Hand",
    emoji: "👆",
    title: "Smart Touch Control",
    description: "Control your devices with simple finger gestures and taps",
    color: "border-blue-500/30 bg-blue-500/5",
    glowColor: "bg-blue-500",
    additionalInfo: "Navigate your phone, control music, answer calls, and manage smart home devices with intuitive touch controls on your ring.",
    category: "smartrings"
  },
  {
    id: 'ring-2',
    iconName: "Activity",
    emoji: "📊",
    title: "Body Fat Ratio",
    description: "Track your body composition with precision sensors",
    color: "border-green-500/30 bg-green-500/5",
    glowColor: "bg-green-500",
    additionalInfo: "Advanced bioelectrical impedance analysis provides accurate body fat percentage monitoring throughout the day.",
    category: "smartrings"
  },
  {
    id: 'ring-3',
    iconName: "Moon",
    emoji: "😴",
    title: "Sleep Management",
    description: "Optimize your sleep with intelligent sleep tracking",
    color: "border-indigo-500/30 bg-indigo-500/5",
    glowColor: "bg-indigo-500",
    additionalInfo: "Monitor sleep stages, quality, and duration while receiving personalized recommendations for better rest.",
    category: "smartrings"
  },
  {
    id: 'ring-4',
    iconName: "Heart",
    emoji: "❤️",
    title: "ECG Measurement",
    description: "Medical-grade heart rhythm monitoring on your finger",
    color: "border-red-500/30 bg-red-500/5",
    glowColor: "bg-red-500",
    additionalInfo: "Detect irregular heart rhythms and monitor cardiovascular health with clinical-grade ECG sensors.",
    category: "smartrings"
  },
  {
    id: 'ring-5',
    iconName: "Brain",
    emoji: "🧠",
    title: "Emotion Stress",
    description: "Monitor stress levels and emotional well-being",
    color: "border-purple-500/30 bg-purple-500/5",
    glowColor: "bg-purple-500",
    additionalInfo: "Track stress patterns and receive guided breathing exercises to maintain emotional balance throughout your day.",
    category: "smartrings"
  },
  {
    id: 'ring-6',
    iconName: "Droplet",
    emoji: "🩸",
    title: "Blood Glucose Trends",
    description: "Non-invasive glucose monitoring for better health",
    color: "border-orange-500/30 bg-orange-500/5",
    glowColor: "bg-orange-500",
    additionalInfo: "Track glucose trends without finger pricks, helping you make informed decisions about diet and lifestyle.",
    category: "smartrings"
  },
  {
    id: 'ring-7',
    iconName: "Thermometer",
    emoji: "🌡️",
    title: "Body Temperature",
    description: "Continuous temperature monitoring for health insights",
    color: "border-yellow-500/30 bg-yellow-500/5",
    glowColor: "bg-yellow-500",
    additionalInfo: "Monitor body temperature changes to track illness, fertility cycles, and overall health patterns.",
    category: "smartrings"
  },
  {
    id: 'ring-8',
    iconName: "CreditCard",
    emoji: "💳",
    title: "NFC Payment",
    description: "Secure contactless payments with a simple tap",
    color: "border-teal-500/30 bg-teal-500/5",
    glowColor: "bg-teal-500",
    additionalInfo: "Make secure payments anywhere NFC is accepted. Your ring works with major payment systems and digital wallets.",
    category: "smartrings"
  },
  {
    id: 'ring-9',
    iconName: "Phone",
    emoji: "📞",
    title: "Calling Vibration Alerts",
    description: "Never miss important calls with smart notifications",
    color: "border-cyan-500/30 bg-cyan-500/5",
    glowColor: "bg-cyan-500",
    additionalInfo: "Receive discreet vibration alerts for calls, messages, and app notifications directly on your finger.",
    category: "smartrings"
  },
  {
    id: 'ring-10',
    iconName: "AlertTriangle",
    emoji: "🆘",
    title: "One-key Trigger SOS",
    description: "Emergency assistance at your fingertips",
    color: "border-red-600/30 bg-red-600/5",
    glowColor: "bg-red-600",
    additionalInfo: "Instantly send emergency alerts with your location to designated contacts or emergency services with a simple gesture.",
    category: "smartrings"
  }
];
