const imageSrc = '/assets/sections/livre.jpg';
const fallbackImage =
  'data:image/svg+xml;charset=utf-8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="600" viewBox="0 0 1000 600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#F3E8FF"/>
          <stop offset="1" stop-color="#FAF5FF"/>
        </linearGradient>
      </defs>
      <rect width="1000" height="600" fill="url(#g)"/>
      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="28" fill="#7C3AED">Imagem Conexão Livre</text>
    </svg>`
  );

export default function Livre() {
  return (
    <section id="livre" className="scroll-snap-section bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagem à direita em desktop */}
        <div className="order-2 md:order-2">
          <img
            src={imageSrc}
            className="w-full rounded-3xl shadow-xl object-contain bg-white h-96"
            alt="Solução Conexão Livre para empresas"
            loading="lazy"
            width="1000"
            height="600"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = fallbackImage;
            }}
          />
        </div>

        {/* Conteúdo à esquerda */}
        <div className="order-1 md:order-1">
          <span className="product-tag text-purple-600 font-semibold text-sm uppercase tracking-wide">Conexão Livre</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4">Energia mais barata para empresas</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Para empresas que pagam caro na energia. Uma solução regulamentada e legal para reduzir custos operacionais sem troca de equipamentos.
          </p>

          <ul className="space-y-3 mb-8 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold text-xl leading-none">✓</span>
              <span>Redução significativa de custos operacionais</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold text-xl leading-none">✓</span>
              <span>Processo 100% regulamentado</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold text-xl leading-none">✓</span>
              <span>Sem necessidade de instalação</span>
            </li>
          </ul>

          <a 
            href="https://wa.me/5519996693018" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-primary inline-block bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 active:scale-[0.98] transition"
          >
            Avaliar minha empresa
          </a>
        </div>
      </div>
    </section>
  );
}
