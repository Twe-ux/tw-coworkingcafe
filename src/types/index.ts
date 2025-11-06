// Menu types
export interface SubMenuItem {
  id: number;
  name: string;
  path: string;
}

export interface MenuItem {
  id: number;
  name: string;
  path: string;
  subMenu?: SubMenuItem[];
}

// Service types
export interface Service {
  id: number;
  title: string;
  description: string;
  imgSrc?: string;
}

// Project types
export interface Project {
  id: number;
  title: string;
  category: string;
  imgSrc: string;
  description?: string;
}

// Blog types
export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  imgSrc: string;
  author: string;
  date: string;
  category: string;
  comments: number;
}

// Testimonial types
export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company?: string;
  review: string;
  rating: number;
  imgSrc: string;
}

// Pricing types
export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  period: string;
  description: string;
  features: PricingFeature[];
  recommended?: boolean;
}

// FAQ types
export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

// Partner types
export interface Partner {
  id: number;
  name: string;
  logoSrc: string;
}
