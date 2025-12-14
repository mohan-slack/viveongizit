import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Activity, Hand, Moon, Brain, Heart, AlertTriangle, Thermometer } from 'lucide-react';

interface FeatureSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  bgColor?: string;
  icon: React.ReactNode;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  id,
  title,
  subtitle,
  description,
  tags,
  image,
  imageAlt,
  reverse = false,
  bgColor = 'bg-stone-950',
  icon
}) => {
  return (
    <section id={id} className={`${bgColor} py-20 lg:py-32 overflow-hidden`}>
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className={`${reverse ? 'lg:order-2' : ''}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                {icon}
              </div>
              <span className="text-amber-400 text-sm font-medium tracking-wide uppercase">{subtitle}</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>

            <p className="text-stone-400 text-lg md:text-xl leading-relaxed mb-8">
              {description}
            </p>

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-stone-800/50 border border-stone-700/50 text-stone-300 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className={`relative ${reverse ? 'lg:order-1' : ''}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureSections: React.FC = () => {
  const features: Omit<FeatureSectionProps, 'icon'>[] = [
    {
      id: 'vibration-alert',
      title: 'Vibration Alert',
      subtitle: 'Tactile Feedback',
      description: 'Integrated tactile precision micro motor provides multiple vibration-based reminders to enhance daily life. Incoming call alerts, sedentary reminders, heart rate abnormality warnings, medication reminders, and silent alarms - all on your finger.',
      tags: ['Call Alerts', 'Health Warning', 'Silent Clock', 'Event Reminders'],
      image: '/lovable-uploads/f694a5a5-6ed5-41b4-abbf-58cbbfb280c2.png',
      imageAlt: 'Vibration Alert Feature',
      bgColor: 'bg-stone-950'
    },
    {
      id: 'heartbeat-exercise',
      title: 'Record Each Heartbeat During Exercise',
      subtitle: 'Fitness Tracking',
      description: 'Combine multiple body indicators to comprehensively evaluate fitness quality and provide individual suggestions. Track daily activity, exercise records, and analyze exercise time, volume, frequency and goal achievement.',
      tags: ['Activity Record', 'Exercise Analysis', 'Fitness Quality', 'Goal Tracking'],
      image: '/lovable-uploads/6eb376f4-57db-4739-8ddd-1ff2837821ff.png',
      imageAlt: 'Heartbeat Exercise Monitoring',
      reverse: true,
      bgColor: 'bg-stone-900'
    },
    {
      id: 'smart-touch',
      title: 'Smart Touch Control',
      subtitle: 'Device Control',
      description: 'The ring easily controls third-party devices on your smart devices via Bluetooth - smartphones, tablets, and smart home products. Experience high technology and enjoy an intelligent, high-quality life.',
      tags: ['Bluetooth Control', 'Smart Home', 'Device Sync'],
      image: '/lovable-uploads/f22aa84c-eee5-4a54-b16e-ae116d8ae23a.png',
      imageAlt: 'Smart Touch Control',
      bgColor: 'bg-stone-950'
    },
    {
      id: 'sleep-management',
      title: 'Sleep Management',
      subtitle: 'Sleep Health',
      description: 'Monitor, track, and comprehensively evaluate data based on heart rate, blood oxygen, HRV, and body temperature during sleep. Receive personalized body recovery reports and care for your sleep health status.',
      tags: ['Sleep Stages', 'Recovery Report', 'HRV Analysis', 'Quality Score'],
      image: '/lovable-uploads/6e9faf63-0780-4d01-9f6d-72b21989cf62.png',
      imageAlt: 'Sleep Management',
      reverse: true,
      bgColor: 'bg-stone-900'
    },
    {
      id: 'emotional-management',
      title: 'Emotional Management',
      subtitle: 'Mental Wellness',
      description: "Monitor emotional tendencies, mood distribution, stress index, and fatigue index in real time. Through biosensors and algorithmic analysis, accurately capture emotional changes and help understand emotional patterns.",
      tags: ['Stress Index', 'Mood Tracking', 'Fatigue Analysis', 'Wellness Tips'],
      image: '/lovable-uploads/9ec12441-23f9-477b-aa64-89c05a1b431f.png',
      imageAlt: 'Emotional Management',
      bgColor: 'bg-stone-950'
    },
    {
      id: 'body-temperature',
      title: 'Body Temperature Monitoring',
      subtitle: 'Health Tracking',
      description: 'Continuous temperature monitoring for health and wellness tracking. Precise temperature sensors detect fever patterns and track circadian rhythms throughout the day.',
      tags: ['24/7 Monitoring', 'Fever Detection', 'Circadian Rhythm'],
      image: '/lovable-uploads/97c43e61-fcf5-4f9e-9cc2-df81bb60a6d8.png',
      imageAlt: 'Body Temperature Monitoring',
      reverse: true,
      bgColor: 'bg-stone-900'
    },
    {
      id: 'sos-function',
      title: 'Emergency SOS Function',
      subtitle: 'Safety First',
      description: 'When you encounter an emergency, tap your hands wearing the ring up and down 10 times or more to activate SOS. The ring will auto-dial emergency contacts, send voice messages, SMS, and share your real location.',
      tags: ['Emergency Dial', 'Location Share', 'Voice Message', 'Quick Trigger'],
      image: '/lovable-uploads/98fd856e-b87b-4fa7-ac5c-6c593c54b448.png',
      imageAlt: 'SOS Emergency Function',
      bgColor: 'bg-stone-950'
    }
  ];

  const iconMap: Record<string, React.ReactNode> = {
    'vibration-alert': <Phone className="w-6 h-6" />,
    'heartbeat-exercise': <Activity className="w-6 h-6" />,
    'smart-touch': <Hand className="w-6 h-6" />,
    'sleep-management': <Moon className="w-6 h-6" />,
    'emotional-management': <Brain className="w-6 h-6" />,
    'body-temperature': <Thermometer className="w-6 h-6" />,
    'sos-function': <AlertTriangle className="w-6 h-6" />
  };

  return (
    <>
      {features.map((feature) => (
        <FeatureSection
          key={feature.id}
          {...feature}
          icon={iconMap[feature.id]}
        />
      ))}
    </>
  );
};

export default FeatureSections;
