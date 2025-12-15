import { FC } from 'react';

interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface BenefitCardProps {
  benefit: Benefit;
}

const BenefitCard: FC<BenefitCardProps> = ({ benefit }) => {
  return (
    <div className="p-8 md:p-10 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      {/* Ícone */}
      <div className="text-5xl mb-6">
        {benefit.icon}
      </div>

      {/* Título */}
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
        {benefit.title}
      </h3>

      {/* Descrição */}
      <p className="text-gray-600 leading-relaxed flex-grow">
        {benefit.description}
      </p>
    </div>
  );
};

export default BenefitCard;
