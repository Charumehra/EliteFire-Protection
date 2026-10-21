import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { MetaTags } from '../seo/MetaTags';
import { StructuredData } from '../seo/StructuredData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GENERAL_FAQS } from '../data/faqData';

interface FaqPageProps {
  onRequestQuote: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onRequestQuote }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <MetaTags
        title="Frequently Asked Questions (FAQ) | Elite Fire and Protection"
        description="Common questions about fire alarm systems, fire extinguisher refilling cycles, Indian Standards (IS 2190, IS 3844, NBC 2016), and fire safety AMC in Faridabad & NCR."
        canonicalPath="/faq"
      />
      <StructuredData type="FAQPage" data={GENERAL_FAQS} />

      <Breadcrumbs items={[{ label: 'FAQ', path: '/faq' }]} />

      <section className="bg-navy-900 text-white py-14 sm:py-20 border-b-4 border-safety-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <span className="text-xs font-bold text-safety-400 uppercase tracking-wider">
            Help & Guidance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Essential information regarding fire compliance, equipment testing intervals, refilling procedures, and annual maintenance contracts.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {GENERAL_FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleIndex(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-navy-900 flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-safety-600 flex-shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still Have Questions Card */}
          <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-4">
            <h2 className="text-xl font-bold text-navy-900">Have a Specific Technical Question?</h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              Our fire safety engineers can assist with equipment sizing, pressure calculations, or compliance audits for your facility.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onRequestQuote}
                className="bg-safety-600 hover:bg-safety-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow inline-flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Speak with an Engineer</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
