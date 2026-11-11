'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { Button } from '@/components/ui/Button';
import { customerReviews } from '@/lib/content/reviews';
import { businessConfig } from '@/lib/config/business';
import { Star, ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ReviewsPageClient() {
  const [filter, setFilter] = useState<string>('all');

  const breadcrumbs = [{ label: 'Reviews', href: '/reviews' }, { label: 'Customer Feedback' }];

  const filteredReviews = customerReviews.filter((r) => {
    if (filter === 'all') return true;
    if (filter === 'towing') return r.serviceReceived.toLowerCase().includes('tow');
    if (filter === 'roadside')
      return (
        r.serviceReceived.toLowerCase().includes('jump') ||
        r.serviceReceived.toLowerCase().includes('lockout') ||
        r.serviceReceived.toLowerCase().includes('tire')
      );
    if (filter === 'repair') return r.serviceReceived.toLowerCase().includes('brake') || r.serviceReceived.toLowerCase().includes('repair');
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-[#F5F6F7] border-b border-[#E2E4E8] py-3">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </div>

      {/* Hero Header */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E4E8]">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C62828] mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Customer Experiences & Feedback</span>
              <span aria-hidden="true" className="text-[#A3AAB2]">·</span>
              <span className="text-[#494F57]">Maryland · DC · Virginia</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17191D] tracking-tight text-balance leading-tight mb-4">
              What Real Drivers Say About Our Service.
            </h1>

            <p className="text-base sm:text-lg text-[#494F57] leading-relaxed mb-6">
              When you are broken down on a high-speed interstate or locked out of your car in bad weather, prompt communication and careful equipment handling matter most. Read authentic customer feedback from motorists across the DMV region.
            </p>

            {/* Reputation Context */}
            <div className="p-4 rounded-xl bg-[#F5F6F7] border border-[#E2E4E8] text-xs text-[#494F57] leading-relaxed max-w-2xl">
              <strong className="text-[#17191D]">Historical Review Record:</strong>{' '}
              {businessConfig.reputation.label}. Testimonials reflect verified experiences of stranded motorists receiving towing, roadside jump-starts, tire changes, lockouts, and mechanical repair.
            </div>
          </div>
        </Container>
      </section>

      {/* Filter Tabs & Reviews Grid */}
      <section className="py-12 sm:py-16 bg-[#F5F6F7] border-b border-[#E2E4E8]">
        <Container>
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#737B85] mr-2">
              Filter By Service:
            </span>
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'towing', label: 'Towing & Flatbed' },
              { id: 'roadside', label: 'Roadside (Jump/Tire/Lockout)' },
              { id: 'repair', label: 'Auto Repair & Workshop' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={cn(
                  'px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer',
                  filter === tab.id
                    ? 'bg-[#17191D] text-white shadow-xs'
                    : 'bg-white text-[#494F57] border border-[#E2E4E8] hover:border-[#17191D]'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review, idx) => (
              <TestimonialCard key={idx} review={review} />
            ))}
          </div>
        </Container>
      </section>

      {/* Emergency Bottom Bar */}
      <section className="py-12 bg-[#17191D] text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Need Reliable Roadside Help Right Now?
            </h3>
            <p className="text-xs sm:text-sm text-[#A3AAB2] mb-6 leading-relaxed">
              Experience the same careful handling and honest pricing our customers count on.
            </p>
            <Button
              variant="emergency"
              size="lg"
              href={businessConfig.contact.phone.telHref}
              data-track-cta="call-dispatch-reviews-bottom"
              className="text-base"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span>Call Dispatch: {businessConfig.contact.phone.display}</span>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
