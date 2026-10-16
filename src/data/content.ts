import { ServiceItem, PortfolioItem, ValueProp, ReasonItem, ProcessStep } from '../types';

export const COMPANY_INFO = {
  name: 'SAMLAT DIGITAL SOLUTIONS',
  tagline: 'YOUR DIGITAL GROWTH PARTNER',
  headline: 'Building Digital Experiences That Move Your Business Forward.',
  headlineGradientPart: 'Move Your Business Forward.',
  subheadline:
    'At SAMLAT DIGITAL SOLUTIONS, we build modern websites, create outstanding graphics, and provide digital and fintech solutions that help businesses establish their presence, connect with customers, and grow with confidence.',
  
  phoneDisplay: '08132927484',
  phoneHref: 'tel:+2348132927484',

  whatsappDisplay: '09132614108',
  whatsappNumberDigits: '2349132614108',
  whatsappBaseUrl: 'https://wa.me/2349132614108',
  defaultWhatsAppMessage:
    'Hello SAMLAT DIGITAL SOLUTIONS, I would like to make an inquiry about your services. Please provide more information.',

  emailDisplay: 'solatunde410@gmail.com',
  emailHref: 'mailto:solatunde410@gmail.com',

  roles: [
    'Website Developer',
    'Graphic Designer',
    'Digital Solutions Provider',
    'Fintech Services Provider',
  ],
};

