import { FC } from 'react';
import { homeContent } from '../../data/texts';
import { partnerData } from '../../data/partner';

const Hero: FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('produtos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Coluna Esquerda - Texto e CTA */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {homeContent.hero.headline}
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
            {homeContent.hero.subheadline}
          </p>

          <button
            onClick={scrollToProducts}
            className="bg-green-600 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-green-700 transition shadow-md active:scale-[0.98]"
          >
            {homeContent.hero.cta}
          </button>

          <p className="text-sm text-gray-500 mt-6">Sem custo inicial • Contrato transparente • Suporte iGreen</p>
        </div>

        {/* Coluna Direita - Card Parceiro */}
        <div className="w-full md:w-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition">
            <p className="text-sm font-semibold text-green-600 mb-4 uppercase tracking-wide">
              {partnerData.tagline}
            </p>
            <a
              href={partnerData.linkUrl}
              target="_blank"
              rel="noreferrer"
              className="mb-6 inline-block hover:opacity-80 transition"
            >
              <div className="bg-gray-50 px-6 py-4 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">{partnerData.name}</p>
                <p className="text-xs text-gray-600 mt-1">{partnerData.description}</p>
              </div>
            </a>

            <a
              href={partnerData.linkUrl}
              target="_blank"
              rel="noreferrer"
              className="text-green-600 hover:text-green-700 font-semibold text-sm transition"
            >
              Conhecer a iGreen →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
