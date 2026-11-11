import React from 'react';
import Link from 'next/link';
import { Phone, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { businessConfig } from '@/lib/config/business';
import { footerNavigation } from '@/lib/config/navigation';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#17191D] text-white border-t border-[#2B303A] pt-16 pb-24 md:pb-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#2B303A]">
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="text-xl font-extrabold tracking-tight text-white hover:text-[#EF5350] transition-colors"
            >
              {businessConfig.name}
            </Link>

            <p className="text-sm text-[#A3AAB2] max-w-sm leading-relaxed">
              {businessConfig.corePositioning}
            </p>

            {/* Direct Contact Card */}
            <div className="p-4 rounded-xl bg-[#242830] border border-[#2B303A] space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#EF5350]">
                24/7 Live Emergency Dispatch
              </div>
              <a
                href={businessConfig.contact.phone.telHref}
                data-track-cta="call-dispatch-footer"
                className="flex items-center gap-2 text-lg font-extrabold text-white hover:text-[#EF5350] transition-colors tabular-nums"
              >
                <Phone className="w-5 h-5 text-[#C62828]" />
                <span>{businessConfig.contact.phone.display}</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-[#737B85]">
                <Clock className="w-3.5 h-3.5 text-[#A3AAB2]" />
                <span>Towing & roadside open 24 hours / 365 days</span>
              </div>
            </div>

            {/* Rating verification context */}
            <div className="text-xs text-[#737B85] flex items-center gap-2 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#C62828] shrink-0" />
              <span>Historical record: {businessConfig.reputation.label}</span>
            </div>
          </div>

          {/* Towing Services Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Towing & Recovery
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A3AAB2]">
              {footerNavigation.towingServices.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Roadside Assistance Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Roadside Help
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A3AAB2]">
              {footerNavigation.roadsideAssistance.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial & Company Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Commercial & Company
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A3AAB2]">
              {footerNavigation.commercialSolutions.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-[#2B303A]">
                <Link
                  href="/auto-repair"
                  className="text-xs text-[#EF5350] hover:underline font-semibold"
                >
                  Auto Repair & Workshop Bays →
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas"
                  className="text-xs text-[#A3AAB2] hover:text-white"
                >
                  Regional Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xs text-[#A3AAB2] hover:text-white"
                >
                  About LL Towing
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-xs text-[#A3AAB2] hover:text-white"
                >
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs text-[#A3AAB2] hover:text-white"
                >
                  Contact & Dispatch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Factual Disclaimer Notice regarding addresses */}
        <div className="py-6 border-b border-[#2B303A] text-xs text-[#737B85] leading-relaxed">
          <p className="max-w-4xl">
            <strong className="text-[#A3AAB2]">Service Dispatch Notice:</strong> LL Towing & Auto Repair provides 24-hour emergency towing and roadside dispatch across the Maryland, Washington DC, and Northern Virginia regions. Operating hubs are stationed in the Beltsville and Laurel areas. For physical repair drop-offs or commercial impound pickups, please verify routing with dispatch at {businessConfig.contact.phone.display}.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Policy */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737B85]">
          <div>
            &copy; {currentYear} {businessConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/service-areas" className="hover:text-white transition-colors">
              Maryland · Washington DC · Virginia
            </Link>
            <span>24/7 Roadside Ready</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
