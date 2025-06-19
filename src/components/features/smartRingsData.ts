
import { FeatureProps } from './FeatureTypes';

export const getSmartRingsData = (): Omit<FeatureProps, 'index'>[] => [
  {
    id: 'smartring-1',
    iconName: "Hand",
    emoji: "👆",
    title: "Smart Touch Control",
    description: "Effortless control with intuitive touch gestures for seamless device interaction",
    color: "border-viveon-red/30 bg-viveon-red/5",
    glowColor: "bg-viveon-red",
    additionalInfo: "Navigate your devices with simple taps and swipes directly on the ring surface",
    category: "smartrings",
    backgroundImage: "/lovable-uploads/f22aa84c-eee5-4a54-b16e-ae116d8ae23a.png"
  },
  {
    id: 'smartring-2',
    iconName: "Activity",
    emoji: "📊",
    title: "Body Fat Ratio",
    description: "Precision body composition analysis for comprehensive health insights",
    color: "border-viveon-neon-blue/30 bg-viveon-neon-blue/5",
    glowColor: "bg-viveon-neon-blue",
    additionalInfo: "Advanced bioimpedance sensors provide accurate body fat percentage measurements",
    category: "smartrings",
    backgroundImage: "/lovable-uploads/6eb376f4-57db-4739-8ddd-1ff2837821ff.png"
  },
  {
    id: 'smartring-3',
    iconName: "Moon",
    emoji: "🌙",
    title: "Sleep Management",
    description: "Intelligent sleep tracking with personalized optimization recommendations",
    color: "border-viveon-neon-purple/30 bg-viveon-neon-purple/5",
    glowColor: "bg-viveon-neon-purple",
    additionalInfo: "Monitor sleep stages, quality, and receive AI-powered improvement suggestions",
    category: "smartrings",
    backgroundImage: "/lovable-uploads/6e9faf63-0780-4d01-9f6d-72b21989cf62.png"
  },
  {
    id: 'smartring-4',
    iconName: "Heart",
    emoji: "❤️",
    title: "ECG Measurement",
    description: "Medical-grade heart rhythm monitoring for cardiovascular health tracking",
    color: "border-green-500/30 bg-green-500/5",
    glowColor: "bg-green-500",
    additionalInfo: "Real-time electrocardiogram readings with abnormality detection alerts",
    category: "smartrings",
    backgroundImage: "/lovable-uploads/14ee2b65-dcc1-46a9-9125-5fbac6389a27.png"
  },
  {
    id: 'smartring-5',
    iconName: "Brain",
    emoji: "🧠",
    title: "Emotion Stress",
    description: "Advanced stress level monitoring with mindfulness guidance",
    color: "border-purple-500/30 bg-purple-500/5",
    glowColor: "bg-purple-500",
    additionalInfo: "Heart rate variability analysis provides stress insights and relaxation techniques",
    category: "smartrings",
    backgroundImage: "/lovable-uploads/9ec12441-23f9-477b-aa64-89c05a1b431f.png"
  },
  {
    id: 'smartring-6',
    iconName: "Droplets",
    emoji: "🩸",
    title: "Non-invasive Blood Glucose Trends",
    description: "Revolutionary glucose monitoring without finger pricks",
    color: "border-blue-500/30 bg-blue-500/5", 
    glowColor: "bg-blue-500",
    additionalInfo: "Optical sensors track glucose trends continuously throughout the day",
    category: "smartrings",
    backgroundImage: "/lovable-uploads/a0c36f68-ac13-4dbb-9c43-043f1beb9ce9.png"
  },
  {
    id: 'smartring-7',
    iconName: "Thermometer",
    emoji: "🌡️",
    title: "Body Temperature",
    description: "Continuous temperature monitoring for health and wellness tracking",
    color: "border-sky-500/30 bg-sky-500/5",
    glowColor: "bg-sky-500",
    additionalInfo: "Precise temperature sensors detect fever and track circadian rhythms",
    category: "smartrings",
    backgroundImage: "/lovable-uploads/97c43e61-fcf5-4f9e-9cc2-df81bb60a6d8.png"
  },
  {
    id: 'smartring-8',
    iconName: "CreditCard",
    emoji: "💳",
    title: "NFC Payment",
    description: "Secure contactless payments with a simple wave of your hand",
    color: "border-red-500/30 bg-red-500/5",
    glowColor: "bg-red-500",
    additionalInfo: "Bank-grade encryption ensures safe transactions at millions of locations worldwide",
    category: "smartrings",
    backgroundImage: "/lovable-uploads/98fd856e-b87b-4fa7-ac5c-6c593c54b448.png"
  },
  {
    id: 'smartring-9',
    iconName: "Phone",
    emoji: "📞",
    title: "Calling Vibration Alerts",
    description: "Discreet call notifications through gentle haptic feedback",
    color: "border-amber-500/30 bg-amber-500/5",
    glowColor: "bg-amber-500",
    additionalInfo: "Customizable vibration patterns for different contacts and notification types",
    category: "smartrings",
    backgroundImage: "/lovable-uploads/f694a5a5-6ed5-41b4-abbf-58cbbfb280c2.png"
  },
  {
    id: 'smartring-10',
    iconName: "AlertTriangle",
    emoji: "🚨",
    title: "One-key Trigger SOS",
    description: "Emergency alert system with instant location sharing and contact notification",
    color: "border-orange-500/30 bg-orange-500/5",
    glowColor: "bg-orange-500",
    additionalInfo: "Quick triple-tap sends GPS location and emergency message to designated contacts",
    category: "smartrings",
    backgroundImage: "/lovable-uploads/ac364875-2d34-4643-a84d-bc85cdf5decd.png"
  }
];
