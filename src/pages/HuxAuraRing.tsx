import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Zap, Heart, Activity, Moon, Thermometer, Waves, Bell, Cpu, Shield, Smartphone, Battery, Droplets, CircuitBoard, Sparkles, Clock, ChevronRight } from 'lucide-react';

interface ProductVariant {
  id: string;
  name: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  glowColor: string;
  accentColor: string;
  image: string;
  price: string;
  originalPrice: string;
}

const variants: ProductVariant[] = [
  {
    id: 'sterling-gold',
    name: 'Sterling Gold',
    color: 'Gold',
    gradientFrom: 'from-amber-400',
    gradientTo: 'to-yellow-600',
    glowColor: 'shadow-amber-500/50',
    accentColor: 'text-amber-400',
    image: '/lovable-uploads/7461b774-3563-44bc-9ba3-de5051ce67fb.png',
    price: '₹12,999',
    originalPrice: '₹16,999'
  },
  {
    id: 'tarnish-grey',
    name: 'Tarnish Grey',
    color: 'Grey',
    gradientFrom: 'from-slate-400',
    gradientTo: 'to-zinc-600',
    glowColor: 'shadow-slate-500/50',
    accentColor: 'text-slate-300',
    image: '/lovable-uploads/fe514457-06a6-4e0c-adbb-5f677bb8f4f7.png',
    price: '₹12,999',
    originalPrice: '₹16,999'
  }
];

const features = [
  { icon: Heart, label: 'Heart Rate', desc: '24/7 Monitoring' },
  { icon: Activity, label: 'SpO₂', desc: 'Blood Oxygen' },
  { icon: Moon, label: 'Sleep', desc: 'Deep Analysis' },
  { icon: Thermometer, label: 'Temperature', desc: 'Body Temp' },
  { icon: Waves, label: 'Waterproof', desc: '5ATM Rating' },
  { icon: Zap, label: 'Battery', desc: '4-6 Days' }
];

const specs = [
  { icon: CircuitBoard, label: 'Material', value: 'Premium Stainless Steel' },
  { icon: Shield, label: 'Inner Coating', value: 'Medical-grade Hypoallergenic' },
  { icon: Sparkles, label: 'Weight', value: '4-6g (Size dependent)' },
  { icon: Cpu, label: 'Dimensions', value: '7.5mm × 2.5mm' },
  { icon: Droplets, label: 'Water Resistance', value: '5ATM (50m depth)' },
  { icon: Battery, label: 'Battery Life', value: '4-6 days typical use' },
  { icon: Clock, label: 'Charging Time', value: '~2 hours' },
  { icon: Bell, label: 'Connectivity', value: 'Bluetooth 5.2 BLE' },
  { icon: Heart, label: 'Sensors', value: 'PPG, Temp, 3-axis Accel' },
  { icon: Smartphone, label: 'Compatibility', value: 'iOS 14+ & Android 9+' },
];

