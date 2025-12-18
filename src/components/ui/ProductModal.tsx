import { FC } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Solution } from '../../data/solutions';
import { Link } from 'react-router-dom';
import { buildWhatsAppUrl } from '../../config/whatsapp';
import { productDetails } from '../../data/productDetails';

interface ProductModalProps {
  solution: Solution | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: FC<ProductModalProps> = ({ solution, isOpen, onClose }) => {
  if (!isOpen || !solution) return null;

  const productKey = solution.id.replace(/^conexao-/, '');
  const product = productDetails[productKey];
  const whatsappUrl = buildWhatsAppUrl(
    product?.cta.whatsappMessage ?? `Olá! Quero saber mais sobre ${solution.title}`
  );
  const details = product?.preview ?? {
    summary: solution.description ?? '',
    benefits: [],
    cta: product?.cta.primary ?? 'Falar no WhatsApp'
  };

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
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-[scale-in_0.3s_ease-out] border border-emerald-100/70 dark:border-emerald-900/30"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white/95 dark:bg-gray-900/95 border-b border-emerald-100/70 dark:border-emerald-900/30 px-6 sm:px-8 py-6 flex items-start justify-between z-10">
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
              className="flex-shrink-0 p-2 rounded-full hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors"
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
          <div className="sticky bottom-0 bg-gradient-to-t from-emerald-50/90 dark:from-gray-950 via-emerald-50/60 dark:via-gray-950 to-transparent px-6 sm:px-8 py-6 border-t border-emerald-100/70 dark:border-emerald-900/30">
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
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/30 dark:hover:bg-emerald-950/40 text-emerald-900 dark:text-emerald-50 px-6 py-3 rounded-xl font-semibold text-center transition-colors border border-emerald-200/60 dark:border-emerald-900/30"
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
