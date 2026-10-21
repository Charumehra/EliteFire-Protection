import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { SERVICES_DATA } from '../../data/servicesData';

interface Props {
  onRequestQuote: () => void;
}

export const ElectricalSystemsPage: React.FC<Props> = ({ onRequestQuote }) => {
  const service = SERVICES_DATA['electrical-systems'];
  return (
    <ServicePageTemplate
      service={service}
      onRequestQuote={onRequestQuote}
      relatedServiceSlugs={['fire-alarm-systems', 'amc-maintenance']}
    />
  );
};
