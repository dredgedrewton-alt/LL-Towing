import React from 'react';
import { cn } from '@/lib/utils';
import { Star, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { businessConfig } from '@/lib/config/business';

export interface TrustIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'card' | 'inline' | 'compact';
  dark?: boolean;
}

export function TrustIndicator({
  variant = 'card',
  dark = false,
  className,
  ...props
}: TrustIndicatorProps) {
  const items = [
    {
      icon: Star,
      value: `${businessConfig.reputation.googleRating} / 5.0`,
      label: 'Google Rating',
      detail: `${businessConfig.reputation.reviewCount} verified reviews`,
      highlight: true,
    },
    {
      icon: Clock,
      value: '24/7 Dispatch',
      label: 'Emergency Response',
      detail: 'Towing & roadside help',
      highlight: false,
    },
    {
      icon: MapPin,
      value: 'Tri-State Area',
      label: 'Regional Reach',
      detail: 'MD, Washington DC & VA',
      highlight: false,
    },
    {
      icon: ShieldCheck,
      value: 'Careful Rigging',
      label: 'Vehicle Protection',
      detail: 'Soft-straps & flatbeds',
      highlight: false,
    },
  ];

  if (variant === 'inline') {
    return (
      <div
        className={cn(
          'flex flex-wrap items-center gap-6 text-xs',
          dark ? 'text-[#A3AAB2]' : 'text-[#494F57]',
          className
        )}
        {...props}
      >
        {items.map((it, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <it.icon
              className={cn(
                'w-4 h-4',
                it.highlight ? 'text-[#C62828]' : dark ? 'text-[#737B85]' : 'text-[#737B85]'
              )}
            />
            <span className="font-semibold text-[#17191D] dark:text-white tabular-nums">
              {it.value}
            </span>
            <span className="text-[#737B85]">· {it.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6',
        className
      )}
      {...props}
    >
      {items.map((it, idx) => {
        const Icon = it.icon;
        return (
          <div
            key={idx}
            className={cn(
              'p-5 rounded-xl border transition-all duration-200 flex flex-col justify-between',
              dark
                ? 'bg-[#1D2128] border-[#2B303A] text-white'
                : 'bg-white border-[#E2E4E8] text-[#17191D]'
            )}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className={cn(
                  'text-xs font-semibold tracking-wider uppercase',
                  dark ? 'text-[#A3AAB2]' : 'text-[#737B85]'
                )}
              >
                {it.label}
              </span>
              <div
                className={cn(
                  'w-8 h-8 rounded-lg flex items-center justify-center',
                  it.highlight
                    ? 'bg-[#FFEBEE] text-[#C62828]'
                    : dark
                    ? 'bg-[#242830] text-[#A3AAB2]'
                    : 'bg-[#F5F6F7] text-[#494F57]'
                )}
              >
                <Icon className="w-4 h-4" />
              </div>
            </div>

            <div>
              <div className="text-xl sm:text-2xl font-extrabold tracking-tight tabular-nums">
                {it.value}
              </div>
              <div
                className={cn(
                  'text-xs mt-1',
                  dark ? 'text-[#737B85]' : 'text-[#737B85]'
                )}
              >
                {it.detail}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
