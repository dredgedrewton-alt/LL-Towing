'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, AlertCircle, Phone, Clock, ArrowRight } from 'lucide-react';
import { businessConfig } from '@/lib/config/business';
import { trackGenerateLead, trackQuoteFormStart } from '@/lib/analytics';

const quoteFormSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[0-9+()\- ]+$/, 'Invalid phone number format'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  serviceType: z.enum([
    'car-towing',
    'flatbed-towing',
    'specialty-towing',
    'battery-jumpstart',
    'lockout-assistance',
    'fuel-delivery',
    'tire-change',
    'auto-repair',
    'other',
  ]),
  pickupLocation: z.string().min(3, 'Please specify your pickup location or highway exit'),
  destination: z.string().optional(),
  vehicleMakeModel: z.string().optional(),
  preferredTiming: z.enum(['immediate_emergency', 'within_1_2_hours', 'today_scheduled', 'future_date']),
  problemDescription: z.string().max(500).optional(),
  honeypot: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

interface QuoteRequestFormProps {
  onSuccess?: () => void;
  className?: string;
}

export function QuoteRequestForm({ onSuccess, className }: QuoteRequestFormProps) {
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverSuccess, setServerSuccess] = useState<{ referenceId: string; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      serviceType: 'car-towing',
      preferredTiming: 'immediate_emergency',
      honeypot: '',
    },
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setServerError(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'quote',
          fullName: data.fullName,
          phone: data.phone,
          email: data.email || undefined,
          serviceType: data.serviceType,
          pickupLocation: data.pickupLocation,
          destination: data.destination || undefined,
          vehicleMakeModel: data.vehicleMakeModel || undefined,
          preferredTiming: data.preferredTiming,
          message: data.problemDescription || undefined,
          honeypot: data.honeypot || '',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setServerError(
          result.message || 'Unable to submit quote. Please call (240) 424-8226 for immediate assistance.'
        );
        return;
      }

      setServerSuccess({
        referenceId: result.referenceId || 'LL-RECEIVED',
        message: result.message || 'Your quote inquiry has been logged with our dispatch supervisor.',
      });
      trackGenerateLead({
        serviceType: data.serviceType,
        preferredTiming: data.preferredTiming,
        referenceId: result.referenceId || 'LL-RECEIVED',
      });
      reset();
      if (onSuccess) onSuccess();
    } catch (err: unknown) {
      setServerError('A network connection error occurred. Please call dispatch directly at (240) 424-8226.');
    }
  };

  if (serverSuccess) {
    return (
      <div className="p-8 rounded-2xl bg-white border border-[#E2E4E8] text-center max-w-lg mx-auto shadow-sm">
        <div className="w-14 h-14 rounded-full bg-[#E8F5E9] text-[#1B873F] mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="inline-block text-xs font-mono font-bold text-[#737B85] bg-[#F5F6F7] px-3 py-1 rounded mb-2">
          Ref: {serverSuccess.referenceId}
        </div>
        <h4 className="text-2xl font-extrabold text-[#17191D] mb-2">Quote Request Confirmed</h4>
        <p className="text-xs sm:text-sm text-[#494F57] mb-6 leading-relaxed">
          {serverSuccess.message} Our dispatch supervisor is reviewing your vehicle details.
        </p>

        <div className="p-4 rounded-xl bg-[#F5F6F7] border border-[#E2E4E8] text-xs text-[#17191D] mb-6">
          <strong>Immediate Breakdown?</strong> If you are on an active highway shoulder or your vehicle is blocking traffic, do not wait for email—call{' '}
          <a href={businessConfig.contact.phone.telHref} className="text-[#C62828] font-bold hover:underline">
            {businessConfig.contact.phone.display}
          </a>{' '}
          for instant dispatch.
        </div>

        <Button
          variant="outline"
          size="md"
          onClick={() => setServerSuccess(null)}
          className="w-full sm:w-auto"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onFocusCapture={() => trackQuoteFormStart()}
      className={`p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E4E8] shadow-sm space-y-4 ${className || ''}`}
      noValidate
      data-cta-intent="quote"
    >
      {/* Hidden Spam Honeypot Field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="quote-website-hp">Website</label>
        <input
          id="quote-website-hp"
          {...register('honeypot')}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="border-b border-[#E2E4E8] pb-4 mb-2">
        <h3 className="text-xl font-extrabold text-[#17191D]">Request A Service Quote</h3>
        <p className="text-xs text-[#737B85] mt-1">
          Provide your details for an accurate, upfront estimate. Need emergency help right now? Call{' '}
          <a
            href={businessConfig.contact.phone.telHref}
            className="text-[#C62828] font-bold hover:underline tabular-nums"
          >
            {businessConfig.contact.phone.display}
          </a>
          .
        </p>
      </div>

      {/* Server-Side Error Alert */}
      {serverError && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-[#FFEBEE] border border-[#C62828]/30 text-xs text-[#8E1818] flex items-start gap-2.5"
        >
          <AlertCircle className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
          <div className="flex-1 leading-relaxed">{serverError}</div>
        </div>
      )}

      {/* Name and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="q-fullName" className="block text-xs font-semibold text-[#17191D] mb-1">
            Customer Name <span className="text-[#C62828]">*</span>
          </label>
          <input
            id="q-fullName"
            {...register('fullName')}
            type="text"
            placeholder="Marcus Vance"
            aria-required="true"
            aria-invalid={!!errors.fullName}
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
          />
          {errors.fullName && (
            <p className="text-xs text-[#C62828] mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="q-phone" className="block text-xs font-semibold text-[#17191D] mb-1">
            Phone Number <span className="text-[#C62828]">*</span>
          </label>
          <input
            id="q-phone"
            {...register('phone')}
            type="tel"
            placeholder="(240) 555-0199"
            aria-required="true"
            aria-invalid={!!errors.phone}
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
          />
          {errors.phone && (
            <p className="text-xs text-[#C62828] mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Email & Service Required */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="q-email" className="block text-xs font-semibold text-[#17191D] mb-1">
            Email Address <span className="text-[#737B85] font-normal">(Optional for emergency calls)</span>
          </label>
          <input
            id="q-email"
            {...register('email')}
            type="email"
            placeholder="m.vance@example.com"
            aria-invalid={!!errors.email}
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
          />
          {errors.email && (
            <p className="text-xs text-[#C62828] mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="q-serviceType" className="block text-xs font-semibold text-[#17191D] mb-1">
            Service Required <span className="text-[#C62828]">*</span>
          </label>
          <select
            id="q-serviceType"
            {...register('serviceType')}
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] bg-white focus:border-[#C62828] focus:outline-none cursor-pointer"
          >
            <option value="car-towing">Standard Car Towing (Sedan / Coupe)</option>
            <option value="flatbed-towing">Flatbed Towing (AWD / Low Profile)</option>
            <option value="specialty-towing">Special Vehicle Towing (Exotic / Classic)</option>
            <option value="battery-jumpstart">Battery Diagnostics & Jump-Start</option>
            <option value="lockout-assistance">Vehicle Lockout Assistance</option>
            <option value="fuel-delivery">Emergency Fuel Delivery</option>
            <option value="tire-change">Flat Tire Change</option>
            <option value="auto-repair">Auto Repair & Workshop Service</option>
            <option value="other">Other Roadside / Recovery Request</option>
          </select>
        </div>
      </div>

      {/* Pickup Location & Destination */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="q-pickup" className="block text-xs font-semibold text-[#17191D] mb-1">
            Pickup Location / Highway Mile Marker <span className="text-[#C62828]">*</span>
          </label>
          <input
            id="q-pickup"
            {...register('pickupLocation')}
            type="text"
            placeholder="e.g. I-495 Outer Loop near Exit 25 / Beltsville"
            aria-required="true"
            aria-invalid={!!errors.pickupLocation}
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
          />
          {errors.pickupLocation && (
            <p className="text-xs text-[#C62828] mt-1">{errors.pickupLocation.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="q-destination" className="block text-xs font-semibold text-[#17191D] mb-1">
            Drop-off Destination <span className="text-[#737B85] font-normal">(If towing)</span>
          </label>
          <input
            id="q-destination"
            {...register('destination')}
            type="text"
            placeholder="e.g. Dealership, Home address, or LL Repair Bay"
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
          />
        </div>
      </div>

      {/* Vehicle Make/Model & Preferred Timing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="q-vehicle" className="block text-xs font-semibold text-[#17191D] mb-1">
            Vehicle Year / Make / Model <span className="text-[#737B85] font-normal">(Optional)</span>
          </label>
          <input
            id="q-vehicle"
            {...register('vehicleMakeModel')}
            type="text"
            placeholder="e.g. 2022 Subaru Outback AWD"
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="q-timing" className="block text-xs font-semibold text-[#17191D] mb-1">
            Preferred Service Timing <span className="text-[#C62828]">*</span>
          </label>
          <select
            id="q-timing"
            {...register('preferredTiming')}
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] bg-white focus:border-[#C62828] focus:outline-none cursor-pointer"
          >
            <option value="immediate_emergency">Immediate Emergency (Stranded Now)</option>
            <option value="within_1_2_hours">Urgent (Within 1-2 Hours)</option>
            <option value="today_scheduled">Today (Scheduled Window)</option>
            <option value="future_date">Future Date / Appointment</option>
          </select>
        </div>
      </div>

      {/* Short Description */}
      <div>
        <label htmlFor="q-desc" className="block text-xs font-semibold text-[#17191D] mb-1">
          Short Description of Problem <span className="text-[#737B85] font-normal">(Optional)</span>
        </label>
        <textarea
          id="q-desc"
          {...register('problemDescription')}
          rows={2}
          placeholder="e.g. Car will not start; clicking noise under hood. Located in parking lot."
          className="w-full text-sm px-3.5 py-2 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
        />
      </div>

      {/* Submit Button with Loading State */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full min-h-[48px] text-base"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Verifying & Sending Quote Request...</span>
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <span>Submit Quote Request</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </Button>
      </div>

      <p className="text-[11px] text-[#737B85] text-center leading-normal">
        No payment card required. We provide transparent upfront estimates and never share personal information.
      </p>
    </form>
  );
}
