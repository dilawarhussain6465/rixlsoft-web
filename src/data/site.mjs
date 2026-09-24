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
  { key: 'crm', name: 'Salesforce & CRM', icon: 'contact', photo: '1553877522-43269d4ea984',
    blurb: 'Salesforce, HubSpot and Dynamics 365 implementations, custom development and integrations that turn your CRM into a growth engine.' },
  { key: 'specialized', name: 'Specialized Services', icon: 'sparkles', photo: '1581091877018-dac6a371d50f',
    blurb: 'Dedicated engineers, QA, commerce, creative art and ongoing care to round out your product team.' },
];

// Order here = order in menus / hub. `photo` = hero image, `photo2` = intro-section image (both subject-matched).
export const SERVICES = [
  { slug: 'digital-transformation', cat: 'digital', name: 'Digital Transformation', short: 'Modernize processes & systems', icon: 'trending-up', photo: '1552664730-d307ca884978', photo2: '1454165804606-c3d57bc86b40' },
  { slug: 'web-development', cat: 'digital', name: 'Web Development', short: 'Scalable web apps & platforms', icon: 'globe', photo: '1619410283995-43d9134e7656', photo2: '1498050108023-c5249f4df085' },
  { slug: 'app-development', cat: 'digital', name: 'App Development', short: 'iOS, Android & cross-platform', icon: 'smartphone', photo: '1512941937669-90a1b58e7e9c', photo2: '1563986768494-4dee2763ff3f' },
  { slug: 'custom-software', cat: 'digital', name: 'Custom Software', short: 'Bespoke enterprise solutions', icon: 'blocks', photo: '1461749280684-dccba630e2f6', photo2: '1592609931095-54a2168ae893' },
  { slug: 'ui-ux-design', cat: 'digital', name: 'UI/UX Design', short: 'Product design & systems', icon: 'pen-tool', photo: '1581291518857-4e27b48ff24e', photo2: '1524749292158-7540c2494485' },
  { slug: 'saas-development', cat: 'digital', name: 'SaaS Development', short: 'Multi-tenant SaaS platforms', icon: 'layers', photo: '1460925895917-afdab827c52f', photo2: '1608222351212-18fe0ec7b13b' },

  { slug: 'generative-ai', cat: 'ai', name: 'Generative AI', short: 'LLM apps & AI automation', icon: 'bot', photo: '1485827404703-89b55fcc595e', photo2: '1620712943543-bcc4688e7485' },
  { slug: 'ar-vr-xr', cat: 'ai', name: 'AR / VR / XR', short: 'Immersive experiences & metaverse', icon: 'glasses', photo: '1552871419-81ba9b1aa9c9', photo2: '1576633587201-20861f6ac680' },
  { slug: 'game-development', cat: 'ai', name: 'Game Development', short: 'Mobile, PC & console games', icon: 'gamepad-2', photo: '1542751371-adc38448a05e', photo2: '1583162520080-73d4a743a776' },
  { slug: 'blockchain-web3', cat: 'ai', name: 'Blockchain & Web3', short: 'DeFi, NFTs & smart contracts', icon: 'link', photo: '1639762681485-074b7f938ba0', photo2: '1639322537228-f710d846310a' },
  { slug: 'data-analytics', cat: 'ai', name: 'Data Analytics', short: 'BI, pipelines & dashboards', icon: 'chart-column', photo: '1551288049-bebda4e38f71', photo2: '1591696205602-2f950c417cb9' },

  { slug: 'cloud-applications', cat: 'cloud', name: 'Cloud Applications', short: 'AWS, GCP, Azure-native builds', icon: 'cloud', photo: '1644088379091-d574269d422f', photo2: '1451187580459-43490279c0fa' },
  { slug: 'cloud-migration', cat: 'cloud', name: 'Cloud Migration', short: 'Lift, shift & modernization', icon: 'cloud-upload', photo: '1558494949-ef010cbdcc31', photo2: '1544197150-b99a580bb7a8' },
  { slug: 'devops-ci-cd', cat: 'cloud', name: 'DevOps & CI/CD', short: 'Pipelines & infrastructure', icon: 'infinity', photo: '1607799279861-4dd421887fb3', photo2: '1627398242454-45a1465c2479' },
  { slug: 'cybersecurity', cat: 'cloud', name: 'Cybersecurity', short: 'Security audits & hardening', icon: 'shield-check', photo: '1526374965328-7f61d4dc18c5', photo2: '1518770660439-4636190af475' },
  { slug: 'cloud-maintenance', cat: 'cloud', name: 'Cloud Maintenance', short: 'Monitoring & optimization', icon: 'activity', photo: '1526628953301-3e589a6a8b74', photo2: '1558494949-ef010cbdcc31' },

  { slug: 'salesforce-consulting', cat: 'crm', name: 'Salesforce Consulting', short: 'Implementation & optimization', icon: 'cloud-cog', photo: '1517048676732-d65bc937f952', photo2: '1553877522-43269d4ea984' },
  { slug: 'salesforce-development', cat: 'crm', name: 'Salesforce Development', short: 'Apex, LWC & AppExchange', icon: 'code', photo: '1534665482403-a909d0d97c67', photo2: '1505238680356-667803448bb6' },
  { slug: 'hubspot-crm', cat: 'crm', name: 'HubSpot CRM', short: 'Sales, marketing & service hubs', icon: 'magnet', photo: '1599658880436-c61792e70672', photo2: '1460925895917-afdab827c52f' },
  { slug: 'dynamics-365', cat: 'crm', name: 'Microsoft Dynamics 365', short: 'Dynamics & Power Platform', icon: 'layout-dashboard', photo: '1454165804606-c3d57bc86b40', photo2: '1522165078649-823cf4dbaf46' },
  { slug: 'crm-integration', cat: 'crm', name: 'CRM Integration & Migration', short: 'Connect, migrate & clean data', icon: 'git-merge', photo: '1504868584819-f8e8b4b6d7e3', photo2: '1551288049-bebda4e38f71' },

  { slug: 'staff-augmentation', cat: 'specialized', name: 'Staff Augmentation', short: 'Embed expert engineers', icon: 'users', photo: '1606857521015-7f9fcf423740', photo2: '1522071820081-009f0129c71c' },
  { slug: 'quality-assurance', cat: 'specialized', name: 'Quality Assurance', short: 'Testing & QA automation', icon: 'badge-check', photo: '1569012871812-f38ee64cd54c', photo2: '1623479322729-28b25c16b011' },
  { slug: 'e-commerce', cat: 'specialized', name: 'E-Commerce', short: 'Shopify, custom storefronts', icon: 'shopping-cart', photo: '1556742049-0cfed4f6a45d', photo2: '1556740738-b6a63e27c4df' },
  { slug: 'art-design', cat: 'specialized', name: 'Art & Design', short: '3D art, animation, concept', icon: 'palette', photo: '1561070791-2526d30994b5', photo2: '1620121478247-ec786b9be2fa' },
  { slug: 'maintenance-support', cat: 'specialized', name: 'Maintenance & Support', short: 'Ongoing system care', icon: 'wrench', photo: '1581092918056-0c4c3acd3789', photo2: '1551434678-e076c223a692' },
  { slug: 'automation-apps', cat: 'specialized', name: 'Automation & Apps', short: 'Workflow & process bots', icon: 'zap', photo: '1531746790731-6c087fecd65a', photo2: '1485827404703-89b55fcc595e' },
];

