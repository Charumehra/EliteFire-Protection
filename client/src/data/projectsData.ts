export interface ProjectLayout {
  id: string;
  title: string;
  location: string;
  industry: string;
  servicesDelivered: string[];
  description: string;
  image: string;
  completionDate: string;
  isSampleLayout: boolean;
  specifications: string[];
}

export const SAMPLE_PROJECTS_DATA: ProjectLayout[] = [
  {
    id: 'sample-project-1',
    title: 'Automotive Component Manufacturing Plant System Layout',
    location: 'Sector 58 Industrial Area, Faridabad',
    industry: 'Automotive & Heavy Engineering',
    servicesDelivered: [
      'Fire Fighting Hydrant Ring Main',
      'Automatic Sprinkler Network',
      'Fire Pump Room (Main Electric + Diesel Standby + Jockey)',
    ],
    description:
      '[Sample Layout Architecture] Illustrates a comprehensive turnkey fire fighting installation for a 45,000 sq. ft. fabrication facility. Includes 8-bar pressure hydrant risers, 24 internal hose reels, 320 pendent sprinkler heads, and dual-source pump automation.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    completionDate: 'Illustrative Configuration (Q3 2025)',
    isSampleLayout: true,
    specifications: [
      'Main Pump: 2850 LPM @ 8.5 Bar Electric Driven',
      'Standby Pump: 2850 LPM Diesel Engine Driven Auto-Start',
      'Jockey Pump: 180 LPM @ 9.0 Bar',
      'Piping: Heavy Duty ERW Black Steel MS Class C with Red Enamel finish',
    ],
  },
  {
    id: 'sample-project-2',
    title: 'Multi-Tenant Commercial Office Tower Safety Infrastructure',
    location: 'Mathura Road Corridor, Faridabad',
    industry: 'Commercial IT & Corporate Offices',
    servicesDelivered: [
      'Addressable Fire Alarm System',
      'Server Room Clean Agent Flooding System',
      'Emergency Voice Evacuation Integration',
    ],
    description:
      '[Sample Layout Architecture] Demonstrates an integrated life-safety setup across an 8-story commercial building. Features 4-loop addressable panel, 450 optical smoke sensors, break-glass call points, and electromagnetic door interlocks.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    completionDate: 'Illustrative Configuration (Q4 2025)',
    isSampleLayout: true,
    specifications: [
      '4-Loop Intelligent Addressable Fire Alarm Control Panel',
      '450+ Micro-Addressed Photoelectric Smoke & Heat Detectors',
      'Clean Agent Suppression System for Level 2 Server Room',
      'Audio-Visual Strobe Hooters at every 30 meters along corridor exits',
    ],
  },
  {
    id: 'sample-project-3',
    title: 'E-Commerce Logistics & Cold Storage Facility',
    location: 'IMT Faridabad / Delhi NCR Highway',
    industry: 'Warehousing & Logistics',
    servicesDelivered: [
      'High-Bay Optical Beam Smoke Detection',
      'Commercial IP CCTV Perimeter Surveillance',
      'Fire Extinguisher Station Network (ABC & CO2)',
    ],
    description:
      '[Sample Layout Architecture] Showcases life safety and surveillance architecture for high-ceiling storage sheds. Features reflective optical beam detectors spanning 100-meter clear bays and 4K perimeter security cameras.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    completionDate: 'Illustrative Configuration (Q1 2026)',
    isSampleLayout: true,
    specifications: [
      '12 Transceiver Beam Detectors covering 60,000 sq. ft. storage bay',
      '32 Channel NVR with 4K Outdoor Bullet Cameras with Night Vision',
      '85 ISI Marked ABC Dry Powder & CO2 Fire Extinguishers placed as per IS 2190',
    ],
  },
  {
    id: 'sample-project-4',
    title: 'Multi-Tower Gated Residential Complex Fire AMC Framework',
    location: 'Greater Faridabad (Neharpar)',
    industry: 'Residential Societies & High-Rises',
    servicesDelivered: [
      'Comprehensive Fire Safety AMC',
      'Quarterly Riser & Pump Pressure Testing',
      'Corridor Fire Hose Reel Servicing & Extinguisher Refilling',
    ],
    description:
      '[Sample Layout Architecture] Typical annual maintenance structure for a 4-tower residential complex. Includes bi-monthly pump exercise, basement sprinkler testing, and fire extinguisher hydrostatic testing.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    completionDate: 'Illustrative Configuration (Active AMC Template)',
    isSampleLayout: true,
    specifications: [
      'Covering 4 Towers (G+14 Floors each) with Dual Basement Parking',
      'Quarterly Pressure Testing of 56 Landing Valves and 112 Hose Reels',
      'Annual Hydrostatic Pressure Testing & Refilling of 160 Extinguishers',
      'On-site Engineering Logbook Maintenance for RWA Compliance',
    ],
  },
];
