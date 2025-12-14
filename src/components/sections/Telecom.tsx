import telecomJpg from '../../assets/images/telecom.jpg';
import telecom480 from '../../assets/images/telecom-480.webp';
import telecom768 from '../../assets/images/telecom-768.webp';
import telecom1200 from '../../assets/images/telecom-1200.webp';

export default function Telecom() {
  return (
    <section id="telecom" className="scroll-snap-section bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagem à esquerda */}
        <div className="order-2 md:order-1">
          <picture>
            <source type="image/webp" srcSet={`${telecom480} 480w, ${telecom768} 768w, ${telecom1200} 1200w`} sizes="(max-width:768px) 90vw, 45vw" />
            <img 
              src={telecomJpg} 
              className="w-full rounded-3xl shadow-xl object-cover h-96" 
              alt="Internet e conectividade Conexão Telecom" 
              loading="lazy" 
              width="1000" 
              height="600" 
            />
          </picture>
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
