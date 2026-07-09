import sharedSite from '../../content/shared/site.json';
import sharedContact from '../../content/shared/contact.json';
import sharedServicesIndex from '../../content/shared/services-index.json';
import sharedRedirects from '../../content/shared/redirects.json';
import sharedVisuals from '../../content/shared/visuals.json';
import sharedReviews from '../../content/shared/reviews.json';
import esNavigation from '../../content/locales/es/navigation.json';
import caNavigation from '../../content/locales/ca/navigation.json';
import enNavigation from '../../content/locales/en/navigation.json';
import deNavigation from '../../content/locales/de/navigation.json';
import esHome from '../../content/locales/es/home.json';
import caHome from '../../content/locales/ca/home.json';
import enHome from '../../content/locales/en/home.json';
import deHome from '../../content/locales/de/home.json';
import esContactForm from '../../content/locales/es/contact.json';
import caContactForm from '../../content/locales/ca/contact.json';
import enContactForm from '../../content/locales/en/contact.json';
import deContactForm from '../../content/locales/de/contact.json';
import esWhatsApp from '../../content/locales/es/whatsapp.json';
import caWhatsApp from '../../content/locales/ca/whatsapp.json';
import enWhatsApp from '../../content/locales/en/whatsapp.json';
import deWhatsApp from '../../content/locales/de/whatsapp.json';
import esMap from '../../content/locales/es/map.json';
import caMap from '../../content/locales/ca/map.json';
import enMap from '../../content/locales/en/map.json';
import deMap from '../../content/locales/de/map.json';
import esReviews from '../../content/locales/es/reviews.json';
import caReviews from '../../content/locales/ca/reviews.json';
import enReviews from '../../content/locales/en/reviews.json';
import deReviews from '../../content/locales/de/reviews.json';
import esCookieConsent from '../../content/locales/es/cookie-consent.json';
import caCookieConsent from '../../content/locales/ca/cookie-consent.json';
import enCookieConsent from '../../content/locales/en/cookie-consent.json';
import deCookieConsent from '../../content/locales/de/cookie-consent.json';
import sharedInternalLinks from '../../content/shared/internal-links.json';
import esSeo from '../../content/locales/es/seo.json';
import caSeo from '../../content/locales/ca/seo.json';
import enSeo from '../../content/locales/en/seo.json';
import deSeo from '../../content/locales/de/seo.json';
import esInternalLinks from '../../content/locales/es/internal-links.json';
import caInternalLinks from '../../content/locales/ca/internal-links.json';
import enInternalLinks from '../../content/locales/en/internal-links.json';
import deInternalLinks from '../../content/locales/de/internal-links.json';
import esElectricidadYDomotica from '../../content/locales/es/services/electricidad-y-domotica.json';
import esLampisteriaYClimatizacion from '../../content/locales/es/services/lampisteria-y-climatizacion.json';
import esAlarmasYCamaras from '../../content/locales/es/services/alarmas-y-camaras.json';
import caElectricitatIDomotica from '../../content/locales/ca/services/electricitat-i-domotica.json';
import caLampisteriaIClimatitzacio from '../../content/locales/ca/services/lampisteria-i-climatitzacio.json';
import caAlarmesICameres from '../../content/locales/ca/services/alarmes-i-cameres.json';
import enElectricityAndHomeAutomation from '../../content/locales/en/services/electricity-and-home-automation.json';
import enPlumbingAndClimateControl from '../../content/locales/en/services/plumbing-and-climate-control.json';
import enAlarmsAndCameras from '../../content/locales/en/services/alarms-and-cameras.json';
import deElektrizitaetUndSmartHome from '../../content/locales/de/services/elektrizitaet-und-smart-home.json';
import deSanitaerUndKlimatechnik from '../../content/locales/de/services/sanitaer-und-klimatechnik.json';
import deAlarmanlagenUndKameras from '../../content/locales/de/services/alarmanlagen-und-kameras.json';
import esPrivacy from '../../content/locales/es/legal/privacy.json';
import esLegalNotice from '../../content/locales/es/legal/legal-notice.json';
import esCookies from '../../content/locales/es/legal/cookies.json';
import esTerms from '../../content/locales/es/legal/terms.json';
import caPrivacy from '../../content/locales/ca/legal/privacy.json';
import caLegalNotice from '../../content/locales/ca/legal/legal-notice.json';
import caCookies from '../../content/locales/ca/legal/cookies.json';
import caTerms from '../../content/locales/ca/legal/terms.json';
import enPrivacy from '../../content/locales/en/legal/privacy.json';
import enLegalNotice from '../../content/locales/en/legal/legal-notice.json';
import enCookies from '../../content/locales/en/legal/cookies.json';
import enTerms from '../../content/locales/en/legal/terms.json';
import dePrivacy from '../../content/locales/de/legal/privacy.json';
import deLegalNotice from '../../content/locales/de/legal/legal-notice.json';
import deCookies from '../../content/locales/de/legal/cookies.json';
import deTerms from '../../content/locales/de/legal/terms.json';
import type {
  ContactFormContent,
  HomeCollection,
  HomeSection,
  CookieConsentContent,
  LegalPage,
  NavigationData,
  RedirectData,
  SeoData,
  ServiceEntry,
  SharedContact,
  SharedInternalLinks,
  SharedVisuals,
  SiteSettings,
  InternalLinksContent,
  MapContent,
  ReviewsContent,
  SharedReviews,
  WhatsAppContent,
} from '../data/types';

