export const CONSENT_EVENT = 'berrozpe:cookie-consent-updated';
export const OPEN_PREFERENCES_EVENT = 'berrozpe:open-cookie-preferences';

export const CONSENT_CATEGORIES = ['necessary', 'preferences', 'analytics', 'marketing'] as const;

export type ConsentCategory = (typeof CONSENT_CATEGORIES)[number];

export interface ConsentState {
  version: string;
  updatedAt: string;
  categories: Record<ConsentCategory, boolean>;
}

const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

function canUseDom(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

function canUseLocalStorage(): boolean {
  if (!canUseDom() || typeof window.localStorage === 'undefined') {
    return false;
  }

  try {
    const probeKey = '__berrozpe_storage_probe__';
    window.localStorage.setItem(probeKey, '1');
    window.localStorage.removeItem(probeKey);
    return true;
  } catch {
    return false;
  }
}

export function getDefaultConsentState(version: string): ConsentState {
  return {
    version,
    updatedAt: new Date().toISOString(),
    categories: {
      necessary: true,
      preferences: false,
      analytics: false,
      marketing: false,
    },
  };
}

function getCookieName(storageKey: string): string {
  return `${storageKey}-cookie`;
}

function parseConsentValue(value: string | null): ConsentState | null {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(value) as Partial<ConsentState>;

    if (!parsed || typeof parsed !== 'object' || typeof parsed.version !== 'string') {
      return null;
    }

    return {
      version: parsed.version,
      updatedAt: typeof parsed.updatedAt === 'string' ? parsed.updatedAt : new Date().toISOString(),
      categories: {
        necessary: true,
        preferences: Boolean(parsed.categories?.preferences),
        analytics: Boolean(parsed.categories?.analytics),
        marketing: Boolean(parsed.categories?.marketing),
      },
    };
  } catch {
    return null;
  }
}

function readCookie(name: string): string | null {
  if (!canUseDom()) {
    return null;
  }

  const match = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${name}=`));

  return match ? decodeURIComponent(match.split('=').slice(1).join('=')) : null;
}

function writeCookie(name: string, value: string): void {
  if (!canUseDom()) {
    return;
  }

  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

export function getStoredConsent(storageKey: string): ConsentState | null {
  if (!canUseDom()) {
    return null;
  }

  if (canUseLocalStorage()) {
    const localValue = window.localStorage.getItem(storageKey);
    const localConsent = parseConsentValue(localValue);

    if (localConsent) {
      return localConsent;
    }
  }

  const cookieValue = readCookie(getCookieName(storageKey));
  return parseConsentValue(cookieValue);
}

export function hasResolvedConsent(storageKey: string, version: string): boolean {
  const stored = getStoredConsent(storageKey);
  return Boolean(stored && stored.version === version);
}

export function saveConsent(storageKey: string, consent: ConsentState): void {
  if (!canUseDom()) {
    return;
  }

  const serialized = JSON.stringify(consent);
  if (canUseLocalStorage()) {
    window.localStorage.setItem(storageKey, serialized);
  }
  writeCookie(getCookieName(storageKey), serialized);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: consent }));
}

export function buildConsentState(
  version: string,
  categories: Partial<Record<ConsentCategory, boolean>>,
): ConsentState {
  return {
    version,
    updatedAt: new Date().toISOString(),
    categories: {
      necessary: true,
      preferences: Boolean(categories.preferences),
      analytics: Boolean(categories.analytics),
      marketing: Boolean(categories.marketing),
    },
  };
}

export function activateDeferredScripts(consent: ConsentState): void {
  if (!canUseDom()) {
    return;
  }

  const deferredScripts = document.querySelectorAll<HTMLScriptElement>('script[type="text/plain"][data-cookie-category]');

  deferredScripts.forEach((script) => {
    const category = script.dataset.cookieCategory as ConsentCategory | undefined;

    if (!category || !consent.categories[category] || script.dataset.cookieActivated === 'true') {
      return;
    }

    const liveScript = document.createElement('script');

    Array.from(script.attributes).forEach((attribute) => {
      if (attribute.name === 'type' || attribute.name === 'data-cookie-category' || attribute.name === 'data-cookie-activated') {
        return;
      }

      liveScript.setAttribute(attribute.name, attribute.value);
    });

    if (script.textContent) {
      liveScript.textContent = script.textContent;
    }

    script.dataset.cookieActivated = 'true';
    script.replaceWith(liveScript);
  });
}
