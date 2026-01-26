'use client';

import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { DollarSign } from 'lucide-react';

interface HourlyRateSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const PRESETS = [50, 75, 100, 150, 200, 300];

export function HourlyRateSlider({ value, onChange }: HourlyRateSliderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-slate-200">
          Hourly Rate
        </label>
        <div className="flex items-center gap-1 text-2xl font-bold text-slate-50">
          <DollarSign className="h-5 w-5" />
          <span className="font-mono">{value}</span>
        </div>
      </div>

      <Slider
        value={[value]}
        onValueChange={(vals) => onChange(vals[0])}
        min={10}
        max={500}
        step={5}
        className="w-full"
      />

      <div className="flex flex-wrap gap-2">
        {PRESETS.map((preset) => (
          <Button
            key={preset}
            variant={value === preset ? 'default' : 'outline'}
            size="sm"
            onClick={() => onChange(preset)}
            className="text-xs"
          >
            ${preset}
          </Button>
        ))}
      </div>
    </div>
  );
}
