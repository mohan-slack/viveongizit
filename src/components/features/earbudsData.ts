import { FeatureProps } from './FeatureTypes';

export const getEarbudsData = (): Omit<FeatureProps, 'index'>[] => [
  {
    id: 'earbuds-1',
    iconName: "Zap",
    emoji: "⚡",
    title: "Adaptive Power Meter",
    description: "Real-time battery tracking with dynamic charge visualization",
    color: "border-viveon-red/30 bg-viveon-red/5",
    additionalInfo: "OLED display shows animated power flow between earbuds and case with capacity forecasting",
    category: "earbuds"
  },
  {
    id: 'earbuds-2',
    iconName: "Headphones",
    emoji: "🎧",
    title: "Smart ANC Meter",
    description: "Visual noise cancellation adjustment with environment sensing",
    color: "border-viveon-neon-blue/30 bg-viveon-neon-blue/5",
    additionalInfo: "Pressure-sensitive controls adjust cancellation depth from 25dB to 40dB in 5dB increments",
    category: "earbuds"
  },
  {
    id: 'earbuds-3',
    iconName: "Wifi",
    emoji: "📡",
    title: "Signal Strength Indicator",
    description: "Real-time Bluetooth connection quality meter",
    color: "border-viveon-neon-purple/30 bg-viveon-neon-purple/5",
    additionalInfo: "Dual-band RF monitor shows 2.4GHz/5GHz signal integrity with automatic frequency switching",
    category: "earbuds"
  },
  {
    id: 'earbuds-4',
    iconName: "Battery",
    emoji: "🔋",
    title: "Battery Health Meter",
    description: "Cycle count tracking with degradation visualization",
    color: "border-green-500/30 bg-green-500/5",
    additionalInfo: "Lithium-polymer health monitoring estimates remaining battery lifespan in charge cycles",
    category: "earbuds"
  },
  {
    id: 'earbuds-5',
    iconName: "Music",
    emoji: "🏟️",
    title: "Spatial Audio Calibrator",
    description: "Head tracking accuracy meter with positional feedback",
    color: "border-purple-500/30 bg-purple-500/5",
    additionalInfo: "6-axis gyroscope provides spatial audio alignment accuracy within ±3°",
    category: "earbuds"
  },
  {
    id: 'earbuds-6',
    iconName: "Mic",
    emoji: "🎙️",
    title: "Voice Activity Detector",
    description: "Real-time microphone input level meter",
    color: "border-blue-500/30 bg-blue-500/5",
    additionalInfo: "Peak/RMS monitoring prevents audio clipping with automatic gain control",
    category: "earbuds"
  },
  {
    id: 'earbuds-7',
    iconName: "Droplets",
    emoji: "💧",
    title: "Water Exposure Meter",
    description: "IPX7 immersion timer with dry-out detection",
    color: "border-sky-500/30 bg-sky-500/5",
    additionalInfo: "Capacitive sensors track liquid exposure duration and recommend drying times",
    category: "earbuds"
  },
  {
    id: 'earbuds-8',
    iconName: "Heart",
    emoji: "❤️",
    title: "Health Metric Monitor",
    description: "Continuous heart rate variability tracking",
    color: "border-red-500/30 bg-red-500/5",
    additionalInfo: "PPG sensor samples at 256Hz for medical-grade accuracy (±2BPM)",
    category: "earbuds"
  },
  {
    id: 'earbuds-9',
    iconName: "Gauge",
    emoji: "📊",
    title: "Audio Balance Meter",
    description: "Channel level matching with stereo calibration",
    color: "border-amber-500/30 bg-amber-500/5",
    additionalInfo: "Per-ear SPL matching within ±1dB for perfect stereo balance",
    category: "earbuds"
  }
];
