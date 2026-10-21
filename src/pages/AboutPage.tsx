import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, CheckCircle, Phone, ArrowRight, ClipboardList } from 'lucide-react';
import { MetaTags } from '../seo/MetaTags';
import { StructuredData } from '../seo/StructuredData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface AboutPageProps {
  onRequestQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onRequestQuote }) => {
  return (
    <>
      <MetaTags
        title="About Us | Elite Fire and Protection Services Faridabad"
        description="Learn about Elite Fire and Protection: our life-safety engineering mission, IS code compliance, preventative fire maintenance philosophy, and service across Faridabad & Delhi NCR."
        canonicalPath="/about"
      />
      <StructuredData type="LocalBusiness" />

      <Breadcrumbs items={[{ label: 'About Us', path: '/about' }]} />

      {/* Hero Header */}
      <section className="bg-[#0a0a0c] text-white py-14 sm:py-20 border-b-4 border-safety-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#16161c] border border-safety-600/30 text-safety-400 px-3 py-1 rounded-full text-xs font-bold mb-3">
              <img
                src={BUSINESS_CONFIG.branding.shieldIconPath}
                alt="Elite Shield"
                className="w-3.5 h-3.5 object-contain"
              />
              <span>{BUSINESS_CONFIG.tagline}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              About Elite Fire and Protection
            </h1>
            <p className="text-xs sm:text-base text-slate-300 mt-4 leading-relaxed">
              We provide commercial and industrial property owners, factory operators, and facility managers across Faridabad and Delhi NCR with dependable fire detection, water-based suppression, electrical fire risk mitigation, and scheduled maintenance solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-xs sm:text-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-navy-900">
                Engineering Dependable Protection When Every Second Counts
              </h2>
              <p>
                Founded to address the critical need for technical precision and regulatory adherence in the life-safety industry, <strong>Elite Fire and Protection</strong> specializes in complete turnkey fire protection systems. Operating from our primary hub in <strong>Faridabad, Haryana</strong>, we support the manufacturing clusters of Sectors 58, 59, 24, 25, IMT Faridabad, and commercial complexes across the broader Delhi NCR corridor.
              </p>
              <p>
                Too often in facility management, fire protection equipment is treated as a dormant inspection checkmark rather than an active life-saving barrier. Our philosophy is rooted in preventative reliability: fire pumps must start automatically upon pressure loss, alarm loops must isolate localized hazards instantly, and extinguisher cylinders must be hydrostatically certified to discharge at optimal propellant velocity.
              </p>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-red-100 text-safety-600 flex items-center justify-center mb-2.5">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-navy-900 mb-1">Our Mission</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To protect lives, commercial assets, and production continuity through robust fire systems design, uncompromising equipment quality, and disciplined preventative maintenance.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-[#0a0a0c] text-safety-500 flex items-center justify-center mb-2.5">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-navy-900 mb-1">Our Vision</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To be recognized across Delhi NCR as the most dependable and transparent fire engineering partner for industrial plants, logistics parks, and high-rise developments.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-base font-bold text-navy-900 mb-3">
                  Commitment to Quality & Technical Standards
                </h3>
                <p className="text-xs text-slate-600 mb-3">
                  All equipment supplied, installed, and serviced by Elite Fire conforms strictly to relevant Indian Standards (IS Codes) and Part 4 of the National Building Code (NBC 2016):
                </p>
                <div className="space-y-2 text-xs text-slate-700">
                  {BUSINESS_CONFIG.technicalStandards.map((std, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                      <CheckCircle className="w-4 h-4 text-safety-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-navy-900">{std.code}:</strong> {std.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Trust and Operational Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={BUSINESS_CONFIG.branding.shieldIconPath}
                    alt="Elite Shield"
                    className="w-7 h-7 object-contain"
                  />
                  <h3 className="text-base font-bold text-navy-900">
                    The Elite Fire Service Standard
                  </h3>
                </div>
                <ul className="space-y-3 text-xs text-slate-600 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-safety-600 flex-shrink-0 mt-1.5" />
                    <span><strong>Transparent BOQ Estimates:</strong> Clear line-item breakdowns of equipment specifications, pipe gauges, and labor with zero hidden markups.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-safety-600 flex-shrink-0 mt-1.5" />
                    <span><strong>100% Genuine Agents:</strong> Pure Mono Ammonium Phosphate (MAP 50/90) and pure carbon dioxide refilling adhering to IS 2190.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-safety-600 flex-shrink-0 mt-1.5" />
                    <span><strong>Documented AMC Logbooks:</strong> Maintained on-site with technician timestamps for state fire department inspection audits.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-safety-600 flex-shrink-0 mt-1.5" />
                    <span><strong>Direct Engineering Accountability:</strong> Accessible technicians who understand local fire safety norms in Haryana and NCR.</span>
                  </li>
                </ul>

                <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={onRequestQuote}
                    className="w-full bg-safety-600 hover:bg-safety-700 text-white font-bold text-xs py-3 px-4 rounded-lg text-center shadow flex items-center justify-center gap-2"
                  >
                    <ClipboardList className="w-4 h-4" />
                    <span>Request Facility Consultation</span>
                  </button>
                  <a
                    href={getWhatsAppUrl('Hello Elite Fire, I am interested in learning more about your fire safety services and company profile.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs py-3 px-4 rounded-lg text-center flex items-center justify-center gap-2 shadow"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31" />
                    </svg>
                    <span>WhatsApp Engineering Team</span>
                  </a>
                </div>
              </div>

              {/* Service Areas Note */}
              <div className="bg-[#0a0a0c] text-white rounded-2xl p-6 border border-slate-800 text-xs space-y-3">
                <h4 className="font-bold text-sm text-white">Service Footprint</h4>
                <p className="text-slate-300 leading-relaxed">
                  Headquartered in <strong>Faridabad</strong>, serving Sector 58, 59, 24, 25, IMT, Mathura Road, Neharpar, and selected corporate/industrial facilities across <strong>Delhi NCR</strong> including Gurugram, Okhla, and Noida.
                </p>
                <Link
                  to="/locations/faridabad"
                  className="text-safety-400 hover:text-safety-300 font-semibold inline-flex items-center gap-1 pt-1"
                >
                  Explore Faridabad Industrial Hub Coverage &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
