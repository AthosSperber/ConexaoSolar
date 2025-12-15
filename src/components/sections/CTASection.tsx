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
      className="w-full py-20 md:py-24 lg:py-32 bg-gradient-to-r from-green-600 to-green-700 border-t border-green-700"
      aria-label="Chamada para ação - Falar com especialista"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Quer entender se a energia limpa faz sentido para você?
          </h2>
          
          <p className="text-lg md:text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Nossos especialistas estão prontos para conversar sobre suas necessidades
            e encontrar a melhor solução para seu caso. Sem compromisso.
          </p>

          <button
            onClick={handleScroll}
            className="inline-block px-10 py-4 bg-white hover:bg-gray-100 text-green-700 font-bold rounded-lg transition-colors duration-200 text-lg shadow-lg active:scale-95"
            aria-label="Falar com um especialista"
          >
            Falar com um especialista →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
