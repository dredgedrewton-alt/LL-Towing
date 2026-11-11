import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Camera, Image as ImageIcon, Truck, Wrench, ShieldAlert, Building2 } from 'lucide-react';
import { mediaRegistry, MediaAssetSlot } from '@/lib/config/media';

export interface ResponsiveImageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  slotId?: keyof typeof mediaRegistry | string;
  customSrc?: string | null;
  alt?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
  label?: string;
  priority?: boolean;
}

export function ResponsiveImageContainer({
  slotId,
  customSrc,
  alt,
  aspectRatio = '16:9',
  label,
  priority = false,
  className,
  ...props
}: ResponsiveImageContainerProps) {
  const slot: MediaAssetSlot | undefined = slotId ? mediaRegistry[slotId] : undefined;
  const imageSrc = customSrc || slot?.currentSrc;
  const imageAlt = alt || slot?.alt || 'LL Towing and Auto Repair operational photography';
  const effectiveRatio = aspectRatio || slot?.aspectRatio || '16:9';
  const displayLabel = label || slot?.label || 'Operational Photo Slot';
  const category = slot?.category || 'fleet';

  const ratioClasses = {
    '16:9': 'aspect-[16/9]',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-[1/1]',
  };

  const renderCategoryIcon = () => {
    switch (category) {
      case 'hero':
      case 'fleet':
        return <Truck className="w-6 h-6 text-[#EF5350]" />;
      case 'roadside':
        return <ShieldAlert className="w-6 h-6 text-[#EF5350]" />;
      case 'auto_repair':
        return <Wrench className="w-6 h-6 text-[#EF5350]" />;
      case 'commercial':
        return <Building2 className="w-6 h-6 text-[#EF5350]" />;
      default:
        return <Camera className="w-6 h-6 text-[#EF5350]" />;
    }
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl border border-[#E2E4E8] bg-[#17191D] group transition-all duration-200',
        ratioClasses[effectiveRatio],
        className
      )}
      {...props}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          referrerPolicy="no-referrer"
          className="object-cover transition-transform duration-300 group-hover:scale-102"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        /* High-Fidelity Domain-Authentic Automotive Local Placeholder */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#17191D] via-[#1D2128] to-[#242830] text-white">
          {/* Subtle industrial architectural grid */}
          <div
            className="absolute inset-0 opacity-12 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Diagonal warning hatch line accents */}
          <div
            className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #ffffff, #ffffff 2px, transparent 2px, transparent 10px)',
            }}
          />

          <div className="relative z-10 flex flex-col items-center max-w-sm px-2">
            <div className="w-12 h-12 mb-3 rounded-xl bg-[#C62828]/20 border border-[#C62828]/40 flex items-center justify-center shadow-inner">
              {renderCategoryIcon()}
            </div>

            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-[#EF5350] mb-1">
              <span>Authentic Client Media Slot</span>
            </div>

            <p className="text-sm font-bold text-white text-balance leading-snug">
              {displayLabel}
            </p>

            <div className="mt-2 text-[11px] text-[#A3AAB2] flex items-center gap-2">
              <span className="inline-flex items-center gap-1">
                <ImageIcon className="w-3.5 h-3.5 text-[#737B85]" />
                Ready for photo upload
              </span>
              <span aria-hidden="true" className="text-[#737B85]">·</span>
              <span className="font-mono text-[#737B85]">{effectiveRatio}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
