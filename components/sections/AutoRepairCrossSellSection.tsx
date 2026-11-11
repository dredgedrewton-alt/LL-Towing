import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Wrench, Disc, Cpu, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { ResponsiveImageContainer } from '@/components/ui/ResponsiveImageContainer';
import { Button } from '@/components/ui/Button';
import { businessConfig } from '@/lib/config/business';

interface AutoRepairCrossSellProps {
  onOpenQuote?: () => void;
}

export function AutoRepairCrossSellSection({ onOpenQuote }: AutoRepairCrossSellProps) {
  const repairHighlights = [
    {
      icon: Cpu,
      title: 'Computer Diagnostics',
      desc: 'Check engine light troubleshooting, electrical fault diagnosis, and sensor calibrations.',
    },
    {
      icon: Disc,
      title: 'Brake Service & Rotors',
      desc: 'Complete pad replacement, precision rotor resurfacing, brake fluid flush, and caliper service.',
    },
    {
      icon: Wrench,
      title: 'Suspension & Steering',
      desc: 'Struts, control arms, shocks, and wheel bearings to restore factory safety and ride comfort.',
    },
    {
      icon: ShieldCheck,
      title: 'Preventative Maintenance',
      desc: 'Fluids, filters, belt replacements, and pre-road trip mechanical inspections.',
    },
  ];

  return (
    <section id="auto-repair-detail" className="py-16 sm:py-20 lg:py-24 bg-[#F5F6F7] border-b border-[#E2E4E8]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Workshop Photographic Preview */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#E2E4E8] shadow-sm bg-white p-3">
              <ResponsiveImageContainer
                slotId="autoRepairFacility"
                label="Full Automotive Repair Facility"
                aspectRatio="4:3"
                className="w-full h-full min-h-[300px]"
              />
              <div className="p-3 text-xs text-[#737B85] flex items-center justify-between">
                <span className="font-semibold text-[#17191D]">Workshop Bay Diagnostics</span>
                <span>Beltsville / Laurel Hub</span>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Copy & Cross-Sell Proposition */}
          <div className="lg:col-span-7">
            {/* Kicker */}
            <div className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2">
              07. Mechanical Workshop Solutions
            </div>

            {/* Exact Requested Headline */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight text-balance leading-tight mb-4">
              More Than a Tow Truck.
            </h2>

            {/* Exact Requested Supporting Concept */}
            <p className="text-base sm:text-lg text-[#494F57] leading-relaxed mb-6 max-w-xl">
              From roadside assistance to automotive repair, discover more ways LL Towing & Auto Repair can help. Whether we tow your vehicle directly into our service bays or you schedule a mechanical inspection, we provide transparent repair estimates and quality workmanship.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {repairHighlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#E2E4E8] flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold text-[#17191D] mb-1.5">
                      <Icon className="w-4 h-4 text-[#C62828]" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-[#494F57] leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Actions: CTA to Explore Auto Repair */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                variant="primary"
                size="lg"
                href="/auto-repair"
                className="text-base"
              >
                <span>Explore Auto Repair</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                href={businessConfig.contact.phone.telHref}
                className="text-base"
              >
                <Phone className="w-4 h-4 mr-2 text-[#C62828]" />
                <span>Call Shop Desk ({businessConfig.contact.phone.display})</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
