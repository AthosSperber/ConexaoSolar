import { FC } from 'react';
import { solutions } from '../../data/solutions';
import SolutionCard from '../ui/SolutionCard';

const SolutionsCarousel: FC = () => {
  return (
    <section
      id="solucoes"
      className="bg-white py-16 md:py-24 border-t border-gray-100 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Soluções em energia limpa e conectividade
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça soluções pensadas para simplificar o acesso à energia renovável
            e serviços essenciais de conectividade.
          </p>
        </div>

        {/* Carrossel */}
        <div
          className="relative"
          role="region"
          aria-label="Soluções disponíveis"
        >
          <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-1">
            {solutions.map((solution) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCarousel;
