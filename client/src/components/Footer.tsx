import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flame,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  FileText,
  ExternalLink,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-slate-300 pt-16 pb-8 border-t-4 border-safety-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Life Safety Focus */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-safety-600 rounded-lg flex items-center justify-center text-white">
                <Flame className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Elite Fire & Protection
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Engineering reliable fire protection, life-safety detection systems, fire fighting hydrants, extinguisher refilling, and AMC services across Faridabad and Delhi NCR.
            </p>
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Standards & Codes
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs text-slate-400">
                <span className="bg-navy-800 px-2 py-1 rounded border border-slate-700">NBC 2016 Part 4</span>
                <span className="bg-navy-800 px-2 py-1 rounded border border-slate-700">IS 2190</span>
                <span className="bg-navy-800 px-2 py-1 rounded border border-slate-700">IS 3844</span>
                <span className="bg-navy-800 px-2 py-1 rounded border border-slate-700">IS 2189</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Fire Safety Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/services/fire-alarm-systems"
                  className="hover:text-safety-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-safety-500">&rsaquo;</span> Fire Alarm Systems
                </Link>
              </li>
              <li>
                <Link
                  to="/services/fire-fighting-systems"
                  className="hover:text-safety-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-safety-500">&rsaquo;</span> Fire Fighting & Hydrants
                </Link>
              </li>
              <li>
                <Link
                  to="/services/fire-extinguisher-supply-refilling"
                  className="hover:text-safety-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-safety-500">&rsaquo;</span> Extinguisher Refilling & Supply
                </Link>
              </li>
              <li>
                <Link
                  to="/services/electrical-systems"
                  className="hover:text-safety-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-safety-500">&rsaquo;</span> Electrical Panel Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cctv-systems"
                  className="hover:text-safety-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-safety-500">&rsaquo;</span> Commercial CCTV Systems
                </Link>
              </li>
              <li>
                <Link
                  to="/services/amc-maintenance"
                  className="hover:text-safety-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-safety-500">&rsaquo;</span> Annual Maintenance Contracts (AMC)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Hubs & Areas */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Service Areas
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <Link
                  to="/locations/faridabad"
                  className="text-white font-semibold hover:text-safety-400 flex items-center gap-1.5"
                >
                  <MapPin className="w-4 h-4 text-safety-500" />
                  Faridabad Hub (Primary)
                </Link>
                <p className="text-xs text-slate-400 mt-1">
                  Sector 58, 59, 24, 25, IMT, Mathura Road, Neharpar, NIT.
                </p>
              </div>

              <div>
                <Link
                  to="/locations/delhi-ncr"
                  className="text-white font-semibold hover:text-safety-400 flex items-center gap-1.5"
                >
                  <MapPin className="w-4 h-4 text-safety-500" />
                  Delhi NCR Coverage
                </Link>
                <p className="text-xs text-slate-400 mt-1">
                  Okhla Industrial Area, Gurugram, Noida, South Delhi commercial facilities.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <Link to="/industries" className="text-xs text-slate-400 hover:text-white">
                  &bull; Factories & Warehouses
                </Link>
                <br />
                <Link to="/industries" className="text-xs text-slate-400 hover:text-white">
                  &bull; Commercial IT & High-Rise Societies
                </Link>
              </div>
            </div>
          </div>

          {/* Col 4: Verified Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact & Inquiry
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-safety-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400">Direct Phone:</span>
                  <a
                    href={`tel:${BUSINESS_CONFIG.phone.raw}`}
                    className="text-white hover:text-safety-400 font-medium"
                  >
                    {BUSINESS_CONFIG.phone.display}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-safety-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400">Official Email:</span>
                  <a
                    href={`mailto:${BUSINESS_CONFIG.email.primary}`}
                    className="text-white hover:text-safety-400 font-medium break-all"
                  >
                    {BUSINESS_CONFIG.email.primary}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-safety-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400">Business Hours:</span>
                  <span className="text-slate-300 text-xs">{BUSINESS_CONFIG.hours.regular}</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-safety-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400">Facility / Service Hub:</span>
                  <span className="text-slate-300 text-xs">
                    {BUSINESS_CONFIG.address.formatted}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Statutory & Legal Disclaimers */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-300">Regulatory & Compliance Notice: </strong>
            {BUSINESS_CONFIG.disclaimers.statutoryNotice}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
