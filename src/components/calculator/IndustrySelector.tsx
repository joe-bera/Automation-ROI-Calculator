'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { industries } from '@/data/industries';
import {
  Scale,
  Home,
  Shield,
  Stethoscope,
  Calculator,
  Building2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface IndustrySelectorProps {
  value: string;
  onChange: (industryId: string) => void;
}

const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  law: Scale,
  'real-estate': Home,
  insurance: Shield,
  medical: Stethoscope,
  accounting: Calculator,
  other: Building2,
};

export function IndustrySelector({ value, onChange }: IndustrySelectorProps) {
  const selectedIndustry = industries.find((i) => i.id === value);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-200">Industry</label>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select your industry" />
        </SelectTrigger>
        <SelectContent>
          {industries.map((industry) => {
            const Icon = INDUSTRY_ICONS[industry.id] || Building2;
            return (
              <SelectItem key={industry.id} value={industry.id}>
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span>{industry.name}</span>
                </div>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>

      {selectedIndustry && (
        <p className="text-xs text-slate-400">
          Default rate: ${selectedIndustry.defaultHourlyRate}/hr
        </p>
      )}
    </div>
  );
}
