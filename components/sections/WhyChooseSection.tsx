import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  PhoneForwarded,
  DollarSign,
  HeartHandshake,
  ShieldCheck,
  CheckCheck,
  MessageSquareQuote,
} from 'lucide-react';
import { businessConfig } from '@/lib/config/business';

export function WhyChooseSection() {
  const customerThemes = [
    {
      icon: PhoneForwarded,
      title: 'Responsive Dispatch',
      theme: 'Speed & Direct Contact',
      description:
        'A local operator answers your call directly. No robotic switchboards or multi-step menus when you need immediate help in traffic.',
      proofPoint: 'Direct telephone line connected 24/7 at (240) 424-8226.',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      theme: 'No Hidden Fees',
      description:
        'Clear, upfront rate quotes confirmed before our trucks roll. No surprise per-mile surcharges or concealed hook-up fees.',
      proofPoint: 'Transparent pricing explained before departure.',
    },
    {
      icon: ShieldCheck,
      title: 'Professional Vehicle Handling',
      theme: 'Damage-Free Rigging',
      description:
        'Hydraulic slide-back flatbeds and non-marring soft-strap tire harnesses designed specifically for AWD, low-clearance, and luxury vehicles.',
      proofPoint: 'Zero-chassis-dragging recovery standards.',
    },
    {
      icon: HeartHandshake,
      title: 'Reliable Customer Support',
      theme: 'Reassurance & Care',
      description:
        'Courteous, professional operators prioritize your personal safety on-scene and keep you informed until your vehicle is safely delivered.',
      proofPoint: 'Documented across 160+ verified customer reviews.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#E2E4E8]">
      <Container>
        <SectionHeading
          kicker="02. Customer Benefits"
          title="Why Drivers Choose LL Towing & Auto Repair."
          description="Clear communication, damage-free vehicle handling, and upfront pricing across Maryland, DC, and Northern Virginia."
          className="mb-8"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerThemes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-[#F5F6F7] border border-[#E2E4E8] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C62828]">
                      {item.theme}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E4E8] flex items-center justify-center text-[#17191D]">
                      <Icon className="w-4 h-4 text-[#C62828]" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#17191D] mb-1.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#494F57] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2E4E8] text-[11px] text-[#737B85] flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#17191D] shrink-0" />
                  <span>{item.proofPoint}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
