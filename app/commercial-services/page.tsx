import type { Metadata } from 'next';
import { corePillarPages } from '@/lib/content/servicePagesData';
import { ServicePageTemplate } from '@/components/layout/ServicePageTemplate';

const serviceData = corePillarPages['commercial-services'];

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

export default function CommercialServicesPage() {
  const breadcrumbs = [
    { label: 'Services', href: '/#services' },
    { label: 'Commercial Vehicle Services' },
  ];

  return <ServicePageTemplate data={serviceData} breadcrumbs={breadcrumbs} />;
}