function normalizeImportedContent<T>(value: T): T {
  if (typeof value === 'string') {
    if (!/[ÃÂð]/.test(value)) {
      return value;
    }

    return Buffer.from(value, 'latin1').toString('utf8') as T;
  }

  if (Array.isArray(value)) {
    return value.map((entry) => normalizeImportedContent(entry)) as T;
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, normalizeImportedContent(entry)]),
    ) as T;
  }

  return value;
}

const siteData = normalizeImportedContent(sharedSite);
const contactData = normalizeImportedContent(sharedContact);
const servicesIndexData = normalizeImportedContent(sharedServicesIndex);
const redirectsData = normalizeImportedContent(sharedRedirects);
const visualsData = normalizeImportedContent(sharedVisuals);
const reviewsData = normalizeImportedContent(sharedReviews);
const internalLinksData = normalizeImportedContent(sharedInternalLinks);

export const LOCALES = siteData.supportedLocales as Locale[];
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE = siteData.defaultLocale as Locale;

export const SERVICE_IDS = servicesIndexData.services.map((service) => service.serviceId) as ServiceId[];
export type ServiceId = (typeof SERVICE_IDS)[number];

export const LEGAL_PAGE_IDS = ['legalNotice', 'privacy', 'cookies', 'terms'] as const;
export type LegalPageId = (typeof LEGAL_PAGE_IDS)[number];

export const STATIC_PAGE_IDS = ['home', 'services', 'about', 'contact'] as const;
export type StaticPageId = (typeof STATIC_PAGE_IDS)[number];

export type RoutePageId = StaticPageId | LegalPageId;
export type InternalPageId = StaticPageId | 'legal';

export interface AlternateLink {
  locale: Locale;
  href: string;
  label: string;
}

export interface LocalizedServiceEntry extends ServiceEntry {
  serviceId: ServiceId;
}

export interface LocalizedLegalPage extends LegalPage {
  pageId: LegalPageId;
}

export interface RouteCatalog {
  home: string;
  services: string;
  about: string;
  contact: string;
  legal: Record<LegalPageId, string>;
  servicesById: Record<ServiceId, string>;
}

export type OgImageKind = 'default' | 'services' | 'contact';

const navigationByLocale: Record<Locale, NavigationData> = {
  es: normalizeImportedContent(esNavigation),
  ca: normalizeImportedContent(caNavigation),
  en: normalizeImportedContent(enNavigation),
  de: normalizeImportedContent(deNavigation),
};

const homeByLocale: Record<Locale, HomeCollection> = {
  es: normalizeImportedContent(esHome),
  ca: normalizeImportedContent(caHome),
  en: normalizeImportedContent(enHome),
  de: normalizeImportedContent(deHome),
};

