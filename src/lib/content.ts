import sharedSite from '../../content/shared/site.json';
import sharedContact from '../../content/shared/contact.json';
import sharedServicesIndex from '../../content/shared/services-index.json';
import sharedRedirects from '../../content/shared/redirects.json';
import esNavigation from '../../content/locales/es/navigation.json';
import caNavigation from '../../content/locales/ca/navigation.json';
import enNavigation from '../../content/locales/en/navigation.json';
import deNavigation from '../../content/locales/de/navigation.json';
import esHome from '../../content/locales/es/home.json';
import caHome from '../../content/locales/ca/home.json';
import enHome from '../../content/locales/en/home.json';
import deHome from '../../content/locales/de/home.json';
import esSeo from '../../content/locales/es/seo.json';
import caSeo from '../../content/locales/ca/seo.json';
import enSeo from '../../content/locales/en/seo.json';
import deSeo from '../../content/locales/de/seo.json';
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
  HomeCollection,
  HomeSection,
  LegalPage,
  NavigationData,
  RedirectData,
  SeoData,
  ServiceEntry,
  SharedContact,
  SiteSettings,
} from '../data/types';

export const LOCALES = sharedSite.supportedLocales as Locale[];
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE = sharedSite.defaultLocale as Locale;

export const SERVICE_IDS = sharedServicesIndex.services.map((service) => service.serviceId) as ServiceId[];
export type ServiceId = (typeof SERVICE_IDS)[number];

export const LEGAL_PAGE_IDS = ['legalNotice', 'privacy', 'cookies', 'terms'] as const;
export type LegalPageId = (typeof LEGAL_PAGE_IDS)[number];

export const STATIC_PAGE_IDS = ['home', 'services', 'about', 'contact'] as const;
export type StaticPageId = (typeof STATIC_PAGE_IDS)[number];

export type RoutePageId = StaticPageId | LegalPageId;

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

const navigationByLocale: Record<Locale, NavigationData> = {
  es: esNavigation,
  ca: caNavigation,
  en: enNavigation,
  de: deNavigation,
};

const homeByLocale: Record<Locale, HomeCollection> = {
  es: esHome,
  ca: caHome,
  en: enHome,
  de: deHome,
};

const seoByLocale: Record<Locale, SeoData> = {
  es: esSeo,
  ca: caSeo,
  en: enSeo,
  de: deSeo,
};

const servicesByLocale: Record<Locale, LocalizedServiceEntry[]> = {
  es: [
    { serviceId: 'electricidad-y-domotica', ...esElectricidadYDomotica },
    { serviceId: 'lampisteria-y-climatizacion', ...esLampisteriaYClimatizacion },
    { serviceId: 'alarmas-y-camaras', ...esAlarmasYCamaras },
  ],
  ca: [
    { serviceId: 'electricidad-y-domotica', ...caElectricitatIDomotica },
    { serviceId: 'lampisteria-y-climatizacion', ...caLampisteriaIClimatitzacio },
    { serviceId: 'alarmas-y-camaras', ...caAlarmesICameres },
  ],
  en: [
    { serviceId: 'electricidad-y-domotica', ...enElectricityAndHomeAutomation },
    { serviceId: 'lampisteria-y-climatizacion', ...enPlumbingAndClimateControl },
    { serviceId: 'alarmas-y-camaras', ...enAlarmsAndCameras },
  ],
  de: [
    { serviceId: 'electricidad-y-domotica', ...deElektrizitaetUndSmartHome },
    { serviceId: 'lampisteria-y-climatizacion', ...deSanitaerUndKlimatechnik },
    { serviceId: 'alarmas-y-camaras', ...deAlarmanlagenUndKameras },
  ],
};

const legalPagesByLocale: Record<Locale, LocalizedLegalPage[]> = {
  es: [
    { pageId: 'legalNotice', ...esLegalNotice },
    { pageId: 'privacy', ...esPrivacy },
    { pageId: 'cookies', ...esCookies },
    { pageId: 'terms', ...esTerms },
  ],
  ca: [
    { pageId: 'legalNotice', ...caLegalNotice },
    { pageId: 'privacy', ...caPrivacy },
    { pageId: 'cookies', ...caCookies },
    { pageId: 'terms', ...caTerms },
  ],
  en: [
    { pageId: 'legalNotice', ...enLegalNotice },
    { pageId: 'privacy', ...enPrivacy },
    { pageId: 'cookies', ...enCookies },
    { pageId: 'terms', ...enTerms },
  ],
  de: [
    { pageId: 'legalNotice', ...deLegalNotice },
    { pageId: 'privacy', ...dePrivacy },
    { pageId: 'cookies', ...deCookies },
    { pageId: 'terms', ...deTerms },
  ],
};

function resolveLocale(locale?: string): Locale {
  return locale && isLocale(locale) ? locale : DEFAULT_LOCALE;
}

function buildAbsoluteUrl(path: string): string {
  return new URL(path, sharedSite.siteUrl).toString();
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
  return sharedSite.localeLabels[resolvedLocale] ?? resolvedLocale.toUpperCase();
}

export function getSiteSettings(locale?: string): SiteSettings {
  const resolvedLocale = resolveLocale(locale);
  const seo = getSeoData(resolvedLocale);

  return {
    brandName: sharedSite.brandName,
    siteUrl: sharedSite.siteUrl,
    locale: resolvedLocale,
    localeBasePath: sharedSite.localeBasePaths[resolvedLocale],
    localeLabel: getLocaleLabel(resolvedLocale),
    defaultLocale: DEFAULT_LOCALE,
    supportedLocales: getAllowedLocales(),
    defaultTitle: seo.titles.home,
    titleTemplate: `%s | ${sharedSite.brandName}`,
    defaultDescription: seo.descriptions.home,
    businessName: sharedSite.brandName,
    legalName: null,
    primaryPhone: sharedContact.phones.mobile,
    primaryEmail: sharedContact.primaryEmail,
    locality: sharedContact.address.locality,
    region: sharedContact.address.region,
    countryCode: sharedContact.address.countryCode,
    postalCode: sharedContact.address.postalCode,
    addressLine: sharedContact.address.streetAddress,
    coverageArea: [],
    socialLinks: sharedContact.socialLinks,
  };
}

export function getSharedContact(): SharedContact {
  return sharedContact;
}

export function getRedirectData(): RedirectData {
  return sharedRedirects;
}

export function getNavigation(locale?: string): NavigationData {
  return navigationByLocale[resolveLocale(locale)];
}

export function getSeoData(locale?: string): SeoData {
  return seoByLocale[resolveLocale(locale)];
}

export function getHomeCollection(locale?: string): HomeCollection {
  return homeByLocale[resolveLocale(locale)];
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
  const entry = sharedServicesIndex.services.find((service) => service.serviceId === serviceId);

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
  const entry = sharedServicesIndex.services.find((service) => service.serviceId === serviceId);

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
    href: paths[locale] ?? sharedSite.localeBasePaths[locale],
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
