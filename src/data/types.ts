export interface SiteSettings {
  brandName: string;
  siteUrl: string;
  locale: string;
  localeBasePath: string;
  localeLabel: string;
  defaultLocale: string;
  supportedLocales: string[];
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  businessName: string;
  legalName: string | null;
  taxId: string | null;
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
  legal?: {
    legalName: string;
    taxId: string;
    legalAddress: string;
    website?: string;
  };
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
  googleMapsUrl?: string;
  serviceArea?: string[];
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

export interface HomeCollection {
  locale: string;
  hero: HomeSection;
  servicesOverview: HomeSection;
  whyChooseUs: HomeSection;
  process: HomeSection;
  contactCta: HomeSection;
  faqs: HomeSection;
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

export interface ContactFieldContent {
  label: string;
  placeholder?: string;
  autocomplete?: string;
  rows?: number;
}

export interface ContactFormContent {
  locale: string;
  title: string;
  intro: string;
  fields: {
    name: ContactFieldContent;
    email: ContactFieldContent;
    phone: ContactFieldContent;
    service: ContactFieldContent;
    message: ContactFieldContent;
    privacy: ContactFieldContent;
    honeypot: ContactFieldContent;
  };
  serviceOptions: Array<{
    value: string;
    label: string;
  }>;
  privacyConsent: {
    prefix: string;
    linkLabel: string;
    suffix: string;
  };
  legalSummary: string[];
  submitLabel: string;
  sendingLabel: string;
  successMessage: string;
  errorMessage: string;
  validationMessages: {
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    phoneInvalid: string;
    serviceRequired: string;
    messageRequired: string;
    privacyRequired: string;
    honeypotFilled: string;
    genericError: string;
  };
  honeypotLabel: string;
}

export interface CookieConsentCategory {
  key: string;
  title: string;
  description: string;
  required?: boolean;
  activeByDefault?: boolean;
  pending?: boolean;
}

export interface CookieConsentContent {
  locale: string;
  storageKey: string;
  version: string;
  banner: {
    title: string;
    body: string;
    acceptLabel: string;
    rejectLabel: string;
    configureLabel: string;
    policyLabel: string;
  };
  modal: {
    title: string;
    body: string;
    saveLabel: string;
    acceptAllLabel: string;
    rejectAllLabel: string;
    closeLabel: string;
  };
  labels: {
    alwaysActive: string;
    preparedInactive: string;
  };
  categories: CookieConsentCategory[];
  footerLinkLabel: string;
  savedMessage: string;
}

export interface RedirectData {
  redirects: Array<{
    from: string;
    to: string;
    notes: string;
  }>;
}

export interface VisualAssetEntry {
  path: string;
  width: number;
  height: number;
  alt: string;
  localizedAlt?: Partial<Record<'es' | 'ca' | 'en' | 'de', string>>;
  mobilePath?: string;
  mobileWidth?: number;
  mobileHeight?: number;
  cardPath?: string;
  cardWidth?: number;
  cardHeight?: number;
  status?: 'temporary' | 'real' | 'approved';
  usage?: string;
  notes?: string;
  temporary: boolean;
}

export interface SharedVisuals {
  branding: {
    logo: {
      path: string;
      alt: string;
      width: number;
      height: number;
      mobileWidth?: number;
      mobileHeight?: number;
      iconPath: string;
      iconAlt: string;
      status?: 'temporary' | 'real' | 'approved';
      notes?: string;
    };
  };
  home: {
    hero: VisualAssetEntry;
    trust: VisualAssetEntry;
    process: VisualAssetEntry;
    contact: VisualAssetEntry;
  };
  about: {
    hero: VisualAssetEntry;
  };
  contact: {
    hero: VisualAssetEntry;
  };
  services: Record<string, VisualAssetEntry>;
  og: {
    default: string;
    services: string;
    contact: string;
  };
}

export interface SharedInternalLinks {
  pages: {
    home: {
      serviceIds: string[];
      trustPageId: string;
      contactPageId: string;
      reviewPageId?: string;
      mapPageId?: string;
    };
    services: {
      serviceIds: string[];
      trustPageId: string;
      contactPageId: string;
      reviewPageId?: string;
      mapPageId?: string;
    };
    about: {
      serviceIds: string[];
      featuredServiceId: string;
      contactPageId: string;
      reviewPageId?: string;
    };
    contact: {
      serviceIds: string[];
      trustPageId: string;
      reviewPageId?: string;
      mapPageId?: string;
    };
  };
  services: Record<string, {
    relatedServiceIds: string[];
    trustPageId: string;
    servicesPageId: string;
    contactPageId: string;
    reviewPageId?: string;
    mapPageId?: string;
  }>;
}

export interface InternalLinksContentSection {
  eyebrow: string;
  title: string;
  body: string;
}

export interface InternalLinksContent {
  locale: string;
  home: InternalLinksContentSection & {
    serviceListTitle: string;
    trustLabel: string;
    contactLabel: string;
    whatsappLabel?: string;
    reviewsLabel?: string;
  };
  servicesIndex: InternalLinksContentSection & {
    contactLabel: string;
    aboutLabel: string;
    whatsappLabel?: string;
  };
  serviceDetail: {
    journey: InternalLinksContentSection & {
      contactLabel: string;
      servicesLabel: string;
      aboutLabel: string;
      whatsappLabel?: string;
    };
    related: InternalLinksContentSection;
    faqCta: InternalLinksContentSection & {
      contactLabel: string;
      whatsappLabel?: string;
    };
  };
  about: InternalLinksContentSection & {
    servicesLabel: string;
    contactLabel: string;
    featuredServiceLabel: string;
    whatsappLabel?: string;
  };
  contact: InternalLinksContentSection & {
    servicesLabel: string;
    aboutLabel: string;
    phoneLabel: string;
    whatsappLabel?: string;
    reviewsLabel?: string;
    mapLabel?: string;
  };
}

export interface WhatsAppContent {
  locale: string;
  label: string;
  shortLabel: string;
  ariaLabel: string;
  message: string;
  floatingText: string;
  sectionTitle: string;
  sectionDescription: string;
}

export interface MapContent {
  locale: string;
  title: string;
  subtitle: string;
  description: string;
  addressLabel: string;
  address: string;
  openMapLabel: string;
  mapConsentTitle: string;
  mapConsentText: string;
  privacyNotice: string;
  fallbackText: string;
  footerLinkLabel: string;
  iframeTitle: string;
}

export interface SharedReviews {
  googleBusinessName: string;
  googleBusinessUrl: string | null;
  reviewRequestUrl: string;
  aggregateRating: {
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
    source: string;
  };
  reviews: Array<{
    author: string;
    ratingValue: number;
    reviewBody: string;
    datePublished?: string;
  }>;
  pendingConfirmation: string[];
}

export interface ReviewsContent {
  locale: string;
  title: string;
  intro: string;
  ratingLabel: string;
  reviewCountLabel: string;
  leaveReviewTitle: string;
  leaveReviewText: string;
  leaveReviewButton: string;
  viewProfileButton: string;
  noReviewsFallback: string;
  trustNote: string;
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
    title: string;
    body: string;
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
