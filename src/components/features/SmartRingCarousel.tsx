import { FeatureCarousel, type ImageSet, type Step } from "@/components/ui/animated-feature-carousel";
import ringSensorTech from '@/assets/ring-sensor-tech.png';
import ringSleepMonitoring from '@/assets/ring-sleep-monitoring.png';
import ringHeartMonitoring from '@/assets/ring-heart-monitoring.png';
import ringHealthTracking from '@/assets/ring-health-tracking.png';
import ringActivityTracking from '@/assets/ring-activity-tracking.png';
import ringSleekDesign from '@/assets/ring-sleek-design.png';

const smartRingSteps: readonly Step[] = [
  {
    id: "1",
    name: "Health Monitoring",
    title: "Advanced Biosensor Technology",
    description: "Monitor your heart rate, blood oxygen levels, and body temperature with medical-grade accuracy. Multiple sensors work together to give you comprehensive health insights 24/7.",
  },
  {
    id: "2",
    name: "Sleep Tracking",
    title: "Optimize Your Sleep Quality",
    description: "Track REM, Deep, Light & Awake stages with precision. Get personalized insights and recommendations to improve your sleep efficiency and wake up refreshed every morning.",
  },
  {
    id: "3",
    name: "Activity & Fitness",
    title: "Intelligent Activity Monitoring",
    description: "Record daily steps, calories, distance, time and intensity of activity. Automatically detect different exercise modes and monitor your movements around the clock.",
  },
  {
    id: "4",
    name: "Smart Features",
    title: "Stay Connected & Protected",
    description: "Receive smart notifications, control your music, make contactless payments with NFC, and stay protected with SOS emergency alerts. All in a sleek, waterproof design.",
  },
];

export default function SmartRingCarousel() {
  const images: ImageSet = {
    alt: "HUX Smart Ring Features",
    step1img1: ringSensorTech,
    step1img2: ringHeartMonitoring,
    step2img1: ringSleepMonitoring,
    step2img2: ringHealthTracking,
    step3img: ringActivityTracking,
    step4img: ringSleekDesign,
  };

  return (
    <div className="w-full font-sans bg-background">
      <FeatureCarousel image={images} steps={smartRingSteps} />
    </div>
  );
}
