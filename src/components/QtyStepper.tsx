import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QtyStepperProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const QtyStepper: React.FC<QtyStepperProps> = ({
  quantity,
  onIncrement,
  onDecrement,
  min = 0,
  max = 99,
  size = 'md',
  className,
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg',
  };

  const isMinDisabled = quantity <= min;
  const isMaxDisabled = quantity >= max;

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <button
        onClick={onDecrement}
        disabled={isMinDisabled}
        className={cn(
          'flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
          sizeClasses[size]
        )}
        aria-label="Decrease quantity"
      >
        <Minus className="w-4 h-4" />
      </button>
      
      <span className="min-w-[2rem] text-center font-medium text-gray-900">
        {quantity}
      </span>
      
      <button
        onClick={onIncrement}
        disabled={isMaxDisabled}
        className={cn(
          'flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
          sizeClasses[size]
        )}
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};

export default QtyStepper; 