const contactFormByLocale: Record<Locale, ContactFormContent> = {
  es: normalizeImportedContent(esContactForm),
  ca: normalizeImportedContent(caContactForm),
  en: normalizeImportedContent(enContactForm),
  de: normalizeImportedContent(deContactForm),
};

const whatsAppByLocale: Record<Locale, WhatsAppContent> = {
  es: normalizeImportedContent(esWhatsApp),
  ca: normalizeImportedContent(caWhatsApp),
  en: normalizeImportedContent(enWhatsApp),
  de: normalizeImportedContent(deWhatsApp),
};

const mapByLocale: Record<Locale, MapContent> = {
  es: normalizeImportedContent(esMap),
  ca: normalizeImportedContent(caMap),
  en: normalizeImportedContent(enMap),
  de: normalizeImportedContent(deMap),
};

const reviewsByLocale: Record<Locale, ReviewsContent> = {
  es: normalizeImportedContent(esReviews),
  ca: normalizeImportedContent(caReviews),
  en: normalizeImportedContent(enReviews),
  de: normalizeImportedContent(deReviews),
};

const seoByLocale: Record<Locale, SeoData> = {
  es: normalizeImportedContent(esSeo),
  ca: normalizeImportedContent(caSeo),
  en: normalizeImportedContent(enSeo),
  de: normalizeImportedContent(deSeo),
};

const cookieConsentByLocale: Record<Locale, CookieConsentContent> = {
  es: normalizeImportedContent(esCookieConsent),
  ca: normalizeImportedContent(caCookieConsent),
  en: normalizeImportedContent(enCookieConsent),
  de: normalizeImportedContent(deCookieConsent),
};

const internalLinksByLocale: Record<Locale, InternalLinksContent> = {
  es: normalizeImportedContent(esInternalLinks),
  ca: normalizeImportedContent(caInternalLinks),
  en: normalizeImportedContent(enInternalLinks),
  de: normalizeImportedContent(deInternalLinks),
};

const servicesByLocale: Record<Locale, LocalizedServiceEntry[]> = {
  es: [
    { serviceId: 'electricidad-y-domotica', ...normalizeImportedContent(esElectricidadYDomotica) },
    { serviceId: 'lampisteria-y-climatizacion', ...normalizeImportedContent(esLampisteriaYClimatizacion) },
    { serviceId: 'alarmas-y-camaras', ...normalizeImportedContent(esAlarmasYCamaras) },
  ],
  ca: [
    { serviceId: 'electricidad-y-domotica', ...normalizeImportedContent(caElectricitatIDomotica) },
    { serviceId: 'lampisteria-y-climatizacion', ...normalizeImportedContent(caLampisteriaIClimatitzacio) },
    { serviceId: 'alarmas-y-camaras', ...normalizeImportedContent(caAlarmesICameres) },
  ],
  en: [
    { serviceId: 'electricidad-y-domotica', ...normalizeImportedContent(enElectricityAndHomeAutomation) },
    { serviceId: 'lampisteria-y-climatizacion', ...normalizeImportedContent(enPlumbingAndClimateControl) },
    { serviceId: 'alarmas-y-camaras', ...normalizeImportedContent(enAlarmsAndCameras) },
  ],
  de: [
    { serviceId: 'electricidad-y-domotica', ...normalizeImportedContent(deElektrizitaetUndSmartHome) },
    { serviceId: 'lampisteria-y-climatizacion', ...normalizeImportedContent(deSanitaerUndKlimatechnik) },
    { serviceId: 'alarmas-y-camaras', ...normalizeImportedContent(deAlarmanlagenUndKameras) },
  ],
};

