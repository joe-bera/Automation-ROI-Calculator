import { NextRequest, NextResponse } from 'next/server';
import { leadFormSchema } from '@/lib/validations';
import type { LeadSubmission } from '@/types';

// Webhook URL from environment variable
const WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL;
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check honeypot field (spam protection)
    if (body.formData?.website) {
      // Bot detected - silently accept but don't process
      return NextResponse.json({ success: true });
    }

    // Validate form data
    const validatedForm = leadFormSchema.safeParse(body.formData);
    if (!validatedForm.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validatedForm.error.issues },
        { status: 400 }
      );
    }

    // Construct the lead submission
    const leadSubmission: LeadSubmission = {
      formData: validatedForm.data,
      calculatorInputs: body.calculatorInputs,
      calculatorResults: body.calculatorResults,
      metadata: {
        submittedAt: body.metadata?.submittedAt || new Date().toISOString(),
        userAgent: body.metadata?.userAgent || '',
        referrer: body.metadata?.referrer || '',
        utmSource: body.metadata?.utmSource,
        utmMedium: body.metadata?.utmMedium,
        utmCampaign: body.metadata?.utmCampaign,
        utmContent: body.metadata?.utmContent,
        utmTerm: body.metadata?.utmTerm,
      },
    };

    // Send to webhook if configured
    if (WEBHOOK_URL) {
      try {
        const webhookResponse = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(WEBHOOK_SECRET && { 'X-Webhook-Secret': WEBHOOK_SECRET }),
          },
          body: JSON.stringify(leadSubmission),
        });

        if (!webhookResponse.ok) {
          console.error('Webhook delivery failed:', {
            status: webhookResponse.status,
            statusText: webhookResponse.statusText,
          });
          // Don't fail the request if webhook fails - lead is still captured
        }
      } catch (webhookError) {
        console.error('Webhook error:', webhookError);
        // Don't fail the request if webhook fails
      }
    } else {
      // Log the lead for debugging when webhook is not configured
      console.log('Lead captured (no webhook configured):', {
        email: leadSubmission.formData.email,
        firstName: leadSubmission.formData.firstName,
        annualSavings: leadSubmission.calculatorResults.annualSavings,
        roi: leadSubmission.calculatorResults.roiPercentage,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
    });
  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    webhookConfigured: !!WEBHOOK_URL,
  });
}
