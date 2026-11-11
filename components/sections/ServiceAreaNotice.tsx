import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MapPin, Navigation, Phone, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '@/lib/config/business';
import { Button } from '@/components/ui/Button';

export function ServiceAreaNotice() {
  return (
    <section id="service-areas" className="py-16 sm:py-20 lg:py-24 bg-[#F5F6F7] border-b border-[#E2E4E8]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Coverage Details */}
          <div className="lg:col-span-7">
            <SectionHeading
              kicker="03. Service Coverage"
              title="Fast Dispatch Across Maryland, Washington DC, and Northern Virginia."
              description="Our mobile recovery units and flatbed carriers operate out of strategic hubs in the Beltsville and Laurel corridors, ensuring prompt response across the Capital region."
            />

            {/* Tri-State Hub Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {businessConfig.serviceArea.states.map((st) => (
                <div
                  key={st.code}
                  className="p-5 rounded-xl bg-white border border-[#E2E4E8] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-sm text-[#17191D] mb-2">
                      <MapPin className="w-4 h-4 text-[#C62828]" />
                      <span>{st.name}</span>
                    </div>
                    <ul className="space-y-1 text-xs text-[#494F57]">
                      {st.primaryHubs.map((hub, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="text-[#C62828]">·</span>
                          <span>{hub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Factual Address Notice Card */}
            <div className="p-5 rounded-xl bg-white border border-[#E2E4E8] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C62828]">
                <Navigation className="w-3.5 h-3.5" />
                <span>Operating Hubs & Routing Verification</span>
              </div>
              <p className="text-xs text-[#494F57] leading-relaxed">
                Primary operations are coordinated from <strong>Beltsville, MD</strong> and <strong>Laurel, MD</strong>. Because physical workshop facilities are undergoing final verification for direct walk-in mechanical appointments, all customers are requested to contact dispatch at{' '}
                <a href={businessConfig.contact.phone.telHref} className="text-[#C62828] font-bold hover:underline">
                  {businessConfig.contact.phone.display}
                </a>{' '}
                prior to in-person arrival.
              </p>
            </div>
          </div>

          {/* Right Column: Dispatch Highlights & Reassurance */}
          <div className="lg:col-span-5 bg-[#17191D] text-white p-7 sm:p-9 rounded-2xl border border-[#2B303A] flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#EF5350] mb-2">
                24/7 On-Call Fleet
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-4 text-balance">
                Highways, Interstates & City Streets Covered
              </h3>

              <p className="text-xs sm:text-sm text-[#A3AAB2] leading-relaxed mb-6">
                Active patrol coverage along primary transit corridors including I-95, I-495 (Capital Beltway), I-295, US-1 (Baltimore Ave), MD-200 (ICC), Route 50, and key regional arteries.
              </p>

              <div className="space-y-3 pt-4 border-t border-[#2B303A] text-xs text-[#A3AAB2]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0" />
                  <span>Licensed and insured operators</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0" />
                  <span>Transparent flat rates without surprise surcharges</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0" />
                  <span>Safe drop-off to repair shops, residences, or dealerships</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#2B303A]">
              <Button
                variant="emergency"
                size="md"
                href={businessConfig.contact.phone.telHref}
                className="w-full text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>Call {businessConfig.contact.phone.display}</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
