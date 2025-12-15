import { FC } from 'react';
import { homeContent } from '../../data/texts';
import { partnerData } from '../../data/partner';

const Hero: FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('solucoes');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="w-full min-h-screen flex items-center justify-center pt-20 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-950"
      aria-label="Seção principal Conecta Solar"
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna esquerda - Texto e CTA */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              {homeContent.hero.headline}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {homeContent.hero.subheadline}
            </p>

            <button
              onClick={scrollToProducts}
              className="inline-block px-8 py-4 bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 font-bold rounded-lg transition-colors duration-200 text-lg shadow-md active:scale-95"
              aria-label={homeContent.hero.cta}
            >
              {homeContent.hero.cta}
            </button>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
              Sem custo inicial • Contrato transparente • Suporte iGreen
            </p>
          </div>

          {/* Coluna direita - Card Parceiro */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-sm p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border-2 border-green-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <p className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide mb-6">
                  {partnerData.tagline}
                </p>

                {/* Logo placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-100 to-emerald-50 rounded-xl flex items-center justify-center shadow-sm">
                  <span className="text-3xl font-bold text-green-600">{partnerData.name}</span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 leading-relaxed font-medium">
                  {partnerData.description}
                </p>

                <a
                  href={partnerData.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 font-semibold rounded-lg transition-colors duration-200"
                  aria-label={`Conhecer ${partnerData.name}`}
                >
                  Conhecer a {partnerData.name} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
