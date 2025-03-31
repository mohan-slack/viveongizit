
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Briefcase, Cpu, Settings } from 'lucide-react';

interface FounderProps {
  name: string;
  role: string;
  description: string;
}

const FounderCard: React.FC<FounderProps> = ({ name, role, description }) => {
  const getRoleIcon = () => {
    switch (role) {
      case "CEO":
        return <Briefcase className="h-12 w-12 text-viveon-neon-blue" />;
      case "CTO":
        return <Cpu className="h-12 w-12 text-viveon-red" />;
      case "COO":
        return <Settings className="h-12 w-12 text-viveon-neon-purple" />;
      default:
        return <Briefcase className="h-12 w-12 text-viveon-neon-blue" />;
    }
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
      <div className="relative bg-black rounded-xl overflow-hidden">
        <div className="p-8 flex flex-col items-center">
          <Avatar className="w-24 h-24 mb-6 border-2 border-opacity-20 border-viveon-neon-blue flex items-center justify-center bg-viveon-darker">
            {getRoleIcon()}
          </Avatar>
          
          <h3 className="text-white text-xl font-bold">
            {name}
            <div className="h-1 w-12 bg-gradient-to-r from-viveon-red to-viveon-neon-blue mx-auto mt-2"></div>
          </h3>
          <p className="text-viveon-neon-blue mt-2 font-medium tracking-wide">{role}</p>
          <p className="text-gray-400 mt-4 text-sm text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

const AboutFounders: React.FC = () => {
  const founders = [
    {
      name: "Siva Sundar K",
      role: "CEO",
      description: "Visionary leader driving VIVEON's innovation strategy and global expansion with over 15 years of experience in wearable technology."
    },
    {
      name: "G Surya Reddy",
      role: "COO",
      description: "Operations expert optimizing our manufacturing processes and supply chain to deliver exceptional quality products."
    },
    {
      name: "T Mohan Reddy",
      role: "CTO",
      description: "Technical genius behind HUX's proprietary technology with multiple patents in wearable audio and smart device innovation."
    }
  ];

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-white text-center mb-2">Meet Our <span className="gradient-text">Leadership</span></h2>
      <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">The innovators behind VIVEON's revolutionary wearable technology</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {founders.map((founder, index) => (
          <FounderCard key={index} {...founder} />
        ))}
      </div>
    </div>
  );
};

export default AboutFounders;
