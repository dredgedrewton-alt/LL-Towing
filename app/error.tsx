'use client';

import React, { useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { businessConfig } from '@/lib/config/business';
import { AlertTriangle, Phone, RefreshCw, Home } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error securely
    console.error('App runtime error caught:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 bg-[#F5F6F7]">
      <Container>
        <div className="max-w-xl mx-auto text-center p-8 sm:p-10 rounded-2xl bg-white border border-[#E2E4E8] shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-[#FFEBEE] text-[#C62828] mx-auto flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <h2 className="text-2xl font-extrabold text-[#17191D] mb-2">
            Temporary System Error
          </h2>

          <p className="text-xs sm:text-sm text-[#494F57] leading-relaxed mb-6">
            A temporary display error occurred while rendering this page. If you are broken down on the road or need urgent towing, our live dispatchers are standing by.
          </p>

          <div className="p-4 rounded-xl bg-[#17191D] text-white border border-[#2B303A] mb-6 space-y-2">
            <div className="text-xs font-bold text-[#EF5350] uppercase tracking-wider">
              Immediate Telephone Dispatch
            </div>
            <a
              href={businessConfig.contact.phone.telHref}
              data-track-cta="call-dispatch-error-boundary"
              className="inline-flex items-center justify-center gap-2 text-xl font-bold text-white hover:text-[#EF5350] transition-colors tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#C62828]" />
              <span>{businessConfig.contact.phone.display}</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="primary" size="md" onClick={() => reset()} className="w-full sm:w-auto">
              <RefreshCw className="w-4 h-4 mr-2" />
              <span>Try Again</span>
            </Button>
            <Button variant="outline" size="md" href="/" className="w-full sm:w-auto">
              <Home className="w-4 h-4 mr-2" />
              <span>Back to Safety (Home)</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
