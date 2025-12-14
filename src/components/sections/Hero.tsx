import { FC } from 'react';
import igreenLogo from '../../assets/images/igreen-logo.png';

const Hero: FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('produtos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-8 md:py-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 text-center md:text-left">
          <span className="product-tag text-green-600">Conecta Solar</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-2">Economize na sua conta de luz</h1>
          <p className="text-sm md:text-base text-gray-700 mb-3 max-w-lg">Soluções sem investimento inicial — instalação rápida e economia desde o primeiro mês.</p>

          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <button onClick={scrollToProducts} className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-700 transition shadow-md active:scale-[0.98]">Conhecer soluções</button>
          </div>

          <div className="text-xs text-gray-500">Sem custo inicial • Contrato transparente • Suporte iGreen</div>
        </div>

        <div className="w-full md:w-56">
          <div className="bg-white rounded-2xl p-3 shadow-lg flex items-center justify-center">
            <a href="https://igreenenergy.com.br" target="_blank" rel="noreferrer" className="inline-block">
              <img src={igreenLogo} alt="iGreen" className="w-36 h-auto object-contain" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
