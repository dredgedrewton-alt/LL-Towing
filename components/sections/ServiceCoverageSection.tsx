'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MapPin, Navigation, Compass, Phone, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { businessConfig } from '@/lib/config/business';
import { Button } from '@/components/ui/Button';

interface ServiceCoverageSectionProps {
  onOpenQuote?: () => void;
}

export function ServiceCoverageSection({ onOpenQuote }: ServiceCoverageSectionProps) {
  const [showFullDirectory, setShowFullDirectory] = useState(false);

  const regions = [
    {
      state: 'Maryland',
      code: 'MD',
      highlightHubs: 'Primary Operational Focus: Beltsville & Laurel',
      coverageList: [
        'Beltsville & Laurel corridors',
        'Prince George’s County',
        'Montgomery County',
        'College Park, Silver Spring, Greenbelt & Hyattsville',
      ],
      highways: 'I-95, I-495 (Capital Beltway), US-1 (Baltimore Ave), MD-200 (ICC)',
    },
    {
      state: 'Washington, DC',
      code: 'DC',
      highlightHubs: 'Metropolitan District Coverage',
      coverageList: [
        'Northwest (NW) & Northeast (NE)',
        'Southeast (SE) & Southwest (SW)',
        'Downtown corridors & Capitol Hill',
        'National Harbor & connecting bridges',
      ],
      highways: 'I-295 (Anacostia Freeway), I-395, New York Ave, Kenilworth Ave',
    },
    {
      state: 'Northern Virginia',
      code: 'VA',
      highlightHubs: 'Suburban Arteries & Commuter Corridors',
      coverageList: [
        'Arlington & Alexandria',
        'Tysons & McLean',
        'Falls Church & Fairfax',
        'Springfield & Annandale',
      ],
      highways: 'I-495 (Virginia Beltway), I-66, I-395, Route 50',
    },
  ];

  return (
    <section id="service-coverage" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2E4E8]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            kicker="06. Service Coverage"
            title="Strategic Roadside & Towing Coverage Across The DMV Region."
            description="Our recovery units operate from central dispatch points in Beltsville and Laurel, providing coverage along major interstate corridors and municipal avenues."
            className="mb-0"
          />

          <div className="flex flex-wrap items-center gap-3 shrink-0 self-start md:self-end">
            <Button
              variant="outline"
              size="md"
              href="/service-areas"
            >
              <span>Dedicated Service Areas Page</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>

            <Button
              variant="emergency"
              size="md"
              href={businessConfig.contact.phone.telHref}
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>{businessConfig.contact.phone.display}</span>
            </Button>
          </div>
        </div>

        {/* 3 State / Regional Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {regions.map((reg) => (
            <div
              key={reg.code}
              className="p-6 sm:p-7 rounded-2xl bg-[#F5F6F7] border border-[#E2E4E8] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#C62828]" />
                    <h3 className="text-xl font-extrabold text-[#17191D]">{reg.state}</h3>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#737B85] bg-white px-2 py-1 rounded border border-[#E2E4E8]">
                    {reg.code}
                  </span>
                </div>

                <div className="text-xs font-bold text-[#C62828] mb-3">
                  {reg.highlightHubs}
                </div>

                <div className="mb-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#737B85] mb-2">
                    Communities Served:
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#494F57]">
                    {reg.coverageList.map((c, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-none bg-[#C62828] shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E4E8] text-xs text-[#737B85]">
                <strong className="text-[#17191D]">Key Corridors:</strong> {reg.highways}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Expanded Full Directory Drawer */}
        {showFullDirectory && (
          <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-[#F5F6F7] border border-[#E2E4E8] animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between border-b border-[#E2E4E8] pb-4 mb-6">
              <div>
                <h4 className="text-lg font-bold text-[#17191D]">
                  Complete Tri-State Regional Coverage Directory
                </h4>
                <p className="text-xs text-[#737B85] mt-1">
                  Active roadside units dispatched directly from primary Beltsville and Laurel hubs.
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFullDirectory(false)}
              >
                Close View
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#494F57]">
              <div className="p-4 bg-white rounded-xl border border-[#E2E4E8]">
                <div className="font-bold text-sm text-[#17191D] mb-2">Maryland Counties</div>
                <p className="mb-3 text-[#737B85]">
                  Continuous roadside patrol throughout Prince George’s and Montgomery counties.
                </p>
                <div className="space-y-1">
                  <div>· Beltsville (HQ Dispatch Hub)</div>
                  <div>· Laurel & Montpelier</div>
                  <div>· College Park & UMD Campus</div>
                  <div>· Silver Spring & Takoma Park</div>
                  <div>· Greenbelt & Bowie Corridor</div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E2E4E8]">
                <div className="font-bold text-sm text-[#17191D] mb-2">District of Columbia</div>
                <p className="mb-3 text-[#737B85]">
                  Fast response to metropolitan commuter arteries and residential neighborhoods.
                </p>
                <div className="space-y-1">
                  <div>· Downtown & K Street Corridor</div>
                  <div>· Capitol Hill & Navy Yard</div>
                  <div>· Georgetown & Upper NW</div>
                  <div>· Anacostia & I-295 Expressway</div>
                  <div>· Connecting Potomac Bridges</div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E2E4E8]">
                <div className="font-bold text-sm text-[#17191D] mb-2">Northern Virginia</div>
                <p className="mb-3 text-[#737B85]">
                  Connecting highway support across Northern Virginia commercial centers.
                </p>
                <div className="space-y-1">
                  <div>· Arlington & Rosslyn</div>
                  <div>· Alexandria & Old Town</div>
                  <div>· Tysons Corner & McLean</div>
                  <div>· Falls Church & Merrifield</div>
                  <div>· Springfield & I-95 South</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Address and Coverage Disclaimer Banner */}
        <div className="p-6 rounded-xl bg-[#17191D] text-white border border-[#2B303A] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EF5350]">
              <Compass className="w-4 h-4" />
              <span>Location Verification Notice</span>
            </div>
            <p className="text-xs sm:text-sm text-[#A3AAB2] leading-relaxed">
              We serve motorists across MD, DC, and VA with primary operations in Beltsville and Laurel, MD. Physical workshop drop-off addresses are undergoing final verification; please coordinate directly with our dispatch desk before arriving in person.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <Button
              variant="emergency"
              size="md"
              href={businessConfig.contact.phone.telHref}
              className="w-full sm:w-auto"
            >
              <span>Call Dispatch for Directions</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
