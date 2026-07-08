import sharedSite from '../../content/shared/site.json';
import sharedContact from '../../content/shared/contact.json';
import sharedServicesIndex from '../../content/shared/services-index.json';
import esNavigation from '../../content/locales/es/navigation.json';
import esHome from '../../content/locales/es/home.json';
import esSeo from '../../content/locales/es/seo.json';
import esElectricidadYDomotica from '../../content/locales/es/services/electricidad-y-domotica.json';
import esLampisteriaYClimatizacion from '../../content/locales/es/services/lampisteria-y-climatizacion.json';
import esAlarmasYCamaras from '../../content/locales/es/services/alarmas-y-camaras.json';
import esPrivacy from '../../content/locales/es/legal/privacy.json';
import esLegalNotice from '../../content/locales/es/legal/legal-notice.json';
import esCookies from '../../content/locales/es/legal/cookies.json';
import esTerms from '../../content/locales/es/legal/terms.json';
import type {
  HomeSection,
  LegalPage,
  NavigationData,
  SeoData,
  ServiceEntry,
  SharedContact,
  SiteSettings,
} from '../data/types';

const locale = 'es';

const services = [
  esElectricidadYDomotica,
  esLampisteriaYClimatizacion,
  esAlarmasYCamaras,
] satisfies ServiceEntry[];

const legalPages = [
  esPrivacy,
  esLegalNotice,
  esCookies,
  esTerms,
] satisfies LegalPage[];

const homeSections = [
  esHome.hero,
  esHome.servicesOverview,
  esHome.process,
  esHome.contactCta,
] satisfies HomeSection[];

export function getSiteSettings(): SiteSettings {
  return {
    brandName: sharedSite.brandName,
    siteUrl: sharedSite.siteUrl,
    locale,
    defaultLocale: sharedSite.defaultLocale,
    supportedLocales: sharedSite.supportedLocales,
    defaultTitle: esSeo.titles.home,
    titleTemplate: `%s | ${sharedSite.brandName}`,
    defaultDescription: esSeo.descriptions.home,
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

export function getNavigation(): NavigationData {
  return esNavigation;
}

export function getSeoData(): SeoData {
  return esSeo;
}

export function getHomeCollection() {
  return esHome;
}

export function getHomeSections(): HomeSection[] {
  return homeSections;
}

export function getHomeSection(sectionId: string): HomeSection {
  const section = homeSections.find((entry) => entry.sectionId === sectionId);

  if (!section) {
    throw new Error(`Missing home section: ${sectionId}`);
  }

  return section;
}

export function getPublishedServices(): ServiceEntry[] {
  return services;
}

export function getAllServices(): ServiceEntry[] {
  return services;
}

export function getServiceBySlug(slug: string): ServiceEntry | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceRouteById(serviceId: string, contentLocale = locale): string | undefined {
  const service = sharedServicesIndex.services.find((entry) => entry.serviceId === serviceId);

  return service?.locales?.[contentLocale as keyof typeof service.locales]?.path;
}

export function getServiceById(serviceId: string): ServiceEntry | undefined {
  const route = getServiceRouteById(serviceId);
  const slug = route?.split('/').filter(Boolean).at(-1);

  return slug ? getServiceBySlug(slug) : undefined;
}

export function getLegalPages(): LegalPage[] {
  return legalPages;
}

export function getLegalPage(slug: string): LegalPage | undefined {
  return legalPages.find((page) => page.slug === slug);
}
