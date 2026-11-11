import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { businessConfig } from '@/lib/config/business';
import { ShieldAlert, Phone, Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 bg-[#F5F6F7]">
      <Container>
        <div className="max-w-xl mx-auto text-center p-8 sm:p-10 rounded-2xl bg-white border border-[#E2E4E8] shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-[#FFEBEE] text-[#C62828] mx-auto flex items-center justify-center mb-4">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <div className="text-xs font-mono font-bold text-[#737B85] uppercase tracking-wider mb-2">
            Error 404 · Page Not Located
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] tracking-tight mb-3">
            Looking for Emergency Assistance?
          </h1>

          <p className="text-xs sm:text-sm text-[#494F57] leading-relaxed mb-6">
            The page you requested is not available. If your vehicle is stranded or you need roadside towing right now, don&apos;t wait—call our 24/7 Maryland dispatch desk directly.
          </p>

          <div className="p-4 rounded-xl bg-[#17191D] text-white border border-[#2B303A] mb-6 space-y-2">
            <div className="text-xs font-bold text-[#EF5350] uppercase tracking-wider">
              24/7 Live Emergency Line
            </div>
            <a
              href={businessConfig.contact.phone.telHref}
              data-track-cta="call-dispatch-404"
              className="inline-flex items-center justify-center gap-2 text-xl sm:text-2xl font-black text-white hover:text-[#EF5350] transition-colors tabular-nums"
            >
              <Phone className="w-5 h-5 text-[#C62828] animate-pulse" />
              <span>{businessConfig.contact.phone.display}</span>
            </a>
            <div className="text-[11px] text-[#A3AAB2]">
              Direct Maryland operator · Zero automated menus
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="outline"
              size="md"
              href="/"
              className="w-full sm:w-auto"
            >
              <Home className="w-4 h-4 mr-2" />
              <span>Back to Homepage</span>
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="/service-areas"
              className="w-full sm:w-auto"
            >
              <span>View Service Areas</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
