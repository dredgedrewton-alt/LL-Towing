import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { checkRateLimit } from '@/lib/server/rateLimiter';
import { processLeadDelivery, LeadPayload } from '@/lib/server/leadDelivery';

const leadSubmissionSchema = z.object({
  formType: z.enum(['quote', 'contact', 'commercial']),
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  phone: z
    .string()
    .min(10, 'Phone must be at least 10 digits')
    .regex(/^[0-9+()\- ]+$/, 'Invalid phone number format'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  serviceType: z.string().optional(),
  pickupLocation: z.string().optional(),
  destination: z.string().optional(),
  vehicleMakeModel: z.string().optional(),
  preferredTiming: z.string().optional(),
  businessName: z.string().optional(),
  contactTitle: z.string().optional(),
  propertyAddress: z.string().optional(),
  message: z.string().max(1000).optional(),
  honeypot: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting Check
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      '127.0.0.1';

    const rateLimit = checkRateLimit(ip, 5, 600); // 5 submissions per 10 mins
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          code: 'RATE_LIMITED',
          message: `Too many submissions from this connection. Please wait ${rateLimit.retryAfterSeconds} seconds or call dispatch directly at (240) 424-8226.`,
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateLimit.retryAfterSeconds),
          },
        }
      );
    }

    // 2. Body Parsing & Server-Side Zod Validation
    const rawBody = await req.json();
    const parseResult = leadSubmissionSchema.safeParse(rawBody);

    if (!parseResult.success) {
      const firstError = parseResult.error.issues[0]?.message || 'Invalid form data';
      return NextResponse.json(
        {
          success: false,
          code: 'INVALID_INPUT',
          message: firstError,
        },
        { status: 400 }
      );
    }

    const payload: LeadPayload = {
      ...parseResult.data,
      submittedAt: new Date().toISOString(),
      ipAddress: ip,
    };

    // 3. Process Delivery
    const deliveryResult = await processLeadDelivery(payload);

    if (!deliveryResult.success) {
      const status = deliveryResult.code === 'PROVIDER_NOT_CONFIGURED' ? 503 : 400;
      return NextResponse.json(deliveryResult, { status });
    }

    return NextResponse.json(deliveryResult, { status: 200 });
  } catch (err: unknown) {
    const errorDetails = err instanceof Error ? err.message : 'Internal server error';
    console.error('[API Leads] Error:', errorDetails);
    return NextResponse.json(
      {
        success: false,
        code: 'SERVER_ERROR',
        message: 'A server error occurred. Please call dispatch directly at (240) 424-8226.',
      },
      { status: 500 }
    );
  }
}
