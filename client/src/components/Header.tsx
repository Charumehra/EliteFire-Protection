import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Flame,
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  Clock,
  MapPin,
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
    { title: 'Fire Alarm Systems', path: '/services/fire-alarm-systems' },
    { title: 'Fire Fighting Systems', path: '/services/fire-fighting-systems' },
    { title: 'Fire Extinguisher Supply & Refilling', path: '/services/fire-extinguisher-supply-refilling' },
    { title: 'Electrical Systems Maintenance', path: '/services/electrical-systems' },
    { title: 'Commercial CCTV Systems', path: '/services/cctv-systems' },
    { title: 'AMC & Maintenance Services', path: '/services/amc-maintenance' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
      {/* Top Bar: Contact info & Service Area */}
      <div className="bg-navy-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-safety-500" />
              Serving Faridabad & Delhi NCR
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {BUSINESS_CONFIG.hours.regular}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_CONFIG.phone.raw}`}
              onClick={handlePhoneClick}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-safety-500" />
              <span>{BUSINESS_CONFIG.phone.display}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand Identity */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-safety-600 rounded-lg p-1"
          >
            <div className="w-11 h-11 bg-safety-600 rounded-lg flex items-center justify-center text-white shadow-md group-hover:bg-safety-700 transition-colors">
              <Flame className="w-7 h-7" />
            </div>
            <div>
              <span className="block text-xl font-bold tracking-tight text-navy-900 group-hover:text-safety-600 transition-colors">
                Elite Fire & Protection
              </span>
              <span className="block text-xs font-medium text-slate-500 tracking-wide">
                Life Safety & Fire Protection Engineers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive('/') ? 'text-safety-600' : 'text-slate-700 hover:text-safety-600'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive('/about') ? 'text-safety-600' : 'text-slate-700 hover:text-safety-600'
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`px-3 py-2 rounded-md text-sm font-semibold inline-flex items-center gap-1 transition-colors ${
                  isActive('/services') ? 'text-safety-600' : 'text-slate-700 hover:text-safety-600'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-0 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-2 z-50">
                  <div className="px-4 py-2 border-b border-slate-100 bg-slate-50">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Core Fire Safety Services
                    </p>
                  </div>
                  {servicesList.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-safety-600 transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 mt-1 pt-1">
                    <Link
                      to="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block px-4 py-2 text-xs font-bold text-safety-600 hover:bg-slate-50"
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
                isActive('/industries') ? 'text-safety-600' : 'text-slate-700 hover:text-safety-600'
              }`}
            >
              Industries
            </Link>

            <Link
              to="/projects"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive('/projects') ? 'text-safety-600' : 'text-slate-700 hover:text-safety-600'
              }`}
            >
              Projects
            </Link>

            <Link
              to="/blog"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive('/blog') ? 'text-safety-600' : 'text-slate-700 hover:text-safety-600'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive('/contact') ? 'text-safety-600' : 'text-slate-700 hover:text-safety-600'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onRequestQuote}
              type="button"
              className="bg-safety-600 hover:bg-safety-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow transition-all duration-150 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-safety-500 focus:ring-offset-2 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              Request a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onRequestQuote}
              type="button"
              className="bg-safety-600 text-white font-semibold text-xs px-3 py-2 rounded-md"
            >
              Quote
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-safety-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4 space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              About Us
            </Link>

            <div className="px-3 py-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Services
              </div>
              <div className="pl-2 space-y-1.5 border-l-2 border-safety-600">
                {servicesList.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-sm font-medium text-slate-700 hover:text-safety-600"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/industries"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              Industries Served
            </Link>

            <Link
              to="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              Projects & Layouts
            </Link>

            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              Blog & Resources
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              Contact Us
            </Link>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2 px-3">
              <a
                href={`tel:${BUSINESS_CONFIG.phone.raw}`}
                className="w-full text-center py-2.5 px-4 rounded-lg bg-slate-100 text-slate-800 font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-safety-600" />
                Call {BUSINESS_CONFIG.phone.display}
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 rounded-lg bg-emerald-600 text-white font-semibold text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
