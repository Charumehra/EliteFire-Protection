import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Eye, Award, CheckCircle, Wrench, FileText, ArrowRight } from 'lucide-react';
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
      <section className="bg-navy-900 text-white py-14 sm:py-20 border-b-4 border-safety-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-safety-400 uppercase tracking-wider">
              Life Safety Engineering
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
              About Elite Fire and Protection
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              We provide commercial and industrial property owners, factory operators, and facility managers across Faridabad and Delhi NCR with dependable fire detection, water-based suppression, electrical fire risk mitigation, and scheduled maintenance solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
              <h2 className="text-2xl font-bold text-navy-900">
                Engineering Dependable Protection When Every Second Counts
              </h2>
              <p>
                Founded to address the critical need for technical precision and regulatory adherence in the life-safety industry, <strong>Elite Fire and Protection</strong> specializes in complete turnkey fire protection systems. Operating from our primary hub in <strong>Faridabad, Haryana</strong>, we support the manufacturing clusters of Sectors 58, 59, 24, 25, IMT Faridabad, and commercial complexes across the broader Delhi NCR corridor.
              </p>
              <p>
                Too often in facility management, fire protection equipment is treated as a dormant inspection checkmark rather than an active life-saving barrier. Our philosophy is rooted in preventative reliability: fire pumps must start automatically upon pressure loss, alarm loops must isolate localized hazards instantly, and extinguisher cylinders must be hydrostatically certified to discharge at optimal propellant velocity.
              </p>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-red-100 text-safety-600 flex items-center justify-center mb-3">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">Our Mission</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To protect lives, commercial assets, and production continuity through robust fire systems design, uncompromising equipment quality, and disciplined preventative maintenance.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-navy-100 text-navy-900 flex items-center justify-center mb-3">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">Our Vision</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To be recognized across Delhi NCR as the most dependable and transparent fire engineering partner for industrial plants, logistics parks, and high-rise developments.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-bold text-navy-900 mb-3">
                  Commitment to Quality & Technical Standards
                </h3>
                <p className="text-sm text-slate-600 mb-4">
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
                <h3 className="text-base font-bold text-navy-900 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-safety-600" />
                  <span>The Elite Fire Service Standard</span>
                </h3>
                <ul className="space-y-3 text-xs text-slate-600 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-safety-600 flex-shrink-0 mt-1.5" />
                    <span><strong>Transparent BOQ Estimates:</strong> No hidden charges; clear line-item breakdowns of equipment specifications, pipe gauges, and labor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-safety-600 flex-shrink-0 mt-1.5" />
                    <span><strong>100% Genuine Agents:</strong> Pure Mono Ammonium Phosphate (MAP 50/90) and food-grade carbon dioxide refilling with zero adulteration.</span>
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
                    className="w-full bg-safety-600 hover:bg-safety-700 text-white font-bold text-xs py-3 px-4 rounded-lg text-center shadow"
                  >
                    Request Facility Consultation
                  </button>
                  <a
                    href={getWhatsAppUrl('Hello Elite Fire, I am interested in learning more about your fire safety services and company profile.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-4 rounded-lg text-center"
                  >
                    WhatsApp Engineering Team
                  </a>
                </div>
              </div>

              {/* Service Areas Note */}
              <div className="bg-navy-900 text-white rounded-2xl p-6 border border-slate-800 text-xs space-y-3">
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
