import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { SERVICES_DATA } from '../../data/servicesData';

interface Props {
  onRequestQuote: () => void;
}

export const AmcMaintenancePage: React.FC<Props> = ({ onRequestQuote }) => {
  const service = SERVICES_DATA['amc-maintenance'];
  return (
    <ServicePageTemplate
      service={service}
      onRequestQuote={onRequestQuote}
      relatedServiceSlugs={['fire-alarm-systems', 'fire-fighting-systems', 'fire-extinguisher-supply-refilling']}
    />
  );
};
