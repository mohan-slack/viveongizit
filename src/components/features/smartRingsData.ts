
import { FeatureProps } from './FeatureTypes';

export const getSmartRingsData = (): Omit<FeatureProps, 'index'>[] => [
  {
    iconName: "Heart",
    emoji: "❤️‍🔥",
    title: "Advanced Health Monitoring",
    description: "Track heart rate, blood oxygen, sleep, and stress levels.",
    color: "border-red-500/30 bg-red-500/5",
    glowColor: "bg-red-500",
    additionalInfo: "Clinical-grade sensors provide continuous monitoring with 99.8% accuracy compared to medical devices.",
    category: "smartrings"
  },
  {
    iconName: "Navigation",
    emoji: "📍",
    title: "GPS Tracking",
    description: "Built-in GPS helps monitor location-based activities without a phone.",
    color: "border-green-400/30 bg-green-400/5",
    glowColor: "bg-green-400",
    additionalInfo: "Ultra-efficient GPS chipset provides accurate positioning while extending battery life by 60% compared to previous generations.",
    category: "smartrings"
  },
  {
    iconName: "Hand",
    emoji: "🤟",
    title: "Gesture Control",
    description: "Use intuitive finger gestures to control smart devices effortlessly.",
    color: "border-amber-500/30 bg-amber-500/5",
    glowColor: "bg-amber-500",
    additionalInfo: "Advanced motion sensors recognize 28 distinct gestures that can be customized to control your entire smart home ecosystem.",
    category: "smartrings"
  },
  {
    iconName: "CreditCard",
    emoji: "💳",
    title: "NFC Payments",
    description: "Make quick, contactless transactions with just a tap.",
    color: "border-indigo-500/30 bg-indigo-500/5",
    glowColor: "bg-indigo-500",
    additionalInfo: "Secure element technology meets highest banking standards with support for Visa, Mastercard, and major digital wallet platforms.",
    category: "smartrings"
  },
  {
    iconName: "Bell",
    emoji: "🔔",
    title: "Haptic Notifications",
    description: "Feel subtle vibrations for messages, calls, and alerts.",
    color: "border-fuchsia-500/30 bg-fuchsia-500/5",
    glowColor: "bg-fuchsia-500",
    additionalInfo: "Customizable vibration patterns for different notification types with five intensity levels for personalized alerts.",
    category: "smartrings"
  },
  {
    iconName: "Brain",
    emoji: "🧠",
    title: "AI-Based Activity Insights",
    description: "Smart analytics track health trends and suggest lifestyle improvements.",
    color: "border-teal-500/30 bg-teal-500/5",
    glowColor: "bg-teal-500",
    additionalInfo: "On-device machine learning provides privacy-focused insights by analyzing patterns without sending your data to the cloud.",
    category: "smartrings"
  },
  {
    iconName: "Shield",
    emoji: "🔐",
    title: "Ultra-Secure Encryption",
    description: "Military-grade security ensures safe transactions and health data privacy.",
    color: "border-sky-400/30 bg-sky-400/5",
    glowColor: "bg-sky-400",
    additionalInfo: "256-bit AES encryption with biometric authentication ensures your data remains completely private and secure.",
    category: "smartrings"
  }
];
