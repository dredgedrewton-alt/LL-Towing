'use client';

import React, { useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import { QuoteRequestForm } from '@/components/forms/QuoteRequestForm';
import { businessConfig } from '@/lib/config/business';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-[#E2E4E8] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#737B85] hover:text-[#17191D] hover:bg-[#F5F6F7] transition-colors cursor-pointer"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-1">
            Free Estimate & Service Inquiry
          </div>
          <h3 id="quote-modal-title" className="text-2xl font-extrabold text-[#17191D]">
            Request an Automotive Service Quote
          </h3>
          <p className="text-xs text-[#737B85] mt-1.5">
            For urgent breakdowns or roadside assistance, call our 24/7 dispatch desk directly at{' '}
            <a
              href={businessConfig.contact.phone.telHref}
              className="text-[#C62828] font-bold hover:underline"
            >
              {businessConfig.contact.phone.display}
            </a>
            .
          </p>
        </div>

        {/* Form Body */}
        <QuoteRequestForm onSuccess={onClose} />
      </div>
    </div>
  );
}
