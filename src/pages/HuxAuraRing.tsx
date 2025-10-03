import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HuxAuraRing = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedSize, setSelectedSize] = useState('9');

  const productImages = [
    '/lovable-uploads/fe514457-06a6-4e0c-adbb-5f677bb8f4f7.png',
    '/lovable-uploads/6eb376f4-57db-4739-8ddd-1ff2837821ff.png',
    '/lovable-uploads/7461b774-3563-44bc-9ba3-de5051ce67fb.png',
    '/lovable-uploads/ac364875-2d34-4643-a84d-bc85cdf5decd.png',
  ];

  const colors = [
    { name: 'Black', class: 'bg-gray-900' },
    { name: 'Gold', class: 'bg-yellow-600' },
  ];

  const sizes = ['6', '7', '8', '9', '10', '11', '12', '13'];

  const features = [
    {
      title: 'Sleek Concave Design for Lightweight Comfort',
      description: 'The HUX AURA smart ring introduces an innovative concave design, making it 20% lighter than previous models. This refined structure ensures a comfortable, barely-there feel, perfect for all-day wear without compromising style or function.'
    },
    {
      title: 'Advanced Health Tracking with Temperature Monitoring',
      description: 'Equipped with a new temperature sensor, the AURA goes beyond traditional health tracking to monitor your body temperature. Stay aware of changes in your wellness with real-time, precise temperature readings, adding a new layer of insight to your health routine.'
    },
    {
      title: 'Effortless Integration for Everyday Wear',
      description: 'Compact yet powerful, the HUX AURA smart ring seamlessly integrates into your lifestyle, delivering key health insights without the bulk. It\'s an ideal choice for those seeking advanced wellness tracking in a minimal, stylish form.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Product Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            
            {/* Left: Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative bg-muted rounded-2xl overflow-hidden aspect-square">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={productImages[selectedImage]}
                  alt="HUX AURA Smart Ring"
                  className="w-full h-full object-contain p-8"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => setSelectedImage(prev => prev === 0 ? productImages.length - 1 : prev - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setSelectedImage(prev => prev === productImages.length - 1 ? 0 : prev + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 px-4 py-2 rounded-full text-sm">
                  {selectedImage + 1} / {productImages.length}
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-primary' : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-contain p-2 bg-muted" />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right: Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
                  HUX AURA Smart Ring
                </h1>
                <p className="text-muted-foreground text-lg">
                  Advanced health monitoring in a sleek, comfortable design
                </p>
              </div>
              
              {/* Price */}
              <div className="py-4 border-y border-border">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold">₹12,999</span>
                  <span className="text-xl text-muted-foreground line-through">₹16,999</span>
                  <Badge variant="destructive">Save 24%</Badge>
                </div>
              </div>
              
              {/* Color Selection */}
              <div>
                <label className="block text-sm font-medium mb-3 text-foreground">
                  Color: <span className="font-bold">{selectedColor}</span>
                </label>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-12 h-12 rounded-full border-2 transition-all ${
                        selectedColor === color.name ? 'border-primary scale-110' : 'border-border'
                      }`}
                    >
                      <div className={`w-full h-full rounded-full ${color.class}`} />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Size Selection */}
              <div>
                <label className="block text-sm font-medium mb-3 text-foreground">Ring size</label>
                <div className="grid grid-cols-4 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 rounded-lg border transition-all font-medium ${
                        selectedSize === size
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-card text-foreground border-border hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Buy Button */}
              <Button size="lg" className="w-full text-lg h-14">
                Pre-Order Now
              </Button>
              
              {/* Key Features */}
              <div className="space-y-3 pt-4">
                <h3 className="font-semibold text-lg mb-4 text-foreground">Key Features</h3>
                <div className="space-y-2 text-sm text-foreground">
                  <div className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>5ATM Waterproof - Swim & shower friendly</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>4-6 Days Battery Life - Charges in 2 hours</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>24/7 Health Tracking - Heart rate, SpO₂, temperature</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>iOS & Android Compatible</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Medical-grade Materials - Premium & safe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Descriptions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-3"
              >
                <h2 className="text-2xl md:text-3xl font-bold">{feature.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium">CPU</span>
                <span className="text-muted-foreground text-right">Ultra Low Power Bluetooth</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium">Sensors</span>
                <span className="text-muted-foreground text-right">HR, SpO₂, Temp, G-sensor</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium">Vibration</span>
                <span className="text-muted-foreground text-right">Precision motor</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium">Outer Material</span>
                <span className="text-muted-foreground text-right">Stainless Steel</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium">Inner Material</span>
                <span className="text-muted-foreground text-right">Medical-grade Steel</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium">Dimensions</span>
                <span className="text-muted-foreground text-right">7.5mm × 2.5mm</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium">Battery Life</span>
                <span className="text-muted-foreground text-right">4-6 days</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium">Sizes</span>
                <span className="text-muted-foreground text-right">6-13</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium">Water Resistance</span>
                <span className="text-muted-foreground text-right">5ATM (50m)</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium">Compatibility</span>
                <span className="text-muted-foreground text-right">iOS & Android</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HuxAuraRing;