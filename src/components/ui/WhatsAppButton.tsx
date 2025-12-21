import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, WHATSAPP_NUMBER } from '../../config/whatsapp';
import { useConsultant } from '../../config/consultant';
import { useState } from 'react';

type Props = {
  phone?: string;
  message?: string;
};

export default function WhatsAppButton({ phone, message }: Props) {
  const { consultant } = useConsultant();
  const resolvedPhone = phone || consultant.whatsapp?.number || WHATSAPP_NUMBER;
  const resolvedMessage =
    message || consultant.whatsapp?.defaultMessage || 'Olá! Gostaria de falar com um consultor iGreen sobre energia e economia.';

  const href = buildWhatsAppUrl(resolvedMessage, resolvedPhone, consultant.name);
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-gradient-to-br from-green-600 via-green-500 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-5 py-4 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-3 ring-emerald-400/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-950 ${hovered ? 'scale-105 shadow-emerald-300/40' : ''}`}
      aria-label={`Falar com ${consultant.name} no WhatsApp`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ boxShadow: hovered ? '0 8px 32px 0 rgba(16, 185, 129, 0.18)' : undefined }}
    >
      <span className="animate-pulse-slow inline-flex items-center justify-center">
        <MessageCircle className="w-7 h-7" />
      </span>
      <span className="hidden sm:inline font-semibold text-base tracking-tight drop-shadow-sm">
        Falar no WhatsApp
      </span>
    </a>
  );
}

// Tailwind animation personalizada
// Adicione ao tailwind.config.js:
// theme: { extend: { animation: { 'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite' } } }
