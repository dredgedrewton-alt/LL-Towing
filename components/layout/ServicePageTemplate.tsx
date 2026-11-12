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
  Clock,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ShieldCheck,
  FileText,
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
      <div className="bg-[#F5F6F7] border-b border-[#E2E4E8] py-2.5">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </div>

      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden bg-white border-b border-[#E2E4E8] py-8 sm:py-12 lg:py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              {/* Kicker */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2.5">
                <span className="w-1.5 h-1.5 rounded-none bg-[#C62828]" />
                <span>{data.kicker}</span>
                <span aria-hidden="true" className="text-[#A3AAB2]">·</span>
                <span className="text-[#494F57]">MD · DC · VA</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17191D] tracking-tight text-balance leading-[1.15] mb-3">
                {data.heroHeadline}
              </h1>

              {/* Subhead - One Concise Supporting Sentence */}
              <p className="text-base sm:text-lg text-[#494F57] leading-relaxed mb-6 max-w-2xl">
                {data.heroSubhead}
              </p>

              {/* Primary Call Action & Secondary Action */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5">
                <Button
                  variant="emergency"
                  size="lg"
                  href={businessConfig.contact.phone.telHref}
                  data-track-cta={`call-dispatch-${data.slug}-hero`}
                  className="text-base py-3 px-6 shadow-sm"
                >
                  <Phone className="w-5 h-5 mr-2 animate-pulse shrink-0" />
                  <span>Call Dispatch ({businessConfig.contact.phone.display})</span>
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

              {/* Quick Trust Indicators */}
              <div className="pt-3.5 border-t border-[#EEF0F3] flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-[#737B85]">
                <span className="flex items-center gap-1.5 font-medium text-[#17191D]">
                  <Clock className="w-3.5 h-3.5 text-[#C62828]" />
                  24/7 Live Readiness
                </span>
                <span aria-hidden="true" className="text-[#A3AAB2]">·</span>
                <span>Upfront Rate Quotes</span>
                <span aria-hidden="true" className="text-[#A3AAB2]">·</span>
                <span>Beltsville & Laurel Hubs</span>
              </div>
            </div>

            {/* Visual Media Carrier with Authentic Client Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#E2E4E8] shadow-sm bg-[#17191D]">
                <ResponsiveImageContainer
                  slotId={data.mediaSlotId}
                  label={data.title}
                  aspectRatio="4:3"
                  priority={true}
                  className="w-full min-h-[260px] sm:min-h-[300px] border-none"
                />
                <div className="p-3.5 bg-[#17191D] text-white border-t border-[#2B303A] flex items-center justify-between text-xs">
                  <span className="font-semibold">{data.title} Unit</span>
                  <span className="text-[#EF5350] font-mono font-bold">24/7 On-Call</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2 — SERVICE OVERVIEW */}
      <section className="py-10 sm:py-14 bg-[#F5F6F7] border-b border-[#E2E4E8]">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-1.5">
              Service Overview
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] tracking-tight mb-3 text-balance">
              {data.overviewHeadline || (data.title.toLowerCase().endsWith('services') ? `What Are ${data.title}?` : `What Is ${data.title}?`)}
            </h3>
            <p className="text-base text-[#494F57] leading-relaxed mb-6">
              {data.serviceSummary}
            </p>

            {/* Child Services Sub-Navigation (if pillar page) */}
            {data.childServices && data.childServices.length > 0 && (
              <div className="mt-6 pt-6 border-t border-[#E2E4E8]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#737B85] mb-3">
                  Specific {data.title} Options:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {data.childServices.map((child, idx) => (
                    <Link
                      key={idx}
                      href={child.route}
                      className="p-4 rounded-xl bg-white border border-[#E2E4E8] hover:border-[#C62828] transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <h5 className="text-sm font-bold text-[#17191D] group-hover:text-[#C62828] transition-colors mb-1">
                          {child.title}
                        </h5>
                        <p className="text-xs text-[#737B85] leading-relaxed mb-2">
                          {child.description}
                        </p>
                      </div>
                      <div className="text-xs font-semibold text-[#C62828] flex items-center gap-1">
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* SECTION 3 — KEY CAPABILITIES & EQUIPMENT */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E2E4E8]">
        <Container>
          <div className="max-w-3xl mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-1.5">
              Capabilities & Handling
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] tracking-tight">
              How We Deliver {data.title} Safely
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.howWeHelp.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-[#F5F6F7] border border-[#E2E4E8] flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#C62828] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#494F57] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 4 — TRUST & HELPFUL FAQS */}
      <section className="py-10 sm:py-14 bg-[#F5F6F7] border-b border-[#E2E4E8]">
        <Container>
          {/* Compact Trust Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {data.trustPoints.slice(0, 4).map((point, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#E2E4E8] flex items-start gap-2.5 shadow-xs"
              >
                <ShieldCheck className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                <span className="text-xs text-[#17191D] leading-snug font-medium">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Targeted FAQs */}
          {data.faqs.length > 0 && (
            <div className="max-w-3xl mx-auto pt-4">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#17191D]">
                  Common Questions About {data.title}
                </h3>
              </div>

              <div className="space-y-2.5">
                {data.faqs.slice(0, 3).map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-[#E2E4E8] bg-white overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#17191D] hover:text-[#C62828] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="flex items-center gap-2">
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
                        <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-[#494F57] leading-relaxed border-t border-[#EEF0F3] bg-[#F5F6F7]/50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* SECTION 5 — FINAL HIGH-IMPACT CTA */}
      <section className="py-10 sm:py-14 bg-[#17191D] text-white">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 text-balance">
              Need {data.title}?
            </h3>
            <p className="text-xs sm:text-sm text-[#A3AAB2] mb-5 leading-relaxed">
              Speak directly with our local Maryland/DC dispatch desk. Upfront pricing, 24/7 readiness, and careful vehicle handling.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="emergency"
                size="lg"
                href={businessConfig.contact.phone.telHref}
                data-track-cta={`call-dispatch-${data.slug}-bottom`}
                className="w-full sm:w-auto text-base py-3 px-6"
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
                <FileText className="w-4 h-4 mr-2" />
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
