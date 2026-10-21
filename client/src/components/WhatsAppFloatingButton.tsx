import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackConversion } from '../utils/analytics';

export const WhatsAppFloatingButton: React.FC = () => {
  const handleClick = () => {
    trackConversion('whatsapp_click', {
      category: 'Floating Widget',
      label: 'WhatsApp Quick Chat Trigger',
    });
  };

  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-40">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-400"
        aria-label="Chat on WhatsApp with Elite Fire and Protection"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
