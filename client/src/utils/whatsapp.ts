import { BUSINESS_CONFIG } from '../config/businessConfig';

/**
 * Generates an official WhatsApp click-to-chat URL with a prefilled message
 * @param customMessage Optional contextual message
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const number = BUSINESS_CONFIG.whatsapp.raw;
  const message = customMessage || BUSINESS_CONFIG.whatsapp.defaultMessage;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

/**
 * Service-specific WhatsApp message generator with contextual intent
 */
export function getServiceWhatsAppUrl(serviceTitle: string, location?: string): string {
  const targetArea = location || 'Faridabad / Delhi NCR';
  const msg = `Hello Elite Fire and Protection, I am interested in "${serviceTitle}" in ${targetArea}. Please contact me to discuss my requirements and quotation.`;
  return getWhatsAppUrl(msg);
}
