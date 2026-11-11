import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Building2, ParkingSquare, FileLock2, ShieldCheck, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { businessConfig } from '@/lib/config/business';

export function CommercialServicesSection() {
  const commercialLines = [
    {
      icon: Building2,
      title: 'Private Property Impounds',
      desc: 'Clear fire lanes, reserved stalls, and handicap spaces with full adherence to Maryland and county towing statutes.',
      bullets: ['Complete photographic condition log', 'Warning notices & statutory compliance', 'Dedicated storage facility'],
    },
    {
      icon: ParkingSquare,
      title: 'Commercial Parking Management',
      desc: 'Reliable parking lot oversight for residential apartment complexes, shopping centers, and commercial business parks.',
      bullets: ['Customized lot signage installed', 'Permit validation & space patrols', 'Direct property manager dispatch line'],
    },
    {
      icon: FileLock2,
      title: 'Vehicle Repossessions',
      desc: 'Compliant collateral recovery handled with professional protocol, discretion, and documented condition accountability.',
      bullets: ['Licensed repossession protocols', 'Detailed property & key inventory', 'Secured compound retention'],
    },
  ];

  return (
    <section id="commercial" className="py-16 sm:py-20 lg:py-24 bg-[#17191D] text-white border-b border-[#2B303A]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            kicker="06. Commercial & Property Solutions"
            title="Commercial Parking Enforcement & Asset Recovery."
            description="Protecting private property rights, maintaining tenant parking access, and delivering professional collateral recovery across the DMV region."
            dark={true}
            className="mb-0"
          />

          <div className="shrink-0 self-start md:self-end">
            <Button
              variant="emergency"
              size="md"
              href={businessConfig.contact.phone.telHref}
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              <span>Commercial Account Inquiries</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commercialLines.map((col, idx) => {
            const Icon = col.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-[#1D2128] border border-[#2B303A] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#242830] border border-[#2B303A] flex items-center justify-center text-[#EF5350] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{col.title}</h3>
                  <p className="text-xs sm:text-sm text-[#A3AAB2] leading-relaxed mb-6">
                    {col.desc}
                  </p>

                  <ul className="space-y-2 text-xs text-[#737B85] mb-6">
                    {col.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#EF5350] shrink-0" />
                        <span className="text-[#A3AAB2]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#2B303A] text-xs text-[#737B85]">
                  Compliant with Maryland Commercial Towing Codes
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