const legalPagesByLocale: Record<Locale, LocalizedLegalPage[]> = {
  es: [
    { pageId: 'legalNotice', ...normalizeImportedContent(esLegalNotice) },
    { pageId: 'privacy', ...normalizeImportedContent(esPrivacy) },
    { pageId: 'cookies', ...normalizeImportedContent(esCookies) },
    { pageId: 'terms', ...normalizeImportedContent(esTerms) },
  ],
  ca: [
    { pageId: 'legalNotice', ...normalizeImportedContent(caLegalNotice) },
    { pageId: 'privacy', ...normalizeImportedContent(caPrivacy) },
    { pageId: 'cookies', ...normalizeImportedContent(caCookies) },
    { pageId: 'terms', ...normalizeImportedContent(caTerms) },
  ],
  en: [
    { pageId: 'legalNotice', ...normalizeImportedContent(enLegalNotice) },
    { pageId: 'privacy', ...normalizeImportedContent(enPrivacy) },
    { pageId: 'cookies', ...normalizeImportedContent(enCookies) },
    { pageId: 'terms', ...normalizeImportedContent(enTerms) },
  ],
  de: [
    { pageId: 'legalNotice', ...normalizeImportedContent(deLegalNotice) },
    { pageId: 'privacy', ...normalizeImportedContent(dePrivacy) },
    { pageId: 'cookies', ...normalizeImportedContent(deCookies) },
    { pageId: 'terms', ...normalizeImportedContent(deTerms) },
  ],
};

function resolveLocale(locale?: string): Locale {
  return locale && isLocale(locale) ? locale : DEFAULT_LOCALE;
}

function buildAbsoluteUrl(path: string): string {
  return new URL(path, siteData.siteUrl).toString();
}

function toPathname(href: string): string {
  return new URL(href).pathname;
}

function normalizePath(path: string): string {
  return path.endsWith('/') ? path : `${path}/`;
}

function getSeoPath(locale: Locale, pageId: RoutePageId): string {
  const href = seoByLocale[locale].hreflang[pageId]?.[locale];

  if (!href) {
    throw new Error(`Missing hreflang path for ${pageId} (${locale})`);
  }

  return normalizePath(toPathname(href));
}

function getNavigationItem(locale: Locale, itemId: string) {
  return navigationByLocale[locale].items.find((item) => item.id === itemId);
}

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function getAllowedLocales(): Locale[] {
  return [...LOCALES];
}

export function getLocaleLabel(locale: string): string {
  const resolvedLocale = resolveLocale(locale);
  return siteData.localeLabels[resolvedLocale] ?? resolvedLocale.toUpperCase();
}

export function getSiteSettings(locale?: string): SiteSettings {
  const resolvedLocale = resolveLocale(locale);
  const seo = getSeoData(resolvedLocale);

  return {
    brandName: siteData.brandName,
    siteUrl: siteData.siteUrl,
    locale: resolvedLocale,
    localeBasePath: siteData.localeBasePaths[resolvedLocale],
    localeLabel: getLocaleLabel(resolvedLocale),
    defaultLocale: DEFAULT_LOCALE,
    supportedLocales: getAllowedLocales(),
    defaultTitle: seo.titles.home,
    titleTemplate: `%s | ${siteData.brandName}`,
    defaultDescription: seo.descriptions.home,
    businessName: siteData.brandName,
    legalName: null,
    primaryPhone: contactData.phones.mobile,
    primaryEmail: contactData.primaryEmail,
    locality: contactData.address.locality,
    region: contactData.address.region,
    countryCode: contactData.address.countryCode,
    postalCode: contactData.address.postalCode,
    addressLine: contactData.address.streetAddress,
    coverageArea: contactData.serviceArea ?? [],
    socialLinks: contactData.socialLinks,
  };
}

export function getSharedContact(): SharedContact {
  return contactData;
}

export function getRedirectData(): RedirectData {
  return redirectsData;
}

export function getSharedVisuals(): SharedVisuals {
  return visualsData;
}

export function getSharedReviews(): SharedReviews {
  return reviewsData;
}

export function getSharedInternalLinks(): SharedInternalLinks {
  return internalLinksData;
}

export function getNavigation(locale?: string): NavigationData {
  return navigationByLocale[resolveLocale(locale)];
}

export function getSeoData(locale?: string): SeoData {
  return seoByLocale[resolveLocale(locale)];
}

