import { FC } from 'react';
import { buildWhatsAppUrl, WHATSAPP_NUMBER } from '../../config/whatsapp';
import { useConsultant } from '../../config/consultant';
import { track } from '../../lib/analytics';

const ForConsultants: FC = () => {
  const { consultant } = useConsultant();

  // CTA de venda do template: sempre direciona para o WhatsApp do vendedor (não do consultor do site).
  const SELLER_WHATSAPP_NUMBER = '5519996693018';
  const message = 'Olá! Sou consultor iGreen e quero um site nesse modelo (setup + mensalidade R$ 79). Como funciona?';

  const whatsappHref = buildWhatsAppUrl(message, SELLER_WHATSAPP_NUMBER || WHATSAPP_NUMBER);

  const handleCtaClick = (plan: 'promo' | 'padrao') => {
    track('cta_click', {
      consultantId: consultant.id,
      placement: 'for_consultants',
      cta: 'whatsapp',
      plan,
      pathname: window.location.pathname,
    });
  };

  return (
    <section
      id="para-consultores"
      className="w-full py-16 md:py-20 lg:py-28 bg-gradient-to-b from-emerald-50/60 via-emerald-50/20 to-emerald-50/60 dark:from-gray-950 dark:via-gray-900/80 dark:to-gray-950 border-t border-gray-200 dark:border-gray-700"
      aria-label="Seção para consultores iGreen"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            Quer um site assim para divulgar seu trabalho como consultor iGreen?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Setup + mensalidade com escopo fechado: site no ar com SSL, WhatsApp como CTA principal e SEO básico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="p-8 rounded-2xl border border-emerald-200/70 dark:border-emerald-900/30 bg-white/90 dark:bg-gray-900/70 shadow-lg">
            <div className="flex items-baseline justify-between gap-3 mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Promo (3 primeiros)
              </h3>
              <span className="text-sm font-semibold text-green-700 dark:text-green-400">Setup</span>
            </div>

            <p className="text-3xl font-extrabold text-gray-900 dark:text-white">
              R$ 450 <span className="text-base font-semibold text-gray-600 dark:text-gray-300">+ R$ 79/mês</span>
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
              <li>• Domínio é do cliente</li>
              <li>• Site publicado (SSL incluso)</li>
              <li>• WhatsApp como CTA principal</li>
              <li>• SEO básico (title/description/og)</li>
              <li>• Mensalidade inclui 1 alteração simples/mês + manutenção técnica</li>
            </ul>

            <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">Sem fidelidade. Cancelou, tiramos do ar.</p>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCtaClick('promo')}
              className="mt-8 inline-flex w-full items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-bold rounded-xl transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-green-600/40"
            >
              Quero meu site
            </a>
          </div>

          <div className="p-8 rounded-2xl border border-emerald-200/70 dark:border-emerald-900/30 bg-white/90 dark:bg-gray-900/70 shadow-lg">
            <div className="flex items-baseline justify-between gap-3 mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Padrão</h3>
              <span className="text-sm font-semibold text-green-700 dark:text-green-400">Setup</span>
            </div>

            <p className="text-3xl font-extrabold text-gray-900 dark:text-white">
              R$ 750 <span className="text-base font-semibold text-gray-600 dark:text-gray-300">+ R$ 79/mês</span>
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
              <li>• Domínio é do cliente</li>
              <li>• Site publicado (SSL incluso)</li>
              <li>• WhatsApp como CTA principal</li>
              <li>• SEO básico (title/description/og)</li>
              <li>• Mensalidade inclui 1 alteração simples/mês + manutenção técnica</li>
            </ul>

            <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">Sem fidelidade. Cancelou, tiramos do ar.</p>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCtaClick('padrao')}
              className="mt-8 inline-flex w-full items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-bold rounded-xl transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-green-600/40"
            >
              Quero meu site
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-8">
          Domínio é do cliente. Mensalidade cobre hospedagem, SSL e manutenção básica.
        </p>
      </div>
    </section>
  );
};

export default ForConsultants;
