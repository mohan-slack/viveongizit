
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
  selected?: boolean;
  onSelect?: (id: string) => void;
  onDeselect?: (id: string) => void;
  id: string;
}

export interface InteractiveFeatureProps {
  features: Omit<FeatureProps, 'index' | 'selected' | 'onSelect' | 'onDeselect' | 'id'>[];
  maxVisible?: number;
}
