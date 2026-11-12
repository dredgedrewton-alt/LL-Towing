import React from 'react';
import { Container } from '@/components/ui/Container';
import { Clock, MapPin, Star, Wrench } from 'lucide-react';
import { businessConfig } from '@/lib/config/business';

export function TrustStrip() {
  const trustPoints = [
    {
      icon: Clock,
      headline: '24/7 Live Dispatch',
      subtext: 'Direct phone contact with local operators. No automated phone trees.',
      badgeText: '24/7',
    },
    {
      icon: MapPin,
      headline: 'MD · DC · VA Coverage',
      subtext: 'Rapid dispatch from Beltsville and Laurel hubs across the DMV.',
      badgeText: 'Tri-State',
    },
    {
      icon: Star,
      headline: `${businessConfig.reputation.googleRating} Star Rating`,
      subtext: `Backed by ${businessConfig.reputation.reviewCount}+ verified customer reviews on Google.`,
      badgeText: `${businessConfig.reputation.googleRating} Stars`,
      highlight: true,
    },
    {
      icon: Wrench,
      headline: 'Towing & Auto Repair',
      subtext: 'Seamless transition from roadside recovery into full workshop service.',
      badgeText: 'Full Care',
    },
  ];

  return (
    <section className="bg-[#17191D] text-white py-6 border-b border-[#2B303A]">
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
