import Accordion from '../ui/Accordion';

export default function Green() {
  const imageSrc = '/assets/sections/green.jpg';
  const fallbackImage =
    'data:image/svg+xml;charset=utf-8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="600" viewBox="0 0 1000 600">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#DCFCE7"/>
            <stop offset="1" stop-color="#ECFDF5"/>
          </linearGradient>
        </defs>
        <rect width="1000" height="600" fill="url(#g)"/>
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="28" fill="#16A34A">Imagem Conexão Green</text>
      </svg>`
    );

  return (
    <section id="green" className="scroll-snap-section bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagem à esquerda */}
        <div className="order-2 md:order-1">
          <img
            src={imageSrc}
            className="w-full rounded-3xl shadow-xl object-contain bg-white h-96"
            alt="Economia na conta de luz com Conexão Green"
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
          <span className="product-tag text-green-600 font-semibold text-sm uppercase tracking-wide">Conexão Green</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4">Sua conta de luz pesa?</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Reduz a conta sem instalar nada no imóvel. Uma alternativa simples e segura para economizar todo mês, sem obras nem mudanças na rotina.
          </p>

          <ul className="space-y-3 mb-8 hidden md:block text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl leading-none">✓</span>
              <span>Economia mensal direto na fatura</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl leading-none">✓</span>
              <span>Sem obras ou equipamentos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl leading-none">✓</span>
              <span>Processo simples e 100% seguro</span>
            </li>
          </ul>

          <Accordion title="Como funciona a Conexão Green?">
            <div className="space-y-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">1.</span>
                  <span>Análise rápida da sua fatura</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">2.</span>
                  <span>Proposta sem custo e sem compromisso</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">3.</span>
                  <span>Implantação sem intervenção no imóvel</span>
                </li>
              </ul>
              <a 
                href="https://wa.me/5519996693018" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary block text-center mt-6 bg-green-600 text-white py-4 rounded-full font-semibold hover:bg-green-700 active:scale-[0.98] transition"
              >
                Ver se posso participar
              </a>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