export function getCookieConsentContent(locale?: string): CookieConsentContent {
  return cookieConsentByLocale[resolveLocale(locale)];
}

export function getHomeCollection(locale?: string): HomeCollection {
  return homeByLocale[resolveLocale(locale)];
}

export function getContactFormContent(locale?: string): ContactFormContent {
  return contactFormByLocale[resolveLocale(locale)];
}

export function getWhatsAppContent(locale?: string): WhatsAppContent {
  return whatsAppByLocale[resolveLocale(locale)];
}

export function getMapContent(locale?: string): MapContent {
  return mapByLocale[resolveLocale(locale)];
}

export function getReviewsContent(locale?: string): ReviewsContent {
  return reviewsByLocale[resolveLocale(locale)];
}

export function getInternalLinksContent(locale?: string): InternalLinksContent {
  return internalLinksByLocale[resolveLocale(locale)];
}

export function buildWhatsAppUrl(locale?: string, customMessage?: string): string {
  const resolvedLocale = resolveLocale(locale);
  const baseMessage = customMessage ?? getWhatsAppContent(resolvedLocale).message;
  const normalizedNumber = contactData.phones.whatsappE164.replace(/[^\d]/g, '');
  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(baseMessage)}`;
}

export function getHomeSections(locale?: string): HomeSection[] {
  const home = getHomeCollection(locale);

  return [home.hero, home.servicesOverview, home.process, home.contactCta];
}

export function getHomeSection(locale: string | undefined, sectionId: string): HomeSection {
  const home = getHomeCollection(locale);
  const section = Object.values(home).find((entry) => entry.sectionId === sectionId);

  if (!section) {
    throw new Error(`Missing home section ${sectionId} for locale ${resolveLocale(locale)}`);
  }

  return section;
}

export function getPublishedServices(locale?: string): LocalizedServiceEntry[] {
  return [...servicesByLocale[resolveLocale(locale)]];
}

export function getAllServices(locale?: string): LocalizedServiceEntry[] {
  return getPublishedServices(locale);
}

export function getServiceBySlug(locale: string | undefined, slug: string): LocalizedServiceEntry | undefined {
  return getPublishedServices(locale).find((service) => service.slug === slug);
}

export function getServiceRouteById(serviceId: string, locale?: string): string | undefined {
  const resolvedLocale = resolveLocale(locale);
  const entry = servicesIndexData.services.find((service) => service.serviceId === serviceId);

  return entry?.locales?.[resolvedLocale]?.path;
}

export function getServiceById(serviceId: string, locale?: string): LocalizedServiceEntry | undefined {
  const resolvedLocale = resolveLocale(locale);
  const localService = servicesByLocale[resolvedLocale].find((service) => service.serviceId === serviceId);

  if (localService) {
    return localService;
  }

  return servicesByLocale[DEFAULT_LOCALE].find((service) => service.serviceId === serviceId);
}

export function getServiceAlternates(serviceId: string): Record<Locale, string> {
  const entry = servicesIndexData.services.find((service) => service.serviceId === serviceId);

  if (!entry) {
    throw new Error(`Missing service index entry for ${serviceId}`);
  }

  return LOCALES.reduce((alternates, locale) => {
    alternates[locale] = entry.locales[locale].path;
    return alternates;
  }, {} as Record<Locale, string>);
}

export function getLegalPages(locale?: string): LocalizedLegalPage[] {
  return [...legalPagesByLocale[resolveLocale(locale)]];
}

export function getLegalPageBySlug(locale: string | undefined, slug: string): LocalizedLegalPage | undefined {
  return getLegalPages(locale).find((page) => page.slug === slug);
}

export function getLegalPageById(pageId: LegalPageId, locale?: string): LocalizedLegalPage | undefined {
  const resolvedLocale = resolveLocale(locale);
  const localPage = legalPagesByLocale[resolvedLocale].find((page) => page.pageId === pageId);

  if (localPage) {
    return localPage;
  }

  return legalPagesByLocale[DEFAULT_LOCALE].find((page) => page.pageId === pageId);
}

export function getPageAlternates(pageId: RoutePageId): Record<Locale, string> {
  return LOCALES.reduce((alternates, locale) => {
    alternates[locale] = getSeoPath(locale, pageId);
    return alternates;
  }, {} as Record<Locale, string>);
}

export function getAlternateLinks(paths: Partial<Record<Locale, string>>): AlternateLink[] {
  return LOCALES.map((locale) => ({
    locale,
    label: locale.toUpperCase(),
    href: paths[locale] ?? siteData.localeBasePaths[locale],
  }));
}

export function getXDefaultPath(pageId: RoutePageId): string {
  return getPageAlternates(pageId)[DEFAULT_LOCALE];
}

export function getServiceXDefaultPath(serviceId: string): string {
  return getServiceAlternates(serviceId)[DEFAULT_LOCALE];
}

export function getRouteCatalog(locale?: string): RouteCatalog {
  const resolvedLocale = resolveLocale(locale);
  const servicesById = SERVICE_IDS.reduce((accumulator, serviceId) => {
    const path = getServiceRouteById(serviceId, resolvedLocale);

    if (!path) {
      throw new Error(`Missing service path for ${serviceId} (${resolvedLocale})`);
    }

    accumulator[serviceId] = path;
    return accumulator;
  }, {} as Record<ServiceId, string>);

  return {
    home: getNavigationItem(resolvedLocale, 'home')?.href ?? getSeoPath(resolvedLocale, 'home'),
    services: getNavigationItem(resolvedLocale, 'services')?.href ?? getSeoPath(resolvedLocale, 'services'),
    about: getNavigationItem(resolvedLocale, 'about')?.href ?? getSeoPath(resolvedLocale, 'about'),
    contact: getNavigationItem(resolvedLocale, 'contact')?.href ?? getSeoPath(resolvedLocale, 'contact'),
    legal: LEGAL_PAGE_IDS.reduce((accumulator, pageId) => {
      accumulator[pageId] = getSeoPath(resolvedLocale, pageId);
      return accumulator;
    }, {} as Record<LegalPageId, string>),
    servicesById,
  };
}

export function getPathWithoutLocalePrefix(locale: string, path: string): string {
  const resolvedLocale = resolveLocale(locale);
  const segments = normalizePath(path).split('/').filter(Boolean);

  if (segments[0] !== resolvedLocale) {
    throw new Error(`Path ${path} does not start with locale ${resolvedLocale}`);
  }

  return segments.slice(1).join('/');
}

export function getLanguageSwitcherLinksForPage(pageId: RoutePageId): AlternateLink[] {
  return getAlternateLinks(getPageAlternates(pageId));
}

export function getLanguageSwitcherLinksForService(serviceId: string): AlternateLink[] {
  return getAlternateLinks(getServiceAlternates(serviceId));
}

export function getCanonicalUrl(path: string): string {
  return buildAbsoluteUrl(path);
}

export function getLocalBusinessSchema(
  locale?: string,
  options?: {
    path?: string;
    includeAggregateRating?: boolean;
  },
) {
  const resolvedLocale = resolveLocale(locale);
  const site = getSiteSettings(resolvedLocale);

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.siteUrl}/#localbusiness`,
    name: reviewsData.googleBusinessName || site.businessName,
    url: options?.path ? getCanonicalUrl(options.path) : site.siteUrl,
    telephone: site.primaryPhone || undefined,
    email: site.primaryEmail || undefined,
    address: site.addressLine || site.locality || site.postalCode
      ? {
          '@type': 'PostalAddress',
          streetAddress: site.addressLine || undefined,
          addressLocality: site.locality || undefined,
          addressRegion: site.region || undefined,
          postalCode: site.postalCode || undefined,
          addressCountry: site.countryCode || undefined,
        }
      : undefined,
    areaServed: site.coverageArea.length > 0 ? site.coverageArea : undefined,
    knowsLanguage: site.supportedLocales,
    sameAs: site.socialLinks.map((entry) => entry.url),
    aggregateRating: options?.includeAggregateRating
      ? {
          '@type': 'AggregateRating',
          ratingValue: reviewsData.aggregateRating.ratingValue,
          reviewCount: reviewsData.aggregateRating.reviewCount,
          bestRating: reviewsData.aggregateRating.bestRating,
        }
      : undefined,
  };
}

