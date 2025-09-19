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
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 backdrop-blur-3xl z-0" />
      
      {/* Floating Glass Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-700" />
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000" />

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
                {/* Glass Container with Bubble Effect */}
                <div className="w-full h-full rounded-[2.5rem] sm:rounded-[3rem] md:rounded-[3.5rem] overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl hover:shadow-[0_0_80px_rgba(255,255,255,0.1)] transition-all duration-700 ease-out hover:scale-105 hover:rotate-1 group-hover:bg-white/15">
                  
                  {/* Inner Glass Layer */}
                  <div className="absolute inset-2 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] backdrop-blur-sm bg-gradient-to-br from-white/5 to-transparent border border-white/10 overflow-hidden">
                    <img
                      src={image}
                      alt={duplicatedNames[index]}
                      className="w-full h-full object-contain transition-all duration-700 ease-out group-hover:scale-110 p-4 sm:p-6"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Glass Reflection Effect */}
                  <div className="absolute top-4 left-4 right-4 h-1/3 bg-gradient-to-b from-white/20 to-transparent rounded-t-[2rem] sm:rounded-t-[2.5rem] md:rounded-t-[3rem] opacity-60" />
                  
                  {/* Floating Glass Label */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:translate-y-2 z-20">
                    <div className="px-6 py-3 rounded-full backdrop-blur-xl bg-white/20 border border-white/30 shadow-lg">
                      <span className="text-foreground text-sm sm:text-base font-semibold whitespace-nowrap">
                        {duplicatedNames[index]}
                      </span>
                    </div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 rounded-[2.7rem] sm:rounded-[3.2rem] md:rounded-[3.7rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Glass Side Overlays */}
      <div className="absolute top-0 left-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/80 to-transparent backdrop-blur-sm z-20" />
      <div className="absolute top-0 right-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/80 to-transparent backdrop-blur-sm z-20" />

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