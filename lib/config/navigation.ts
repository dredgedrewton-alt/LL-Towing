/**
 * LL Towing & Auto Repair - Navigation Configuration
 * Complies with the Top Bar Contract (3 zones: Brand, 4-5 concise links, 1 primary CTA).
 */

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export const headerNavLinks: NavItem[] = [
  { label: 'Towing', href: '/towing' },
  { label: 'Roadside Help', href: '/roadside-assistance' },
  { label: 'Auto Repair', href: '/auto-repair' },
  { label: 'Commercial', href: '/commercial-services' },
  { label: 'Service Areas', href: '/service-areas' },
];

export const mobileExtendedNavLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Towing Services', href: '/towing' },
  { label: 'Roadside Assistance', href: '/roadside-assistance' },
  { label: 'Auto Repair & Bays', href: '/auto-repair' },
  { label: 'Commercial Impounds', href: '/commercial-services' },
  { label: 'Service Areas (MD/DC/VA)', href: '/service-areas' },
  { label: 'About Us', href: '/about' },
  { label: 'Customer Reviews (4.9★)', href: '/reviews' },
  { label: 'Contact & Directions', href: '/contact' },
];

export const footerNavigation = {
  towingServices: [
    { label: 'Towing Overview', href: '/towing' },
    { label: 'Flatbed Towing', href: '/towing/flatbed-towing' },
    { label: 'Standard Car Towing', href: '/towing/car-towing' },
    { label: 'Special Vehicle Towing', href: '/towing/special-vehicle-towing' },
  ],
  roadsideAssistance: [
    { label: 'Roadside Overview', href: '/roadside-assistance' },
    { label: 'Battery Jump-Starts', href: '/roadside-assistance/battery-jump-start' },
    { label: 'Car Lockout Service', href: '/roadside-assistance/car-lockout' },
    { label: 'Flat Tire Changes', href: '/roadside-assistance/tire-change' },
    { label: 'Emergency Fuel Delivery', href: '/roadside-assistance/fuel-delivery' },
  ],
  commercialSolutions: [
    { label: 'Commercial Overview', href: '/commercial-services' },
    { label: 'Parking Management', href: '/commercial-services/parking-management' },
    { label: 'Private Property Impounds', href: '/commercial-services/impounds' },
    { label: 'Vehicle Repossessions', href: '/commercial-services/repossessions' },
  ],
  companyAndCoverage: [
    { label: 'Service Areas Directory', href: '/service-areas' },
    { label: 'About LL Towing', href: '/about' },
    { label: 'Customer Reviews (4.9★)', href: '/reviews' },
    { label: 'Contact Dispatch & Shop', href: '/contact' },
  ],
};
