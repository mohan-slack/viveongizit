import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Icon3DProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  variant?: '3d' | 'float' | 'pulse';
}

export const Icon3D: React.FC<Icon3DProps> = ({
  icon: Icon,
  className,
  size = 24,
  color,
  strokeWidth = 2,
  variant = '3d',
}) => {
  const variantClass = {
    '3d': 'icon-3d',
    float: 'icon-3d float-3d',
    pulse: 'icon-3d pulse-3d',
  }[variant];

  return (
    <div className={cn(variantClass, className)}>
      <Icon size={size} color={color} strokeWidth={strokeWidth} />
    </div>
  );
};
