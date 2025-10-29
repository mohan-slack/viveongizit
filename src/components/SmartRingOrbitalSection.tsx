import { Heart, Activity, Moon, Thermometer, Droplets, Smartphone } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import ringCenterImage from "@/assets/ring-center-orbital.png";
import { motion } from "framer-motion";

const timelineData = [
  {
    id: 1,
    title: "Heart Rate",
    date: "24/7",
    content: "Continuous heart rate monitoring with real-time alerts for abnormal patterns. Track your cardiovascular health throughout the day.",
    category: "Health",
    icon: Heart,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Activity Tracking",
    date: "Daily",
    content: "Automatic activity detection including steps, distance, calories burned, and workout intensity monitoring.",
    category: "Fitness",
    icon: Activity,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Sleep Analysis",
    date: "Nightly",
    content: "Advanced sleep tracking with REM, deep, and light sleep stages. Get personalized sleep insights and recommendations.",
    category: "Wellness",
    icon: Moon,
    relatedIds: [1, 5],
    status: "in-progress" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "Temperature",
    date: "Continuous",
    content: "Body temperature monitoring to track health trends and detect potential illness early.",
    category: "Health",
    icon: Thermometer,
    relatedIds: [2, 6],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "SpO₂ Monitor",
    date: "On-Demand",
    content: "Blood oxygen saturation tracking for respiratory health monitoring and altitude adaptation.",
    category: "Health",
    icon: Droplets,
    relatedIds: [3, 1],
    status: "completed" as const,
    energy: 88,
  },
  {
    id: 6,
    title: "Smart Features",
    date: "Always On",
    content: "Notifications, NFC payments, and seamless smartphone integration for everyday convenience.",
    category: "Smart",
    icon: Smartphone,
    relatedIds: [4],
    status: "pending" as const,
    energy: 75,
  },
];

const SmartRingOrbitalSection = () => {
  return (
    <section id="ring-features" className="relative w-full bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 container mx-auto px-4 pt-16 md:pt-24 text-center"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Core <span className="text-gradient">Features</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12">
          Explore the advanced health monitoring capabilities of our smart ring. Click on any feature to learn more about how it can enhance your wellness journey.
        </p>
      </motion.div>

      {/* Orbital Timeline */}
      <div className="relative z-10">
        <RadialOrbitalTimeline timelineData={timelineData} centerImage={ringCenterImage} />
      </div>

      {/* Bottom spacing */}
      <div className="h-16 md:h-24" />
    </section>
  );
};

export default SmartRingOrbitalSection;
