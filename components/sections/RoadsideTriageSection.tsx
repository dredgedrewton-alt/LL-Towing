import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Shield, MapPin, PhoneCall, CheckCircle } from 'lucide-react';
import { EmergencyCallCTA } from '@/components/ui/EmergencyCallCTA';

export function RoadsideTriageSection() {
  const steps = [
    {
      step: '01',
      icon: Shield,
      title: 'Move to Safety',
      description: 'Engage your hazard warning flashers. If on the highway, remain belted inside the cabin or position yourself safely behind guardrails.',
    },
    {
      step: '02',
      icon: PhoneCall,
      title: 'Call Direct Dispatch',
      description: 'Dial (240) 424-8226 to speak directly with an operator. No automated prompts or robot hold queues.',
    },
    {
      step: '03',
      icon: MapPin,
      title: 'Confirm Location & Quote',
      description: 'Share your mile marker, intersection, or text your smartphone pin. We provide clear, transparent upfront pricing.',
    },
    {
      step: '04',
      icon: CheckCircle,
      title: 'Rapid On-Scene Solution',
      description: 'Our operator arrives with appropriate rigging—whether a flatbed deck, lockout tools, or heavy jump starter.',
    },
  ];

  return (
    <section id="roadside" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2E4E8]">
      <Container>
        <SectionHeading
          kicker="02. Emergency Protocol"
          title="Stranded On The Road? Here Is What To Do Next."
          description="Breakdowns and flat tires are stressful. Follow these four practical steps to stay safe while our recovery units deploy to your location."
        />

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border border-[#E2E4E8] bg-[#F5F6F7] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-extrabold text-[#C62828]">
                      STEP {st.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E4E8] flex items-center justify-center text-[#17191D]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#17191D] mb-2">{st.title}</h3>
                  <p className="text-xs text-[#494F57] leading-relaxed">{st.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Call Banner */}
        <EmergencyCallCTA />
      </Container>
    </section>
  );
}
