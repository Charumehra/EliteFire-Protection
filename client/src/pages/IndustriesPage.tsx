import React from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { MetaTags } from '../seo/MetaTags';
import { StructuredData } from '../seo/StructuredData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { INDUSTRIES_DATA } from '../data/industriesData';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface IndustriesPageProps {
  onRequestQuote: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onRequestQuote }) => {
  return (
    <>
      <MetaTags
        title="Industries We Serve | Fire Safety Solutions Faridabad & NCR"
        description="Targeted life safety systems for factories, warehouses, corporate offices, high-rise societies, hospitals, schools, hotels & retail across Faridabad & Delhi NCR."
        canonicalPath="/industries"
      />
      <StructuredData type="LocalBusiness" />

      <Breadcrumbs items={[{ label: 'Industries We Serve', path: '/industries' }]} />

      {/* Hero Header */}
      <section className="bg-navy-900 text-white py-14 sm:py-20 border-b-4 border-safety-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <span className="text-xs font-bold text-safety-400 uppercase tracking-wider">
            Targeted Facility Engineering
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
            Industries We Serve Across Faridabad & Delhi NCR
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Every facility presents unique fire hazard profiles. We engineer customized life-safety architectures strictly aligned with National Building Code (NBC 2016) occupancy guidelines.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {INDUSTRIES_DATA.map((ind) => (
              <div
                key={ind.id}
                id={ind.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={ind.heroImage}
                      alt={ind.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-xs font-semibold bg-safety-600 text-white px-3 py-1 rounded">
                      {ind.keyRegulations}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <h2 className="text-xl font-bold text-navy-900">{ind.name}</h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {ind.shortDescription}
                    </p>

                    {/* Specific Fire Hazards */}
                    <div className="bg-red-50/70 border border-red-100 rounded-lg p-3.5 space-y-1.5">
                      <p className="text-xs font-bold text-red-800 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-safety-600" />
                        <span>Critical Fire & Life Safety Hazards:</span>
                      </p>
                      <ul className="text-xs text-slate-700 space-y-1 pl-5 list-disc">
                        {ind.fireHazards.map((hz, idx) => (
                          <li key={idx}>{hz}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Recommended Engineering Solutions */}
                    <div className="space-y-1.5 pt-2">
                      <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Recommended System Solutions:
                      </p>
                      <ul className="text-xs text-slate-600 space-y-1.5">
                        {ind.recommendedSolutions.map((sol, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                  <button
                    type="button"
                    onClick={onRequestQuote}
                    className="text-xs font-bold text-safety-600 hover:text-safety-700 flex items-center gap-1"
                  >
                    <span>Request Industry Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={getWhatsAppUrl(`Hello Elite Fire, I would like to inquire about fire safety systems for our ${ind.name} facility.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                  >
                    WhatsApp Specialist
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
