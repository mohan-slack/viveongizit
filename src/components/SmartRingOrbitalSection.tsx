import React from 'react';
import { Activity, Heart, Moon, Thermometer, Wind, Smartphone } from 'lucide-react';
import RadialOrbitalTimeline from './ui/radial-orbital-timeline';
import ringCenterImage from '@/assets/ring-center-orbital.png';

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

const SmartRingOrbitalSection: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      title: "Heart Rate",
      date: "24/7",
      content: "Continuous heart rate monitoring with medical-grade accuracy. Track your cardiovascular health throughout the day and night.",
      category: "Health",
      icon: Heart,
      relatedIds: [2, 4],
      status: "completed",
      energy: 100,
    },
    {
      id: 2,
      title: "Activity Tracking",
      date: "Real-time",
      content: "Monitor steps, calories, distance, and exercise intensity. Automatically detect different activity modes.",
      category: "Fitness",
      icon: Activity,
      relatedIds: [1, 3],
      status: "completed",
      energy: 95,
    },
    {
      id: 3,
      title: "Sleep Analysis",
      date: "Nightly",
      content: "Track REM, Deep, Light & Awake stages. Get personalized insights to improve sleep quality.",
      category: "Sleep",
      icon: Moon,
      relatedIds: [2, 4],
      status: "completed",
      energy: 90,
    },
    {
      id: 4,
      title: "Temperature",
      date: "Continuous",
      content: "Advanced body temperature monitoring to track wellness changes and detect early signs of illness.",
      category: "Health",
      icon: Thermometer,
      relatedIds: [1, 5],
      status: "completed",
      energy: 85,
    },
    {
      id: 5,
      title: "SpO₂",
      date: "On-demand",
      content: "Blood oxygen saturation monitoring to ensure optimal respiratory health and performance.",
      category: "Health",
      icon: Wind,
      relatedIds: [4, 6],
      status: "completed",
      energy: 88,
    },
    {
      id: 6,
      title: "Smart Features",
      date: "Always",
      content: "NFC payments, smart notifications, music control, and SOS emergency alerts in a waterproof design.",
      category: "Smart",
      icon: Smartphone,
      relatedIds: [5],
      status: "completed",
      energy: 92,
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-black py-12 md:py-16">
      <RadialOrbitalTimeline timelineData={timelineData} centerImage={ringCenterImage} />
    </div>
  );
};

export default SmartRingOrbitalSection;
