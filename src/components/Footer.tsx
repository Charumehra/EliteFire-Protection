import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  BellRing,
  Flame,
  Zap,
  Camera,
  Wrench,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050507] text-slate-300 pt-16 pb-8 border-t-4 border-safety-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Official Logo */}
          <div className="space-y-4">
            <Link to="/" className="inline-block bg-white px-3 py-2 rounded-xl shadow-sm transition-transform duration-200 hover:scale-[1.02]">
              <img
                src={BUSINESS_CONFIG.branding.logoPath}
                alt="Elite Fire and Protection - Safety, Protection, Reliability"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-xs font-bold tracking-widest text-safety-500 uppercase">
              {BUSINESS_CONFIG.tagline}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Industrial and commercial life-safety engineering: addressable fire alarms, hydrant ring mains, automatic sprinklers, certified extinguisher refilling, and regulatory AMC maintenance across Faridabad and Delhi NCR.
            </p>
            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                Technical Codes & Compliance:
              </p>
              <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-400">
                <span className="bg-[#111116] px-2 py-0.5 rounded border border-slate-800">NBC 2016 Part 4</span>
                <span className="bg-[#111116] px-2 py-0.5 rounded border border-slate-800">IS 2190</span>
                <span className="bg-[#111116] px-2 py-0.5 rounded border border-slate-800">IS 3844</span>
                <span className="bg-[#111116] px-2 py-0.5 rounded border border-slate-800">IS 2189</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 pb-1 border-b border-safety-600/40 inline-block">
              Fire Safety Services
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/services/fire-alarm-systems"
                  className="hover:text-safety-400 transition-colors flex items-center gap-2"
                >
                  <BellRing className="w-3.5 h-3.5 text-safety-500 flex-shrink-0" />
                  <span>Fire Alarm Systems</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/fire-fighting-systems"
                  className="hover:text-safety-400 transition-colors flex items-center gap-2"
                >
                  <Flame className="w-3.5 h-3.5 text-safety-500 flex-shrink-0" />
                  <span>Fire Fighting & Hydrants</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/fire-extinguisher-supply-refilling"
                  className="hover:text-safety-400 transition-colors flex items-center gap-2"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-safety-500 flex-shrink-0" />
                  <span>Extinguisher Supply & Refilling</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/electrical-systems"
                  className="hover:text-safety-400 transition-colors flex items-center gap-2"
                >
                  <Zap className="w-3.5 h-3.5 text-safety-500 flex-shrink-0" />
                  <span>Electrical Panel Maintenance</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cctv-systems"
                  className="hover:text-safety-400 transition-colors flex items-center gap-2"
                >
                  <Camera className="w-3.5 h-3.5 text-safety-500 flex-shrink-0" />
                  <span>Commercial CCTV Systems</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/amc-maintenance"
                  className="hover:text-safety-400 transition-colors flex items-center gap-2"
                >
                  <Wrench className="w-3.5 h-3.5 text-safety-500 flex-shrink-0" />
                  <span>Annual Maintenance Contracts (AMC)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Hubs & Areas */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 pb-1 border-b border-safety-600/40 inline-block">
              Service Coverage Hubs
            </h3>
            <div className="space-y-3 text-xs">
              <div>
                <Link
                  to="/locations/faridabad"
                  className="text-white font-semibold hover:text-safety-400 flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-safety-500" />
                  <span>Faridabad Hub (Primary)</span>
                </Link>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  Sector 58, 59, 24, 25, IMT Faridabad, Mathura Road, Neharpar & NIT.
                </p>
              </div>

              <div>
                <Link
                  to="/locations/delhi-ncr"
                  className="text-white font-semibold hover:text-safety-400 flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-safety-500" />
                  <span>Delhi NCR Coverage</span>
                </Link>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  Okhla Industrial Phases I-III, Gurugram IT corridors, Noida industrial sectors.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <Link to="/industries" className="text-[11px] text-slate-400 hover:text-white">
                  &bull; Factories & Heavy Manufacturing
                </Link>
                <br />
                <Link to="/industries" className="text-[11px] text-slate-400 hover:text-white">
                  &bull; Warehouses, Offices & High-Rise Societies
                </Link>
              </div>
            </div>
          </div>

          {/* Col 4: Verified Contact Info & WhatsApp */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 pb-1 border-b border-safety-600/40 inline-block">
              Contact & Inquiries
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-safety-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-[11px] text-slate-500">Engineering Helpline:</span>
                  <a
                    href={`tel:${BUSINESS_CONFIG.phone.raw}`}
                    className="text-white hover:text-safety-400 font-bold"
                  >
                    {BUSINESS_CONFIG.phone.display}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-[11px] text-slate-500">Official WhatsApp:</span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
                  >
                    <span>{BUSINESS_CONFIG.whatsapp.display}</span>
                    <span className="text-[10px] bg-emerald-950 text-emerald-300 px-1.5 py-0.2 rounded border border-emerald-800">Chat</span>
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-safety-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-[11px] text-slate-500">Official Email:</span>
                  <a
                    href={`mailto:${BUSINESS_CONFIG.email.primary}`}
                    className="text-white hover:text-safety-400 font-medium break-all"
                  >
                    {BUSINESS_CONFIG.email.primary}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-safety-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-[11px] text-slate-500">Operational Hours:</span>
                  <span className="text-slate-300">{BUSINESS_CONFIG.hours.regular}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Legal Notice */}
        <div className="py-6 border-b border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-300">Statutory Notice: </strong>
            {BUSINESS_CONFIG.disclaimers.statutoryNotice}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link to="/faq" className="hover:text-slate-300 transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
