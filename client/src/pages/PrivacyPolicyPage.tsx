import React from 'react';
import { MetaTags } from '../seo/MetaTags';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Privacy Policy | Elite Fire and Protection"
        description="Privacy policy detailing how Elite Fire and Protection collects, processes, and protects customer inquiry information and data."
        canonicalPath="/privacy-policy"
      />

      <Breadcrumbs items={[{ label: 'Privacy Policy', path: '/privacy-policy' }]} />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <h1 className="text-3xl font-extrabold text-navy-900 mb-2">Privacy Policy</h1>
            <p className="text-xs text-slate-400">Last updated: October 2026</p>
          </div>

          <p>
            At <strong>{BUSINESS_CONFIG.name}</strong>, we respect your privacy and are committed to protecting the personal and commercial information you share when requesting quotations, scheduling fire safety inspections, or communicating with our team.
          </p>

          <h2 className="text-xl font-bold text-navy-900 pt-4">1. Information We Collect</h2>
          <p>When you submit an inquiry form or contact us via WhatsApp or phone, we collect:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Your full name and company/facility name.</li>
            <li>Contact details (phone number, WhatsApp number, and email address).</li>
            <li>Site location and facility occupancy type (e.g. factory, warehouse, office).</li>
            <li>Technical project requirements, equipment specifications, and custom notes.</li>
          </ul>

          <h2 className="text-xl font-bold text-navy-900 pt-4">2. How We Use Your Information</h2>
          <p>The information we collect is strictly used to:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Prepare and deliver accurate quotations and engineering proposals.</li>
            <li>Schedule on-site safety audits, equipment surveys, or extinguisher pickups.</li>
            <li>Provide maintenance logs and compliance certificates for contracted services.</li>
            <li>We do not sell, rent, or lease your contact information to third-party marketing brokers.</li>
          </ul>

          <h2 className="text-xl font-bold text-navy-900 pt-4">3. Data Security & Storage</h2>
          <p>
            We implement administrative and technical safeguards to protect your lead information from unauthorized access, accidental alteration, or disclosure. Inquiries are stored securely and accessed only by authorized technical personnel.
          </p>

          <h2 className="text-xl font-bold text-navy-900 pt-4">4. Contacting Us</h2>
          <p>
            If you have questions about our data collection practices, contact our office at{' '}
            <a href={`mailto:${BUSINESS_CONFIG.email.primary}`} className="text-safety-600 underline">
              {BUSINESS_CONFIG.email.primary}
            </a>.
          </p>
        </div>
      </section>
    </>
  );
};
