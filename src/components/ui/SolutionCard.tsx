import { FC } from 'react';
import { Solution } from '../../data/solutions';

interface SolutionCardProps {
  solution: Solution;
  onCardClick?: (solution: Solution) => void;
}

const SolutionCard: FC<SolutionCardProps> = ({ solution, onCardClick }) => {
  const fallbackIcon =
    'data:image/svg+xml;charset=utf-8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
        <rect x="0" y="0" width="96" height="96" rx="16" fill="#F3F4F6"/>
        <path d="M24 58c10-6 20-6 30 0s18 6 18 6" stroke="#9CA3AF" stroke-width="4" fill="none" stroke-linecap="round"/>
        <circle cx="36" cy="40" r="4" fill="#9CA3AF"/>
        <circle cx="60" cy="40" r="4" fill="#9CA3AF"/>
      </svg>`
    );

  return (
    <button
      onClick={() => onCardClick?.(solution)}
      className="relative flex-shrink-0 w-72 min-w-[18rem] lg:w-80 lg:min-w-[20rem] bg-gray-50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800/100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700/50 hover:border-green-300 dark:hover:border-green-600 cursor-pointer group overflow-hidden"
      aria-label={`${solution.title}: ${solution.subtitle}`}
    >
      {/* Background gradient accent (subtle) */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Ícone placeholder */}
        <div className="w-24 h-24 mb-6 rounded-xl bg-gradient-to-br from-green-100 to-emerald-50 flex items-center justify-center group-hover:from-green-200 group-hover:to-emerald-100 transition-colors duration-300 shadow-sm">
          <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
            {solution.icon?.startsWith('/') ? (
              <img
                src={solution.icon}
                alt={`Ícone: ${solution.title}`}
                className="w-14 h-14 object-contain"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = fallbackIcon;
                }}
              />
            ) : (
              <span className="text-xs text-gray-400 font-medium px-2 text-center">{solution.icon}</span>
            )}
          </div>
        </div>

        {/* Título */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
          {solution.title}
        </h3>

        {/* Linha divisória elegante */}
        <div className="w-10 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-4"></div>

        {/* Subtítulo (descrição principal para cliente final) */}
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 leading-snug h-12 flex items-center justify-center">
          {solution.subtitle}
        </p>

        {/* Descrição adicional */}
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
          {solution.description}
        </p>

        {/* CTA sutil */}
        <div className="mt-5 inline-flex items-center text-green-600 dark:text-green-400 text-xs font-semibold group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
          Saiba mais →
        </div>
      </div>
    </button>
  );
};

export default SolutionCard;
