import React from 'react';
import { Container } from '@/components/ui/Container';
import { Phone, FileText, ShieldAlert } from 'lucide-react';
import { businessConfig } from '@/lib/config/business';
import { Button } from '@/components/ui/Button';

interface FinalCTASectionProps {
  onOpenQuote?: () => void;
}

export function FinalCTASection({ onOpenQuote }: FinalCTASectionProps) {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 bg-[#17191D] text-white border-b border-[#2B303A]">
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C62828]/15 blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EF5350] mb-2.5">
            <ShieldAlert className="w-4 h-4" />
            <span>24/7 Roadside Response & Workshop Bays</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance mb-3 leading-tight">
            Need Help With Your Vehicle?
          </h2>

          <p className="text-sm sm:text-base text-[#A3AAB2] leading-relaxed mb-6 max-w-xl mx-auto text-balance">
            Speak directly with our local Maryland/DC dispatch desk for immediate roadside recovery or request a service quote.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              variant="emergency"
              size="lg"
              href={businessConfig.contact.phone.telHref}
              data-track-cta="call-dispatch-final-cta"
              className="w-full sm:w-auto text-base py-3 px-6"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span>Call {businessConfig.contact.phone.display}</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={onOpenQuote}
              data-track-cta="open-quote-modal-final-cta"
              className="w-full sm:w-auto text-base bg-[#242830] text-white border-[#2B303A] hover:bg-[#2B303A] hover:text-white"
            >
              <FileText className="w-4 h-4 mr-2" />
              <span>Request a Quote</span>
            </Button>
          </div>

          {/* Reassurance Footer */}
          <div className="mt-8 pt-6 border-t border-[#2B303A] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#737B85]">
            <span>Direct Operator Line</span>
            <span aria-hidden="true">·</span>
            <span>Upfront Pricing</span>
            <span aria-hidden="true">·</span>
            <span>Damage-Free Vehicle Handling</span>
            <span aria-hidden="true">·</span>
            <span>Serving MD, DC & VA</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
