'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle, ChevronDown, ChevronUp, CheckCircle2, Clock } from 'lucide-react';
import { businessConfig } from '@/lib/config/business';

export function UnresolvedDataNotice({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      aria-label="Editorial Data Verification Audit"
      className={cn(
        'rounded-xl border border-[#E2E4E8] bg-[#F5F6F7] p-4 text-xs text-[#17191D]',
        className
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-[#C62828] shrink-0" />
          <span className="font-semibold text-xs text-[#17191D]">
            Phase 1 Agency Governance Notice: Fact Verification Tracker
          </span>
          <span className="hidden sm:inline text-[#737B85]">
            ({businessConfig.unresolvedRegistry.length} items logged pending client sign-off)
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-1 font-semibold text-[#C62828] hover:text-[#B71C1C] cursor-pointer"
          aria-expanded={isOpen}
        >
          <span>{isOpen ? 'Hide Details' : 'View Audit'}</span>
          {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 pt-3 border-t border-[#E2E4E8] space-y-3">
          <p className="text-[11px] text-[#494F57] leading-relaxed">
            Per client requirements, no addresses, fleet numbers, response time commitments, or service lines are fabricated. The following items remain explicitly registered for client confirmation:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {businessConfig.unresolvedRegistry.map((item, idx) => (
              <div
                key={idx}
                className="p-3 bg-white rounded-lg border border-[#E2E4E8] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#17191D]">{item.field}</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#C62828] uppercase tracking-wide">
                      <Clock className="w-3 h-3" />
                      Pending
                    </span>
                  </div>
                  <p className="text-[11px] text-[#494F57] leading-snug">{item.description}</p>
                </div>
                <div className="mt-2 text-[10px] text-[#737B85] italic">
                  Note: {item.internalNote}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[#1B873F] font-medium pt-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>24/7 Telephone confirmed: (240) 424-8226 · Beltsville & Laurel regional coverage active</span>
          </div>
        </div>
      )}
    </aside>
  );
}
