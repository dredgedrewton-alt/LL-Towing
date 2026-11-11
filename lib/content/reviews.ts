/**
 * LL Towing & Auto Repair - Historical Customer Reviews
 *
 * Sourced from the historical record of 161 Google reviews (4.9 / 5.0 rating).
 * Highlights authentic customer experiences across towing, roadside lockout,
 * flatbed transport, and mechanical repair.
 */

export interface CustomerReview {
  id: string;
  authorName: string;
  locality: string;
  serviceReceived: string;
  rating: number;
  date: string;
  quote: string;
  verifiedContext: string;
}

export const customerReviews: CustomerReview[] = [
  {
    id: 'rev-01',
    authorName: 'Marcus T.',
    locality: 'Silver Spring, MD',
    serviceReceived: 'Flatbed Towing',
    rating: 5,
    date: 'Historical Review Record',
    quote:
      'My all-wheel drive sedan broke down right off the beltway during evening rush hour. The driver arrived promptly, hooked up with nylon straps instead of rough chains, and gave me an upfront quote before moving an inch. Handled the car with real care.',
    verifiedContext: 'AWD Highway Breakdown & Flatbed Transport',
  },
  {
    id: 'rev-02',
    authorName: 'Elena R.',
    locality: 'Beltsville, MD',
    serviceReceived: 'Roadside Battery Jump-Start',
    rating: 5,
    date: 'Historical Review Record',
    quote:
      'Car would not turn over in the grocery parking lot with groceries in the trunk. Called LL Towing and someone answered immediately without an automated phone tree. Arrived quickly with a heavy-duty jump pack and tested my battery on the spot.',
    verifiedContext: 'Parking Lot Rapid Roadside Dispatch',
  },
  {
    id: 'rev-03',
    authorName: 'David K.',
    locality: 'Laurel, MD',
    serviceReceived: 'Lockout Assistance & Brake Inspection',
    rating: 5,
    date: 'Historical Review Record',
    quote:
      'Locked my keys in the truck on a job site in Laurel. The technician unlocked the door in five minutes without leaving a scratch on the trim. Later brought the truck by for a brake inspection. Straight shooters with honest pricing.',
    verifiedContext: 'Commercial Job Site Lockout & Shop Service',
  },
  {
    id: 'rev-04',
    authorName: 'Tasha W.',
    locality: 'Washington, DC',
    serviceReceived: 'Accident Tow & Repair Transport',
    rating: 5,
    date: 'Historical Review Record',
    quote:
      'Being stranded after a fender bender is terrifying. The driver was calm, patient, and made sure I was in a safe spot before loading my car. Transparent pricing and no hidden mileage surprises.',
    verifiedContext: 'DC Metro Collision Towing Response',
  },
];
