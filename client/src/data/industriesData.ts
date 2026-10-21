export interface IndustryDetail {
  id: string;
  slug: string;
  name: string;
  heroImage: string;
  shortDescription: string;
  fireHazards: string[];
  recommendedSolutions: string[];
  keyRegulations: string;
}

export const INDUSTRIES_DATA: IndustryDetail[] = [
  {
    id: 'manufacturing-factories',
    slug: 'manufacturing-factories',
    name: 'Factories & Manufacturing Facilities',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    shortDescription:
      'Industrial plants operate heavy machinery, combustible materials, chemical solvents, and high-voltage switchgear requiring robust fire hydrant networks, thermal monitoring, and early detection.',
    fireHazards: [
      'Overheated machinery, motor friction, and electrical short circuits',
      'Flammable liquids, cutting oils, solvents, and paint fumes',
      'Combustible dust and packaging material accumulation',
    ],
    recommendedSolutions: [
      'Heavy-duty external and internal wet hydrant systems with diesel backup pumps',
      'Industrial heat detectors and addressable beam detectors in high-bay shop floors',
      'CO2 and Dry Chemical Powder extinguishers positioned at every electrical panel',
      'Scheduled quarterly AMC with thermographic switchgear audits',
    ],
    keyRegulations: 'Factories Act 1948 & NBC 2016 Industrial Occupancy standards',
  },
  {
    id: 'warehouses-logistics',
    slug: 'warehouses-logistics',
    name: 'Warehouses & Logistics Hubs',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    shortDescription:
      'High ceiling clearances, packed pallet racks, and rapid fire spread dynamics in logistics parks require specialized in-rack sprinkler systems and wide-area optical beam smoke detectors.',
    fireHazards: [
      'Massive fuel loads from wooden pallets, corrugated boxes, and plastic packaging',
      'Battery charging stations for forklifts producing hydrogen gas',
      'High-bay ceilings causing smoke dilution before reaching traditional spot detectors',
    ],
    recommendedSolutions: [
      'Optical beam smoke detectors and aspirating smoke detection (ASD) systems',
      'Automatic wet sprinkler systems with high-density K-factor heads',
      'Perimeter CCTV cameras for loading dock security and blind-spot oversight',
      'Hydrant ring mains around logistics perimeter with double-outlet landing valves',
    ],
    keyRegulations: 'NBC 2016 Storage Occupancy & Tariff Advisory Committee (TAC) norms',
  },
  {
    id: 'commercial-offices',
    slug: 'commercial-offices',
    name: 'Offices & Commercial Buildings',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    shortDescription:
      'Multi-story commercial complexes require integrated life safety systems combining addressable fire alarms, voice evacuation, server room clean agent flooding, and access-control integration.',
    fireHazards: [
      'Server rooms, UPS battery banks, and false-ceiling cable trays',
      'High occupant density requiring coordinated emergency evacuation paths',
      'Pantry equipment, microwave ovens, and overloaded power strips',
    ],
    recommendedSolutions: [
      'Multi-loop addressable fire alarms with voice evacuation integration',
      'Clean Agent (HFC/Novec alternative) gaseous suppression for data servers',
      'Illuminated emergency exit signage and fail-safe magnetic door release',
      'Regular evacuation mock drill coordination and preventative AMC',
    ],
    keyRegulations: 'NBC 2016 Business Occupancy guidelines & State Fire Department NOC requirements',
  },
  {
    id: 'residential-societies',
    slug: 'residential-societies',
    name: 'Residential Societies & High-Rises',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    shortDescription:
      'Apartment complexes and gated societies demand dependable riser piping, functioning basement sprinkler networks, automatic pump houses, and well-maintained corridor fire hose reels.',
    fireHazards: [
      'Basement vehicle parking with EV charging fire risks',
      'Domestic LPG cylinder leaks and kitchen fire hazards',
      'Vertical smoke migration through building stairwells and lift shafts',
    ],
    recommendedSolutions: [
      'Basement automatic sprinkler networks and ventilation duct interlocks',
      'Wet riser system with first-aid hose reels on every residential landing',
      'Tri-pump system (Jockey, Main Electric, Diesel Engine) with automatic pressure switches',
      'Annual RWA maintenance contracts for pressure testing and pump maintenance',
    ],
    keyRegulations: 'State Fire Service High-Rise Building Safety Regulations',
  },
  {
    id: 'hospitals-healthcare',
    slug: 'hospitals-healthcare',
    name: 'Hospitals & Healthcare Facilities',
    heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    shortDescription:
      'Critical life safety where non-ambulatory patients cannot self-evacuate. Requires compartmentalization, specialized clean-agent systems, and zero-interruption power safety.',
    fireHazards: [
      'Pressurized medical oxygen lines and anesthetic gas cylinders',
      'Intensive care units (ICU) and operating theaters with vulnerable patients',
      'High-power diagnostic equipment (MRI, CT scanners) and radiological facilities',
    ],
    recommendedSolutions: [
      'Zoned addressable fire alarms with phased pre-alarm signals to avoid panic',
      'Non-conductive clean agent fire extinguishers in ICUs and diagnostic suites',
      'Strict fire-rated damper valves on ventilation systems to halt toxic smoke',
      'Rigorous bi-monthly testing of backup generators and fire pump circuits',
    ],
    keyRegulations: 'NABH Accreditation fire safety guidelines & NBC 2016 Institutional Occupancy',
  },
  {
    id: 'schools-institutions',
    slug: 'schools-institutions',
    name: 'Schools & Educational Institutions',
    heroImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    shortDescription:
      'Campus safety prioritizing clear audible alarms, rapid evacuation pathways, chemistry lab fire prevention, and student safety education.',
    fireHazards: [
      'Chemistry and science laboratory reagent storage',
      'Crowded auditoriums, cafeterias, and multi-story stairwells',
      'Computer laboratory electrical wiring and equipment loads',
    ],
    recommendedSolutions: [
      'Audible electronic sounders with distinctive tone for immediate recognition',
      'Class ABC powder and CO2 extinguishers in every laboratory and staff room',
      'Clear tactile and photoluminescent evacuation floor route charts',
      'Periodic fire safety drills and teacher training on extinguisher operation',
    ],
    keyRegulations: 'Supreme Court & National Disaster Management Authority (NDMA) School Safety Guidelines',
  },
  {
    id: 'hotels-hospitality',
    slug: 'hotels-hospitality',
    name: 'Hotels & Hospitality',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    shortDescription:
      'Guest safety across hotel rooms, banquet halls, and commercial kitchens requiring automatic kitchen hood wet chemical suppression and discrete guestroom smoke sensors.',
    fireHazards: [
      'Commercial kitchen hoods with grease accumulation and open flames',
      'Banquet halls with high transient occupant loads and temporary electrical setups',
      'Sleeping occupants unfamiliar with emergency exit stairwells',
    ],
    recommendedSolutions: [
      'Automatic Kitchen Hood Wet Chemical Fire Suppression Systems (Class K/F fires)',
      'Low-profile optical smoke detectors in every guestroom connected to central panel',
      'Sprinkler heads integrated aesthetically with interior ceilings',
      'Staff emergency response and guest evacuation training protocols',
    ],
    keyRegulations: 'NBC 2016 Hotel & Hospitality Fire Safety Norms',
  },
  {
    id: 'retail-shopping',
    slug: 'retail-shopping',
    name: 'Retail & Commercial Showrooms',
    heroImage: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80',
    shortDescription:
      'High footfall retail environments with dense merchandise displays requiring unobstructed fire exit paths, illuminated signage, and integrated security CCTV.',
    fireHazards: [
      'High-density combustible merchandise (textiles, apparel, footwear, paper)',
      'Temporary display lighting, spotlights, and overloaded extension outlets',
      'Narrowed aisleways from product promotional displays',
    ],
    recommendedSolutions: [
      'Rapid-response automatic ceiling sprinklers above display zones',
      'High-resolution IP surveillance cameras integrated with emergency lighting',
      'Easily accessible ABC and Water/CO2 fire extinguishers on retail floors',
      'Unobstructed, illuminated emergency fire exit doors with panic hardware',
    ],
    keyRegulations: 'NBC 2016 Mercantile Occupancy standards',
  },
];
