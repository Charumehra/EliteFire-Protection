/**
 * Elite Fire and Protection - Centralized Business Configuration
 *
 * Primary Branding Reference: Official Company Logo (Obsidian Black & Crimson Safety Red)
 * Visual Assets: /images/elite-logo.jpeg & /images/elite-shield-icon.png
 */

export interface ServiceArea {
  name: string;
  isPrimary: boolean;
  description: string;
  keyHubs: string[];
}

export const BUSINESS_CONFIG = {
  name: 'Elite Fire and Protection',
  legalName: 'Elite Fire and Protection Services',
  tagline: 'SAFETY | PROTECTION | RELIABILITY',
  subtitle: 'Industrial & Commercial Fire Safety, Suppression & AMC Solutions',

  // Visual Branding Assets
  branding: {
    logoPath: '/images/elite-logo.jpeg',
    shieldIconPath: '/images/elite-shield-icon.png',
    primaryColorHex: '#dc2626', // Flame Safety Red from logo
    darkBackgroundHex: '#0a0a0c', // Obsidian Dark from logo
  },

  // Contact Information (Centralized)
  phone: {
    display: '+91 98XXX XXXXX',
    raw: '+919800000000', // tel: format
    isPlaceholder: true,
  },
  whatsapp: {
    display: '+91 98XXX XXXXX',
    raw: '919800000000', // Official international format without symbols
    defaultMessage:
      'Hello Elite Fire and Protection, I would like to enquire about your fire safety services in Faridabad/Delhi NCR. Please share details and quotation.',
    isPlaceholder: true,
  },
  email: {
    primary: 'contact@elitefireandprotection.in',
    support: 'support@elitefireandprotection.in',
    isPlaceholder: false,
  },

  // Operating Hours
  hours: {
    regular: 'Monday – Saturday: 9:00 AM – 7:00 PM',
    sunday: 'Sunday: Emergency Callouts / By Appointment',
    emergencyAvailabilityNote: 'Urgent breakdown service available for active AMC contract holders',
  },

  // Physical Location & Service Coverage
  address: {
    street: 'Plot No. [Pending Verification], Industrial Area',
    city: 'Faridabad',
    state: 'Haryana',
    postalCode: '12100X',
    country: 'India',
    formatted: 'Industrial Area, Faridabad, Haryana 12100X, India',
    isPlaceholder: true,
  },

  // Service Areas
  serviceAreas: [
    {
      name: 'Faridabad',
      isPrimary: true,
      description: 'Primary operational hub covering industrial clusters, commercial belts, and residential sectors.',
      keyHubs: [
        'Sector 58 Industrial Area',
        'Sector 59 Industrial Area',
        'Sector 24 & 25 Industrial Area',
        'IMT Faridabad (Industrial Model Township)',
        'Mathura Road Commercial Corridor',
        'Neharpar (Greater Faridabad)',
        'NIT Faridabad',
      ],
    },
    {
      name: 'Delhi NCR',
      isPrimary: false,
      description: 'Dedicated commercial service coverage for corporate complexes, IT towers, and manufacturing facilities.',
      keyHubs: [
        'Okhla Industrial Area (Phases I, II, III)',
        'Gurugram Commercial & Cyber City Belts',
        'Noida & Greater Noida Industrial Sectors',
        'Mohan Cooperative Industrial Estate',
        'South Delhi Commercial Facilities',
      ],
    },
  ] as ServiceArea[],

  // Standards and Practices Adhered To (Technical References)
  technicalStandards: [
    { code: 'IS 2190', label: 'Code of practice for selection, installation and maintenance of portable fire extinguishers' },
    { code: 'IS 3844', label: 'Code of practice for installation of internal fire hydrants in high rise buildings' },
    { code: 'IS 15105', label: 'Design and installation of fixed automatic sprinkler fire extinguishing systems' },
    { code: 'IS 2189', label: 'Code of practice for selection, installation and maintenance of automatic fire detection and alarm system' },
    { code: 'NBC 2016', label: 'National Building Code of India (Part 4: Fire and Life Safety)' },
  ],

  // Disclaimers
  disclaimers: {
    statutoryNotice:
      'Elite Fire and Protection installs and services systems designed in accordance with relevant Indian Standards (IS Codes) and the National Building Code (NBC 2016). Statutory Fire NOC issuance is subject to the sole jurisdiction of state fire service authorities following their formal site inspection.',
    portfolioNotice:
      'Project configurations and layout case studies displayed illustrate typical system capabilities and engineering standards. Specific past client references are furnished during formal proposal submissions upon mutual nondisclosure.',
  },
};
