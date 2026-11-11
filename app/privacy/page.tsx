import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/seo/schema';
import { businessConfig } from '@/lib/config/business';
import { ShieldCheck, Phone, Lock, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy & Customer Data Notice | LL Towing & Auto Repair',
  description:
    'Privacy Policy for LL Towing & Auto Repair. Learn how we handle customer contact details, vehicle information, and roadside assistance dispatch records.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | LL Towing & Auto Repair',
    description:
      'Customer privacy commitments, zero data selling policy, and dispatch information security for LL Towing & Auto Repair.',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [{ label: 'Legal' }, { label: 'Privacy Policy' }];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy' },
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
              <Lock className="w-4 h-4" />
              <span>Customer Data Protection</span>
              <span aria-hidden="true" className="text-[#A3AAB2]">·</span>
              <span className="text-[#494F57]">Effective 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17191D] tracking-tight text-balance leading-tight mb-4">
              Privacy Policy & Data Security
            </h1>

            <p className="text-base sm:text-lg text-[#494F57] leading-relaxed">
              At {businessConfig.name}, we recognize that motorists contacting us for emergency roadside recovery or workshop repairs are often in stressful, vulnerable situations. We treat your personal information, vehicle locations, and contact records with strict confidentiality.
            </p>
          </div>
        </Container>
      </section>

      {/* Policy Content Sections */}
      <section className="py-12 sm:py-16 bg-[#F5F6F7] border-b border-[#E2E4E8]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8 text-sm text-[#494F57] leading-relaxed">
            {/* Section 1 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E4E8] shadow-xs">
              <h2 className="text-lg font-bold text-[#17191D] mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#C62828]" />
                <span>1. Information We Collect</span>
              </h2>
              <p className="mb-3">
                We collect only the information necessary to provide prompt roadside assistance, calculate transparent price estimates, and coordinate automotive repairs:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>
                  <strong className="text-[#17191D]">Contact Information:</strong> Customer full name, telephone number, and optional email address.
                </li>
                <li>
                  <strong className="text-[#17191D]">Vehicle & Location Details:</strong> Vehicle year, make, model, mechanical condition, stranded pickup location (highway mile markers, cross streets), and desired drop-off destination.
                </li>
                <li>
                  <strong className="text-[#17191D]">Commercial Accounts:</strong> Property address, company name, representative title, and parking management specifications.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E4E8] shadow-xs">
              <h2 className="text-lg font-bold text-[#17191D] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C62828]" />
                <span>2. Zero Sale of Personal Data</span>
              </h2>
              <p className="mb-3">
                <strong>We never sell, rent, monetize, or trade customer personal information, telephone numbers, or location histories to third-party data brokers or marketing agencies.</strong>
              </p>
              <p className="text-xs sm:text-sm">
                Information submitted through our online quote forms or provided over our 24/7 dispatch phone line is shared solely with the assigned field operator or shop technician responsible for your vehicle.
              </p>
            </div>

            {/* Section 3 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E4E8] shadow-xs">
              <h2 className="text-lg font-bold text-[#17191D] mb-3 flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#C62828]" />
                <span>3. Form Security & Transmission</span>
              </h2>
              <p className="mb-3">
                All communications on this website are transmitted via secure HTTPS encryption (TLS). Our lead ingestion pipeline incorporates anti-spam honeypot detection and rate-limiting safeguards to prevent abuse.
              </p>
              <p className="text-xs sm:text-sm">
                We do not collect or store credit card numbers on our web servers. Payments for towing and workshop repairs are handled through verified, PCI-compliant on-scene merchant terminals or in-shop point-of-sale systems.
              </p>
            </div>

            {/* Section 4 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E4E8] shadow-xs">
              <h2 className="text-lg font-bold text-[#17191D] mb-3">
                4. Analytics & Performance Telemetry
              </h2>
              <p className="mb-3 text-xs sm:text-sm">
                Our website utilizes privacy-first Google Analytics 4 telemetry with IP anonymization to evaluate aggregate website performance (such as click-to-call conversion counts and page view volumes). We operate under restrictive default consent mode settings (`ad_storage: denied`, `ad_personalization: denied`).
              </p>
              <p className="text-xs sm:text-sm">
                We never correlate analytics records with customer identities, private message text, or exact GPS locations.
              </p>
            </div>

            {/* Section 5 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E4E8] shadow-xs">
              <h2 className="text-lg font-bold text-[#17191D] mb-3">
                5. Contact Us Regarding Your Data
              </h2>
              <p className="mb-4 text-xs sm:text-sm">
                If you have questions regarding our data practices or wish to request the deletion of your historical dispatch records, please contact our dispatch office:
              </p>
              <div className="p-4 rounded-xl bg-[#F5F6F7] border border-[#E2E4E8] text-xs space-y-1">
                <div><strong>Business:</strong> {businessConfig.name}</div>
                <div><strong>Dispatch Desk:</strong> {businessConfig.contact.phone.display}</div>
                <div><strong>Email:</strong> {businessConfig.contact.email}</div>
                <div><strong>Operational Hubs:</strong> Beltsville, MD & Laurel, MD</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom Emergency Reassurance */}
      <section className="py-12 bg-[#17191D] text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Have An Immediate Vehicle Emergency?
            </h3>
            <p className="text-xs text-[#A3AAB2] mb-6">
              Our live Maryland dispatch operators are on call 24 hours a day, 365 days a year.
            </p>
            <Button
              variant="emergency"
              size="md"
              href={businessConfig.contact.phone.telHref}
              data-track-cta="call-dispatch-privacy-bottom"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>Call 24/7 Dispatch: {businessConfig.contact.phone.display}</span>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
