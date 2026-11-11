/**
 * LL Towing & Auto Repair - Central Business Information & Configuration
 *
 * NOTE: All factual data in this file is strictly aligned with confirmed client brief details.
 * Unverified facts (such as physical facility street addresses and vehicle sales offerings)
 * are marked explicitly with verification statuses and must not be presented as confirmed facts.
 */

export interface UnresolvedItem {
  field: string;
  description: string;
  suppliedValues?: string[];
  status: 'pending_client_confirmation' | 'unpublished_pending_license' | 'historical_pending_verification';
  internalNote: string;
}

export const businessConfig = {
  name: 'LL Towing & Auto Repair',
  shortName: 'LL Towing',
  legalName: 'LL Towing & Auto Repair LLC', // pending final corporate registry confirmation
  tagline: 'Reliable Towing. Roadside Help. Auto Repair. All in One Place.',
  corePositioning:
    'Fast, responsive towing, dependable roadside assistance, and professional automotive repair serving the Maryland, Washington DC, and Northern Virginia region.',

  contact: {
    phone: {
      raw: '+12404248226',
      display: '(240) 424-8226',
      telHref: 'tel:+12404248226',
      smsHref: 'sms:+12404248226',
    },
    email: 'info@lltowingautorepair.com', // fallback contact placeholder pending confirmation
    dispatchCenter: 'Tri-State Dispatch Operations (MD / DC / VA)',
  },

  hours: {
    towingAndRoadside: {
      label: '24/7 Emergency Towing & Roadside Assistance',
      is24Hours: true,
      note: 'Roadside dispatch operates continuously 24 hours a day, 7 days a week, 365 days a year.',
    },
    autoRepairFacility: {
      label: 'Auto Repair Shop Hours',
      is24Hours: false,
      status: 'pending_client_confirmation',
      tentativeSchedule: 'Monday – Friday: 8:00 AM – 6:00 PM | Saturday: 8:00 AM – 3:00 PM (Subject to confirmation)',
      note: 'Shop mechanical service hours are scheduled; emergency roadside dispatch is available 24/7.',
    },
  },

  serviceArea: {
    primaryState: 'Maryland',
    primaryLocality: 'Beltsville, MD',
    secondaryLocality: 'Laurel, MD',
    coverageDescription: 'Serving Maryland (Beltsville, Laurel, Prince George’s County, Montgomery County), Washington DC, and Northern Virginia.',
    states: [
      { name: 'Maryland', code: 'MD', primaryHubs: ['Beltsville', 'Laurel', 'College Park', 'Silver Spring', 'Greenbelt'] },
      { name: 'Washington DC', code: 'DC', primaryHubs: ['All Quadrants: NW, NE, SW, SE'] },
      { name: 'Virginia', code: 'VA', primaryHubs: ['Arlington', 'Alexandria', 'Tysons', 'Fairfax'] },
    ],
  },

  reputation: {
    googleRating: 4.9,
    reviewCount: 161,
    status: 'historical_pending_verification' as const,
    label: '4.9 Star Rating (Historical 161 Google Reviews)',
    disclaimer: 'Based on client-provided historical customer records of 161 reviews averaging 4.9 out of 5 stars.',
  },

  /**
   * Two potential addresses were supplied in project records.
   * Neither is published as a verified walk-in physical address until client confirms.
   */
  addresses: {
    verifiedPublishedAddress: null as null | string,
    unconfirmedCandidates: [
      {
        id: 'candidate_1',
        locality: 'Beltsville, MD',
        note: 'Primary dispatch locality referenced in operating records.',
        status: 'pending_client_confirmation',
      },
      {
        id: 'candidate_2',
        locality: 'Laurel, MD',
        note: 'Secondary facility or previous yard address referenced.',
        status: 'pending_client_confirmation',
      },
    ],
  },

  /**
   * Registry of unresolved business fields for agency audit & client sign-off.
   */
  unresolvedRegistry: [
    {
      field: 'Physical Facility Street Address',
      description: 'Two candidate localities (Beltsville and Laurel) were supplied. Neither is published as an exact address until verified.',
      suppliedValues: ['Beltsville, MD', 'Laurel, MD'],
      status: 'pending_client_confirmation',
      internalNote: 'Must obtain exact street address, suite/bay number, and zoning confirmation before publishing on Google Maps or website footer.',
    },
    {
      field: 'Repair Shop Operating Hours',
      description: 'Towing is 24/7; mechanical bays follow standard shop schedule requiring confirmation.',
      suppliedValues: ['24/7 Emergency Dispatch', 'Shop schedule TBD'],
      status: 'pending_client_confirmation',
      internalNote: 'Ensure clear distinction between 24/7 emergency dispatch and scheduled mechanical service appointments.',
    },
    {
      field: 'Vehicle Sales Service',
      description: 'Source notes reference used vehicle sales, but this capability must remain UNPUBLISHED per instructions until licensing is confirmed.',
      status: 'unpublished_pending_license',
      internalNote: 'Do not render on navigation, service listings, or footer until commercial dealer license and inventory are provided.',
    },
    {
      field: 'Current Google Reviews Live Sync',
      description: 'Historical rating of 4.9 from 161 reviews provided.',
      suppliedValues: ['4.9 / 5.0 (161 reviews)'],
      status: 'historical_pending_verification',
      internalNote: 'Pending Google Business Profile API connection in later phase for live verified syncing.',
    },
    {
      field: 'Fleet Size & Rig Credentials',
      description: 'Authentic photos supplied show flatbeds and wheel-lifts. Specific fleet unit count must not be exaggerated or invented.',
      status: 'pending_client_confirmation',
      internalNote: 'Only state capabilities (Flatbed, Wheel-lift, Lockout kit, Jump packs); do not invent fleet numbers.',
    },
  ] as UnresolvedItem[],
} as const;
