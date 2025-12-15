import { FC } from 'react';
import BenefitCard from '../ui/BenefitCard';

const benefits = [
  {
    id: 'economia',
    icon: '💰',
    title: 'Economia real',
    description: 'Redução significativa na conta de energia desde o primeiro mês, com transparência total sobre os valores.',
  },
  {
    id: 'simples',
    icon: '✓',
    title: 'Processo simples',
    description: 'Tudo descomplicado. Sem burocracias, sem surpresas. Apenas clareza e profissionalismo em cada etapa.',
  },
  {
    id: 'sustentavel',
    icon: '🌱',
    title: 'Energia sustentável',
    description: 'Contribua para um planeta melhor usando fontes limpas e renováveis que fazem a diferença.',
  },
];

const BenefitsSection: FC = () => {
  return (
    <section 
      className="w-full py-20 md:py-24 lg:py-32 bg-white border-t border-gray-100"
      aria-label="Benefícios da energia limpa com Conecta Solar"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">
            Por que escolher energia limpa
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            com a Conecta Solar
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
