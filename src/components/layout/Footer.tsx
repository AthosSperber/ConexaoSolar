import { buildWhatsAppUrl, WHATSAPP_NUMBER } from '../../config/whatsapp';
import { useConsultant } from '../../config/consultant';

export default function Footer() {
  const { consultant } = useConsultant();
  const phone = consultant.whatsapp?.number || WHATSAPP_NUMBER;
  const whatsappHref = buildWhatsAppUrl(consultant.whatsapp?.defaultMessage, phone, consultant.name);
  const instagramHref = consultant.social?.instagram?.trim() || 'https://www.instagram.com/athosigreen/';

  return (
    <footer className="bg-gray-900 text-white px-4 py-8 md:py-12 mt-12 md:mt-16">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left">
        <div>
          <p className="text-lg font-bold mb-1">{consultant.brand.title}</p>
          <p className="text-sm text-gray-300">Soluções iGreen em energia e economia</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-200 mb-2">Contato</p>
          <p className="text-sm text-gray-300">Fale comigo pelos canais abaixo</p>
          <div className="mt-2 flex flex-col gap-2">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="hover:text-green-400 transition flex items-center gap-1 justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.72 11.06a6 6 0 11-5.66-5.66m5.66 5.66L21 21" /></svg>
              Falar no WhatsApp
            </a>

            <a
              href={instagramHref}
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400 transition flex items-center gap-1 justify-center md:justify-start"
              aria-label="Ver perfil no Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5ZM4 7.75A3.75 3.75 0 0 1 7.75 4h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5Zm8 1.75a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm5.25-2.38a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26Z"/>
              </svg>
              Ver Instagram
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-200 mb-2">Parceiro</p>
          <p className="text-sm text-gray-300"><a href="https://igreenenergy.com.br" target="_blank" rel="noreferrer" className="hover:text-green-400 transition">iGreen Energy</a></p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-center mt-8 pt-6 border-t border-gray-700 text-xs text-gray-400">
        © {new Date().getFullYear()} {consultant.brand.short}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
