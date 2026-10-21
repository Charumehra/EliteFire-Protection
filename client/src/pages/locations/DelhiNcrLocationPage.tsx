import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { MetaTags } from '../../seo/MetaTags';
import { StructuredData } from '../../seo/StructuredData';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { QuoteForm } from '../../components/QuoteForm';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface Props {
  onRequestQuote: () => void;
}

export const DelhiNcrLocationPage: React.FC<Props> = ({ onRequestQuote }) => {
  const ncrHubs = [
    {
      name: 'Okhla Industrial Area (Phases I, II, III)',
      description: 'Garment manufacturing, packaging, IT data centers, printing presses, and logistics depots located just across the Haryana-Delhi border.',
    },
    {
      name: 'Gurugram Commercial & Cyber Belts',
      description: 'Corporate office towers, BPO complexes, multi-tenant IT parks, and luxury high-rise condominium complexes along Golf Course Road and NH-48.',
    },
    {
      name: 'Noida & Greater Noida Industrial Sectors',
      description: 'Electronics manufacturing, software campuses, and modern warehousing logistics centers requiring zoned fire alarm networks.',
    },
    {
      name: 'Mohan Cooperative & South Delhi Corridors',
      description: 'Automobile showrooms, retail headquarters, healthcare facilities, and private nursing homes.',
    },
  ];

  return (
    <>
      <MetaTags
        title="Fire Protection & Safety Services Delhi NCR | Elite Fire"
        description="Commercial fire alarm installation, automatic sprinkler networks, fire hydrant maintenance, and AMC services across Delhi NCR (Okhla, Gurugram, Noida)."
        canonicalPath="/locations/delhi-ncr"
      />
      <StructuredData type="LocalBusiness" />

      <Breadcrumbs
        items={[
          { label: 'Locations', path: '/locations/delhi-ncr' },
          { label: 'Delhi NCR Regional Coverage', path: '/locations/delhi-ncr' },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-navy-900 text-white py-14 sm:py-20 border-b-4 border-safety-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-navy-800 text-safety-400 px-3 py-1 rounded-full text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-safety-500" />
            <span>Regional Commercial & Industrial Coverage</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Commercial Fire Safety Solutions Across Delhi NCR
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Providing commercial complexes, corporate headquarters, and manufacturing plants across the Delhi National Capital Region with engineered life-safety systems, NBC compliance audits, and scheduled preventative AMC maintenance.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              type="button"
              onClick={onRequestQuote}
              className="bg-safety-600 hover:bg-safety-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-lg shadow"
            >
              Request NCR Facility Consultation
            </button>
            <a
              href={getWhatsAppUrl('Hello Elite Fire, I would like to inquire about fire safety services for our facility in Delhi NCR.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-lg shadow flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp NCR Desk
            </a>
          </div>
        </div>
      </section>

      {/* NCR Corridors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  Multi-Facility Fire Safety Across Commercial NCR
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Managing life safety across multi-location facilities in Delhi NCR requires a dependable engineering contractor capable of maintaining uniform standards across corporate towers, manufacturing plants, and warehousing facilities.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-bold text-navy-900">Actively Served NCR Corridors:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ncrHubs.map((hub, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <h4 className="text-sm font-bold text-navy-900 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-safety-600 flex-shrink-0" />
                        <span>{hub.name}</span>
                      </h4>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        {hub.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Commitments */}
              <div className="pt-4 border-t border-slate-200">
                <h3 className="text-base font-bold text-navy-900 mb-3">
                  Our Regional Service Commitments:
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-safety-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Turnkey System Integration:</strong> Seamless coordination of addressable fire alarms, sprinklers, clean agent gas systems, and CCTV under one engineering umbrella.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-safety-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Scheduled Quarterly Audits:</strong> Standardized engineering check-sheets maintained for all facility managers across NCR sites.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-safety-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Centralized Billing & Reporting:</strong> Simplified contract administration for enterprises managing multiple regional buildings.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Lead Form */}
            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm sticky top-28">
              <h3 className="text-lg font-bold text-navy-900 mb-1">
                Book NCR Site Survey
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Schedule a fire engineer visit for your Delhi NCR facility
              </p>
              <QuoteForm initialService="AMC and Maintenance Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
