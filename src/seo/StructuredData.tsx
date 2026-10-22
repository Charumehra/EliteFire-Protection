import React from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { SITE_URL } from './MetaTags';

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface StructuredDataProps {
  type?: 'LocalBusiness' | 'Service' | 'FAQPage' | 'Breadcrumbs' | 'BlogPosting';
  data?: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type = 'LocalBusiness', data }) => {
  let schemaContent: any = null;

  if (type === 'LocalBusiness') {
    schemaContent = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: BUSINESS_CONFIG.name,
      legalName: BUSINESS_CONFIG.legalName,
      description: `${BUSINESS_CONFIG.tagline} - Top-rated fire safety services, fire extinguisher refilling, alarm installations, and AMC in Faridabad & Delhi NCR.`,
      url: SITE_URL,
      image: `${SITE_URL}/images/elite-logo.png`,
      logo: `${SITE_URL}/images/elite-logo.png`,
      telephone: BUSINESS_CONFIG.phone.display,
      email: BUSINESS_CONFIG.email.primary,
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer, Cheque, UPI',
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_CONFIG.address.street,
        addressLocality: BUSINESS_CONFIG.address.city,
        addressRegion: BUSINESS_CONFIG.address.state,
        postalCode: BUSINESS_CONFIG.address.postalCode,
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '28.4089',
        longitude: '77.3178', // Faridabad coordinates
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Faridabad',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Delhi NCR',
        },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:00',
        },
      ],
      priceRange: '₹₹ - ₹₹₹',
      knowsAbout: [
        'Fire Safety Services',
        'Fire Extinguisher Refilling IS 2190',
        'Addressable Fire Alarm Systems IS 2189',
        'Fire Fighting Hydrant Systems IS 3844',
        'Automatic Fire Sprinklers IS 15105',
        'Fire Safety AMC Contracts',
        'Electrical Panel Thermography Audits',
        'Industrial CCTV Installation',
        'NBC 2016 Part 4 Compliance',
        'Faridabad Haryana Fire NOC Liaison',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Fire Protection and Safety Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Fire Alarm Systems Installation & Testing (IS 2189)',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Fire Fighting Hydrant & Sprinkler Systems (IS 3844)',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Fire Extinguisher Supply, Refilling & Hydro-Testing (IS 2190)',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Electrical Panel Maintenance & Thermography Safety Audit',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Commercial CCTV Surveillance Systems Installation',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Annual Maintenance Contracts (AMC) for Fire Safety',
            },
          },
        ],
      },
    };
  } else if (type === 'Service' && data) {
    schemaContent = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: data.title,
      description: data.shortDescription,
      provider: {
        '@type': 'LocalBusiness',
        name: BUSINESS_CONFIG.name,
        url: SITE_URL,
      },
      areaServed: [
        { '@type': 'City', name: 'Faridabad' },
        { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: data.title,
        itemListElement: data.equipmentCovered?.map((item: string) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: item,
          },
        })),
      },
    };
  } else if (type === 'FAQPage' && data) {
    schemaContent = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.map((faq: { question: string; answer: string }) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  } else if (type === 'Breadcrumbs' && data) {
    schemaContent = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: data.map((crumb: BreadcrumbItem, index: number) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.item.startsWith('http') ? crumb.item : `${SITE_URL}${crumb.item}`,
      })),
    };
  }

  if (!schemaContent) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaContent) }}
    />
  );
};
