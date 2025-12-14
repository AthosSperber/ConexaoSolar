import Accordion from '../ui/Accordion';
import solarJpg from '../../assets/images/solar.jpg';
import solar480 from '../../assets/images/solar-480.webp';
import solar768 from '../../assets/images/solar-768.webp';
import solar1200 from '../../assets/images/solar-1200.webp';

export default function Solar() {
  return (
    <section id="solar" className="scroll-snap-section bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagem à direita em desktop, topo em mobile */}
        <div className="order-2 md:order-2">
          <picture>
            <source type="image/webp" srcSet={`${solar480} 480w, ${solar768} 768w, ${solar1200} 1200w`} sizes="(max-width:768px) 90vw, 45vw" />
            <img 
              src={solarJpg} 
              className="w-full rounded-3xl shadow-xl object-cover h-96" 
              alt="Painéis solares instalados no telhado" 
              loading="lazy" 
              width="1000" 
              height="600" 
            />
          </picture>
        </div>

        {/* Conteúdo à esquerda */}
        <div className="order-1 md:order-1">
          <span className="product-tag text-yellow-600 font-semibold text-sm uppercase tracking-wide">Conexão Solar</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4">Energia solar sem investimento</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Painéis instalados no imóvel sem custo inicial. Você economiza na fatura desde o primeiro mês, com contrato transparente.
          </p>

          <ul className="space-y-3 mb-8 hidden md:block text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold text-xl leading-none">✓</span>
              <span>Sem compra de equipamentos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold text-xl leading-none">✓</span>
              <span>Economia desde o primeiro mês</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold text-xl leading-none">✓</span>
              <span>Contrato claro e seguro</span>
            </li>
          </ul>

          <Accordion title="Como funciona o processo?">
            <div className="space-y-4">
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">1.</span>
                  <span>Levantamento do seu consumo energético</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">2.</span>
                  <span>Avaliação técnica do imóvel</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">3.</span>
                  <span>Instalação e acompanhamento contínuo</span>
                </li>
              </ol>
              <p className="text-sm text-gray-600 pt-2 border-t border-gray-200">Uma análise é feita antes para garantir que o imóvel é compatível com a solução.</p>
              <a 
                href="https://wa.me/5519996693018" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary block text-center mt-6 bg-yellow-600 text-white py-4 rounded-full font-semibold hover:bg-yellow-700 active:scale-[0.98] transition"
              >
                Ver se meu imóvel pode participar
              </a>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
