import React from 'react';
import { MetaTags } from '../seo/MetaTags';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export const TermsPage: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Terms of Service | Elite Fire and Protection"
        description="Terms and conditions governing quotation validity, installation scope, hydrostatic testing, and AMC service terms with Elite Fire and Protection."
        canonicalPath="/terms"
      />

      <Breadcrumbs items={[{ label: 'Terms of Service', path: '/terms' }]} />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <h1 className="text-3xl font-extrabold text-navy-900 mb-2">Terms of Service</h1>
            <p className="text-xs text-slate-400">Effective Date: October 2026</p>
          </div>

          <p>
            Welcome to the official website of <strong>{BUSINESS_CONFIG.name}</strong>. By accessing our website, requesting quotations, or engaging our life-safety engineering services, you agree to comply with the terms and conditions outlined below.
          </p>

          <h2 className="text-xl font-bold text-navy-900 pt-4">1. Quotations and Proposals</h2>
          <p>
            All price estimates, Bills of Quantities (BOQ), and proposals issued through this website or by our sales engineers are valid for 30 days from issuance unless explicitly stated otherwise in the written proposal. Material prices (such as steel MS piping and copper cabling) are subject to revision if market metal indices change significantly before contract execution.
          </p>

          <h2 className="text-xl font-bold text-navy-900 pt-4">2. Regulatory & Fire NOC Clarification</h2>
          <p>
            {BUSINESS_CONFIG.disclaimers.statutoryNotice} Elite Fire and Protection provides system installations that comply with technical BIS and NBC parameters. However, issuing statutory Fire NOC certificates remains within the exclusive jurisdiction of the state fire service department following their formal inspection.
          </p>

          <h2 className="text-xl font-bold text-navy-900 pt-4">3. Customer Site Responsibilities</h2>
          <p>For installations, pressure testing, and extinguisher refilling pickups, clients are responsible for:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Providing safe access to fire pump rooms, risers, electrical panels, and ceiling crawl spaces.</li>
            <li>Providing temporary electrical power and continuous water supply for hydrostatic testing.</li>
            <li>Designating a site coordinator for safety briefing and test authorization.</li>
          </ul>

          <h2 className="text-xl font-bold text-navy-900 pt-4">4. Annual Maintenance Contracts (AMC)</h2>
          <p>
            AMC agreements become binding only upon mutual signing of the formal Service Level Agreement (SLA). Preventative maintenance schedules and breakdown response times are governed by the specific terms of the agreed AMC contract tier.
          </p>
        </div>
      </section>
    </>
  );
};
