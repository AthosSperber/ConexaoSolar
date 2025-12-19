import { FC } from 'react';
import { partnerData } from '../../data/partner';
import { useConsultant } from '../../config/consultant';
import { track } from '../../lib/analytics';

const Hero: FC = () => {
  const { consultant } = useConsultant();
  const fallbackLogo =
    'data:image/svg+xml;charset=utf-8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
        <rect x="0" y="0" width="160" height="160" rx="24" fill="#DCFCE7"/>
        <text x="50%" y="52%" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="28" font-weight="700" fill="#16A34A">iGreen</text>
      </svg>`
    );

  const scrollToProducts = () => {
    const productsSection = document.getElementById('solucoes');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrimaryCtaClick = () => {
    track('cta_click', {
      consultantId: consultant.id,
      placement: 'hero',
      cta: 'primary',
      action: 'scroll_to_solucoes',
      pathname: window.location.pathname,
    });

    scrollToProducts();
  };

  return (
    <section 
      id="hero"
      className="w-full min-h-screen flex items-center justify-center pt-20 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50/60 via-emerald-50/20 to-emerald-50/60 dark:from-gray-950 dark:via-emerald-950/15 dark:to-gray-950"
      aria-label={`Seção principal ${consultant.brand.short}`}
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna esquerda - Texto e CTA */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 md:mb-6 leading-tight">
              {consultant.hero.headline}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed">
              {consultant.hero.subheadline}
            </p>

            <button
              onClick={handlePrimaryCtaClick}
              className="inline-block px-6 py-3 md:px-8 md:py-4 bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 font-bold rounded-lg transition-colors duration-200 text-base md:text-lg shadow-md active:scale-95"
              aria-label={consultant.hero.cta}
            >
              {consultant.hero.cta}
            </button>

            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-6 md:mt-8">
              Sem custo inicial • Contrato transparente • Suporte iGreen
            </p>
          </div>

          {/* Coluna direita - Card Parceiro */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-sm p-8 bg-emerald-50/60 dark:bg-gradient-to-br dark:from-gray-900/70 dark:to-emerald-950/20 backdrop-blur-sm rounded-2xl border-2 border-emerald-200/70 dark:border-emerald-900/40 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <p className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide mb-6">
                  {partnerData.tagline}
                </p>

                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-100 to-emerald-50 rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
                  {partnerData.logoUrl ? (
                    <img
                      src={partnerData.logoUrl}
                      alt={`Logo ${partnerData.name}`}
                      className="w-24 h-24 object-contain"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = fallbackLogo;
                      }}
                    />
                  ) : (
                    <span className="text-3xl font-bold text-green-600">{partnerData.name}</span>
                  )}
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
