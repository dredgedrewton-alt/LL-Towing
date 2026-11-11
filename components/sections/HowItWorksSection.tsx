import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PhoneCall, MapPin, Truck, AlertCircle } from 'lucide-react';
import { businessConfig } from '@/lib/config/business';
import { Button } from '@/components/ui/Button';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Call & Describe The Situation',
      summary:
        'Dial (240) 424-8226 to speak directly with our dispatch desk. Let us know if your vehicle is stalled, locked, out of fuel, or in need of mechanical transport.',
      icon: PhoneCall,
      detail: 'No automated phone trees—direct communication with local operators.',
    },
    {
      number: '02',
      title: 'Discuss Location & Required Service',
      summary:
        'Share your highway exit, cross streets, or GPS pin along with your vehicle make and model. We assess the best equipment (flatbed or wheel-lift) and provide an upfront quote.',
      icon: MapPin,
      detail: 'Transparent pricing explained before any recovery unit dispatches.',
    },
    {
      number: '03',
      title: 'Receive Roadside Help or Transport',
      summary:
        'Our technician arrives equipped to resolve the issue on scene (jump-start, tire change, lockout) or secure your vehicle for safe transport to your destination of choice.',
      icon: Truck,
      detail: 'Careful soft-strap loading with delivery directly to your home, dealership, or shop.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F6F7] border-b border-[#E2E4E8]">
      <Container>
        <SectionHeading
          kicker="03. Clear Process"
          title="How It Works: Three Simple Steps to Roadside Relief."
          description="A straightforward, transparent process designed to get you and your vehicle to safety without confusion or hidden conditions."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative p-7 sm:p-8 rounded-2xl bg-white border border-[#E2E4E8] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-extrabold text-[#C62828] tabular-nums">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F5F6F7] border border-[#E2E4E8] flex items-center justify-center text-[#17191D]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#17191D] mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#494F57] leading-relaxed mb-6">
                    {step.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EEF0F3] text-xs text-[#737B85] font-medium">
                  {step.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Factual Disclaimer: No fabricated dispatch minute promises */}
        <div className="p-4 rounded-xl bg-white border border-[#E2E4E8] flex items-start gap-3 max-w-3xl mx-auto text-xs text-[#737B85]">
          <AlertCircle className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#17191D]">Operational Notice:</strong> Dispatch response times and pricing depend on current highway traffic, vehicle location, weather, and the specific equipment required. Exact arrival estimates and complete fee quotes are confirmed directly during your phone call.
          </p>
        </div>
      </Container>
    </section>
  );
}
