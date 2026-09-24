// Shared site data. Photos are free-to-use Unsplash images (https://unsplash.com/license),
// hotlinked from images.unsplash.com as Unsplash recommends.
export const img = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const PHOTOS = {
  hero: '1519389950473-47ba0277781c',
  about: '1522071820081-009f0129c71c',
  services: '1551434678-e076c223a692',
};

export const CATEGORIES = [
  { key: 'digital', name: 'Digital Engineering', icon: 'code-xml', photo: '1498050108023-c5249f4df085',
    blurb: 'Web, mobile and custom platforms engineered for performance, security and long-term scale.' },
  { key: 'ai', name: 'AI & Emerging Tech', icon: 'brain-circuit', photo: '1677442136019-21780ecad995',
    blurb: 'Generative AI, immersive XR, games, Web3 and data — the technologies defining the next decade.' },
  { key: 'cloud', name: 'Cloud & DevOps', icon: 'cloud', photo: '1451187580459-43490279c0fa',
    blurb: 'Cloud-native builds, migrations, automated delivery and security hardening across AWS, GCP and Azure.' },
  { key: 'specialized', name: 'Specialized Services', icon: 'sparkles', photo: '1522071820081-009f0129c71c',
    blurb: 'Dedicated engineers, QA, commerce, creative art and ongoing care to round out your product team.' },
];

// Order here = order in menus / hub.
export const SERVICES = [
  { slug: 'web-development', cat: 'digital', name: 'Web Development', short: 'Scalable web apps & platforms', icon: 'globe', photo: '1460925895917-afdab827c52f' },
  { slug: 'app-development', cat: 'digital', name: 'App Development', short: 'iOS, Android & cross-platform', icon: 'smartphone', photo: '1512941937669-90a1b58e7e9c' },
  { slug: 'custom-software', cat: 'digital', name: 'Custom Software', short: 'Bespoke enterprise solutions', icon: 'blocks', photo: '1555066931-4365d14bab8c' },
  { slug: 'ui-ux-design', cat: 'digital', name: 'UI/UX Design', short: 'Product design & systems', icon: 'pen-tool', photo: '1581291518857-4e27b48ff24e' },
  { slug: 'saas-development', cat: 'digital', name: 'SaaS Development', short: 'Multi-tenant SaaS platforms', icon: 'layers', photo: '1551288049-bebda4e38f71' },

  { slug: 'generative-ai', cat: 'ai', name: 'Generative AI', short: 'LLM apps & AI automation', icon: 'bot', photo: '1677442136019-21780ecad995' },
  { slug: 'ar-vr-xr', cat: 'ai', name: 'AR / VR / XR', short: 'Immersive experiences & metaverse', icon: 'glasses', photo: '1593508512255-86ab42a8e620' },
  { slug: 'game-development', cat: 'ai', name: 'Game Development', short: 'Mobile, PC & console games', icon: 'gamepad-2', photo: '1542751371-adc38448a05e' },
  { slug: 'blockchain-web3', cat: 'ai', name: 'Blockchain & Web3', short: 'DeFi, NFTs & smart contracts', icon: 'link', photo: '1639762681485-074b7f938ba0' },
  { slug: 'data-analytics', cat: 'ai', name: 'Data Analytics', short: 'BI, pipelines & dashboards', icon: 'chart-column', photo: '1504868584819-f8e8b4b6d7e3' },

  { slug: 'cloud-applications', cat: 'cloud', name: 'Cloud Applications', short: 'AWS, GCP, Azure-native builds', icon: 'cloud', photo: '1451187580459-43490279c0fa' },
  { slug: 'cloud-migration', cat: 'cloud', name: 'Cloud Migration', short: 'Lift, shift & modernization', icon: 'cloud-upload', photo: '1544197150-b99a580bb7a8' },
  { slug: 'devops-ci-cd', cat: 'cloud', name: 'DevOps & CI/CD', short: 'Pipelines & infrastructure', icon: 'infinity', photo: '1461749280684-dccba630e2f6' },
  { slug: 'cybersecurity', cat: 'cloud', name: 'Cybersecurity', short: 'Security audits & hardening', icon: 'shield-check', photo: '1550751827-4bd374c3f58b' },
  { slug: 'cloud-maintenance', cat: 'cloud', name: 'Cloud Maintenance', short: 'Monitoring & optimization', icon: 'activity', photo: '1558494949-ef010cbdcc31' },

  { slug: 'staff-augmentation', cat: 'specialized', name: 'Staff Augmentation', short: 'Embed expert engineers', icon: 'users', photo: '1522071820081-009f0129c71c' },
  { slug: 'quality-assurance', cat: 'specialized', name: 'Quality Assurance', short: 'Testing & QA automation', icon: 'badge-check', photo: '1516321318423-f06f85e504b3' },
  { slug: 'e-commerce', cat: 'specialized', name: 'E-Commerce', short: 'Shopify, custom storefronts', icon: 'shopping-cart', photo: '1556742049-0cfed4f6a45d' },
  { slug: 'art-design', cat: 'specialized', name: 'Art & Design', short: '3D art, animation, concept', icon: 'palette', photo: '1558655146-9f40138edfeb' },
  { slug: 'maintenance-support', cat: 'specialized', name: 'Maintenance & Support', short: 'Ongoing system care', icon: 'wrench', photo: '1531482615713-2afd69097998' },
  { slug: 'automation-apps', cat: 'specialized', name: 'Automation & Apps', short: 'Workflow & process bots', icon: 'zap', photo: '1485827404703-89b55fcc595e' },
];

