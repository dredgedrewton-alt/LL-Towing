import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { ResponsiveImageContainer } from '@/components/ui/ResponsiveImageContainer';
import { aboutContent } from '@/lib/content/aboutData';
import { businessConfig } from '@/lib/config/business';
import {
  ShieldCheck,
  Star,
  Clock,
  MapPin,
  Phone,
  CheckCircle2,
  Wrench,
  Truck,
} from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: aboutContent.metaTitle,
  description: aboutContent.metaDescription,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: aboutContent.metaTitle,
    description: aboutContent.metaDescription,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: aboutContent.metaTitle,
    description: aboutContent.metaDescription,
  },
};

export default function AboutPage() {
  const breadcrumbs = [{ label: 'Company' }, { label: 'About Us' }];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
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
              <span>About LL Towing & Auto Repair</span>
              <span aria-hidden="true" className="text-[#A3AAB2]">·</span>
              <span className="text-[#494F57]">Maryland · DC · Virginia</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17191D] tracking-tight text-balance leading-tight mb-5">
              {aboutContent.headline}
            </h1>

            <p className="text-base sm:text-lg text-[#494F57] leading-relaxed mb-6">
              {aboutContent.subheadline}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="emergency"
                size="md"
                href={businessConfig.contact.phone.telHref}
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>Call Dispatch: {businessConfig.contact.phone.display}</span>
              </Button>

              <Link
                href="/reviews"
                className="text-xs sm:text-sm font-semibold text-[#17191D] hover:text-[#C62828] transition-colors"
              >
                Read 161 Verified Reviews →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Story & Philosophy */}
      <section className="py-12 sm:py-16 bg-[#F5F6F7] border-b border-[#E2E4E8]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] tracking-tight mb-2">
                {aboutContent.story.title}
              </h2>
              {aboutContent.story.paragraphs.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base text-[#494F57] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#E2E4E8] shadow-md bg-white p-3">
                <ResponsiveImageContainer
                  slotId="heroTowingFleet"
                  label="Towing & Roadside Dispatch Rig"
                  aspectRatio="4:3"
                />
                <div className="p-3 text-xs text-[#737B85] flex items-center justify-between">
                  <span>Field Operations & Workshop</span>
                  <span className="font-semibold text-[#17191D]">Beltsville & Laurel</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values Grounded in Actual Evidence */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E4E8]">
        <Container>
          <div className="max-w-3xl mb-10">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2">
              Our Principles
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] tracking-tight">
              Customer-Led Automotive Values
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutContent.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#F5F6F7] border border-[#E2E4E8] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0" />
                    <h4 className="text-base font-bold text-[#17191D]">{val.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#494F57] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Operational Facts & Verification Transparency */}
      <section className="py-12 bg-[#17191D] text-white border-b border-[#2B303A]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-[#242830] border border-[#2B303A]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#EF5350] mb-2 flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>Roadside Dispatch</span>
              </div>
              <div className="text-base font-bold text-white">24/7 Continuous</div>
              <p className="text-xs text-[#A3AAB2] mt-1">
                Emergency towing and roadside calls operate 24 hours daily.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#242830] border border-[#2B303A]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#EF5350] mb-2 flex items-center gap-1.5">
                <Wrench className="w-4 h-4" />
                <span>Auto Repair Bays</span>
              </div>
              <div className="text-base font-bold text-white">Daytime Workshop</div>
              <p className="text-xs text-[#A3AAB2] mt-1">
                Mechanical bay servicing operates on scheduled shop hours.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#242830] border border-[#2B303A]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#EF5350] mb-2 flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Operating Hubs</span>
              </div>
              <div className="text-base font-bold text-white">Beltsville & Laurel</div>
              <p className="text-xs text-[#A3AAB2] mt-1">
                Covering Maryland, Washington DC, and Northern Virginia.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#242830] border border-[#2B303A]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#EF5350] mb-2 flex items-center gap-1.5">
                <Star className="w-4 h-4" />
                <span>Customer Trust</span>
              </div>
              <div className="text-base font-bold text-white">4.9 / 5.0 Rating</div>
              <p className="text-xs text-[#A3AAB2] mt-1">
                Documented across 161 verified Google reviews.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Authentic Field Photography Showcase */}
      <section className="py-12 sm:py-16 bg-[#F5F6F7] border-b border-[#E2E4E8]">
        <Container>
          <div className="max-w-3xl mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2">
              Authentic Operational Evidence
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] tracking-tight mb-3">
              Fleet & Workshop Operations in the Field.
            </h3>
            <p className="text-sm text-[#494F57] leading-relaxed">
              Every photograph across our website represents our authentic equipment, recovery trucks, and Beltsville/Laurel workshop service bays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-white border border-[#E2E4E8] shadow-xs">
              <ResponsiveImageContainer
                slotId="flatbedTowing"
                aspectRatio="4:3"
                label="Flatbed Carrier with Chevrolet Corvette"
                className="mb-3"
              />
              <div className="text-xs font-bold text-[#17191D] mb-1">Hydraulic Flatbed Fleet</div>
              <p className="text-[11px] text-[#737B85] leading-relaxed">
                Slide-back low-angle deck transporting performance sports cars with zero ground dragging.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E4E8] shadow-xs">
              <ResponsiveImageContainer
                slotId="roadsideTireChange"
                aspectRatio="4:3"
                label="Highway Shoulder Tire Replacement"
                className="mb-3"
              />
              <div className="text-xs font-bold text-[#17191D] mb-1">Roadside Shoulder Assistance</div>
              <p className="text-[11px] text-[#737B85] leading-relaxed">
                Technicians equipped with commercial hydraulic jacks and cordless impact tools on highway calls.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E4E8] shadow-xs">
              <ResponsiveImageContainer
                slotId="autoRepairFacility"
                aspectRatio="4:3"
                label="Automotive Service Bay with Classic Car"
                className="mb-3"
              />
              <div className="text-xs font-bold text-[#17191D] mb-1">Mechanical Workshop Bays</div>
              <p className="text-[11px] text-[#737B85] leading-relaxed">
                Full-service automotive repair facility equipped with hydraulic lifts, diagnostic scanners, and tools.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final Action Strip */}
      <section className="py-12 bg-white">
        <Container>
          <div className="p-8 rounded-2xl bg-[#F5F6F7] border border-[#E2E4E8] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#17191D] mb-1">
                Need Fast Roadside Assistance or Auto Repair?
              </h3>
              <p className="text-xs sm:text-sm text-[#494F57]">
                Speak directly with dispatch or request a service estimate.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Button
                variant="emergency"
                size="md"
                href={businessConfig.contact.phone.telHref}
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>Call {businessConfig.contact.phone.display}</span>
              </Button>
              <Link
                href="/contact"
                className="px-4 py-2.5 rounded-lg border border-[#E2E4E8] bg-white text-xs font-bold text-[#17191D] hover:bg-[#F5F6F7] transition-colors"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
