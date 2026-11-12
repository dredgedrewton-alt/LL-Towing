'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { CoreServicesSection } from '@/components/sections/CoreServicesSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { FeaturedRoadWorkSection } from '@/components/sections/FeaturedRoadWorkSection';
import { CustomerReviewsSection } from '@/components/sections/CustomerReviewsSection';
import { ServiceCoverageSection } from '@/components/sections/ServiceCoverageSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { UnresolvedDataNotice } from '@/components/ui/UnresolvedDataNotice';
import { QuoteModal } from '@/components/ui/QuoteModal';

export function HomePageClient() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Editorial Fact Verification & Audit Banner */}
      <div className="bg-white border-b border-[#E2E4E8] py-2">
        <Container>
          <UnresolvedDataNotice />
        </Container>
      </div>

      {/* SECTION 1 — HERO */}
      <HeroSection onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* SECTION 2 — TRUST STRIP */}
      <TrustStrip />

      {/* SECTION 3 — CORE SERVICES */}
      <CoreServicesSection onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* SECTION 4 — WHY CHOOSE LL TOWING */}
      <WhyChooseSection />

      {/* SECTION 5 — FEATURED ROAD WORK (Authentic Photography Gallery) */}
      <FeaturedRoadWorkSection />

      {/* SECTION 6 — CUSTOMER REVIEWS */}
      <CustomerReviewsSection />

      {/* SECTION 7 — SERVICE COVERAGE */}
      <ServiceCoverageSection onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* SECTION 8 — FINAL HIGH-IMPACT CTA */}
      <FinalCTASection onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Interactive Service Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
