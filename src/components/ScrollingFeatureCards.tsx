import React, { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, Activity, Moon, Shield, Smartphone, AlertTriangle, Zap, Users } from 'lucide-react';

// Import the downloaded images
import wellnessMonitoringImg from '@/assets/360-wellness-monitoring.jpg';
import vibrationAlertImg from '@/assets/vibration-alert.jpg';
import heartbeatExerciseImg from '@/assets/heartbeat-exercise.jpg';
import smartTouchImg from '@/assets/smart-touch-ring.jpg';
import sleepGoodImg from '@/assets/sleep-starts-good.jpg';
import emotionalManagementImg from '@/assets/emotional-management-ring.jpg';
import menstrualCareImg from '@/assets/menstrual-care.jpg';
import sosEmergencyImg from '@/assets/sos-emergency.jpg';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  color: string;
  benefits: string[];
}

const ScrollingFeatureCards: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const featureCards: FeatureCard[] = [
    {
      id: '1',
      title: '360° Smart Wellness Monitoring',
      description: 'Comprehensive health tracking designed for Indian lifestyle. Monitor key vitals including heart rate, HRV, SpO₂, and body temperature in real-time.',
      image: wellnessMonitoringImg,
      icon: <Activity className="w-6 h-6" />,
      color: 'viveon-neon-blue',
      benefits: ['Real-time vitals', 'Indian climate adapted', 'Continuous monitoring', 'Health insights']
    },
    {
      id: '2',
      title: 'Intelligent Vibration Alerts',
      description: 'Precision micro-motor provides discreet notifications for calls, health warnings, medication reminders, and festival notifications.',
      image: vibrationAlertImg,
      icon: <AlertTriangle className="w-6 h-6" />,
      color: 'viveon-neon-purple',
      benefits: ['Call alerts', 'Health warnings', 'Medication reminders', 'Festival notifications']
    },
    {
      id: '3',
      title: 'Exercise Heart Rate Tracking',
      description: 'Record each heartbeat during yoga, cricket, badminton, and other popular Indian sports with comprehensive fitness evaluation.',
      image: heartbeatExerciseImg,
      icon: <Heart className="w-6 h-6" />,
      color: 'viveon-red',
      benefits: ['Exercise tracking', 'Fitness evaluation', 'Sport-specific modes', 'Performance insights']
    },
    {
      id: '4',
      title: 'Smart Touch Control',
      description: 'Control your smartphone, IoT devices, and popular Indian apps with simple gestures. Perfect for smart homes in India.',
      image: smartTouchImg,
      icon: <Smartphone className="w-6 h-6" />,
      color: 'viveon-neon-blue',
      benefits: ['Device control', 'App integration', 'Smart home', 'Gesture recognition']
    },
    {
      id: '5',
      title: 'Advanced Sleep Analysis',
      description: 'Everything good starts with sleep. Comprehensive sleep monitoring adapted for Indian bedtime patterns and climate conditions.',
      image: sleepGoodImg,
      icon: <Moon className="w-6 h-6" />,
      color: 'viveon-neon-purple',
      benefits: ['Sleep quality', 'Recovery reports', 'Pattern analysis', 'Climate adapted']
    },
    {
      id: '6',
      title: 'Emotional Wellness Management',
      description: 'Monitor emotional tendencies, stress levels, and mood patterns through advanced biosensors and AI analysis.',
      image: emotionalManagementImg,
      icon: <Zap className="w-6 h-6" />,
      color: 'viveon-red',
      benefits: ['Stress monitoring', 'Mood tracking', 'Emotional patterns', 'Wellness insights']
    },
    {
      id: '7',
      title: 'Women\'s Health Care',
      description: 'Specialized features for Indian women including menstrual cycle tracking, pregnancy planning, and intimate health suggestions.',
      image: menstrualCareImg,
      icon: <Users className="w-6 h-6" />,
      color: 'viveon-neon-blue',
      benefits: ['Cycle tracking', 'Pregnancy planning', 'Health suggestions', 'Privacy focused']
    },
    {
      id: '8',
      title: 'Emergency SOS System',
      description: 'Quick activation by tapping 10 times. Sends location, voice messages, and SMS to emergency contacts - crucial for safety in India.',
      image: sosEmergencyImg,
      icon: <Shield className="w-6 h-6" />,
      color: 'viveon-neon-purple',
      benefits: ['Emergency contacts', 'Location sharing', 'Voice messages', 'SMS alerts']
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 280 : window.innerWidth < 768 ? 320 : 400;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 280 : window.innerWidth < 768 ? 320 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      'viveon-red': {
        border: 'border-viveon-red/30',
        gradient: 'from-viveon-red/20 to-viveon-red/5',
        text: 'text-viveon-red',
        badge: 'bg-viveon-red/20 text-viveon-red border-viveon-red/30'
      },
      'viveon-neon-blue': {
        border: 'border-viveon-neon-blue/30',
        gradient: 'from-viveon-neon-blue/20 to-viveon-neon-blue/5',
        text: 'text-viveon-neon-blue',
        badge: 'bg-viveon-neon-blue/20 text-viveon-neon-blue border-viveon-neon-blue/30'
      },
      'viveon-neon-purple': {
        border: 'border-viveon-neon-purple/30',
        gradient: 'from-viveon-neon-purple/20 to-viveon-neon-purple/5',
        text: 'text-viveon-neon-purple',
        badge: 'bg-viveon-neon-purple/20 text-viveon-neon-purple border-viveon-neon-purple/30'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap['viveon-neon-blue'];
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-viveon-neon-blue via-viveon-neon-purple to-viveon-red bg-clip-text text-transparent">
            Revolutionary Features Catalog
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore the cutting-edge technology packed into every HUX AURA RING, 
            designed specifically for modern India's health and lifestyle needs.
          </p>
          
          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              onClick={scrollLeft}
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-viveon-neon-blue/30 hover:bg-viveon-neon-blue/10 hover:border-viveon-neon-blue/50 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-viveon-neon-blue" />
            </Button>
            <Button
              onClick={scrollRight}
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-viveon-neon-blue/30 hover:bg-viveon-neon-blue/10 hover:border-viveon-neon-blue/50 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-viveon-neon-blue" />
            </Button>
          </div>
        </motion.div>

        {/* Scrolling Cards Container */}
        <div className="relative">
          {/* Gradient Overlays for scroll fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-viveon-darker to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-viveon-darker to-transparent z-10 pointer-events-none"></div>
          
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-4 scroll-smooth px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featureCards.map((feature, index) => {
              const colors = getColorClasses(feature.color);
              
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 w-72 sm:w-80 md:w-96 lg:w-[400px]"
                >
                  <Card className={`h-full bg-viveon-darker/80 backdrop-blur-md border ${colors.border} hover:border-opacity-60 transition-all duration-500 group overflow-hidden`}>
                    <CardContent className="p-0">
                      {/* Image Section */}
                      <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-60`}></div>
                        
                        {/* Icon Badge */}
                        <div className={`absolute top-4 left-4 p-3 rounded-full border ${colors.badge} backdrop-blur-sm`}>
                          <div className={colors.text}>
                            {feature.icon}
                          </div>
                        </div>
                      </div>

                      {/* Content Section - Only Title */}
                      <div className="p-4 sm:p-6">
                        <h3 className={`text-lg sm:text-xl md:text-2xl font-bold text-center ${colors.text}`}>
                          {feature.title}
                        </h3>
                      </div>

                      {/* Animated Border Effect */}
                      <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
                        <div className={`absolute inset-0 rounded-lg animate-pulse bg-gradient-to-r ${colors.gradient}`}></div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Custom scrollbar hide styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
    </section>
  );
};

export default ScrollingFeatureCards;