export function getLocalizedPath(locale: Locale, target: RoutePageId | ServiceId): string {
  if (SERVICE_IDS.includes(target as ServiceId)) {
    const path = getServiceRouteById(target, locale);

    if (!path) {
      throw new Error(`Missing localized service path for ${target} (${locale})`);
    }

    return path;
  }

  return getRouteCatalog(locale)[target as StaticPageId] ?? getRouteCatalog(locale).legal[target as LegalPageId];
}

export function getRelatedServices(locale: Locale, serviceId: ServiceId): LocalizedServiceEntry[] {
  const relatedIds = internalLinksData.services[serviceId]?.relatedServiceIds ?? [];

  return relatedIds
    .map((relatedId) => getServiceById(relatedId, locale))
    .filter((service): service is LocalizedServiceEntry => Boolean(service));
}

export function getInternalLinks(locale: Locale, pageType: InternalPageId, pageId?: ServiceId) {
  const routes = getRouteCatalog(locale);

  if (pageType === 'home') {
    return {
      services: internalLinksData.pages.home.serviceIds.map((serviceId) => getServiceById(serviceId, locale)).filter(Boolean),
      trustPath: routes.about,
      contactPath: routes.contact,
    };
  }

  if (pageType === 'services') {
    return {
      services: internalLinksData.pages.services.serviceIds.map((serviceId) => getServiceById(serviceId, locale)).filter(Boolean),
      trustPath: routes.about,
      contactPath: routes.contact,
    };
  }

  if (pageType === 'about') {
    return {
      services: internalLinksData.pages.about.serviceIds.map((serviceId) => getServiceById(serviceId, locale)).filter(Boolean),
      featuredService: getServiceById(internalLinksData.pages.about.featuredServiceId, locale),
      contactPath: routes.contact,
    };
  }

  if (pageType === 'contact') {
    return {
      services: internalLinksData.pages.contact.serviceIds.map((serviceId) => getServiceById(serviceId, locale)).filter(Boolean),
      trustPath: routes.about,
      contactPath: routes.contact,
    };
  }

  if (pageType === 'legal') {
    return {
      contactPath: routes.contact,
    };
  }

  if (!pageId) {
    throw new Error(`Missing serviceId for internal link resolution (${pageType})`);
  }

  return {
    relatedServices: getRelatedServices(locale, pageId),
    trustPath: routes.about,
    contactPath: routes.contact,
    servicesPath: routes.services,
  };
}

