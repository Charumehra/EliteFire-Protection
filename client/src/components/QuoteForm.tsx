import React, { useState } from 'react';
import { z } from 'zod';
import { Send, CheckCircle2, Phone, AlertCircle, ArrowRight } from 'lucide-react';
import { trackConversion } from '../utils/analytics';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export const VALID_SERVICES = [
  'Fire Alarm Systems',
  'Fire Fighting Systems',
  'Fire Extinguisher Supply and Refilling',
  'Electrical Systems',
  'CCTV Systems',
  'AMC and Maintenance Services',
  'General Fire Safety Audit / Inspection',
] as const;

const formSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters'),
  companyName: z.string().trim().optional(),
  phone: z
    .string()
    .trim()
    .regex(/^(\+91[\-\s]?)?[6789]\d{9}$/, 'Enter a valid Indian mobile number (e.g. 9812345678 or +91 9812345678)'),
  email: z.string().trim().email('Enter a valid email address').optional().or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  location: z.string().trim().min(2, 'Site location is required (e.g., Sector 58 Faridabad, Okhla, Gurugram)'),
  message: z.string().trim().optional(),
  preferredContactMethod: z.enum(['WhatsApp', 'Phone Call', 'Email']).default('WhatsApp'),
  website_hp: z.string().optional(),
});

