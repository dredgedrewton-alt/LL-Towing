import { businessConfig } from '@/lib/config/business';

const BASE_URL = process.env.APP_URL || 'https://lltowing.com';

/**
 * Verified LocalBusiness / AutoRepair Schema.org JSON-LD
 *
 * Strict Compliance:
 * - Includes only verified business details: name, phone (+1-240-424-8226), 24/7 hours, regional service areas.
 * - Does NOT include fabricated coordinates (lat/long), fake review aggregates/stars, or unverified street numbers.
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['AutoRepair', 'EmergencyService'],
    '@id': `${BASE_URL}/#localbusiness`,
    name: businessConfig.name,
    legalName: businessConfig.name,
    description: businessConfig.corePositioning,
    url: BASE_URL,
    telephone: businessConfig.contact.phone.raw,
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    areaServed: [
      {
        '@type': 'City',
        name: 'Beltsville',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Maryland',
        },
      },
      {
        '@type': 'City',
        name: 'Laurel',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Maryland',
        },
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Prince George\'s County, MD',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Montgomery County, MD',
      },
      {
        '@type': 'City',
        name: 'Washington',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'District of Columbia',
        },
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Northern Virginia',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
        description: '24/7 Emergency Towing and Roadside Assistance Dispatch',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Automotive & Towing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Emergency Car Towing',
            description: '24/7 wheel-lift and light-duty emergency car towing across Maryland, DC, and Northern Virginia.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Flatbed Towing',
            description: 'Damage-free flatbed hydraulic transport for AWD, low-clearance, and luxury vehicles.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Battery Diagnostics & Jump-Start',
            description: 'Mobile on-scene alternator/battery testing and heavy-duty 12V jump-starts.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vehicle Lockout Assistance',
            description: 'Non-destructive door lock manipulation and key recovery for locked vehicles.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Emergency Fuel Delivery',
            description: 'Rapid dispatch of regular gasoline or diesel fuel directly to stranded highway vehicles.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roadside Flat Tire Change',
            description: 'Safe highway tire removal and spare installation with professional torquing.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Auto Repair & Mechanical Servicing',
            description: 'Brake servicing, engine diagnostics, suspension work, and scheduled mechanical maintenance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Parking Management & Impounds',
            description: 'Compliant private property towing, fire lane clearance, and permit lot patrol for HOAs and commercial plazas.',
          },
        },
      ],
    },
  };
}

/**
 * BreadcrumbList Schema.org JSON-LD
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

/**
 * Service Schema.org JSON-LD for individual service pages
 */
export function generateServiceSchema(params: {
  name: string;
  description: string;
  slug: string;
  serviceType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/${params.slug}/#service`,
    name: params.name,
    serviceType: params.serviceType,
    description: params.description,
    provider: {
      '@type': 'AutoRepair',
      name: businessConfig.name,
      telephone: businessConfig.contact.phone.raw,
      url: BASE_URL,
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Maryland' },
      { '@type': 'AdministrativeArea', name: 'Washington DC' },
      { '@type': 'AdministrativeArea', name: 'Northern Virginia' },
    ],
    termsOfService: `${BASE_URL}/contact`,
  };
}
