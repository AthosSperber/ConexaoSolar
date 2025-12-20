import { buildWhatsAppUrl, WHATSAPP_NUMBER } from '../../config/whatsapp';
import { useConsultant } from '../../config/consultant';
import { Link } from 'react-router-dom';
import { track } from '../../lib/analytics';

export default function Footer() {
  const { consultant } = useConsultant();
  const phone = consultant.whatsapp?.number || WHATSAPP_NUMBER;
  const whatsappHref = buildWhatsAppUrl(consultant.whatsapp?.defaultMessage, phone, consultant.name);

  return (
    <footer className="bg-gray-900 text-white px-4 py-8 md:py-12 mt-12 md:mt-16">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left">
        <div>
          <p className="text-lg font-bold mb-1">{consultant.brand.title}</p>
          <p className="text-sm text-gray-300">Soluções iGreen em energia e economia</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-200 mb-2">Contato</p>
          <p className="text-sm text-gray-300">WhatsApp direto</p>
          <p className="text-sm text-gray-300">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="hover:text-green-400 transition">
              Falar no WhatsApp
            </a>
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-200 mb-2">Parceiro</p>
          <p className="text-sm text-gray-300"><a href="https://igreenenergy.com.br" target="_blank" rel="noreferrer" className="hover:text-green-400 transition">iGreen Energy</a></p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-center mt-8 pt-6 border-t border-gray-700 text-xs text-gray-400">
        © {new Date().getFullYear()} {consultant.brand.short}. Todos os direitos reservados.
        <div className="mt-2">
          <Link
            to="/para-consultores"
            className="hover:text-green-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
          >
            Sou consultor iGreen
          </Link>
          <div className="mt-1 text-[11px] leading-snug text-gray-400">
            <span>É consultor iGreen? O ConectaSolar cria seu site (setup + mensalidade). </span>
            <Link
              to="/para-consultores"
              onClick={() =>
                track('cta_click', {
                  consultantId: consultant.id,
                  placement: 'footer',
                  cta: 'for_consultants',
                  pathname: window.location.pathname,
                })
              }
              className="underline underline-offset-2 hover:text-green-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
            >
              Ver detalhes
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
