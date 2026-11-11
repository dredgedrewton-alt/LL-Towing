import type { Metadata } from 'next';
import { childServicePages } from '@/lib/content/servicePagesData';
import { ServicePageTemplate } from '@/components/layout/ServicePageTemplate';

const serviceData = childServicePages['special-vehicle-towing'];

export const metadata: Metadata = {
  title: serviceData.metaTitle,
  description: serviceData.metaDescription,
  openGraph: {
    title: serviceData.metaTitle,
    description: serviceData.metaDescription,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: serviceData.metaTitle,
    description: serviceData.metaDescription,
  },
};

export default function SpecialVehicleTowingPage() {
  const breadcrumbs = [
    { label: 'Services', href: '/#services' },
    { label: 'Towing Services', href: '/towing' },
    { label: 'Special Vehicle Towing' },
  ];

  return <ServicePageTemplate data={serviceData} breadcrumbs={breadcrumbs} />;
}
