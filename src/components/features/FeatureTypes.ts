
export interface FeatureProps {
  id?: string;
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
  backgroundImage?: string;
}

export interface InteractiveFeatureProps {
  features: Omit<FeatureProps, 'index'>[];
  maxVisible?: number;
}
