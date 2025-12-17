const imageSrc = '/assets/sections/telecom.jpg';
const fallbackImage =
  'data:image/svg+xml;charset=utf-8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="600" viewBox="0 0 1000 600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#E0E7FF"/>
          <stop offset="1" stop-color="#EEF2FF"/>
        </linearGradient>
      </defs>
      <rect width="1000" height="600" fill="url(#g)"/>
      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="28" fill="#4F46E5">Imagem Conexão Telecom</text>
    </svg>`
  );

export default function Telecom() {
  return (
    <section id="telecom" className="scroll-snap-section bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagem à esquerda */}
        <div className="order-2 md:order-1">
          <img
            src={imageSrc}
            className="w-full rounded-3xl shadow-xl object-contain bg-white h-96"
            alt="Internet e conectividade Conexão Telecom"
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
          <span className="product-tag text-indigo-600 font-semibold text-sm uppercase tracking-wide">Conexão Telecom</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4">Internet mais barata</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Analisamos suas despesas de conectividade e indicamos planos mais eficientes para sua residência ou empresa.
          </p>

          <ul className="space-y-3 mb-8 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold text-xl leading-none">✓</span>
              <span>Planos otimizados para suas necessidades</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold text-xl leading-none">✓</span>
              <span>Redução de custos mensais</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold text-xl leading-none">✓</span>
              <span>Implementação rápida e simples</span>
            </li>
          </ul>

          <a 
            href="https://wa.me/5519996693018" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-primary inline-block bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 active:scale-[0.98] transition"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
}
