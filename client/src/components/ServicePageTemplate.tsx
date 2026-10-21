import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  Wrench,
  ShieldCheck,
  Phone,
  MessageCircle,
  HelpCircle,
  ArrowRight,
  Building,
  FileText,
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
  const whatsappUrl = getServiceWhatsAppUrl(service.title);

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
      <section className="relative bg-navy-900 text-white py-14 sm:py-20 border-b-4 border-safety-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-navy-800 text-safety-400 px-3 py-1 rounded-full text-xs font-semibold">
                <span>{service.standardsFollowed.join(' &bull; ')}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {service.tagline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="bg-safety-600 hover:bg-safety-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-lg shadow transition-transform transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  Request Service Quote
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversion('whatsapp_click', { category: 'Service Page', label: service.slug })}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-lg shadow flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Inquiry
                </a>

                <a
                  href={`tel:${BUSINESS_CONFIG.phone.raw}`}
                  onClick={() => trackConversion('phone_click', { category: 'Service Page', label: service.slug })}
                  className="bg-navy-800 hover:bg-navy-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm px-4 py-3 rounded-lg flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-safety-500" />
                  <span>Call {BUSINESS_CONFIG.phone.display}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-slate-700/60 max-h-72">
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
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-4">
                  Overview & Engineering Approach
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
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
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  We supply, install, and maintain the following equipment components:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-800">
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
                      className="bg-navy-50 text-navy-900 text-xs font-semibold px-3 py-1.5 rounded-full border border-navy-200"
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
                      <h3 className="text-sm font-bold text-navy-900">{faq.question}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Internal Links to Related Services */}
              <div className="pt-8 border-t border-slate-200">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Related Fire Safety & Maintenance Services:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    to="/services/amc-maintenance"
                    className="p-3 rounded-lg border border-slate-200 bg-white hover:border-safety-600 hover:shadow-sm transition-all text-xs font-semibold text-navy-900 flex items-center justify-between"
                  >
                    <span>Annual Maintenance Contracts (AMC)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-safety-600" />
                  </Link>
                  <Link
                    to="/services/fire-extinguisher-supply-refilling"
                    className="p-3 rounded-lg border border-slate-200 bg-white hover:border-safety-600 hover:shadow-sm transition-all text-xs font-semibold text-navy-900 flex items-center justify-between"
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
                  <h3 className="text-lg font-bold text-navy-900">Request Quotation</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    For {service.title} in Faridabad / Delhi NCR
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
                    className="flex items-center gap-2 text-emerald-600 font-bold hover:underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Engineering Desk</span>
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
