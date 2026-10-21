import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { SERVICES_DATA } from '../../data/servicesData';

interface Props {
  onRequestQuote: () => void;
}

export const CctvSystemsPage: React.FC<Props> = ({ onRequestQuote }) => {
  const service = SERVICES_DATA['cctv-systems'];
  return (
    <ServicePageTemplate
      service={service}
      onRequestQuote={onRequestQuote}
      relatedServiceSlugs={['electrical-systems', 'amc-maintenance']}
    />
  );
};
