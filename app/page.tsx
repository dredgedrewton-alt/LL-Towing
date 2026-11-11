import type { Metadata } from 'next';
import { HomePageClient } from '@/components/home/HomePageClient';

export const metadata: Metadata = {
  title: 'LL Towing & Auto Repair | 24/7 Roadside Assistance & Auto Services',
  description:
    'Professional 24/7 towing, roadside assistance, and automotive repair serving Maryland, Washington DC, and Virginia. Rapid dispatch from Beltsville and Laurel hubs.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'LL Towing & Auto Repair | 24/7 Towing, Roadside & Auto Repair',
    description:
      'Reliable 24-hour towing and auto repair across MD, DC, and VA. Call (240) 424-8226 for immediate roadside dispatch.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LL Towing & Auto Repair | 24/7 Roadside Assistance & Auto Services',
    description:
      'Reliable 24/7 towing, roadside assistance, and automotive repair serving Maryland, Washington DC, and Northern Virginia.',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
