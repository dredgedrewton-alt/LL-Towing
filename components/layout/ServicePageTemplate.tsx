'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs, BreadcrumbItem } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { ResponsiveImageContainer } from '@/components/ui/ResponsiveImageContainer';
import { QuoteModal } from '@/components/ui/QuoteModal';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seo/schema';
import { ServicePageData } from '@/lib/content/servicePagesData';
import { businessConfig } from '@/lib/config/business';
import {
  Phone,
  ShieldCheck,
  MapPin,
  Clock,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

interface ServicePageTemplateProps {
  data: ServicePageData;
  breadcrumbs: BreadcrumbItem[];
}

export function ServicePageTemplate({ data, breadcrumbs }: ServicePageTemplateProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    ...breadcrumbs.map((b) => ({
      name: b.label,
      url: b.href || `/${data.slug}`,
    })),
  ]);

  const serviceSchema = generateServiceSchema({
    name: data.title,
    description: data.serviceSummary,
    slug: data.slug,
    serviceType: data.title,
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <JsonLd data={[breadcrumbSchema, serviceSchema]} />

      {/* 1. Breadcrumbs Header */}
      <div className="bg-[#F5F6F7] border-b border-[#E2E4E8] py-3">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </div>

      {/* 2. Hero with Clear Service Headline & Immediate Click-To-Call CTA */}
      <section className="relative overflow-hidden bg-white border-b border-[#E2E4E8] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              {/* Kicker */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C62828] mb-3">
                <span className="w-1.5 h-1.5 rounded-none bg-[#C62828]" />
                <span>{data.kicker}</span>
                <span aria-hidden="true" className="text-[#A3AAB2]">·</span>
                <span className="text-[#494F57]">MD · DC · VA</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17191D] tracking-tight text-balance leading-[1.15] mb-4">
                {data.heroHeadline}
              </h1>

              {/* Subhead */}
              <p className="text-base sm:text-lg text-[#494F57] leading-relaxed mb-8 max-w-2xl">
                {data.heroSubhead}
              </p>

              {/* Immediate Click-To-Call Primary CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
                <Button
                  variant="emergency"
                  size="lg"
                  href={businessConfig.contact.phone.telHref}
                  data-track-cta={`call-dispatch-${data.slug}-hero`}
                  className="text-base py-3.5"
                >
                  <Phone className="w-5 h-5 mr-2.5 animate-pulse shrink-0" />
                  <span className="hidden sm:inline">Call Dispatch ({businessConfig.contact.phone.display})</span>
                  <span className="sm:hidden">Call Dispatch ({businessConfig.contact.phone.display})</span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsQuoteOpen(true)}
                  data-track-cta={`open-quote-${data.slug}-hero`}
                  className="text-base"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-[#737B85]" />
                </Button>
              </div>

              {/* Quick Trust Indicators Strip */}
              <div className="pt-4 border-t border-[#EEF0F3] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#737B85]">
                <span className="flex items-center gap-1.5 font-medium text-[#17191D]">
                  <Clock className="w-3.5 h-3.5 text-[#C62828]" />
                  24/7 Roadside Readiness
                </span>
                <span aria-hidden="true" className="text-[#A3AAB2]">·</span>
                <span>Upfront Rate Quotes</span>
                <span aria-hidden="true" className="text-[#A3AAB2]">·</span>
                <span>Beltsville & Laurel Hubs</span>
              </div>
            </div>

            {/* Visual Media Carrier */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#E2E4E8] shadow-md bg-[#17191D]">
                <ResponsiveImageContainer
                  slotId={data.mediaSlotId}
                  label={data.title}
                  aspectRatio="4:3"
                  priority={true}
                  className="w-full min-h-[280px] sm:min-h-[340px] border-none"
                />
                <div className="p-4 bg-[#17191D] text-white border-t border-[#2B303A] flex items-center justify-between text-xs">
                  <span className="font-semibold">{data.title} Operational Unit</span>
                  <span className="text-[#EF5350] font-mono">24/7 On-Call</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Service Explanation */}
      <section className="py-12 sm:py-16 bg-[#F5F6F7] border-b border-[#E2E4E8]">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2">
              Service Overview
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] tracking-tight mb-4 text-balance">
              {data.overviewHeadline || (data.title.toLowerCase().endsWith('services') ? `What Are ${data.title}?` : `What Is ${data.title}?`)}
            </h3>
            <p className="text-base sm:text-lg text-[#494F57] leading-relaxed mb-6">
              {data.serviceSummary}
            </p>

            <div className="p-5 rounded-xl bg-white border border-[#E2E4E8]">
              <h4 className="text-sm font-bold text-[#17191D] mb-3">
                How LL Towing Delivers This Service:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#494F57]">
                {data.howWeHelp.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Customer Problems and Use Cases */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E4E8]">
        <Container>
          <div className="max-w-3xl mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2">
              Situations & Scenarios
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] tracking-tight text-balance">
              {data.useCasesTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.commonSituations.map((situation, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#F5F6F7] border border-[#E2E4E8] flex items-start gap-3"
              >
                <div className="w-7 h-7 rounded-lg bg-white border border-[#E2E4E8] flex items-center justify-center text-[#C62828] shrink-0 font-mono text-xs font-bold">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-[#494F57] leading-relaxed">
                  {situation}
                </p>
              </div>
            ))}
          </div>

          {/* What Customer Needs to Do */}
          <div className="mt-8 p-6 rounded-xl bg-[#17191D] text-white border border-[#2B303A]">
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#EF5350]" />
              <span>What You Need To Do Right Now:</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-[#A3AAB2]">
              {data.customerActionSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#EF5350] font-bold">·</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 5. Service Process: How It Works */}
      <section className="py-12 sm:py-16 bg-[#F5F6F7] border-b border-[#E2E4E8]">
        <Container>
          <div className="max-w-3xl mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2">
              Step-By-Step Process
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] tracking-tight text-balance">
              How Our {data.title} Works
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.processSteps.map((pStep, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#E2E4E8] flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xl font-extrabold text-[#C62828] mb-3">
                    STEP {pStep.step}
                  </div>
                  <h4 className="text-base font-bold text-[#17191D] mb-2">
                    {pStep.title}
                  </h4>
                  <p className="text-xs text-[#494F57] leading-relaxed">
                    {pStep.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Child Services Sub-Navigation (if pillar page) */}
      {data.childServices && data.childServices.length > 0 && (
        <section className="py-12 bg-white border-b border-[#E2E4E8]">
          <Container>
            <div className="max-w-3xl mb-6">
              <h3 className="text-lg font-bold text-[#17191D]">
                Specific {data.title} Options:
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {data.childServices.map((child, idx) => (
                <Link
                  key={idx}
                  href={child.route}
                  className="p-5 rounded-xl bg-[#F5F6F7] border border-[#E2E4E8] hover:border-[#C62828] hover:bg-white transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-sm font-bold text-[#17191D] group-hover:text-[#C62828] transition-colors mb-1">
                      {child.title}
                    </h4>
                    <p className="text-xs text-[#494F57] leading-relaxed mb-3">
                      {child.description}
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-[#C62828] flex items-center gap-1">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 6. Trust & Reassurance */}
      <section className="py-12 bg-[#17191D] text-white border-b border-[#2B303A]">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.trustPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#242830] border border-[#2B303A] flex items-start gap-3"
              >
                <ShieldCheck className="w-5 h-5 text-[#EF5350] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#A3AAB2] leading-relaxed font-medium">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Frequently Asked Questions */}
      {data.faqs.length > 0 && (
        <section className="py-12 sm:py-16 bg-white border-b border-[#E2E4E8]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2">
                  Frequently Asked Questions
                </h2>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17191D]">
                  Common Questions About {data.title}
                </h3>
              </div>

              <div className="space-y-3">
                {data.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-[#E2E4E8] bg-white overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#17191D] hover:text-[#C62828] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="flex items-center gap-2.5">
                          <HelpCircle className="w-4 h-4 text-[#C62828] shrink-0" />
                          <span>{faq.question}</span>
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#737B85] shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#737B85] shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#494F57] leading-relaxed border-t border-[#EEF0F3] bg-[#F5F6F7]/50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 8. Local Service-Area Information */}
      <section className="py-12 bg-[#F5F6F7] border-b border-[#E2E4E8]">
        <Container>
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E4E8] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C62828]">
                <MapPin className="w-4 h-4" />
                <span>Geographical Coverage</span>
              </div>
              <h4 className="text-xl font-bold text-[#17191D]">
                Where We Dispatch {data.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#494F57] leading-relaxed">
                {data.coverageNote} Primary field units operate from Beltsville and Laurel with active highway patrols along I-95, I-495 (Capital Beltway), and US-1.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <Link
                href="/service-areas"
                className="text-xs font-bold text-[#17191D] hover:text-[#C62828] underline underline-offset-4"
              >
                View All Service Areas →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. Final Conversion CTA */}
      <section className="py-12 sm:py-16 bg-[#17191D] text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 text-balance">
              Ready for Fast, Professional {data.title}?
            </h3>
            <p className="text-xs sm:text-sm text-[#A3AAB2] mb-6 leading-relaxed">
              Speak directly with our local Maryland/DC dispatch desk. No automated menus, transparent pricing, and careful handling.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button
                variant="emergency"
                size="lg"
                href={businessConfig.contact.phone.telHref}
                data-track-cta={`call-dispatch-${data.slug}-bottom`}
                className="w-full sm:w-auto text-base"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Call {businessConfig.contact.phone.display}</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsQuoteOpen(true)}
                data-track-cta={`open-quote-${data.slug}-bottom`}
                className="w-full sm:w-auto text-base bg-[#242830] text-white border-[#2B303A] hover:bg-[#2B303A]"
              >
                <span>Request a Quote</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
