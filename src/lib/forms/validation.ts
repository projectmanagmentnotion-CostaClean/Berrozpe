export interface ContactValidationMessages {
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  phoneInvalid: string;
  serviceRequired: string;
  messageRequired: string;
  privacyRequired: string;
  honeypotFilled: string;
  genericError: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  privacy: boolean;
  website: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_ALLOWED_PATTERN = /^[+()\d\s\-/.]{7,20}$/;

export function normalizeContactFormValues(formData: FormData): ContactFormValues {
  return {
    name: String(formData.get('name') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim(),
    phone: String(formData.get('phone') ?? '').trim(),
    service: String(formData.get('service') ?? '').trim(),
    message: String(formData.get('message') ?? '').trim(),
    privacy: formData.get('privacy') === '1' || formData.get('privacy') === 'on' || formData.get('privacy') === 'true',
    website: String(formData.get('website') ?? '').trim(),
  };
}

export function validateContactFormValues(
  values: ContactFormValues,
  messages: ContactValidationMessages,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name) {
    errors.name = messages.nameRequired;
  }

  if (!values.email) {
    errors.email = messages.emailRequired;
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = messages.emailInvalid;
  }

  if (values.phone && !PHONE_ALLOWED_PATTERN.test(values.phone)) {
    errors.phone = messages.phoneInvalid;
  }

  if (!values.service) {
    errors.service = messages.serviceRequired;
  }

  if (!values.message) {
    errors.message = messages.messageRequired;
  }

  if (!values.privacy) {
    errors.privacy = messages.privacyRequired;
  }

  if (values.website) {
    errors.website = messages.honeypotFilled;
  }

  return errors;
}
