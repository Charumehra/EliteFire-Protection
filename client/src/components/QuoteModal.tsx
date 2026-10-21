import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { QuoteForm } from './QuoteForm';
import { BUSINESS_CONFIG } from '../config/businessConfig';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  serviceTitle = 'Fire Alarm Systems',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 sm:p-7 overflow-hidden border border-slate-200 animate-fadeIn text-slate-900">
        {/* Header */}
        <div className="flex justify-between items-start pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <img
              src={BUSINESS_CONFIG.branding.shieldIconPath}
              alt="Elite Shield"
              className="w-10 h-10 object-contain rounded bg-[#0a0a0c] p-1"
            />
            <div>
              <h2 id="modal-headline" className="text-lg sm:text-xl font-bold text-navy-900">
                Request a Fire Safety Quotation
              </h2>
              <p className="text-xs text-slate-500">
                Direct estimates for commercial, industrial & residential facilities
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-safety-600"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Body */}
        <div className="mt-4">
          <QuoteForm initialService={serviceTitle} />
        </div>
      </div>
    </div>
  );
};
