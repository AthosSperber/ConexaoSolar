export const DEFAULT_WHATSAPP_NUMBER = '5519996693018';

export const WHATSAPP_NUMBER = String(import.meta.env.VITE_WHATSAPP_NUMBER ?? DEFAULT_WHATSAPP_NUMBER)
  .replace(/\D/g, '')
  .trim();

export function buildWhatsAppUrl(message?: string, phone: string = WHATSAPP_NUMBER) {
  const normalizedPhone = String(phone ?? DEFAULT_WHATSAPP_NUMBER).replace(/\D/g, '').trim();
  const baseUrl = `https://wa.me/${normalizedPhone}`;
  if (!message) return baseUrl;
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}
