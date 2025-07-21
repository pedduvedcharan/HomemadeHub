import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'feature' | 'vendor' | 'menu';
  onClick?: () => void;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  onClick,
  hover = false,
}) => {
  const baseClasses = 'rounded-xl transition-all duration-200';
  
  const variantClasses = {
    default: 'bg-white shadow-sm border border-gray-200',
    feature: 'bg-white/10 backdrop-blur-sm border border-white/20',
    vendor: 'bg-white shadow-md border border-gray-200 hover:shadow-lg',
    menu: 'bg-white shadow-sm border border-gray-200 hover:shadow-md',
  };
  
  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-lg' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        clickableClasses,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card; 