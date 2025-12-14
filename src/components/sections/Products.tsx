import { Zap, Sun, Home, Building2, Wifi, MessageCircle, ChevronRight } from 'lucide-react';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Products() {
  const products = [
    {
      id: 'green',
      icon: Zap,
      color: 'green',
      title: 'Reduzir conta de luz',
      desc: 'Soluções sem obras nem investimento'
    },
    {
      id: 'solar',
      icon: Sun,
      color: 'yellow',
      title: 'Energia solar (financiada)',
      desc: 'Painéis instalados sem custo inicial'
    },
    {
      id: 'placas',
      icon: Home,
      color: 'blue',
      title: 'Placas solares próprias',
      desc: 'Investimento com retorno em longo prazo'
    },
    {
      id: 'livre',
      icon: Building2,
      color: 'purple',
      title: 'Mercado Livre de Energia',
      desc: 'Para empresas que pagam caro'
    },
    {
      id: 'telecom',
      icon: Wifi,
      color: 'indigo',
      title: 'Internet mais barata',
      desc: 'Planos de conectividade otimizados'
    }
  ];

  const colorStyles = {
    green: 'from-green-50 to-white border-green-100 hover:border-green-300',
    yellow: 'from-yellow-50 to-white border-yellow-100 hover:border-yellow-300',
    blue: 'from-blue-50 to-white border-blue-100 hover:border-blue-300',
    purple: 'from-purple-50 to-white border-purple-100 hover:border-purple-300',
    indigo: 'from-indigo-50 to-white border-indigo-100 hover:border-indigo-300'
  };

  const iconColors = {
    green: 'text-green-600 bg-green-100',
    yellow: 'text-yellow-600 bg-yellow-100',
    blue: 'text-blue-600 bg-blue-100',
    purple: 'text-purple-600 bg-purple-100',
    indigo: 'text-indigo-600 bg-indigo-100'
  };

  const chevronColors = {
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    indigo: 'text-indigo-600'
  };

  return (
    <section id="produtos" className="scroll-snap-section bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="product-tag text-green-600 font-semibold text-sm uppercase tracking-wide">Soluções iGreen</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">Escolha sua solução</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">Clique em uma opção para conhecer melhor a solução mais adequada para você.</p>
        </div>

        {/* Grid responsivo */}
        <div className="space-y-3 mb-6">
          {products.map((product) => {
            const Icon = product.icon;
            const colorClass = colorStyles[product.color as keyof typeof colorStyles];
            const iconColor = iconColors[product.color as keyof typeof iconColors];
            const chevronColor = chevronColors[product.color as keyof typeof chevronColors];

            return (
              <button
                key={product.id}
                onClick={() => scrollTo(product.id)}
                className={`w-full flex items-center gap-3 md:gap-4 p-5 md:p-6 rounded-2xl bg-gradient-to-br ${colorClass} border-2 text-left transition shadow-sm hover:shadow-md active:scale-[0.98]`}
              >
                <div className={`p-3 md:p-4 rounded-lg flex-shrink-0 ${iconColor}`}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-sm md:text-base truncate">{product.title}</div>
                  <div className="text-xs md:text-sm text-gray-600 truncate">{product.desc}</div>
                </div>
                <ChevronRight className={`${chevronColor} w-5 h-5 flex-shrink-0`} />
              </button>
            );
          })}
        </div>

        {/* CTA Consultor */}
        <a
          href="https://wa.me/5519996693018?text=Olá!%20Gostaria%20de%20falar%20com%20um%20consultor"
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center gap-3 md:gap-4 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg hover:shadow-xl transition active:scale-[0.98]"
        >
          <div className="p-3 md:p-4 rounded-lg bg-white/20 flex-shrink-0">
            <MessageCircle className="text-white w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div className="flex-1 text-left min-w-0">
            <div className="font-semibold text-base md:text-lg">Falar com um especialista</div>
            <div className="text-xs md:text-sm text-green-100">Tire suas dúvidas e receba orientação personalizada</div>
          </div>
          <ChevronRight className="text-white w-5 h-5 flex-shrink-0" />
        </a>
      </div>
    </section>
  );
}
