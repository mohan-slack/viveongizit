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
    <div id="feature-cards" className="w-full bg-background relative overflow-hidden flex items-center justify-center py-20">

      {/* Scrolling Images */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="overflow-hidden">
          <div
            className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-max"
            style={{
              animation: "bubble-scroll 45s linear infinite",
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="image-item flex-shrink-0 w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[450px] lg:w-[420px] lg:h-[500px] xl:w-[480px] xl:h-[580px] relative group"
              >
                <div className="w-full h-full rounded-[2.5rem] sm:rounded-[3rem] md:rounded-[3.5rem] overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-700 ease-out hover:scale-105 group-hover:border-primary/50">
                  <img
                    src={image}
                    alt={duplicatedNames[index]}
                    className="w-full h-full object-contain transition-all duration-700 ease-out group-hover:scale-110 p-4 sm:p-6"
                    loading="lazy"
                  />
                  
                  {/* Label */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:translate-y-2 z-20">
                    <div className="px-6 py-3 rounded-full bg-card border border-border shadow-lg">
                      <span className="text-foreground text-sm sm:text-base font-semibold whitespace-nowrap">
                        {duplicatedNames[index]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Side Overlays */}
      <div className="absolute top-0 left-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-20" />
      <div className="absolute top-0 right-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-20" />

      {/* Enhanced Keyframes for Bubble Scrolling */}
      <style>
        {`
        @keyframes bubble-scroll {
          0% { 
            transform: translateX(0) translateY(0);
          }
          25% { 
            transform: translateX(-12.5%) translateY(-2px);
          }
          50% { 
            transform: translateX(-25%) translateY(0);
          }
          75% { 
            transform: translateX(-37.5%) translateY(2px);
          }
          100% { 
            transform: translateX(-50%) translateY(0);
          }
        }
        
        .image-item:nth-child(odd) {
          animation-delay: -0.5s;
        }
        
        .image-item:nth-child(even) {
          animation-delay: -1s;
        }
        `}
      </style>
    </div>
  );
}