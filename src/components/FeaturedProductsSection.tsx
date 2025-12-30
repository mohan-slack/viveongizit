"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Heart, Moon, Zap, Smartphone, Shield } from "lucide-react";

const FeaturedProductsSection: React.FC = () => {
  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Heart Rate Monitoring",
      description: "24/7 continuous heart rate tracking with real-time alerts for irregularities."
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: "Sleep Analysis",
      description: "Detailed sleep stage tracking including REM, deep, and light sleep cycles."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Activity Tracking",
      description: "Automatic exercise detection and step counting throughout your day."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Stress Management",
      description: "Monitor stress levels and receive guided breathing exercises."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Smart Notifications",
      description: "Discreet vibration alerts for calls, messages, and app notifications."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Water Resistant",
      description: "5ATM water resistance - wear it in the shower or while swimming."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Everything you need,
            <br />
            right on your <span className="text-accent">finger</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced health monitoring in a sleek, comfortable design that goes everywhere with you.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                <span className="text-foreground group-hover:text-accent transition-colors">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
