import { Zap, Sun, Home, Building2, Wifi, MessageCircle, ChevronRight } from 'lucide-react';
import { buildWhatsAppUrl, WHATSAPP_NUMBER } from '../../config/whatsapp';
import { useConsultant } from '../../config/consultant';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Products() {
  const { consultant } = useConsultant();
  const whatsappHref = buildWhatsAppUrl(
    'Olá! Gostaria de falar com um especialista e entender qual solução iGreen faz mais sentido para mim.',
    consultant.whatsapp?.number || WHATSAPP_NUMBER,
    consultant.name
  );

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
    green: 'from-green-50 to-emerald-50/40 dark:from-green-900/10 dark:to-gray-900 border-green-100 dark:border-green-800 hover:border-green-300 dark:hover:border-green-600',
    yellow: 'from-yellow-50 to-emerald-50/40 dark:from-yellow-900/10 dark:to-gray-900 border-yellow-100 dark:border-yellow-800 hover:border-yellow-300 dark:hover:border-yellow-600',
    blue: 'from-blue-50 to-emerald-50/40 dark:from-blue-900/10 dark:to-gray-900 border-blue-100 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-600',
    purple: 'from-purple-50 to-emerald-50/40 dark:from-purple-900/10 dark:to-gray-900 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-600',
    indigo: 'from-indigo-50 to-emerald-50/40 dark:from-indigo-900/10 dark:to-gray-900 border-indigo-100 dark:border-indigo-800 hover:border-indigo-300 dark:hover:border-indigo-600'
  };

  const iconColors = {
    green: 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30',
    yellow: 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30',
    blue: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30',
    purple: 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30',
    indigo: 'text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30'
  };

  const chevronColors = {
    green: 'text-green-600 dark:text-green-400',
    yellow: 'text-yellow-600 dark:text-yellow-400',
    blue: 'text-blue-600 dark:text-blue-400',
    purple: 'text-purple-600 dark:text-purple-400',
    indigo: 'text-indigo-600 dark:text-indigo-400'
  };

  return (
    <section id="produtos" className="scroll-snap-section bg-gradient-to-b from-emerald-50/60 to-emerald-50/20 dark:from-gray-950 dark:to-black">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="product-tag text-green-600 dark:text-green-400 font-semibold text-sm uppercase tracking-wide">Soluções iGreen</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-3 mb-4">Escolha sua solução</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">Clique em uma opção para conhecer melhor a solução mais adequada para você.</p>
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
                  <div className="font-semibold text-gray-900 dark:text-white text-sm md:text-base truncate">{product.title}</div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 truncate">{product.desc}</div>
                </div>
                <ChevronRight className={`${chevronColor} w-5 h-5 flex-shrink-0`} />
              </button>
            );
          })}
        </div>

        {/* CTA Consultor */}
        <a
          href={whatsappHref}
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
