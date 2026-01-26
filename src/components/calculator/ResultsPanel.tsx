'use client';

import { Card } from '@/components/ui/card';
import { CostDisplay } from './CostDisplay';
import { SavingsDisplay } from './SavingsDisplay';
import { PaybackIndicator } from './PaybackIndicator';
import { HoursReclaimedDisplay } from './HoursReclaimedDisplay';
import { ComparisonChart } from './ComparisonChart';
import { FadeIn } from '@/components/animations/FadeIn';
import type { CalculatorResults } from '@/types';

interface ResultsPanelProps {
  results: CalculatorResults;
}

export function ResultsPanel({ results }: ResultsPanelProps) {
  return (
    <FadeIn delay={0.2}>
      <Card className="p-6 space-y-6 bg-slate-900 border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl" />

        <div className="relative">
          <CostDisplay annualCost={results.annualManualCost} />

          <div className="mt-6 space-y-4">
            <SavingsDisplay
              annualSavings={results.annualSavings}
              roi={results.roiPercentage}
            />

            <div className="grid grid-cols-1 gap-4">
              <PaybackIndicator paybackDays={results.paybackPeriodDays} />
              <HoursReclaimedDisplay hoursPerYear={results.hoursReclaimed} />
            </div>

            <ComparisonChart
              manualCost={results.annualManualCost}
              aiCost={results.annualAiCost}
            />
          </div>
        </div>
      </Card>
    </FadeIn>
  );
}
