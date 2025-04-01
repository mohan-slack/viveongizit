
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DynamicBackground from '@/components/DynamicBackground';
import InteractiveFeatureShowcase from '@/components/features/InteractiveFeatureShowcase';

// Combine only the 6 required features from both product types
const featuresData = [
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
    iconName: "Music",
    emoji: "🏟️",
    title: "3D Spatial Audio",
    description: "Cinematic surround sound with real-time head tracking.",
    color: "border-purple-500/30 bg-purple-500/5",
    glowColor: "bg-purple-500",
    additionalInfo: "Dynamic head tracking adjusts sound fields in real-time, creating an immersive audio environment that adapts to your movement.",
    category: "earbuds"
  },
  {
    iconName: "Heart",
    emoji: "❤️",
    title: "Advanced Health Monitoring",
    description: "Track heart rate, blood oxygen, sleep, and stress levels.",
    color: "border-red-500/30 bg-red-500/5",
    glowColor: "bg-red-500",
    additionalInfo: "Clinical-grade sensors provide continuous monitoring with 99.8% accuracy compared to medical devices.",
    category: "smartrings"
  },
  {
    iconName: "Hand",
    emoji: "🤟",
    title: "Gesture Control",
    description: "Use finger movements to control devices without touching them.",
    color: "border-amber-500/30 bg-amber-500/5",
    glowColor: "bg-amber-500",
    additionalInfo: "Advanced motion sensors recognize 28 distinct gestures that can be customized to control your entire smart home ecosystem.",
    category: "smartrings"
  },
  {
    iconName: "CreditCard",
    emoji: "💳",
    title: "NFC Payments",
    description: "Make contactless payments securely with just a tap.",
    color: "border-indigo-500/30 bg-indigo-500/5",
    glowColor: "bg-indigo-500",
    additionalInfo: "Secure element technology meets highest banking standards with support for Visa, Mastercard, and major digital wallet platforms.",
    category: "smartrings"
  }
];

const Features = () => {
  return (
    <div className="min-h-screen bg-viveon-darker text-white relative overflow-hidden">
      <DynamicBackground />
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue bg-clip-text text-transparent">
            Explore Our Features
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the future of wearable technology with our interactive feature showcase
          </p>
        </div>
        
        <div className="mb-24">
          <InteractiveFeatureShowcase features={featuresData} maxVisible={6} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Features;
