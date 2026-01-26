import type { IndustryPreset } from '@/types';

export const industries: IndustryPreset[] = [
  {
    id: 'law',
    name: 'Law Firm',
    icon: 'Scale',
    defaultHourlyRate: 275,
    commonTasks: ['email-triage', 'meeting-scheduling', 'data-entry', 'invoice-processing', 'client-onboarding', 'compliance-checks'],
    avgTeamSize: 8,
  },
  {
    id: 'real-estate',
    name: 'Real Estate Agency',
    icon: 'Home',
    defaultHourlyRate: 110,
    commonTasks: ['email-triage', 'follow-ups', 'appointment-scheduling', 'lead-qualification', 'social-media', 'crm-updates'],
    avgTeamSize: 6,
  },
  {
    id: 'insurance',
    name: 'Insurance Brokerage',
    icon: 'Shield',
    defaultHourlyRate: 75,
    commonTasks: ['email-triage', 'data-entry', 'invoice-processing', 'client-onboarding', 'faq-responses', 'compliance-checks'],
    avgTeamSize: 10,
  },
  {
    id: 'medical',
    name: 'Medical Practice',
    icon: 'Stethoscope',
    defaultHourlyRate: 150,
    commonTasks: ['appointment-scheduling', 'follow-ups', 'data-entry', 'invoice-processing', 'faq-responses', 'compliance-checks'],
    avgTeamSize: 12,
  },
  {
    id: 'accounting',
    name: 'Accounting Firm',
    icon: 'Calculator',
    defaultHourlyRate: 200,
    commonTasks: ['email-triage', 'data-entry', 'invoice-processing', 'report-generation', 'expense-tracking', 'compliance-checks'],
    avgTeamSize: 7,
  },
  {
    id: 'other',
    name: 'Other / General Business',
    icon: 'Building2',
    defaultHourlyRate: 65,
    commonTasks: ['email-triage', 'meeting-scheduling', 'data-entry', 'crm-updates', 'faq-responses', 'expense-tracking'],
    avgTeamSize: 5,
  },
];

export function getIndustryById(id: string): IndustryPreset | undefined {
  return industries.find(industry => industry.id === id);
}

export function getDefaultIndustry(): IndustryPreset {
  return industries.find(industry => industry.id === 'other') || industries[0];
}
