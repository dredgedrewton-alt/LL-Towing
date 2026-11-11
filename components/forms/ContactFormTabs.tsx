'use client';

import React, { useState } from 'react';
import { QuoteRequestForm } from './QuoteRequestForm';
import { GeneralContactForm } from './GeneralContactForm';
import { CommercialInquiryForm } from './CommercialInquiryForm';
import { FileText, MessageSquare, Building2 } from 'lucide-react';

type TabType = 'quote' | 'general' | 'commercial';

export function ContactFormTabs() {
  const [activeTab, setActiveTab] = useState<TabType>('quote');

  return (
    <div className="w-full">
      {/* Tab Navigation Controls */}
      <div
        role="tablist"
        aria-label="Contact options"
        className="flex flex-wrap p-1.5 rounded-2xl bg-[#E2E4E8]/60 mb-6 gap-1"
      >
        <button
          type="button"
          role="tab"
          id="tab-quote"
          aria-selected={activeTab === 'quote'}
          aria-controls="panel-quote"
          onClick={() => setActiveTab('quote')}
          className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer min-h-[44px] ${
            activeTab === 'quote'
              ? 'bg-white text-[#17191D] shadow-sm'
              : 'text-[#494F57] hover:text-[#17191D] hover:bg-white/50'
          }`}
        >
          <FileText className={`w-4 h-4 ${activeTab === 'quote' ? 'text-[#C62828]' : 'text-[#737B85]'}`} />
          <span>Request Quote</span>
        </button>

        <button
          type="button"
          role="tab"
          id="tab-general"
          aria-selected={activeTab === 'general'}
          aria-controls="panel-general"
          onClick={() => setActiveTab('general')}
          className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer min-h-[44px] ${
            activeTab === 'general'
              ? 'bg-white text-[#17191D] shadow-sm'
              : 'text-[#494F57] hover:text-[#17191D] hover:bg-white/50'
          }`}
        >
          <MessageSquare className={`w-4 h-4 ${activeTab === 'general' ? 'text-[#C62828]' : 'text-[#737B85]'}`} />
          <span>General Enquiry</span>
        </button>

        <button
          type="button"
          role="tab"
          id="tab-commercial"
          aria-selected={activeTab === 'commercial'}
          aria-controls="panel-commercial"
          onClick={() => setActiveTab('commercial')}
          className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer min-h-[44px] ${
            activeTab === 'commercial'
              ? 'bg-white text-[#17191D] shadow-sm'
              : 'text-[#494F57] hover:text-[#17191D] hover:bg-white/50'
          }`}
        >
          <Building2 className={`w-4 h-4 ${activeTab === 'commercial' ? 'text-[#C62828]' : 'text-[#737B85]'}`} />
          <span>Commercial / B2B</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div
        role="tabpanel"
        id="panel-quote"
        aria-labelledby="tab-quote"
        hidden={activeTab !== 'quote'}
      >
        {activeTab === 'quote' && <QuoteRequestForm />}
      </div>

      <div
        role="tabpanel"
        id="panel-general"
        aria-labelledby="tab-general"
        hidden={activeTab !== 'general'}
      >
        {activeTab === 'general' && <GeneralContactForm />}
      </div>

      <div
        role="tabpanel"
        id="panel-commercial"
        aria-labelledby="tab-commercial"
        hidden={activeTab !== 'commercial'}
      >
        {activeTab === 'commercial' && <CommercialInquiryForm />}
      </div>
    </div>
  );
}
