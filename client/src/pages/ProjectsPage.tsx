import React from 'react';
import { ShieldCheck, Info, CheckCircle2, ArrowRight } from 'lucide-react';
import { MetaTags } from '../seo/MetaTags';
import { StructuredData } from '../seo/StructuredData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SAMPLE_PROJECTS_DATA } from '../data/projectsData';
import { BUSINESS_CONFIG } from '../config/businessConfig';

interface ProjectsPageProps {
  onRequestQuote: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onRequestQuote }) => {
  return (
    <>
      <MetaTags
        title="Project Engineering Gallery & Layout Case Studies | Elite Fire"
        description="Explore sample life-safety system layout configurations and turnkey fire protection architectures for industrial, commercial, and residential facilities in Faridabad & NCR."
        canonicalPath="/projects"
      />
      <StructuredData type="LocalBusiness" />

      <Breadcrumbs items={[{ label: 'Projects & Layouts', path: '/projects' }]} />

      {/* Header */}
      <section className="bg-navy-900 text-white py-14 sm:py-20 border-b-4 border-safety-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <span className="text-xs font-bold text-safety-400 uppercase tracking-wider">
            System Architecture
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
            Projects & System Layout Case Studies
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Illustrative layout architectures demonstrating how Elite Fire integrates fire fighting pump rooms, addressable alarm loops, and extinguisher stations across various facility footprints.
          </p>
        </div>
      </section>

      {/* Disclaimer Alert */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed">
            <strong>Transparency Notice: </strong>
            {BUSINESS_CONFIG.disclaimers.portfolioNotice} The schematics below represent standard engineering templates deployed across commercial and industrial occupancies in Faridabad and NCR.
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SAMPLE_PROJECTS_DATA.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-navy-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded border border-slate-700">
                      {proj.industry}
                    </span>
                    <span className="absolute bottom-3 left-4 text-xs font-semibold bg-safety-600 text-white px-3 py-1 rounded">
                      {proj.location}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <h2 className="text-xl font-bold text-navy-900 leading-snug">
                      {proj.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {proj.description}
                    </p>

                    <div>
                      <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Delivered Engineering Services:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.servicesDelivered.map((svc, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-1 rounded border border-slate-200"
                          >
                            {svc}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Layout Specifications:
                      </p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {proj.specifications.map((spec, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-safety-600 font-bold">&bull;</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                  <span className="text-xs text-slate-400 font-mono">
                    {proj.completionDate}
                  </span>
                  <button
                    type="button"
                    onClick={onRequestQuote}
                    className="text-xs font-bold text-safety-600 hover:text-safety-700 flex items-center gap-1"
                  >
                    <span>Request Similar Setup</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
