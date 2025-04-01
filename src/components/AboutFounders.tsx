
import React from 'react';
import FounderFlipCard from './FounderFlipCard';

const AboutFounders: React.FC = () => {
  const founders = [
    {
      name: "Siva Sundar K",
      role: "CEO",
      description: "Visionary leader blending strategy and execution, driving innovation with 12+ years in Operations, Sales & Marketing.",
      longDescription: "A visionary leader with over 12 years in operations, sales, and marketing. His expertise in strategic growth and market positioning has been instrumental in shaping Viveon Gizit into a powerhouse of innovation. His forward-thinking approach and keen market insights have positioned HUX™ as a revolutionary brand in the wearable technology space.",
      expertise: ["Strategic Vision", "Innovation Leadership", "Market Growth"],
      profileImage: "/lovable-uploads/cdd308e7-4882-4bb2-9fd5-b1d504d99ba8.png",
      yearsExperience: 12
    },
    {
      name: "G Surya Reddy",
      role: "COO",
      description: "Finance & operations maestro, ensuring seamless execution and scalable growth with a decade of expertise.",
      longDescription: "The operational backbone of the company, ensuring financial stability and seamless execution. With over a decade in finance and management, he transforms strategies into scalable realities. His meticulous approach to operational excellence and financial management has built a solid foundation for Viveon's continuous growth and market expansion.",
      expertise: ["Financial Strategy", "Operational Excellence", "Business Scaling"],
      profileImage: "/lovable-uploads/cdd308e7-4882-4bb2-9fd5-b1d504d99ba8.png",
      yearsExperience: 10
    },
    {
      name: "T Mohan Reddy",
      role: "CTO",
      description: "The tech architect behind innovation, pioneering R&D and IT advancements for the next-gen wearable revolution.",
      longDescription: "The mastermind behind cutting-edge R&D and IT advancements. With 15+ years of experience, he pioneers next-gen wearable technology, driving product excellence and innovation. His technical brilliance and passion for cutting-edge technology has enabled Viveon to stay ahead of the competition with groundbreaking products that redefine industry standards.",
      expertise: ["R&D Leadership", "Technical Innovation", "Product Architecture"],
      profileImage: "/lovable-uploads/cdd308e7-4882-4bb2-9fd5-b1d504d99ba8.png",
      yearsExperience: 15
    }
  ];

  return (
    <div className="mt-12 md:mt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">Meet Our <span className="gradient-text">Leadership</span></h2>
      <p className="text-gray-300 text-center mb-8 md:mb-12 max-w-2xl mx-auto px-4">The innovators behind VIVEON's revolutionary wearable technology</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0 min-h-[400px] md:min-h-[500px]">
        {founders.map((founder, index) => (
          <FounderFlipCard key={index} {...founder} />
        ))}
      </div>
    </div>
  );
};

export default AboutFounders;
