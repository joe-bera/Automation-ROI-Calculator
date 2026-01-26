// Task definition for automation scenarios
export interface AutomationTask {
  id: string;
  name: string;
  category: string;
  description: string;
  avgHoursPerWeek: number;
  automationEfficiency: number;
  aiAgentMonthlyCost: number;
  complexity: 'low' | 'medium' | 'high';
}

// Industry preset with default values
export interface IndustryPreset {
  id: string;
  name: string;
  icon: string;
  defaultHourlyRate: number;
  commonTasks: string[];
  avgTeamSize: number;
}

// Calculator input state
export interface CalculatorInputs {
  industryId: string;
  hourlyRate: number;
  selectedTaskId: string;
  hoursPerWeek: number;
  teamSize: number;
}

// Calculated results
export interface CalculatorResults {
  weeklyManualCost: number;
  weeklyAiCost: number;
  weeklySavings: number;
  monthlyManualCost: number;
  monthlyAiCost: number;
  monthlySavings: number;
  annualManualCost: number;
  annualAiCost: number;
  annualSavings: number;
  roiPercentage: number;
  paybackPeriodDays: number;
  hoursReclaimed: number;
  automationEfficiency: number;
}
