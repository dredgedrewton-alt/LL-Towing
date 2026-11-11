import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = 'left',
  dark = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-10 sm:mb-14',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl',
        className
      )}
      {...props}
    >
      {kicker && (
        <div
          className={cn(
            'text-xs font-bold tracking-wider uppercase mb-2',
            dark ? 'text-[#EF5350]' : 'text-[#C62828]'
          )}
        >
          {kicker}
        </div>
      )}
      <h2
        className={cn(
          'text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-balance leading-tight',
          dark ? 'text-white' : 'text-[#17191D]'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-3 text-base sm:text-lg leading-relaxed',
            dark ? 'text-[#A3AAB2]' : 'text-[#737B85]'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
