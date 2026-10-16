export interface ServiceItem {
  id: string;
  title: string;
  iconName: 'Monitor' | 'Palette' | 'Wallet' | 'Settings' | 'Layers' | 'Lightbulb';
  description: string;
  deliverables?: string[];
  ctaLabel: string;
  whatsappMessage: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Web Design' | 'Graphic Design' | 'Branding' | 'Digital Concepts';
  typeBadge: 'Design Concept' | 'Concept Project';
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  colorPalette: string[];
  features: string[];
  mockupType: 'web-corporate' | 'flyer-modern' | 'brand-guidelines' | 'ecommerce-store' | 'social-campaign' | 'fintech-ui';
  imageUrl?: string;
}

export interface ValueProp {
  title: string;
  description: string;
  iconName: 'Compass' | 'Sparkles' | 'ShieldCheck';
}

export interface ReasonItem {
  number: string;
  title: string;
  description: string;
  iconName: 'Layout' | 'Smartphone' | 'CheckCircle' | 'Users' | 'Cpu' | 'MessageSquare';
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  service: string;
  budget: string;
  projectDetails: string;
}
