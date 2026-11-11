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
      title: 'Responsive Assistance',
      theme: 'Speed & Accessibility',
      description:
        'When you call, a knowledgeable local operator answers directly. No navigating automated phone trees or robotic switchboards when you are stranded in active traffic.',
      proofPoint: 'Direct telephone line connected 24/7 at (240) 424-8226.',
    },
    {
      icon: DollarSign,
      title: 'Clear Pricing Communication',
      theme: 'Transparent Quotes',
      description:
        'We review your service details and provide an upfront price explanation before your vehicle is hooked or transported. No surprise per-mile surcharges or concealed fees.',
      proofPoint: 'Upfront fee breakdown confirmed with dispatch prior to departure.',
    },
    {
      icon: HeartHandshake,
      title: 'Professional & Respectful Treatment',
      theme: 'Calm Demeanor',
      description:
        'Car breakdowns and accidents are jarring and frustrating. Our operators arrive with patience, courtesy, and a priority on your personal safety first.',
      proofPoint: 'Customer reviews consistently cite reassuring on-scene communication.',
    },
    {
      icon: ShieldCheck,
      title: 'Careful Vehicle Handling',
      theme: 'Damage-Free Rigging',
      description:
        'We treat every vehicle—from daily drivers and lowered sports coupes to AWD SUVs—with meticulous care. We use soft-strap tire harnesses and low-angle flatbeds.',
      proofPoint: 'Strict adherence to zero-chassis-dragging recovery standards.',
    },
    {
      icon: CheckCheck,
      title: 'Reliable Service',
      theme: 'Dependability',
      description:
        'Equipped for rain, heat, and night emergencies across Maryland, DC, and Virginia highways. Our recovery units are maintained for dependable field duty.',
      proofPoint: 'Proven track record documented across 161 verified customer reviews.',
    },
    {
      icon: MessageSquareQuote,
      title: 'Helpful Customer Communication',
      theme: 'Continuous Updates',
      description:
        'From coordinating exact highway mile markers to confirming delivery at your repair shop or residence, we keep you informed throughout the entire recovery process.',
      proofPoint: 'Seamless SMS coordinate verification and dispatch updates.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2E4E8]">
      <Container>
        <SectionHeading
          kicker="02. Customer Evidence"
          title="Why Drivers Choose LL Towing & Auto Repair."
          description="Rather than relying on generic promises, our service values reflect the genuine feedback consistently shared by motorists across Maryland, DC, and Virginia."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customerThemes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-[#F5F6F7] border border-[#E2E4E8] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C62828]">
                      {item.theme}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E4E8] flex items-center justify-center text-[#17191D]">
                      <Icon className="w-4 h-4 text-[#C62828]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#17191D] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#494F57] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E4E8] text-xs text-[#737B85] flex items-center gap-1.5 font-medium">
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
