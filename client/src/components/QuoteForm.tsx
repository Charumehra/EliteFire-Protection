import React, { useState } from 'react';
import { z } from 'zod';
import { Send, AlertCircle, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
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
  const [submitting, setSubmitting] = useState(false);
  const [successLeadId, setSuccessLeadId] = useState<string | null>(null);

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
    return (
      `*NEW QUOTE INQUIRY - ELITE FIRE AND PROTECTION*%0A` +
      `---------------------------------------%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Company:* ${encodeURIComponent(formData.companyName || 'Not specified')}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email || 'Not specified')}%0A` +
      `*Service Required:* ${encodeURIComponent(formData.service)}%0A` +
      `*Site Location:* ${encodeURIComponent(formData.location)}%0A` +
      `*Preferred Contact:* ${encodeURIComponent(formData.preferredContactMethod)}%0A` +
      `*Scope/Notes:* ${encodeURIComponent(formData.message || 'No additional notes')}%0A` +
      `---------------------------------------%0A` +
      `_Submitted via Elite Fire & Protection Website_`
    );
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

    setSubmitting(true);

    // Static mode persistence: store in localStorage
    const leadId = 'EFP-' + Math.floor(100000 + Math.random() * 900000);
    const existing = JSON.parse(localStorage.getItem('elite_leads') || '[]');
    existing.unshift({
      id: leadId,
      ...formData,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('elite_leads', JSON.stringify(existing));

    trackConversion('quote_form_submit_success', {
      service: formData.service,
      location: formData.location,
      leadId,
    });

    setSuccessLeadId(leadId);
    setSubmitting(false);

    if (onSuccess) {
      onSuccess(leadId);
    }
  };

  if (successLeadId) {
    const waUrl = `https://wa.me/${BUSINESS_CONFIG.whatsapp.raw}?text=${generateWhatsAppMessage()}`;

    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 sm:p-8 text-center animate-fadeIn">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-2">Quote Request Prepared!</h3>
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          Thank you, <strong>{formData.name}</strong>. Your inquiry for <strong>{formData.service}</strong> in <strong>{formData.location}</strong> has been logged.
        </p>

        <div className="bg-white rounded-lg p-3 border border-emerald-200 inline-block text-xs text-slate-500 mb-6">
          Reference Quote ID: <code className="font-mono font-bold text-navy-900">{successLeadId}</code>
        </div>

        {/* Immediate WhatsApp Send Button */}
        <div className="space-y-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion('whatsapp_click', { category: 'Quote Form', label: 'Send via WhatsApp' })}
            className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 px-6 rounded-lg shadow-md transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Send Directly to WhatsApp for Immediate Quote</span>
          </a>

          <a
            href={`tel:${BUSINESS_CONFIG.phone.raw}`}
            className="w-full inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4 text-safety-500" />
            <span>Or Call Our Engineers: {BUSINESS_CONFIG.phone.display}</span>
          </a>
        </div>

        <div className="mt-5">
          <button
            type="button"
            onClick={() => {
              setSuccessLeadId(null);
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
            className="text-xs font-semibold text-slate-500 hover:text-safety-600 underline"
          >
            Submit Another Inquiry
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
            className={`w-full text-sm px-3.5 py-2.5 rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-safety-500 transition-colors ${
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
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-safety-500"
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
            className={`w-full text-sm px-3.5 py-2.5 rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-safety-500 transition-colors ${
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
            className={`w-full text-sm px-3.5 py-2.5 rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-safety-500 ${
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
            className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-safety-500"
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
            className={`w-full text-sm px-3.5 py-2.5 rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-safety-500 ${
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
                  ? 'border-safety-600 bg-safety-50 text-safety-700 font-semibold'
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
          className="w-full text-sm px-3.5 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-safety-500"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-safety-600 hover:bg-safety-700 text-white font-bold text-sm py-3 px-6 rounded-lg shadow-md transition-all duration-150 transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        <span>Submit Quotation Request</span>
      </button>

      <p className="text-[11px] text-slate-500 text-center leading-normal">
        Your information is protected and used strictly to deliver your quotation. No spam.
      </p>
    </form>
  );
};
