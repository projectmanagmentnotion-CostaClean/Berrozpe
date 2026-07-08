import hero from '../../content/home/hero.json';
import processSection from '../../content/home/process.json';
import servicesOverview from '../../content/home/services-overview.json';
import contactSection from '../../content/home/contact-cta.json';
import siteSettings from '../../content/site/settings.json';
import legalNotice from '../../content/legal/legal-notice.json';
import privacyPolicy from '../../content/legal/privacy-policy.json';
import cookiesPolicy from '../../content/legal/cookies-policy.json';
import electricityAndDomotica from '../../content/services/electricidad-y-domotica.json';
import lampisteriaAndClimatizacion from '../../content/services/lampisteria-y-climatizacion.json';
import alarmsAndCameras from '../../content/services/alarmas-y-camaras.json';
import placeholderService from '../../content/services/servicio-pendiente.json';
import type { HomeSection, LegalPage, ServiceEntry, SiteSettings } from '../data/types';

const services = [
  electricityAndDomotica,
  lampisteriaAndClimatizacion,
  alarmsAndCameras,
  placeholderService,
] satisfies ServiceEntry[];
const legalPages = [legalNotice, privacyPolicy, cookiesPolicy] satisfies LegalPage[];
const homeSections = [hero, servicesOverview, processSection, contactSection] satisfies HomeSection[];

export function getSiteSettings(): SiteSettings {
  return siteSettings;
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
  return services.filter((service) => service.status === 'published');
}

export function getAllServices(): ServiceEntry[] {
  return services;
}

export function getServiceBySlug(slug: string): ServiceEntry | undefined {
  return services.find((service) => service.slug === slug);
}

export function getLegalPages(): LegalPage[] {
  return legalPages;
}

export function getLegalPage(slug: string): LegalPage | undefined {
  return legalPages.find((page) => page.slug === slug);
}
