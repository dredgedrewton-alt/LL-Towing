'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, AlertCircle, Building2, ArrowRight } from 'lucide-react';
import { businessConfig } from '@/lib/config/business';
import { trackCommercialEnquirySubmit } from '@/lib/analytics';

const commercialFormSchema = z.object({
  businessName: z.string().min(2, 'Please provide the business or property organization name'),
  fullName: z.string().min(2, 'Please provide your full name'),
  contactTitle: z.string().min(2, 'Please provide your title or role (e.g. Property Manager, HOA President)'),
  phone: z.string().min(10, 'Please provide a direct telephone number'),
  email: z.string().email('Please provide a valid business email address'),
  propertyAddress: z.string().min(5, 'Please provide the commercial property address or complex name'),
  serviceType: z.enum([
    'private_property_impounds',
    'parking_management_patrol',
    'vehicle_repossessions',
    'commercial_fleet_towing',
    'custom_property_agreement',
  ]),
  message: z.string().min(10, 'Please outline your property or fleet requirements').max(1000),
  honeypot: z.string().optional(),
});

type CommercialFormValues = z.infer<typeof commercialFormSchema>;

export function CommercialInquiryForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverSuccess, setServerSuccess] = useState<{ referenceId: string; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CommercialFormValues>({
    resolver: zodResolver(commercialFormSchema),
    defaultValues: {
      serviceType: 'private_property_impounds',
      honeypot: '',
    },
  });

  const onSubmit = async (data: CommercialFormValues) => {
    setServerError(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'commercial',
          fullName: data.fullName,
          phone: data.phone,
          email: data.email,
          businessName: data.businessName,
          contactTitle: data.contactTitle,
          propertyAddress: data.propertyAddress,
          serviceType: data.serviceType,
          message: data.message,
          honeypot: data.honeypot || '',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setServerError(
          result.message || 'Commercial inquiry delivery failed. Please call dispatch directly at (240) 424-8226.'
        );
        return;
      }

      setServerSuccess({
        referenceId: result.referenceId || 'LL-COMM',
        message: result.message || 'Commercial inquiry successfully submitted to our property accounts director.',
      });
      trackCommercialEnquirySubmit({
        serviceType: data.serviceType,
        referenceId: result.referenceId || 'LL-COMM',
      });
      reset();
    } catch (err: unknown) {
      setServerError('A network error occurred. Please call commercial accounts directly at (240) 424-8226.');
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
        <h4 className="text-xl font-bold text-[#17191D] mb-2">Commercial Proposal Received</h4>
        <p className="text-xs sm:text-sm text-[#494F57] mb-6 leading-relaxed">
          {serverSuccess.message} Our commercial account supervisor will contact you within one business day with regulatory signage and service terms.
        </p>
        <Button variant="outline" size="sm" onClick={() => setServerSuccess(null)}>
          Submit Another Proposal
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E4E8] shadow-sm space-y-4"
      noValidate
      data-cta-intent="commercial"
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="comm-website-hp">Website</label>
        <input
          id="comm-website-hp"
          {...register('honeypot')}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="border-b border-[#E2E4E8] pb-4 mb-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C62828] mb-1">
          <Building2 className="w-4 h-4" />
          <span>B2B Commercial Accounts</span>
        </div>
        <h3 className="text-xl font-extrabold text-[#17191D]">Commercial Parking & Impound Inquiry</h3>
        <p className="text-xs text-[#737B85] mt-1">
          Property managers, HOA officers, retail plazas, and financial lenders.
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

      {/* Business Name and Role */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="comm-bname" className="block text-xs font-semibold text-[#17191D] mb-1">
            Business / Property Organization <span className="text-[#C62828]">*</span>
          </label>
          <input
            id="comm-bname"
            {...register('businessName')}
            type="text"
            placeholder="Oakwood Ridge HOA / Apex Properties"
            aria-required="true"
            aria-invalid={!!errors.businessName}
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
          />
          {errors.businessName && (
            <p className="text-xs text-[#C62828] mt-1">{errors.businessName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="comm-title" className="block text-xs font-semibold text-[#17191D] mb-1">
            Your Title / Role <span className="text-[#C62828]">*</span>
          </label>
          <input
            id="comm-title"
            {...register('contactTitle')}
            type="text"
            placeholder="Senior Property Manager / Board Officer"
            aria-required="true"
            aria-invalid={!!errors.contactTitle}
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
          />
          {errors.contactTitle && (
            <p className="text-xs text-[#C62828] mt-1">{errors.contactTitle.message}</p>
          )}
        </div>
      </div>

      {/* Name and Direct Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="comm-name" className="block text-xs font-semibold text-[#17191D] mb-1">
            Contact Person Name <span className="text-[#C62828]">*</span>
          </label>
          <input
            id="comm-name"
            {...register('fullName')}
            type="text"
            placeholder="David Henderson"
            aria-required="true"
            aria-invalid={!!errors.fullName}
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
          />
          {errors.fullName && (
            <p className="text-xs text-[#C62828] mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="comm-phone" className="block text-xs font-semibold text-[#17191D] mb-1">
            Direct Phone Number <span className="text-[#C62828]">*</span>
          </label>
          <input
            id="comm-phone"
            {...register('phone')}
            type="tel"
            placeholder="(240) 555-0188"
            aria-required="true"
            aria-invalid={!!errors.phone}
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
          />
          {errors.phone && (
            <p className="text-xs text-[#C62828] mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Business Email & Service Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="comm-email" className="block text-xs font-semibold text-[#17191D] mb-1">
            Work Email Address <span className="text-[#C62828]">*</span>
          </label>
          <input
            id="comm-email"
            {...register('email')}
            type="email"
            placeholder="d.henderson@apexproperties.com"
            aria-required="true"
            aria-invalid={!!errors.email}
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
          />
          {errors.email && (
            <p className="text-xs text-[#C62828] mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="comm-service" className="block text-xs font-semibold text-[#17191D] mb-1">
            Requested Commercial Solution <span className="text-[#C62828]">*</span>
          </label>
          <select
            id="comm-service"
            {...register('serviceType')}
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] bg-white focus:border-[#C62828] focus:outline-none cursor-pointer"
          >
            <option value="private_property_impounds">Private Property Impounds (Fire Lanes / ADA)</option>
            <option value="parking_management_patrol">Commercial Lot Management & Permit Patrol</option>
            <option value="vehicle_repossessions">Collateral Recovery & Repossession</option>
            <option value="commercial_fleet_towing">Commercial Fleet Towing Services</option>
            <option value="custom_property_agreement">Comprehensive Property Towing Agreement</option>
          </select>
        </div>
      </div>

      {/* Property Address */}
      <div>
        <label htmlFor="comm-addr" className="block text-xs font-semibold text-[#17191D] mb-1">
          Property Location / Complex Address <span className="text-[#C62828]">*</span>
        </label>
        <input
          id="comm-addr"
          {...register('propertyAddress')}
          type="text"
          placeholder="e.g. 10200 Baltimore Ave, Beltsville MD (Approx. 250 parking bays)"
          aria-required="true"
          aria-invalid={!!errors.propertyAddress}
          className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
        />
        {errors.propertyAddress && (
          <p className="text-xs text-[#C62828] mt-1">{errors.propertyAddress.message}</p>
        )}
      </div>

      {/* Details Message */}
      <div>
        <label htmlFor="comm-message" className="block text-xs font-semibold text-[#17191D] mb-1">
          Property Details & Requirements <span className="text-[#C62828]">*</span>
        </label>
        <textarea
          id="comm-message"
          {...register('message')}
          rows={3}
          placeholder="Describe your current parking challenges, estimated parking stalls, or signage requirements..."
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
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full min-h-[48px] text-base"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Submitting Commercial Proposal...</span>
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <span>Submit Commercial Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </Button>
      </div>

      <p className="text-[11px] text-[#737B85] text-center leading-normal">
        All agreements strictly adhere to Maryland municipal and Prince George’s County commercial towing codes.
      </p>
    </form>
  );
}
