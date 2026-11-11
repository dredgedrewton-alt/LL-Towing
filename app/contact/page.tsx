import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ContactFormTabs } from '@/components/forms/ContactFormTabs';
import { BusinessLocationCard } from '@/components/ui/BusinessLocationCard';
import { businessConfig } from '@/lib/config/business';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/seo/schema';
import {
  Phone,
  Clock,
  ShieldAlert,
  Building2,
  CheckCircle2,
  MessageSquare,
  Wrench,
  Navigation,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact LL Towing & Auto Repair | 24/7 Dispatch (240) 424-8226',
  description:
    'Contact LL Towing & Auto Repair. Immediate 24/7 emergency dispatch line, online service quote requests, commercial parking impound contracts, and repair shop consultations in MD, DC, and VA.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact LL Towing & Auto Repair | 24/7 Dispatch (240) 424-8226',
    description:
      'Contact LL Towing & Auto Repair. 24/7 emergency dispatch line, online service quote requests, and commercial account inquiries.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact LL Towing & Auto Repair | 24/7 Dispatch (240) 424-8226',
    description:
      'Contact LL Towing & Auto Repair. 24/7 emergency dispatch line and service inquiries.',
  },
};

export default function ContactPage() {
  const breadcrumbs = [{ label: 'Contact', href: '/contact' }, { label: 'Direct Communication Desk' }];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact' },
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
              <span>Direct Communication Desk</span>
              <span aria-hidden="true" className="text-[#A3AAB2]">·</span>
              <span className="text-[#494F57]">24/7 Live Dispatch</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17191D] tracking-tight text-balance leading-tight mb-4">
              Get Immediate Assistance or Submit a Service Inquiry.
            </h1>

            <p className="text-base sm:text-lg text-[#494F57] leading-relaxed mb-6">
              For active highway breakdowns, collisions, lockouts, or dead batteries, <strong>phone our 24/7 dispatch desk immediately</strong>. For repair estimates, non-urgent maintenance, or commercial parking enforcement proposals, submit the appropriate form below.
            </p>

            {/* Quick Priority Call Strip */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={businessConfig.contact.phone.telHref}
                data-track-cta="call-dispatch-contact-hero"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C62828] text-white font-extrabold text-base hover:bg-[#B71C1C] transition-colors tabular-nums shadow-sm min-h-[48px]"
              >
                <Phone className="w-5 h-5 animate-pulse" />
                <span>Call 24/7 Dispatch: {businessConfig.contact.phone.display}</span>
              </a>
              <span className="text-xs text-[#737B85] flex items-center gap-1.5 self-center">
                <Clock className="w-3.5 h-3.5 text-[#1B873F]" />
                <span>Average roadside phone answer time under 3 rings</span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Grid: Direct Channels & Segmented Forms */}
      <section className="py-12 sm:py-16 bg-[#F5F6F7] border-b border-[#E2E4E8]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Direct Phone & Operating Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Emergency Call Box */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#C62828] text-white shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                  <Phone className="w-4 h-4 animate-pulse" />
                  <span>Immediate Roadside Emergency</span>
                </div>
                <h3 className="text-2xl font-extrabold mb-1">
                  24/7 Live Dispatch Desk
                </h3>
                <p className="text-xs text-white/90 mb-5 leading-relaxed">
                  Direct connection with a live regional operator stationed in Maryland. No automated phone trees or call centers.
                </p>
                <a
                  href={businessConfig.contact.phone.telHref}
                  data-track-cta="call-dispatch-contact-sidebar"
                  className="inline-flex items-center justify-center w-full py-4 px-5 rounded-xl bg-white text-[#C62828] font-extrabold text-base hover:bg-[#F5F6F7] transition-colors tabular-nums shadow-sm min-h-[48px]"
                >
                  <Phone className="w-5 h-5 mr-2 text-[#C62828]" />
                  <span>Call {businessConfig.contact.phone.display}</span>
                </a>
              </div>

              {/* Operating Hours Breakdown */}
              <div className="p-6 rounded-2xl bg-white border border-[#E2E4E8] space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#17191D]">
                  <Clock className="w-4 h-4 text-[#C62828]" />
                  <span>Business Operating Information</span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="pb-3 border-b border-[#EEF0F3]">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#17191D]">Emergency Towing & Roadside</span>
                      <span className="text-[11px] font-bold text-[#1B873F] bg-[#E8F5E9] px-2 py-0.5 rounded">
                        24/7/365 Open
                      </span>
                    </div>
                    <p className="text-xs text-[#737B85] mt-1">
                      Continuous on-call dispatch for highway breakdowns, collisions, lockouts, and tire service across MD, DC, and VA.
                    </p>
                  </div>

                  <div className="pb-3 border-b border-[#EEF0F3]">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#17191D]">Automotive Repair & Workshop Bays</span>
                      <span className="text-[11px] font-semibold text-[#494F57] bg-[#F5F6F7] px-2 py-0.5 rounded">
                        Daytime Schedule
                      </span>
                    </div>
                    <p className="text-xs text-[#737B85] mt-1">
                      Mechanical bay inspections, diagnostics, brakes, suspension, and maintenance. Call ahead for bay availability.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#17191D]">Commercial Property Management</span>
                      <span className="text-[11px] font-semibold text-[#494F57] bg-[#F5F6F7] px-2 py-0.5 rounded">
                        Direct Account Rep
                      </span>
                    </div>
                    <p className="text-xs text-[#737B85] mt-1">
                      HOA, apartment, and shopping center impound agreements, compliant signage, and designated patrol.
                    </p>
                  </div>
                </div>
              </div>

              {/* Commercial Inquiries Box */}
              <div className="p-6 rounded-2xl bg-white border border-[#E2E4E8]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#17191D] mb-2">
                  <Building2 className="w-4 h-4 text-[#C62828]" />
                  <span>Property Managers & Lenders</span>
                </div>
                <h4 className="text-base font-bold text-[#17191D] mb-1">
                  Commercial Towing & Impound Accounts
                </h4>
                <p className="text-xs text-[#494F57] leading-relaxed mb-4">
                  Require zero-cost private property impounds, parking space enforcement, or collateral vehicle repossession? Talk directly to our account supervisor.
                </p>
                <a
                  href={businessConfig.contact.phone.telHref}
                  data-track-cta="call-dispatch-contact-commercial"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C62828] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Commercial Dispatch: (240) 424-8226</span>
                </a>
              </div>

              {/* Physical Location Card with Official Google Maps Slot & Strict Unverified Address Handling */}
              <BusinessLocationCard />
            </div>

            {/* Right Column: Segmented Online Forms (7 cols) */}
            <div className="lg:col-span-7">
              <ContactFormTabs />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
