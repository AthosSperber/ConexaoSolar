import { FC } from 'react';

const CTASection: FC = () => {
  const handleScroll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="w-full py-20 md:py-24 lg:py-32 bg-gradient-to-br from-green-600 via-green-600 to-emerald-600 dark:from-green-700 dark:via-green-800 dark:to-emerald-800 border-t border-green-700 dark:border-green-900 relative overflow-hidden"
      aria-label="Chamada para ação - Falar com especialista"
    >
      {/* Pattern decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold text-sm uppercase tracking-wide rounded-full mb-6">
            Ainda ficou alguma dúvida?
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 md:mb-8 leading-tight max-w-4xl mx-auto">
            Quer entender se a energia limpa faz sentido para você?
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-green-50 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Nossos especialistas estão prontos para conversar sobre suas necessidades
            e encontrar a melhor solução para seu caso. Sem compromisso.
          </p>

          <button
            onClick={handleScroll}
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white hover:bg-gray-100 text-green-700 font-bold rounded-xl transition-all duration-200 text-base md:text-lg shadow-2xl hover:shadow-white/20 active:scale-95 group"
            aria-label="Falar com um especialista"
          >
            Falar com um especialista
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
