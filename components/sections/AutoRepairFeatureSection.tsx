import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Wrench, Disc, Cpu, Gauge, PhoneCall, Calendar } from 'lucide-react';
import { ResponsiveImageContainer } from '@/components/ui/ResponsiveImageContainer';
import { Button } from '@/components/ui/Button';
import { businessConfig } from '@/lib/config/business';

export function AutoRepairFeatureSection() {
  const repairCapabilities = [
    {
      icon: Cpu,
      title: 'Computer Diagnostics',
      desc: 'OBD-II check engine light scans, sensor checks, and electrical system diagnosis.',
    },
    {
      icon: Disc,
      title: 'Brake Service & Rotors',
      desc: 'Precision ceramic and metallic brake pads, rotor resurfacing/replacement, and fluid bleeds.',
    },
    {
      icon: Gauge,
      title: 'Suspension & Steering',
      desc: 'Struts, shocks, control arms, and tie rod ends to restore safe handling and tire wear.',
    },
    {
      icon: Wrench,
      title: 'Preventative Maintenance',
      desc: 'Oil changes, radiator flushes, belt replacements, and pre-trip safety inspections.',
    },
  ];

  return (
    <section id="auto-repair" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2E4E8]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Workshop Image Slot */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ResponsiveImageContainer
              slotId="autoRepairFacility"
              label="Mechanical Repair Bay & Diagnostic Station"
              aspectRatio="4:3"
              className="w-full h-full min-h-[300px]"
            />
            <div className="mt-3 text-xs text-[#737B85] flex items-center justify-between px-1">
              <span>Automotive Service Bays</span>
              <span>Beltsville / Laurel Hub</span>
            </div>
          </div>

          {/* Right Column: Capabilities */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionHeading
              kicker="05. Workshop Capabilities"
              title="Not Just Towing. Full Automotive Repair & Care."
              description="When your vehicle requires mechanical attention rather than just a tow home, our workshop bays handle diagnostics, brake repairs, and maintenance with quality parts and fair labor rates."
              className="mb-8"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {repairCapabilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#F5F6F7] border border-[#E2E4E8]"
                  >
                    <div className="flex items-center gap-2 font-bold text-sm text-[#17191D] mb-1.5">
                      <Icon className="w-4 h-4 text-[#C62828]" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-[#494F57] leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                variant="primary"
                size="md"
                href={businessConfig.contact.phone.telHref}
              >
                <PhoneCall className="w-4 h-4 mr-2" />
                <span>Schedule Repair Consultation</span>
              </Button>

              <span className="text-xs text-[#737B85] text-center sm:text-left">
                Workshop bays operate on scheduled daytime hours. Call for appointment slots.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
