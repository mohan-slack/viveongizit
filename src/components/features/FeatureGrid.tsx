
import React from 'react';
import FeatureCard from './FeatureCard';
import ConnectorLines from './ConnectorLines';
import { FeatureProps } from './FeatureTypes';

interface FeatureGridProps {
  features: Omit<FeatureProps, 'index'>[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 relative">
      <div className="md:mt-0 space-y-6 lg:space-y-10">
        <FeatureCard {...features[0]} index={0} />
        <FeatureCard {...features[2]} index={2} />
      </div>
      <div className="md:mt-12 space-y-6 lg:space-y-10">
        <FeatureCard {...features[1]} index={1} />
        <FeatureCard {...features[3]} index={3} />
      </div>
      <ConnectorLines />
    </div>
  );
};

export default FeatureGrid;
