import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, ShieldCheck, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { MetaTags } from '../../seo/MetaTags';
import { StructuredData } from '../../seo/StructuredData';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { QuoteForm } from '../../components/QuoteForm';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface Props {
  onRequestQuote: () => void;
}

export const FaridabadLocationPage: React.FC<Props> = ({ onRequestQuote }) => {
  const faridabadHubs = [
    {
      name: 'Sector 58 Industrial Area',
      description: 'Heavy engineering, automotive ancillaries, fabrication plants, and metal pressing units.',
    },
    {
      name: 'Sector 59 Industrial Area',
      description: 'Plastics, packaging, electronic assembly, and component manufacturing facilities.',
    },
    {
      name: 'Sector 24 & Sector 25',
      description: 'Core manufacturing hub with diverse chemical processing, machining, and engineering factories.',
    },
    {
      name: 'IMT Faridabad (Industrial Model Township)',
      description: 'Modern logistics warehouses, export units, pharmaceutical plants, and high-tech industrial setups.',
    },
    {
      name: 'Mathura Road Commercial Belt',
      description: 'Showrooms, corporate IT towers, hotels, automotive dealerships, and banking complexes.',
    },
    {
      name: 'Neharpar (Greater Faridabad) & NIT',
      description: 'High-rise residential societies (RWAs), gated townships, hospitals, and educational institutions.',
    },
  ];

  return (
    <>
      <MetaTags
        title="Fire Safety & Protection Services in Faridabad | Elite Fire"
        description="Local fire alarm installation, fire hydrant systems, certified fire extinguisher refilling, and AMC services in Faridabad industrial areas (Sectors 58, 59, 24, 25, IMT)."
        canonicalPath="/locations/faridabad"
      />
      <StructuredData type="LocalBusiness" />

      <Breadcrumbs
        items={[
          { label: 'Locations', path: '/locations/faridabad' },
          { label: 'Faridabad Service Hub', path: '/locations/faridabad' },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-navy-900 text-white py-14 sm:py-20 border-b-4 border-safety-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-navy-800 text-safety-400 px-3 py-1 rounded-full text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-safety-500" />
            <span>Primary Operational Hub</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Fire Safety and Protection Services in Faridabad, Haryana
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Local fire protection contractor providing turnkey fire fighting systems, addressable fire alarm panels, certified fire extinguisher refilling, and regulatory AMC maintenance across Faridabad industrial clusters and residential societies.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              type="button"
              onClick={onRequestQuote}
              className="bg-safety-600 hover:bg-safety-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-lg shadow"
            >
              Get Faridabad Site Estimate
            </button>
            <a
              href={getWhatsAppUrl('Hello Elite Fire, I need fire safety services for our premises in Faridabad.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-lg shadow flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Local Desk
            </a>
          </div>
        </div>
      </section>

      {/* Local Hubs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  Industrial & Commercial Fire Safety Across Faridabad
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  As Faridabad’s manufacturing sector continues expanding across modern townships like IMT and established sectors like 58 and 24, maintaining compliant, certified fire fighting installations is a statutory necessity under the Haryana Fire Service Act and the National Building Code (NBC 2016).
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-bold text-navy-900">Key Sectors and Clusters We Actively Serve:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {faridabadHubs.map((hub, idx) => (
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

              {/* Local Service Advantages */}
              <div className="pt-4 border-t border-slate-200">
                <h3 className="text-base font-bold text-navy-900 mb-3">
                  Why Faridabad Businesses Choose Elite Fire:
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-safety-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Rapid Local Technician Deployment:</strong> Short travel times ensure rapid response for scheduled inspections and emergency breakdown calls.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-safety-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Extinguisher Pickup & Delivery:</strong> Free pickup of discharged or due-for-testing extinguishers across Faridabad industrial belts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-safety-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Local Regulatory Expertise:</strong> Complete familiarity with local Haryana Fire Department inspection requirements and audit formats.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sticky Lead Capture Form */}
            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm sticky top-28">
              <h3 className="text-lg font-bold text-navy-900 mb-1">
                Book Faridabad On-Site Inspection
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Schedule a technician visit to assess your facility in Faridabad
              </p>
              <QuoteForm initialService="Fire Fighting Systems" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
