import { FeatureCarousel, type ImageSet, type Step } from "@/components/ui/animated-feature-carousel";
import carouselHealthSensor from '@/assets/carousel-health-sensor.jpg';
import carouselHeartMonitor from '@/assets/carousel-heart-monitor.jpg';
import carouselSleepTracking from '@/assets/carousel-sleep-tracking.jpg';
import carouselSleepData from '@/assets/carousel-sleep-data.jpg';
import carouselActivityFitness from '@/assets/carousel-activity-fitness.jpg';
import carouselSmartFeatures from '@/assets/carousel-smart-features.jpg';

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
    step1img1: carouselHealthSensor,
    step1img2: carouselHeartMonitor,
    step2img1: carouselSleepTracking,
    step2img2: carouselSleepData,
    step3img: carouselActivityFitness,
    step4img: carouselSmartFeatures,
  };

  return (
    <div className="w-full font-sans bg-background">
      <FeatureCarousel image={images} steps={smartRingSteps} />
    </div>
  );
}
