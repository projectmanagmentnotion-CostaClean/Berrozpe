import {
  normalizeContactFormValues,
  validateContactFormValues,
  type ContactFormErrors,
  type ContactValidationMessages,
} from '../lib/forms/validation';

declare global {
  interface Window {
    __berrozpeContactFormBooted__?: boolean;
  }
}

function showFieldError(form: HTMLFormElement, fieldName: string, message: string): void {
  const input = form.querySelector<HTMLElement>(`[name="${fieldName}"]`);
  const error = input?.closest<HTMLElement>('[data-field-wrapper]')?.querySelector<HTMLElement>('[data-field-error]');

  if (input) {
    input.setAttribute('aria-invalid', 'true');
  }

  if (error) {
    error.textContent = message;
  }
}

function clearFieldErrors(form: HTMLFormElement): void {
  form.querySelectorAll<HTMLElement>('[data-field-input]').forEach((input) => {
    input.removeAttribute('aria-invalid');
  });

  form.querySelectorAll<HTMLElement>('[data-field-error]').forEach((error) => {
    error.textContent = '';
  });
}

function setStatus(
  form: HTMLFormElement,
  type: 'success' | 'error' | 'pending',
  message: string,
): void {
  const statusId = form.dataset.statusRegion;
  const status = statusId ? document.getElementById(statusId) : null;

  if (!status) {
    return;
  }

  status.textContent = message;
  status.classList.remove('hidden', 'border-[var(--color-border)]', 'bg-white/[0.03]', 'text-[var(--color-text-muted)]', 'border-[rgba(255,119,0,0.22)]', 'bg-[rgba(255,119,0,0.08)]', 'text-[var(--color-text)]', 'border-[rgba(4,92,180,0.24)]', 'bg-[rgba(4,92,180,0.08)]');
  status.classList.add('block');

  if (type === 'success') {
    status.classList.add('border-[rgba(4,92,180,0.24)]', 'bg-[rgba(4,92,180,0.08)]', 'text-[var(--color-text)]');
  } else if (type === 'pending') {
    status.classList.add('border-[var(--color-border)]', 'bg-white/[0.03]', 'text-[var(--color-text-muted)]');
  } else {
    status.classList.add('border-[rgba(255,119,0,0.22)]', 'bg-[rgba(255,119,0,0.08)]', 'text-[var(--color-text)]');
  }
}

function parseMessages(form: HTMLFormElement): ContactValidationMessages | null {
  const raw = form.dataset.validationMessages;

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as ContactValidationMessages;
  } catch {
    return null;
  }
}

function applyErrors(form: HTMLFormElement, errors: ContactFormErrors): void {
  Object.entries(errors).forEach(([fieldName, message]) => {
    if (message) {
      showFieldError(form, fieldName, message);
    }
  });
}

async function handleSubmit(form: HTMLFormElement): Promise<void> {
  const messages = parseMessages(form);

  if (!messages) {
    form.submit();
    return;
  }

  clearFieldErrors(form);

  const formData = new FormData(form);
  const values = normalizeContactFormValues(formData);
  const errors = validateContactFormValues(values, messages);

  if (Object.keys(errors).length > 0) {
    applyErrors(form, errors);
    setStatus(form, 'error', messages.genericError);
    return;
  }

  const submitButton = form.querySelector<HTMLButtonElement>('[data-submit-button]');
  const submitLabel = form.dataset.submitLabel ?? submitButton?.textContent ?? '';
  const sendingLabel = form.dataset.sendingLabel ?? submitLabel;

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = sendingLabel;
  }

  setStatus(form, 'pending', sendingLabel);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    const payload = await response.json().catch(() => null);

  if (payload?.success) {
      form.reset();
      setStatus(form, 'success', form.dataset.successMessage ?? '');
      return;
    }

    if (payload?.errors && typeof payload.errors === 'object') {
      applyErrors(form, payload.errors as ContactFormErrors);
    }

    setStatus(form, 'error', payload?.message ?? form.dataset.errorMessage ?? messages.genericError);
  } catch {
    setStatus(form, 'error', form.dataset.errorMessage ?? messages.genericError);
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = submitLabel;
    }
  }
}

function applyStatusFromQuery(form: HTMLFormElement): void {
  const params = new URLSearchParams(window.location.search);
  const status = params.get('status');

  if (!status) {
    return;
  }

  if (status === 'success') {
    setStatus(form, 'success', form.dataset.successMessage ?? '');
  } else if (status === 'error') {
    setStatus(form, 'error', form.dataset.errorMessage ?? '');
  }

  params.delete('status');
  const query = params.toString();
  const nextUrl = query ? `${window.location.pathname}?${query}${window.location.hash}` : `${window.location.pathname}${window.location.hash}`;
  window.history.replaceState({}, '', nextUrl);
}

function setupContactForms(): void {
  if (window.__berrozpeContactFormBooted__) {
    return;
  }

  const forms = document.querySelectorAll<HTMLFormElement>('[data-contact-form]');

  if (forms.length === 0) {
    return;
  }

  window.__berrozpeContactFormBooted__ = true;

  forms.forEach((form) => {
    applyStatusFromQuery(form);
    clearFieldErrors(form);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      void handleSubmit(form);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupContactForms, { once: true });
} else {
  setupContactForms();
}