export const INDUSTRIES = {
  gaming:        { name: 'Gaming', desc: 'Core games, AR/VR, mobile & metaverse', icon: 'gamepad-2', photo: '1511512578047-dfb367046420' },
  fintech:       { name: 'Banking & Fintech', desc: 'Payments, lending & financial platforms', icon: 'landmark', photo: '1579621970563-ebec7560ff3e' },
  healthcare:    { name: 'Healthcare & Pharma', desc: 'Digital health & clinical platforms', icon: 'heart-pulse', photo: '1576091160399-112ba8d25d1d' },
  retail:        { name: 'Retail & E-Commerce', desc: 'Commerce platforms & automation', icon: 'shopping-bag', photo: '1556740738-b6a63e27c4df' },
  edtech:        { name: 'Education Technology', desc: 'LMS, AI tutors & learning tools', icon: 'graduation-cap', photo: '1503676260728-1c00da094a0b' },
  travel:        { name: 'Travel & Hospitality', desc: 'Booking systems & AI concierge', icon: 'plane', photo: '1436491865332-7a61a109cc05' },
  'real-estate': { name: 'Real Estate Tech', desc: 'PropTech, CRM & valuation tools', icon: 'building-2', photo: '1560518883-ce09059eeffa' },
  logistics:     { name: 'Logistics & Ops', desc: 'Supply chain & route optimization', icon: 'truck', photo: '1586528116311-ad8dd3c8310d' },
  energy:        { name: 'Energy & Utilities', desc: 'Smart grid & monitoring systems', icon: 'zap', photo: '1473341304170-971dccb5ac1e' },
  telecom:       { name: 'Telecom', desc: 'Network tools & customer portals', icon: 'radio-tower', photo: '1518770660439-4636190af475' },
  startups:      { name: 'Startups', desc: 'MVPs & rapid launches', icon: 'rocket', photo: '1559136555-9303baea8ebd' },
  enterprise:    { name: 'Enterprises', desc: 'Modernization at scale', icon: 'building', photo: '1486406146926-c627a92ad1ab' },
};
export const HOME_INDUSTRIES = ['gaming', 'fintech', 'healthcare', 'retail', 'edtech', 'travel', 'real-estate', 'logistics', 'energy', 'telecom'];
