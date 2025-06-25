
import React from 'react';

interface AnimationStageProps {
  stage: number;
}

const AnimationStage: React.FC<AnimationStageProps> = ({ stage }) => {
  if (stage === 1) {
    return (
      <div className="text-6xl md:text-7xl font-bold text-viveon-red">
        HUX<span className="text-white text-[0.25em] align-top leading-none">™</span>
      </div>
    );
  }
  
  if (stage >= 2 && stage < 4) {
    return (
      <div className="text-6xl md:text-7xl font-bold flex">
        <span className="text-viveon-red">H</span>
        <span className="text-viveon-neon-blue">U</span>
        <span className="text-viveon-neon-purple">X</span>
        <span className="text-white text-[0.25em] align-top leading-none">™</span>
      </div>
    );
  }
  
  return null;
};

export default AnimationStage;
