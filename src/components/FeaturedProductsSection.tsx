"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { Button } from "./ui/button";

const ProductShowcaseHuxAura: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const techSpecs = [
    {
      id: "design",
      title: "Sleek Concave Design for Lightweight Comfort",
      content: `The HUX AURA smart ring introduces an innovative concave design, making it 20% lighter than previous models. This refined structure ensures a comfortable, barely-there feel, perfect for all-day wear without compromising style or function.`,
    },
    {
      id: "health",
      title: "Advanced Health Tracking with Temperature Monitoring",
      content: `Equipped with a new temperature sensor, the AURA goes beyond traditional health tracking to monitor your body temperature. Stay aware of changes in your wellness with real-time, precise temperature readings, adding a new layer of insight to your health routine.`,
    },
    {
      id: "integration",
      title: "Effortless Integration for Everyday Wear",
      content: `Compact yet powerful, the HUX AURA smart ring seamlessly integrates into your lifestyle, delivering key health insights without the bulk. It's an ideal choice for those seeking advanced wellness tracking in a minimal, stylish form.`,
    },
    {
      id: "specs",
      title: "Technical Specifications",
      content: `
CPU: Ultra Low Power Bluetooth
Sensors: HR, SpO₂, Temp, G-sensor
Vibration: Precision motor
Outer Material: Stainless Steel
Inner Material: Medical-grade Steel
Dimensions: 7.5mm × 2.5mm
Battery Life: 4–6 days
Sizes: 6–13
Water Resistance: 5ATM (50m)
Compatibility: iOS & Android
      `,
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24 text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Product Image */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-neutral-100 rounded-2xl shadow-2xl p-8 md:p-10 lg:p-12 flex justify-center items-center w-full max-w-md">
            <img
              src="/lovable-uploads/Dark-theme.png"
              alt="HUX AURA Smart Ring"
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Right: Product Info */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
              HUX AURA Smart Ring
            </h2>
            <p className="text-lg text-gray-600 font-light mb-4">
              Advanced health monitoring in a sleek, comfortable design
            </p>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl font-semibold">₹12,999</span>
              <span className="text-gray-400 line-through text-lg">
                ₹16,999
              </span>
              <span className="text-green-600 font-medium">Save 24%</span>
            </div>
            <div className="text-sm text-gray-700 mb-6">
              <p>
                <strong>Color:</strong> Black
              </p>
              <p>
                <strong>Ring size:</strong> Select your size
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-2 mb-6">
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ 5ATM Waterproof - Swim & shower friendly</li>
                <li>✓ 4–6 Days Battery Life - Charges in 2 hours</li>
                <li>✓ 24/7 Health Tracking - Heart rate, SpO₂, temperature</li>
                <li>✓ iOS & Android Compatible</li>
                <li>✓ Medical-grade Materials - Premium & safe</li>
              </ul>
            </div>

            {/* CTA */}
            <Button
              variant="default"
              className="rounded-full px-8 py-4 text-lg bg-gradient-to-r from-black via-gray-800 to-gray-900 text-white shadow-lg hover:opacity-90 transition-all duration-300 w-fit"
            >
              Coming Soon
            </Button>
          </div>

          {/* Tech Specs Accordion */}
          <div className="mt-10 border-t border-gray-200 pt-6">
            <h3 className="text-2xl font-semibold mb-4 tracking-tight">
              Technical Details
            </h3>
            <div className="space-y-4">
              {techSpecs.map((spec) => (
                <div
                  key={spec.id}
                  className="border-b border-gray-200 pb-4 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleSection(spec.id)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="text-lg font-medium text-gray-800">
                      {spec.title}
                    </span>
                    {openSection === spec.id ? (
                      <X className="w-5 h-5 text-gray-600 rotate-90 transition-transform duration-300" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600 transition-transform duration-300" />
                    )}
                  </button>

                  <AnimatePresence>
                    {openSection === spec.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-3 text-gray-600 whitespace-pre-line text-sm leading-relaxed"
                      >
                        {spec.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcaseHuxAura;
