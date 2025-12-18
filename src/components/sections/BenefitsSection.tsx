import { FC } from 'react';
import { DollarSign, CheckCircle, Leaf } from 'lucide-react';
import BenefitCard from '../ui/BenefitCard';
import { useConsultant } from '../../config/consultant';

const benefits = [
  {
    id: 'economia',
    icon: DollarSign,
    title: 'Economia real',
    description: 'Redução significativa na conta de energia desde o primeiro mês, com transparência total sobre os valores.',
  },
  {
    id: 'simples',
    icon: CheckCircle,
    title: 'Processo simples',
    description: 'Tudo descomplicado. Sem burocracias, sem surpresas. Apenas clareza e profissionalismo em cada etapa.',
  },
  {
    id: 'sustentavel',
    icon: Leaf,
    title: 'Energia sustentável',
    description: 'Contribua para um planeta melhor usando fontes limpas e renováveis que fazem a diferença.',
  },
];

const BenefitsSection: FC = () => {
  const { consultant } = useConsultant();

  return (
    <section 
      className="w-full py-16 md:py-20 lg:py-28 bg-emerald-50/40 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
      aria-label={`Benefícios da energia limpa com ${consultant.brand.short}`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-semibold text-sm uppercase tracking-wide rounded-full mb-6">
            Vantagens
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            Por que escolher energia limpa
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-400">
            com acompanhamento de consultor iGreen
          </p>
        </div>

        {/* Grid 3 colunas desktop, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
