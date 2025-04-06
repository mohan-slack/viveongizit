
import React from 'react';
import { useLogoAnimation } from './useLogoAnimation';
import { useAudioAnimation } from './useAudioAnimation';
import InitialLogo from './InitialLogo';
import CompleteLogo from './CompleteLogo';
import AnimationStage from './AnimationStage';
import AudioVisualization from './AudioVisualization';

const HuxLogoAnimation: React.FC = () => {
  const { animationStage, animationComplete, textColor, textOpacity } = useLogoAnimation();
  const { audioLevels } = useAudioAnimation(animationStage);

  // Skip the initial red HUX by going directly to the animation sequence
  // or showing the completed logo immediately
  if (animationComplete) {
    return <CompleteLogo textColor={textColor} textOpacity={textOpacity} />;
  }

  // The animation sequence
  return (
    <div className="relative h-32 w-full flex justify-center items-center">
      {/* Audio Visualization */}
      <AudioVisualization 
        audioLevels={audioLevels} 
        isVisible={animationStage >= 2 && animationStage < 4}
      />
      
      {/* Center content */}
      <div className="relative z-10">
        <AnimationStage stage={animationStage} />
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-viveon-darker to-transparent"></div>
    </div>
  );
};

export default HuxLogoAnimation;
