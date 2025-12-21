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
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="hover:text-green-400 transition flex items-center gap-1 justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.72 11.06a6 6 0 11-5.66-5.66m5.66 5.66L21 21" /></svg>
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
        <div className="mt-2 flex flex-col items-center gap-1">
          <Link
            to="/para-consultores"
            className="hover:text-green-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded font-semibold inline-flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            Sou consultor iGreen
          </Link>
        </div>
      </div>
    </footer>
  );
}
