import { z } from 'zod';

export const dispatchInquirySchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[0-9+()\- ]+$/, 'Invalid phone number format'),
  serviceType: z.enum([
    'car-towing',
    'flatbed-towing',
    'specialty-towing',
    'battery-jumpstart',
    'lockout-assistance',
    'fuel-delivery',
    'tire-change',
    'auto-repair',
    'commercial-impound',
    'parking-management',
    'other',
  ]),
  vehicleMakeModel: z.string().min(2, 'Please provide vehicle year, make, and model'),
  location: z.string().min(3, 'Please describe your current city or cross streets'),
  destination: z.string().optional(),
  notes: z.string().max(500).optional(),
});

export type DispatchInquiryFormValues = z.infer<typeof dispatchInquirySchema>;