export const getWhatsAppLink = (message: string): string => {
  return `${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
};

export const VALUE_PROPS: ValueProp[] = [
  {
    title: 'INNOVATION',
    description: 'Modern ideas and practical digital solutions designed around your goals.',
    iconName: 'Compass',
  },
  {
    title: 'CREATIVITY',
    description: 'Distinctive visual design and engaging digital experiences that help your brand stand out.',
    iconName: 'Sparkles',
  },
  {
    title: 'RELIABILITY',
    description: 'Clear communication, careful execution, and a professional approach to every project.',
    iconName: 'ShieldCheck',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    iconName: 'Monitor',
    description:
      'Modern, responsive, and professional websites designed to represent your brand, showcase your services, and help convert visitors into customers.',
    deliverables: [
      'Business websites',
      'Portfolio websites',
      'Landing pages',
      'E-commerce websites',
      'Website redesigns',
      'Mobile-responsive layouts',
      'Website maintenance and improvements',
    ],
    ctaLabel: 'Order Website Development',
    whatsappMessage:
      'Hello SAMLAT DIGITAL SOLUTIONS, I would like to order Website Development. Let us discuss my project requirements.',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    iconName: 'Palette',
    description:
      'Creative and visually consistent graphics that help businesses communicate clearly and build a recognizable brand identity.',
    deliverables: [
      'Business flyers',
      'Promotional designs',
      'Social media graphics',
      'Logo and brand identity design',
      'Posters and banners',
      'Business cards',
      'Advertising creatives',
    ],
    ctaLabel: 'Order Graphic Design',
    whatsappMessage:
      'Hello SAMLAT DIGITAL SOLUTIONS, I would like to order Graphic Design. Here is what I need designed.',
  },
  {
    id: 'fintech-solutions',
    title: 'Fintech and Digital Financial Services',
    iconName: 'Wallet',
    description:
      'Practical assistance with supported fintech platforms and digital financial services, helping customers navigate available digital solutions.',
    deliverables: [
      'Supported fintech platform assistance',
      'Digital payment solutions',
      'Payment integration for websites',
      'Digital transaction support',
      'Guidance with legitimate digital financial services',
    ],
    ctaLabel: 'Ask About Fintech Services',
    whatsappMessage:
      'Hello SAMLAT DIGITAL SOLUTIONS, I would like to inquire about your supported Fintech and Digital Financial Services.',
  },
  {
    id: 'web-maintenance',
    title: 'Website Maintenance',
    iconName: 'Settings',
    description:
      'Keep your website updated, functional, secure, and presentable with ongoing improvements and technical assistance.',
    deliverables: [
      'Website updates',
      'Content changes',
      'Bug fixes',
      'Performance improvements',
      'Technical support',
    ],
    ctaLabel: 'Request Website Support',
    whatsappMessage:
      'Hello SAMLAT DIGITAL SOLUTIONS, I need Website Maintenance and technical support for my site.',
  },
  {
    id: 'branding-identity',
    title: 'Branding and Digital Identity',
    iconName: 'Layers',
    description:
      'Build a consistent and professional brand identity that helps customers recognize your business across digital platforms.',
    deliverables: [
      'Brand color selection',
      'Typography systems',
      'Visual identity design',
      'Marketing materials',
      'Consistent brand presentation',
    ],
    ctaLabel: 'Build My Brand',
    whatsappMessage:
      'Hello SAMLAT DIGITAL SOLUTIONS, I would like to build a comprehensive brand and digital identity for my business.',
  },
  {
    id: 'digital-consultation',
    title: 'Digital Consultation',
    iconName: 'Lightbulb',
    description:
      'Get practical guidance on choosing the right digital tools, improving your online presence, and planning your next digital project.',
    deliverables: [
      'Digital strategy audit',
      'Technology stack selection',
      'Online visibility advisory',
      'Project scope and planning',
    ],
    ctaLabel: 'Discuss My Idea',
    whatsappMessage:
      'Hello SAMLAT DIGITAL SOLUTIONS, I have a digital project idea and would like to schedule a consultation.',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'proj-1',
    title: 'Modern Business Website',
    category: 'Web Design',
    typeBadge: 'Design Concept',
    shortDescription:
      'A sleek, high-conversion corporate web experience crafted with dark aesthetics, smooth section transitions, and responsive mobile optimization.',
    fullDescription:
      'An illustrative corporate showcase designed for modern agencies and service companies. Features high-impact hero geometry, responsive navigation, structured service grids, and seamless call-to-actions engineered to maximize customer inquiries.',
    deliverables: ['Custom UI/UX Architecture', 'Responsive Layout', 'Contact & Lead Capture', 'Fast Page Performance'],
    colorPalette: ['#0B1020', '#151D30', '#3B82F6', '#22D3EE'],
    features: ['High-contrast readability', 'Multi-device responsive layout', 'Instant WhatsApp inquiry triggers'],
    mockupType: 'web-corporate',
    imageUrl: '/src/assets/images/web_design_showcase_1792161662284.jpg',
  },
  {
    id: 'proj-2',
    title: 'Creative Promotional Flyer',
    category: 'Graphic Design',
    typeBadge: 'Design Concept',
    shortDescription:
      'Dynamic promotional campaign flyer featuring bold typographic hierarchy, vivid contrast, and eye-catching visual composition.',
    fullDescription:
      'An illustrative marketing creative designed for high-impact social media promotion, corporate event launches, and product announcements. Incorporates clean geometry, balanced negative space, and unmistakable focal points.',
    deliverables: ['Print-Ready CMYK Asset', 'Digital Social Dimensions', 'Vector Layout Elements', 'Brand Consistency'],
    colorPalette: ['#0F172A', '#3B82F6', '#38BDF8', '#F8FAFC'],
    features: ['Attention-grabbing headline geometry', 'Crisp vector graphic elements', 'Optimized for Instagram & WhatsApp status'],
    mockupType: 'flyer-modern',
    imageUrl: '/src/assets/images/graphic_design_showcase_1792161662859.jpg',
  },
  {
    id: 'proj-3',
    title: 'Professional Brand Identity',
    category: 'Branding',
    typeBadge: 'Design Concept',
    shortDescription:
      'Cohesive visual identity system with geometric mark guidelines, custom color harmonies, and typography pairings.',
    fullDescription:
      'A comprehensive brand system concept demonstrating how consistent digital touchpoints create consumer trust. Covers logo usage guidelines, digital color scales, modern font pairings, and unified stationary designs.',
    deliverables: ['Logo & Monogram Suite', 'Brand Guidelines Sheet', 'Typography System', 'Stationery & Card Concepts'],
    colorPalette: ['#0A0F1D', '#1E293B', '#22D3EE', '#60A5FA'],
    features: ['Modular logo lockups', 'Consistent color harmonies', 'Universal application across print & screens'],
    mockupType: 'brand-guidelines',
    imageUrl: '/src/assets/images/brand_identity_showcase_1792161662943.jpg',
  },
  {
    id: 'proj-4',
    title: 'E-commerce Website Concept',
    category: 'Web Design',
    typeBadge: 'Design Concept',
    shortDescription:
      'Clean product storefront layout prioritizing visual presentation, structured catalog filtering, and frictionless customer checkout paths.',
    fullDescription:
      'An illustrative online retail storefront concept emphasizing catalog clarity, rapid product discovery, and modern payment gateways integration ready for scalable transactions.',
    deliverables: ['Product Showcase Grids', 'Cart & Checkout Interface', 'Mobile Shopping Experience', 'Filter Architecture'],
    colorPalette: ['#0B1020', '#111827', '#2563EB', '#06B6D4'],
    features: ['Streamlined cart drawer interaction', 'Quick-view product inspection', 'Frictionless payment flow layout'],
    mockupType: 'ecommerce-store',
    imageUrl: '/src/assets/images/web_design_showcase_1792161662284.jpg',
  },
  {
    id: 'proj-5',
    title: 'Social Media Campaign Design',
    category: 'Graphic Design',
    typeBadge: 'Design Concept',
    shortDescription:
      'A multi-format visual campaign package created to maintain consistent visual branding across Instagram, LinkedIn, and WhatsApp.',
    fullDescription:
      'A cohesive set of square and portrait promotional templates structured to drive engagement, announce seasonal offers, and reinforce brand authority across all customer touchpoints.',
    deliverables: ['Instagram Post Series', 'Story & Status Formats', 'Announcement Banners', 'Reusable Template Assets'],
    colorPalette: ['#0F172A', '#1D4ED8', '#0EA5E9', '#E2E8F0'],
    features: ['Modular layout variants', 'High-contrast text zones for quick mobile reading', 'Consistent brand signature'],
    mockupType: 'social-campaign',
    imageUrl: '/src/assets/images/graphic_design_showcase_1792161662859.jpg',
  },
  {
    id: 'proj-6',
    title: 'Fintech Dashboard UI Concept',
    category: 'Digital Concepts',
    typeBadge: 'Concept Project',
    shortDescription:
      'Clean transaction interface and digital payments management concept designed with dark mode clarity and intuitive balance overview.',
    fullDescription:
      'An illustrative fintech interface exploration demonstrating how digital payment workflows, supported account actions, and transaction statuses can be presented with clarity, calm contrast, and ease of use.',
    deliverables: ['Dashboard Overview Wireframe', 'Transaction Activity Component', 'Payment Modal Concept', 'Status Indicators'],
    colorPalette: ['#0B1020', '#151D30', '#10B981', '#38BDF8'],
    features: ['Tabular financial figures', 'Clear transaction status badges', 'Secure payment confirmation screen design'],
    mockupType: 'fintech-ui',
    imageUrl: '/src/assets/images/fintech_dashboard_showcase_1792161664110.jpg',
  },
];

export const WHY_CHOOSE_US: ReasonItem[] = [
  {
    number: '01',
    title: 'MODERN DESIGN',
    description: 'Professional visuals and layouts designed to make a strong first impression.',
    iconName: 'Layout',
  },
  {
    number: '02',
    title: 'MOBILE-FIRST EXPERIENCE',
    description: 'Websites designed to work smoothly across mobile phones, tablets, and desktops.',
    iconName: 'Smartphone',
  },
  {
    number: '03',
    title: 'ATTENTION TO DETAIL',
    description: 'Careful attention to layout, typography, usability, and presentation.',
    iconName: 'CheckCircle',
  },
  {
    number: '04',
    title: 'CUSTOMER-FOCUSED APPROACH',
    description: 'Solutions shaped around your needs, goals, and project requirements.',
    iconName: 'Users',
  },
  {
    number: '05',
    title: 'MULTIPLE DIGITAL SERVICES',
    description: 'Website development, graphic design, and digital solutions in one place.',
    iconName: 'Cpu',
  },
  {
    number: '06',
    title: 'DIRECT COMMUNICATION',
    description: 'Reach us easily through WhatsApp, phone, or email to discuss your project.',
    iconName: 'MessageSquare',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'TELL US WHAT YOU NEED',
    description: 'Contact us and explain your idea, project, or preferred service.',
  },
  {
    step: '02',
    title: 'DISCUSS YOUR REQUIREMENTS',
    description: 'We discuss the scope of your project, your preferences, and the expected deliverables.',
  },
  {
    step: '03',
    title: 'CONFIRM YOUR PROJECT',
    description: 'Review the agreed scope, timeline, and pricing before work begins.',
  },
  {
    step: '04',
    title: 'RECEIVE YOUR SOLUTION',
    description: 'Your project is completed according to the agreed requirements.',
  },
];
