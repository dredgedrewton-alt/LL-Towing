import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { customerReviews } from '@/lib/content/reviews';
import { businessConfig } from '@/lib/config/business';
import { Star, CheckCircle, ShieldCheck } from 'lucide-react';

export function CustomerReviewsSection() {
  const topReviews = customerReviews.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 bg-[#F5F6F7] border-b border-[#E2E4E8]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <SectionHeading
            kicker="04. Customer Reviews"
            title="Real Driver Experiences Across MD, DC & Virginia."
            description="Straightforward communication, careful vehicle handling, and transparent pricing confirmed by local motorists."
            className="mb-0"
          />

          <div className="p-4 rounded-xl bg-white border border-[#E2E4E8] shadow-xs shrink-0 self-start md:self-end">
            <div className="flex items-center gap-2 mb-1">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C62828] text-[#C62828]" />
                ))}
              </div>
              <span className="text-sm font-extrabold text-[#17191D] tabular-nums">
                {businessConfig.reputation.googleRating} / 5.0
              </span>
            </div>
            <div className="text-[11px] text-[#737B85]">
              {businessConfig.reputation.reviewCount}+ verified Google reviews
            </div>
          </div>
        </div>

        {/* 3 Authentic Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topReviews.map((rev) => (
            <TestimonialCard key={rev.id} review={rev} />
          ))}
        </div>

        {/* Link to Full Reviews Page */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737B85] pt-6 border-t border-[#E2E4E8]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#737B85] shrink-0" />
            <span>Verified driver reviews for towing, jump-starts, tire changes, and auto repair.</span>
          </div>

          <Link
            href="/reviews"
            className="font-bold text-[#17191D] hover:text-[#C62828] transition-colors whitespace-nowrap"
          >
            Read All Customer Reviews →
          </Link>
        </div>
      </Container>
    </section>
  );
}
