
import React from 'react';

interface FounderProps {
  name: string;
  role: string;
  image: string;
}

const FounderCard: React.FC<FounderProps> = ({ name, role, image }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
      <div className="relative bg-black rounded-xl overflow-hidden">
        <div className="aspect-square">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-white text-xl font-bold">
            {name}
            <div className="h-1 w-12 bg-gradient-to-r from-viveon-red to-viveon-neon-blue mx-auto mt-2"></div>
          </h3>
          <p className="text-viveon-neon-blue mt-2 font-medium tracking-wide">{role}</p>
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
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "G Surya Reddy",
      role: "COO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "T Mohan Reddy",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-white text-center mb-2">Meet Our <span className="gradient-text">Co-Founders</span></h2>
      <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">The visionaries behind VIVEON's revolutionary wearable technology</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {founders.map((founder, index) => (
          <FounderCard key={index} {...founder} />
        ))}
      </div>
    </div>
  );
};

export default AboutFounders;
