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
Inner Material: Premium Steel
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
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-16 items-start">
        {/* LEFT: Product image + Tech details */}
        <motion.div
          className="flex flex-col items-center lg:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-neutral-50 rounded-3xl shadow-xl p-10 flex justify-center items-center mb-10 hover:shadow-2xl transition-all duration-300">
            <img
              src="/lovable-uploads/Dark-theme.png"
              alt="HUX AURA Smart Ring"
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Technical Details Accordion */}
          <div className="w-full mt-4">
            <h3 className="text-2xl font-semibold mb-4 tracking-tight text-gray-800 border-l-4 border-gray-800 pl-3">
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
                    className="w-full flex justify-start items-center gap-3 text-left group"
                  >
                    {openSection === spec.id ? (
                      <X className="w-5 h-5 text-gray-700 rotate-90 transition-transform duration-300 group-hover:text-black" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500 group-hover:text-black transition-transform duration-300" />
                    )}
                    <span className="text-lg font-medium text-gray-800 group-hover:text-black transition-colors duration-300">
                      {spec.title}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openSection === spec.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-3 text-gray-600 whitespace-pre-line text-sm leading-relaxed border-l-2 border-gray-100 pl-4"
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

        {/* RIGHT: Product info */}
        <motion.div
          className="flex flex-col gap-6 lg:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
              <span className="text-gray-800">HUX</span>{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                AURA Smart Ring
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-light mb-4">
              Advanced health monitoring in a sleek, comfortable design
            </p>

            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl font-semibold">₹XXXX</span>
              {/* <span className="text-gray-400 line-through text-lg">
                ₹XXXX
              </span>
              <span className="text-green-600 font-medium">Save XX%</span> */}
            </div>

            <div className="text-sm text-gray-700 mb-6">
              <p>
                <strong>Color:</strong> Black
              </p>
              <p>
                <strong>Ring size:</strong> Select your size
              </p>
            </div>

            {/* Key Features with Motion */}
            <motion.div
              className="space-y-2 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2 text-gray-800">
                {[
                  "5ATM Waterproof",
                  "4–6 Days Battery Life",
                  "24/7 Health Tracking – Heart rate, SpO₂, temperature",
                  "iOS & Android Compatible",
                  "Premium Materials",
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-blue-600 font-semibold">✓</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Coming Soon Button */}
            <Button
              variant="default"
              className="rounded-full px-8 py-4 text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg hover:opacity-90 transition-all duration-300 w-fit"
            >
              Coming Soon
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcaseHuxAura;
