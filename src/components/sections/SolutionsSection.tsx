import { FC, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { solutions, Solution } from '../../data/solutions';
import SolutionCard from '../ui/SolutionCard';
import ProductModal from '../ui/ProductModal';

const SolutionsSection: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (solution: Solution) => {
    const index = solutions.findIndex(s => s.id === solution.id);
    setSelectedIndex(index);
    setSelectedSolution(solution);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Aguardar animação antes de limpar o state
    setTimeout(() => setSelectedSolution(null), 300);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // largura aproximada de um card + gap
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="solucoes"
      className="w-full py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
      aria-label="Soluções em energia limpa e conectividade"
    >
      {/* Container centralizado */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Soluções em energia limpa e conectividade
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Conheça as possibilidades e entenda o que faz sentido para você.
          </p>
        </div>

        {/* Carrossel com overflow-x e botões de navegação */}
        <div className="relative pointer-events-none">
          {/* Botão Anterior */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hidden md:flex items-center justify-center pointer-events-auto"
            aria-label="Card anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Botão Próximo */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hidden md:flex items-center justify-center pointer-events-auto"
            aria-label="Próximo card"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex flex-nowrap gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 mb-8 pointer-events-auto"
          >
            {solutions.map((solution) => (
              <div key={solution.id} className="flex-shrink-0">
                <SolutionCard
                  solution={solution}
                  onCardClick={() => handleCardClick(solution)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores discretos */}
        <div className="flex justify-center gap-2 mb-12" role="tablist" aria-label="Navegação de soluções">
          {solutions.map((solution, index) => (
            <button
              key={solution.id}
              onClick={() => setSelectedIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'bg-green-600 dark:bg-green-500 w-8'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 w-2'
              }`}
              aria-label={`Ir para ${solution.title}`}
              aria-current={index === selectedIndex}
              role="tab"
              aria-selected={index === selectedIndex}
            />
          ))}
        </div>

        {/* Info card selecionado */}
        {selectedIndex !== null && solutions[selectedIndex] && (
          <div className="mb-12 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-green-100 dark:border-gray-700 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {solutions[selectedIndex].title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {solutions[selectedIndex].description}
              </p>
            </div>
          </div>
        )}

        {/* CTA footer da seção */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
            Pronto para começar?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 font-bold rounded-lg transition-colors duration-200 shadow-md active:scale-95"
            aria-label="Falar com um especialista"
          >
            Fale com um especialista →
          </a>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        solution={selectedSolution}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default SolutionsSection;
