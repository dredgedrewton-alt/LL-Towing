import React from 'react';
import { cn } from '@/lib/utils';
import {
  Truck,
  ShieldAlert,
  Car,
  Zap,
  Key,
  Fuel,
  Disc,
  Wrench,
  Building2,
  ParkingSquare,
  FileLock2,
  PhoneCall,
  ArrowRight,
} from 'lucide-react';
import { ServiceItem } from '@/lib/content/services';
import { businessConfig } from '@/lib/config/business';

const iconMap = {
  Truck,
  ShieldAlert,
  Car,
  Zap,
  Key,
  Fuel,
  Disc,
  Wrench,
  Building2,
  ParkingSquare,
  FileLock2,
};

export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  service: ServiceItem;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false, className, ...props }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Truck;

  return (
    <article
      className={cn(
        'group relative flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-white border transition-all duration-200',
        featured
          ? 'border-[#C62828] shadow-md ring-1 ring-[#C62828]/10'
          : 'border-[#E2E4E8] hover:border-[#737B85] shadow-xs hover:shadow-sm',
        className
      )}
      {...props}
    >
      <div>
        {/* Top bar: Editorial numbering & unboxed metadata (strictly zero pills) */}
        <div className="flex items-center justify-between text-xs font-medium text-[#737B85] mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[#C62828] font-bold">{service.number}</span>
            <span aria-hidden="true" className="text-[#A3AAB2]">·</span>
            <span className="capitalize">{service.category}</span>
          </div>
          <span className="text-[11px] text-[#494F57]">{service.availability}</span>
        </div>

        {/* Icon & Title */}
        <div className="flex items-start gap-3.5 mb-3">
          <div className="w-10 h-10 rounded-lg bg-[#F5F6F7] border border-[#E2E4E8] flex items-center justify-center text-[#C62828] shrink-0 group-hover:bg-[#C62828] group-hover:text-white group-hover:border-[#C62828] transition-colors duration-200">
            <IconComponent className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#17191D] leading-snug group-hover:text-[#C62828] transition-colors">
            {service.title}
          </h3>
        </div>

        {/* Short description */}
        <p className="text-sm text-[#494F57] leading-relaxed mb-5">
          {service.shortDescription}
        </p>

        {/* Key Features: clean list with unboxed typographic separator */}
        <ul className="space-y-1.5 text-xs text-[#737B85] mb-6">
          {service.keyFeatures.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-none bg-[#C62828]/70 shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer: Action affordance */}
      <div className="pt-4 border-t border-[#EEF0F3] flex items-center justify-between">
        <a
          href={businessConfig.contact.phone.telHref}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C62828] hover:text-[#B71C1C] transition-colors whitespace-nowrap"
          title={`Call dispatch for ${service.title}`}
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Dispatch Now</span>
        </a>

        <span className="text-xs font-medium text-[#737B85] group-hover:text-[#17191D] inline-flex items-center gap-1 transition-colors">
          <span>Inquire</span>
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
