import React from 'react';
import { cn } from '@/lib/utils';
import { Phone, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { businessConfig } from '@/lib/config/business';
import { Button } from './Button';

export interface EmergencyCallCTAProps extends React.HTMLAttributes<HTMLDivElement> {
  compact?: boolean;
}

export function EmergencyCallCTA({ compact = false, className, ...props }: EmergencyCallCTAProps) {
  if (compact) {
    return (
      <div
        className={cn(
          'flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#17191D] text-white border border-[#2B303A]',
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#C62828] flex items-center justify-center text-white shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold">Need Immediate Roadside Dispatch?</div>
            <div className="text-xs text-[#A3AAB2]">Operating 24/7 in MD, Washington DC & VA</div>
          </div>
        </div>

        <Button
          variant="emergency"
          size="md"
          href={businessConfig.contact.phone.telHref}
          className="w-full sm:w-auto"
        >
          <Phone className="w-4 h-4 mr-2" />
          <span>Call {businessConfig.contact.phone.display}</span>
        </Button>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl bg-[#17191D] text-white p-8 sm:p-12 border border-[#2B303A] shadow-xl',
        className
      )}
      {...props}
    >
      {/* Background industrial diagonal lines accent */}
      <div
        className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#C62828]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#EF5350] mb-3">
          <ShieldAlert className="w-4 h-4" />
          <span>24/7 Live Emergency Dispatch</span>
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4 text-balance">
          Stranded On The Road? We Are Rolling To Help.
        </h3>

        <p className="text-base sm:text-lg text-[#A3AAB2] mb-8 leading-relaxed max-w-2xl">
          Whether you need an emergency flatbed tow, highway tire change, dead battery jump-start, or lockout assistance—speak directly to our dispatch operator with zero automated phone trees.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <Button
            variant="emergency"
            size="lg"
            href={businessConfig.contact.phone.telHref}
            className="text-base"
          >
            <Phone className="w-5 h-5 mr-2.5" />
            <span>Call Dispatch: {businessConfig.contact.phone.display}</span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            href={businessConfig.contact.phone.smsHref}
            className="bg-[#242830] text-white border-[#2B303A] hover:bg-[#2B303A] hover:text-white"
          >
            <span>Text Location Coordinates</span>
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Operational Reassurance Badges */}
        <div className="mt-8 pt-6 border-t border-[#2B303A] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#737B85]">
          <span>Direct Operator Connection</span>
          <span aria-hidden="true">·</span>
          <span>Upfront Fair Quotes</span>
          <span aria-hidden="true">·</span>
          <span>Rapid Response Units on Patrol</span>
        </div>
      </div>
    </div>
  );
}
