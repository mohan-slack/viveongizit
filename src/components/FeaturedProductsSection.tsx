"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Activity, Moon, Zap, Droplets, Battery } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface ProductVariant {
  id: string;
  name: string;
  colorName: string;
  price: number;
  originalPrice: number;
  image: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
}

const products: ProductVariant[] = [
  {
    id: "sterling-gold",
    name: "HUX AURA",
    colorName: "Sterling Gold",
    price: 249,
    originalPrice: 349,
    image: "/lovable-uploads/7461b774-3563-44bc-9ba3-de5051ce67fb.png",
    accentColor: "#D4AF37",
    gradientFrom: "from-amber-100",
    gradientTo: "to-amber-50",
  },
  {
    id: "tarnish-grey",
    name: "HUX AURA",
    colorName: "Tarnish Grey",
    price: 249,
    originalPrice: 349,
    image: "/lovable-uploads/fe514457-06a6-4e0c-adbb-5f677bb8f4f7.png",
    accentColor: "#6B7280",
    gradientFrom: "from-slate-100",
    gradientTo: "to-slate-50",
  },
];

const features = [
  { icon: Heart, label: "Heart Rate" },
  { icon: Activity, label: "Activity" },
  { icon: Moon, label: "Sleep" },
  { icon: Droplets, label: "5ATM" },
  { icon: Battery, label: "6 Days" },
  { icon: Zap, label: "NFC" },
];

const ProductCard: React.FC<{ product: ProductVariant; index: number }> = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      {/* Card */}
      <div className={`relative bg-gradient-to-br ${product.gradientFrom} ${product.gradientTo} rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${product.accentColor} 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
        
        {/* Color badge */}
        <div className="absolute top-4 right-4 z-10">
          <span 
            className="px-3 py-1 rounded-full text-xs font-medium text-white shadow-md"
            style={{ backgroundColor: product.accentColor }}
          >
            {product.colorName}
          </span>
        </div>

        {/* Product Image */}
        <div className="relative h-48 md:h-64 flex items-center justify-center mb-6">
          <motion.div
            className="absolute inset-0 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: product.accentColor }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={product.image}
            alt={`${product.name} ${product.colorName}`}
            className="relative z-10 h-full w-auto object-contain drop-shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>

        {/* Product Info */}
        <div className="relative z-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mb-1">
            {product.name}
          </h3>
          <p className="text-stone-600 text-sm mb-4">Smart Ring</p>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/60 backdrop-blur-sm"
              >
                <feature.icon className="w-4 h-4 text-stone-600" strokeWidth={1.5} />
                <span className="text-[10px] text-stone-500 font-medium">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="text-2xl font-bold text-stone-800">${product.price}</span>
            <span className="text-sm text-stone-400 line-through">${product.originalPrice}</span>
          </div>

          {/* CTA */}
          <Link to="/hux-aura-ring">
            <Button
              className="w-full rounded-full py-5 text-white font-medium shadow-lg transition-all duration-300 hover:scale-[1.02]"
              style={{ 
                background: `linear-gradient(135deg, ${product.accentColor}, ${product.accentColor}dd)`,
              }}
            >
              Pre-Order Now
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProductsSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white via-stone-50 to-white py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-3">
            Choose Your Style
          </h2>
          <p className="text-stone-600 max-w-lg mx-auto">
            Premium smart ring available in two elegant finishes
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
