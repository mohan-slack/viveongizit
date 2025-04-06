
import React from 'react';
import { AUDIO_BAR_COLORS } from './colorUtils';

interface AudioVisualizationProps {
  audioLevels: number[];
  isVisible: boolean;
}

const AudioVisualization: React.FC<AudioVisualizationProps> = ({ audioLevels, isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <>
      {/* Fullscreen Audio Visualization - Left Side */}
      <div
        className="absolute left-0 top-0 h-full w-1/2 flex items-center justify-end space-x-1 px-4"
        style={{ opacity: 1 }}
      >
        <div className="flex items-end h-full w-full justify-end space-x-1">
          {audioLevels.slice(0, 10).map((level, index) => (
            <div
              key={`left-${index}`}
              className="w-2 md:w-2.5 rounded-t-md"
              style={{
                height: `${level * 100}%`,
                backgroundColor: AUDIO_BAR_COLORS[index % AUDIO_BAR_COLORS.length],
                boxShadow: `0 0 8px ${AUDIO_BAR_COLORS[index % AUDIO_BAR_COLORS.length]}`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Fullscreen Audio Visualization - Right Side */}
      <div
        className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-start space-x-1 px-4"
        style={{ opacity: 1 }}
      >
        <div className="flex items-end h-full w-full justify-start space-x-1">
          {audioLevels.slice(10, 20).map((level, index) => (
            <div
              key={`right-${index}`}
              className="w-2 md:w-2.5 rounded-t-md"
              style={{
                height: `${level * 100}%`,
                backgroundColor: AUDIO_BAR_COLORS[(AUDIO_BAR_COLORS.length - 1 - index) % AUDIO_BAR_COLORS.length],
                boxShadow: `0 0 8px ${AUDIO_BAR_COLORS[(AUDIO_BAR_COLORS.length - 1 - index) % AUDIO_BAR_COLORS.length]}`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AudioVisualization;
