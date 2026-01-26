'use client';

import { Input } from '@/components/ui/input';
import { Users } from 'lucide-react';

interface TeamSizeInputProps {
  value: number;
  onChange: (value: number) => void;
}

export function TeamSizeInput({ value, onChange }: TeamSizeInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-200">Team Size</label>

      <div className="relative">
        <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          type="number"
          min={1}
          max={20}
          value={value}
          onChange={(e) => onChange(Math.max(1, parseInt(e.target.value) || 1))}
          className="pl-10"
          placeholder="Number of team members"
        />
      </div>

      <p className="text-xs text-slate-400">
        How many team members spend time on this task?
      </p>
    </div>
  );
}
