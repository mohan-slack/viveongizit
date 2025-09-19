import React from "react";

export default function SmartRingFeatures() {
  const images = [
    "/hux-features/activity.png",
    "/hux-features/sleep.png",
    "/hux-features/stress-yoga.png",  
    "/hux-features/waterproof.png",
  ];

  const featureNames = [
    "Activity Tracking",
    "Sleep Monitoring", 
    "Stress Management",
    "IP68 Waterproof"
  ];

  const duplicatedImages = [...images, ...images];
  const duplicatedNames = [...featureNames, ...featureNames];

  return (
    <div id="feature-cards" className="w-full bg-background relative overflow-hidden flex items-center justify-center py-16">
      {/* Feature Cards Section */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background z-0" />

      {/* Scrolling Images */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="overflow-hidden">
          <div
            className="flex gap-6 sm:gap-8 w-max animate-scroll"
            style={{
              animation: "smooth-scroll 40s linear infinite",
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="image-item flex-shrink-0 w-80 h-96 sm:w-96 sm:h-[480px] md:w-[440px] md:h-[550px] lg:w-[480px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-700 ease-out relative group border border-border/20"
              >
                <img
                  src={image}
                  alt={duplicatedNames[index]}
                  className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 bg-gradient-to-br from-muted/20 to-background/80"
                  loading="lazy"
                />
                {/* Feature label overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-6 text-white text-sm sm:text-base font-semibold text-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  {duplicatedNames[index]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Side gradient overlays */}
      <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20" />
      <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20" />

      {/* Keyframes for smooth scrolling */}
      <style>
        {`
        @keyframes smooth-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        `}
      </style>
    </div>
  );
}