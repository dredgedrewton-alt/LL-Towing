'use client';

import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { businessConfig } from '@/lib/config/business';

export function MobileStickyCallBar() {
  return (
    <aside
      aria-label="Quick Roadside Contact Bar"
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-[#17191D] border-t border-[#2B303A] p-2.5 px-4 shadow-2xl"
      style={{ maxHeight: '64px' }}
    >
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        {/* Primary Call Dispatch Button */}
        <a
          href={businessConfig.contact.phone.telHref}
          data-track-cta="call-dispatch-mobile-bar"
          className="flex-1 flex items-center justify-center gap-2 bg-[#C62828] active:bg-[#8E1818] text-white font-bold text-sm py-2.5 px-4 rounded-lg shadow-md transition-colors whitespace-nowrap min-h-[44px]"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>Call Dispatch 24/7</span>
        </a>

        {/* Quick SMS Location Button */}
        <a
          href={businessConfig.contact.phone.smsHref}
          data-track-cta="sms-dispatch-mobile-bar"
          className="flex items-center justify-center gap-1.5 bg-[#242830] active:bg-[#2B303A] text-white font-semibold text-xs py-2.5 px-3.5 rounded-lg border border-[#2B303A] transition-colors whitespace-nowrap min-h-[44px]"
          title="Text your stranded location"
        >
          <MessageSquare className="w-4 h-4 text-[#A3AAB2]" />
          <span>Text Location</span>
        </a>
      </div>
    </aside>
  );
}
