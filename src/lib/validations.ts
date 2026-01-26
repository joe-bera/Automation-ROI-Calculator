import { z } from 'zod';

export const leadFormSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(255, 'Email is too long'),
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name is too long')
    .trim(),
  lastName: z
    .string()
    .max(50, 'Last name is too long')
    .trim()
    .optional(),
  company: z
    .string()
    .max(100, 'Company name is too long')
    .trim()
    .optional(),
  phone: z
    .string()
    .max(20, 'Phone number is too long')
    .regex(/^[+\d\s()-]*$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
});

export const calculatorInputsSchema = z.object({
  industryId: z.string().min(1, 'Please select an industry'),
  hourlyRate: z.number().min(10).max(1000).positive(),
  selectedTaskId: z.string().min(1, 'Please select a task'),
  hoursPerWeek: z.number().min(1).max(80).positive(),
  teamSize: z.number().min(1).max(100).int().positive(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
export type CalculatorInputValues = z.infer<typeof calculatorInputsSchema>;
