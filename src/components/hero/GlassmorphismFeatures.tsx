
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap, Shield, Smartphone } from 'lucide-react';

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const GlassmorphismFeatures: React.FC = () => {
  const features: FeatureCard[] = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health Tracking",
      description: "24/7 biometric monitoring with AI-powered health insights",
      color: "viveon-red"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Charging",
      description: "Revolutionary wireless charging technology for seamless usage",
      color: "viveon-neon-blue"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Data",
      description: "Military-grade encryption ensures your data privacy",
      color: "viveon-neon-purple"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Smart Connect",
      description: "Seamless integration with all your smart devices",
      color: "viveon-red"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{ 
            y: -8,
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
          className="group relative"
        >
          {/* Glassmorphism Card */}
          <div className="relative h-full p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden">
            
            {/* Background Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
            
            {/* Icon Container */}
            <div className={`relative z-10 w-12 h-12 rounded-xl bg-${feature.color}/20 flex items-center justify-center mb-4 group-hover:bg-${feature.color}/30 transition-colors duration-300`}>
              <div className={`text-${feature.color === 'viveon-red' ? 'viveon-red' : feature.color === 'viveon-neon-blue' ? 'viveon-neon-blue' : 'viveon-neon-purple'}/90`}>
                {feature.icon}
              </div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-glow transition-all duration-300">
                {feature.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
            
            {/* Subtle Border Glow */}
            <div className={`absolute inset-0 rounded-2xl border border-${feature.color === 'viveon-red' ? 'viveon-red' : feature.color === 'viveon-neon-blue' ? 'viveon-neon-blue' : 'viveon-neon-purple'}/0 group-hover:border-${feature.color === 'viveon-red' ? 'viveon-red' : feature.color === 'viveon-neon-blue' ? 'viveon-neon-blue' : 'viveon-neon-purple'}/30 transition-all duration-300`} />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GlassmorphismFeatures;
