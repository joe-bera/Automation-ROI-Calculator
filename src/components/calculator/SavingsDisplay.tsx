'use client';

import { AnimatedNumber } from '@/components/animations/AnimatedNumber';
import { ROIBadge } from './ROIBadge';
import { Sparkles } from 'lucide-react';

interface SavingsDisplayProps {
  annualSavings: number;
  roi: number;
}

export function SavingsDisplay({ annualSavings, roi }: SavingsDisplayProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="space-y-4 p-6 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-lg border border-emerald-500/20">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-emerald-500" />
          <h3 className="text-lg font-semibold text-slate-200">
            Annual Savings with AI
          </h3>
        </div>
        <ROIBadge roi={roi} />
      </div>

      <div className="text-3xl md:text-4xl font-bold font-mono text-emerald-500">
        <AnimatedNumber value={annualSavings} formatFn={formatCurrency} />
      </div>

      <p className="text-sm text-slate-400">
        Reduce costs by automating this task with AI
      </p>
    </div>
  );
}
