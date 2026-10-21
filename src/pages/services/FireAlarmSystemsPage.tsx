import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { SERVICES_DATA } from '../../data/servicesData';

interface Props {
  onRequestQuote: () => void;
}

export const FireAlarmSystemsPage: React.FC<Props> = ({ onRequestQuote }) => {
  const service = SERVICES_DATA['fire-alarm-systems'];
  return (
    <ServicePageTemplate
      service={service}
      onRequestQuote={onRequestQuote}
      relatedServiceSlugs={['fire-fighting-systems', 'amc-maintenance']}
    />
  );
};
