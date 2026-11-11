import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { ResponsiveImageContainer } from '@/components/ui/ResponsiveImageContainer';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/seo/schema';
import { businessConfig } from '@/lib/config/business';
import {
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
  Key,
  Disc,
  ArrowRight,
  ShieldAlert,
  Navigation,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Towing Service & Auto Repair Beltsville MD | 24/7 Dispatch | LL Towing',
  description:
    '24/7 emergency towing, roadside assistance, and auto repair in Beltsville, MD. Immediate dispatch along I-95, I-495 Beltway Exit 25, and US-1 Baltimore Ave.',
  alternates: {
    canonical: '/service-areas/beltsville-md',
  },
  openGraph: {
    title: 'Towing Service & Auto Repair Beltsville MD | 24/7 Dispatch | LL Towing',
    description:
      'Fast 24/7 towing, roadside assistance, and automotive repair based in Beltsville, MD. Direct dispatch on I-95, I-495, and Route 1.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Towing Service & Auto Repair Beltsville MD | (240) 424-8226',
    description:
      '24/7 emergency towing and auto repair in Beltsville, MD. Immediate dispatch along I-95 and I-495.',
  },
};

export default function BeltsvilleServiceAreaPage() {
  const breadcrumbs = [
    { label: 'Coverage', href: '/service-areas' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Beltsville, MD' },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: '/service-areas' },
    { name: 'Beltsville, MD Towing & Auto Repair', url: '/service-areas/beltsville-md' },
  ]);

  const localHubSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Beltsville MD Towing & Auto Repair Services',
    serviceType: 'Emergency Towing and Automotive Roadside Assistance',
    provider: {
      '@type': 'AutoRepair',
      name: businessConfig.name,
      telephone: businessConfig.contact.phone.raw,
      url: process.env.APP_URL || 'https://lltowing.com',
    },
    areaServed: {
      '@type': 'City',
      name: 'Beltsville',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Maryland',
      },
    },
    description:
      '24-hour emergency flatbed towing, vehicle lockouts, battery jump-starts, flat tire repair, and mechanical workshop services serving Beltsville, MD motorists.',
  };

  const beltsvilleServices = [
    {
      title: 'Emergency Towing & Flatbed',
      description:
        'Rapid response for disabled vehicles, accidents, and overheating engines along I-95, I-495 Beltway Exit 25, and Route 1.',
      icon: Truck,
      href: '/towing/flatbed-towing',
    },
    {
      title: 'Battery Jump-Start & Testing',
      description:
        'Mobile 12V high-output jump packs and on-site alternator testing across Beltsville commercial parks and residences.',
      icon: Zap,
      href: '/roadside-assistance/battery-jump-start',
    },
    {
      title: 'Vehicle Lockout Assistance',
      description:
        'Gentle non-marring lockout opening for keys locked in ignitions or trunks at shopping centers and parking facilities.',
      icon: Key,
      href: '/roadside-assistance/car-lockout',
    },
    {
      title: 'Roadside Flat Tire Change',
      description:
        'Safe roadside spare tire mounting on high-speed shoulders of the Capital Beltway and local Beltsville arterials.',
      icon: Disc,
      href: '/roadside-assistance/tire-change',
    },
    {
      title: 'Auto Repair & Diagnostics',
      description:
        'Mechanical bay inspections, brake pads, suspension diagnostics, and cooling system servicing for local Beltsville owners.',
      icon: Wrench,
      href: '/auto-repair',
    },
    {
      title: 'Commercial Parking Enforcement',
      description:
        'Compliant private property towing agreements for Beltsville industrial complexes, business parks, and residential communities.',
      icon: ShieldCheck,
      href: '/commercial-services/parking-management',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <JsonLd data={[breadcrumbSchema, localHubSchema]} />

      {/* Breadcrumbs */}
      <div className="bg-[#F5F6F7] border-b border-[#E2E4E8] py-3">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E4E8]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C62828] mb-3">
                <ShieldAlert className="w-4 h-4" />
                <span>Primary Operating Hub</span>
                <span aria-hidden="true" className="text-[#A3AAB2]">·</span>
                <span className="text-[#494F57]">Prince George&apos;s County</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17191D] tracking-tight text-balance leading-tight mb-4">
                Towing Service & Auto Repair in Beltsville, MD
              </h1>

              <p className="text-base sm:text-lg text-[#494F57] leading-relaxed mb-6">
                LL Towing & Auto Repair operates its primary field dispatch and mechanical recovery operations directly out of Beltsville, Maryland. From the Capital Beltway (I-495) interchange to the busy US-1 commercial corridor and local research parkways, our heavy-duty flatbeds and service trucks provide dependable 24/7 assistance.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  variant="emergency"
                  size="lg"
                  href={businessConfig.contact.phone.telHref}
                  data-track-cta="call-dispatch-beltsville-hero"
                  className="text-base py-3.5"
                >
                  <Phone className="w-5 h-5 mr-2 animate-pulse" />
                  <span>Call Beltsville Dispatch: {businessConfig.contact.phone.display}</span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  href="/contact"
                  data-track-cta="quote-beltsville-hero"
                  className="text-base"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-[#737B85]" />
                </Button>
              </div>
            </div>

            {/* Authentic Photographic Carrier */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#E2E4E8] shadow-md bg-[#17191D]">
                <ResponsiveImageContainer
                  slotId="heroTowingFleet"
                  label="Beltsville Primary Recovery & Towing Fleet"
                  aspectRatio="4:3"
                  priority={true}
                  className="w-full min-h-[280px] sm:min-h-[320px] border-none"
                />
                <div className="p-4 bg-[#17191D] text-white border-t border-[#2B303A] flex items-center justify-between text-xs">
                  <span className="font-semibold">Beltsville Hub Recovery Unit</span>
                  <span className="text-[#EF5350] font-mono">24/7 On-Call</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Highway & Local Road Corridor Coverage in Beltsville */}
      <section className="py-12 sm:py-16 bg-[#F5F6F7] border-b border-[#E2E4E8]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2">
                  Local Geographical Coverage
                </h2>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] tracking-tight mb-4">
                  Immediate Dispatch Across Key Beltsville Arterials
                </h3>
                <p className="text-sm text-[#494F57] leading-relaxed mb-4">
                  Because our primary trucks stage directly within the Beltsville territory, we eliminate long highway transfer delays. When you are stranded during peak rush hour or late at night, our operators know the fastest detour routes around bottlenecked interchanges.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-[#E2E4E8]">
                  <div className="font-bold text-sm text-[#17191D] flex items-center gap-2 mb-1">
                    <Navigation className="w-4 h-4 text-[#C62828]" />
                    <span>I-495 (Capital Beltway) · Exits 23 to 26</span>
                  </div>
                  <p className="text-xs text-[#494F57] leading-relaxed">
                    Continuous monitoring of outer and inner loop traffic near Exit 25 (US-1 / Baltimore Avenue) and the Kenilworth Avenue junction. Rapid clearance for shoulder breakdowns and collisions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E4E8]">
                  <div className="font-bold text-sm text-[#17191D] flex items-center gap-2 mb-1">
                    <Navigation className="w-4 h-4 text-[#C62828]" />
                    <span>Interstate 95 Corridor (MD Exit 28–29)</span>
                  </div>
                  <p className="text-xs text-[#494F57] leading-relaxed">
                    Express towing coverage for motorists heading north toward Laurel and Baltimore or south approaching the Washington DC boundary.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E4E8]">
                  <div className="font-bold text-sm text-[#17191D] flex items-center gap-2 mb-1">
                    <Navigation className="w-4 h-4 text-[#C62828]" />
                    <span>US-1 (Baltimore Avenue) & Commercial Parks</span>
                  </div>
                  <p className="text-xs text-[#494F57] leading-relaxed">
                    Rapid lockouts, jump-starts, and local tows along Baltimore Avenue, Sunnyside Avenue, Powder Mill Road, and the Beltsville Agricultural Research Center perimeter.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-[#17191D] text-white border border-[#2B303A]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EF5350] mb-2">
                  <Clock className="w-4 h-4" />
                  <span>24/7 Local Beltsville Response</span>
                </div>
                <h4 className="text-lg font-bold mb-3">
                  Why Beltsville Drivers Choose LL Towing:
                </h4>
                <ul className="space-y-2.5 text-xs text-[#A3AAB2]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#EF5350] font-bold">✔</span>
                    <span>Direct phone connection with a live regional dispatcher stationed in Maryland.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EF5350] font-bold">✔</span>
                    <span>Soft-strap hydraulic flatbed transport that prevents bumper or undercarriage scraping.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EF5350] font-bold">✔</span>
                    <span>Transparent, upfront pricing quoted before our truck rolls—no hidden hookup fees.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EF5350] font-bold">✔</span>
                    <span>Mechanical workshop diagnostics available for motorists needing repair rather than just a tow.</span>
                  </li>
                </ul>

                <div className="mt-6 pt-4 border-t border-[#2B303A]">
                  <a
                    href={businessConfig.contact.phone.telHref}
                    data-track-cta="call-dispatch-beltsville-sidebar"
                    className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-[#C62828] text-white font-extrabold text-xs hover:bg-[#B71C1C] transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-1.5" />
                    <span>Call Beltsville Dispatch: (240) 424-8226</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Beltsville Dedicated Services Grid */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E4E8]">
        <Container>
          <div className="max-w-3xl mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2">
              Comprehensive Automotive Services
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] tracking-tight">
              Services Available in Beltsville, MD
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beltsvilleServices.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F5F6F7] border border-[#E2E4E8] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E4E8] flex items-center justify-center text-[#C62828] mb-4 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#17191D] mb-2">{svc.title}</h4>
                    <p className="text-xs sm:text-sm text-[#494F57] leading-relaxed mb-4">
                      {svc.description}
                    </p>
                  </div>

                  <Link
                    href={svc.href}
                    className="inline-flex items-center text-xs font-bold text-[#C62828] hover:underline gap-1 pt-2 border-t border-[#E2E4E8]"
                  >
                    <span>Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Bottom Emergency Conversion Action */}
      <section className="py-12 bg-[#17191D] text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Stranded in Beltsville, MD?
            </h3>
            <p className="text-xs sm:text-sm text-[#A3AAB2] mb-6 leading-relaxed">
              Don&apos;t wait on an unmonitored shoulder. Call our local Beltsville dispatch office now for immediate roadside rescue or repair bay scheduling.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="emergency"
                size="lg"
                href={businessConfig.contact.phone.telHref}
                data-track-cta="call-dispatch-beltsville-bottom"
                className="w-full sm:w-auto text-base"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Call (240) 424-8226</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/contact"
                data-track-cta="quote-beltsville-bottom"
                className="w-full sm:w-auto text-base bg-[#242830] text-white border-[#2B303A] hover:bg-[#2B303A]"
              >
                <span>Request Online Estimate</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
