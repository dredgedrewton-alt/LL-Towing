'use client';

import { useEffect } from 'react';
import { trackClickToCall, trackCtaClick } from '@/lib/analytics';

export function AnalyticsTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-track-cta]');
      if (!target) return;

      const ctaId = target.getAttribute('data-track-cta') || 'unnamed-cta';
      const isPhone = target.getAttribute('href')?.startsWith('tel:') || ctaId.includes('call');

      if (isPhone) {
        trackClickToCall(ctaId);
      } else {
        trackCtaClick('quote_request', ctaId);
      }
    };

    document.addEventListener('click', handleClick, { passive: true });
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
