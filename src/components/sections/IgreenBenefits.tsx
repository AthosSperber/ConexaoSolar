import { Gift, Star, TrendingUp, Smartphone } from 'lucide-react';

export default function IgreenBenefits() {
  const benefits = [
    {
      icon: Gift,
      color: 'yellow',
      title: 'Roleta de Prêmios',
      description: 'A cada indicação válida, gire a roleta e ganhe prêmios instantâneos de R$ 25 até R$ 500',
      highlight: 'Sem limites de giros!'
    },
    {
      icon: Star,
      color: 'purple',
      title: 'Sorteio Anual',
      description: 'Concorra a uma cabine de Cruzeiro para 2 pessoas. Quanto mais indicar, mais números da sorte você acumula',
      highlight: 'Cruzeiro All-Inclusive'
    },
    {
      icon: TrendingUp,
      color: 'green',
      title: 'Cashback Sustentável',
      description: 'Ganhe cashback em indicações e abata até 100% da energia injetada pela iGreen na sua conta',
      highlight: 'Até 100% de desconto'
    },
    {
      icon: Smartphone,
      color: 'blue',
      title: '+600 Mil Descontos',
      description: 'Acesso a descontos exclusivos em mais de 600 mil serviços e produtos em todo o Brasil',
      highlight: 'GRÁTIS para todos'
    }
  ];

  const colorStyles = {
    yellow: {
      bg: 'from-yellow-50 to-amber-50 dark:from-yellow-900/10 dark:to-amber-900/10',
      border: 'border-yellow-200 dark:border-yellow-700',
      iconBg: 'bg-yellow-100 dark:bg-yellow-900/30',
      iconText: 'text-yellow-600 dark:text-yellow-400',
      highlight: 'text-yellow-700 dark:text-yellow-400'
    },
    purple: {
      bg: 'from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10',
      border: 'border-purple-200 dark:border-purple-700',
      iconBg: 'bg-purple-100 dark:bg-purple-900/30',
      iconText: 'text-purple-600 dark:text-purple-400',
      highlight: 'text-purple-700 dark:text-purple-400'
    },
    green: {
      bg: 'from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10',
      border: 'border-green-200 dark:border-green-700',
      iconBg: 'bg-green-100 dark:bg-green-900/30',
      iconText: 'text-green-600 dark:text-green-400',
      highlight: 'text-green-700 dark:text-green-400'
    },
    blue: {
      bg: 'from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10',
      border: 'border-blue-200 dark:border-blue-700',
      iconBg: 'bg-blue-100 dark:bg-blue-900/30',
      iconText: 'text-blue-600 dark:text-blue-400',
      highlight: 'text-blue-700 dark:text-blue-400'
    }
  };

  return (
    <section className="w-full py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-semibold text-sm uppercase tracking-wide rounded-full mb-6">
            iGreen Club
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Todos os Clientes Recebem Acesso Gratuito
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Além da economia na energia, você ganha benefícios exclusivos com prêmios, descontos e muito mais
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const colors = colorStyles[benefit.color as keyof typeof colorStyles];
            const Icon = benefit.icon;
            
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-6 sm:p-8 border-2 ${colors.border} hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${colors.iconBg} p-3 rounded-xl flex-shrink-0`}>
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${colors.iconText}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className={`text-sm font-semibold ${colors.highlight} mb-3`}>
                      {benefit.highlight}
                    </p>
                  </div>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="relative bg-gradient-to-r from-green-600 via-green-600 to-emerald-600 rounded-3xl p-10 sm:p-14 shadow-2xl overflow-hidden">
          {/* Pattern decorativo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-300 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Quer saber mais sobre os benefícios do iGreen Club?
            </h3>
            <p className="text-base sm:text-lg text-green-50 mb-8 max-w-2xl mx-auto">
              Fale com nossos especialistas e descubra como aproveitar todos os benefícios
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/5519996693018"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl group"
              >
                Falar com Especialista
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://www.igreenenergy.com.br/igreenclub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-green-100 font-semibold text-base transition-colors"
              >
                Ver detalhes completos
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
