export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  updatedDate: string;
  author: string;
  authorRole: string;
  summary: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  content: string[]; // Structured paragraphs with headings
}

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'how-to-choose-fire-extinguisher-commercial-property',
    title: 'How to Choose the Right Fire Extinguisher for Your Commercial Property in India',
    category: 'Fire Extinguishers',
    readTime: '6 min read',
    publishedDate: '2026-01-15',
    updatedDate: '2026-02-10',
    author: 'Engineering Technical Desk',
    authorRole: 'Fire Safety Specialist',
    summary:
      'Understanding fire classifications (Class A, B, C, D, K) under Indian Standard IS 2190 to select the correct extinguishing agent for offices, factories, and server rooms.',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80',
    metaTitle: 'Choosing Fire Extinguishers for Commercial Facilities | IS 2190 Guide',
    metaDescription:
      'Guide to selecting the right fire extinguisher (ABC, CO2, Foam, Clean Agent) for commercial buildings and factories in India as per IS 2190 standards.',
    keywords: ['choose fire extinguisher commercial', 'IS 2190 extinguisher guide', 'ABC vs CO2 extinguisher India'],
    content: [
      'Selecting the appropriate fire extinguisher for a commercial or industrial facility is not merely a statutory compliance exercise; it is the first line of defense that prevents an incipient fire from turning into an uncontrollable blaze.',
      'Under the Bureau of Indian Standards (BIS) and IS 2190, fires are classified into distinct categories based on fuel type: Class A (ordinary combustibles like wood, paper, textiles), Class B (flammable liquids such as oils, paints, solvents), Class C (flammable gases and electrical hazards), Class D (combustible metals like magnesium and aluminum), and Class K/F (commercial cooking oils and fats).',
      'For general office spaces, corridors, and warehousing, multi-purpose ABC Dry Powder extinguishers containing Mono Ammonium Phosphate (MAP 50% or 90%) are the standard recommendation due to their versatile capability against Class A, B, and C hazards.',
      'However, using ABC dry powder inside server rooms, telecom suites, or expensive CNC machining centers is a severe mistake. The fine chemical powder is corrosive and leaves residue that destroys delicate microcircuits. For sensitive electronic infrastructure, Carbon Dioxide (CO2) or Clean Agent gaseous extinguishers (such as HFC-236fa or Novec alternatives) are strictly required because they leave zero chemical residue.',
      'Always ensure every extinguisher carries a valid ISI certification mark under IS 15683 and is wall-mounted at an accessible height (handle approximately 1.0 to 1.5 meters from floor level) with clear signage.',
    ],
  },
  {
    id: 'post-2',
    slug: 'fire-extinguisher-inspection-refilling-regulations-india',
    title: 'When Should Fire Extinguishers Be Inspected and Refilled? Indian Regulatory Norms',
    category: 'Inspection & Maintenance',
    readTime: '5 min read',
    publishedDate: '2026-02-01',
    updatedDate: '2026-02-18',
    author: 'Engineering Technical Desk',
    authorRole: 'Fire Safety Specialist',
    summary:
      'A breakdown of IS 2190 maintenance intervals: quarterly visual checks, annual refilling procedures, and mandatory hydrostatic pressure testing schedules.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    metaTitle: 'Fire Extinguisher Refilling & Hydro-Testing Intervals | IS 2190 Norms',
    metaDescription:
      'Learn the legal and safety inspection timelines for fire extinguishers in India. Quarterly visual checks, discharge refilling, and hydrostatic test mandates.',
    keywords: ['fire extinguisher refilling frequency India', 'IS 2190 hydro test schedule', 'fire safety audit timeline'],
    content: [
      'One of the most dangerous misconceptions among facility managers is assuming that an untouched fire extinguisher remains operational indefinitely. Without regular maintenance, extinguishing agents compact into hard cake, rubber discharge hoses crack, and internal cylinder pressure bleeds off.',
      'Under IS 2190 (Code of Practice for Selection, Installation and Maintenance of Portable Fire Extinguishers), facilities must follow a tiered inspection regimen:',
      '1. Monthly/Quarterly In-House Checks: Verify that the pressure gauge indicator is centered in the green operating band, the safety pull-pin and plastic tamper seal are intact, the discharge nozzle is free of foreign debris, and the physical shell exhibits no deep corrosion or denting.',
      '2. Immediate Refilling After Discharge: An extinguisher that has been discharged—even for a one-second test blast—must be taken out of service immediately and refilled. Partial discharge depletes the propellant nitrogen charge, rendering the extinguisher unable to build pressure in an emergency.',
      '3. Mandatory Hydrostatic Pressure Testing: Because extinguishers store high gas pressures, steel and aluminum cylinders undergo continuous metal fatigue. IS 2190 mandates that water, foam, and ABC extinguishers must be hydrostatically pressure tested in a water jacket every 3 years, while high-pressure seamless CO2 cylinders must be tested every 5 years.',
    ],
  },
  {
    id: 'post-3',
    slug: 'benefits-of-annual-maintenance-contract-fire-safety',
    title: 'Why an Annual Maintenance Contract (AMC) is Critical for Industrial Fire Safety',
    category: 'AMC & Compliance',
    readTime: '7 min read',
    publishedDate: '2026-02-14',
    updatedDate: '2026-02-20',
    author: 'Engineering Technical Desk',
    authorRole: 'Fire Safety Specialist',
    summary:
      'How comprehensive AMC agreements protect property value, ensure fire pump readiness, prevent catastrophic downtime, and maintain statutory Fire NOC audit documentation.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    metaTitle: 'Benefits of Fire Safety AMC for Commercial & Industrial Facilities',
    metaDescription:
      'Discover why an AMC is vital for fire pumps, hydrant lines, sprinkler networks, and alarm panels. Maintaining regulatory Fire NOC readiness in Faridabad and NCR.',
    keywords: ['fire safety AMC benefits', 'fire pump maintenance contract', 'industrial fire safety audit Faridabad'],
    content: [
      'In an industrial facility or multi-story commercial complex, fire protection is not a single device; it is an interconnected ecosystem of water storage tanks, electric and diesel pumps, pipe manifolds, pressure sensors, alarm panels, and suppression nozzles.',
      'If any single link in this chain fails—for example, if a diesel pump battery is discharged, or a landing valve spindle is seized by rust—the entire multi-crore fire safety installation is rendered useless during a fire emergency.',
      'An Annual Maintenance Contract (AMC) provides structured engineering oversight that eliminates these hidden points of failure through scheduled preventative audits.',
      'Under an AMC, certified engineers inspect and exercise fire pumps under real pressure load, test automatic sprinkler alarm check valves, verify loop communication across addressable smoke sensors, and lubricate valve glands.',
      'Furthermore, having an active, professional AMC provides facilities with documented maintenance logbooks and pressure test records required during annual Fire NOC renewals and industrial property insurance policy audits.',
    ],
  },
  {
    id: 'post-4',
    slug: 'what-to-consider-before-installing-fire-alarm-system',
    title: 'Key Considerations Before Installing a Commercial Fire Alarm System',
    category: 'Fire Alarm Systems',
    readTime: '6 min read',
    publishedDate: '2026-02-20',
    updatedDate: '2026-02-20',
    author: 'Engineering Technical Desk',
    authorRole: 'Fire Safety Specialist',
    summary:
      'Comparing addressable versus conventional fire alarm panels, loop calculation, detector spacing, and HVAC interlocks according to NBC 2016.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    metaTitle: 'Commercial Fire Alarm System Installation Considerations | IS 2189',
    metaDescription:
      'Planning a fire alarm installation in Faridabad or Delhi NCR? Learn about addressable loops, detector placement, false alarm mitigation, and building interlocks.',
    keywords: ['fire alarm installation guide', 'addressable vs conventional alarm', 'commercial fire alarm planning'],
    content: [
      'Installing a fire alarm system is one of the most critical life-safety investments for any corporate, manufacturing, or institutional facility. An effective alarm system detects smoke or temperature surges within seconds, initiating safe evacuation and emergency containment.',
      'Before commissioning a system, property owners and project consultants must evaluate several key technical factors:',
      '1. Addressable vs. Conventional Technology: Conventional zoned panels may be suitable for small single-story workshops or retail outlets (under 5,000 sq. ft.). However, for multi-story corporate towers, healthcare facilities, and larger factories, intelligent addressable systems are essential because they pinpoint the exact detector in alarm down to room number and floor coordinates.',
      '2. Sensor Type Matching Room Hazards: Optical photoelectric detectors are best for detecting smoldering fires in offices and corridors. However, in dusty warehouses, steam-heavy laundry areas, or generator rooms, rate-of-rise thermal heat sensors or multi-criteria sensors must be deployed to avoid rampant false alarms.',
      '3. Building System Integration: Modern fire alarm systems must interface directly with building management infrastructure. In the event of a confirmed alarm, the panel should automatically command HVAC dampers to shut down (preventing smoke propagation), release magnetic fire doors, recall passenger elevators to ground level, and activate emergency strobe hooters.',
    ],
  },
];
