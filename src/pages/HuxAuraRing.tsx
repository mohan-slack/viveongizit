import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ScrollingFeatureCards from '@/components/ScrollingFeatureCards';
import smartRingImage from '@/assets/smart-touch-ring.jpg';

const HuxAuraRing = () => {
  const navigate = useNavigate();

  const specifications = [
    { label: "CPU", value: "Ultra Low Power Bluetooth Chip" },
    { label: "Sensors", value: "Heart Rate, SpO₂, Body Temperature, G-sensor" },
    { label: "Vibration Alert", value: "Low consumption & high precision motor" },
    { label: "Outer Ring Material", value: "Premium Stainless Steel" },
    { label: "Inner Ring Material", value: "Medical-grade Stainless Steel" },
    { label: "Dimensions", value: "Width: 7.5mm, Thickness: 2.5mm" },
    { label: "Battery Life", value: "4-6 days continuous use" },
    { label: "Available Sizes", value: "6, 7, 8, 9, 10, 11, 12, 13 (Indian sizing)" },
    { label: "Water Resistance", value: "5ATM (50m waterproof)" },
    { label: "Compatibility", value: "iOS & Android (works with popular Indian apps)" }
  ];

  return (
    <div className="min-h-screen bg-viveon-darker text-white relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-viveon-neon-blue/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Button 
              variant="ghost" 
              onClick={() => navigate('/products')}
              className="mb-8 text-viveon-neon-blue hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
            
            <div className="relative mb-8">
              <div className="absolute -inset-3 bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue rounded-full blur-xl opacity-60 animate-pulse"></div>
              <img 
                src={smartRingImage} 
                alt="HUX AURA Smart Ring" 
                className="relative w-64 h-64 mx-auto object-contain"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-viveon-neon-blue via-viveon-neon-purple to-viveon-red bg-clip-text text-transparent">
              HUX AURA RING
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              The Future of Health Monitoring for India - Advanced Smart Ring Technology
              Designed for Indian Lifestyle and Climate Conditions
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Made for India
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                5ATM Waterproof
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                4-6 Days Battery
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                iOS & Android Compatible
              </Badge>
            </div>
            
            <div className="flex justify-center">
              <Button size="lg" className="bg-gradient-to-r from-viveon-neon-blue to-viveon-neon-purple hover:opacity-90">
                Pre-Order Now - ₹12,999
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <ScrollingFeatureCards />

      {/* Specifications Section */}
      <section className="py-20 bg-viveon-dark/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-viveon-neon-purple to-viveon-red bg-clip-text text-transparent">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-300">
              Premium engineering meets Indian quality standards
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-viveon-darker/80 border-viveon-neon-purple/30">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {specifications.map((spec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex justify-between items-center py-3 border-b border-viveon-neon-blue/20 last:border-b-0"
                    >
                      <span className="font-medium text-viveon-neon-blue">
                        {spec.label}
                      </span>
                      <span className="text-gray-300 text-right">
                        {spec.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Features for India */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-viveon-red to-viveon-neon-purple bg-clip-text text-transparent">
              Designed Specifically for India
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-viveon-neon-blue/10 to-viveon-neon-purple/10 border-viveon-neon-blue/30">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-viveon-neon-blue">
                    Climate Adapted
                  </h3>
                  <p className="text-gray-300">
                    Optimized sensors for India's diverse climate conditions from 
                    Rajasthan's heat to Kerala's humidity.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-viveon-neon-purple/10 to-viveon-red/10 border-viveon-neon-purple/30">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-viveon-neon-purple">
                    Cultural Integration
                  </h3>
                  <p className="text-gray-300">
                    Festival reminders, Indian calendar integration, and 
                    traditional wellness practices monitoring.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-viveon-red/10 to-viveon-neon-blue/10 border-viveon-red/30">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-viveon-red">
                    Local App Support
                  </h3>
                  <p className="text-gray-300">
                    Works seamlessly with popular Indian apps and 
                    supports multiple Indian languages.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gradient-to-r from-viveon-neon-blue/20 to-viveon-neon-purple/20 rounded-2xl p-8 border border-viveon-neon-blue/30">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Emergency SOS for Indian Conditions
              </h3>
              <p className="text-gray-300 mb-6">
                Designed for India's unique safety needs - works in areas with poor network 
                connectivity and integrates with local emergency services. Simply tap the ring 
                10 times to activate emergency protocols.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge variant="outline" className="border-viveon-neon-blue text-viveon-neon-blue">
                  Location Sharing
                </Badge>
                <Badge variant="outline" className="border-viveon-neon-blue text-viveon-neon-blue">
                  Emergency Contacts
                </Badge>
                <Badge variant="outline" className="border-viveon-neon-blue text-viveon-neon-blue">
                  Voice Messages
                </Badge>
                <Badge variant="outline" className="border-viveon-neon-blue text-viveon-neon-blue">
                  SMS Alerts
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-viveon-neon-blue/10 via-viveon-neon-purple/10 to-viveon-red/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-viveon-neon-blue via-viveon-neon-purple to-viveon-red bg-clip-text text-transparent">
              Be Among the First in India
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of Indians who are already transforming their health 
              monitoring with the HUX AURA RING. Pre-order now and get exclusive 
              early bird pricing.
            </p>
            
            <div className="bg-viveon-darker/80 rounded-2xl p-8 border border-viveon-neon-blue/30 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Early Bird Special
                  </h3>
                  <p className="text-gray-300">
                    Limited time offer for first 1000 customers in India
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-2xl font-bold text-viveon-neon-blue">
                      ₹12,999
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      ₹16,999
                    </span>
                    <Badge className="bg-viveon-red text-white">
                      Save ₹4,000
                    </Badge>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-viveon-neon-blue to-viveon-neon-purple hover:opacity-90 min-w-[200px]">
                    Pre-Order Now
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <span>✓ Free shipping across India</span>
              <span>✓ 6-Months warranty</span>
              <span>✓ 24/7 customer support</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HuxAuraRing;