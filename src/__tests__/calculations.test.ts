import {
  calculateROI,
  formatCurrency,
  formatPercentage,
  formatHours,
  formatNumber,
} from '@/lib/calculations';
import type { CalculatorInputs } from '@/types';

describe('calculateROI', () => {
  const baseInputs: CalculatorInputs = {
    industryId: 'other',
    hourlyRate: 100,
    selectedTaskId: 'email-triage',
    hoursPerWeek: 10,
    teamSize: 1,
  };

  it('calculates weekly manual cost correctly', () => {
    const results = calculateROI(baseInputs);
    // $100/hr * 10 hrs/week * 1 person = $1,000/week
    expect(results.weeklyManualCost).toBe(1000);
  });

  it('calculates annual manual cost correctly', () => {
    const results = calculateROI(baseInputs);
    // $1,000/week * 52 weeks = $52,000/year
    expect(results.annualManualCost).toBe(52000);
  });

  it('calculates AI costs based on task pricing', () => {
    const results = calculateROI(baseInputs);
    // email-triage costs $99/month * 12 = $1,188/year
    expect(results.annualAiCost).toBe(1188);
  });

  it('calculates annual savings correctly', () => {
    const results = calculateROI(baseInputs);
    // $52,000 - $1,188 = $50,812
    expect(results.annualSavings).toBe(50812);
  });

  it('calculates ROI percentage correctly', () => {
    const results = calculateROI(baseInputs);
    // ($50,812 / $1,188) * 100 = ~4277%
    expect(results.roiPercentage).toBeCloseTo(4277.78, 0);
  });

  it('calculates hours reclaimed correctly', () => {
    const results = calculateROI(baseInputs);
    // 10 hrs/week * 0.75 efficiency * 1 person * 52 weeks = 390 hours
    expect(results.hoursReclaimed).toBe(390);
  });

  it('scales with team size', () => {
    const teamInputs = { ...baseInputs, teamSize: 3 };
    const results = calculateROI(teamInputs);
    // Manual: $100 * 10 * 3 * 52 = $156,000
    expect(results.annualManualCost).toBe(156000);
    // AI: $99 * 3 * 12 = $3,564
    expect(results.annualAiCost).toBe(3564);
  });

  it('handles high hourly rates (law firm scenario)', () => {
    const lawInputs: CalculatorInputs = {
      industryId: 'law',
      hourlyRate: 275,
      selectedTaskId: 'email-triage',
      hoursPerWeek: 8,
      teamSize: 1,
    };
    const results = calculateROI(lawInputs);
    // $275 * 8 * 52 = $114,400/year manual
    expect(results.annualManualCost).toBe(114400);
    expect(results.annualSavings).toBeGreaterThan(100000);
  });

  it('throws error for invalid task ID', () => {
    const invalidInputs = { ...baseInputs, selectedTaskId: 'nonexistent' };
    expect(() => calculateROI(invalidInputs)).toThrow('Task not found');
  });

  it('calculates payback period in days', () => {
    const results = calculateROI(baseInputs);
    // Should pay back within reasonable time
    expect(results.paybackPeriodDays).toBeGreaterThan(0);
    expect(results.paybackPeriodDays).toBeLessThan(365);
  });

  it('returns automation efficiency from task', () => {
    const results = calculateROI(baseInputs);
    // email-triage has 75% automation efficiency
    expect(results.automationEfficiency).toBe(0.75);
  });
});

describe('formatCurrency', () => {
  it('formats whole numbers without decimals', () => {
    expect(formatCurrency(1000)).toBe('$1,000');
    expect(formatCurrency(52000)).toBe('$52,000');
    expect(formatCurrency(1234567)).toBe('$1,234,567');
  });

  it('rounds decimal values', () => {
    expect(formatCurrency(1000.5)).toBe('$1,001');
    expect(formatCurrency(1000.4)).toBe('$1,000');
  });

  it('handles zero', () => {
    expect(formatCurrency(0)).toBe('$0');
  });
});

describe('formatPercentage', () => {
  it('formats percentages correctly', () => {
    expect(formatPercentage(100)).toBe('100%');
    expect(formatPercentage(4277)).toBe('4,277%');
  });

  it('handles decimal percentages', () => {
    expect(formatPercentage(50.5)).toBe('51%');
  });
});

describe('formatHours', () => {
  it('formats hours with label', () => {
    expect(formatHours(100)).toBe('100 hours');
    expect(formatHours(1234)).toBe('1,234 hours');
  });

  it('rounds decimal hours', () => {
    expect(formatHours(100.6)).toBe('101 hours');
  });
});

describe('formatNumber', () => {
  it('formats numbers with commas', () => {
    expect(formatNumber(1000)).toBe('1,000');
    expect(formatNumber(1234567)).toBe('1,234,567');
  });
});
