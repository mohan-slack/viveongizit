import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Activity, Smartphone, Shield, Battery, Zap } from 'lucide-react';

const ModernFeatureCards: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Health Monitoring",
      description: "Real-time heart rate, blood oxygen, and sleep tracking with medical-grade accuracy.",
      icon: Activity,
      color: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/30",
      iconColor: "text-red-400"
    },
    {
      id: 2,
      title: "Smart Notifications", 
      description: "Discreet vibrations for calls, messages, and app notifications directly on your finger.",
      icon: Smartphone,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400"
    },
    {
      id: 3,
      title: "Fitness Tracking",
      description: "Activity monitoring, step counting, calorie tracking, and workout detection.",
      icon: Zap,
      color: "from-green-500/20 to-emerald-500/20", 
      borderColor: "border-green-500/30",
      iconColor: "text-green-400"
    },
    {
      id: 4,
      title: "Water Resistant",
      description: "5ATM water resistance for swimming, showering, and all weather conditions.",
      icon: Shield,
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/30", 
      iconColor: "text-purple-400"
    },
    {
      id: 5,
      title: "Long Battery Life",
      description: "Up to 7 days of usage on a single charge with wireless charging case.",
      icon: Battery,
      color: "from-orange-500/20 to-yellow-500/20",
      borderColor: "border-orange-500/30",
      iconColor: "text-orange-400"
    },
    {
      id: 6,
      title: "Display & Interface",
      description: "Intuitive touch controls and LED indicators for seamless interaction.",
      icon: Monitor,
      color: "from-teal-500/20 to-cyan-500/20",
      borderColor: "border-teal-500/30",
      iconColor: "text-teal-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-lines opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get The Highlights
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the advanced features that make our smart rings the perfect companion for your digital lifestyle
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={feature.id}
                className={`group relative overflow-hidden rounded-2xl border ${feature.borderColor} bg-gradient-to-br ${feature.color} backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                {/* Card Content */}
                <div className="relative p-8 h-full bg-black/40 backdrop-blur-sm">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>

                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color.replace('/20', '/60')} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ModernFeatureCards;