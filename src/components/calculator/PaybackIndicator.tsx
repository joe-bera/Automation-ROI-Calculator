'use client';

import { AnimatedNumber } from '@/components/animations/AnimatedNumber';
import { Clock, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaybackIndicatorProps {
  paybackDays: number;
}

export function PaybackIndicator({ paybackDays }: PaybackIndicatorProps) {
  const isQuickPayback = paybackDays < 30;

  const formatDays = (value: number) => {
    const days = Math.round(value);
    if (days < 1) return 'Less than a day';
    if (days === 1) return '1 day';
    return `${days} days`;
  };

  return (
    <div
      className={cn(
        'flex items-center gap-3 p-4 rounded-lg border',
        isQuickPayback
          ? 'bg-emerald-500/10 border-emerald-500/30'
          : 'bg-blue-500/10 border-blue-500/30'
      )}
    >
      {isQuickPayback ? (
        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
      ) : (
        <Clock className="h-5 w-5 text-blue-500" />
      )}

      <div className="flex-1">
        <p className="text-sm text-slate-400">Payback Period</p>
        <p
          className={cn(
            'text-lg font-semibold',
            isQuickPayback ? 'text-emerald-500' : 'text-blue-500'
          )}
        >
          <AnimatedNumber value={paybackDays} formatFn={formatDays} />
        </p>
      </div>

      {isQuickPayback && (
        <div className="text-xs text-emerald-500 font-medium px-2 py-1 rounded bg-emerald-500/20">
          Fast ROI
        </div>
      )}
    </div>
  );
}
