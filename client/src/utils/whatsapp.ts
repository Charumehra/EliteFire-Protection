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
 * Service-specific WhatsApp message generator
 */
export function getServiceWhatsAppUrl(serviceTitle: string, location?: string): string {
  const loc = location ? ` in ${location}` : ' in Faridabad / Delhi NCR';
  const msg = `Hello Elite Fire and Protection, I would like to inquire about your "${serviceTitle}" services${loc}. Please share quotation details and technical specifications.`;
  return getWhatsAppUrl(msg);
}
