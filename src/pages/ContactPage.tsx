import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
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
      <section className="bg-[#0a0a0c] text-white py-14 sm:py-20 border-b-4 border-safety-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#16161c] border border-safety-600/30 text-safety-400 px-3 py-1 rounded-full text-xs font-bold mb-3">
            <img
              src={BUSINESS_CONFIG.branding.shieldIconPath}
              alt="Elite Shield"
              className="w-3.5 h-3.5 object-contain"
            />
            <span>Direct Engineering Inquiries</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Contact Elite Fire and Protection
          </h1>
          <p className="text-xs sm:text-base text-slate-300 mt-4 leading-relaxed">
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
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                        Official WhatsApp
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
                        Official Email Address
                      </span>
                      <span className="text-sm font-bold text-navy-900 group-hover:text-safety-600 break-all">
                        {BUSINESS_CONFIG.email.primary}
                      </span>
                      <span className="block text-[11px] text-slate-500 mt-0.5">
                        Send blueprints, BOQ documents & tenders
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
                      [Service-Area Business: On-site surveys across NCR]
                    </span>
                  </div>
                </div>
              </div>

              {/* Service Areas Badge */}
              <div className="bg-[#0a0a0c] text-white p-6 rounded-2xl border border-slate-800 space-y-2 text-xs">
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
                <span className="text-[11px] font-bold text-safety-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded uppercase tracking-wider">
                  Direct Lead Desk
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mt-1">
                  Send Your Fire Safety Inquiry
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your facility details below. You will be able to review and send directly via WhatsApp.
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
