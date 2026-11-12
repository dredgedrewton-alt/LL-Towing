'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ServiceCoverageSectionProps {
  onOpenQuote?: () => void;
}

export function ServiceCoverageSection({ onOpenQuote }: ServiceCoverageSectionProps) {
  const regions = [
    {
      state: 'Maryland',
      code: 'MD',
      highlightHubs: 'Primary Stations: Beltsville & Laurel',
      coverageList: [
        'Prince George’s & Montgomery Counties',
        'Beltsville, Laurel, College Park, Silver Spring',
      ],
      highways: 'I-95, I-495 (Beltway), US-1, MD-200 (ICC)',
    },
    {
      state: 'Washington, DC',
      code: 'DC',
      highlightHubs: 'Metropolitan District',
      coverageList: [
        'Northwest, Northeast, Southeast & Southwest',
        'Downtown corridors, Capitol Hill, connecting bridges',
      ],
      highways: 'I-295, I-395, New York Ave, Kenilworth Ave',
    },
    {
      state: 'Northern Virginia',
      code: 'VA',
      highlightHubs: 'Commuter Arteries & Suburbs',
      coverageList: [
        'Arlington, Alexandria, Tysons & McLean',
        'Falls Church, Fairfax, Springfield & Annandale',
      ],
      highways: 'I-495 (VA Beltway), I-66, I-395, Route 50',
    },
  ];

  return (
    <section id="service-coverage" className="py-12 sm:py-16 bg-white border-b border-[#E2E4E8]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <SectionHeading
            kicker="05. Service Coverage"
            title="Strategic Roadside & Towing Coverage Across The DMV."
            description="Our recovery units dispatch from central hubs in Beltsville and Laurel, providing fast response across major highway corridors."
            className="mb-0"
          />

          <div className="shrink-0 self-start md:self-end">
            <Button
              variant="outline"
              size="md"
              href="/service-areas"
            >
              <span>View Service Areas Directory</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>

        {/* 3 State / Regional Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {regions.map((reg) => (
            <div
              key={reg.code}
              className="p-5 sm:p-6 rounded-xl bg-[#F5F6F7] border border-[#E2E4E8] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C62828]" />
                    <h3 className="text-lg font-bold text-[#17191D]">{reg.state}</h3>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#737B85] bg-white px-2 py-0.5 rounded border border-[#E2E4E8]">
                    {reg.code}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#C62828] mb-3">
                  {reg.highlightHubs}
                </div>

                <ul className="space-y-1.5 text-xs text-[#494F57] mb-4">
                  {reg.coverageList.map((c, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-none bg-[#C62828] shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[#E2E4E8] text-xs text-[#737B85]">
                <strong className="text-[#17191D]">Key Corridors:</strong> {reg.highways}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
