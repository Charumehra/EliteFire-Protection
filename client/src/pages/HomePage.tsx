import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldAlert,
  Flame,
  Wrench,
  CheckCircle,
  Building2,
  FileCheck2,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Video,
  Settings,
  HelpCircle,
} from 'lucide-react';
import { MetaTags } from '../seo/MetaTags';
import { StructuredData } from '../seo/StructuredData';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { SERVICES_DATA } from '../data/servicesData';
import { INDUSTRIES_DATA } from '../data/industriesData';
import { GENERAL_FAQS } from '../data/faqData';
import { QuoteForm } from '../components/QuoteForm';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackConversion } from '../utils/analytics';

interface HomePageProps {
  onRequestQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRequestQuote }) => {
  const serviceKeys = Object.keys(SERVICES_DATA);

  return (
    <>
      <MetaTags
        title="Fire Safety and Protection Solutions in Faridabad and Delhi NCR | Elite Fire"
        description="Commercial fire alarm systems, fire fighting installations, fire extinguisher refilling, electrical maintenance, CCTV, and AMC services in Faridabad & Delhi NCR."
        canonicalPath="/"
      />
      <StructuredData type="LocalBusiness" />
      <StructuredData type="FAQPage" data={GENERAL_FAQS.slice(0, 5)} />

      {/* HERO SECTION */}
      <section className="relative bg-navy-900 text-white overflow-hidden py-16 sm:py-24 lg:py-28 border-b-4 border-safety-600">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline and Trust Badges */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-navy-800/90 border border-slate-700/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-safety-400">
                <Flame className="w-4 h-4 text-safety-500 animate-pulse" />
                <span>Life Safety & Fire Engineering Partner &bull; Faridabad & NCR</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Fire Safety and Protection Solutions in <span className="text-safety-500">Faridabad</span> and Delhi NCR
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Explore fire alarm systems, fire fighting solutions, fire extinguisher supply and refilling, electrical systems, CCTV installation, and maintenance services for commercial, industrial, and residential facilities.
              </p>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="bg-safety-600 hover:bg-safety-700 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg shadow-lg shadow-safety-900/30 transition-all duration-150 transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Request a Quote
                </button>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversion('whatsapp_click', { category: 'Hero', label: 'WhatsApp Hero CTA' })}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg shadow transition-all duration-150 flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>

                <a
                  href={`tel:${BUSINESS_CONFIG.phone.raw}`}
                  onClick={() => trackConversion('phone_click', { category: 'Hero', label: 'Call Hero CTA' })}
                  className="bg-navy-800 hover:bg-navy-700 text-slate-200 border border-slate-700 font-semibold text-sm sm:text-base px-5 py-3.5 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-safety-500" />
                  <span>Call {BUSINESS_CONFIG.phone.display}</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-safety-500 flex-shrink-0" />
                  <span>IS & NBC Standards Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-safety-500 flex-shrink-0" />
                  <span>Preventative AMC Support</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle className="w-4 h-4 text-safety-500 flex-shrink-0" />
                  <span>Transparent Itemized Pricing</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Quick Inquiry Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-7 border border-slate-100 text-slate-900">
                <div className="mb-4">
                  <h2 className="text-lg font-bold text-navy-900">Get an On-Site Estimate</h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct consultation for industrial & commercial installations or AMC
                  </p>
                </div>
                <QuoteForm initialService="Fire Alarm Systems" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200" id="services-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold text-safety-600 uppercase tracking-wider">
              Complete Protection Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2">
              Comprehensive Fire Safety & Facility Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              We design, install, test, and maintain statutory life-safety systems for factories, high-rise buildings, warehouses, and commercial complexes across Faridabad and Delhi NCR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceKeys.map((key) => {
              const svc = SERVICES_DATA[key];
              return (
                <div
                  key={svc.id}
                  className="bg-white rounded-xl shadow-card hover:shadow-hover transition-all duration-200 border border-slate-200/80 overflow-hidden flex flex-col group"
                >
                  <div className="h-44 overflow-hidden relative">
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

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-navy-900 group-hover:text-safety-600 transition-colors">
                        <Link to={`/services/${svc.slug}`}>{svc.title}</Link>
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                        {svc.shortDescription}
                      </p>

                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Key Equipment / Works:
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

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        to={`/services/${svc.slug}`}
                        className="text-xs font-bold text-navy-900 hover:text-safety-600 flex items-center gap-1 group-hover:gap-1.5 transition-all"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5 text-safety-600" />
                      </Link>
                      <button
                        type="button"
                        onClick={onRequestQuote}
                        className="text-xs font-semibold text-safety-600 hover:text-safety-700 underline"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ELITE FIRE */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold text-safety-600 uppercase tracking-wider">
                Reliable Safety Partnership
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Why Commercial Property & Facility Managers Trust Elite Fire
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fire safety is non-negotiable. When an incident occurs, functioning valves, pressurized cylinders, and responsive alarm sensors make the difference between safety and catastrophic losses.
              </p>

              <div className="pt-2 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-safety-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-900">National Building Code (NBC) Compliance</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Our engineering designs adhere strictly to NBC 2016 Part 4 and Bureau of Indian Standards (BIS) specifications, ensuring your facility remains audit-ready.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-safety-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-900">Rigorous Hydro-Testing & Calibration</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Every extinguisher refill and hydrant manifold is tested with certified hydrostatic pressure equipment, accompanied by valid test logs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-safety-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-900">Dedicated Faridabad & Delhi NCR Response</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      With primary operations situated directly in Faridabad, our field technicians provide rapid on-site service across IMT, Mathura Road, Okhla, and surrounding industrial hubs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-navy-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-3">Our 4-Step Safety Lifecycle Process</h3>
              <p className="text-xs text-slate-400 mb-8">
                How we deliver reliable fire protection from initial blueprint audit to scheduled maintenance:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-navy-800/80 p-5 rounded-xl border border-slate-700/60">
                  <div className="text-2xl font-black text-safety-500 mb-2">01</div>
                  <h4 className="text-sm font-bold text-white mb-1">On-Site Hazard Survey</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We evaluate facility square footage, fuel loads, electrical distribution, and statutory occupancy class requirements.
                  </p>
                </div>

                <div className="bg-navy-800/80 p-5 rounded-xl border border-slate-700/60">
                  <div className="text-2xl font-black text-safety-500 mb-2">02</div>
                  <h4 className="text-sm font-bold text-white mb-1">Custom Engineering & Quotation</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Transparent, itemized BOQ (Bill of Quantities) outlining certified equipment, pipe diameters, and detector quantities.
                  </p>
                </div>

                <div className="bg-navy-800/80 p-5 rounded-xl border border-slate-700/60">
                  <div className="text-2xl font-black text-safety-500 mb-2">03</div>
                  <h4 className="text-sm font-bold text-white mb-1">Installation & Commissioning</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Trained technicians execute pipe welding, wiring, sensor loop programming, and live hydrostatic/smoke canister tests.
                  </p>
                </div>

                <div className="bg-navy-800/80 p-5 rounded-xl border border-slate-700/60">
                  <div className="text-2xl font-black text-safety-500 mb-2">04</div>
                  <h4 className="text-sm font-bold text-white mb-1">Scheduled AMC & Log Maintenance</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Periodic quarterly audits, pump exercise drills, and physical logbook signing required for annual Fire NOC renewals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SERVED OVERVIEW */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold text-safety-600 uppercase tracking-wider">
                Tailored Occupancy Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">
                Industries We Serve Across Delhi NCR
              </h2>
            </div>
            <Link
              to="/industries"
              className="mt-3 md:mt-0 text-xs font-bold text-safety-600 hover:text-safety-700 flex items-center gap-1"
            >
              <span>Explore All 8 Industry Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES_DATA.slice(0, 4).map((ind) => (
              <div
                key={ind.id}
                className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="h-32 rounded-lg overflow-hidden mb-4">
                    <img
                      src={ind.heroImage}
                      alt={ind.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">{ind.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {ind.shortDescription}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link
                    to="/industries"
                    className="text-xs font-semibold text-safety-600 hover:text-safety-700 flex items-center gap-1"
                  >
                    <span>View Hazard Solutions &rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE PROJECT LAYOUTS HIGHLIGHT */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-safety-600 uppercase tracking-wider">
              System Engineering Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2">
              Featured System Configurations
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Sample layout schematics illustrating standard life-safety deployments for industrial and commercial facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-safety-600 uppercase tracking-wider bg-safety-50 px-2 py-0.5 rounded border border-safety-200">
                  Automotive Manufacturing Layout
                </span>
                <h3 className="text-lg font-bold text-navy-900 mt-3">
                  Industrial Hydrant Ring Main & Automatic Sprinklers
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Turnkey layout example for a 45,000 sq. ft. fabrication facility: tri-pump system (2850 LPM main electric, standby diesel engine, jockey pump) with 320 quartzoid glass bulb sprinklers.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                  <span className="bg-white px-2.5 py-1 rounded border border-slate-200">8.5 Bar Pressure Testing</span>
                  <span className="bg-white px-2.5 py-1 rounded border border-slate-200">IS 3844 Compliant</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 flex justify-between items-center">
                <Link to="/projects" className="text-xs font-bold text-navy-900 hover:text-safety-600">
                  Review Project Architecture &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-safety-600 uppercase tracking-wider bg-safety-50 px-2 py-0.5 rounded border border-safety-200">
                  Corporate Commercial Tower Layout
                </span>
                <h3 className="text-lg font-bold text-navy-900 mt-3">
                  Multi-Loop Addressable Fire Alarm & Clean Agent Flooding
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Life safety layout for an 8-story commercial building: 4-loop addressable panel, 450 micro-addressed smoke detectors, emergency magnetic door release, and server room clean agent gas suppression.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                  <span className="bg-white px-2.5 py-1 rounded border border-slate-200">IS 2189 Loop Testing</span>
                  <span className="bg-white px-2.5 py-1 rounded border border-slate-200">Zero Residue Gas</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 flex justify-between items-center">
                <Link to="/projects" className="text-xs font-bold text-navy-900 hover:text-safety-600">
                  Review Project Architecture &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-slate-50 border-t border-slate-200" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-safety-600 uppercase tracking-wider">
              Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Answers regarding Indian fire safety standards, refilling cycles, AMC benefits, and compliance.
            </p>
          </div>

          <div className="space-y-4">
            {GENERAL_FAQS.slice(0, 5).map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm">
                <h3 className="text-sm sm:text-base font-bold text-navy-900 flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-safety-600 flex-shrink-0 mt-1" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 ml-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="text-xs font-bold text-safety-600 hover:text-safety-700 underline"
            >
              Browse Complete Safety & Compliance FAQ Directory &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL LEAD CAPTURE CTA BANNER */}
      <section className="py-16 bg-navy-900 text-white border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 bg-safety-600 rounded-xl flex items-center justify-center mx-auto text-white">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Secure Your Facility in Faridabad or Delhi NCR?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Contact Elite Fire and Protection for a transparent quotation on new equipment installations, extinguisher refilling, or a comprehensive fire safety AMC.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <button
              type="button"
              onClick={onRequestQuote}
              className="bg-safety-600 hover:bg-safety-700 text-white font-bold text-sm px-7 py-3.5 rounded-lg shadow-lg transition-transform transform hover:-translate-y-0.5"
            >
              Request a Detailed Quote
            </button>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-7 py-3.5 rounded-lg shadow transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Engineering Desk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
