import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { serviceAreasContent } from '@/lib/content/serviceAreasData';
import { businessConfig } from '@/lib/config/business';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/seo/schema';
import {
  MapPin,
  Navigation,
  Compass,
  Phone,
  ArrowRight,
  ShieldAlert,
  Car,
  AlertCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: serviceAreasContent.metaTitle,
  description: serviceAreasContent.metaDescription,
  alternates: {
    canonical: '/service-areas',
  },
  openGraph: {
    title: serviceAreasContent.metaTitle,
    description: serviceAreasContent.metaDescription,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: serviceAreasContent.metaTitle,
    description: serviceAreasContent.metaDescription,
  },
};

export default function ServiceAreasPage() {
  const breadcrumbs = [{ label: 'Coverage', href: '/service-areas' }, { label: 'Service Areas' }];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: '/service-areas' },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Breadcrumbs */}
      <div className="bg-[#F5F6F7] border-b border-[#E2E4E8] py-3">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </div>

      {/* Hero Header */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E4E8]">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C62828] mb-3">
              <ShieldAlert className="w-4 h-4" />
              <span>Regional Coverage Directory</span>
              <span aria-hidden="true" className="text-[#A3AAB2]">·</span>
              <span className="text-[#494F57]">Maryland · DC · Virginia</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17191D] tracking-tight text-balance leading-tight mb-5">
              {serviceAreasContent.headline}
            </h1>

            <p className="text-base sm:text-lg text-[#494F57] leading-relaxed mb-8">
              {serviceAreasContent.subheadline}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="emergency"
                size="md"
                href={businessConfig.contact.phone.telHref}
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>Call Dispatch: {businessConfig.contact.phone.display}</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Primary & Secondary Hub Spotlights (Beltsville & Laurel) */}
      <section className="py-12 sm:py-16 bg-[#F5F6F7] border-b border-[#E2E4E8]">
        <Container>
          <div className="max-w-3xl mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2">
              Operational Hubs
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] tracking-tight">
              Primary Dispatch Stations in Maryland
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border-2 border-[#C62828] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-xs uppercase tracking-wider text-[#C62828]">
                    Primary Station
                  </span>
                  <span className="font-mono text-xs text-[#737B85] bg-[#F5F6F7] px-2 py-1 rounded">
                    HQ Dispatch
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-[#17191D] mb-2">
                  {serviceAreasContent.primaryHubHighlight.city}
                </h4>
                <p className="text-xs font-semibold text-[#737B85] mb-4">
                  {serviceAreasContent.primaryHubHighlight.role}
                </p>
                <p className="text-sm text-[#494F57] leading-relaxed mb-4">
                  {serviceAreasContent.primaryHubHighlight.details}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-[#EEF0F3] flex items-center justify-between">
                <span className="text-xs text-[#737B85]">I-95, I-495 Beltway, US-1</span>
                <Link
                  href="/service-areas/beltsville-md"
                  className="text-xs font-bold text-[#C62828] hover:underline flex items-center gap-1"
                >
                  <span>Beltsville Dispatch Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E4E8] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-xs uppercase tracking-wider text-[#737B85]">
                    Northern Corridor Base
                  </span>
                  <span className="font-mono text-xs text-[#737B85] bg-[#F5F6F7] px-2 py-1 rounded">
                    Secondary Hub
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-[#17191D] mb-2">
                  {serviceAreasContent.secondaryHubHighlight.city}
                </h4>
                <p className="text-xs font-semibold text-[#737B85] mb-4">
                  {serviceAreasContent.secondaryHubHighlight.role}
                </p>
                <p className="text-sm text-[#494F57] leading-relaxed mb-4">
                  {serviceAreasContent.secondaryHubHighlight.details}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-[#EEF0F3] flex items-center justify-between">
                <span className="text-xs text-[#737B85]">I-95, Route 198, Fort Meade</span>
                <Link
                  href="/service-areas/laurel-md"
                  className="text-xs font-bold text-[#C62828] hover:underline flex items-center gap-1"
                >
                  <span>Laurel Dispatch Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Tri-State Regional Detailed Directory */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E4E8]">
        <Container>
          <div className="max-w-3xl mb-10">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2">
              Tri-State Coverage
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] tracking-tight">
              Communities & Corridors Served
            </h3>
          </div>

          <div className="space-y-8">
            {serviceAreasContent.regions.map((reg) => (
              <div
                key={reg.stateCode}
                className="p-6 sm:p-8 rounded-2xl bg-[#F5F6F7] border border-[#E2E4E8]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E2E4E8] mb-6 gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-[#17191D] flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#C62828]" />
                      <span>{reg.stateName}</span>
                    </h4>
                    <p className="text-xs text-[#737B85] mt-1">{reg.overview}</p>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#737B85] bg-white px-2.5 py-1 rounded border border-[#E2E4E8] self-start sm:self-auto">
                    {reg.stateCode}
                  </span>
                </div>

                {/* Hubs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {reg.hubs.map((hub, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-[#E2E4E8] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-bold text-sm text-[#17191D]">{hub.name}</h5>
                          <span className="text-[10px] text-[#737B85]">{hub.countyOrDistrict}</span>
                        </div>
                        <p className="text-xs text-[#494F57] leading-relaxed mb-3">
                          {hub.description}
                        </p>
                      </div>
                      <div className="text-[11px] text-[#737B85] pt-2 border-t border-[#EEF0F3]">
                        <strong>Corridors:</strong> {hub.keyHighways.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Highways Covered */}
                <div className="p-3.5 bg-white rounded-lg border border-[#E2E4E8] text-xs text-[#494F57] flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#C62828] shrink-0" />
                  <span>
                    <strong>Key Arteries Monitored:</strong> {reg.keyCorridors.join(' · ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Location Verification & Routing Disclaimer */}
      <section className="py-12 bg-white">
        <Container>
          <div className="p-6 rounded-xl bg-[#17191D] text-white border border-[#2B303A] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EF5350]">
                <Compass className="w-4 h-4" />
                <span>Directions & Physical Workshop Verification</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A3AAB2] leading-relaxed">
                {serviceAreasContent.locationNotice.text}
              </p>
            </div>

            <Button
              variant="emergency"
              size="md"
              href={businessConfig.contact.phone.telHref}
              className="shrink-0 w-full sm:w-auto"
            >
              <span>Call For Dispatch Routing</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
