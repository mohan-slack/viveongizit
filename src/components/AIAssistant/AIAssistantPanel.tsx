
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Volume2, ShieldCheck, Bluetooth, Timer, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AIAssistantPanel: React.FC = () => {
  const navigate = useNavigate();
  
  // Feature items for the panel
  const features = [
    { 
      icon: <Volume2 className="w-4 h-4 text-viveon-red" />, 
      title: "Noise Cancellation", 
      description: "Ultra-quiet environment in any setting"
    },
    { 
      icon: <ShieldCheck className="w-4 h-4 text-viveon-neon-blue" />, 
      title: "HD Audio", 
      description: "Lossless sound quality with high-def codec"
    },
    { 
      icon: <Bluetooth className="w-4 h-4 text-viveon-neon-purple" />, 
      title: "Smart Connect", 
      description: "Seamless pairing with all your devices"
    },
    { 
      icon: <Timer className="w-4 h-4 text-green-500" />, 
      title: "36Hr Battery", 
      description: "Extended playtime with fast charging"
    }
  ];
  
  // Handle navigation to the products page
  const handleBuyNowClick = () => {
    navigate('/products', { state: { scrollToSection: 'earbuds' } });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="w-72 bg-black/80 backdrop-blur-md rounded-xl p-4 border border-viveon-neon-blue/20 shadow-lg"
    >
      <div className="text-center mb-3">
        <h3 className="text-lg font-bold text-white tracking-tight">
          <span className="text-viveon-red">HUX</span> QUANTUM
        </h3>
        <p className="text-xs text-gray-400">Intelligent Audio Experience</p>
      </div>
      
      <div className="space-y-3 mb-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.9 + (index * 0.1) }}
            className="flex items-start p-2 rounded-lg bg-gray-900/60 border border-gray-800"
          >
            <div className="p-1.5 rounded-full bg-gray-800/80 mr-3">
              {feature.icon}
            </div>
            <div>
              <h4 className="text-sm font-medium text-white">{feature.title}</h4>
              <p className="text-xs text-gray-400">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.3 }}
        className="flex justify-center"
      >
        <Button 
          onClick={handleBuyNowClick}
          className="bg-viveon-red hover:bg-viveon-red/90 text-white py-5 px-6 rounded-full group"
        >
          Explore Now
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default AIAssistantPanel;