const ElectricCard = ({ variant, isSelected, onSelect }: { 
  variant: ProductVariant; 
  isSelected: boolean;
  onSelect: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02, y: -8 }}
      onClick={onSelect}
      className={`relative cursor-pointer group`}
    >
      {/* Electric Border Effect */}
      <div className={`absolute -inset-[2px] bg-gradient-to-r ${variant.gradientFrom} ${variant.gradientTo} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
      
      {/* Animated Electric Lines */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className={`absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent ${variant.gradientFrom} to-transparent`}
        />
        <motion.div
          animate={{ x: ['200%', '-100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 1.5 }}
          className={`absolute bottom-0 right-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent ${variant.gradientFrom} to-transparent`}
        />
        <motion.div
          animate={{ y: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 0.75 }}
          className={`absolute top-0 right-0 w-[2px] h-1/3 bg-gradient-to-b from-transparent ${variant.gradientFrom} to-transparent`}
        />
        <motion.div
          animate={{ y: ['200%', '-100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 2.25 }}
          className={`absolute bottom-0 left-0 w-[2px] h-1/3 bg-gradient-to-b from-transparent ${variant.gradientFrom} to-transparent`}
        />
      </div>

      {/* Card Content */}
      <div className={`relative bg-slate-900/95 backdrop-blur-xl rounded-3xl p-8 border border-slate-800/50 transition-all duration-500 ${isSelected ? `ring-2 ring-offset-2 ring-offset-slate-950 ${variant.glowColor} shadow-2xl ${variant.glowColor}` : ''}`}>
        
        {/* Model Badge */}
        <div className="flex items-center justify-between mb-6">
          <span className={`text-xs font-bold tracking-widest ${variant.accentColor}`}>HUX01</span>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${variant.gradientFrom} ${variant.gradientTo} text-black text-xs font-bold`}
          >
            <Zap className="w-3 h-3" />
            ELECTRIC
          </motion.div>
        </div>

        {/* Product Image */}
        <div className="relative h-64 mb-6">
          <div className={`absolute inset-0 bg-gradient-to-r ${variant.gradientFrom} ${variant.gradientTo} opacity-20 blur-3xl rounded-full scale-75`} />
          <motion.img
            src={variant.image}
            alt={variant.name}
            className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
            animate={{ 
              y: [0, -10, 0],
              rotateY: [0, 5, 0, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${variant.gradientFrom} ${variant.gradientTo}`}
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>

        {/* Product Name */}
        <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${variant.gradientFrom} ${variant.gradientTo} bg-clip-text text-transparent`}>
          {variant.name}
        </h3>
        <p className="text-slate-400 text-sm mb-6">Premium Smart Ring • {variant.color} Edition</p>

        {/* Price */}
        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-3xl font-bold text-white">{variant.price}</span>
          <span className="text-lg text-slate-500 line-through">{variant.originalPrice}</span>
          <span className={`text-sm font-bold ${variant.accentColor}`}>24% OFF</span>
        </div>

        {/* Mini Features Grid */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="text-center p-2 rounded-xl bg-slate-800/50 border border-slate-700/30">
              <feat.icon className={`w-4 h-4 mx-auto mb-1 ${variant.accentColor}`} />
              <p className="text-[10px] text-slate-400">{feat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button 
            className={`w-full h-12 text-lg font-bold bg-gradient-to-r ${variant.gradientFrom} ${variant.gradientTo} text-black hover:opacity-90 transition-all duration-300 shadow-lg ${variant.glowColor}`}
          >
            Pre-Order Now
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const HuxAuraRing = () => {
  const [selectedVariant, setSelectedVariant] = useState<string>('sterling-gold');

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-slate-500/20 border border-amber-500/30 mb-6"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">HUX01 Collection</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4">
              <span className="text-white">HUX</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-slate-400 bg-clip-text text-transparent">
                Smart Ring
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
              Choose your signature style. Premium health monitoring meets luxury design.
            </p>
          </motion.div>

          {/* Product Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            {variants.map((variant) => (
              <ElectricCard
                key={variant.id}
                variant={variant}
                isSelected={selectedVariant === variant.id}
                onSelect={() => setSelectedVariant(variant.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section - Electric Style */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Electric Border Container */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-60 blur-sm animate-pulse" />
            
            {/* Animated Electric Lines */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute top-0 left-0 w-1/2 h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              />
              <motion.div
                animate={{ x: ['200%', '-100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 2 }}
                className="absolute bottom-0 right-0 w-1/2 h-[3px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"
              />
              <motion.div
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 1 }}
                className="absolute top-0 right-0 w-[3px] h-1/2 bg-gradient-to-b from-transparent via-pink-400 to-transparent"
              />
              <motion.div
                animate={{ y: ['200%', '-100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 3 }}
                className="absolute bottom-0 left-0 w-[3px] h-1/2 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
              />
            </div>

            {/* Content */}
            <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-3xl p-10 md:p-16 border border-slate-800/50">
              {/* Electric Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="flex justify-center mb-8"
              >
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-500/40">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                  <span className="text-sm font-bold tracking-widest bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    LAUNCHING Q2 2025
                  </span>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-black text-center mb-6"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-slate-400 text-lg md:text-xl text-center max-w-2xl mx-auto mb-10"
              >
                Be the first to experience the future of wearable technology. 
                Join the waitlist for exclusive early access and special launch pricing.
              </motion.p>

              {/* Features Preview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { icon: Zap, label: 'AI Health Insights', color: 'text-cyan-400' },
                  { icon: Shield, label: 'Enhanced Security', color: 'text-purple-400' },
                  { icon: Cpu, label: 'Next-Gen Sensors', color: 'text-pink-400' },
                  { icon: Smartphone, label: 'Seamless Sync', color: 'text-amber-400' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                    <div className="relative bg-slate-800/50 border border-slate-700/30 rounded-xl p-4 text-center">
                      <item.icon className={`w-6 h-6 mx-auto mb-2 ${item.color}`} />
                      <p className="text-white text-sm font-medium">{item.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="flex justify-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button className="h-14 px-10 text-lg font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-all shadow-lg shadow-purple-500/30">
                    Join Waitlist
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Electric Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.25,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Details Section - Electric Style */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6"
            >
              <CircuitBoard className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">SPECIFICATIONS</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Technical Details
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Built with precision engineering, designed for peak performance
            </p>
          </motion.div>

          {/* Specs Grid */}
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {specs.map((spec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.02, x: idx % 2 === 0 ? 5 : -5 }}
                className="relative group cursor-pointer"
              >
                {/* Electric Border */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/50 to-teal-500/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                
                {/* Animated Line */}
                <motion.div
                  className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
                >
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: idx * 0.2 }}
                    className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>

                {/* Content */}
                <div className="relative bg-slate-900/80 border border-slate-800/50 rounded-2xl p-5 flex items-center gap-4 group-hover:border-emerald-500/30 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <spec.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-400 text-sm mb-0.5 group-hover:text-emerald-400/80 transition-colors">{spec.label}</p>
                    <p className="text-white font-semibold truncate">{spec.value}</p>
                  </div>

                  {/* Electric Spark on Hover */}
                  <motion.div
                    className="w-2 h-2 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Electric Accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent max-w-2xl mx-auto mt-16"
          />
        </div>
      </section>

      {/* All Features Section */}
      <section className="relative py-20 bg-slate-900/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
              Packed with Advanced Features
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {features.map((feat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="relative group"
                >
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-amber-500/50 to-slate-500/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                  <div className="relative bg-slate-900/80 border border-slate-800/50 rounded-2xl p-4 text-center">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-slate-500/20 flex items-center justify-center">
                      <feat.icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">{feat.label}</h4>
                    <p className="text-slate-500 text-xs">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HuxAuraRing;
