export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  tagline: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  keyHighlights: string[];
  equipmentCovered: string[];
  worksIncluded: string[];
  benefits: string[];
  relevantIndustries: string[];
  standardsFollowed: string[];
  faqs: ServiceFAQ[];
  whatsappMessage: string;
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  'fire-alarm-systems': {
    id: 'fire-alarm-systems',
    slug: 'fire-alarm-systems',
    title: 'Fire Alarm Systems Installation & Maintenance',
    tagline: 'Reliable, Early-Stage Smoke, Heat & Flame Detection for Commercial & Industrial Facilities',
    shortDescription:
      'Design, installation, commissioning, testing, and maintenance of addressable and conventional fire alarm panels, multi-sensor detectors, manual call points, and emergency voice evacuation systems.',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    metaTitle: 'Fire Alarm System Installation & Maintenance in Faridabad | Elite Fire',
    metaDescription:
      'Expert fire alarm installation, addressable control panels, smoke detectors, and routine loop testing in Faridabad and Delhi NCR. Adhering to IS 2189 and NBC norms.',
    keywords: [
      'fire alarm system installation Faridabad',
      'addressable fire alarm panel Delhi NCR',
      'commercial smoke detection systems',
      'manual call point installation',
      'fire alarm AMC Faridabad',
    ],
    keyHighlights: [
      'Pinpoint fault isolation with micro-addressed loop architectures',
      'Integration with HVAC air dampers and access control magnetic doors',
      'High-sensitivity photoelectric smoke detectors and thermal rate-of-rise sensors',
      'Dual battery backup systems to maintain standby operation during power outages',
    ],
    equipmentCovered: [
      'Addressable Fire Alarm Control Panels (1-4 Loops)',
      'Conventional Fire Alarm Panels (2-16 Zones)',
      'Optical Photoelectric Smoke Detectors',
      'Fixed Temperature & Rate-of-Rise Heat Detectors',
      'Manual Call Points (Break Glass / Resettable Push Type)',
      'Electronic Sounders, Hooters & Strobe Flasher Units',
      'Repeater / Annunciator Panels for Security Control Rooms',
      'Fire-Resistant Armored Cabling & Conduit Systems',
    ],
    worksIncluded: [
      'Site layout review and detector spacing calculation as per IS 2189',
      'Complete conduit laying, fire-rated cabling, and panel mounting',
      'Loop configuration, address assignment, and zone programming',
      'Full system commissioning with simulated smoke canister and heat testing',
      'Periodic sensor sensitivity calibration and sounder audibility verification',
    ],
    benefits: [
      'Earliest possible detection of smoldering fires before open flame erupts',
      'Exact room/zone identification minimizing evacuation panic',
      'Full compliance with building safety codes and insurance carrier requirements',
      'Reduced false alarm frequency through smart multi-criteria sensor algorithms',
    ],
    relevantIndustries: [
      'Manufacturing & Production Plants',
      'Commercial Corporate IT Parks',
      'Warehousing & Logistics Hubs',
      'Hospitals & Healthcare Clinics',
      'High-Rise Residential Complexes',
    ],
    standardsFollowed: ['IS 2189:2008 (Detection & Alarm)', 'NBC 2016 Part 4'],
    faqs: [
      {
        question: 'What is the main difference between conventional and addressable fire alarm systems?',
        answer:
          'A conventional fire alarm system divides a building into broad zones (e.g., Zone 1 = 2nd Floor). When a detector triggers, you know the floor but not the exact room. An addressable system assigns an individual electronic address to every detector and manual call point, enabling security personnel to instantly pinpoint the exact room or corridor in alarm on the central panel display.',
      },
      {
        question: 'How often should commercial fire alarm detectors be inspected and tested?',
        answer:
          'As per IS 2189 guidelines, fire alarm systems require routine visual checks daily/weekly, functional zone testing and battery backup tests quarterly, and a comprehensive annual calibration and smoke canister sensitivity test for every detector.',
      },
      {
        question: 'Can the fire alarm panel trigger automatic building evacuations and unlock emergency doors?',
        answer:
          'Yes. Modern addressable fire panels can interface via relay modules with access control systems (releasing electromagnetic locks on fire exit doors), passenger elevators (grounding them), and HVAC fresh air dampers (stopping smoke circulation).',
      },
    ],
    whatsappMessage:
      'Hello Elite Fire, I am interested in Fire Alarm System installation/maintenance for our facility in Faridabad/Delhi NCR. Please provide details.',
  },

  'fire-fighting-systems': {
    id: 'fire-fighting-systems',
    slug: 'fire-fighting-systems',
    title: 'Fire Fighting Systems: Hydrants, Sprinklers & Pump Rooms',
    tagline: 'Engineered Water-Based Fire Suppression Systems Built for High-Risk Commercial & Industrial Facilities',
    shortDescription:
      'Turnkey installation and maintenance of internal wet hydrants, external landing valves, automatic sprinkler networks, wet riser piping, and diesel/electric fire pump houses.',
    heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    metaTitle: 'Fire Fighting System Installation & Hydrant Maintenance Faridabad | Elite Fire',
    metaDescription:
      'Industrial fire hydrant systems, automatic fire sprinklers, wet risers, and fire pump room installation in Faridabad & Delhi NCR. Engineered as per IS 3844 & IS 15105.',
    keywords: [
      'fire fighting system contractor Faridabad',
      'fire hydrant installation Delhi NCR',
      'automatic fire sprinkler systems',
      'fire pump room maintenance',
      'wet riser fire fighting Faridabad',
    ],
    keyHighlights: [
      'Heavy-gauge MS piping with anti-corrosive primer and safety-red enamel coating',
      'Automated tri-pump setups: Main Electric Pump, Standby Diesel Engine, and Jockey Pump',
      'UL/FM listed quartzoid glass bulb automatic sprinkler heads (68°C / 79°C ratings)',
      'Hydrostatic pressure testing of distribution manifolds at 1.5x working pressure',
    ],
    equipmentCovered: [
      'Internal Hydrant Landing Valves (Single & Double Head)',
      'Heavy Duty RRL (Reinforced Rubber Lined) Fire Hoses & Hose Boxes',
      'Swinging Type Fire Hose Reels with Shut-Off Nozzles',
      'Pendent, Upright, and Sidewall Automatic Sprinkler Heads',
      'Alarm Check Valves (Wet Pipe System) with Water Motor Gongs',
      'Electric Main Fire Pumps, Standby Diesel Engine Pumps & Jockey Pumps',
      'Automatic Pump Controller Panels with Pressure Switch Actuators',
      'Four-Way Fire Brigade Inlets & Suction Draw-Off Connections',
    ],
    worksIncluded: [
      'Hydraulic calculation and pipe diameter sizing matching facility hazard class',
      'Fabrication, welding, bracket grooving, and MS pipe installation',
      'Fire pump room alignment, vibration isolator mounting, and fuel tank setup',
      'Pressure testing of all risers and branch lines to certify zero leakage',
      'Flow discharge rate verification and periodic nozzle flushing',
    ],
    benefits: [
      'Immediate water availability under regulated bar pressure across all facility floors',
      'Automatic fire suppression at the origin point without waiting for external fire brigades',
      'Mandatory prerequisite for obtaining and renewing commercial Fire Safety NOCs',
      'Substantial reduction in industrial insurance premium rates for certified facilities',
    ],
    relevantIndustries: [
      'Automotive & Engineering Factories',
      'Logistics Warehouses & Cold Storages',
      'Chemical & Polymer Manufacturing',
      'Multi-Story Commercial Complexes',
      'Residential High-Rise Societies',
    ],
    standardsFollowed: ['IS 3844 (Internal Hydrants)', 'IS 15105 (Sprinkler Systems)', 'NBC 2016 Part 4'],
    faqs: [
      {
        question: 'What is the role of a jockey pump in a fire hydrant system?',
        answer:
          'A jockey pump is a small, low-volume pump that keeps the water pressure inside the fire piping network constantly pressurized (typically between 7 to 8 bar). It compensates for minor pipe leaks or temperature variations without activating the high-capacity main electric or diesel fire pumps.',
      },
      {
        question: 'At what temperature do automatic fire sprinkler heads activate?',
        answer:
          'Standard commercial sprinklers use a temperature-sensitive glass bulb with liquid that expands and shatters at predetermined temperatures—most commonly 68°C (red liquid) for ordinary hazard areas, or 79°C (yellow liquid) for boiler rooms or warmer industrial spaces. Sprinklers activate individually only directly over the heat source.',
      },
      {
        question: 'What is involved in hydrostatic testing for hydrant pipes?',
        answer:
          'Hydrostatic testing involves filling the entire piping network with water and subjecting it to elevated test pressure (usually 1.5 times the maximum rated operating pressure, or at least 14 bar) for a minimum of two hours to verify pipe joint integrity and check for micro-cracks or weeping welds.',
      },
    ],
    whatsappMessage:
      'Hello Elite Fire, I need an inquiry regarding Fire Fighting Hydrant/Sprinkler systems for our property in Faridabad/Delhi NCR.',
  },

  'fire-extinguisher-supply-refilling': {
    id: 'fire-extinguisher-supply-refilling',
    slug: 'fire-extinguisher-supply-refilling',
    title: 'Fire Extinguisher Supply, Refilling & Hydro-Testing',
    tagline: 'Certified Supply of Portable & Trolley Extinguishers with IS 2190 Compliant Refilling & Testing',
    shortDescription:
      'Supply of new ISI-marked fire extinguishers (ABC Powder, CO2, Water, Mechanical Foam, Clean Agent) alongside certified gas refilling, hydrostatic pressure testing, and inspection tagging.',
    heroImage: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1200&q=80',
    metaTitle: 'Fire Extinguisher Supply & Refilling in Faridabad | Elite Fire',
    metaDescription:
      'Certified fire extinguisher refilling in Faridabad and Delhi NCR. ABC dry powder, CO2, clean agent, foam refilling and hydraulic pressure testing adhering to IS 2190.',
    keywords: [
      'fire extinguisher refilling in Faridabad',
      'fire extinguisher supplier Faridabad',
      'CO2 fire extinguisher refill Delhi NCR',
      'ABC powder fire extinguisher supply',
      'fire extinguisher hydraulic pressure test',
    ],
    keyHighlights: [
      '100% genuine extinguishing agents (Mono Ammonium Phosphate MAP 50/90, Pure CO2)',
      'Hydrostatic stretch testing of seamless and welded cylinders with test certificates',
      'Tamper-evident security seals, pressure gauge inspections, and safety pin verification',
      'Complete maintenance log tagging with refilling date, due date, and cylinder serial numbers',
    ],
    equipmentCovered: [
      'ABC Dry Powder Extinguishers (1kg, 2kg, 4kg, 6kg, 9kg)',
      'Carbon Dioxide (CO2) Extinguishers (2kg, 3kg, 4.5kg, 9kg)',
      'Mechanical Foam (AFFF) Extinguishers (9 Litres & 50 Litre Trolley Mounted)',
      'Water CO2 Type Extinguishers (9 Litres)',
      'Clean Agent (HFC 236fa / Novec 1230 Alternative) Gas Extinguishers',
      'Heavy-Duty Modular Automatic Ceiling-Mounted Extinguishers (2kg, 5kg, 10kg)',
      'Extinguisher Wall Mounting Brackets, Covers & Floor Stands',
    ],
    worksIncluded: [
      'Free visual inspection and weighing of on-site fire extinguishers',
      'Safe discharge and eco-friendly collection of expired powder or foam',
      'Internal cylinder inspection for pitting, corrosion, or scale build-up',
      'Hydraulic pressure test in specialized testing jacket',
      'Precision mechanical refilling, nitrogen pressurization, and bubble leak immersion testing',
      'Application of waterproof inspection record labels and tamper-proof safety seals',
    ],
    benefits: [
      'Guaranteed discharge readiness in the event of an incipient fire outbreak',
      'Full compliance during state fire department inspections and safety audits',
      'Prevention of cylinder ruptures caused by corroded or over-pressurized shells',
      'Cost-efficient maintenance extending cylinder lifespan up to 10–15 years',
    ],
    relevantIndustries: [
      'Factories & Heavy Workshops',
      'Commercial Offices & Banks',
      'Server Rooms & Data Centers',
      'Hospitals & Laboratories',
      'Restaurants & Commercial Kitchens',
    ],
    standardsFollowed: ['IS 2190:2010 (Extinguisher Selection & Maintenance)', 'IS 15683 (ISI Performance Specs)'],
    faqs: [
      {
        question: 'How often does a fire extinguisher need to be refilled or serviced in India?',
        answer:
          'Under IS 2190 guidelines, fire extinguishers must undergo a quarterly visual inspection (checking pressure gauge needle in the green zone, nozzle blockage, seal integrity). They must be refilled immediately after any discharge (even a partial burst), or at scheduled manufacturer/standard intervals (typically every 1 to 3 years depending on the agent type and chemical degradation).',
      },
      {
        question: 'What is hydraulic pressure testing and is it mandatory for fire extinguishers?',
        answer:
          'Yes, hydraulic pressure testing is mandatory to ensure the metal shell can safely withstand discharge pressures without exploding. Under IS 2190, ABC and Water/Foam cylinders must undergo hydraulic pressure testing every 3 years, and CO2 cylinders must be tested every 5 years at an authorized testing facility.',
      },
      {
        question: 'Which fire extinguisher is recommended for electrical fires in server rooms or offices?',
        answer:
          'For electrical fires (Class C / electrical hazards), Carbon Dioxide (CO2) or Clean Agent (HFC-236fa) extinguishers are strictly recommended. They leave zero chemical residue, are non-conductive, and will not damage sensitive circuit boards, servers, or electrical control panels unlike ABC powder.',
      },
    ],
    whatsappMessage:
      'Hello Elite Fire, I need a quotation for Fire Extinguisher supply / refilling in Faridabad/Delhi NCR.',
  },

  'electrical-systems': {
    id: 'electrical-systems',
    slug: 'electrical-systems',
    title: 'Electrical Systems Safety, Audits & Panel Maintenance',
    tagline: 'Mitigating Short-Circuit Hazards & Electrical Fire Risks in Commercial & Industrial Facilities',
    shortDescription:
      'Industrial electrical panel maintenance, thermal imaging thermography audits, earth resistance testing, HT/LT switchgear servicing, and surge protection implementation.',
    heroImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    metaTitle: 'Electrical System Maintenance & Safety Audit Faridabad | Elite Fire',
    metaDescription:
      'Commercial electrical safety audits, thermal imaging thermography, electrical panel maintenance, and earthing tests in Faridabad & Delhi NCR. Preventing electrical fires.',
    keywords: [
      'electrical safety audit Faridabad',
      'commercial electrical maintenance Delhi NCR',
      'thermal imaging electrical panel inspection',
      'industrial LT panel servicing',
      'earth pit resistance testing Faridabad',
    ],
    keyHighlights: [
      'Non-invasive infrared thermography to identify overheating loose terminations before arcs occur',
      'Digital earth pit resistance testing to ensure low-impedance fault dissipation (< 1 Ohm)',
      'De-dusting, busbar torque tightening, and contactor servicing during scheduled shutdowns',
      'Installation of automatic fire suppression tube systems inside high-voltage electrical panels',
    ],
    equipmentCovered: [
      'Main LT (Low Tension) Distribution Panels & PCC/MCC Panels',
      'Capacitor Banks (APFC Panels) for Power Factor Correction',
      'Air Circuit Breakers (ACB) and Molded Case Circuit Breakers (MCCB)',
      'Chemical & Conventional Maintenance-Free Earthing Pits',
      'Lightning Arresters & Surge Protection Devices (SPD)',
      'Emergency Standby Diesel Generator (DG) Synchronizing Panels',
      'Automatic Panel Fire Suppression Tubing (Direct/Indirect Actuation)',
    ],
    worksIncluded: [
      'Infrared thermographic scanning under normal operational load to locate hot spots',
      'Three-pin earth electrode resistance measurement with calibrated digital ground testers',
      'Insulation resistance (Megger) testing of power feeders and motor cabling',
      'Cleaning, vacuuming, and mechanical lubrication of circuit breaker linkages',
      'Comprehensive electrical fire risk audit report with photographic thermal evidence',
    ],
    benefits: [
      'Over 70% of commercial fires start from electrical faults; proactive audits prevent catastrophic downtime',
      'Improved energy efficiency by eliminating resistive heating at loose contact points',
      'Protection of expensive machinery, CNC tools, and sensitive computer electronics from voltage spikes',
      'Assists in fulfilling statutory electrical safety requirements and insurance renewal audits',
    ],
    relevantIndustries: [
      'Engineering & Fabrication Workshops',
      'Plastics, Packaging & Printing Units',
      'Commercial Office Buildings & Tech Hubs',
      'Hospitals, Clinics & Diagnostic Centers',
      'Warehousing & Cold Storage Plants',
    ],
    standardsFollowed: ['Central Electricity Authority (CEA) Regulations', 'IS 3043 (Code for Earthing)'],
    faqs: [
      {
        question: 'Why is electrical panel thermography essential for fire safety?',
        answer:
          'Infrared thermography detects thermal anomalies (hot spots) caused by loose cable terminations, unbalanced phases, or overloaded circuits that are invisible to the naked eye. Left unaddressed, these hot spots can melt wire insulation, generate electrical arcing, and trigger catastrophic industrial fires.',
      },
      {
        question: 'What is an acceptable earth resistance reading for commercial facilities?',
        answer:
          'As per Indian Standard IS 3043 and CEA regulations, a standard industrial earthing pit should ideally demonstrate resistance of less than 1.0 Ohm (and never exceed 5.0 Ohms). Low impedance ensures fault currents safely discharge to ground, triggering protective circuit breakers immediately.',
      },
      {
        question: 'Can you install automatic fire suppression directly inside electrical panels?',
        answer:
          'Yes. We install heat-sensing polymer detection tubing directly routed through panel busbars and switchgear. When a fire or localized arc creates temperatures exceeding 120°C, the tube bursts at the hottest spot, automatically discharging Clean Agent gas directly into the panel to extinguish the flame within seconds without leaving conductive residue.',
      },
    ],
    whatsappMessage:
      'Hello Elite Fire, I would like to enquire about Electrical System maintenance and thermal safety audits in Faridabad/Delhi NCR.',
  },

  'cctv-systems': {
    id: 'cctv-systems',
    slug: 'cctv-systems',
    title: 'Commercial CCTV & Electronic Surveillance Systems',
    tagline: 'High-Definition IP Security Surveillance, Perimeter Monitoring & Remote Access',
    shortDescription:
      'Design, installation, and AMC of high-definition IP network cameras, commercial NVRs, perimeter perimeter thermal optics, video analytics, and centralized security control room integration.',
    heroImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    metaTitle: 'Commercial CCTV Installation & AMC Faridabad | Elite Fire',
    metaDescription:
      'Industrial CCTV installation and maintenance in Faridabad & Delhi NCR. High-definition IP cameras, NVR storage, night-vision perimeter monitoring, and remote phone viewing.',
    keywords: [
      'CCTV installation Faridabad industrial area',
      'commercial CCTV contractor Delhi NCR',
      'factory IP camera installation',
      'NVR security surveillance Faridabad',
      'CCTV AMC maintenance Delhi NCR',
    ],
    keyHighlights: [
      'High-definition 4MP to 8MP 4K Ultra-HD optics with Smart IR Night Vision',
      'Power over Ethernet (PoE) architecture reducing redundant cabling runs',
      'Intelligent video analytics: perimeter line crossing, intrusion detection, motion alerts',
      'Secure encrypted mobile app and desktop software for multi-location live monitoring',
    ],
    equipmentCovered: [
      'Vandal-Proof Fixed Dome IP Cameras (Indoor Offices & Corridors)',
      'Weatherproof Bullet IP Cameras (IP67 Rated for Exterior Gates & Perimeters)',
      'Pan-Tilt-Zoom (PTZ) 360-Degree Optical Zoom Cameras',
      'Network Video Recorders (NVRs) with 8 to 64 Channel RAID Storage',
      'Surveillance-Grade Hard Drives (Western Digital Purple / Seagate SkyHawk)',
      'Gigabit PoE Switches with Industrial Surge Protection',
      'Armored Outdoor CAT6 & Optical Fiber Cabling for Long-Distance Runs',
      'Security Control Desk LED Monitors & Video Wall Consoles',
    ],
    worksIncluded: [
      'Camera field-of-view layout design eliminating blind spots at entry/exit points',
      'Conduit routing, structured CAT6 cabling, RJ45 termination, and patch panel dressing',
      'Camera mounting, focus adjustment, angle optimization, and night illumination testing',
      'NVR network configuration, motion detection masks, and continuous/event recording setup',
      'Smartphone app configuration and client security team operational training',
    ],
    benefits: [
      'Constant oversight of factory production floors, inventory docks, and cash counters',
      'Deterrence of internal inventory pilferage and unauthorized perimeter breaches',
      'Time-stamped forensic video evidence in the event of workplace accidents or disputes',
      'Seamless integration with security gate access controls and fire safety protocols',
    ],
    relevantIndustries: [
      'Manufacturing Plants & Machining Units',
      'E-commerce & Freight Warehouses',
      'Corporate Office Headquarters',
      'Residential Societies & Gated Layouts',
      'Retail Showrooms & Supermarkets',
    ],
    standardsFollowed: ['BIS Standards for Electronic Security', 'IP67 Ingress Protection Standards'],
    faqs: [
      {
        question: 'What is the advantage of IP CCTV cameras over traditional analog HD cameras?',
        answer:
          'IP cameras transmit digital video data directly over network cables (CAT6), delivering significantly sharper resolution (up to 4K), superior dynamic range in low-light environments, and smart onboard analytics like tripwire and human detection. They also use PoE (Power over Ethernet), powering the camera and transmitting data over a single cable.',
      },
      {
        question: 'How long can CCTV footage be stored on the NVR?',
        answer:
          'Storage duration depends on camera resolution, bitrate, frame rate, compression codec (H.265+), and hard disk capacity. We calculate storage to achieve typical client requirements ranging from 15 days, 30 days, or up to 90 days of continuous or motion-triggered recording.',
      },
      {
        question: 'Can I view live CCTV camera feeds on my mobile phone when away from the office?',
        answer:
          'Yes. With our secure P2P cloud setup and high-speed broadband connection at your facility, you can access password-protected live feeds and playback recordings anytime through authorized mobile and desktop applications.',
      },
    ],
    whatsappMessage:
      'Hello Elite Fire, I am interested in commercial CCTV surveillance installation/AMC in Faridabad/Delhi NCR.',
  },

  'amc-maintenance': {
    id: 'amc-maintenance',
    slug: 'amc-maintenance',
    title: 'Annual Maintenance Contracts (AMC) for Fire Safety',
    tagline: 'Scheduled Preventative Inspections, Regulatory Compliance & Rapid Breakdown Support',
    shortDescription:
      'Comprehensive and non-comprehensive Annual Maintenance Contracts (AMC) covering fire alarms, hydrants, automatic sprinklers, pumps, fire extinguishers, and emergency lighting systems.',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    metaTitle: 'Fire Safety AMC in Faridabad & Delhi NCR | Elite Fire',
    metaDescription:
      'Scheduled fire safety maintenance contracts (AMC) for factories, commercial buildings, and societies in Faridabad & Delhi NCR. Full system testing and audit readiness.',
    keywords: [
      'fire safety AMC in Faridabad',
      'fire fighting system maintenance contract Delhi NCR',
      'commercial fire equipment AMC',
      'preventative fire inspection services',
      'fire pump testing AMC Faridabad',
    ],
    keyHighlights: [
      'Scheduled quarterly/monthly inspection visits with standardized engineering checklists',
      'Full functional testing of fire pumps, pressure sensors, alarm loops, and landing valves',
      'Detailed physical maintenance logbook maintained on-site for regulatory inspections',
      'Priority breakdown callout service for contracted clients with dedicated technicians',
    ],
    equipmentCovered: [
      'Fire Alarm Panels, Optical Smoke Detectors & Manual Call Points',
      'Fire Hydrant Landing Valves, Hose Reels & Fire Hoses',
      'Fire Pump Room: Main Electric, Diesel Engine & Jockey Pumps',
      'Automatic Sprinkler Control Valves, Gauges & Water Flow Switches',
      'All Portable & Trolley Fire Extinguishers (Pressure & Weight Checks)',
      'Fire Exit Emergency Signage & Standby Battery Units',
      'Electrical Control Panels & Earthing Continuity (where specified)',
    ],
    worksIncluded: [
      'Quarterly physical visits: testing smoke sensors with test smoke canisters',
      'Fire pump weekly/monthly auto-start test against scheduled pressure drops',
      'Inspection and greasing of hydrant valve spindles, glands, and coupling washers',
      'Checking fire extinguisher safety pins, tamper seals, and hydrostatic pressure test dates',
      'Preparation of quarterly audit reports highlighting any corrective action needed',
    ],
    benefits: [
      'Assurance that life-saving equipment functions instantly when an actual emergency occurs',
      'Prolongs asset lifespan and prevents costly emergency pump replacements or burst pipes',
      'Ensures continuous documentation required for annual Fire NOC renewals and audits',
      'Eliminates the hassle of dealing with multiple disjointed maintenance contractors',
    ],
    relevantIndustries: [
      'Automotive & Industrial Manufacturing',
      'Large Warehousing & Cold Storage Hubs',
      'IT / ITES Complexes & Corporate Towers',
      'Hospitals, Nursing Homes & Medical Facilities',
      'Residential RWA Societies & Gated Townships',
    ],
    standardsFollowed: ['NBC 2016 Part 4 Maintenance Guidelines', 'IS 2190 & IS 3844 Audit Protocols'],
    faqs: [
      {
        question: 'What is the difference between Comprehensive and Non-Comprehensive AMC?',
        answer:
          'A Non-Comprehensive AMC covers all scheduled preventative maintenance visits, routine labor, testing, adjustments, and emergency breakdown callouts; any replacement parts or consumables (e.g., replacement detector heads, valve washers, extinguisher gas refills) are billed separately. A Comprehensive AMC includes the labor plus the cost of specified replacement wear-and-tear components.',
      },
      {
        question: 'How does an AMC assist during Fire NOC renewals?',
        answer:
          'State fire authorities require evidence that fire fighting and detection installations have been actively maintained and tested. Our AMC service includes stamped quarterly maintenance logbooks, pump performance logs, and pressure test certificates that verify your systems are in full operational health.',
      },
      {
        question: 'How do I request a site inspection and quotation for an AMC?',
        answer:
          'Contact our team via phone, WhatsApp, or the online quote form. Our technical team conducts an initial on-site inventory survey of your facility in Faridabad or Delhi NCR to catalog existing equipment, inspect current system health, and submit a transparent, customized AMC proposal.',
      },
    ],
    whatsappMessage:
      'Hello Elite Fire, I would like to request a site inspection and quotation for a Fire Safety AMC in Faridabad/Delhi NCR.',
  },
};
