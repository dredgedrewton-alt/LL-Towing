'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ShieldAlert } from 'lucide-react';
import { businessConfig } from '@/lib/config/business';
import { headerNavLinks, mobileExtendedNavLinks } from '@/lib/config/navigation';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E2E4E8]">
      {/* Top emergency dispatch ticker announcement strip */}
      <div className="bg-[#17191D] text-white py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-3.5 h-3.5 text-[#C62828] shrink-0" />
            <span className="font-semibold text-[11px] sm:text-xs">
              <span className="hidden min-[360px]:inline">24/7 Roadside & Towing Dispatch</span>
              <span className="min-[360px]:hidden">24/7 Dispatch</span>
            </span>
            <span className="hidden md:inline text-[#737B85]">·</span>
            <span className="hidden md:inline text-[11px] text-[#A3AAB2]">
              Serving Maryland, Washington DC & Northern Virginia
            </span>
          </div>

          <a
            href={businessConfig.contact.phone.telHref}
            data-track-cta="call-dispatch-header-ticker"
            className="flex items-center gap-1.5 font-bold text-white hover:text-[#EF5350] transition-colors text-[11px] sm:text-xs tabular-nums shrink-0"
          >
            <Phone className="w-3 h-3 text-[#C62828]" />
            <span>{businessConfig.contact.phone.display}</span>
          </a>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 Zones separated by gap */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-2 sm:gap-8">
        {/* Zone 1: Brand wordmark (single text element wordmark in display face) */}
        <Link
          href="/"
          className="text-base sm:text-xl font-extrabold tracking-tight text-[#17191D] hover:text-[#C62828] transition-colors truncate max-w-[210px] min-[380px]:max-w-none shrink-0"
        >
          {businessConfig.name}
        </Link>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#494F57]"
        >
          {headerNavLinks.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 font-semibold',
                  isActive
                    ? 'text-[#C62828] border-[#C62828]'
                    : 'text-[#494F57] border-transparent hover:text-[#C62828] hover:border-[#C62828]'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <Button
            variant="emergency"
            size="md"
            href={businessConfig.contact.phone.telHref}
            data-track-cta="call-dispatch-header-desktop"
          >
            <Phone className="w-4 h-4 mr-2" />
            <span>Call 24/7 Dispatch</span>
          </Button>
        </div>

        {/* Mobile menu trigger button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={businessConfig.contact.phone.telHref}
            data-track-cta="call-dispatch-header-mobile-icon"
            className="p-2 rounded-lg bg-[#FFEBEE] text-[#C62828] hover:bg-[#C62828] hover:text-white transition-colors"
            aria-label="Call Dispatch"
          >
            <Phone className="w-5 h-5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#17191D] hover:bg-[#F5F6F7] transition-colors focus-visible:outline-2 focus-visible:outline-[#C62828]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E2E4E8] bg-white px-4 pt-3 pb-6 shadow-lg max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-1">
            {mobileExtendedNavLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between',
                    isActive
                      ? 'bg-[#FFEBEE] text-[#C62828]'
                      : 'text-[#17191D] hover:bg-[#F5F6F7] hover:text-[#C62828]'
                  )}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#E2E4E8]">
            <Button
              variant="emergency"
              size="lg"
              href={businessConfig.contact.phone.telHref}
              data-track-cta="call-dispatch-header-drawer"
              className="w-full text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="w-5 h-5 mr-2" />
              <span>Call Dispatch: {businessConfig.contact.phone.display}</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
