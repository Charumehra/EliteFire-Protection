import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Clock,
  MapPin,
  ClipboardList,
  BellRing,
  Flame,
  ShieldCheck,
  Zap,
  Camera,
  Wrench,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackConversion } from '../utils/analytics';

interface HeaderProps {
  onRequestQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const handlePhoneClick = () => {
    trackConversion('phone_click', { category: 'Header', label: 'Call Us Click' });
  };

  const handleWhatsAppClick = () => {
    trackConversion('whatsapp_click', { category: 'Header', label: 'WhatsApp Header Click' });
  };

  const servicesList = [
    { title: 'Fire Alarm Systems', path: '/services/fire-alarm-systems', icon: BellRing },
    { title: 'Fire Fighting Systems', path: '/services/fire-fighting-systems', icon: Flame },
    { title: 'Fire Extinguisher Supply & Refilling', path: '/services/fire-extinguisher-supply-refilling', icon: ShieldCheck },
    { title: 'Electrical Systems Maintenance', path: '/services/electrical-systems', icon: Zap },
    { title: 'Commercial CCTV Systems', path: '/services/cctv-systems', icon: Camera },
    { title: 'AMC & Maintenance Services', path: '/services/amc-maintenance', icon: Wrench },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0c] text-white shadow-header border-b border-safety-600/30">
      {/* Top Utility Bar */}
      <div className="bg-[#050507] border-b border-white/5 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-safety-500" />
              Serving Faridabad & Delhi NCR
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {BUSINESS_CONFIG.hours.regular}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_CONFIG.phone.raw}`}
              onClick={handlePhoneClick}
              className="flex items-center gap-1.5 text-slate-200 hover:text-safety-400 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-safety-500" />
              <span>{BUSINESS_CONFIG.phone.display}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-400/20" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
        <div className="flex justify-between items-center h-20 sm:h-22">
          {/* Company Logo: Original Brand Asset Preserved with Exact Proportions */}
          <Link
            to="/"
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-safety-500 rounded p-1"
            aria-label="Elite Fire and Protection Home"
          >
            <img
              src={BUSINESS_CONFIG.branding.logoPath}
              alt="Elite Fire and Protection - Safety, Protection, Reliability"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-3">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive('/') ? 'text-safety-500 font-bold' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive('/about') ? 'text-safety-500 font-bold' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`px-3 py-2 rounded-md text-sm font-semibold inline-flex items-center gap-1.5 transition-colors ${
                  isActive('/services') ? 'text-safety-500 font-bold' : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                Services
                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-0 w-84 rounded-xl shadow-2xl bg-[#111116] border border-slate-800 py-2 z-50 animate-fadeIn">
                  <div className="px-4 py-2 border-b border-slate-800/80 bg-[#0a0a0c]">
                    <p className="text-[11px] font-bold text-safety-400 uppercase tracking-wider">
                      Core Fire Safety Services
                    </p>
                  </div>
                  <div className="p-1 space-y-0.5">
                    {servicesList.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <div className="w-7 h-7 rounded bg-safety-600/20 text-safety-500 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span>{service.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="border-t border-slate-800/80 mt-1 pt-1 px-2">
                    <Link
                      to="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block px-3 py-2 text-xs font-bold text-safety-500 hover:text-safety-400 rounded hover:bg-white/5"
                    >
                      View All Services Overview &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/industries"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive('/industries') ? 'text-safety-500 font-bold' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Industries
            </Link>

            <Link
              to="/projects"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive('/projects') ? 'text-safety-500 font-bold' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Projects
            </Link>

            <Link
              to="/blog"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive('/blog') ? 'text-safety-500 font-bold' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive('/contact') ? 'text-safety-500 font-bold' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Action CTAs: Request a Quote & Direct WhatsApp */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3.5 py-2.5 rounded-lg transition-colors flex items-center gap-1.5"
              aria-label="Direct WhatsApp inquiry"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onRequestQuote}
              type="button"
              className="bg-safety-600 hover:bg-safety-700 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-md shadow-safety-900/40 transition-all duration-150 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-safety-500 flex items-center gap-2"
            >
              <ClipboardList className="w-4 h-4" />
              <span>Request a Quote</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onRequestQuote}
              type="button"
              className="bg-safety-600 text-white font-bold text-xs px-3 py-2 rounded-lg"
            >
              Quote
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 py-4 space-y-2 bg-[#0a0a0c] animate-fadeIn">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/10"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/10"
            >
              About Us
            </Link>

            <div className="px-3 py-2">
              <div className="text-[11px] font-bold text-safety-400 uppercase tracking-wider mb-2">
                Services
              </div>
              <div className="pl-2 space-y-1.5 border-l-2 border-safety-600">
                {servicesList.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-xs font-medium text-slate-300 hover:text-white"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/industries"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/10"
            >
              Industries Served
            </Link>

            <Link
              to="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/10"
            >
              Projects & Layouts
            </Link>

            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/10"
            >
              Blog & Resources
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/10"
            >
              Contact Us
            </Link>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2 px-3">
              <a
                href={`tel:${BUSINESS_CONFIG.phone.raw}`}
                className="w-full text-center py-2.5 px-4 rounded-lg bg-white/10 text-white font-semibold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-safety-500" />
                Call {BUSINESS_CONFIG.phone.display}
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                WhatsApp Direct Inquiry
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
