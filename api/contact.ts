const ALLOWED_LOCALES = new Set(['es', 'ca', 'en', 'de']);
const ALLOWED_SERVICES = new Set([
  'electricidad-y-domotica',
  'lampisteria-y-climatizacion',
  'alarmas-y-camaras',
]);
const RETURN_URLS: Record<string, string> = {
  es: '/es/contacto/',
  ca: '/ca/contacte/',
  en: '/en/contact/',
  de: '/de/kontakt/',
};
const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const PHONE_PATTERN = /^[+()\d\s\-/.]{7,20}$/;
const rateLimit = new Map<string, number[]>();
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;

type FormValues = {
  locale: string;
  returnUrl: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  privacy: string;
  website: string;
  formStartedAt: string;
};

function jsonResponse(status: number, payload: Record<string, unknown>, extraHeaders: HeadersInit = {}): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...extraHeaders },
  });
}

function safeText(value: FormDataEntryValue | null, maxLength: number): string {
  return typeof value === 'string'
    ? value.replace(/[\r\n\t]+/g, ' ').replace(/<[^>]*>/g, '').trim().slice(0, maxLength)
    : '';
}

function wantsJson(request: Request): boolean {
  return request.headers.get('accept')?.includes('application/json') === true
    || request.headers.get('x-requested-with')?.toLowerCase() === 'xmlhttprequest';
}

function responseFor(request: Request, status: number, payload: Record<string, unknown>, returnUrl: string): Response {
  if (wantsJson(request)) return jsonResponse(status, payload);
  const destination = new URL(returnUrl, request.url);
  destination.searchParams.set('status', status < 400 ? 'success' : 'error');
  return new Response(null, { status: 303, headers: { Location: destination.toString(), 'Cache-Control': 'no-store' } });
}

function allowedOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return true;
  try {
    const candidate = new URL(origin);
    const requestOrigin = new URL(request.url).origin;
    return candidate.origin === requestOrigin
      || candidate.origin === 'https://instalberrozpe.com'
      || candidate.origin === 'https://www.instalberrozpe.com';
  } catch {
    return false;
  }
}

function getClientKey(request: Request): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

function takeRateLimitSlot(key: string, now: number): boolean {
  if (rateLimit.size > 10_000) {
    for (const [clientKey, timestamps] of rateLimit) {
      const active = timestamps.filter((time) => now - time < RATE_WINDOW_MS);
      if (active.length) rateLimit.set(clientKey, active);
      else rateLimit.delete(clientKey);
    }
  }
  const recent = (rateLimit.get(key) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    rateLimit.set(key, recent);
    return false;
  }
  recent.push(now);
  rateLimit.set(key, recent);
  return true;
}

function readValues(data: FormData): FormValues {
  const localeValue = safeText(data.get('locale'), 2);
  const locale = ALLOWED_LOCALES.has(localeValue) ? localeValue : 'es';
  return {
    locale,
    returnUrl: safeText(data.get('return_url'), 120),
    name: safeText(data.get('name'), 120),
    email: safeText(data.get('email'), 254).replace(/[\r\n]/g, ''),
    phone: safeText(data.get('phone'), 40),
    service: safeText(data.get('service'), 80),
    message: safeText(data.get('message'), 3000),
    privacy: safeText(data.get('privacy'), 10),
    website: safeText(data.get('website'), 200),
    formStartedAt: safeText(data.get('form_started_at'), 20),
  };
}

function validate(values: FormValues, now: number): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!values.name) errors.name = 'Name is required.';
  if (!values.email) errors.email = 'Email is required.';
  else if (!EMAIL_PATTERN.test(values.email)) errors.email = 'Email is invalid.';
  if (values.phone && !PHONE_PATTERN.test(values.phone)) errors.phone = 'Phone is invalid.';
  if (!ALLOWED_SERVICES.has(values.service)) errors.service = 'Service is required.';
  if (!values.message) errors.message = 'Message is required.';
  if (!['1', 'on', 'true'].includes(values.privacy)) errors.privacy = 'Privacy notice acknowledgement is required.';
  if (values.website) errors.website = 'Validation failed.';
  if (values.formStartedAt) {
    const startedAt = Number(values.formStartedAt);
    if (!Number.isSafeInteger(startedAt) || startedAt > now + 60_000 || now - startedAt < 2500) {
      errors.website = 'Validation failed.';
    }
  }
  return errors;
}

function escapeHeader(value: string): string {
  return value.replace(/[\r\n]/g, ' ').trim();
}

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== 'POST') return jsonResponse(405, { success: false, message: 'Method not allowed.' }, { Allow: 'POST' });
    if (!allowedOrigin(request)) return jsonResponse(403, { success: false, message: 'Request origin is not allowed.' });
    const contentLength = Number(request.headers.get('content-length') ?? 0);
    if (contentLength > 16_384) return jsonResponse(413, { success: false, message: 'Request is too large.' });

    const now = Date.now();
    const clientKey = getClientKey(request);
    if (!takeRateLimitSlot(clientKey, now)) {
      return jsonResponse(429, { success: false, message: 'Too many requests. Please try again later.' }, { 'Retry-After': '600' });
    }

    let data: FormData;
    try {
      data = await request.formData();
    } catch {
      return jsonResponse(400, { success: false, message: 'Invalid form submission.' });
    }

    const values = readValues(data);
    const returnUrl = Object.values(RETURN_URLS).includes(values.returnUrl) ? values.returnUrl : RETURN_URLS.es;
    const errors = validate(values, now);
    if (Object.keys(errors).length) {
      return responseFor(request, 422, { success: false, message: 'Validation failed.', errors }, returnUrl);
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;
    if (!apiKey || !from || !to || !EMAIL_PATTERN.test(from.replace(/^.*<([^<>]+)>$/, '$1')) || !EMAIL_PATTERN.test(to)) {
      return responseFor(request, 503, { success: false, message: 'The form is temporarily unavailable.' }, returnUrl);
    }

    const fromAddress = escapeHeader(from);
    const subject = `[Instal Berrozpe][${values.locale.toUpperCase()}] Nuevo formulario de contacto`;
    const text = [
      'Nuevo envio desde el formulario web.',
      '',
      `Idioma: ${values.locale}`,
      `Servicio: ${values.service}`,
      `Nombre: ${values.name}`,
      `Email: ${values.email}`,
      `Telefono: ${values.phone || '(no facilitado)'}`,
      '',
      'Mensaje:',
      values.message,
    ].join('\n');

    let providerResponse: Response;
    try {
      providerResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: fromAddress, to: [to], reply_to: values.email, subject, text }),
      });
    } catch {
      return responseFor(request, 502, { success: false, message: 'The form could not be sent.' }, returnUrl);
    }

    if (!providerResponse.ok) {
      return responseFor(request, 502, { success: false, message: 'The form could not be sent.' }, returnUrl);
    }

    return responseFor(request, 200, { success: true, message: 'Message accepted.' }, returnUrl);
  },
};

