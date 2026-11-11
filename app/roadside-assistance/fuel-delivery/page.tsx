import type { Metadata } from 'next';
import { childServicePages } from '@/lib/content/servicePagesData';
import { ServicePageTemplate } from '@/components/layout/ServicePageTemplate';

const serviceData = childServicePages['fuel-delivery'];

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

export default function FuelDeliveryPage() {
  const breadcrumbs = [
    { label: 'Services', href: '/#services' },
    { label: 'Roadside Assistance', href: '/roadside-assistance' },
    { label: 'Emergency Fuel Delivery' },
  ];

  return <ServicePageTemplate data={serviceData} breadcrumbs={breadcrumbs} />;
}
