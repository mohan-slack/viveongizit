import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, Moon, Activity, Thermometer, Smile } from "lucide-react";

export default function FeaturedSmartRingDemoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const ringFeatures = [
    {
      title: "Sleep Tracking",
      subtitle: "Understand your sleep cycles and recovery patterns with nightly breakdowns and sleep scores.",
      icon: <Moon className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Heart Rate Variability",
      subtitle: "Get insights into stress, recovery, and readiness with advanced HRV metrics throughout the day.",
      icon: <Activity className="w-5 h-5 text-pink-400" />
    },
    {
      title: "Body Temperature",
      subtitle: "Track fluctuations to monitor wellness, recovery, or early signs of illness.",
      icon: <Thermometer className="w-5 h-5 text-red-400" />
    },
    {
      title: "Mood Detection (Beta)",
      subtitle: "Detect stress or relaxation levels based on biometric patterns and suggest wellness actions.",
      icon: <Smile className="w-5 h-5 text-yellow-400" />
    }
  ];

  const integrations = [
    { name: "Apple Health", subtitle: "iOS Health Ecosystem", domain: "apple.com" },
    { name: "Google Fit", subtitle: "Android Fitness Suite", domain: "google.com" },
    { name: "Fitbit", subtitle: "Wearable Data Sync", domain: "fitbit.com" },
    { name: "Samsung Health", subtitle: "Smartwatch Integration", domain: "samsung.com" },
    { name: "Garmin Connect", subtitle: "Advanced Training Sync", domain: "garmin.com" },
    { name: "Withings", subtitle: "Health Metrics", domain: "withings.com" },
    { name: "Oura Cloud", subtitle: "Trend Comparison", domain: "ouraring.com" },
    { name: "WHOOP", subtitle: "Readiness & Recovery Insights", domain: "whoop.com" },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-left mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
            Monitor Your Body. <br />
            Master Your Health with{" "}
            <span 
              className="inline-block text-transparent font-bold"
              style={{
                backgroundImage: "linear-gradient(to right, #000022, #1f3f6d, #469396, #f1ffa5)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text"
              }}
            >
              HUX Smart Ring
            </span>
          </h1>
        </header>

        {/* Demo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Video/Image Card */}
          <Card className="lg:col-span-2 bg-card border-border p-2 overflow-hidden relative flex flex-col min-h-[500px]">
            <CardContent className="p-0 relative flex-grow group">
              {isPlaying ? (
                <video
                  src="/hux_video_clean_trimmed_retry.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <>
                  <img
                    src="/public/lovable-uploads/f22aa84c-eee5-4a54-b16e-ae116d8ae23a.png"
                    alt="Smart Ring Thumbnail"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <PlayCircle className="w-16 h-16 text-white drop-shadow-lg" />
                  </button>
                </>
              )}
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {ringFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col border border-border rounded-xl p-4 hover:shadow-md transition-all duration-300 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  {feature.icon}
                  <h3 className="text-base font-medium text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">{feature.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="p-3 flex items-center gap-3 hover:bg-card/80 rounded-xl transition-all duration-300 border border-border/50"
            >
              <img
                src={`https://logo.clearbit.com/${integration.domain}`}
                alt={integration.name}
                width="40"
                height="40"
                className="w-10 h-10 object-contain bg-white p-1 rounded-xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div>
                <div className="font-medium text-foreground">{integration.name}</div>
                <div className="text-xs text-muted-foreground">{integration.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center py-12 text-muted-foreground text-sm">
          Discover deeper insights with HUX. <br />
          <span className="text-muted-foreground/70">Your health, redefined.</span>
        </footer>
      </div>
    </section>
  );
}