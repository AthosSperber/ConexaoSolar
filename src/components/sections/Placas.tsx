import Accordion from '../ui/Accordion';
import { buildWhatsAppUrl, WHATSAPP_NUMBER } from '../../config/whatsapp';
import { useConsultant } from '../../config/consultant';
import { productDetails } from '../../data/productDetails';

export default function Placas() {
  const { consultant } = useConsultant();
  const whatsappHref = buildWhatsAppUrl(
    productDetails.placas.cta.whatsappMessage,
    consultant.whatsapp?.number || WHATSAPP_NUMBER,
    consultant.name
  );

  const imageSrc = '/assets/sections/placas.jpg';
  const fallbackImage =
    'data:image/svg+xml;charset=utf-8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="600" viewBox="0 0 1000 600">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#DBEAFE"/>
            <stop offset="1" stop-color="#EFF6FF"/>
          </linearGradient>
        </defs>
        <rect width="1000" height="600" fill="url(#g)"/>
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="28" fill="#2563EB">Imagem Conexão Placas</text>
      </svg>`
    );

  return (
    <section id="placas" className="scroll-snap-section bg-emerald-50/40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagem à esquerda */}
        <div className="order-2 md:order-1">
          <img
            src={imageSrc}
            className="w-full rounded-3xl shadow-xl object-contain bg-white dark:bg-gray-950 border border-emerald-100/60 dark:border-emerald-900/30 h-96"
            alt="Painéis solares Conexão Placas"
            loading="lazy"
            width="1000"
            height="600"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = fallbackImage;
            }}
          />
        </div>

        {/* Conteúdo à direita */}
        <div className="order-1 md:order-2">
          <span className="product-tag text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide">Conexão Placas</span>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-3 mb-4">Gere sua própria energia</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Sistema de energia solar com placas próprias. Ideal para quem busca economia de longo prazo e independência energética.
          </p>

          <ul className="space-y-3 mb-8 hidden md:block text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl leading-none">✓</span>
              <span>Sistema definitivo e permanente</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl leading-none">✓</span>
              <span>Economia ao longo dos anos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl leading-none">✓</span>
              <span>Valorização do imóvel</span>
            </li>
          </ul>

          <Accordion title="Por que escolher as Placas Próprias?">
            <div className="space-y-4">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span>Retorno do investimento ao longo do tempo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span>Independência e controle da energia</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span>Aumento do valor de revenda do imóvel</span>
                </li>
              </ul>
              <a 
                href={whatsappHref} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary block text-center mt-6 bg-blue-600 text-white py-4 rounded-full font-semibold hover:bg-blue-700 active:scale-[0.98] transition"
              >
                Solicitar orçamento
              </a>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
