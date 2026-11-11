'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { designTokens } from '@/lib/config/tokens';
import { Check, Copy, Palette, Type, Layers } from 'lucide-react';

export function DesignSystemShowcase() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors = [
    { name: 'Primary Red', hex: designTokens.colors.primary.red, role: 'High-intent emergency actions & primary CTAs' },
    { name: 'Red Dark', hex: designTokens.colors.primary.redDark, role: 'Active press & focus states' },
    { name: 'Deep Charcoal', hex: designTokens.colors.neutral.charcoal, role: 'Headings, primary brand tone & dark surfaces' },
    { name: 'Steel Grey', hex: designTokens.colors.neutral.steel, role: 'Secondary body copy & metadata labels' },
    { name: 'Off-White', hex: designTokens.colors.neutral.offWhite, role: 'Canvas surface & alternating sections' },
    { name: 'White', hex: '#FFFFFF', role: 'Default clean background & elevated cards' },
  ];

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <section className="py-12 bg-white border-b border-[#E2E4E8]">
      <Container>
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F6F7] border border-[#E2E4E8]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E2E4E8]">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C62828] mb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>Phase 1 Design System Specification</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#17191D]">
                Design Tokens & Component Library
              </h3>
            </div>
            <div className="text-xs text-[#737B85]">
              Tailwind CSS v4 · Strict Design Tokens · WCAG AA AA Contrast
            </div>
          </div>

          {/* Color Tokens Palette */}
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#494F57] mb-3 flex items-center gap-1.5">
              <Palette className="w-4 h-4 text-[#C62828]" />
              <span>Configurable Brand Color Tokens</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => copyToClipboard(c.hex)}
                  className="p-3 bg-white rounded-xl border border-[#E2E4E8] text-left hover:border-[#737B85] transition-colors group cursor-pointer"
                  title="Click to copy HEX code"
                >
                  <div
                    className="w-full h-12 rounded-lg mb-2.5 border border-black/10 shadow-xs"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="text-xs font-bold text-[#17191D] truncate">{c.name}</div>
                  <div className="text-[11px] font-mono text-[#737B85] flex items-center justify-between mt-0.5">
                    <span>{c.hex}</span>
                    {copiedColor === c.hex ? (
                      <Check className="w-3 h-3 text-[#1B873F]" />
                    ) : (
                      <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Buttons & Interactive States */}
          <div className="pt-6 border-t border-[#E2E4E8]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#494F57] mb-3">
              Interactive Button Primitives (WCAG Compliant)
            </h4>

            <div className="flex flex-wrap items-center gap-3">
              <Button variant="emergency" size="md">
                Emergency Dispatch
              </Button>
              <Button variant="primary" size="md">
                Primary Button
              </Button>
              <Button variant="secondary" size="md">
                Secondary Dark
              </Button>
              <Button variant="outline" size="md">
                Outline Light
              </Button>
              <Button variant="ghost" size="md">
                Ghost Action
              </Button>
              <Button variant="primary" size="sm">
                Small (36px)
              </Button>
              <Button variant="primary" size="lg">
                Large (48px)
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
