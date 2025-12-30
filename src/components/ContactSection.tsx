"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactItems = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      content: "Electronic City, Bangalore, Karnataka, INDIA",
      color: "text-accent"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "+91 9390807900",
      color: "text-accent"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "viveongizitpvtltd@gmail.com",
      color: "text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Get in <span className="text-accent">touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Have questions about HUX? We're here to help.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-card rounded-3xl border border-border p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactItems.map((item, index) => (
              <motion.div 
                key={item.title}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <span className={item.color}>{item.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.content}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Company Info */}
          <div className="mt-10 pt-8 border-t border-border text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Viveon Gizit Private Limited</h3>
            <p className="text-sm text-muted-foreground">
              HUX™ is a registered trademark of Viveon Gizit Private Limited.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
