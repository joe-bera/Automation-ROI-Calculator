import type { CalculatorInputs, CalculatorResults } from '@/types';
import { tasks } from '@/data/tasks';

export function calculateROI(inputs: CalculatorInputs): CalculatorResults {
  const task = tasks.find(t => t.id === inputs.selectedTaskId);
  if (!task) {
    throw new Error(`Task not found: ${inputs.selectedTaskId}`);
  }

  // Calculate manual costs
  const weeklyManualCost = inputs.hourlyRate * inputs.hoursPerWeek * inputs.teamSize;
  const monthlyManualCost = weeklyManualCost * 4.33;
  const annualManualCost = weeklyManualCost * 52;

  // Calculate AI costs
  const monthlyAiCost = task.aiAgentMonthlyCost * inputs.teamSize;
  const weeklyAiCost = monthlyAiCost / 4.33;
  const annualAiCost = monthlyAiCost * 12;

  // Calculate time saved
  const hoursReclaimed = inputs.hoursPerWeek * task.automationEfficiency * inputs.teamSize * 52;

  // Calculate savings
  const annualSavings = annualManualCost - annualAiCost;
  const monthlySavings = monthlyManualCost - monthlyAiCost;
  const weeklySavings = weeklyManualCost - weeklyAiCost;

  // Calculate ROI percentage
  const roiPercentage = annualAiCost > 0 ? (annualSavings / annualAiCost) * 100 : 0;

  // Calculate payback period in days
  const dailyManualCost = weeklyManualCost / 7;
  const dailyAiCost = weeklyAiCost / 7;
  const dailySavings = dailyManualCost - dailyAiCost;
  const paybackPeriodDays = dailySavings > 0 ? Math.ceil(annualAiCost / dailySavings) : 0;

  return {
    weeklyManualCost,
    weeklyAiCost,
    weeklySavings,
    monthlyManualCost,
    monthlyAiCost,
    monthlySavings,
    annualManualCost,
    annualAiCost,
    annualSavings,
    roiPercentage,
    paybackPeriodDays,
    hoursReclaimed,
    automationEfficiency: task.automationEfficiency,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPercentage(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value / 100);
}

export function formatHours(hours: number): string {
  return `${Math.round(hours).toLocaleString()} hours`;
}

export function formatNumber(value: number): string {
  return Math.round(value).toLocaleString('en-US');
}
