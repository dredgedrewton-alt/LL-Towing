import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items, className, ...props }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center text-xs font-medium text-[#737B85]', className)}
      {...props}
    >
      <ol className="flex items-center space-x-1.5 sm:space-x-2">
        <li>
          <Link
            href="/"
            className="hover:text-[#17191D] transition-colors whitespace-nowrap"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-1.5 sm:space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-[#A3AAB2] shrink-0" aria-hidden="true" />
              {isLast || !item.href ? (
                <span
                  className="text-[#17191D] font-semibold truncate max-w-[200px]"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#17191D] transition-colors whitespace-nowrap truncate max-w-[150px]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
