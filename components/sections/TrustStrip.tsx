import React from 'react';
import { Container } from '@/components/ui/Container';
import { Clock, MapPin, Star, Wrench } from 'lucide-react';
import { businessConfig } from '@/lib/config/business';

export function TrustStrip() {
  const trustPoints = [
    {
      icon: Clock,
      headline: 'Listed 24/7 Dispatch',
      subtext: 'Emergency roadside & towing on call continuous hours, subject to operating verification.',
      badgeText: '24 Hours',
    },
    {
      icon: MapPin,
      headline: 'MD · DC · VA Advertised Reach',
      subtext: 'Serving Maryland (Beltsville & Laurel focus), Washington DC, and Northern Virginia arteries.',
      badgeText: 'Tri-State',
    },
    {
      icon: Star,
      headline: `${businessConfig.reputation.googleRating} / 5.0 Google Reputation`,
      subtext: `Based on client historical record of ${businessConfig.reputation.reviewCount} customer reviews; pending live API sync.`,
      badgeText: `${businessConfig.reputation.googleRating} Stars`,
      highlight: true,
    },
    {
      icon: Wrench,
      headline: 'Towing + Roadside + Repair',
      subtext: 'Full automotive continuum from emergency roadside recovery to workshop bay mechanical repairs.',
      badgeText: 'All in One',
    },
  ];

  return (
    <section className="bg-[#17191D] text-white py-8 border-b border-[#2B303A]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-[#242830] border border-[#2B303A]"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    point.highlight
                      ? 'bg-[#C62828] text-white'
                      : 'bg-[#17191D] text-[#A3AAB2]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white leading-snug">
                      {point.headline}
                    </h3>
                  </div>
                  <p className="text-xs text-[#A3AAB2] mt-1 leading-relaxed">
                    {point.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
