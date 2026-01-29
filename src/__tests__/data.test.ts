import { tasks, getTaskById, getCategories, getTasksByCategory } from '@/data/tasks';
import { industries, getIndustryById, getDefaultIndustry } from '@/data/industries';

describe('tasks data', () => {
  it('contains at least 10 tasks', () => {
    expect(tasks.length).toBeGreaterThanOrEqual(10);
  });

  it('all tasks have required fields', () => {
    tasks.forEach((task) => {
      expect(task.id).toBeTruthy();
      expect(task.name).toBeTruthy();
      expect(task.category).toBeTruthy();
      expect(task.description).toBeTruthy();
      expect(task.avgHoursPerWeek).toBeGreaterThan(0);
      expect(task.automationEfficiency).toBeGreaterThan(0);
      expect(task.automationEfficiency).toBeLessThanOrEqual(1);
      expect(task.aiAgentMonthlyCost).toBeGreaterThan(0);
      expect(['low', 'medium', 'high']).toContain(task.complexity);
    });
  });

  it('getTaskById returns correct task', () => {
    const task = getTaskById('email-triage');
    expect(task).toBeDefined();
    expect(task?.name).toBe('Email Triage & Prioritization');
  });

  it('getTaskById returns undefined for invalid ID', () => {
    const task = getTaskById('nonexistent');
    expect(task).toBeUndefined();
  });

  it('getCategories returns unique categories', () => {
    const categories = getCategories();
    const uniqueCategories = new Set(categories);
    expect(categories.length).toBe(uniqueCategories.size);
    expect(categories.length).toBeGreaterThanOrEqual(4);
  });

  it('getTasksByCategory returns tasks for valid category', () => {
    const communicationTasks = getTasksByCategory('Communication');
    expect(communicationTasks.length).toBeGreaterThan(0);
    communicationTasks.forEach((task) => {
      expect(task.category).toBe('Communication');
    });
  });

  it('automation efficiency is realistic (60-95%)', () => {
    tasks.forEach((task) => {
      expect(task.automationEfficiency).toBeGreaterThanOrEqual(0.6);
      expect(task.automationEfficiency).toBeLessThanOrEqual(0.95);
    });
  });

  it('monthly AI costs are realistic ($50-$500)', () => {
    tasks.forEach((task) => {
      expect(task.aiAgentMonthlyCost).toBeGreaterThanOrEqual(50);
      expect(task.aiAgentMonthlyCost).toBeLessThanOrEqual(500);
    });
  });
});

describe('industries data', () => {
  it('contains at least 5 industries', () => {
    expect(industries.length).toBeGreaterThanOrEqual(5);
  });

  it('all industries have required fields', () => {
    industries.forEach((industry) => {
      expect(industry.id).toBeTruthy();
      expect(industry.name).toBeTruthy();
      expect(industry.icon).toBeTruthy();
      expect(industry.defaultHourlyRate).toBeGreaterThan(0);
      expect(industry.commonTasks.length).toBeGreaterThan(0);
      expect(industry.avgTeamSize).toBeGreaterThan(0);
    });
  });

  it('getIndustryById returns correct industry', () => {
    const industry = getIndustryById('law');
    expect(industry).toBeDefined();
    expect(industry?.name).toBe('Law Firm');
    expect(industry?.defaultHourlyRate).toBe(275);
  });

  it('getIndustryById returns undefined for invalid ID', () => {
    const industry = getIndustryById('nonexistent');
    expect(industry).toBeUndefined();
  });

  it('getDefaultIndustry returns "other" industry', () => {
    const defaultIndustry = getDefaultIndustry();
    expect(defaultIndustry.id).toBe('other');
  });

  it('industry hourly rates are realistic', () => {
    industries.forEach((industry) => {
      expect(industry.defaultHourlyRate).toBeGreaterThanOrEqual(50);
      expect(industry.defaultHourlyRate).toBeLessThanOrEqual(400);
    });
  });

  it('industry common tasks reference valid task IDs', () => {
    const taskIds = tasks.map((t) => t.id);
    industries.forEach((industry) => {
      industry.commonTasks.forEach((taskId) => {
        expect(taskIds).toContain(taskId);
      });
    });
  });
});
