import { Star, Gift, Zap, Wallet } from 'lucide-react';
import { testimonials } from '../../data/mock';
import { buildWhatsAppUrl } from '../../config/whatsapp';

export default function iGreenClubSection() {
  const appFeatures = [
    {
      icon: Zap,
      color: 'emerald',
      title: 'Acompanhamento da Economia',
      description: 'Monitore em tempo real quanto você está economizando com nossos produtos'
    },
    {
      icon: Gift,
      color: 'blue',
      title: 'Descontos em +60 mil lojas',
      description: 'Descontos e benefícios em lojas pelo Brasil direto no app'
    },
    {
      icon: Wallet,
      color: 'purple',
      title: 'Link de Indicação',
      description: 'Cashback Sustentável: ao indicar clientes pelo app, você pode receber cashback para abater na conta de energia (conforme regras/campanhas)'
    },
    {
      icon: Star,
      color: 'yellow',
      title: 'Sorteio Anual',
      description: 'Concorra anualmente a uma cabine de Cruzeiro para 2 pessoas'
    }
  ];

  const colorClasses = {
    emerald: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300',
    blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300',
    purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300',
    yellow: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-300'
  };

  return (
    <section id="igreenclub" className="scroll-snap-section bg-emerald-50/40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="product-tag text-emerald-600 dark:text-emerald-400 font-semibold text-sm uppercase tracking-wide">iGreen Club</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-3 mb-4">Todos os Clientes Recebem Acesso Gratuito</h2>
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">+600 mil Descontos em Serviços e Produtos</p>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Benefícios exclusivos para todos os clientes que contratam qualquer solução iGreen
          </p>
        </div>

        <div className="mb-12 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-900/70 dark:to-emerald-950/20 rounded-3xl p-8 md:p-12 border border-emerald-100/80 dark:border-emerald-900/30">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Funcionalidades do App iGreen Club</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              const colorClass = colorClasses[feature.color as keyof typeof colorClasses];
              return (
                <div key={idx} className="bg-white/90 dark:bg-gray-900/70 rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-emerald-100/70 dark:border-emerald-900/30">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${colorClass}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-base">{feature.title}</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Programas de Recompensas */}
        <div className="space-y-8 mb-12">
          {/* Roleta de Prêmios */}
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-yellow-300 dark:border-yellow-700 shadow-md">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">🎱 Gire a Roleta e Ganhe</h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6"><strong>A cada indicação válida pelo app iGreen Club (cliente indicado validado e ativo): 1 Giro + 1 Número da Sorte</strong></p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 mb-8">
              {['+1 Sorte', 'R$ 25', 'R$ 50', 'R$ 100', 'R$ 250', 'R$ 500'].map((prize, i) => (
                <div key={i} className="bg-white dark:bg-gray-900 rounded-xl p-3 sm:p-4 text-center font-bold text-yellow-600 dark:text-yellow-400 border-2 border-yellow-200 dark:border-yellow-700 hover:shadow-md transition text-sm sm:text-base">
                  {prize}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold">✓ Cada indicação válida gera 1 giro ✓ Quanto mais indicar, mais chances (conforme regras do programa)</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-4">
              Referência:{' '}
              <a
                href="https://www.igreenenergy.com.br/igreenclub"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline"
              >
                igreenenergy.com.br/igreenclub
              </a>
            </p>
          </div>

          {/* Cashback Sustentável */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-green-300 dark:border-green-700 shadow-md">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">💚 Cashback Sustentável</h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6"><strong>Ao indicar novos clientes pelo app, você pode receber cashback para abater na conta de energia (conforme regras/campanhas):</strong></p>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 text-center mb-6 border-2 border-green-300 dark:border-green-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Uso do cashback</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-green-600 dark:text-green-400 mb-2">Para abater na conta de energia</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold">Conforme regras, validações e campanhas vigentes</p>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Referência:{' '}
              <a
                href="https://www.igreenenergy.com.br/igreenclub"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline"
              >
                igreenenergy.com.br/igreenclub
              </a>
            </p>
          </div>
        </div>

        {/* Depoimentos */}
          <div className="bg-white/90 dark:bg-gray-900/70 rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm border border-emerald-100/70 dark:border-emerald-900/30 mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">O que dizem nossos membros</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <blockquote key={t.id} className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-700">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-800 dark:text-gray-300 mb-4 leading-relaxed">"{t.text}"</p>
                <footer className="font-semibold text-emerald-600 dark:text-emerald-400">— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white shadow-xl">
          <p className="text-base sm:text-lg text-emerald-50 mb-4">Todos os clientes iGreen recebem</p>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">ACESSO GRATUITO</p>
          <p className="text-base sm:text-lg text-emerald-50 mb-8">ao iGreen Club com +600 mil descontos</p>
          <a 
            href={buildWhatsAppUrl()} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-block bg-emerald-50 text-emerald-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-100 active:scale-[0.98] transition shadow-lg"
          >
            Conhecer Mais Benefícios
          </a>
          <p className="text-sm text-emerald-100 mt-6">
            Consulte regras e condições:{' '}
            <a
              href="https://www.igreenenergy.com.br/igreenclub"
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline"
            >
              igreenenergy.com.br/igreenclub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
