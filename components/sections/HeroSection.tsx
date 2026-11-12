'use client';

import React from 'react';
import { Phone, ShieldAlert, ArrowRight, Zap, Key, Disc, Truck } from 'lucide-react';
import { businessConfig } from '@/lib/config/business';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ResponsiveImageContainer } from '@/components/ui/ResponsiveImageContainer';

interface HeroSectionProps {
  onOpenQuote?: () => void;
}

export function HeroSection({ onOpenQuote }: HeroSectionProps) {
  const quickActions = [
    { label: 'Flatbed Tow', href: '#services', icon: Truck },
    { label: 'Jump-Start', href: '#services', icon: Zap },
    { label: 'Lockout', href: '#services', icon: Key },
    { label: 'Flat Tire', href: '#services', icon: Disc },
  ];

  return (
    <section className="relative overflow-hidden bg-white border-b border-[#E2E4E8]">
      {/* Immersive background texture / controlled light surface */}
      <div className="pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Emergency Motorist Priority Copy & CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Regional Authority Kicker (Zero pills, clean typography) */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C62828] mb-3 sm:mb-4">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span className="truncate min-[380px]:overflow-visible min-[380px]:whitespace-normal">
                  Maryland · Washington DC · Northern Virginia
                </span>
                <span aria-hidden="true" className="text-[#A3AAB2]">·</span>
                <span className="text-[#494F57]">24/7 Dispatch</span>
              </div>

              {/* Exact Requested Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17191D] tracking-tight text-balance leading-[1.12] mb-3 sm:mb-4">
                Stranded? <span className="text-[#C62828]">We&apos;re Here to Help.</span>
              </h1>

              {/* One Concise Supporting Sentence */}
              <p className="text-base sm:text-lg text-[#494F57] leading-relaxed mb-6 max-w-2xl">
                Professional towing, roadside assistance, and auto repair serving Maryland, Washington DC, and Northern Virginia with 24/7 live dispatch.
              </p>

              {/* Primary Call Action & Secondary Action Block */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
                <Button
                  variant="emergency"
                  size="lg"
                  href={businessConfig.contact.phone.telHref}
                  data-track-cta="call-dispatch-homepage-hero"
                  className="text-base py-3.5 shadow-lg active:scale-98 transition-transform"
                >
                  <Phone className="w-5 h-5 mr-2.5 animate-pulse shrink-0" />
                  <span className="hidden sm:inline">Call for Assistance ({businessConfig.contact.phone.display})</span>
                  <span className="sm:hidden">Call for Assistance</span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  href="#services"
                  data-track-cta="explore-services-homepage-hero"
                  className="text-base"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-[#737B85]" />
                </Button>
              </div>

              {/* Direct Phone Number Display (prominent verification) */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#737B85] mb-6">
                <span>Direct dispatch operator:</span>
                <a
                  href={businessConfig.contact.phone.telHref}
                  data-track-cta="call-dispatch-homepage-hero-text"
                  className="font-mono font-bold text-sm text-[#17191D] hover:text-[#C62828] transition-colors tabular-nums"
                >
                  {businessConfig.contact.phone.display}
                </a>
                <span aria-hidden="true">·</span>
                <span>No automated phone trees</span>
              </div>

              {/* Quick Roadside Needs Trigger Bar (Mobile-first fast routing) */}
              <div className="pt-4 border-t border-[#EEF0F3]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#737B85] mb-2.5">
                  Immediate Roadside Needs:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {quickActions.map((action, idx) => {
                    const Icon = action.icon;
                    return (
                      <a
                        key={idx}
                        href={action.href}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F5F6F7] border border-[#E2E4E8] text-xs font-semibold text-[#17191D] hover:border-[#C62828] hover:text-[#C62828] transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5 text-[#C62828]" />
                        <span className="truncate">{action.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Photography Carrier with Controlled Scrim */}
            <div className="lg:col-span-5 flex flex-col justify-center mt-4 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden border border-[#E2E4E8] shadow-md bg-[#17191D]">
                <ResponsiveImageContainer
                  slotId="heroTowingFleet"
                  label="Authentic Tow Truck Rig & Roadside Unit"
                  aspectRatio="4:3"
                  priority={true}
                  className="w-full h-full min-h-[300px] sm:min-h-[360px] border-none"
                />

                {/* Controlled Dark Overlay Reassurance Badge */}
                <div className="p-4 sm:p-5 bg-[#17191D] border-t border-[#2B303A] text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">
                        Damage-Free Hydraulic Flatbed Transport
                      </div>
                      <div className="text-[11px] text-[#A3AAB2] mt-0.5">
                        Soft-strap rigging for AWD, low-clearance & passenger cars
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#EF5350] shrink-0 ml-3">
                      MD · DC · VA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
