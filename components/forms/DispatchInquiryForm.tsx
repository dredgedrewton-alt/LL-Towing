'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { dispatchInquirySchema, DispatchInquiryFormValues } from './DispatchInquirySchema';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Phone, AlertCircle } from 'lucide-react';
import { businessConfig } from '@/lib/config/business';

export function DispatchInquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DispatchInquiryFormValues>({
    resolver: zodResolver(dispatchInquirySchema),
    defaultValues: {
      serviceType: 'car-towing',
    },
  });

  const onSubmit = async (data: DispatchInquiryFormValues) => {
    // Phase 1: Client-side validation and simulated dispatch queue confirmation
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-xl bg-white border border-[#E2E4E8] text-center max-w-lg mx-auto">
        <div className="w-12 h-12 rounded-full bg-[#FFEBEE] text-[#C62828] mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-bold text-[#17191D] mb-2">Inquiry Logged</h4>
        <p className="text-sm text-[#494F57] mb-6">
          For immediate roadside assistance or emergency towing, please call dispatch directly at{' '}
          <strong className="text-[#17191D]">{businessConfig.contact.phone.display}</strong>.
        </p>
        <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 sm:p-8 rounded-xl bg-white border border-[#E2E4E8] space-y-4 max-w-xl mx-auto"
    >
      <div className="border-b border-[#E2E4E8] pb-4 mb-4">
        <h4 className="text-lg font-bold text-[#17191D]">Request A Service Quote</h4>
        <p className="text-xs text-[#737B85] mt-1">
          Have an urgent roadside emergency? Call{' '}
          <a href={businessConfig.contact.phone.telHref} className="text-[#C62828] font-bold hover:underline">
            {businessConfig.contact.phone.display}
          </a>{' '}
          for instant 24/7 dispatch.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#17191D] mb-1">Full Name *</label>
          <input
            {...register('fullName')}
            type="text"
            placeholder="John Smith"
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
          />
          {errors.fullName && (
            <p className="text-xs text-[#C62828] mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#17191D] mb-1">Phone Number *</label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="(240) 555-0123"
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
          />
          {errors.phone && (
            <p className="text-xs text-[#C62828] mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#17191D] mb-1">Service Needed *</label>
          <select
            {...register('serviceType')}
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] bg-white focus:border-[#C62828] focus:outline-none"
          >
            <option value="car-towing">Standard Car Towing</option>
            <option value="flatbed-towing">Flatbed Towing (AWD / Low)</option>
            <option value="specialty-towing">Specialty Vehicle Towing</option>
            <option value="battery-jumpstart">Battery Jump-Start</option>
            <option value="lockout-assistance">Vehicle Lockout Service</option>
            <option value="fuel-delivery">Emergency Fuel Delivery</option>
            <option value="tire-change">Flat Tire Change</option>
            <option value="auto-repair">Auto Repair & Diagnostics</option>
            <option value="commercial-impound">Private Property Impound</option>
            <option value="parking-management">Parking Management</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#17191D] mb-1">Vehicle Year / Make / Model *</label>
          <input
            {...register('vehicleMakeModel')}
            type="text"
            placeholder="e.g. 2021 Toyota RAV4 AWD"
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
          />
          {errors.vehicleMakeModel && (
            <p className="text-xs text-[#C62828] mt-1">{errors.vehicleMakeModel.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#17191D] mb-1">Current Vehicle Location *</label>
        <input
          {...register('location')}
          type="text"
          placeholder="e.g. I-495 Outer Loop near Exit 25 / Beltsville"
          className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
        />
        {errors.location && (
          <p className="text-xs text-[#C62828] mt-1">{errors.location.message}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#17191D] mb-1">Destination Address (Optional)</label>
        <input
          {...register('destination')}
          type="text"
          placeholder="e.g. Residence, Dealership, or Repair Shop"
          className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E4E8] focus:border-[#C62828] focus:outline-none"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
        </Button>
      </div>

      <p className="text-[11px] text-[#737B85] text-center">
        Quotes are provided without obligation. We never sell or share contact details.
      </p>
    </form>
  );
}
