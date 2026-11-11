import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'emergency';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold transition-colors duration-150 rounded-lg whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
      primary:
        'bg-[#C62828] text-white hover:bg-[#B71C1C] active:bg-[#8E1818] shadow-sm focus-visible:outline-[#C62828]',
      secondary:
        'bg-[#17191D] text-white hover:bg-[#242830] active:bg-[#0F1012] shadow-sm focus-visible:outline-[#17191D]',
      outline:
        'border border-[#E2E4E8] bg-white text-[#17191D] hover:bg-[#F5F6F7] hover:border-[#737B85] focus-visible:outline-[#17191D]',
      ghost:
        'text-[#17191D] hover:bg-[#F5F6F7] focus-visible:outline-[#17191D]',
      emergency:
        'bg-[#C62828] text-white hover:bg-[#B71C1C] shadow-md ring-2 ring-[#C62828]/20 focus-visible:outline-[#C62828]',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 min-h-[36px]',
      md: 'text-sm px-5 py-2.5 min-h-[44px]',
      lg: 'text-base px-6 py-3 min-h-[48px]',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
