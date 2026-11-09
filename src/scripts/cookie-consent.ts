import {
  activateDeferredScripts,
  buildConsentState,
  CONSENT_CATEGORIES,
  CONSENT_EVENT,
  getDefaultConsentState,
  getStoredConsent,
  hasResolvedConsent,
  OPEN_PREFERENCES_EVENT,
  saveConsent,
  type ConsentCategory,
  type ConsentState,
} from '../lib/cookies/consent';

declare global {
  interface Window {
    __berrozpeCookieConsentBooted__?: boolean;
  }
}

function setModalOpen(modal: HTMLElement, open: boolean): void {
  modal.hidden = !open;
  modal.classList.toggle('hidden', !open);
  modal.classList.toggle('flex', open);
}

function syncForm(modal: HTMLElement, consent: ConsentState): void {
  const inputs = modal.querySelectorAll<HTMLInputElement>('input[data-cookie-category]');

  inputs.forEach((input) => {
    const category = input.dataset.cookieCategory as ConsentCategory;
    input.checked = Boolean(consent.categories[category]);
  });
}

function readFormConsent(modal: HTMLElement, version: string): ConsentState {
  const inputs = modal.querySelectorAll<HTMLInputElement>('input[data-cookie-category]');
  const categories: Partial<Record<ConsentCategory, boolean>> = {};

  inputs.forEach((input) => {
    const category = input.dataset.cookieCategory as ConsentCategory;
    categories[category] = input.checked;
  });

  return buildConsentState(version, categories);
}

function setupCookieConsent(): void {
  if (window.__berrozpeCookieConsentBooted__) {
    return;
  }

  const root = document.querySelector<HTMLElement>('[data-cookie-consent-root]');
  const banner = document.querySelector<HTMLElement>('[data-cookie-banner]');
  const modal = document.querySelector<HTMLElement>('[data-cookie-modal]');
  const form = document.querySelector<HTMLFormElement>('[data-cookie-form]');
  const status = document.querySelector<HTMLElement>('[data-cookie-status]');

  if (!root || !banner || !modal || !form) {
    return;
  }

  window.__berrozpeCookieConsentBooted__ = true;

  const storageKey = root.dataset.cookieStorageKey ?? 'berrozpe-cookie-consent';
  const version = root.dataset.cookieVersion ?? '1';
  const savedMessage = root.dataset.cookieSavedMessage ?? '';
  const initialConsent = getStoredConsent(storageKey) ?? getDefaultConsentState(version);

  if (hasResolvedConsent(storageKey, version)) {
    banner.hidden = true;
    banner.classList.add('hidden');
  }

  syncForm(modal, initialConsent);
  activateDeferredScripts(initialConsent);

  const persistConsent = (consent: ConsentState) => {
    saveConsent(storageKey, consent);
    banner.hidden = true;
    banner.classList.add('hidden');
    setModalOpen(modal, false);
    syncForm(modal, consent);
    activateDeferredScripts(consent);

    if (status && savedMessage) {
      status.textContent = savedMessage;
    }
  };

  document.querySelector<HTMLElement>('[data-cookie-accept]')?.addEventListener('click', () => {
    persistConsent(buildConsentState(version, Object.fromEntries(CONSENT_CATEGORIES.map((category) => [category, true]))));
  });

  document.querySelector<HTMLElement>('[data-cookie-reject]')?.addEventListener('click', () => {
    persistConsent(getDefaultConsentState(version));
  });

  document.querySelector<HTMLElement>('[data-cookie-configure]')?.addEventListener('click', () => {
    const stored = getStoredConsent(storageKey) ?? getDefaultConsentState(version);
    syncForm(modal, stored);
    setModalOpen(modal, true);
  });

  document.querySelector<HTMLElement>('[data-cookie-accept-all]')?.addEventListener('click', () => {
    const acceptAll = buildConsentState(version, Object.fromEntries(CONSENT_CATEGORIES.map((category) => [category, true])));
    persistConsent(acceptAll);
  });

  document.querySelector<HTMLElement>('[data-cookie-reject-all]')?.addEventListener('click', () => {
    persistConsent(getDefaultConsentState(version));
  });

  document.querySelector<HTMLElement>('[data-cookie-close]')?.addEventListener('click', () => {
    setModalOpen(modal, false);
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      setModalOpen(modal, false);
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    persistConsent(readFormConsent(modal, version));
  });

  document.querySelectorAll<HTMLElement>('[data-open-cookie-preferences]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const stored = getStoredConsent(storageKey) ?? getDefaultConsentState(version);
      syncForm(modal, stored);
      setModalOpen(modal, true);
    });
  });

  window.addEventListener(OPEN_PREFERENCES_EVENT, () => {
    const stored = getStoredConsent(storageKey) ?? getDefaultConsentState(version);
    syncForm(modal, stored);
    setModalOpen(modal, true);
  });

  window.addEventListener(CONSENT_EVENT, ((event: Event) => {
    const customEvent = event as CustomEvent<ConsentState>;
    activateDeferredScripts(customEvent.detail);
  }) as EventListener);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupCookieConsent, { once: true });
} else {
  setupCookieConsent();
}
