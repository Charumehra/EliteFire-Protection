import React from 'react';
import { Link } from 'react-router-dom';
import {
  BellRing,
  Flame,
  ShieldCheck,
  Zap,
  Camera,
  Wrench,
  Phone,
  MessageCircle,
  Mail,
  ArrowRight,
  ClipboardList,
  CheckCircle2,
  FileCheck2,
  Building2,
  HelpCircle,
  ShieldAlert,
  ChevronRight,
} from 'lucide-react';
import { MetaTags } from '../seo/MetaTags';
import { StructuredData } from '../seo/StructuredData';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { SERVICES_DATA } from '../data/servicesData';
import { INDUSTRIES_DATA } from '../data/industriesData';
import { GENERAL_FAQS } from '../data/faqData';
import { QuoteForm } from '../components/QuoteForm';
import { getWhatsAppUrl, getServiceWhatsAppUrl } from '../utils/whatsapp';
import { trackConversion } from '../utils/analytics';

interface HomePageProps {
  onRequestQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRequestQuote }) => {
  const serviceIcons = {
    'fire-alarm-systems': BellRing,
    'fire-fighting-systems': Flame,
    'fire-extinguisher-supply-refilling': ShieldCheck,
    'electrical-systems': Zap,
    'cctv-systems': Camera,
    'amc-maintenance': Wrench,
  };

  const processSteps = [
    {
      num: '01',
      title: 'Share Requirements',
      desc: 'Submit your facility details, blueprint, or service requirement via our website, phone, or direct WhatsApp.',
    },
    {
      num: '02',
      title: 'Discuss Site & Needs',
      desc: 'Our fire safety engineers review your facility hazard profile, occupancy class, and local regulatory requirements.',
    },
    {
      num: '03',
      title: 'Receive Quotation',
      desc: 'Get a transparent, itemized Bill of Quantities (BOQ) covering certified equipment, materials, and labor.',
    },
    {
      num: '04',
      title: 'Schedule Agreed Service',
      desc: 'Trained technicians execute installation, commissioning, pressure testing, or extinguisher refilling on schedule.',
    },
    {
      num: '05',
      title: 'Arrange Maintenance',
      desc: 'Establish preventative AMC inspection cycles, pump exercise routines, and on-site compliance logbooks.',
    },
  ];

  return (
    <>
      <MetaTags
        title="Fire Safety Services & Fire Extinguisher Refilling in Faridabad | Elite Fire & Protection"
        description="Top-rated fire safety services in Faridabad & Delhi NCR. Certified fire extinguisher refilling (IS 2190), fire alarm installation (IS 2189), hydrant systems, sprinklers & comprehensive AMC contracts. Fast on-site quote: 8826111491."
        canonicalPath="/"
      />
      <StructuredData type="LocalBusiness" />
      <StructuredData type="FAQPage" data={GENERAL_FAQS.slice(0, 5)} />

      {/* HERO SECTION */}
      <section className="relative bg-[#090a0f] text-white overflow-hidden py-16 sm:py-24 lg:py-28 border-b-4 border-safety-600">
        {/* Subtle radial lighting & engineering grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.25),rgba(9,10,15,0))] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Live Status Pill */}
              <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-slate-300">
                  Faridabad &amp; Delhi NCR On-Site Engineering Operations Active
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Fire Safety Services &amp; Fire Protection in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-400">Faridabad</span> &amp; Delhi NCR
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Certified fire alarm installations (<strong className="text-white font-medium">IS 2189</strong>), fire hydrant &amp; automatic sprinkler systems (<strong className="text-white font-medium">IS 3844</strong>), certified fire extinguisher refilling (<strong className="text-white font-medium">IS 2190</strong>), electrical panel thermography audits, CCTV, and annual maintenance contracts (AMC) for factories, warehouses, and commercial complexes.
              </p>

              {/* Direct CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="bg-safety-600 hover:bg-safety-700 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-safety-900/50 transition-all duration-150 transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <ClipboardList className="w-4 h-4" />
                  <span>Request Free Site Quote</span>
                </button>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversion('whatsapp_click', { category: 'Hero', label: 'WhatsApp Hero CTA' })}
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl shadow transition-all duration-150 flex items-center gap-2 transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={`tel:${BUSINESS_CONFIG.phone.raw}`}
                  onClick={() => trackConversion('phone_click', { category: 'Hero', label: 'Call Hero CTA' })}
                  className="bg-white/10 hover:bg-white/15 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm px-4 py-3.5 rounded-xl transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-safety-500" />
                  <span>Call {BUSINESS_CONFIG.phone.display}</span>
                </a>

                <a
                  href={`mailto:${BUSINESS_CONFIG.email.primary}`}
                  className="bg-white/5 hover:bg-white/10 text-slate-300 border border-slate-700/80 font-medium text-xs sm:text-sm px-4 py-3.5 rounded-xl transition-colors flex items-center gap-2"
                  title="Direct Email Inquiries"
                >
                  <Mail className="w-4 h-4 text-safety-400" />
                  <span>{BUSINESS_CONFIG.email.primary}</span>
                </a>
              </div>

              {/* Verified Pillars */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-safety-500 flex-shrink-0" />
                  <span>IS 2189 / IS 3844 Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-safety-500 flex-shrink-0" />
                  <span>IS 2190 Refilling Testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-safety-500 flex-shrink-0" />
                  <span>Preventative AMC Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-safety-500 flex-shrink-0" />
                  <span>Transparent Itemized BOQ</span>
                </div>
              </div>
            </div>

            {/* Right Card: Quick Inquiry Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-7 border border-slate-200 text-slate-900 relative">
                <div className="absolute -top-3 right-6 bg-safety-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  Priority Response
                </div>
                <div className="mb-4">
                  <div className="inline-block text-[11px] font-bold text-safety-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded uppercase tracking-wider mb-1">
                    Direct Engineering Desk
                  </div>
                  <h2 className="text-lg font-bold text-navy-900">Get an On-Site Safety Estimate</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    For commercial, factory &amp; society installations across NCR
                  </p>
                </div>
                <QuoteForm initialService="Fire Alarm Systems" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO GEOGRAPHIC REACH BANNER */}
      <section className="bg-[#0e0f16] border-b border-slate-800 text-white py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-safety-500" />
              <span>Key Local Service Belts:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 text-xs text-slate-300">
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">Sector 58 Industrial Area</span>
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">Sector 59 Industrial Area</span>
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">Sector 24 &amp; 25 Manufacturing</span>
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">IMT Faridabad</span>
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">Mathura Road Belt</span>
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">Neharpar Greater Faridabad</span>
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">Delhi NCR / Okhla / Gurugram</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION (ALL 6 SERVICES) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200" id="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold text-safety-600 uppercase tracking-widest">
              Core Engineering Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2">
              Comprehensive Fire Protection & Safety Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              We engineer, supply, test, and maintain statutory life-safety systems for factories, high-rise buildings, warehouses, and commercial complexes across Faridabad and Delhi NCR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {Object.keys(SERVICES_DATA).map((key) => {
              const svc = SERVICES_DATA[key];
              const IconComponent = serviceIcons[key as keyof typeof serviceIcons] || ShieldCheck;
              const serviceWhatsAppUrl = getServiceWhatsAppUrl(svc.title);

              return (
                <div
                  key={svc.id}
                  className="bg-white rounded-xl shadow-card hover:shadow-hover transition-all duration-200 border border-slate-200 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Realistic Photograph */}
                    <div className="h-44 overflow-hidden relative">
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
                      <span className="absolute bottom-3 left-3 text-[11px] font-semibold bg-safety-600 text-white px-2.5 py-0.5 rounded">
                        {svc.standardsFollowed[0] || 'IS Compliant'}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-safety-600 transition-colors">
                        <Link to={`/services/${svc.slug}`}>{svc.title}</Link>
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                        {svc.shortDescription}
                      </p>

                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Key Equipment & Works:
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

                  {/* Actions: View Service Details & Enquire on WhatsApp */}
                  <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between gap-2 mt-2">
                    <Link
                      to={`/services/${svc.slug}`}
                      className="text-xs font-bold text-navy-900 hover:text-safety-600 flex items-center gap-1"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-safety-600" />
                    </Link>

                    <a
                      href={serviceWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackConversion('whatsapp_click', {
                          category: 'Service Card',
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (VERIFIABLE CLAIMS ONLY) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold text-safety-600 uppercase tracking-widest">
                Service Discipline & Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Why Facility & Plant Managers Work With Elite Fire
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When a fire hazard occurs, life safety depends strictly on working pump starters, intact valve packings, calibrated smoke detectors, and certified extinguisher pressures.
              </p>

              <div className="pt-2 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-safety-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-900">National Building Code (NBC) Compliance</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      All system sizing, pipe diameters, and detector loops strictly follow NBC 2016 Part 4 and BIS standards, ensuring your installation satisfies statutory audit requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-safety-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-900">Disciplined Preventative Maintenance</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Scheduled quarterly inspections include live pump pressure drops, sensor loop tests, valve lubrication, and on-site engineering logbook maintenance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-safety-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-900">Direct Faridabad & Delhi NCR Response</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Located directly in Faridabad, our field teams provide rapid response across Sector 58, 59, 24, 25, IMT, Mathura Road, and surrounding NCR industrial zones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-safety-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-900">Fire NOC & Statutory Audit Readiness</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Full technical documentation, as-built schematics, hydrostatic testing certificates, and inspection compliance support for Haryana Fire Department approvals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Process Box */}
            <div className="lg:col-span-7 bg-[#0a0a0c] text-white rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={BUSINESS_CONFIG.branding.shieldIconPath}
                  alt="Elite Shield"
                  className="w-6 h-6 object-contain"
                />
                <h3 className="text-xl font-bold text-white">Our 5-Step Service Process</h3>
              </div>
              <p className="text-xs text-slate-400 mb-8">
                How we deliver dependable fire protection from first contact to regular maintenance:
              </p>

              <div className="space-y-4">
                {processSteps.map((step) => (
                  <div
                    key={step.num}
                    className="flex items-start gap-4 p-3.5 rounded-xl bg-[#14141a] border border-slate-800/80"
                  >
                    <span className="text-base font-black text-safety-500 font-mono bg-safety-950 px-2.5 py-1 rounded border border-safety-900">
                      {step.num}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">{step.title}</h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold text-safety-600 uppercase tracking-widest">
                Target Facility Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">
                Industries We Serve Across Delhi NCR
              </h2>
            </div>
            <Link
              to="/industries"
              className="mt-3 md:mt-0 text-xs font-bold text-safety-600 hover:text-safety-700 flex items-center gap-1"
            >
              <span>Explore All 8 Industry Hazard Profiles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES_DATA.slice(0, 4).map((ind) => (
              <div
                key={ind.id}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="h-32 rounded-lg overflow-hidden mb-3">
                    <img
                      src={ind.heroImage}
                      alt={ind.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-navy-900 mb-1">{ind.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {ind.shortDescription}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to="/industries"
                    className="text-xs font-semibold text-safety-600 hover:text-safety-700 flex items-center gap-1"
                  >
                    <span>View Solutions</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <a
                    href={getWhatsAppUrl(`Hello Elite Fire, I would like to inquire about fire safety systems for our ${ind.name} facility.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#25D366] hover:underline"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS & WORK GALLERY (CLEAR SAMPLE LAYOUT NOTICES) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-safety-600 uppercase tracking-widest">
              Engineering Architecture
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
                  Automotive Component Manufacturing Layout
                </span>
                <h3 className="text-base sm:text-lg font-bold text-navy-900 mt-3">
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
                <a
                  href={getWhatsAppUrl('Hello Elite Fire, I am interested in an industrial fire fighting hydrant and sprinkler setup.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#25D366] hover:underline"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-safety-600 uppercase tracking-wider bg-safety-50 px-2 py-0.5 rounded border border-safety-200">
                  Corporate Commercial Tower Layout
                </span>
                <h3 className="text-base sm:text-lg font-bold text-navy-900 mt-3">
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
                <a
                  href={getWhatsAppUrl('Hello Elite Fire, I am interested in an addressable commercial fire alarm and clean agent installation.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#25D366] hover:underline"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-slate-50 border-t border-slate-200" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-safety-600 uppercase tracking-widest">
              Common Technical Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Essential answers regarding Indian fire safety standards, refilling cycles, AMC advantages, and compliance.
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

      {/* FINAL CTA BANNER */}
      <section className="py-16 bg-[#0a0a0c] text-white border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 bg-safety-600 rounded-xl flex items-center justify-center mx-auto text-white">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Secure Your Facility in Faridabad or Delhi NCR?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Contact Elite Fire and Protection for a transparent quotation on new equipment installations, extinguisher refilling, or a comprehensive fire safety AMC.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-3">
            <button
              type="button"
              onClick={onRequestQuote}
              className="bg-safety-600 hover:bg-safety-700 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-transform transform hover:-translate-y-0.5"
            >
              Request a Detailed Quote
            </button>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Engineering Desk</span>
            </a>
            <a
              href={`mailto:${BUSINESS_CONFIG.email.primary}`}
              className="bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-slate-700 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-safety-400" />
              <span>Email {BUSINESS_CONFIG.email.primary}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
