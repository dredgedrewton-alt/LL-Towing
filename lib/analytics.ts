/**
 * LL Towing & Auto Repair - Google Analytics 4 & Custom Measurement Architecture
 *
 * Privacy & Security Rules:
 * - Never send customer names, telephone numbers, email addresses, pickup coordinates, or message bodies.
 * - Double-counting prevention for leads and form starts.
 * - Safely integrates with window.gtag and window.dataLayer.
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Deduplication store for double-counting prevention
const deduplicationCache = new Set<string>();

/**
 * Low-level safe dispatcher to window.gtag & window.dataLayer
 */
function sendGaEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;

  const sanitizedParams: Record<string, unknown> = {
    ...params,
    page_location: window.location.pathname,
    page_title: document.title,
    timestamp: new Date().toISOString(),
  };

  // 1. Dispatch custom DOM event for custom listeners/tag managers
  window.dispatchEvent(
    new CustomEvent('lltowing:conversion_event', {
      detail: {
        eventName,
        params: sanitizedParams,
      },
    })
  );

  // 2. Dispatch to standard GTM dataLayer if present
  const win = window as unknown as {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  };

  if (Array.isArray(win.dataLayer)) {
    win.dataLayer.push({
      event: eventName,
      ...sanitizedParams,
    });
  }

  // 3. Dispatch to official Google Analytics 4 gtag if initialized
  if (typeof win.gtag === 'function' && GA_MEASUREMENT_ID) {
    win.gtag('event', eventName, sanitizedParams);
  }
}

/**
 * 1. Track Click-To-Call
 */
export function trackClickToCall(ctaLocation: string, serviceType?: string) {
  sendGaEvent('click_to_call', {
    cta_location: ctaLocation,
    service_type: serviceType || 'general_emergency',
  });
}

/**
 * 2. Track Quote Form Start (first interaction on quote form)
 */
export function trackQuoteFormStart(serviceType?: string) {
  const dedupKey = `quote_start_${window?.location?.pathname || ''}`;
  if (deduplicationCache.has(dedupKey)) return;
  deduplicationCache.add(dedupKey);

  sendGaEvent('quote_form_start', {
    cta_location: 'quote_form',
    service_type: serviceType || 'unspecified',
  });
}

/**
 * 3. Track Successful Lead Generation (Quote Request Form)
 */
export function trackGenerateLead(params: {
  serviceType: string;
  preferredTiming?: string;
  referenceId?: string;
}) {
  const dedupKey = `lead_${params.referenceId || Date.now()}`;
  if (deduplicationCache.has(dedupKey)) return;
  deduplicationCache.add(dedupKey);

  sendGaEvent('generate_lead', {
    form_type: 'quote',
    service_type: params.serviceType,
    preferred_timing: params.preferredTiming || 'not_specified',
    reference_id: params.referenceId || 'LL-RECEIVED',
  });
}

/**
 * 4. Track General Contact Enquiry Submission
 */
export function trackContactFormSubmit(params: {
  enquiryType: string;
  referenceId?: string;
}) {
  const dedupKey = `contact_${params.referenceId || Date.now()}`;
  if (deduplicationCache.has(dedupKey)) return;
  deduplicationCache.add(dedupKey);

  sendGaEvent('contact_form_submit', {
    form_type: 'contact',
    enquiry_type: params.enquiryType,
    reference_id: params.referenceId || 'LL-CONTACT',
  });
}

/**
 * 5. Track Commercial / B2B Account Submission
 */
export function trackCommercialEnquirySubmit(params: {
  serviceType: string;
  referenceId?: string;
}) {
  const dedupKey = `comm_${params.referenceId || Date.now()}`;
  if (deduplicationCache.has(dedupKey)) return;
  deduplicationCache.add(dedupKey);

  sendGaEvent('commercial_enquiry_submit', {
    form_type: 'commercial',
    service_type: params.serviceType,
    reference_id: params.referenceId || 'LL-COMM',
  });
}

/**
 * 6. Track Driving Directions or Facility Location Interaction
 */
export function trackDirectionsClick(hub: 'beltsville' | 'laurel' | 'general') {
  sendGaEvent('directions_click', {
    hub_target: hub,
    cta_location: 'business_location_card',
  });
}

/**
 * Legacy adapter for data-track-cta elements
 */
export function trackCtaClick(
  action: 'call_click' | 'form_submission' | 'quote_request' | 'commercial_inquiry',
  location: string,
  target?: string
) {
  if (action === 'call_click') {
    trackClickToCall(location, target);
  } else if (action === 'quote_request') {
    trackGenerateLead({ serviceType: target || 'general', referenceId: `CTA-${Date.now()}` });
  } else if (action === 'commercial_inquiry') {
    trackCommercialEnquirySubmit({ serviceType: target || 'commercial', referenceId: `CTA-${Date.now()}` });
  } else {
    trackContactFormSubmit({ enquiryType: target || 'general', referenceId: `CTA-${Date.now()}` });
  }
}
