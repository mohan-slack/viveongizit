import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, Activity, Thermometer, Smile } from "lucide-react";
import dashboardSpo2 from "@/assets/dashboard-spo2.jpg";
import dashboardHrv from "@/assets/dashboard-hrv.jpg";
import dashboardTemperature from "@/assets/dashboard-temperature.jpg";
import dashboardMood from "@/assets/dashboard-mood.jpg";

export default function FeaturedSmartRingDemoSection() {
  const [currentDashboard, setCurrentDashboard] = useState(0);
  
  const dashboards = [
    { image: dashboardSpo2, title: "SPO2 Monitoring", subtitle: "Real-time oxygen saturation" },
    { image: "/lovable-uploads/130868ad-f627-4a22-b6a9-4f5f05b1f3df.png", title: "HR & SpO2 & Body Temp", subtitle: "Comprehensive vital signs monitoring" },
    { image: "/lovable-uploads/7e9876cb-fe70-4f6a-8e1a-6f5d6addad63.png", title: "ECG Monitoring", subtitle: "Continuous heart rhythm analysis" },
    { image: dashboardTemperature, title: "Body Temperature", subtitle: "24-hour fluctuation monitoring" },
    { image: dashboardMood, title: "Mood Detection", subtitle: "Stress & wellness indicators" }
  ];

  // Auto-cycle through dashboards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDashboard((prev) => (prev + 1) % dashboards.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [dashboards.length]);

  const ringFeatures = [
    {
      title: "ECG Monitoring",
      subtitle: "Continuous heart rhythm analysis with real-time ECG waveforms and arrhythmia detection.",
      icon: <Activity className="w-5 h-5 text-red-400" />
    },
    {
      title: "HR & SpO2 & Body Temp",
      subtitle: "Comprehensive vital signs monitoring with heart rate, blood oxygen, and temperature tracking.",
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
    <section className="py-12 lg:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-left mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight mb-4 text-black leading-tight">
            Monitor Your Body. <br />
            Master Your Health with{" "}
            <span className="inline-block font-bold">
              <span className="text-gray-400">HUX</span> <span className="bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue bg-clip-text text-transparent">Smart Ring</span>
            </span>
          </h1>
        </header>

        {/* Demo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Health Dashboard Showcase */}
          <Card className="lg:col-span-2 bg-white border-gray-200 p-2 overflow-hidden relative flex flex-col min-h-[500px]">
            <CardContent className="p-0 relative flex-grow">
              <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
                {/* Dashboard Images with Smooth Transitions */}
                {dashboards.map((dashboard, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentDashboard 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <img
                      src={dashboard.image}
                      alt={dashboard.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay with metric info */}
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
                      <div className="text-sm font-semibold">{dashboard.title}</div>
                      <div className="text-xs text-gray-300">{dashboard.subtitle}</div>
                    </div>
                  </div>
                ))}
                
                {/* Dashboard Indicators */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {dashboards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentDashboard(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentDashboard 
                          ? 'bg-white' 
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Pulsing Ring Effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-4 border border-purple-500/30 rounded-full animate-pulse"></div>
                  <div className="absolute inset-8 border border-blue-500/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {ringFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-300 hover:border-gray-300 bg-white"
              >
                <div className="flex items-center gap-2 mb-2">
                  {feature.icon}
                  <h3 className="text-base font-medium text-black">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600">{feature.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="p-3 flex items-center gap-3 hover:bg-gray-50 rounded-xl transition-all duration-300 border border-gray-200"
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
                <div className="font-medium text-black">{integration.name}</div>
                <div className="text-xs text-gray-500">{integration.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center py-12 text-gray-500 text-sm">
          Discover deeper insights with HUX. <br />
          <span className="text-gray-400">Your health, redefined.</span>
        </footer>
      </div>
    </section>
  );
}