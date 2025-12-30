"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Moon, Heart, Smile } from "lucide-react";

export default function FeaturedSmartRingDemoSection() {
  const [currentDashboard, setCurrentDashboard] = useState(0);
  
  const dashboards = [
    { image: "/lovable-uploads/7461b774-3563-44bc-9ba3-de5051ce67fb.png", title: "Sleep Monitor", subtitle: "REM, Deep, Light & Awake stages" },
    { image: "/lovable-uploads/130868ad-f627-4a22-b6a9-4f5f05b1f3df.png", title: "HR & SpO2 & Body Temp", subtitle: "Comprehensive vital signs monitoring" },
    { image: "/lovable-uploads/7e9876cb-fe70-4f6a-8e1a-6f5d6addad63.png", title: "ECG Monitoring", subtitle: "Continuous heart rhythm analysis" },
    { image: "/lovable-uploads/7917c6b6-e61e-49cc-99c0-da40ae1e8901.png", title: "Mood Tracking", subtitle: "Real-time stress and emotional wellness monitoring" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDashboard((prev) => (prev + 1) % dashboards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [dashboards.length]);

  const ringFeatures = [
    {
      title: "Sleep Monitor",
      subtitle: "Track sleep stages including REM, deep, light, and awake periods.",
      icon: <Moon className="w-5 h-5" />
    },
    {
      title: "ECG Monitoring",
      subtitle: "Continuous heart rhythm analysis with real-time ECG waveforms.",
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: "Vital Signs",
      subtitle: "Heart rate, blood oxygen, and temperature tracking.",
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: "Mood Detection",
      subtitle: "Detect stress levels based on biometric patterns.",
      icon: <Smile className="w-5 h-5" />
    }
  ];

  const integrations = [
    { name: "Apple Health", domain: "apple.com" },
    { name: "Google Fit", domain: "google.com" },
    { name: "Fitbit", domain: "fitbit.com" },
    { name: "Samsung Health", domain: "samsung.com" },
    { name: "Garmin Connect", domain: "garmin.com" },
    { name: "Withings", domain: "withings.com" },
  ];

  return (
    <section className="py-20 lg:py-28 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Monitor your body,
            <br />
            master your <span className="text-accent">health</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep insights into your sleep, heart health, and daily wellness - all from one ring.
          </p>
        </motion.header>

        {/* Demo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Health Dashboard Showcase */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full aspect-video bg-foreground/5 rounded-xl overflow-hidden">
                  {dashboards.map((dashboard, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        index === currentDashboard 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-105'
                      }`}
                    >
                      <img
                        src={dashboard.image}
                        alt={dashboard.title}
                        className="w-full h-full object-contain"
                      />
                      
                      <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-soft">
                        <div className="text-sm font-semibold text-foreground">{dashboard.title}</div>
                        <div className="text-xs text-muted-foreground">{dashboard.subtitle}</div>
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
                            ? 'bg-accent w-6' 
                            : 'bg-foreground/30 hover:bg-foreground/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {ringFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col bg-card border border-border rounded-2xl p-5 hover:border-accent/30 hover:shadow-soft transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-foreground">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">{feature.subtitle}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
            Works with your favorite apps
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="px-5 py-3 flex items-center gap-3 bg-card hover:bg-card/80 rounded-full border border-border transition-all duration-300"
              >
                <img
                  src={`https://logo.clearbit.com/${integration.domain}`}
                  alt={integration.name}
                  width="24"
                  height="24"
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <span className="text-sm font-medium text-foreground">{integration.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
