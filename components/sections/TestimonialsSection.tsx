import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { customerReviews } from '@/lib/content/reviews';
import { businessConfig } from '@/lib/config/business';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2E4E8]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            kicker="04. Customer Feedback"
            title="Trusted By Drivers Across Maryland & Washington DC."
            description="Our service culture is built on calm, respectful communication, rapid arrival, and honest rates."
            className="mb-0"
          />

          {/* Social Proof Header Badge (Tabular numerals, compliant with zero-pill rule) */}
          <div className="p-4 rounded-xl bg-[#F5F6F7] border border-[#E2E4E8] shrink-0 self-start md:self-end">
            <div className="flex items-center gap-1.5 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C62828] text-[#C62828]" />
              ))}
              <span className="ml-1 text-sm font-extrabold text-[#17191D] tabular-nums">
                {businessConfig.reputation.googleRating}
              </span>
            </div>
            <div className="text-xs text-[#737B85]">
              Based on {businessConfig.reputation.reviewCount} customer reviews
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {customerReviews.map((rev) => (
            <TestimonialCard key={rev.id} review={rev} />
          ))}
        </div>

        {/* Historical Disclaimer footer */}
        <div className="mt-8 text-center text-xs text-[#737B85]">
          {businessConfig.reputation.disclaimer}
        </div>
      </Container>
    </section>
  );
}
