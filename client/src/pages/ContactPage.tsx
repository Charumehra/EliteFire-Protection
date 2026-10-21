import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck, CheckCircle } from 'lucide-react';
import { MetaTags } from '../seo/MetaTags';
import { StructuredData } from '../seo/StructuredData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { QuoteForm } from '../components/QuoteForm';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Contact Elite Fire and Protection | Faridabad & Delhi NCR"
        description="Get in touch with Elite Fire and Protection for fire alarm installation, hydrant systems, fire extinguisher refilling, and AMC services in Faridabad & Delhi NCR."
        canonicalPath="/contact"
      />
      <StructuredData type="LocalBusiness" />

      <Breadcrumbs items={[{ label: 'Contact Us', path: '/contact' }]} />

      {/* Header */}
      <section className="bg-navy-900 text-white py-14 sm:py-20 border-b-4 border-safety-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <span className="text-xs font-bold text-safety-400 uppercase tracking-wider">
            Direct Engineering Inquiries
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
            Contact Elite Fire and Protection
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Reach our fire protection engineers for quotations, on-site hazard surveys, extinguisher pickup schedules, or emergency AMC assistance across Faridabad and Delhi NCR.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details & Service Areas */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-2">Direct Contact Channels</h2>
                <p className="text-xs text-slate-600 mb-6">
                  For immediate support or quotation requests, connect via phone, WhatsApp, or email.
                </p>

                <div className="space-y-4">
                  {/* Phone */}
                  <a
                    href={`tel:${BUSINESS_CONFIG.phone.raw}`}
                    className="flex items-start gap-3.5 p-4 rounded-xl border border-slate-200 hover:border-safety-600 bg-slate-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-100 text-safety-600 flex items-center justify-center flex-shrink-0 group-hover:bg-safety-600 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                        Phone Call
                      </span>
                      <span className="text-sm font-bold text-navy-900 group-hover:text-safety-600">
                        {BUSINESS_CONFIG.phone.display}
                      </span>
                      <span className="block text-[11px] text-slate-500 mt-0.5">
                        Mon – Sat, 9:00 AM – 7:00 PM
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3.5 p-4 rounded-xl border border-slate-200 hover:border-emerald-600 bg-slate-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                        WhatsApp Click-to-Chat
                      </span>
                      <span className="text-sm font-bold text-navy-900 group-hover:text-emerald-600">
                        Chat on WhatsApp
                      </span>
                      <span className="block text-[11px] text-slate-500 mt-0.5">
                        Instant photo sharing & quotation requests
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${BUSINESS_CONFIG.email.primary}`}
                    className="flex items-start gap-3.5 p-4 rounded-xl border border-slate-200 hover:border-safety-600 bg-slate-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-navy-100 text-navy-900 flex items-center justify-center flex-shrink-0 group-hover:bg-navy-900 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                        Email Address
                      </span>
                      <span className="text-sm font-bold text-navy-900 group-hover:text-safety-600 break-all">
                        {BUSINESS_CONFIG.email.primary}
                      </span>
                      <span className="block text-[11px] text-slate-500 mt-0.5">
                        Send blueprints, BOQ documents & RFP tenders
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Operating Hours & Physical Facility */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-safety-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900 block text-xs">Operating Hours:</strong>
                    <span>{BUSINESS_CONFIG.hours.regular}</span>
                    <br />
                    <span>{BUSINESS_CONFIG.hours.sunday}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                  <MapPin className="w-4 h-4 text-safety-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900 block text-xs">Operational Facility / Hub:</strong>
                    <span>{BUSINESS_CONFIG.address.formatted}</span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">
                      [Service-Area Business: On-site visits and surveys across NCR]
                    </span>
                  </div>
                </div>
              </div>

              {/* Service Areas Badge */}
              <div className="bg-navy-900 text-white p-6 rounded-2xl border border-slate-800 space-y-2 text-xs">
                <h3 className="font-bold text-sm text-white">Coverage Sectors</h3>
                <p className="text-slate-300 leading-relaxed">
                  <strong>Faridabad:</strong> Sector 58, Sector 59, Sector 24, Sector 25, IMT, Mathura Road, Neharpar, NIT.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  <strong>Delhi NCR:</strong> Okhla Industrial Area (Phases I, II, III), Gurugram corporate complexes, Noida industrial sectors.
                </p>
              </div>
            </div>

            {/* In-Page Quote / Inquiry Form */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
              <div className="mb-6">
                <span className="text-xs font-bold text-safety-600 uppercase tracking-wider">
                  Request a Formal Proposal
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mt-1">
                  Send Your Fire Safety Inquiry
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your facility details below. Our technical team will review and reply promptly.
                </p>
              </div>
              <QuoteForm initialService="Fire Alarm Systems" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
