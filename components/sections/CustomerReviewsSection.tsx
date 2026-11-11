import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { customerReviews } from '@/lib/content/reviews';
import { businessConfig } from '@/lib/config/business';
import { Star, CheckCircle, ShieldCheck } from 'lucide-react';

export function CustomerReviewsSection() {
  const themes = [
    { label: 'Speed & Responsiveness', count: '45+ mentions' },
    { label: 'Transparent Pricing', count: '38+ mentions' },
    { label: 'Professional Service', count: '52+ mentions' },
    { label: 'Communication & Reassurance', count: '40+ mentions' },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F6F7] border-b border-[#E2E4E8]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            kicker="05. Customer Reviews"
            title="Authentic Driver Experiences Across Maryland, DC & Virginia."
            description="Our service reputation is built on straightforward communication, careful towing, and reliable mechanical workmanship."
            className="mb-0"
          />

          {/* Aggregate Reputation Pill-Free Display */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#E2E4E8] shadow-xs shrink-0 self-start md:self-end">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C62828] text-[#C62828]" />
                ))}
              </div>
              <span className="text-base font-extrabold text-[#17191D] tabular-nums">
                {businessConfig.reputation.googleRating} / 5.0
              </span>
            </div>
            <div className="text-xs text-[#737B85]">
              Historical record of {businessConfig.reputation.reviewCount} verified Google reviews
            </div>
          </div>
        </div>

        {/* Feedback Themes Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {themes.map((th, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg bg-white border border-[#E2E4E8] flex flex-col justify-between"
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#17191D]">
                <CheckCircle className="w-3.5 h-3.5 text-[#1B873F] shrink-0" />
                <span>{th.label}</span>
              </div>
              <span className="text-[11px] text-[#737B85] mt-1">{th.count} in review corpus</span>
            </div>
          ))}
        </div>

        {/* 4 Authentic Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {customerReviews.map((rev) => (
            <TestimonialCard key={rev.id} review={rev} />
          ))}
        </div>

        {/* Honest Attribution Statement & Link to All Reviews */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737B85] pt-6 border-t border-[#E2E4E8]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#737B85] shrink-0" />
            <span>
              {businessConfig.reputation.disclaimer} Ratings are subject to current real-time profile confirmation.
            </span>
          </div>

          <Link
            href="/reviews"
            className="font-bold text-[#17191D] hover:text-[#C62828] transition-colors whitespace-nowrap"
          >
            Read All 161 Verified Reviews →
          </Link>
        </div>
      </Container>
    </section>
  );
}
