import { FC } from 'react';
import { Solution } from '../../data/solutions';

interface SolutionCardProps {
  solution: Solution;
  onCardClick?: (solution: Solution) => void;
}

const SolutionCard: FC<SolutionCardProps> = ({ solution, onCardClick }) => {
  return (
    <button
      onClick={() => onCardClick?.(solution)}
      className="relative flex-shrink-0 w-72 bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-300 cursor-pointer group overflow-hidden"
      aria-label={`${solution.title}: ${solution.subtitle}`}
    >
      {/* Background gradient accent (subtle) */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Ícone placeholder */}
        <div className="w-24 h-24 mb-6 rounded-xl bg-gradient-to-br from-green-100 to-emerald-50 flex items-center justify-center group-hover:from-green-200 group-hover:to-emerald-100 transition-colors duration-300 shadow-sm">
          <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center text-xs text-gray-400 font-medium">
            {solution.icon}
          </div>
        </div>

        {/* Título */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
          {solution.title}
        </h3>

        {/* Linha divisória elegante */}
        <div className="w-10 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-4"></div>

        {/* Subtítulo (descrição principal para cliente final) */}
        <p className="text-sm font-semibold text-gray-700 mb-3 leading-snug h-12 flex items-center justify-center">
          {solution.subtitle}
        </p>

        {/* Descrição adicional */}
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
          {solution.description}
        </p>

        {/* CTA sutil */}
        <div className="mt-5 inline-flex items-center text-green-600 text-xs font-semibold group-hover:text-green-700 transition-colors">
          Saiba mais →
        </div>
      </div>
    </button>
  );
};

export default SolutionCard;
