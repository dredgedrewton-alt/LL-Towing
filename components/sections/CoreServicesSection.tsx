import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Truck, ShieldAlert, Wrench, Building2, ArrowRight, PhoneCall } from 'lucide-react';
import { businessConfig } from '@/lib/config/business';
import { ResponsiveImageContainer } from '@/components/ui/ResponsiveImageContainer';

interface CoreServicesSectionProps {
  onOpenQuote?: () => void;
}

export function CoreServicesSection({ onOpenQuote }: CoreServicesSectionProps) {
  const coreServices = [
    {
      id: 'towing',
      title: 'Towing Services',
      kicker: 'Damage-Free Recovery',
      desc: 'Hydraulic flatbed and wheel-lift towing for passenger cars, AWD SUVs, luxury exotics, and fleet vehicles.',
      features: [
        'Hydraulic flatbed decks for zero ground dragging',
        'Soft-strap wheel rigging for luxury & AWD models',
        'Direct delivery to home, dealer, or our workshop',
      ],
      icon: Truck,
      imageSlotId: 'flatbedTowing',
      href: '/towing',
      availability: '24/7 Dispatch',
    },
    {
      id: 'roadside',
      title: 'Roadside Assistance',
      kicker: 'Prompt Roadside Relief',
      desc: 'Fast on-scene assistance for dead batteries, locked-in keys, flat tires, and fuel delivery across MD, DC, and VA.',
      features: [
        'Commercial booster pack jump-starts & battery tests',
        'Gentle non-marring lockout door entry',
        'Rapid tire swaps & roadside fuel top-offs',
      ],
      icon: ShieldAlert,
      imageSlotId: 'roadsideJumpstart',
      href: '/roadside-assistance',
      availability: '24/7 Emergency',
    },
    {
      id: 'auto-repair',
      title: 'Auto Repair & Maintenance',
      kicker: 'Workshop Mechanical Bays',
      desc: 'Full-service automotive diagnostics, brake overhauls, suspension work, and preventative care in our Beltsville/Laurel repair facility.',
      features: [
        'OBD-II computerized diagnostic scans',
        'Brake pads, rotors, drums, and hydraulic lines',
        'Suspension, steering, and seasonal tune-ups',
      ],
      icon: Wrench,
      imageSlotId: 'autoRepairFacility',
      href: '/auto-repair',
      availability: 'Scheduled Bays',
    },
    {
      id: 'commercial',
      title: 'Commercial Vehicle Services',
      kicker: 'Property & Fleet Solutions',
      desc: 'Lawful private property impounds, parking lot enforcement, and compliant collateral repossession for property owners and lenders.',
      features: [
        'Photographic condition logging & compliance',
        'Dedicated dispatch line for property managers',
        'Secured, monitored storage retention facility',
      ],
      icon: Building2,
      imageSlotId: 'commercialImpound',
      href: '/commercial-services',
      availability: 'Commercial Dispatch',
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 bg-[#F5F6F7] border-b border-[#E2E4E8]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <SectionHeading
            kicker="01. Core Services"
            title="Comprehensive Automotive Care."
            description="From emergency highway recovery to mechanical workshop diagnostics, our team delivers dependable, transparent service."
            className="mb-0"
          />

          <div className="shrink-0 self-start md:self-end">
            <a
              href={businessConfig.contact.phone.telHref}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C62828] hover:text-[#B71C1C] transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Need help? Call {businessConfig.contact.phone.display}</span>
            </a>
          </div>
        </div>

        {/* 4 Premium Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreServices.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="group flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-white border border-[#E2E4E8] hover:border-[#737B85] shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div>
                  {/* Top Unboxed Metadata */}
                  <div className="flex items-center justify-between text-xs text-[#737B85] mb-4">
                    <span className="font-bold text-[#C62828] uppercase tracking-wider">
                      {service.kicker}
                    </span>
                    <span className="text-[#494F57]">{service.availability}</span>
                  </div>

                  {/* Header with Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F5F6F7] border border-[#E2E4E8] flex items-center justify-center text-[#C62828] shrink-0 group-hover:bg-[#C62828] group-hover:text-white group-hover:border-[#C62828] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#17191D] leading-tight group-hover:text-[#C62828] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#494F57] mt-1 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  {/* Thumbnail Photographic Asset Carrier */}
                  <div className="my-5 overflow-hidden rounded-xl border border-[#E2E4E8]">
                    <ResponsiveImageContainer
                      slotId={service.imageSlotId}
                      aspectRatio="16:9"
                      className="w-full max-h-48"
                    />
                  </div>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 text-xs sm:text-sm text-[#494F57] mb-6">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-none bg-[#C62828] mt-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="pt-5 border-t border-[#EEF0F3] flex items-center justify-between">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#17191D] group-hover:text-[#C62828] transition-colors"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href={businessConfig.contact.phone.telHref}
                    className="text-xs font-semibold text-[#737B85] hover:text-[#C62828] transition-colors"
                  >
                    Direct Dispatch →
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
