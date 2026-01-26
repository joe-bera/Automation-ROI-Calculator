'use client';

import { AnimatedNumber } from '@/components/animations/AnimatedNumber';
import { TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ROIBadgeProps {
  roi: number;
  className?: string;
}

export function ROIBadge({ roi, className }: ROIBadgeProps) {
  const formatPercentage = (value: number) => `${Math.round(value)}%`;

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/50',
        className
      )}
    >
      <TrendingUp className="h-4 w-4 text-emerald-500" />
      <AnimatedNumber
        value={roi}
        formatFn={formatPercentage}
        className="text-sm font-bold text-emerald-500"
      />
      <span className="text-sm text-emerald-500">ROI</span>
    </div>
  );
}
