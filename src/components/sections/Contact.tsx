import { buildWhatsAppUrl, WHATSAPP_NUMBER } from '../../config/whatsapp';
import { useConsultant } from '../../config/consultant';

export default function Contact() {
  const { consultant } = useConsultant();
  const whatsappHref = buildWhatsAppUrl(
    'Olá! Quero tirar uma dúvida e entender qual solução iGreen faz mais sentido para mim.',
    consultant.whatsapp?.number || WHATSAPP_NUMBER,
    consultant.name
  );

  return (
    <section id="contact" className="bg-emerald-50/40 dark:bg-gray-900 px-4 py-16 md:py-20 text-center border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Ainda ficou alguma dúvida?</h2>

        <p className="text-gray-600 dark:text-gray-400 text-base mb-6">
          É normal. Cada casa e cada situação é diferente. Um especialista pode te explicar tudo de forma simples, sem compromisso.
        </p>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 px-6 py-3 rounded-xl font-semibold text-base transition"
        >
          Conversar no WhatsApp
        </a>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">Atendimento rápido • Sem pressão • Sem obrigação</p>
      </div>
    </section>
  );
}
