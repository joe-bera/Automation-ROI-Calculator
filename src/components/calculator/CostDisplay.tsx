'use client';

import { AnimatedNumber } from '@/components/animations/AnimatedNumber';
import { DollarSign } from 'lucide-react';

interface CostDisplayProps {
  annualCost: number;
}

export function CostDisplay({ annualCost }: CostDisplayProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="text-center space-y-2 p-6">
      <p className="text-lg text-slate-400">You&apos;re spending</p>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 blur-2xl opacity-20 animate-pulse" />
        <div className="relative flex items-start justify-center gap-1">
          <DollarSign className="h-8 w-8 text-red-500 mt-2" />
          <AnimatedNumber
            value={annualCost}
            formatFn={formatCurrency}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-mono bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
          />
        </div>
      </div>

      <p className="text-lg text-slate-400">per year on this task</p>
    </div>
  );
}
