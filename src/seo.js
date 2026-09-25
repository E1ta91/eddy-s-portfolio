export const SITE_URL = 'https://faako.netlify.app';
export const SITE_NAME = 'Edward Faako Yakubu';
export const DEFAULT_TITLE = 'Edward Faako Yakubu — Mechanical Design Engineer';
export const DEFAULT_DESCRIPTION =
  'Edward Faako Yakubu is a mechanical design engineer in Accra specializing in CAD, digital fabrication, and product development.';
export const OG_IMAGE = `${SITE_URL}/og.jpg`;

export const PAGES = {
  '/': {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  '/projects': {
    title: 'Projects — Edward Faako Yakubu',
    description:
      'Selected machines, vehicles, and fabrication systems by Edward Faako Yakubu, from concept CAD to working prototypes.',
  },
  '/v6-engine': {
    title: 'V6 Internal Combustion Engine — Edward Faako Yakubu',
    description:
      'A SolidWorks CAD assembly of a V6 engine, modeled from the cylinder block and heads through the crankshaft, pistons, and valvetrain.',
  },
  '/eco-stove': {
    title: 'Eco-fuel Cooking Stove — Edward Faako Yakubu',
    description:
      'Three eco-fuel stove concepts for Ghanaian homes: a compact burner, an indoor kitchen cooker, and an outdoor courtyard hearth.',
  },
  '/pixel-case': {
    title: 'Pixel 6 Phone Case — Edward Faako Yakubu',
    description:
      'A protective Pixel 6 phone case modeled as separate phone and shell bodies, assembled for fit and camera-cutout review.',
  },
  '/drone': {
    title: 'Payload Transport Drone — Edward Faako Yakubu',
    description:
      'A quadcopter designed to carry a 1 kg payload over 5 km for construction sites and agricultural work.',
  },
  '/amn': {
    title: 'Aerial Mobility Network — Edward Faako Yakubu',
    description:
      'A quadcopter drone for short-haul delivery, designed in SolidWorks for farms and construction sites.',
  },
  '/infant-carrier': {
    title: 'Infant Emergency Carrier — Edward Faako Yakubu',
    description:
      'A portable neonatal transport unit with an adjustable bed rest, oxygen mount, drip stand, and fabric straps.',
  },
  '/electric-bike': {
    title: 'Urban Electric Scooter — Edward Faako Yakubu',
    description:
      'A compact electric scooter for Ghanaian city streets, powered by recycled EV batteries and built for local repair.',
  },
  '/delivery-bike': {
    title: 'Electric Delivery Bike — Edward Faako Yakubu',
    description:
      'A cargo electric bike for last-mile delivery in Accra and Kumasi, sized for market loads and local workshops.',
  },
  '/recycling': {
    title: 'Plastic Shredding and Pelletizing System — Edward Faako Yakubu',
    description:
      'A SolidWorks recycling line that shreds and pelletizes LDPE and HDPE plastic waste into reusable material.',
  },
  '/shredder': {
    title: 'HDPE Shredder — Edward Faako Yakubu',
    description:
      'An HDPE shredder built from scrap metal for makerspaces and communities turning plastic waste into feedstock.',
  },
  '/ecar': {
    title: 'Electric Multi-Purpose Vehicle — Edward Faako Yakubu',
    description:
      'An electric multi-purpose vehicle designed for Ghanaian roads, with a durable chassis and modular passenger or cargo space.',
  },
  '/kart': {
    title: 'Recreational Buggy for Ghanaian Roads — Edward Faako Yakubu',
    description:
      'A recreational buggy engineered for rough Ghanaian roads, with a tubular chassis and a 200cc 4-stroke powertrain.',
  },
};

export const canonicalUrl = (pathname) => {
  if (!pathname || pathname === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${pathname}`;
};

export const personJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_NAME,
  jobTitle: 'Mechanical Design Engineer',
  url: `${SITE_URL}/`,
  image: OG_IMAGE,
  email: 'faako.edward@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Accra',
    addressCountry: 'GH',
  },
  sameAs: ['https://www.linkedin.com/in/yakubu-edward-faako-9a374612b'],
  knowsAbout: [
    'SolidWorks',
    'CAD',
    'Digital fabrication',
    'Product development',
    'Mechanical design',
  ],
});

export const pageJsonLd = (pathname, page) => {
  if (pathname === '/') return personJsonLd();
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: page.title.replace(` — ${SITE_NAME}`, ''),
    description: page.description,
    url: canonicalUrl(pathname),
    author: {
      '@type': 'Person',
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
  };
};