export const INDUSTRIES = {
  gaming:        { name: 'Gaming', desc: 'Core games, AR/VR, mobile & metaverse', icon: 'gamepad-2', photo: '1558008412-f42c059a9d02' },
  fintech:       { name: 'Banking & Fintech', desc: 'Payments, lending & financial platforms', icon: 'landmark', photo: '1611974789855-9c2a0a7236a3' },
  healthcare:    { name: 'Healthcare & Pharma', desc: 'Digital health & clinical platforms', icon: 'heart-pulse', photo: '1576091160550-2173dba999ef' },
  retail:        { name: 'Retail & E-Commerce', desc: 'Commerce platforms & automation', icon: 'shopping-bag', photo: '1441986300917-64674bd600d8' },
  edtech:        { name: 'Education Technology', desc: 'LMS, AI tutors & learning tools', icon: 'graduation-cap', photo: '1503676260728-1c00da094a0b' },
  travel:        { name: 'Travel & Hospitality', desc: 'Booking systems & AI concierge', icon: 'plane', photo: '1436491865332-7a61a109cc05' },
  'real-estate': { name: 'Real Estate Tech', desc: 'PropTech, CRM & valuation tools', icon: 'building-2', photo: '1600596542815-ffad4c1539a9' },
  logistics:     { name: 'Logistics & Ops', desc: 'Supply chain & route optimization', icon: 'truck', photo: '1586528116311-ad8dd3c8310d' },
  energy:        { name: 'Energy & Utilities', desc: 'Smart grid & monitoring systems', icon: 'zap', photo: '1467533003447-e295ff1b0435' },
  telecom:       { name: 'Telecom', desc: 'Network tools & customer portals', icon: 'radio-tower', photo: '1544197150-b99a580bb7a8' },
  startups:      { name: 'Startups', desc: 'MVPs & rapid launches', icon: 'rocket', photo: '1504384308090-c894fdcc538d' },
  enterprise:    { name: 'Enterprises', desc: 'Modernization at scale', icon: 'building', photo: '1486406146926-c627a92ad1ab' },
};
export const HOME_INDUSTRIES = ['gaming', 'fintech', 'healthcare', 'retail', 'edtech', 'travel', 'real-estate', 'logistics', 'energy', 'telecom'];

// Technology groups (home page tech tabs + "Technologies" mega menu). Keys = src/data/logos.mjs
export const TECH_STACK = [
  { group: 'Frontend', items: ['react', 'nextjs', 'vuejs', 'angular', 'typescript', 'tailwindcss', 'threejs'] },
  { group: 'Backend', items: ['nodejs', 'python', 'fastapi', 'django', 'nestjs', 'graphql', 'go'] },
  { group: 'AI & ML', items: ['openai', 'claude', 'gemini', 'langchain', 'huggingface', 'pytorch', 'tensorflow'] },
  { group: 'Game & XR', items: ['unity', 'unrealengine', 'blender', 'oculus', 'webgl', 'godot', 'babylonjs'] },
  { group: 'Cloud & DevOps', items: ['aws', 'googlecloud', 'azure', 'docker', 'kubernetes', 'terraform', 'githubactions'] },
  { group: 'CRM & Business', items: ['salesforce', 'hubspot', 'dynamics365', 'zoho', 'mulesoft', 'tableau', 'zendesk'] },
  { group: 'Mobile & Data', items: ['flutter', 'reactnative', 'swift', 'kotlin', 'postgresql', 'mongodb', 'redis', 'supabase', 'firebase'] },
];
