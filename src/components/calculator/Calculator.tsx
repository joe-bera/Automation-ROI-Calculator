'use client';

import { InputPanel } from './InputPanel';
import { ResultsPanel } from './ResultsPanel';
import { useCalculator } from '@/hooks/useCalculator';

export function Calculator() {
  const {
    inputs,
    results,
    setIndustry,
    setHourlyRate,
    setTask,
    setHoursPerWeek,
    setTeamSize,
  } = useCalculator();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      <InputPanel
        industryId={inputs.industryId}
        hourlyRate={inputs.hourlyRate}
        selectedTaskId={inputs.selectedTaskId}
        hoursPerWeek={inputs.hoursPerWeek}
        teamSize={inputs.teamSize}
        onIndustryChange={setIndustry}
        onHourlyRateChange={setHourlyRate}
        onTaskChange={setTask}
        onHoursChange={setHoursPerWeek}
        onTeamSizeChange={setTeamSize}
      />
      <ResultsPanel results={results} />
    </div>
  );
}
