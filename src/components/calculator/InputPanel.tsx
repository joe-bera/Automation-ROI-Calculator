'use client';

import { Card } from '@/components/ui/card';
import { IndustrySelector } from './IndustrySelector';
import { HourlyRateSlider } from './HourlyRateSlider';
import { TaskSelector } from './TaskSelector';
import { HoursSlider } from './HoursSlider';
import { TeamSizeInput } from './TeamSizeInput';
import { FadeIn } from '@/components/animations/FadeIn';

interface InputPanelProps {
  industryId: string;
  hourlyRate: number;
  selectedTaskId: string;
  hoursPerWeek: number;
  teamSize: number;
  onIndustryChange: (id: string) => void;
  onHourlyRateChange: (rate: number) => void;
  onTaskChange: (id: string) => void;
  onHoursChange: (hours: number) => void;
  onTeamSizeChange: (size: number) => void;
}

export function InputPanel({
  industryId,
  hourlyRate,
  selectedTaskId,
  hoursPerWeek,
  teamSize,
  onIndustryChange,
  onHourlyRateChange,
  onTaskChange,
  onHoursChange,
  onTeamSizeChange,
}: InputPanelProps) {
  return (
    <FadeIn>
      <Card className="p-6 space-y-6 bg-slate-900 border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-slate-50 mb-2">
            Configure Your Scenario
          </h2>
          <p className="text-sm text-slate-400">
            Adjust the inputs to see your potential savings
          </p>
        </div>

        <IndustrySelector value={industryId} onChange={onIndustryChange} />
        <HourlyRateSlider value={hourlyRate} onChange={onHourlyRateChange} />
        <TaskSelector value={selectedTaskId} onChange={onTaskChange} />
        <HoursSlider value={hoursPerWeek} onChange={onHoursChange} />
        <TeamSizeInput value={teamSize} onChange={onTeamSizeChange} />
      </Card>
    </FadeIn>
  );
}
