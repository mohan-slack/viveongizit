
import React from 'react';
import FounderCard from './FounderCard';

const AboutFounders: React.FC = () => {
  const founders = [
    {
      name: "Siva Sundar K",
      role: "👨‍💼",
      description: "Visionary leader blending strategy and execution, driving innovation with 12+ years in Operations, Sales & Marketing.",
      longDescription: "A visionary leader with over 12 years in operations, sales, and marketing. His expertise in strategic growth and market positioning has been instrumental in shaping Viveon Gizit into a powerhouse of innovation. His forward-thinking approach and keen market insights have positioned HUX™ as a revolutionary brand in the wearable technology space.",
      expertise: ["Strategic Vision", "Innovation Leadership", "Market Growth"],
      profileImage: "/lovable-uploads/cdd308e7-4882-4bb2-9fd5-b1d504d99ba8.png",
      yearsExperience: 12
    },
    {
      name: "G Surya Reddy",
      role: "🧑‍💻",
      description: "Finance & operations maestro, ensuring seamless execution and scalable growth with a decade of expertise.",
      longDescription: "The operational backbone of the company, ensuring financial stability and seamless execution. With over a decade in finance and management, he transforms strategies into scalable realities. His meticulous approach to operational excellence and financial management has built a solid foundation for Viveon's continuous growth and market expansion.",
      expertise: ["Financial Strategy", "Operational Excellence", "Business Scaling"],
      profileImage: "/lovable-uploads/cdd308e7-4882-4bb2-9fd5-b1d504d99ba8.png",
      yearsExperience: 10
    },
    {
      name: "T Mohan Reddy",
      role: "👨‍🔬",
      description: "The tech architect behind innovation, pioneering R&D and IT advancements for the next-gen wearable revolution.",
      longDescription: "The mastermind behind cutting-edge R&D and IT advancements. With 10+ years of experience, he pioneers next-gen wearable technology, driving product excellence and innovation. His technical brilliance and passion for cutting-edge technology has enabled Viveon to stay ahead of the competition with groundbreaking products that redefine industry standards.",
      expertise: ["R&D Leadership", "Technical Innovation", "Product Architecture"],
      profileImage: "/lovable-uploads/cdd308e7-4882-4bb2-9fd5-b1d504d99ba8.png",
      yearsExperience: 10
    }
  ];

  return (
    <div className="mt-12 md:mt-16">
      <div className="text-center mb-8 sm:mb-12">
        <div className="relative inline-block mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold relative z-10">
            <span className="relative inline-block px-6 sm:px-8 py-3 sm:py-4 text-white font-sans font-bold rounded-[11px] gradient-button hover:scale-105 transition-transform duration-300 cursor-pointer text-sm sm:text-base">
              Meet Our Leadership
            </span>
          </h2>
        </div>
        <p className="text-gray-300 text-center max-w-2xl mx-auto px-4 text-sm sm:text-base">
          The innovators behind VIVEON's revolutionary wearable technology
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-4">
        {founders.map((founder, index) => (
          <FounderCard key={index} {...founder} />
        ))}
      </div>
    </div>
  );
};

export default AboutFounders;
