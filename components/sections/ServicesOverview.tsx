'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { publishedServices, ServiceItem } from '@/lib/content/services';
import { businessConfig } from '@/lib/config/business';
import { cn } from '@/lib/utils';

export function ServicesOverview() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'towing' | 'roadside' | 'repair' | 'commercial'>('all');

  const filterTabs = [
    { key: 'all', label: 'All Services (11)' },
    { key: 'towing', label: 'Towing & Recovery (3)' },
    { key: 'roadside', label: 'Roadside Help (4)' },
    { key: 'repair', label: 'Auto Repair (1)' },
    { key: 'commercial', label: 'Commercial & Impound (3)' },
  ] as const;

  const filteredServices = publishedServices.filter((service) => {
    if (activeFilter === 'all') return true;
    return service.category === activeFilter;
  });

  return (
    <section id="towing" className="py-16 sm:py-20 lg:py-24 bg-[#F5F6F7] border-b border-[#E2E4E8]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <SectionHeading
            kicker="01. Comprehensive Capabilities"
            title="Professional Automotive Services, Built For Every Situation."
            description="Whether you are stranded on the highway shoulder, need a high-end vehicle transported on a flatbed, or require scheduled mechanical workshop repairs."
            className="mb-0"
          />

          {/* Interactive filter control tabs (functional buttons with click handlers) */}
          <div className="inline-flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-lg border border-[#E2E4E8] shrink-0 self-start md:self-end">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={cn(
                    'px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap',
                    isActive
                      ? 'bg-[#17191D] text-white shadow-xs'
                      : 'text-[#494F57] hover:text-[#17191D] hover:bg-[#F5F6F7]'
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid: 3 columns with responsive stacking */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              featured={service.id === 'flatbed-towing' || service.id === 'car-towing'}
            />
          ))}
        </div>

        {/* Note on unpublished services (strict transparency) */}
        <div className="mt-8 text-center text-xs text-[#737B85]">
          Looking for commercial agreements or specialty recovery? Contact our dispatch office directly at{' '}
          <a
            href={businessConfig.contact.phone.telHref}
            data-track-cta="call-dispatch-services-overview"
            className="text-[#C62828] font-bold hover:underline"
          >
            {businessConfig.contact.phone.display}
          </a>
          .
        </div>
      </Container>
    </section>
  );
}
