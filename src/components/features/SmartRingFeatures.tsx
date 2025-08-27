import React from "react";

export default function SmartRingFeatures() {
  console.log("SmartRingFeatures component is rendering");
  
  const images = [
    "/lovable-uploads/f22aa84c-eee5-4a54-b16e-ae116d8ae23a.png",
    "/lovable-uploads/6eb376f4-57db-4739-8ddd-1ff2837821ff.png",
    "/lovable-uploads/6e9faf63-0780-4d01-9f6d-72b21989cf62.png",
    "/lovable-uploads/9ec12441-23f9-477b-aa64-89c05a1b431f.png",
    "/lovable-uploads/a0c36f68-ac13-4dbb-9c43-043f1beb9ce9.png",
    "/lovable-uploads/97c43e61-fcf5-4f9e-9cc2-df81bb60a6d8.png",
    "/lovable-uploads/98fd856e-b87b-4fa7-ac5c-6c593c54b448.png",
    "/lovable-uploads/f694a5a5-6ed5-41b4-abbf-58cbbfb280c2.png",
  ];

  console.log("Images array:", images);

  const featureNames = [
    "Smart Touch Control",
    "Body Fat Ratio",
    "Sleep Management", 
    "Emotion Stress",
    "Non-invasive Blood Glucose Trends",
    "Body Temperature",
    "NFC Payment",
    "Calling Vibration Alerts"
  ];

  const duplicatedImages = [...images, ...images];
  const duplicatedNames = [...featureNames, ...featureNames];

  return (
    <div id="feature-cards" className="w-full bg-white relative overflow-hidden flex items-center justify-center py-12">
      {/* Feature Cards Section */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0" />

      {/* Scrolling Images */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="overflow-hidden">
          <div
            className="flex gap-4 sm:gap-6 w-max animate-scroll"
            style={{
              animation: "scroll-right 35s linear infinite",
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="image-item flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out relative group border border-gray-200"
              >
                <img
                  src={image}
                  alt={duplicatedNames[index]}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                {/* Feature label overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-4 text-white text-xs sm:text-sm font-medium text-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  {duplicatedNames[index]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20" />

      {/* Keyframes for scrolling */}
      <style>
        {`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        `}
      </style>
    </div>
  );
}