interface QuoteFormProps {
  initialService?: string;
  onSuccess?: (leadId: string) => void;
  className?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialService = 'Fire Alarm Systems',
  onSuccess,
  className = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    service: initialService,
    location: '',
    message: '',
    preferredContactMethod: 'WhatsApp' as 'WhatsApp' | 'Phone Call' | 'Email',
    website_hp: '', // Honeypot field
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [readyForWhatsApp, setReadyForWhatsApp] = useState<boolean>(false);
  const [quoteRefId, setQuoteRefId] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      `*NEW INQUIRY - ELITE FIRE AND PROTECTION*`,
      `Reference ID: ${quoteRefId}`,
      `---------------------------------------`,
      `*Full Name:* ${formData.name}`,
      formData.companyName ? `*Company/Facility:* ${formData.companyName}` : '',
      `*Mobile Number:* ${formData.phone}`,
      formData.email ? `*Email:* ${formData.email}` : '',
      `*Service Required:* ${formData.service}`,
      `*Site Location:* ${formData.location}`,
      `*Preferred Contact:* ${formData.preferredContactMethod}`,
      formData.message ? `*Project Scope / Notes:* ${formData.message}` : '',
      `---------------------------------------`,
      `_Inquiry initiated from official website_`,
    ]
      .filter(Boolean)
      .join('\n');

    return encodeURIComponent(lines);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});

    // Client-side validation with Zod
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0].toString()] = err.message;
        }
      });
      setFieldErrors(errors);
      return;
    }

    // Bot check
    if (formData.website_hp) {
      return;
    }

    const newId = 'EFP-' + Math.floor(100000 + Math.random() * 900000);
    setQuoteRefId(newId);

    // Save lead record locally for the admin viewer
    try {
      const existing = JSON.parse(localStorage.getItem('elite_leads') || '[]');
      existing.unshift({
        id: newId,
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('elite_leads', JSON.stringify(existing));
    } catch {
      // Storage fallback
    }

    trackConversion('quote_form_submit_success', {
      service: formData.service,
      location: formData.location,
      leadId: newId,
    });

    setReadyForWhatsApp(true);

    if (onSuccess) {
      onSuccess(newId);
    }
  };

  if (readyForWhatsApp) {
    const waUrl = `https://wa.me/${BUSINESS_CONFIG.whatsapp.raw}?text=${generateWhatsAppMessage()}`;

    return (
      <div className="bg-[#0e0e12] border border-safety-600/30 rounded-xl p-6 sm:p-7 text-white text-center animate-fadeIn shadow-2xl">
        <div className="w-12 h-12 bg-safety-600/20 text-safety-500 rounded-full flex items-center justify-center mx-auto mb-3">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-lg font-bold text-white mb-1">Quote Inquiry Prepared!</h3>
        <p className="text-xs text-slate-300 mb-3 leading-relaxed">
          Inquiry reference for <strong>{formData.name}</strong> ({formData.service} &bull; {formData.location}) is ready.
        </p>

        {/* Clear Explanation that user will be redirected */}
        <div className="bg-[#16161c] border border-slate-800 rounded-lg p-3 text-left mb-5 space-y-1 text-xs text-slate-300">
          <p className="font-semibold text-safety-400 flex items-center gap-1.5">
            <span>Next Step: Send via WhatsApp</span>
          </p>
          <p className="text-[11px] text-slate-400 leading-normal">
            Clicking the button below will open WhatsApp in a new tab with your pre-filled inquiry. You can review the details and press send directly to our team.
          </p>
        </div>

        {/* Continue on WhatsApp Action */}
        <div className="space-y-2.5">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion('whatsapp_click', { category: 'Quote Form', label: 'Continue on WhatsApp' })}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm py-3 px-4 rounded-lg shadow-lg shadow-[#25D366]/20 transition-all transform hover:-translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 flex-shrink-0"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31" />
            </svg>
            <span>Continue on WhatsApp to Send Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={`tel:${BUSINESS_CONFIG.phone.raw}`}
            className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold text-xs py-2.5 px-3 rounded-lg transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-safety-500" />
            <span>Or Call Direct: {BUSINESS_CONFIG.phone.display}</span>
          </a>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800">
          <button
            type="button"
            onClick={() => {
              setReadyForWhatsApp(false);
              setFormData({
                name: '',
                companyName: '',
                phone: '',
                email: '',
                service: initialService,
                location: '',
                message: '',
                preferredContactMethod: 'WhatsApp',
                website_hp: '',
              });
            }}
            className="text-[11px] font-semibold text-slate-400 hover:text-safety-400 underline"
          >
            Start a New Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`} noValidate>
      {/* Honeypot field (hidden from humans, catches automated bots) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_hp">Leave this empty</label>
        <input
          type="text"
          id="website_hp"
          name="website_hp"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website_hp}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Full Name <span className="text-safety-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Ramesh Kumar"
            className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-safety-500 transition-colors ${
              fieldErrors.name ? 'border-red-400 bg-red-50' : 'border-slate-300'
            }`}
          />
          {fieldErrors.name && <p className="text-xs text-red-600 mt-1">{fieldErrors.name}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Company / Facility Name <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Apex Auto Components / Society"
            className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-safety-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Mobile Number <span className="text-safety-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 9812345678"
            className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-safety-500 transition-colors ${
              fieldErrors.phone ? 'border-red-400 bg-red-50' : 'border-slate-300'
            }`}
          />
          {fieldErrors.phone && <p className="text-xs text-red-600 mt-1">{fieldErrors.phone}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Email Address <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. ramesh@apex.com"
            className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-safety-500 ${
              fieldErrors.email ? 'border-red-400 bg-red-50' : 'border-slate-300'
            }`}
          />
          {fieldErrors.email && <p className="text-xs text-red-600 mt-1">{fieldErrors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Required Service */}
        <div>
          <label htmlFor="service" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Required Service <span className="text-safety-600">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-safety-500"
          >
            {VALID_SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {fieldErrors.service && <p className="text-xs text-red-600 mt-1">{fieldErrors.service}</p>}
        </div>

        {/* Site Location */}
        <div>
          <label htmlFor="location" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Site Location in NCR <span className="text-safety-600">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Sector 58 Faridabad / Okhla"
            className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-safety-500 ${
              fieldErrors.location ? 'border-red-400 bg-red-50' : 'border-slate-300'
            }`}
          />
          {fieldErrors.location && <p className="text-xs text-red-600 mt-1">{fieldErrors.location}</p>}
        </div>
      </div>

      {/* Preferred Contact Method */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
          Preferred Contact Method
        </label>
        <div className="grid grid-cols-3 gap-2">
          {(['WhatsApp', 'Phone Call', 'Email'] as const).map((method) => (
            <label
              key={method}
              className={`flex items-center justify-center gap-1.5 py-2 px-2 border rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                formData.preferredContactMethod === method
                  ? 'border-safety-600 bg-red-50 text-safety-700 font-semibold'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <input
                type="radio"
                name="preferredContactMethod"
                value={method}
                checked={formData.preferredContactMethod === method}
                onChange={handleChange}
                className="sr-only"
              />
              <span>{method}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Project Description / Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
          Project Details / Facility Scope <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Specify floor area, number of extinguishers, new setup vs AMC maintenance, or urgency..."
          className="w-full text-xs sm:text-sm px-3.5 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-safety-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-safety-600 hover:bg-safety-700 text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-lg shadow-md transition-all duration-150 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        <span>Review & Prepare WhatsApp Quote Request</span>
      </button>

      <p className="text-[11px] text-slate-500 text-center leading-normal">
        Your information is protected and used strictly to deliver your quotation. You will review the message before sending on WhatsApp.
      </p>
    </form>
  );
};
