
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Headphones, Music, ShieldCheck, Battery, Volume2, Wifi, Mic } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getEarbudsModels } from './earbudsModelsData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface AIAssistantPanelProps {
  isAnimating: boolean;
}

const AIAssistantPanel: React.FC<AIAssistantPanelProps> = ({ isAnimating }) => {
  const navigate = useNavigate();
  const earbudsModels = getEarbudsModels();
  const [selectedModel, setSelectedModel] = useState(earbudsModels[2].id); // Default to Quantum
  
  // Get icon component based on name
  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      'Battery': <Battery className="w-4 h-4" />,
      'Volume2': <Volume2 className="w-4 h-4" />,
      'Wifi': <Wifi className="w-4 h-4" />,
      'ShieldCheck': <ShieldCheck className="w-4 h-4" />,
      'Zap': <Zap className="w-4 h-4" />,
      'Headphones': <Headphones className="w-4 h-4" />,
      'Music': <Music className="w-4 h-4" />,
      'Mic': <Mic className="w-4 h-4" />
    };
    
    return icons[iconName] || null;
  };
  
  // Handle navigation to the products page
  const handleBuyNowClick = () => {
    navigate('/products', { state: { scrollToSection: 'earbuds' } });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        transition: { 
          duration: 0.5, 
          delay: isAnimating ? 1.2 : 0.8 
        }
      }}
      className="w-72 bg-black/80 backdrop-blur-md rounded-xl p-4 border border-gray-800/50 shadow-lg"
    >
      <div className="text-center mb-3">
        <h3 className="text-lg font-bold text-white tracking-tight">
          Meet Your <span className="text-viveon-red">AI Assistant</span>
        </h3>
        <p className="text-xs text-gray-400">Explore HUX earbuds models</p>
      </div>
      
      <Tabs defaultValue={selectedModel} className="w-full" onValueChange={setSelectedModel}>
        <TabsList className="grid grid-cols-3 mb-4">
          {earbudsModels.map(model => (
            <TabsTrigger 
              key={model.id} 
              value={model.id}
              className={`text-xs px-2 py-1 ${selectedModel === model.id ? 'bg-opacity-100' : 'bg-opacity-50'}`}
            >
              {model.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {earbudsModels.map(model => (
          <TabsContent key={model.id} value={model.id} className="space-y-4 mt-2">
            <div className="text-center mb-2">
              <h4 className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white ${model.color}`}>
                {model.name} - {model.price}
              </h4>
              <p className="text-xs text-gray-300 mt-1">{model.description}</p>
            </div>
            
            <div className="space-y-3">
              {model.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
                  className="flex items-start p-2 rounded-lg bg-gray-900/60 border border-gray-800"
                >
                  <div className={`p-1.5 rounded-full bg-gray-800/80 mr-3 ${model.color} bg-opacity-30`}>
                    {getIcon(feature.icon)}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">{feature.title}</h4>
                    <p className="text-xs text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="flex justify-center mt-4"
            >
              <Button 
                onClick={handleBuyNowClick}
                className={`${model.color} hover:bg-opacity-90 text-white py-5 px-6 rounded-full group`}
              >
                Explore {model.name}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
      
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-xl p-[1px] overflow-hidden pointer-events-none">
        <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-conic-gradient opacity-50"></div>
      </div>
    </motion.div>
  );
};

export default AIAssistantPanel;
