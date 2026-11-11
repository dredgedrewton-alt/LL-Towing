/**
 * LL Towing & Auto Repair - Core Services Content
 *
 * All 11 approved service lines are detailed below.
 * Vehicle sales is strictly kept in an 'unpublished' status as required
 * until proper dealer licensing and inventory are confirmed by the client.
 */

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'towing' | 'roadside' | 'repair' | 'commercial';
  availability: '24/7 Emergency Dispatch' | 'Scheduled Shop Hours' | 'Commercial Dispatch';
  shortDescription: string;
  detailedDescription: string;
  keyFeatures: string[];
  iconName: 'Truck' | 'ShieldAlert' | 'Car' | 'Zap' | 'Key' | 'Fuel' | 'Disc' | 'Wrench' | 'Building2' | 'ParkingSquare' | 'FileLock2';
  mediaSlotId: string;
  status: 'published' | 'unpublished';
}

export const servicesData: ServiceItem[] = [
  {
    id: 'car-towing',
    number: '01',
    title: 'Car Towing',
    category: 'towing',
    availability: '24/7 Emergency Dispatch',
    shortDescription: 'Safe, prompt local and medium-distance towing for sedans, coupes, hybrids, and small SUVs.',
    detailedDescription:
      'When your vehicle breaks down or is involved in an incident, our rapid-response tow operators provide careful hooking, secure transport, and direct delivery to your home, dealership, or our repair facility.',
    keyFeatures: ['Modern wheel-lift and dolly equipment', 'Strict damage-free loading protocol', 'Local and tri-state transport'],
    iconName: 'Truck',
    mediaSlotId: 'wheelLiftTowing',
    status: 'published',
  },
  {
    id: 'flatbed-towing',
    number: '02',
    title: 'Flatbed Towing',
    category: 'towing',
    availability: '24/7 Emergency Dispatch',
    shortDescription: 'Zero-ground-contact transport ideal for all-wheel-drive vehicles, lowered cars, and luxury models.',
    detailedDescription:
      'Hydraulic flatbed decks ensure your vehicle is completely elevated off the road surface. Essential for AWD/4WD drivetrains, low-clearance sports cars, and severely damaged vehicles that cannot safely roll.',
    keyFeatures: ['Full-bed hydraulic elevation', 'Gentle low-angle loading ramps', 'Protective nylon tie-downs'],
    iconName: 'Truck',
    mediaSlotId: 'flatbedTowing',
    status: 'published',
  },
  {
    id: 'special-vehicle-towing',
    number: '03',
    title: 'Special Vehicle Towing',
    category: 'towing',
    availability: '24/7 Emergency Dispatch',
    shortDescription: 'Dedicated transport handling for classic automobiles, exotic sports cars, customized builds, and light commercial vans.',
    detailedDescription:
      'Specialized vehicles require deliberate precision. Our operators utilize high-tensile soft straps, non-marring rigging, and extended ramp transitions to protect custom bodywork, splitters, and undercarriages.',
    keyFeatures: ['Soft-strap wheel harnesses', 'Low-profile clearances', 'Meticulous chainless securement'],
    iconName: 'Car',
    mediaSlotId: 'specialtyTowing',
    status: 'published',
  },
  {
    id: 'battery-service-jump-starts',
    number: '04',
    title: 'Battery Service & Jump-Starts',
    category: 'roadside',
    availability: '24/7 Emergency Dispatch',
    shortDescription: 'Rapid roadside battery testing, electrical booster starts, and terminal inspections.',
    detailedDescription:
      'Stranded with a clicking starter or dead battery? We arrive equipped with heavy-duty commercial booster packs to safely jump-start 12V automotive systems without spiking sensitive vehicle electronics.',
    keyFeatures: ['Surge-protected booster packs', 'Alternator/starter quick check', 'Terminal corrosion inspection'],
    iconName: 'Zap',
    mediaSlotId: 'roadsideJumpstart',
    status: 'published',
  },
  {
    id: 'vehicle-lockout-assistance',
    number: '05',
    title: 'Vehicle Lockout Assistance',
    category: 'roadside',
    availability: '24/7 Emergency Dispatch',
    shortDescription: 'Non-destructive vehicle entry when keys are locked inside or lost.',
    detailedDescription:
      'Locked out of your vehicle? Our technicians employ gentle inflatable air wedges and specialized linkage access tools designed to bypass locks quickly without denting doors, scratching paint, or bending window frames.',
    keyFeatures: ['Non-marring opening tools', 'Prompt roadside arrival', 'Domestic and foreign vehicle compatibility'],
    iconName: 'Key',
    mediaSlotId: 'roadsideLockout',
    status: 'published',
  },
  {
    id: 'emergency-fuel-delivery',
    number: '06',
    title: 'Emergency Fuel Delivery',
    category: 'roadside',
    availability: '24/7 Emergency Dispatch',
    shortDescription: 'Prompt on-site delivery of regular, premium, or diesel fuel directly to your stranded location.',
    detailedDescription:
      'Running out of fuel on the highway is stressful and dangerous. We bring enough gallons of fresh fuel directly to your vehicle to safely restart your engine and drive to the nearest service station.',
    keyFeatures: ['Gasoline (87/93) and diesel', 'Delivered roadside or highway shoulder', 'Assistance with air-purging diesel lines'],
    iconName: 'Fuel',
    mediaSlotId: 'roadsideFuelDelivery',
    status: 'published',
  },
  {
    id: 'tire-changes',
    number: '07',
    title: 'Tire Changes & Air Supply',
    category: 'roadside',
    availability: '24/7 Emergency Dispatch',
    shortDescription: 'Safe roadside spare tire mounting, stubborn lug nut removal, and tire pressure adjustments.',
    detailedDescription:
      'A blowout on I-95, I-495, or US-1 puts you in a high-risk zone. Our operators arrive with commercial floor jacks and impact drivers to safely swap on your spare tire and verify correct lug torque.',
    keyFeatures: ['High-torque impact wrenches', 'Heavy-duty hydraulic floor jacks', 'Pressure top-off for spare tire'],
    iconName: 'Disc',
    mediaSlotId: 'roadsideTireChange',
    status: 'published',
  },
  {
    id: 'general-automotive-repairs',
    number: '08',
    title: 'General Automotive Repairs & Maintenance',
    category: 'repair',
    availability: 'Scheduled Shop Hours',
    shortDescription: 'Comprehensive mechanical diagnostics, brake service, suspension, fluid maintenance, and component replacement.',
    detailedDescription:
      'Beyond emergency roadside towing, LL Towing & Auto Repair provides dedicated workshop repair capabilities. From check engine diagnostics and brake overhauls to suspension and routine maintenance, your car is in capable hands.',
    keyFeatures: ['Computerized OBD-II diagnostics', 'Brake pad and rotor replacement', 'Steering, suspension, and maintenance'],
    iconName: 'Wrench',
    mediaSlotId: 'autoRepairFacility',
    status: 'published',
  },
  {
    id: 'impounds',
    number: '09',
    title: 'Private Property Impounds',
    category: 'commercial',
    availability: 'Commercial Dispatch',
    shortDescription: 'Lawful, orderly towing of unauthorized or abandoned vehicles for commercial property owners.',
    detailedDescription:
      'We assist commercial plazas, residential communities, and retail managers in maintaining clear fire lanes, handicap access, and compliant parking. All removals strictly follow regional Maryland and municipal towing regulations.',
    keyFeatures: ['Full legal compliance logging', 'Secure vehicle storage facility', 'Documented photographic condition records'],
    iconName: 'Building2',
    mediaSlotId: 'commercialImpound',
    status: 'published',
  },
  {
    id: 'parking-management',
    number: '10',
    title: 'Parking Management Services',
    category: 'commercial',
    availability: 'Commercial Dispatch',
    shortDescription: 'Customized lot patrol, permit enforcement, and space regulation for businesses and property complexes.',
    detailedDescription:
      'Keep parking spaces open for paying customers and authorized tenants. We provide signage installation, scheduled patrols, and responsive on-call enforcement customized to your property’s specific lease rules.',
    keyFeatures: ['Warning signage installation', 'Scheduled routine property sweeps', 'Dedicated dispatcher line for property managers'],
    iconName: 'ParkingSquare',
    mediaSlotId: 'commercialImpound',
    status: 'published',
  },
  {
    id: 'vehicle-repossessions',
    number: '11',
    title: 'Vehicle Repossessions',
    category: 'commercial',
    availability: 'Commercial Dispatch',
    shortDescription: 'Professional, compliant collateral recovery services for financial institutions and authorized lenders.',
    detailedDescription:
      'Executed with rigorous legal protocol, discretion, and strict property accountability. All recovered assets are transported to secure holding facilities with detailed condition inventories and secure key handling.',
    keyFeatures: ['Licensed collateral recovery procedures', 'Detailed condition reporting & photography', 'Secured compound storage'],
    iconName: 'FileLock2',
    mediaSlotId: 'commercialImpound',
    status: 'published',
  },
  // UNPUBLISHED SERVICE: Kept in code for future licensing confirmation but excluded from public displays
  {
    id: 'vehicle-sales',
    number: '12',
    title: 'Vehicle Sales',
    category: 'repair',
    availability: 'Scheduled Shop Hours',
    shortDescription: 'Vehicle sales capabilities referenced in source materials.',
    detailedDescription: 'Pending formal dealer licensing and inventory confirmation before public release.',
    keyFeatures: ['Pending verification'],
    iconName: 'Car',
    mediaSlotId: 'autoRepairFacility',
    status: 'unpublished',
  },
];

/**
 * Filtered helper returning only confirmed, published services
 */
export const publishedServices = servicesData.filter((s) => s.status === 'published');
