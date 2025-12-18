import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, WHATSAPP_NUMBER } from '../../config/whatsapp';

type Props = {
  phone?: string;
  message?: string;
};

export default function WhatsAppButton({ phone = WHATSAPP_NUMBER, message = 'Olá! Gostaria de saber mais sobre as soluções da ConectaSolar.' }: Props) {
  const href = buildWhatsAppUrl(message, phone);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-3`}
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="hidden sm:inline font-semibold">Fale conosco</span>
    </a>
  );
}
