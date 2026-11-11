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
  Zap,
  Key,
  Disc,
  ArrowRight,
  ShieldAlert,
  Navigation,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Towing & Roadside Assistance Laurel MD | 24/7 Tow Truck | LL Towing',
  description:
    '24/7 emergency towing and roadside assistance in Laurel, MD. Fast dispatch on I-95 Exit 33, Route 198, and US-1 corridor. Call (240) 424-8226.',
  alternates: {
    canonical: '/service-areas/laurel-md',
  },
  openGraph: {
    title: 'Towing & Roadside Assistance Laurel MD | 24/7 Tow Truck | LL Towing',
    description:
      'Fast 24/7 towing and roadside service in Laurel, MD. Direct response for Route 198, I-95, and US-1 Baltimore Ave.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Towing & Roadside Assistance Laurel MD | (240) 424-8226',
    description:
      '24/7 emergency tow truck and roadside assistance serving Laurel, MD motorists.',
  },
};

export default function LaurelServiceAreaPage() {
  const breadcrumbs = [
    { label: 'Coverage', href: '/service-areas' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Laurel, MD' },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: '/service-areas' },
    { name: 'Laurel, MD Towing & Roadside Assistance', url: '/service-areas/laurel-md' },
  ]);

  const localHubSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Laurel MD Towing & Roadside Assistance Services',
    serviceType: 'Emergency Towing and Roadside Recovery',
    provider: {
      '@type': 'AutoRepair',
      name: businessConfig.name,
      telephone: businessConfig.contact.phone.raw,
      url: process.env.APP_URL || 'https://lltowing.com',
    },
    areaServed: {
      '@type': 'City',
      name: 'Laurel',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Maryland',
      },
    },
    description:
      '24-hour emergency flatbed towing, lockout assistance, battery jump-starts, and roadside flat tire changes serving Laurel, MD and connecting Howard and Prince George\'s County corridors.',
  };

  const laurelServices = [
    {
      title: 'Flatbed & Car Towing',
      description:
        'Damage-free flatbed transport for passenger cars, AWD vehicles, and commercial vans stranded along I-95 Exit 33 or Route 198.',
      icon: Truck,
      href: '/towing/flatbed-towing',
    },
    {
      title: 'Emergency Battery Jump-Start',
      description:
        'Rapid mobile response with industrial jump boxes for dead batteries in Laurel shopping centers and residential communities.',
      icon: Zap,
      href: '/roadside-assistance/battery-jump-start',
    },
    {
      title: 'Car Lockout Assistance',
      description:
        'Non-destructive specialized door entry when keys are misplaced or locked inside vehicles around Laurel town centers.',
      icon: Key,
      href: '/roadside-assistance/car-lockout',
    },
    {
      title: 'Highway Flat Tire Changes',
      description:
        'Professional on-shoulder tire dismounting and spare wheel installation with high-visibility safety strobe warning trucks.',
      icon: Disc,
      href: '/roadside-assistance/tire-change',
    },
    {
      title: 'Commercial Parking Patrol',
      description:
        'Private property impound agreements and parking rule enforcement for Laurel apartment complexes and retail plazas.',
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
                <span>Northern Corridor Operational Hub</span>
                <span aria-hidden="true" className="text-[#A3AAB2]">·</span>
                <span className="text-[#494F57]">Laurel, MD Station</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17191D] tracking-tight text-balance leading-tight mb-4">
                Towing & Roadside Assistance in Laurel, MD
              </h1>

              <p className="text-base sm:text-lg text-[#494F57] leading-relaxed mb-6">
                Stranded on Route 198, Interstate 95, or in a shopping lot in Laurel, Maryland? LL Towing & Auto Repair deploys dedicated tow trucks and roadside support units across the Laurel tri-county boundary. We arrive promptly with the specialized rigging necessary to protect your vehicle.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  variant="emergency"
                  size="lg"
                  href={businessConfig.contact.phone.telHref}
                  data-track-cta="call-dispatch-laurel-hero"
                  className="text-base py-3.5"
                >
                  <Phone className="w-5 h-5 mr-2 animate-pulse" />
                  <span>Call Laurel Dispatch: {businessConfig.contact.phone.display}</span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  href="/contact"
                  data-track-cta="quote-laurel-hero"
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
                  slotId="wheelLiftTowing"
                  label="Laurel Corridor Towing Unit"
                  aspectRatio="4:3"
                  priority={true}
                  className="w-full min-h-[280px] sm:min-h-[320px] border-none"
                />
                <div className="p-4 bg-[#17191D] text-white border-t border-[#2B303A] flex items-center justify-between text-xs">
                  <span className="font-semibold">Laurel Route 1 & I-95 Unit</span>
                  <span className="text-[#EF5350] font-mono">24/7 On-Call</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Corridor Details in Laurel */}
      <section className="py-12 sm:py-16 bg-[#F5F6F7] border-b border-[#E2E4E8]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2">
                  Laurel Corridor Routing
                </h2>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] tracking-tight mb-4">
                  Fast Dispatch Across Laurel Arterials
                </h3>
                <p className="text-sm text-[#494F57] leading-relaxed mb-4">
                  Situated along the border of Prince George&apos;s and Howard counties, Laurel experiences dense commuter traffic connecting Baltimore and Washington. Our staging positions ensure short ETA windows.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-[#E2E4E8]">
                  <div className="font-bold text-sm text-[#17191D] flex items-center gap-2 mb-1">
                    <Navigation className="w-4 h-4 text-[#C62828]" />
                    <span>Route 198 (Fort Meade Road / Laurel Bowie Rd)</span>
                  </div>
                  <p className="text-xs text-[#494F57] leading-relaxed">
                    Active patrol and quick-dispatch service for retail shopping strips, business complexes, and the Fort Meade commuter corridor.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E4E8]">
                  <div className="font-bold text-sm text-[#17191D] flex items-center gap-2 mb-1">
                    <Navigation className="w-4 h-4 text-[#C62828]" />
                    <span>Interstate 95 (Exit 33 & Connecting Ramps)</span>
                  </div>
                  <p className="text-xs text-[#494F57] leading-relaxed">
                    Fast shoulder recovery for flat tires, engine failures, and accidents between Laurel, Savage, and Beltsville.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E4E8]">
                  <div className="font-bold text-sm text-[#17191D] flex items-center gap-2 mb-1">
                    <Navigation className="w-4 h-4 text-[#C62828]" />
                    <span>US-1 (Baltimore Avenue) & Historic Laurel</span>
                  </div>
                  <p className="text-xs text-[#494F57] leading-relaxed">
                    Local street recovery, lockouts, jump-starts, and private parking enforcement throughout downtown Laurel.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-[#17191D] text-white border border-[#2B303A]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EF5350] mb-2">
                  <Clock className="w-4 h-4" />
                  <span>24/7 Rapid Response</span>
                </div>
                <h4 className="text-lg font-bold mb-3">
                  Why Laurel Motorists Trust Us:
                </h4>
                <ul className="space-y-2.5 text-xs text-[#A3AAB2]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#EF5350] font-bold">✔</span>
                    <span>Live Maryland telephone operators—no overseas call routing or automated scripts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EF5350] font-bold">✔</span>
                    <span>Modern rollback flatbeds with low-angle loading ramps for luxury and low-profile sports cars.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EF5350] font-bold">✔</span>
                    <span>Clear price confirmation before dispatch—no surprising extras on your credit card.</span>
                  </li>
                </ul>

                <div className="mt-6 pt-4 border-t border-[#2B303A]">
                  <a
                    href={businessConfig.contact.phone.telHref}
                    data-track-cta="call-dispatch-laurel-sidebar"
                    className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-[#C62828] text-white font-extrabold text-xs hover:bg-[#B71C1C] transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-1.5" />
                    <span>Call Laurel Dispatch: (240) 424-8226</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Laurel Dedicated Services Grid */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E4E8]">
        <Container>
          <div className="max-w-3xl mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2">
              Automotive & Towing Solutions
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] tracking-tight">
              Services Available in Laurel, MD
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {laurelServices.map((svc, idx) => {
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
              Need Roadside Rescue in Laurel, MD?
            </h3>
            <p className="text-xs sm:text-sm text-[#A3AAB2] mb-6 leading-relaxed">
              Don&apos;t remain stranded in hazardous traffic. Call our direct Laurel dispatch desk now for professional towing or quick roadside recovery.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="emergency"
                size="lg"
                href={businessConfig.contact.phone.telHref}
                data-track-cta="call-dispatch-laurel-bottom"
                className="w-full sm:w-auto text-base"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Call (240) 424-8226</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/contact"
                data-track-cta="quote-laurel-bottom"
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
