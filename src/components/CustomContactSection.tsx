
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Send } from 'lucide-react';

const CustomContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">Connect With Us</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Have questions about our products or interested in partnership opportunities?
            Get in touch with Viveon Gizit Private Limited
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-gray-900/50 border-gray-800 focus:border-viveon-red text-white"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-gray-900/50 border-gray-800 focus:border-viveon-red text-white"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="bg-gray-900/50 border-gray-800 focus:border-viveon-red text-white min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-viveon-red hover:bg-viveon-red/90 text-white">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800 mb-6">
                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-viveon-red font-medium">Address</p>
                    <p className="text-gray-300">123 Tech Hub, Silicon Valley, CA 94024</p>
                  </div>
                  <div>
                    <p className="text-viveon-red font-medium">Phone</p>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-viveon-red font-medium">Email</p>
                    <p className="text-gray-300">info@viveongizit.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomContactSection;
