import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Home, ArrowLeft, Phone } from 'lucide-react';
import { MetaTags } from '../seo/MetaTags';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <MetaTags
        title="404 - Page Not Found | Elite Fire and Protection"
        description="The requested page could not be found on Elite Fire and Protection."
        canonicalPath="/404"
      />

      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-slate-50">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-card border border-slate-200 p-8 text-center space-y-5">
          <div className="w-16 h-16 bg-red-100 text-safety-600 rounded-full flex items-center justify-center mx-auto">
            <Flame className="w-8 h-8" />
          </div>

          <h1 className="text-4xl font-extrabold text-navy-900">404</h1>
          <h2 className="text-lg font-bold text-slate-800">Page Not Found</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-safety-600 hover:bg-safety-700 text-white font-bold text-xs py-2.5 px-4 rounded-lg shadow transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>
            <a
              href={`tel:${BUSINESS_CONFIG.phone.raw}`}
              className="inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-safety-500" />
              <span>Contact Desk</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
