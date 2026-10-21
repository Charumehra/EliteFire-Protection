import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { MetaTags } from '../seo/MetaTags';
import { StructuredData } from '../seo/StructuredData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SERVICES_DATA } from '../data/servicesData';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ServicesPageProps {
  onRequestQuote: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onRequestQuote }) => {
  const serviceKeys = Object.keys(SERVICES_DATA);

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
      <section className="bg-navy-900 text-white py-14 sm:py-20 border-b-4 border-safety-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold text-safety-400 uppercase tracking-wider">
            Life Safety Capabilities
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
            Fire Safety, Protection & Facility Maintenance Services
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Turnkey system engineering, supply, testing, and preventative maintenance adhering to National Building Code (NBC 2016) and Bureau of Indian Standards (BIS).
          </p>
        </div>
      </section>

      {/* Grid of all 6 services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceKeys.map((key) => {
              const svc = SERVICES_DATA[key];
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
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-4 text-xs font-semibold bg-safety-600 text-white px-2.5 py-1 rounded">
                        {svc.standardsFollowed[0] || 'BIS Certified'}
                      </span>
                    </div>

                    <div className="p-6">
                      <h2 className="text-lg font-bold text-navy-900 group-hover:text-safety-600 transition-colors">
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
                            <li key={idx} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-safety-600 flex-shrink-0" />
                              <span className="truncate">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                    <Link
                      to={`/services/${svc.slug}`}
                      className="text-xs font-bold text-navy-900 hover:text-safety-600 flex items-center gap-1"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 text-safety-600" />
                    </Link>
                    <button
                      type="button"
                      onClick={onRequestQuote}
                      className="text-xs font-bold text-safety-600 hover:text-safety-700 underline"
                    >
                      Request Quote
                    </button>
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
          <h2 className="text-2xl font-bold text-navy-900">Need a Customized Fire Safety Package?</h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            From single-component extinguisher refilling to full-facility turnkey hydrant and sprinkler installations, our team delivers transparent estimates and certified engineering.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={onRequestQuote}
              className="bg-safety-600 hover:bg-safety-700 text-white font-bold text-sm px-6 py-3 rounded-lg shadow"
            >
              Get Itemized Quotation
            </button>
            <a
              href={getWhatsAppUrl('Hello Elite Fire, I would like to enquire about your overall fire safety services in Faridabad/Delhi NCR.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-lg shadow flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