export function getConversionLinks(locale: Locale, context: 'home' | 'services' | 'service-detail' | 'about' | 'contact', serviceId?: ServiceId) {
  const routes = getRouteCatalog(locale);

  if (context === 'service-detail' && serviceId) {
    return {
      contactPath: routes.contact,
      servicesPath: routes.services,
      aboutPath: routes.about,
      relatedServices: getRelatedServices(locale, serviceId),
    };
  }

  return {
    contactPath: routes.contact,
    servicesPath: routes.services,
    aboutPath: routes.about,
  };
}

export function getServiceVisual(serviceId: string) {
  return visualsData.services[serviceId] ?? visualsData.home.hero;
}

export function getPageVisual(pageId: StaticPageId | 'homeHero' | 'homeTrust' | 'homeProcess' | 'homeContact') {
  if (pageId === 'homeHero') {
    return visualsData.home.hero;
  }

  if (pageId === 'homeTrust') {
    return visualsData.home.trust;
  }

  if (pageId === 'homeProcess') {
    return visualsData.home.process;
  }

  if (pageId === 'homeContact') {
    return visualsData.home.contact;
  }

  if (pageId === 'about') {
    return visualsData.about.hero;
  }

  if (pageId === 'contact') {
    return visualsData.contact.hero;
  }

  return visualsData.home.hero;
}

export function getOgImagePath(kind: OgImageKind = 'default'): string {
  return visualsData.og[kind];
}
