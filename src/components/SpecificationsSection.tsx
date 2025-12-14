import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Radio, Vibrate, CircleDot, Ruler, Battery } from 'lucide-react';

const SpecificationsSection: React.FC = () => {
  const specs = [
    { icon: <Cpu className="w-6 h-6" />, label: 'CPU', value: 'Ultra Low Power Bluetooth Chip' },
    { icon: <Radio className="w-6 h-6" />, label: 'Sensors', value: 'HR, SpO₂, Body Temp., G-sensor' },
    { icon: <Vibrate className="w-6 h-6" />, label: 'Vibration Alert', value: 'Low consumption & high precision motor' },
    { icon: <CircleDot className="w-6 h-6" />, label: 'Material', value: 'Stainless Steel (Outer & Inner)' },
    { icon: <Ruler className="w-6 h-6" />, label: 'Dimensions', value: 'Width: 7.5mm, Thickness: 2.5mm' },
    { icon: <Battery className="w-6 h-6" />, label: 'Battery Life', value: '4-6 Days Operating Time' }
  ];

  return (
    <section className="bg-gradient-to-b from-stone-900 to-stone-950 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ring Parameters
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Premium materials and advanced technology packed into a sleek, comfortable design
          </p>
        </motion.div>

        {/* Specs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-stone-900/50 border border-stone-800 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500/20 transition-colors">
                  {spec.icon}
                </div>
                <div>
                  <h3 className="text-stone-400 text-sm font-medium mb-1">{spec.label}</h3>
                  <p className="text-white font-semibold">{spec.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Waterproof Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
            <div className="text-4xl">💧</div>
            <div className="text-left">
              <div className="text-white font-bold text-lg">5ATM Waterproof</div>
              <div className="text-stone-400 text-sm">Swim, shower, and dive with confidence</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecificationsSection;
