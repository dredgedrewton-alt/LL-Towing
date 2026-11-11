import type { Metadata } from 'next';
import { childServicePages } from '@/lib/content/servicePagesData';
import { ServicePageTemplate } from '@/components/layout/ServicePageTemplate';

const serviceData = childServicePages['car-towing'];

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

export default function CarTowingPage() {
  const breadcrumbs = [
    { label: 'Services', href: '/#services' },
    { label: 'Towing Services', href: '/towing' },
    { label: 'Standard Car Towing' },
  ];

  return <ServicePageTemplate data={serviceData} breadcrumbs={breadcrumbs} />;
}
