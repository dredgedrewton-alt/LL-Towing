import React from 'react';
import { cn } from '@/lib/utils';
import { Star, Quote } from 'lucide-react';
import { CustomerReview } from '@/lib/content/reviews';

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  review: CustomerReview;
}

export function TestimonialCard({ review, className, ...props }: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        'flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-white border border-[#E2E4E8] shadow-xs relative',
        className
      )}
      {...props}
    >
      <div>
        {/* Star Rating & Context */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-4 h-4',
                  i < review.rating ? 'fill-[#C62828] text-[#C62828]' : 'text-[#E2E4E8]'
                )}
              />
            ))}
          </div>
          <span className="text-xs text-[#737B85]">{review.date}</span>
        </div>

        {/* Quote body */}
        <blockquote className="text-sm text-[#17191D] leading-relaxed mb-6 font-normal">
          &ldquo;{review.quote}&rdquo;
        </blockquote>
      </div>

      {/* Attribution footer (Unboxed metadata with typographic dot separators) */}
      <figcaption className="pt-4 border-t border-[#EEF0F3] flex items-center justify-between">
        <div>
          <div className="text-sm font-bold text-[#17191D]">{review.authorName}</div>
          <div className="text-xs text-[#737B85] flex items-center gap-1.5 mt-0.5">
            <span>{review.locality}</span>
            <span aria-hidden="true">·</span>
            <span>{review.serviceReceived}</span>
          </div>
        </div>

        <Quote className="w-5 h-5 text-[#E2E4E8] shrink-0" aria-hidden="true" />
      </figcaption>
    </figure>
  );
}
