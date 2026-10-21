import React from 'react';
import { Link } from 'react-router-dom';
import {
  BellRing,
  Flame,
  ShieldCheck,
  Zap,
  Camera,
  Wrench,
  ArrowRight,
  ClipboardList,
} from 'lucide-react';
import { MetaTags } from '../seo/MetaTags';
import { StructuredData } from '../seo/StructuredData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SERVICES_DATA } from '../data/servicesData';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { getWhatsAppUrl, getServiceWhatsAppUrl } from '../utils/whatsapp';
import { trackConversion } from '../utils/analytics';

interface ServicesPageProps {
  onRequestQuote: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onRequestQuote }) => {
  const serviceIcons = {
    'fire-alarm-systems': BellRing,
    'fire-fighting-systems': Flame,
    'fire-extinguisher-supply-refilling': ShieldCheck,
    'electrical-systems': Zap,
    'cctv-systems': Camera,
    'amc-maintenance': Wrench,
  };

  return (
    <>
      <MetaTags
        title="Fire Protection & Safety Services in Faridabad & Delhi NCR | Elite Fire"
        description="Comprehensive life safety solutions: addressable fire alarm systems, fire hydrants, sprinkler networks, fire extinguisher supply & refilling, electrical maintenance, CCTV & AMC."
        canonicalPath="/services"
      />
      <StructuredData type="LocalBusiness" />

      <Breadcrumbs items={[{ label: 'Services', path: '/services' }]} />

      {/* Header */}
      <section className="bg-[#0a0a0c] text-white py-14 sm:py-20 border-b-4 border-safety-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#16161c] border border-safety-600/30 text-safety-400 px-3 py-1 rounded-full text-xs font-bold mb-3">
            <img
              src={BUSINESS_CONFIG.branding.shieldIconPath}
              alt="Elite Shield"
              className="w-3.5 h-3.5 object-contain"
            />
            <span>Turnkey Engineering Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Fire Safety, Protection & Facility Maintenance Services
          </h1>
          <p className="text-xs sm:text-base text-slate-300 mt-4 leading-relaxed">
            Turnkey system engineering, supply, testing, and preventative maintenance adhering to National Building Code (NBC 2016) and Bureau of Indian Standards (BIS).
          </p>
        </div>
      </section>

      {/* Grid of all 6 services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(SERVICES_DATA).map((key) => {
              const svc = SERVICES_DATA[key];
              const IconComponent = serviceIcons[key as keyof typeof serviceIcons] || ShieldCheck;
              const serviceWhatsAppUrl = getServiceWhatsAppUrl(svc.title);

              return (
                <article
                  key={svc.id}
                  className="bg-white rounded-xl shadow-card hover:shadow-hover transition-all duration-200 border border-slate-200 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={svc.heroImage}
                        alt={svc.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/85 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 bg-[#0a0a0c]/90 text-white p-2 rounded-lg border border-slate-700/60 shadow">
                        <IconComponent className="w-5 h-5 text-safety-500" />
                      </div>
                      <span className="absolute bottom-3 left-4 text-xs font-semibold bg-safety-600 text-white px-2.5 py-1 rounded">
                        {svc.standardsFollowed[0] || 'BIS Certified'}
                      </span>
                    </div>

                    <div className="p-6">
                      <h2 className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-safety-600 transition-colors">
                        <Link to={`/services/${svc.slug}`}>{svc.title}</Link>
                      </h2>
                      <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                        {svc.shortDescription}
                      </p>

                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Key Equipment & Scope:
                        </p>
                        <ul className="space-y-1 text-xs text-slate-700">
                          {svc.equipmentCovered.slice(0, 3).map((item, idx) => (
                            <li key={idx} className="flex items-center gap-1.5 truncate">
                              <span className="w-1.5 h-1.5 rounded-full bg-safety-600 flex-shrink-0" />
                              <span className="truncate">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between gap-2 mt-4">
                    <Link
                      to={`/services/${svc.slug}`}
                      className="text-xs font-bold text-navy-900 hover:text-safety-600 flex items-center gap-1"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 text-safety-600" />
                    </Link>

                    <a
                      href={serviceWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackConversion('whatsapp_click', {
                          category: 'Services Directory',
                          service: svc.title,
                        })
                      }
                      className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm transition-colors"
                      aria-label={`Enquire on WhatsApp about ${svc.title}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-3.5 h-3.5"
                      >
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31" />
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">Need a Customized Fire Safety Package?</h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            From single-component extinguisher refilling to full-facility turnkey hydrant and sprinkler installations, our team delivers transparent estimates and certified engineering.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={onRequestQuote}
              className="bg-safety-600 hover:bg-safety-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow flex items-center gap-2"
            >
              <ClipboardList className="w-4 h-4" />
              <span>Get Itemized Quotation</span>
            </button>
            <a
              href={getWhatsAppUrl('Hello Elite Fire, I would like to enquire about your overall fire safety services in Faridabad/Delhi NCR.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 flex-shrink-0"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31" />
              </svg>
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
