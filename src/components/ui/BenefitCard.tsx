import { FC } from 'react';
import { LucideIcon } from 'lucide-react';

interface Benefit {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BenefitCardProps {
  benefit: Benefit;
}

const BenefitCard: FC<BenefitCardProps> = ({ benefit }) => {
  const Icon = benefit.icon;
  
  return (
    <div className="group p-8 md:p-10 bg-gray-50 hover:bg-white dark:bg-gray-800/80 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-600 hover:shadow-xl dark:hover:shadow-green-900/20 transition-all duration-300 h-full flex flex-col">
      {/* Ícone com background */}
      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
      </div>

      {/* Título */}
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
        {benefit.title}
      </h3>

      {/* Descrição */}
      <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed flex-grow">
        {benefit.description}
      </p>
    </div>
  );
};

export default BenefitCard;
