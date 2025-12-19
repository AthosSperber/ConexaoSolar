import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, WHATSAPP_NUMBER } from '../../config/whatsapp';
import { useConsultant } from '../../config/consultant';

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

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-3`}
      aria-label={`Falar com ${consultant.name} no WhatsApp`}
    >
      <MessageCircle className="w-7 h-7" />
      <span className="hidden sm:inline font-semibold">Falar no WhatsApp</span>
    </a>
  );
}
