export const DEFAULT_WHATSAPP_NUMBER = '5519996693018';

export const WHATSAPP_NUMBER = String(import.meta.env.VITE_WHATSAPP_NUMBER ?? DEFAULT_WHATSAPP_NUMBER)
  .replace(/\D/g, '')
  .trim();

function getFirstName(fullName?: string) {
  const name = String(fullName ?? '').trim();
  if (!name) return '';
  return name.split(/\s+/)[0] ?? '';
}

function replaceAllCompat(input: string, search: string, replacement: string) {
  if (!search) return input;
  return input.split(search).join(replacement);
}

export function applyConsultantNameToMessage(message?: string, consultantName?: string) {
  const raw = String(message ?? '').trim();
  if (!raw) return '';

  const fullName = String(consultantName ?? '').trim();
  if (!fullName) return raw;

  const firstName = getFirstName(fullName);
  let withPlaceholders = raw;
  withPlaceholders = replaceAllCompat(withPlaceholders, '{{consultantName}}', fullName);
  withPlaceholders = replaceAllCompat(withPlaceholders, '{{consultantFirstName}}', firstName || fullName);
  withPlaceholders = replaceAllCompat(withPlaceholders, '{consultantName}', fullName);
  withPlaceholders = replaceAllCompat(withPlaceholders, '{consultantFirstName}', firstName || fullName);

  // If the message explicitly used placeholders, don't try to rewrite greetings.
  if (withPlaceholders !== raw) return withPlaceholders;

  // If name already appears, keep as-is.
  if (firstName && new RegExp(`\\b${firstName.replace(/[-/\\^$*+?.()|[\\]{}]/g, '\\$&')}\\b`, 'i').test(withPlaceholders)) {
    return withPlaceholders;
  }

  // Normalize common greeting forms to include the consultant's name.
  const greetingPattern = /^ol[aá](\s*[!,])?/i;
  if (greetingPattern.test(withPlaceholders)) {
    const normalized = withPlaceholders.replace(greetingPattern, `Olá, ${firstName || fullName}! `);
    return normalized.replace(/\s+/g, ' ').trim();
  }

  return `Olá, ${firstName || fullName}! ${withPlaceholders}`.replace(/\s+/g, ' ').trim();
}

export function buildWhatsAppUrl(message?: string, phone: string = WHATSAPP_NUMBER, consultantName?: string) {
  const normalizedPhone = String(phone ?? DEFAULT_WHATSAPP_NUMBER).replace(/\D/g, '').trim();
  const baseUrl = `https://wa.me/${normalizedPhone}`;
  const resolvedMessage = applyConsultantNameToMessage(message, consultantName);
  if (!resolvedMessage) return baseUrl;
  return `${baseUrl}?text=${encodeURIComponent(resolvedMessage)}`;
}
