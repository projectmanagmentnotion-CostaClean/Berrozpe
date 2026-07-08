export interface SiteSettings {
  brandName: string;
  siteUrl: string;
  locale: string;
  defaultLocale: string;
  supportedLocales: string[];
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  businessName: string;
  legalName: string | null;
  primaryPhone: string;
  primaryEmail: string | null;
  locality: string;
  region: string;
  countryCode: string;
  postalCode: string;
  addressLine: string;
  coverageArea: string[];
  socialLinks: Array<{
    id?: string;
    label: string;
    url: string;
  }>;
}

export interface SharedContact {
  address: {
    streetAddress: string;
    postalCode: string;
    locality: string;
    region: string;
    countryCode: string;
    displayLines: string[];
    confirmed: boolean;
  };
  phones: {
    mobile: string;
    landline: string;
    whatsappE164: string;
  };
  schedule: Record<string, string>;
  emailsDetected: string[];
  primaryEmail: string | null;
  whatsAppUrl: string;
  socialLinks: Array<{
    id: string;
    label: string;
    url: string;
  }>;
  pendingConfirmation: string[];
}

export interface HomeSection {
  sectionId: string;
  eyebrow: string;
  title: string;
  body: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  items?: string[];
}

export interface NavigationData {
  locale: string;
  items: Array<{
    id: string;
    label: string;
    href: string | null;
  }>;
  ui: Record<string, string>;
}

export interface SeoData {
  locale: string;
  defaultLocale: string;
  localeAlternates: Record<string, string>;
  titles: Record<string, string>;
  descriptions: Record<string, string>;
  hreflang: Record<string, Record<string, string>>;
}

export interface ListBlock {
  title: string;
  items: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceEntry {
  slug: string;
  locale: string;
  title: string;
  shortTitle: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  intro: string;
  summary: string;
  includes: ListBlock;
  benefits: ListBlock;
  process: ListBlock;
  faqs: {
    title: string;
    items: FaqItem[];
  };
  relatedServices: string[];
  cta: {
    label: string;
    href: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  pendingConfirmation: string[];
}

export interface LegalPage {
  slug: string;
  locale: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  updatedAtLabel: string;
  updatedAtValue: string;
  intro: string;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
  pendingLegalReview: boolean;
  pendingReviewNote: string;
}
