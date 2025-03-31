
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface FounderProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

const FounderCard: React.FC<FounderProps> = ({ name, role, image, description }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
      <div className="relative bg-black rounded-xl overflow-hidden">
        <div className="p-6 flex flex-col items-center">
          <Avatar className="w-32 h-32 mb-4 border-2 border-opacity-20 border-viveon-neon-blue">
            <AvatarImage src={image} alt={name} className="object-cover" />
            <AvatarFallback className="bg-viveon-darker">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
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
      image: "/lovable-uploads/677085e7-aad4-423e-8673-b7c52b1080c3.png", // Abstract digital leadership visualization
      description: "Visionary leader driving VIVEON's innovation strategy and global expansion with over 15 years of experience in wearable technology."
    },
    {
      name: "G Surya Reddy",
      role: "COO",
      image: "/lovable-uploads/97d37c64-bc58-45fb-9fae-1199e9856c7e.png", // Data visualization for operations
      description: "Operations expert optimizing our manufacturing processes and supply chain to deliver exceptional quality products."
    },
    {
      name: "T Mohan Reddy",
      role: "CTO",
      image: "/lovable-uploads/ae7d9563-090c-483c-83fc-da6455eefaaa.png", // Circuit patterns representing technology
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
