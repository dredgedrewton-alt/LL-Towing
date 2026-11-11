/**
 * LL Towing & Auto Repair - Media Asset Configuration
 *
 * Centralized registry for all operational photographs and assets.
 * When client-provided photographs are supplied, update the `currentSrc`
 * and switch `isClientUploaded` to true.
 *
 * Placeholder images use clean, SVG-backed local visual components
 * to guarantee 100% uptime without relying on external CDNs or mock stock images.
 */

export interface MediaAssetSlot {
  id: string;
  label: string;
  category: 'fleet' | 'roadside' | 'auto_repair' | 'commercial' | 'hero';
  aspectRatio: '16:9' | '4:3' | '1:1';
  alt: string;
  isClientUploaded: boolean;
  currentSrc: string | null;
  placeholderHint: string;
}

export const mediaRegistry: Record<string, MediaAssetSlot> = {
  heroTowingFleet: {
    id: 'heroTowingFleet',
    label: 'Hero Main - Red Ford Super Duty Rollback Tow Truck',
    category: 'hero',
    aspectRatio: '16:9',
    alt: 'LL Towing red Ford Super Duty rollback tow truck with loaded vehicle outside Philmark Service Center, with Serving MD DC VA door insignia',
    isClientUploaded: true,
    currentSrc: '/images/hero-tow-rig.webp',
    placeholderHint: 'Client authentic photo: Red Ford Super Duty rollback outside service bay',
  },
  flatbedTowing: {
    id: 'flatbedTowing',
    label: 'Flatbed Hydraulic Tow Rig with Chevrolet Corvette',
    category: 'fleet',
    aspectRatio: '4:3',
    alt: 'LL Towing red hydraulic flatbed carrier safely transporting a red Chevrolet Corvette sports car',
    isClientUploaded: true,
    currentSrc: '/images/flatbed-corvette.jpg',
    placeholderHint: 'Client authentic photo: Red flatbed with Corvette sports car',
  },
  wheelLiftTowing: {
    id: 'wheelLiftTowing',
    label: 'Wheel-Lift Tow Truck in Commercial Lot',
    category: 'fleet',
    aspectRatio: '4:3',
    alt: 'LL Towing red Ford Super Duty wheel-lift tow truck towing a dark sedan in an open commercial lot',
    isClientUploaded: true,
    currentSrc: '/images/wheel-lift-tow.jpg',
    placeholderHint: 'Client authentic photo: Wheel-lift tow truck towing commuter car',
  },
  specialtyTowing: {
    id: 'specialtyTowing',
    label: 'Specialty Transport - Vintage Blue Ford Mustang',
    category: 'fleet',
    aspectRatio: '4:3',
    alt: 'LL Towing red rollback flatbed transporting a classic blue Ford Mustang with gentle soft straps',
    isClientUploaded: true,
    currentSrc: '/images/classic-mustang-transport.jpg',
    placeholderHint: 'Client authentic photo: Classic blue Mustang on rollback flatbed',
  },
  muscleCarTransport: {
    id: 'muscleCarTransport',
    label: 'Muscle Car Transport - Classic Green Coupe',
    category: 'fleet',
    aspectRatio: '4:3',
    alt: 'LL Towing red flatbed carrier transporting a bright green vintage muscle car under clear daylight',
    isClientUploaded: true,
    currentSrc: '/images/muscle-car-transport.jpg',
    placeholderHint: 'Client authentic photo: Green muscle car transported on flatbed',
  },
  emergencyNightTow: {
    id: 'emergencyNightTow',
    label: '24/7 Night Roadside Emergency Response',
    category: 'roadside',
    aspectRatio: '4:3',
    alt: 'LL Towing emergency nighttime roadside assistance scene with active blue and amber warning beacons',
    isClientUploaded: true,
    currentSrc: '/images/night-emergency-roadside.jpg',
    placeholderHint: 'Client authentic photo: Night emergency roadside recovery with warning strobes',
  },
  winterWinchRecovery: {
    id: 'winterWinchRecovery',
    label: 'Winter Snow Winch & Ditch Recovery',
    category: 'roadside',
    aspectRatio: '4:3',
    alt: 'LL Towing recovery unit performing winter winch recovery on a Dodge Challenger stuck in deep snow',
    isClientUploaded: true,
    currentSrc: '/images/winter-winch-recovery.jpg',
    placeholderHint: 'Client authentic photo: Winter snow winch-out recovery',
  },
  roadsideTireChange: {
    id: 'roadsideTireChange',
    label: 'Highway Shoulder Roadside Tire Change',
    category: 'roadside',
    aspectRatio: '4:3',
    alt: 'LL Towing roadside technician changing flat tire on highway shoulder with commercial floor jack and impact tool',
    isClientUploaded: true,
    currentSrc: '/images/roadside-tire-change.jpg',
    placeholderHint: 'Client authentic photo: Roadside highway tire swap with hydraulic floor jack',
  },
  roadsideJumpstart: {
    id: 'roadsideJumpstart',
    label: 'Battery Diagnostics & Emergency Jump Start',
    category: 'roadside',
    aspectRatio: '4:3',
    alt: 'LL Towing rapid roadside electrical assistance and battery service',
    isClientUploaded: true,
    currentSrc: '/images/night-emergency-roadside.jpg',
    placeholderHint: 'Emergency roadside field assistance unit',
  },
  roadsideLockout: {
    id: 'roadsideLockout',
    label: 'Vehicle Lockout Assistance',
    category: 'roadside',
    aspectRatio: '4:3',
    alt: 'LL Towing non-destructive vehicle door unlocking service',
    isClientUploaded: false,
    currentSrc: null,
    placeholderHint: 'Awaiting client-uploaded photo of lockout kit in field operation',
  },
  roadsideFuelDelivery: {
    id: 'roadsideFuelDelivery',
    label: 'Emergency Fuel Delivery',
    category: 'roadside',
    aspectRatio: '4:3',
    alt: 'Emergency delivery of gasoline or diesel directly to stranded motorist',
    isClientUploaded: false,
    currentSrc: null,
    placeholderHint: 'Awaiting client-uploaded photo of rapid fuel supply transfer',
  },
  autoRepairFacility: {
    id: 'autoRepairFacility',
    label: 'Auto Repair Service Bay with Classic Car on Lift',
    category: 'auto_repair',
    aspectRatio: '16:9',
    alt: 'LL Towing auto repair workshop bay featuring vintage red convertible on two-post hydraulic lift',
    isClientUploaded: true,
    currentSrc: '/images/auto-repair-bay.webp',
    placeholderHint: 'Client authentic photo: Red vintage convertible on hydraulic lift in repair shop',
  },
  workshopDiagnostics: {
    id: 'workshopDiagnostics',
    label: 'Workshop Engine & Chassis Diagnostics',
    category: 'auto_repair',
    aspectRatio: '4:3',
    alt: 'Close-up perspective of automotive engine bay, suspension components, and service tooling on vehicle lift',
    isClientUploaded: true,
    currentSrc: '/images/workshop-diagnostics.jpg',
    placeholderHint: 'Client authentic photo: Detailed engine bay inspection on hydraulic lift',
  },
  commercialImpound: {
    id: 'commercialImpound',
    label: 'Commercial Parking Management & Enforcement',
    category: 'commercial',
    aspectRatio: '4:3',
    alt: 'Black Nissan sports coupe in commercial lot during private property parking oversight',
    isClientUploaded: true,
    currentSrc: '/images/commercial-lot-enforcement.jpg',
    placeholderHint: 'Client authentic photo: Commercial parking lot vehicle patrol',
  },
};
