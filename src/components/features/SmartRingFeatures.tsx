import React from "react";
import smartTouchControl from "@/assets/smart-touch-control.jpg";
import bodyFatRatio from "@/assets/body-fat-ratio.jpg";
import sleepManagement from "@/assets/sleep-management.jpg";
import emotionStress from "@/assets/emotion-stress.jpg";
import glucoseMonitoring from "@/assets/glucose-monitoring.jpg";
import bodyTemperature from "@/assets/body-temperature.jpg";
import nfcPayment from "@/assets/nfc-payment.jpg";
import callingVibration from "@/assets/calling-vibration.jpg";

export default function SmartRingFeatures() {
  const images = [
    smartTouchControl,
    bodyFatRatio,
    sleepManagement,
    emotionStress,
    glucoseMonitoring,
    bodyTemperature,
    nfcPayment,
    callingVibration,
  ];

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
    <div className="w-full bg-white relative overflow-hidden flex items-center justify-center py-12">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0" />

      {/* Scrolling Images */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
        <div className="overflow-hidden">
          <div
            className="flex gap-6 w-max animate-scroll"
            style={{
              animation: "scroll-right 20s linear infinite",
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="image-item flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 relative group border border-gray-200"
              >
                <img
                  src={image}
                  alt={duplicatedNames[index]}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Feature label overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white text-sm font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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