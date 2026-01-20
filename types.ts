export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
  type: 'standard' | 'premium' | 'script';
  priceValue: number; // For calculation/QR
}

export interface Feature {
  icon: any;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ComparisonRow {
  feature: string;
  sewa: boolean | string;
  premium: boolean | string;
}

export interface Advantage {
  icon: any;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  comment: string;
  avatar?: string;
}

export interface Statistic {
  label: string;
  value: string;
  icon: any;
}
