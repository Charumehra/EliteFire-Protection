import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackConversion } from '../utils/analytics';

export const MobileStickyContactBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-2 sm:hidden shadow-lg flex items-center gap-2">
      <a
        href={`tel:${BUSINESS_CONFIG.phone.raw}`}
        onClick={() => trackConversion('phone_click', { category: 'Mobile Sticky Bar', label: 'Call Click' })}
        className="flex-1 bg-navy-900 text-white font-bold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 active:bg-navy-800"
      >
        <Phone className="w-3.5 h-3.5 text-safety-500" />
        <span>Call Now</span>
      </a>

      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackConversion('whatsapp_click', { category: 'Mobile Sticky Bar', label: 'WhatsApp Click' })}
        className="flex-1 bg-emerald-600 text-white font-bold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 active:bg-emerald-700"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
