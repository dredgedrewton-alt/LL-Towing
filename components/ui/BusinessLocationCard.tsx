'use client';

import React from 'react';
import { MapPin, Navigation, Compass, Phone, ExternalLink, AlertCircle } from 'lucide-react';
import { businessConfig } from '@/lib/config/business';
import { Button } from './Button';
import { trackDirectionsClick } from '@/lib/analytics';

export interface BusinessLocationCardProps {
  officialGoogleMapsUrl?: string | null;
  className?: string;
}

export function BusinessLocationCard({
  officialGoogleMapsUrl = null,
  className,
}: BusinessLocationCardProps) {
  const verifiedAddress = businessConfig.addresses.verifiedPublishedAddress;

  return (
    <div
      className={`p-6 sm:p-8 rounded-2xl bg-[#17191D] text-white border border-[#2B303A] shadow-md ${className || ''}`}
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EF5350] mb-2">
        <Compass className="w-4 h-4" />
        <span>Physical Facility & Operational Hubs</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-3">
        Business Location & Service Hubs
      </h3>

      {verifiedAddress ? (
        /* Rendered ONLY when client confirms a physical street address */
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[#242830] border border-[#2B303A]">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-5 h-5 text-[#C62828] shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">Confirmed Facility Address</div>
                <div className="text-xs text-[#A3AAB2] mt-0.5">{verifiedAddress}</div>
              </div>
            </div>
          </div>

          {officialGoogleMapsUrl && (
            <a
              href={officialGoogleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EF5350] hover:underline"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      ) : (
        /* Strict Compliance: No invented map pin when address is unverified */
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[#242830] border border-[#2B303A] text-xs text-[#A3AAB2] leading-relaxed flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-[#EF5350] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-0.5">Physical Facility Verification Notice:</strong>
              LL Towing & Auto Repair coordinates mobile dispatch from stations in{' '}
              <strong className="text-white">Beltsville, MD</strong> and{' '}
              <strong className="text-white">Laurel, MD</strong>. Because exact workshop bays are currently undergoing final verification for public walk-in visits, no unverified street pin is displayed on public maps.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-lg bg-[#242830] border border-[#2B303A]">
              <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#EF5350]" />
                <span>Beltsville Hub (Primary)</span>
              </div>
              <p className="text-[#A3AAB2]">
                Serving I-95, I-495 (Capital Beltway), and US-1 Baltimore Avenue corridor.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#242830] border border-[#2B303A]">
              <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#EF5350]" />
                <span>Laurel Hub (Secondary)</span>
              </div>
              <p className="text-[#A3AAB2]">
                Serving Route 198, North PG County, and connecting Howard County transit.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <Button
              variant="emergency"
              size="md"
              href={businessConfig.contact.phone.telHref}
              onClick={() => trackDirectionsClick('general')}
              data-track-cta="directions-click-dispatch"
              className="text-xs"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              <span>Call For Driving & Drop-off Directions</span>
            </Button>

            {officialGoogleMapsUrl ? (
              <a
                href={officialGoogleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDirectionsClick('general')}
                className="text-xs font-semibold text-[#A3AAB2] hover:text-white inline-flex items-center gap-1"
              >
                <span>Google Maps Slot</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="text-[11px] text-[#737B85]">
                Google Maps slot ready for client verification
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
