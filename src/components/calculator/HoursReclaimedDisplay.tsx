'use client';

import { AnimatedNumber } from '@/components/animations/AnimatedNumber';
import { Clock } from 'lucide-react';

interface HoursReclaimedDisplayProps {
  hoursPerYear: number;
}

export function HoursReclaimedDisplay({ hoursPerYear }: HoursReclaimedDisplayProps) {
  const formatHours = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
      <div className="p-3 bg-blue-500/20 rounded-lg">
        <Clock className="h-6 w-6 text-blue-500" />
      </div>

      <div className="flex-1">
        <p className="text-sm text-slate-400">Time Reclaimed Annually</p>
        <div className="flex items-baseline gap-2">
          <AnimatedNumber
            value={hoursPerYear}
            formatFn={formatHours}
            className="text-2xl font-bold font-mono text-blue-500"
          />
          <span className="text-slate-400">hours</span>
        </div>
      </div>
    </div>
  );
}
