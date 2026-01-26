'use client';

import { InputPanel } from './InputPanel';
import { ResultsPanel } from './ResultsPanel';
import { LeadCaptureForm } from '@/components/lead-capture/LeadCaptureForm';
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
    <div className="space-y-8">
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

      {/* Lead Capture Form */}
      <div className="max-w-2xl mx-auto">
        <LeadCaptureForm
          calculatorInputs={inputs}
          calculatorResults={results}
        />
      </div>
    </div>
  );
}
