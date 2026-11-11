'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ResponsiveImageContainer } from '@/components/ui/ResponsiveImageContainer';
import { Truck, ShieldAlert, Wrench, Car, Camera, Info, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FeaturedRoadWorkSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'flatbed' | 'transport' | 'roadside' | 'repair'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<null | typeof galleryItems[0]>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPhoto(null);
    };
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhoto]);

  const galleryItems = [
    {
      id: 'gw-flatbed-corvette',
      category: 'flatbed',
      title: 'Flatbed Hydraulic Recovery — Chevrolet Corvette',
      categoryLabel: 'Flatbed Towing',
      imageSlotId: 'flatbedTowing',
      alt: 'LL Towing red hydraulic flatbed carrier safely transporting a red Chevrolet Corvette sports car',
      caption: 'Damage-free hydraulic deck recovery for low-profile sports vehicles and performance suspensions.',
      aspectRatio: '4:3' as const,
      equipmentUsed: 'Hydraulic slide-back deck, low-angle ramp extensions, non-marring tire harnesses',
    },
    {
      id: 'gw-specialty-mustang',
      category: 'transport',
      title: 'Classic Vehicle Transport — Vintage Blue Mustang',
      categoryLabel: 'Specialty Transport',
      imageSlotId: 'specialtyTowing',
      alt: 'LL Towing red rollback flatbed transporting a classic blue Ford Mustang with gentle soft straps',
      caption: 'Dedicated soft-strap transport for antique classics, ensuring zero contact with chrome bumpers or delicate chassis joints.',
      aspectRatio: '4:3' as const,
      equipmentUsed: 'Low-breakover recovery deck, 8-point nylon soft-tie harnesses',
    },
    {
      id: 'gw-transport-green-muscle',
      category: 'flatbed',
      title: 'Muscle Car Transport — Classic Green Coupe',
      categoryLabel: 'Flatbed Transport',
      imageSlotId: 'muscleCarTransport',
      alt: 'LL Towing red flatbed carrier transporting a bright green vintage muscle car under clear daylight',
      caption: 'Safe transport of high-value custom muscle cars between private collections and detailing studios.',
      aspectRatio: '4:3' as const,
      equipmentUsed: 'Commercial slide-back flatbed, dual safety chains, heavy-duty ratchet tie-downs',
    },
    {
      id: 'gw-wheellift-sedan',
      category: 'transport',
      title: 'Rapid Wheel-Lift Transit — Commercial Lot',
      categoryLabel: 'Vehicle Transport',
      imageSlotId: 'wheelLiftTowing',
      alt: 'LL Towing red Ford Super Duty wheel-lift tow truck towing a dark sedan in an open commercial lot',
      caption: 'Maneuverable wheel-lift recovery engineered to cradle tires securely without touching bumpers or underbody panels.',
      aspectRatio: '4:3' as const,
      equipmentUsed: 'Ford Super Duty chassis, hydraulic underlift grid, secondary safety chains',
    },
    {
      id: 'gw-roadside-night',
      category: 'roadside',
      title: '24/7 Night Emergency Roadside Response',
      categoryLabel: 'Roadside Assistance',
      imageSlotId: 'emergencyNightTow',
      alt: 'LL Towing emergency nighttime roadside assistance scene with active blue and amber warning beacons',
      caption: 'Around-the-clock emergency dispatch with high-visibility safety strobe lighting protecting highway motorists.',
      aspectRatio: '4:3' as const,
      equipmentUsed: 'High-intensity 360-degree LED strobe lightbar, rapid hookup wheel-lift, traffic safety gear',
    },
    {
      id: 'gw-winter-winch',
      category: 'roadside',
      title: 'Winter Snow Winch-Out & Ditch Recovery',
      categoryLabel: 'Roadside Assistance',
      imageSlotId: 'winterWinchRecovery',
      alt: 'LL Towing recovery unit performing winter winch recovery on a Dodge Challenger stuck in deep snow',
      caption: 'Severe weather recovery for vehicles trapped in deep snowdrifts, icy highway ditches, and slippery embankments.',
      aspectRatio: '4:3' as const,
      equipmentUsed: 'Commercial steel cable winch, recovery snatch blocks, heavy-duty tow straps',
    },
    {
      id: 'gw-roadside-tire',
      category: 'roadside',
      title: 'Highway Shoulder Spare Tire Swap',
      categoryLabel: 'Roadside Assistance',
      imageSlotId: 'roadsideTireChange',
      alt: 'LL Towing roadside technician changing flat tire on highway shoulder with commercial floor jack and impact tool',
      caption: 'Safe, fast on-scene tire replacement using heavy-duty hydraulic jacks and calibrated torque tools.',
      aspectRatio: '4:3' as const,
      equipmentUsed: 'Commercial hydraulic floor jack, high-torque cordless impact wrench, digital pressure gauge',
    },
    {
      id: 'gw-repair-bay',
      category: 'repair',
      title: 'Automotive Workshop Bays — Hydraulic Lift Service',
      categoryLabel: 'Service & Repair Work',
      imageSlotId: 'autoRepairFacility',
      alt: 'LL Towing auto repair workshop bay featuring vintage red convertible on two-post hydraulic lift',
      caption: 'Dedicated indoor workshop service bays equipped for comprehensive mechanical repairs, brake jobs, and suspension overhauls.',
      aspectRatio: '16:9' as const,
      equipmentUsed: 'Heavy-duty 2-post automotive lift, OBD-II computerized scanner, professional mechanic tool chest',
    },
    {
      id: 'gw-repair-diagnostics',
      category: 'repair',
      title: 'Precision Engine Bay & Chassis Diagnostics',
      categoryLabel: 'Service & Repair Work',
      imageSlotId: 'workshopDiagnostics',
      alt: 'Close-up perspective of automotive engine bay, suspension components, and service tooling on vehicle lift',
      caption: 'In-depth mechanical inspections evaluating carburetor, ignition, cooling lines, and chassis components.',
      aspectRatio: '4:3' as const,
      equipmentUsed: 'Engine diagnostic scanner, precision torque wrenches, pneumatic tools',
    },
    {
      id: 'gw-commercial-impound',
      category: 'transport',
      title: 'Commercial Parking Patrol & Private Property Oversight',
      categoryLabel: 'Commercial Services',
      imageSlotId: 'commercialImpound',
      alt: 'Black Nissan sports coupe in commercial lot during private property parking oversight',
      caption: 'Lawful parking management, reserved stall protection, and private property compliance across Maryland and DC commercial centers.',
      aspectRatio: '4:3' as const,
      equipmentUsed: 'Photographic condition documentation kit, commercial dispatch patrol unit',
    },
  ];

  const filterTabs = [
    { key: 'all', label: 'All Operations' },
    { key: 'flatbed', label: 'Flatbed Towing' },
    { key: 'transport', label: 'Vehicle Transport' },
    { key: 'roadside', label: 'Roadside Assistance' },
    { key: 'repair', label: 'Workshop Repair' },
  ] as const;

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section id="featured-work" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2E4E8]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <SectionHeading
            kicker="04. Operational Gallery"
            title="Featured Road Work & Workshop Service."
            description="A visual look at our recovery units, flatbed decks, roadside assistance calls, and mechanical workshop operations across Maryland, DC, and Virginia."
            className="mb-0"
          />

          {/* Filter Bar (Functional buttons) */}
          <div className="inline-flex flex-wrap items-center gap-1.5 p-1 bg-[#F5F6F7] rounded-lg border border-[#E2E4E8] shrink-0 self-start md:self-end">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={cn(
                    'px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap',
                    isActive
                      ? 'bg-[#17191D] text-white shadow-xs'
                      : 'text-[#494F57] hover:text-[#17191D] hover:bg-white'
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedPhoto(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedPhoto(item);
                }
              }}
              aria-label={`Inspect photo: ${item.title}`}
              className="group flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-white border border-[#E2E4E8] hover:border-[#737B85] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C62828]"
            >
              <div>
                {/* Visual Media Carrier */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <ResponsiveImageContainer
                    slotId={item.imageSlotId}
                    aspectRatio={item.aspectRatio}
                    alt={item.alt}
                    label={item.title}
                  />

                  {/* Hover Inspect Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Metadata & Title */}
                <div className="flex items-center justify-between text-xs text-[#737B85] mb-2">
                  <span className="font-bold text-[#C62828] uppercase tracking-wider text-[11px]">
                    {item.categoryLabel}
                  </span>
                  <span className="text-[11px] text-[#737B85]">Operational Slot</span>
                </div>

                <h3 className="text-base font-bold text-[#17191D] mb-1.5 group-hover:text-[#C62828] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#494F57] leading-relaxed mb-4">
                  {item.caption}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EEF0F3] text-[11px] text-[#737B85] flex items-center justify-between">
                <span className="truncate max-w-[200px]">{item.equipmentUsed}</span>
                <span className="text-[#17191D] font-semibold group-hover:text-[#C62828] transition-colors">
                  Inspect →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Mandatory Editorial Disclaimer on Pictured Locations */}
        <div className="mt-8 p-4 rounded-xl bg-[#F5F6F7] border border-[#E2E4E8] flex items-start gap-3 text-xs text-[#737B85]">
          <Info className="w-4 h-4 text-[#737B85] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#17191D]">Photographic Reference Note:</strong> Operational imagery represents field towing scenarios, emergency recovery calls, and mechanical repair capabilities across the Tri-State region. Certain pictured locations, partner repair lots, and transit yards represent client drop-off and service points and are not implied to be exclusively owned properties.
          </p>
        </div>

        {/* Lightbox / Detail Drawer Modal */}
        {selectedPhoto && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-xl w-full p-6 border border-[#E2E4E8] shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E4E8] mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C62828]">
                    {selectedPhoto.categoryLabel}
                  </span>
                  <h4 className="text-lg font-bold text-[#17191D]">{selectedPhoto.title}</h4>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="p-1.5 rounded-lg text-[#737B85] hover:bg-[#F5F6F7] cursor-pointer"
                  aria-label="Close photo details"
                >
                  ✕
                </button>
              </div>

              <ResponsiveImageContainer
                slotId={selectedPhoto.imageSlotId}
                aspectRatio="16:9"
                alt={selectedPhoto.alt}
                label={selectedPhoto.title}
                className="mb-4"
              />

              <p className="text-sm text-[#494F57] leading-relaxed mb-4">
                {selectedPhoto.caption}
              </p>

              <div className="p-3 rounded-lg bg-[#F5F6F7] border border-[#E2E4E8] text-xs text-[#494F57] mb-4">
                <strong>Equipment & Standards:</strong> {selectedPhoto.equipmentUsed}
              </div>

              <div className="flex items-center justify-end">
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="px-4 py-2 rounded-lg bg-[#17191D] text-white text-xs font-semibold hover:bg-[#242830] cursor-pointer"
                >
                  Close View
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
