/**
 * Analytics and Conversion Event Tracker
 * Dispatches events to window.gtag (Google Analytics 4 / Google Tag Manager) if loaded,
 * or logs to console during development.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export type ConversionEventName =
  | 'whatsapp_click'
  | 'phone_click'
  | 'email_click'
  | 'quote_form_submit_success'
  | 'quote_form_submit_error';

export interface ConversionEventParams {
  category?: string;
  label?: string;
  service?: string;
  location?: string;
  leadId?: string;
}

export function trackConversion(eventName: ConversionEventName, params?: ConversionEventParams): void {
  // If Google Analytics 4 (gtag) is installed on the page:
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      event_category: params?.category || 'Lead Generation',
      event_label: params?.label,
      service_type: params?.service,
      lead_location: params?.location,
      lead_id: params?.leadId,
    });
  }

  // Also push to standard dataLayer for Google Tag Manager compatibility
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }

  // Development logger
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics Event Tracked] ${eventName}`, params);
  }
}
