import type { CalculatorInputs, CalculatorResults } from './calculator';

export interface LeadFormData {
  email: string;
  firstName: string;
  lastName?: string;
  company?: string;
  phone?: string;
}

export interface LeadSubmission {
  formData: LeadFormData;
  calculatorInputs: CalculatorInputs;
  calculatorResults: CalculatorResults;
  metadata: {
    submittedAt: string;
    userAgent: string;
    referrer: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmContent?: string;
    utmTerm?: string;
  };
}
