
import React from 'react';

export interface FeatureProps {
  iconName: string;
  emoji: string;
  title: string;
  description: string;
  index: number;
  color: string;
  glowColor: string;
  additionalInfo?: string;
  category?: 'earbuds' | 'smartrings';
}
