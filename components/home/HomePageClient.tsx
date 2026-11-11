'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { CoreServicesSection } from '@/components/sections/CoreServicesSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { FeaturedRoadWorkSection } from '@/components/sections/FeaturedRoadWorkSection';
import { CustomerReviewsSection } from '@/components/sections/CustomerReviewsSection';
import { ServiceCoverageSection } from '@/components/sections/ServiceCoverageSection';
import { AutoRepairCrossSellSection } from '@/components/sections/AutoRepairCrossSellSection';
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

      {/* SECTION 1 — HERO (Emergency Motorist Focus & Above-The-Fold Call Action) */}
      <HeroSection onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* SECTION 2 — TRUST STRIP (24h availability, Tri-state reach, 4.9 rating, Repair continuum) */}
      <TrustStrip />

      {/* SECTION 3 — CORE SERVICES (Towing, Roadside, Auto Repair, Commercial Services) */}
      <CoreServicesSection onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* SECTION 4 — WHY CHOOSE LL TOWING? (6 Evidence-led Customer Feedback Themes) */}
      <WhyChooseSection />

      {/* SECTION 5 — HOW IT WORKS (3-Step Simple Roadside Assistance Process) */}
      <HowItWorksSection />

      {/* SECTION 6 — FEATURED ROAD WORK (Responsive Photographic Operational Gallery) */}
      <FeaturedRoadWorkSection />

      {/* SECTION 7 — CUSTOMER REVIEWS (Speed, Pricing, Professionalism, Communication) */}
      <CustomerReviewsSection />

      {/* SECTION 8 — SERVICE COVERAGE (Maryland: Beltsville & Laurel, DC, and Northern Virginia) */}
      <ServiceCoverageSection onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* SECTION 9 — AUTO REPAIR CROSS-SELL ("More Than a Tow Truck") */}
      <AutoRepairCrossSellSection onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* SECTION 10 — FINAL CTA ("Need Help With Your Vehicle?") */}
      <FinalCTASection onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Interactive Service Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
