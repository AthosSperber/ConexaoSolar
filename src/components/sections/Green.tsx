import Accordion from '../ui/Accordion';
import greenJpg from '../../assets/images/green-lightbill.jpg';
import green480 from '../../assets/images/green-lightbill-480.webp';
import green768 from '../../assets/images/green-lightbill-768.webp';
import green1200 from '../../assets/images/green-lightbill-1200.webp';

export default function Green() {
  return (
    <section id="green" className="scroll-snap-section bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagem à esquerda */}
        <div className="order-2 md:order-1">
          <picture>
            <source type="image/webp" srcSet={`${green480} 480w, ${green768} 768w, ${green1200} 1200w`} sizes="(max-width:768px) 90vw, 45vw" />
            <img 
              src={greenJpg} 
              className="w-full rounded-3xl shadow-xl object-cover h-96" 
              alt="Economia na conta de luz com Conexão Green" 
              loading="lazy" 
              width="1000" 
              height="600" 
            />
          </picture>
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
