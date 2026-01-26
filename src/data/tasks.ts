import type { AutomationTask } from '@/types';

export const tasks: AutomationTask[] = [
  // Communication
  {
    id: 'email-triage',
    name: 'Email Triage & Prioritization',
    category: 'Communication',
    description: 'AI categorizes, prioritizes, and drafts responses to routine emails',
    avgHoursPerWeek: 8,
    automationEfficiency: 0.75,
    aiAgentMonthlyCost: 99,
    complexity: 'medium',
  },
  {
    id: 'meeting-scheduling',
    name: 'Meeting Scheduling & Coordination',
    category: 'Communication',
    description: 'AI handles calendar management, finds optimal meeting times, sends invites',
    avgHoursPerWeek: 4,
    automationEfficiency: 0.90,
    aiAgentMonthlyCost: 79,
    complexity: 'low',
  },
  {
    id: 'follow-ups',
    name: 'Client Follow-ups & Reminders',
    category: 'Communication',
    description: 'Automated follow-up emails, appointment reminders, and status updates',
    avgHoursPerWeek: 6,
    automationEfficiency: 0.85,
    aiAgentMonthlyCost: 89,
    complexity: 'low',
  },

  // Document Processing
  {
    id: 'data-entry',
    name: 'Data Entry & Migration',
    category: 'Document Processing',
    description: 'Extract data from documents and input into systems (CRM, ERP, databases)',
    avgHoursPerWeek: 12,
    automationEfficiency: 0.92,
    aiAgentMonthlyCost: 149,
    complexity: 'medium',
  },
  {
    id: 'invoice-processing',
    name: 'Invoice Processing & Verification',
    category: 'Document Processing',
    description: 'Extract invoice data, verify against POs, route for approval',
    avgHoursPerWeek: 10,
    automationEfficiency: 0.88,
    aiAgentMonthlyCost: 179,
    complexity: 'medium',
  },
  {
    id: 'report-generation',
    name: 'Report Generation & Analysis',
    category: 'Document Processing',
    description: 'Compile data from multiple sources, generate reports and summaries',
    avgHoursPerWeek: 8,
    automationEfficiency: 0.80,
    aiAgentMonthlyCost: 199,
    complexity: 'high',
  },

  // Customer Service
  {
    id: 'ticket-routing',
    name: 'Support Ticket Routing',
    category: 'Customer Service',
    description: 'Categorize tickets, assign to team members, escalate urgent issues',
    avgHoursPerWeek: 5,
    automationEfficiency: 0.85,
    aiAgentMonthlyCost: 129,
    complexity: 'medium',
  },
  {
    id: 'faq-responses',
    name: 'FAQ & Common Inquiries',
    category: 'Customer Service',
    description: 'Answer frequently asked questions via email, chat, or portal',
    avgHoursPerWeek: 15,
    automationEfficiency: 0.90,
    aiAgentMonthlyCost: 149,
    complexity: 'low',
  },
  {
    id: 'client-onboarding',
    name: 'Client Onboarding Process',
    category: 'Customer Service',
    description: 'Welcome emails, document collection, account setup, training delivery',
    avgHoursPerWeek: 6,
    automationEfficiency: 0.75,
    aiAgentMonthlyCost: 159,
    complexity: 'medium',
  },

  // Sales & Marketing
  {
    id: 'lead-qualification',
    name: 'Lead Qualification & Scoring',
    category: 'Sales & Marketing',
    description: 'Research leads, score based on criteria, route to sales team',
    avgHoursPerWeek: 10,
    automationEfficiency: 0.82,
    aiAgentMonthlyCost: 189,
    complexity: 'high',
  },
  {
    id: 'social-media',
    name: 'Social Media Management',
    category: 'Sales & Marketing',
    description: 'Schedule posts, respond to comments/DMs, monitor brand mentions',
    avgHoursPerWeek: 12,
    automationEfficiency: 0.70,
    aiAgentMonthlyCost: 119,
    complexity: 'medium',
  },
  {
    id: 'crm-updates',
    name: 'CRM Data Updates',
    category: 'Sales & Marketing',
    description: 'Update contact information, log interactions, maintain data quality',
    avgHoursPerWeek: 7,
    automationEfficiency: 0.88,
    aiAgentMonthlyCost: 99,
    complexity: 'low',
  },

  // Operations
  {
    id: 'appointment-scheduling',
    name: 'Appointment Scheduling',
    category: 'Operations',
    description: 'Book appointments, send confirmations, handle rescheduling',
    avgHoursPerWeek: 8,
    automationEfficiency: 0.90,
    aiAgentMonthlyCost: 89,
    complexity: 'low',
  },
  {
    id: 'compliance-checks',
    name: 'Compliance & Audit Checks',
    category: 'Operations',
    description: 'Review documents for compliance, flag issues, maintain audit trails',
    avgHoursPerWeek: 10,
    automationEfficiency: 0.65,
    aiAgentMonthlyCost: 249,
    complexity: 'high',
  },
  {
    id: 'expense-tracking',
    name: 'Expense Tracking & Categorization',
    category: 'Operations',
    description: 'Categorize expenses, verify receipts, prepare expense reports',
    avgHoursPerWeek: 5,
    automationEfficiency: 0.85,
    aiAgentMonthlyCost: 79,
    complexity: 'low',
  },
];

export function getTasksByCategory(category: string): AutomationTask[] {
  return tasks.filter(task => task.category === category);
}

export function getCategories(): string[] {
  return Array.from(new Set(tasks.map(task => task.category)));
}

export function getTaskById(id: string): AutomationTask | undefined {
  return tasks.find(task => task.id === id);
}
