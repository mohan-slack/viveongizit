
import React from 'react';
import { 
  Zap, 
  Headphones, 
  WifiIcon, 
  Battery, 
  Droplets, 
  Heart, 
  BellRing, 
  BluetoothIcon 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  className?: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, color, className }) => {
  return (
    <div className={cn(
      "bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all",
      "hover:bg-black/40 group",
      className
    )}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const FeaturesList: React.FC = () => {
  const earbudFeatures = [
    {
      icon: <Zap className="text-viveon-red" size={24} />,
      title: "Fast Charging",
      description: "Get 8 hours of playtime with just 15 minutes of charging.",
      color: "bg-viveon-red/10 text-viveon-red",
    },
    {
      icon: <Headphones className="text-viveon-neon-blue" size={24} />,
      title: "Active Noise Cancellation",
      description: "Block out the world and immerse yourself in your music.",
      color: "bg-viveon-neon-blue/10 text-viveon-neon-blue",
    },
    {
      icon: <WifiIcon className="text-viveon-neon-purple" size={24} />,
      title: "Seamless Connectivity",
      description: "Instant pairing with all your devices with Bluetooth 5.2.",
      color: "bg-viveon-neon-purple/10 text-viveon-neon-purple",
    },
    {
      icon: <Battery className="text-green-500" size={24} />,
      title: "Long Battery Life",
      description: "Enjoy up to 36 hours of total playtime with the charging case.",
      color: "bg-green-500/10 text-green-500",
    },
  ];

  const ringFeatures = [
    {
      icon: <Heart className="text-viveon-red" size={24} />,
      title: "Health Monitoring",
      description: "Track your heart rate, blood oxygen levels, and sleep patterns.",
      color: "bg-viveon-red/10 text-viveon-red",
    },
    {
      icon: <Droplets className="text-viveon-neon-blue" size={24} />,
      title: "Water Resistant",
      description: "IP68 rated for water and dust resistance for worry-free wear.",
      color: "bg-viveon-neon-blue/10 text-viveon-neon-blue",
    },
    {
      icon: <BellRing className="text-viveon-neon-purple" size={24} />,
      title: "Smart Notifications",
      description: "Feel subtle vibrations for calls, messages, and app alerts.",
      color: "bg-viveon-neon-purple/10 text-viveon-neon-purple",
    },
    {
      icon: <BluetoothIcon className="text-green-500" size={24} />,
      title: "NFC Payments",
      description: "Make contactless payments with a simple tap of your ring.",
      color: "bg-green-500/10 text-green-500",
    },
  ];

  return (
    <div id="features" className="bg-viveon-darker py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">Cutting-Edge </span>
            <span className="gradient-text">Features</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">Our products combine innovative technology with sleek design to provide you with the ultimate audio and wearable experience.</p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="text-viveon-red mr-2">EARBUDS</span> Features
            <div className="ml-4 h-px bg-gradient-to-r from-viveon-red to-transparent flex-grow"></div>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {earbudFeatures.map((feature, index) => (
              <Feature 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="text-viveon-neon-blue mr-2">SMART RING</span> Features
            <div className="ml-4 h-px bg-gradient-to-r from-viveon-neon-blue to-transparent flex-grow"></div>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ringFeatures.map((feature, index) => (
              <Feature 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesList;
