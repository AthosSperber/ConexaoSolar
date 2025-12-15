import { FC } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Solution } from '../../data/solutions';
import { Link } from 'react-router-dom';

interface ProductModalProps {
  solution: Solution | null;
  isOpen: boolean;
  onClose: () => void;
}

const productDetails: Record<string, {
  benefits: string[];
  summary: string;
  cta: string;
}> = {
  'conexao-green': {
    summary: 'Reduza sua conta de energia sem instalar nada. Economia mensal garantida diretamente na sua fatura, sem obras ou mudanças na rotina.',
    benefits: [
      'Economia mensal direto na fatura',
      'Sem obras ou equipamentos necessários',
      'Processo 100% digital e seguro',
      'Sem investimento inicial',
      'Contrato transparente e flexível'
    ],
    cta: 'Simular minha economia'
  },
  'conexao-livre': {
    summary: 'Mercado livre de energia com flexibilidade e economia. Escolha seu fornecedor e pague menos na conta de luz com transparência total.',
    benefits: [
      'Liberdade de escolher seu fornecedor',
      'Economia de até 35% na conta',
      'Previsibilidade nos custos',
      'Sustentabilidade com energia limpa',
      'Gestão profissional de energia'
    ],
    cta: 'Quero conhecer melhor'
  },
  'conexao-placas': {
    summary: 'Instale seu próprio sistema de energia solar. Projeto completo com painéis de alta eficiência, instalação profissional e suporte técnico.',
    benefits: [
      'Projeto personalizado para seu imóvel',
      'Instalação profissional certificada',
      'Painéis de alta eficiência e durabilidade',
      'Retorno do investimento garantido',
      'Monitoramento em tempo real',
      'Manutenção e suporte técnico'
    ],
    cta: 'Solicitar orçamento'
  },
  'conexao-solar': {
    summary: 'Energia solar por assinatura, sem instalação. Aproveite os benefícios da energia limpa sem investir em equipamentos ou obras.',
    benefits: [
      'Energia solar sem instalar painéis',
      'Economia imediata na conta',
      'Sem investimento em equipamentos',
      'Flexibilidade para cancelar',
      'Energia 100% renovável e limpa'
    ],
    cta: 'Ver como funciona'
  },
  'conexao-telecom': {
    summary: 'Planos de telefonia móvel com internet de qualidade. Cobertura nacional, portabilidade grátis e benefícios exclusivos do iGreen Club.',
    benefits: [
      'Planos a partir de 11GB por mês',
      'Cobertura em todo Brasil',
      'Portabilidade grátis e rápida',
      'iGreen Club GRÁTIS incluso',
      'Descontos em +600 mil estabelecimentos',
      'Sem taxa de adesão'
    ],
    cta: 'Ver planos disponíveis'
  },
  'conexao-expansao': {
    summary: 'Torne-se parceiro iGreen. Construa sua rede, indique clientes e licenciados, e alcance comissões recorrentes, bônus e viagens.',
    benefits: [
      'Comissões recorrentes por cliente',
      'Bônus por novos licenciados',
      'Sistema de qualificação progressivo',
      'Treinamento e suporte completo',
      'Viagens e prêmios por desempenho',
      'Trabalhe de onde quiser'
    ],
    cta: 'Quero ser parceiro'
  }
};

const ProductModal: FC<ProductModalProps> = ({ solution, isOpen, onClose }) => {
  if (!isOpen || !solution) return null;

  const details = productDetails[solution.id];

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-[scale-in_0.3s_ease-out] border border-gray-100 dark:border-gray-800"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-6 sm:px-8 py-6 flex items-start justify-between z-10">
            <div className="flex-1 pr-8">
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {solution.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {solution.subtitle}
              </p>
            </div>
            
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 sm:px-8 py-6 space-y-6">
            {/* Summary */}
            <div>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {details.summary}
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                Principais Benefícios
              </h3>
              <ul className="space-y-3">
                {details.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400 mt-2" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-gradient-to-t from-white dark:from-gray-900 via-white dark:via-gray-900 to-transparent px-6 sm:px-8 py-6 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to={`/${solution.id.replace('conexao-', '')}`}
                className="flex-1 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold text-center transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                onClick={onClose}
              >
                Saiba Mais
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/55519996693018"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-xl font-semibold text-center transition-colors"
              >
                {details.cta}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default ProductModal;
