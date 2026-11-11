import type { Metadata } from 'next';
import { ReviewsPageClient } from '@/components/reviews/ReviewsPageClient';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Customer Reviews & Feedback | LL Towing & Auto Repair',
  description:
    'Read real driver reviews for LL Towing & Auto Repair. Verified customer testimonials for emergency towing, roadside jump-starts, lockouts, and auto repair in MD, DC, and VA.',
  alternates: {
    canonical: '/reviews',
  },
  openGraph: {
    title: 'Customer Reviews & Feedback | LL Towing & Auto Repair',
    description:
      'Verified customer testimonials for emergency towing, flatbed recovery, jump-starts, and auto repair in MD, DC, and VA.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Reviews | LL Towing & Auto Repair',
    description:
      'Verified customer testimonials for emergency towing, roadside assistance, and auto repair.',
  },
};

export default function ReviewsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Customer Reviews', url: '/reviews' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <ReviewsPageClient />
    </>
  );
}
