export interface SiteSettings {
  brandName: string;
  siteUrl: string;
  locale: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  businessName: string;
  legalName: string;
  primaryPhone: string;
  primaryEmail: string;
  locality: string;
  region: string;
  countryCode: string;
  postalCode: string;
  addressLine: string;
  coverageArea: string[];
  socialLinks: Array<{
    label: string;
    url: string;
  }>;
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

export interface ServiceEntry {
  slug: string;
  status: 'draft' | 'published';
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  summary: string;
  body: string[];
  serviceAreaNote: string;
}

export interface LegalPage {
  slug: string;
  title: string;
  updatedAt: string;
  intro: string;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
}
