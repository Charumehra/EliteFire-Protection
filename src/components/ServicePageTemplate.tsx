import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  Wrench,
  ShieldCheck,
  Phone,
  HelpCircle,
  ArrowRight,
  Building,
  FileText,
  ClipboardList,
} from 'lucide-react';
import { ServiceDetail } from '../data/servicesData';
import { MetaTags } from '../seo/MetaTags';
import { StructuredData } from '../seo/StructuredData';
import { Breadcrumbs } from './Breadcrumbs';
import { QuoteForm } from './QuoteForm';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';
import { trackConversion } from '../utils/analytics';

interface ServicePageTemplateProps {
  service: ServiceDetail;
  onRequestQuote: () => void;
  relatedServiceSlugs: string[];
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  service,
  onRequestQuote,
  relatedServiceSlugs,
}) => {
  const whatsappUrl = getServiceWhatsAppUrl(service.title, 'Faridabad / Delhi NCR');

  return (
    <>
      <MetaTags
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={`/services/${service.slug}`}
        ogImage={service.heroImage}
      />
      <StructuredData type="Service" data={service} />
      <StructuredData type="FAQPage" data={service.faqs} />

      <Breadcrumbs
        items={[
          { label: 'Services', path: '/services' },
          { label: service.title, path: `/services/${service.slug}` },
        ]}
      />

      {/* Hero Header */}
      <section className="relative bg-[#0a0a0c] text-white py-14 sm:py-20 border-b-4 border-safety-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#16161c] border border-safety-600/30 text-safety-400 px-3 py-1 rounded-full text-xs font-bold">
                <img
                  src={BUSINESS_CONFIG.branding.shieldIconPath}
                  alt="Elite Shield"
                  className="w-3.5 h-3.5 object-contain"
                />
                <span>{service.standardsFollowed.join(' &bull; ')}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {service.tagline}
              </p>

              {/* Action Buttons: Quote, WhatsApp, Phone */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="bg-safety-600 hover:bg-safety-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-lg shadow-md transition-transform transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <ClipboardList className="w-4 h-4" />
                  <span>Request Service Quote</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversion('whatsapp_click', { category: 'Service Detail Page', label: service.slug })}
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-lg shadow-md flex items-center gap-2 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 flex-shrink-0"
                  >
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31" />
                  </svg>
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href={`tel:${BUSINESS_CONFIG.phone.raw}`}
                  onClick={() => trackConversion('phone_click', { category: 'Service Detail Page', label: service.slug })}
                  className="bg-white/10 hover:bg-white/15 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm px-4 py-3 rounded-lg flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-safety-500" />
                  <span>Call {BUSINESS_CONFIG.phone.display}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-700 max-h-72">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-10">
              {/* Overview & Technical Description */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3">
                  Overview & Engineering Approach
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  {service.keyHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 flex items-start gap-2.5"
                    >
                      <CheckCircle className="w-4 h-4 text-safety-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 leading-relaxed font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment Covered */}
              <div className="pt-6 border-t border-slate-200">
                <h2 className="text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-safety-600" />
                  <span>Equipment & Systems Covered</span>
                </h2>
                <p className="text-xs text-slate-600 mb-4">
                  We supply, install, and service the following equipment components:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
                  {service.equipmentCovered.map((equip, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded border border-slate-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-safety-600 flex-shrink-0" />
                      <span>{equip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scope of Works & Testing Details */}
              <div className="pt-6 border-t border-slate-200">
                <h2 className="text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-safety-600" />
                  <span>Scope of Works, Inspection & Testing</span>
                </h2>
                <div className="space-y-2.5">
                  {service.worksIncluded.map((work, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="text-xs font-bold text-safety-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded flex-shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <span className="leading-relaxed">{work}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits & Customer Advantages */}
              <div className="pt-6 border-t border-slate-200">
                <h2 className="text-xl font-bold text-navy-900 mb-3">
                  Key Operational & Compliance Benefits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <div className="text-xs font-bold text-navy-900 flex items-center gap-1.5 mb-1">
                        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>Advantage #{idx + 1}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Relevant Industries */}
              <div className="pt-6 border-t border-slate-200">
                <h2 className="text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
                  <Building className="w-5 h-5 text-safety-600" />
                  <span>Target Occupancies & Relevant Industries</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {service.relevantIndustries.map((ind, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 text-navy-900 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service-Specific FAQs */}
              <div className="pt-6 border-t border-slate-200">
                <h2 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-safety-600" />
                  <span>Frequently Asked Questions: {service.title}</span>
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                      <h3 className="text-xs sm:text-sm font-bold text-navy-900">{faq.question}</h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Services Links */}
              <div className="pt-8 border-t border-slate-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Related Fire Safety & Maintenance Services:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    to="/services/amc-maintenance"
                    className="p-3.5 rounded-lg border border-slate-200 bg-white hover:border-safety-600 hover:shadow-sm transition-all text-xs font-semibold text-navy-900 flex items-center justify-between"
                  >
                    <span>Annual Maintenance Contracts (AMC)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-safety-600" />
                  </Link>
                  <Link
                    to="/services/fire-extinguisher-supply-refilling"
                    className="p-3.5 rounded-lg border border-slate-200 bg-white hover:border-safety-600 hover:shadow-sm transition-all text-xs font-semibold text-navy-900 flex items-center justify-between"
                  >
                    <span>Extinguisher Supply & Refilling</span>
                    <ArrowRight className="w-3.5 h-3.5 text-safety-600" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar with Quote Form and Quick Contact */}
            <div className="lg:col-span-4 space-y-6">
              {/* In-Page Quote Form */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm sticky top-28">
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-safety-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded uppercase tracking-wider">
                    Fast Quotation
                  </span>
                  <h3 className="text-lg font-bold text-navy-900 mt-1">Request Quotation</h3>
                  <p className="text-xs text-slate-500">
                    For {service.title} in Faridabad / NCR
                  </p>
                </div>
                <QuoteForm initialService={service.title} />

                {/* Direct Assistance Box */}
                <div className="mt-6 pt-5 border-t border-slate-200 text-xs space-y-2">
                  <p className="font-bold text-slate-700">Need Immediate Advice?</p>
                  <a
                    href={`tel:${BUSINESS_CONFIG.phone.raw}`}
                    className="flex items-center gap-2 text-safety-600 font-bold hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Direct: {BUSINESS_CONFIG.phone.display}</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#25D366] font-bold hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3.5 h-3.5 flex-shrink-0"
                    >
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31" />
                    </svg>
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
