
export interface EarbudsModelFeatures {
  id: string;
  name: string;
  color: string;
  description: string;
  price: string;
  features: {
    icon: string; // Changed from React.ComponentType to string
    title: string;
    description: string;
  }[];
}

// We'll import these dynamically in the component
export const getEarbudsModels = (): EarbudsModelFeatures[] => [
  {
    id: 'hux-lite',
    name: 'HUX Lite',
    color: 'bg-blue-500',
    description: 'Entry-level earbuds with premium sound',
    price: '$99',
    features: [
      {
        icon: 'Battery',
        title: 'Battery Life',
        description: 'Up to 24 hours with case (6hr standalone)'
      },
      {
        icon: 'Volume2',
        title: 'Sound Quality',
        description: 'HD Audio with 40mm drivers'
      },
      {
        icon: 'Wifi',
        title: 'Connectivity',
        description: 'Bluetooth 5.2 with quick pairing'
      },
      {
        icon: 'ShieldCheck',
        title: 'Water Resistance',
        description: 'IPX4 splash resistant'
      }
    ]
  },
  {
    id: 'hux-pro',
    name: 'HUX Pro',
    color: 'bg-viveon-red',
    description: 'Professional-grade audio experience',
    price: '$149',
    features: [
      {
        icon: 'Battery',
        title: 'HyperCore Cell',
        description: '36hr total with case (8hr standalone)'
      },
      {
        icon: 'Volume2',
        title: 'Adaptive ANC',
        description: '30dB noise cancellation with environment calibration'
      },
      {
        icon: 'Wifi',
        title: 'Smart Connect',
        description: 'Bluetooth 5.3 with multipoint (2 devices)'
      },
      {
        icon: 'Mic',
        title: 'Voice Isolation',
        description: 'Beamforming mics with wind rejection'
      }
    ]
  },
  {
    id: 'hux-quantum',
    name: 'HUX Quantum',
    color: 'bg-viveon-neon-blue',
    description: 'Ultimate wireless audio experience',
    price: '$199',
    features: [
      {
        icon: 'Zap',
        title: 'Quantum Charge',
        description: '15-min charge delivers 8hr playback'
      },
      {
        icon: 'Headphones',
        title: 'ANC 360°',
        description: '40dB hybrid noise cancellation'
      },
      {
        icon: 'Music',
        title: 'Spatial Sound',
        description: 'Dolby Atmos with head tracking'
      },
      {
        icon: 'ShieldCheck',
        title: 'NanoGuard IPX7',
        description: 'Military-grade moisture protection'
      }
    ]
  }
];
