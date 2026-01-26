'use client';

import { useState, useMemo } from 'react';
import type { CalculatorInputs } from '@/types';
import { calculateROI } from '@/lib/calculations';
import { industries } from '@/data/industries';

export function useCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    industryId: 'other',
    hourlyRate: 65,
    selectedTaskId: 'email-triage',
    hoursPerWeek: 10,
    teamSize: 1,
  });

  const results = useMemo(() => {
    return calculateROI(inputs);
  }, [inputs]);

  const setIndustry = (id: string) => {
    const industry = industries.find((i) => i.id === id);
    setInputs((prev) => ({
      ...prev,
      industryId: id,
      hourlyRate: industry?.defaultHourlyRate ?? prev.hourlyRate,
    }));
  };

  const setHourlyRate = (hourlyRate: number) => {
    setInputs((prev) => ({ ...prev, hourlyRate }));
  };

  const setTask = (selectedTaskId: string) => {
    setInputs((prev) => ({ ...prev, selectedTaskId }));
  };

  const setHoursPerWeek = (hoursPerWeek: number) => {
    setInputs((prev) => ({ ...prev, hoursPerWeek }));
  };

  const setTeamSize = (teamSize: number) => {
    setInputs((prev) => ({ ...prev, teamSize }));
  };

  return {
    inputs,
    results,
    setIndustry,
    setHourlyRate,
    setTask,
    setHoursPerWeek,
    setTeamSize,
  };
}
