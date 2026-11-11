import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL || 'https://lltowing.com';
  const currentDate = new Date().toISOString();

  const routes = [
    { path: '', changeFrequency: 'daily' as const, priority: 1.0 },
    { path: '/towing', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/roadside-assistance', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/auto-repair', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/commercial-services', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/service-areas', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/service-areas/beltsville-md', changeFrequency: 'weekly' as const, priority: 0.85 },
    { path: '/service-areas/laurel-md', changeFrequency: 'weekly' as const, priority: 0.85 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/reviews', changeFrequency: 'weekly' as const, priority: 0.7 },
    // Towing sub-services
    { path: '/towing/car-towing', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/towing/flatbed-towing', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/towing/special-vehicle-towing', changeFrequency: 'weekly' as const, priority: 0.8 },
    // Roadside sub-services
    { path: '/roadside-assistance/battery-jump-start', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/roadside-assistance/tire-change', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/roadside-assistance/car-lockout', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/roadside-assistance/fuel-delivery', changeFrequency: 'weekly' as const, priority: 0.8 },
    // Commercial sub-services
    { path: '/commercial-services/parking-management', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/commercial-services/impounds', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/commercial-services/repossessions', changeFrequency: 'monthly' as const, priority: 0.7 },
    // Legal & Policies
    { path: '/privacy', changeFrequency: 'monthly' as const, priority: 0.5 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
