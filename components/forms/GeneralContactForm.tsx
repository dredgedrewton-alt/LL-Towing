'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { businessConfig } from '@/lib/config/business';
import { trackContactFormSubmit } from '@/lib/analytics';

const generalContactSchema = z.object({
  fullName: z.string().min(2, 'Please enter your name'),
  phone: z.string().min(10, 'Please provide a contact phone number'),
  email: z.string().email('Please provide a valid email address').optional().or(z.literal('')),
  enquiryType: z.enum(['general_enquiry', 'repair_consultation', 'billing_question', 'feedback']),
  message: z.string().min(10, 'Please enter a message of at least 10 characters').max(1000),
  honeypot: z.string().optional(),
});

type GeneralContactValues = z.infer<typeof generalContactSchema>;

export function GeneralContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverSuccess, setServerSuccess] = useState<{ referenceId: string; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<GeneralContactValues>({
    resolver: zodResolver(generalContactSchema),
    defaultValues: {
      enquiryType: 'general_enquiry',
      honeypot: '',
    },
  });

  const onSubmit = async (data: GeneralContactValues) => {
    setServerError(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          fullName: data.fullName,
          phone: data.phone,
          email: data.email || undefined,
          serviceType: data.enquiryType,
          message: data.message,
          honeypot: data.honeypot || '',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setServerError(
          result.message || 'Unable to submit enquiry. Please telephone dispatch at (240) 424-8226.'
        );
        return;
      }

      setServerSuccess({
        referenceId: result.referenceId || 'LL-CONTACT',
        message: result.message || 'Thank you. Your message has been routed to our management team.',
      });
      trackContactFormSubmit({
        enquiryType: data.enquiryType,
        referenceId: result.referenceId || 'LL-CONTACT',
      });
      reset();
    } catch (err: unknown) {
      setServerError('A connection error occurred. Please call dispatch directly at (240) 424-8226.');
    }
  };

  if (serverSuccess) {
    return (
      <div className="p-8 rounded-2xl bg-white border border-[#E2E4E8] text-center max-w-lg mx-auto shadow-sm">
        <div className="w-12 h-12 rounded-full bg-[#E8F5E9] text-[#1B873F] mx-auto flex items-center justify-center mb-3">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div className="text-xs font-mono font-bold text-[#737B85] bg-[#F5F6F7] inline-block px-2.5 py-1 rounded mb-2">
          Ref: {serverSuccess.referenceId}
        </div>
        <h4 className="text-xl font-bold text-[#17191D] mb-2">Message Delivered</h4>
        <p className="text-xs sm:text-sm text-[#494F57] mb-6 leading-relaxed">
          {serverSuccess.message} A team member will follow up by phone or email shortly.
        </p>
        <Button variant="outline" size="sm" onClick={() => setServerSuccess(null)}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E4E8] shadow-sm space-y-4"
      noValidate
      data-cta-intent="contact"
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website-hp">Website</label>
        <input
          id="contact-website-hp"
          {...register('honeypot')}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="border-b border-[#E2E4E8] pb-4 mb-2">
        <h3 className="text-xl font-extrabold text-[#17191D]">General Service Enquiry</h3>
        <p className="text-xs text-[#737B85] mt-1">
          For non-urgent automotive inquiries, workshop scheduling, or billing questions.
        </p>
      </div>

      {serverError && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-[#FFEBEE] border border-[#C62828]/30 text-xs text-[#8E1818] flex items-start gap-2"
        >
          <AlertCircle className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
          <div className="leading-relaxed">{serverError}</div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="gc-name" className="block text-xs font-semibold text-[#17191D] mb-1">
            Your Name <span className="text-[#C62828]">*</span>
          </label>
          <input
            id="gc-name"
            {...register('fullName')}
            type="text"
            placeholder="Sarah Jenkins"
            aria-required="true"
            aria-invalid={!!errors.fullName}
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
          />
          {errors.fullName && (
            <p className="text-xs text-[#C62828] mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="gc-phone" className="block text-xs font-semibold text-[#17191D] mb-1">
            Phone Number <span className="text-[#C62828]">*</span>
          </label>
          <input
            id="gc-phone"
            {...register('phone')}
            type="tel"
            placeholder="(240) 555-0144"
            aria-required="true"
            aria-invalid={!!errors.phone}
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
          />
          {errors.phone && (
            <p className="text-xs text-[#C62828] mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="gc-email" className="block text-xs font-semibold text-[#17191D] mb-1">
            Email Address <span className="text-[#737B85] font-normal">(Optional)</span>
          </label>
          <input
            id="gc-email"
            {...register('email')}
            type="email"
            placeholder="sarah@example.com"
            aria-invalid={!!errors.email}
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
          />
          {errors.email && (
            <p className="text-xs text-[#C62828] mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="gc-type" className="block text-xs font-semibold text-[#17191D] mb-1">
            Enquiry Type <span className="text-[#C62828]">*</span>
          </label>
          <select
            id="gc-type"
            {...register('enquiryType')}
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] bg-white focus:border-[#C62828] focus:outline-none cursor-pointer"
          >
            <option value="general_enquiry">General Automotive Enquiry</option>
            <option value="repair_consultation">Workshop Mechanical Repair Consultation</option>
            <option value="billing_question">Billing & Payment Verification</option>
            <option value="feedback">Customer Feedback or Experience Review</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="gc-message" className="block text-xs font-semibold text-[#17191D] mb-1">
          Message <span className="text-[#C62828]">*</span>
        </label>
        <textarea
          id="gc-message"
          {...register('message')}
          rows={4}
          placeholder="Please describe how we can help you..."
          aria-required="true"
          aria-invalid={!!errors.message}
          className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
        />
        {errors.message && (
          <p className="text-xs text-[#C62828] mt-1">{errors.message.message}</p>
        )}
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="secondary"
          size="lg"
          disabled={isSubmitting}
          className="w-full min-h-[48px] text-base"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Transmitting Message...</span>
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              <span>Send Enquiry Message</span>
            </span>
          )}
        </Button>
      </div>
    </form>
  );
}
