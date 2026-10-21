export interface GeneralFAQ {
  category: string;
  question: string;
  answer: string;
}

export const GENERAL_FAQS: GeneralFAQ[] = [
  {
    category: 'General & Service Coverage',
    question: 'What regions do you serve in Haryana and Delhi NCR?',
    answer:
      'Our primary operational service hub is in Faridabad, Haryana, where we service industrial zones (Sector 58, 59, 24, 25, IMT, Mathura Road), corporate parks, and residential sectors. We also provide dedicated fire safety installations and AMC services for commercial facilities across Delhi NCR, including Okhla, Gurugram, and Noida.',
  },
  {
    category: 'General & Service Coverage',
    question: 'How do I request a site inspection and quotation?',
    answer:
      'You can request a quotation directly through our online quote form, call our office, or message us on WhatsApp. Our fire safety engineers will consult with you on your facility blueprints or schedule an on-site survey to evaluate equipment requirements before providing a transparent, itemized estimate.',
  },
  {
    category: 'Fire Compliance & Standards',
    question: 'Do your installations comply with the National Building Code (NBC) of India?',
    answer:
      'Yes. All system layouts, pipe sizing, detector spacing, and equipment selections are engineered in strict conformance with relevant Bureau of Indian Standards (BIS) specifications—including IS 2189 (Alarm systems), IS 3844 (Hydrants), IS 15105 (Sprinklers), IS 2190 (Extinguishers)—and Part 4 of the National Building Code (NBC 2016).',
  },
  {
    category: 'Fire Compliance & Standards',
    question: 'Does installing a fire fighting system guarantee an official Fire NOC?',
    answer:
      'Statutory Fire Safety Certificates (Fire NOC) are issued exclusively by the state fire service department following their formal inspection. Our responsibility as your fire safety partner is to ensure your equipment and piping networks are correctly engineered, pressure-tested, and functioning according to statutory technical standards, providing the necessary test certificates for your inspection.',
  },
  {
    category: 'Fire Extinguishers & Refilling',
    question: 'How do I know if my fire extinguishers need immediate refilling or servicing?',
    answer:
      'Check the pressure gauge needle on the valve: if the needle is in the red "recharge" zone, or if the safety seal is broken, the cylinder must be serviced immediately. Additionally, under IS 2190, all extinguishers must undergo scheduled hydrostatic pressure testing (every 3 years for ABC/Water/Foam, and every 5 years for CO2) regardless of whether they have been discharged.',
  },
  {
    category: 'Fire Extinguishers & Refilling',
    question: 'Do you provide on-site pickup and delivery for fire extinguisher refilling in Faridabad?',
    answer:
      'Yes, we coordinate pickup of discharged or due-for-testing cylinders from your industrial or commercial premises in Faridabad and NCR, conduct precision refilling and hydro-testing at the workshop, and return them with updated inspection tags and test certificates.',
  },
  {
    category: 'AMC & Maintenance',
    question: 'What is included in a Fire Safety Annual Maintenance Contract (AMC)?',
    answer:
      'A standard AMC includes scheduled quarterly or monthly visits by certified technicians to perform functional testing on fire alarm panels, smoke detectors, manual call points, landing valves, fire hose reels, and automatic sprinkler flow switches; testing diesel and electric pump auto-start sequences; maintaining on-site logbooks; and providing priority support during emergency breakdowns.',
  },
  {
    category: 'Electrical & CCTV Safety',
    question: 'Why should an industrial facility conduct an electrical thermal imaging audit?',
    answer:
      'Electrical faults—such as loose cable connections, unbalanced phase loads, and degraded breaker contacts—generate extreme heat before causing arcing and catastrophic fire. Thermal imaging cameras detect these hot spots non-invasively while equipment is operating, allowing your team to tighten or replace connections during scheduled shutdowns before an electrical fire occurs.',
  },
];
