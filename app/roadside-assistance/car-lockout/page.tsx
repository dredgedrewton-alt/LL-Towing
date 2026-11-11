import type { Metadata } from 'next';
import { childServicePages } from '@/lib/content/servicePagesData';
import { ServicePageTemplate } from '@/components/layout/ServicePageTemplate';

const serviceData = childServicePages['car-lockout'];

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

export default function CarLockoutPage() {
  const breadcrumbs = [
    { label: 'Services', href: '/#services' },
    { label: 'Roadside Assistance', href: '/roadside-assistance' },
    { label: 'Car Lockout' },
  ];

  return <ServicePageTemplate data={serviceData} breadcrumbs={breadcrumbs} />;
}
