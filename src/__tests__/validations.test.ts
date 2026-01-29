import { leadFormSchema, calculatorInputsSchema } from '@/lib/validations';

describe('leadFormSchema', () => {
  it('validates correct email format', () => {
    const validData = {
      email: 'test@example.com',
      firstName: 'John',
    };
    const result = leadFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('rejects invalid email format', () => {
    const invalidData = {
      email: 'notanemail',
      firstName: 'John',
    };
    const result = leadFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('requires email field', () => {
    const missingEmail = {
      firstName: 'John',
    };
    const result = leadFormSchema.safeParse(missingEmail);
    expect(result.success).toBe(false);
  });

  it('requires firstName field', () => {
    const missingName = {
      email: 'test@example.com',
    };
    const result = leadFormSchema.safeParse(missingName);
    expect(result.success).toBe(false);
  });

  it('accepts optional fields', () => {
    const withOptional = {
      email: 'test@example.com',
      firstName: 'John',
      lastName: 'Doe',
      company: 'Acme Inc',
      phone: '+1 555-1234',
    };
    const result = leadFormSchema.safeParse(withOptional);
    expect(result.success).toBe(true);
  });

  it('validates phone number format', () => {
    const validPhone = {
      email: 'test@example.com',
      firstName: 'John',
      phone: '+1 (555) 123-4567',
    };
    const result = leadFormSchema.safeParse(validPhone);
    expect(result.success).toBe(true);
  });

  it('rejects invalid phone format', () => {
    const invalidPhone = {
      email: 'test@example.com',
      firstName: 'John',
      phone: 'call me maybe',
    };
    const result = leadFormSchema.safeParse(invalidPhone);
    expect(result.success).toBe(false);
  });

  it('enforces max length on firstName', () => {
    const longName = {
      email: 'test@example.com',
      firstName: 'A'.repeat(51),
    };
    const result = leadFormSchema.safeParse(longName);
    expect(result.success).toBe(false);
  });

  it('trims whitespace from names', () => {
    const withWhitespace = {
      email: 'test@example.com',
      firstName: '  John  ',
    };
    const result = leadFormSchema.safeParse(withWhitespace);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.firstName).toBe('John');
    }
  });
});

describe('calculatorInputsSchema', () => {
  const validInputs = {
    industryId: 'other',
    hourlyRate: 100,
    selectedTaskId: 'email-triage',
    hoursPerWeek: 10,
    teamSize: 1,
  };

  it('validates correct inputs', () => {
    const result = calculatorInputsSchema.safeParse(validInputs);
    expect(result.success).toBe(true);
  });

  it('enforces minimum hourly rate', () => {
    const lowRate = { ...validInputs, hourlyRate: 5 };
    const result = calculatorInputsSchema.safeParse(lowRate);
    expect(result.success).toBe(false);
  });

  it('enforces maximum hourly rate', () => {
    const highRate = { ...validInputs, hourlyRate: 1500 };
    const result = calculatorInputsSchema.safeParse(highRate);
    expect(result.success).toBe(false);
  });

  it('enforces minimum hours per week', () => {
    const lowHours = { ...validInputs, hoursPerWeek: 0 };
    const result = calculatorInputsSchema.safeParse(lowHours);
    expect(result.success).toBe(false);
  });

  it('enforces maximum hours per week', () => {
    const highHours = { ...validInputs, hoursPerWeek: 100 };
    const result = calculatorInputsSchema.safeParse(highHours);
    expect(result.success).toBe(false);
  });

  it('enforces team size as positive integer', () => {
    const zeroTeam = { ...validInputs, teamSize: 0 };
    const result = calculatorInputsSchema.safeParse(zeroTeam);
    expect(result.success).toBe(false);
  });

  it('rejects non-integer team size', () => {
    const floatTeam = { ...validInputs, teamSize: 1.5 };
    const result = calculatorInputsSchema.safeParse(floatTeam);
    expect(result.success).toBe(false);
  });

  it('requires industry selection', () => {
    const noIndustry = { ...validInputs, industryId: '' };
    const result = calculatorInputsSchema.safeParse(noIndustry);
    expect(result.success).toBe(false);
  });

  it('requires task selection', () => {
    const noTask = { ...validInputs, selectedTaskId: '' };
    const result = calculatorInputsSchema.safeParse(noTask);
    expect(result.success).toBe(false);
  });
});
