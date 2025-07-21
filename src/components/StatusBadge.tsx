import React from 'react';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled' | 'active' | 'past-due' | 'canceled';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  size = 'md',
  className,
}) => {
  const statusConfig = {
    pending: {
      label: 'Pending',
      classes: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    },
    preparing: {
      label: 'Preparing',
      classes: 'bg-blue-100 text-blue-800 border-blue-200',
    },
    ready: {
      label: 'Ready',
      classes: 'bg-green-100 text-green-800 border-green-200',
    },
    completed: {
      label: 'Completed',
      classes: 'bg-gray-100 text-gray-800 border-gray-200',
    },
    cancelled: {
      label: 'Cancelled',
      classes: 'bg-red-100 text-red-800 border-red-200',
    },
    active: {
      label: 'Active',
      classes: 'bg-green-100 text-green-800 border-green-200',
    },
    'past-due': {
      label: 'Past Due',
      classes: 'bg-orange-100 text-orange-800 border-orange-200',
    },
    canceled: {
      label: 'Canceled',
      classes: 'bg-red-100 text-red-800 border-red-200',
    },
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const config = statusConfig[status];

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full border',
        config.classes,
        sizeClasses[size],
        className
      )}
    >
      {config.label}
    </span>
  );
};

export default StatusBadge; 