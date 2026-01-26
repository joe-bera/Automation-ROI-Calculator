'use client';

import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Clock, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HoursSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const PRESETS = [5, 10, 15, 20, 30];

export function HoursSlider({ value, onChange }: HoursSliderProps) {
  const isDangerZone = value > 20;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-slate-200">
          Hours per Week
        </label>
        <div
          className={cn(
            'flex items-center gap-2 text-2xl font-bold',
            isDangerZone ? 'text-orange-500' : 'text-slate-50'
          )}
        >
          <Clock className="h-5 w-5" />
          <span className="font-mono">{value}</span>
          {isDangerZone && <AlertTriangle className="h-4 w-4 animate-pulse" />}
        </div>
      </div>

      <Slider
        value={[value]}
        onValueChange={(vals) => onChange(vals[0])}
        min={1}
        max={40}
        step={1}
        className="w-full"
      />

      {isDangerZone && (
        <div className="flex items-center gap-2 text-sm text-orange-500 bg-orange-500/10 p-2 rounded-md">
          <AlertTriangle className="h-4 w-4 flex-shrink-0" />
          <span>High time investment - automation could save significant costs</span>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {PRESETS.map((preset) => (
          <Button
            key={preset}
            variant={value === preset ? 'default' : 'outline'}
            size="sm"
            onClick={() => onChange(preset)}
            className="text-xs"
          >
            {preset}h
          </Button>
        ))}
      </div>
    </div>
  );
}
