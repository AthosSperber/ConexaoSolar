import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { productDetails } from '../data/productDetails';
import Accordion from '../components/ui/Accordion';

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  
  const product = productId ? productDetails[productId] : null;

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const whatsappUrl = `https://wa.me/55519996693018?text=${encodeURIComponent(product.cta.whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 via-emerald-50/50 to-gray-50 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-semibold text-sm uppercase tracking-wide rounded-full mb-6">
              {product.tagline}
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              {product.hero.headline}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
              {product.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-bold rounded-xl transition-colors shadow-lg hover:shadow-xl text-base sm:text-lg group"
              >
                <MessageCircle className="w-5 h-5" />
                {product.cta.primary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              {product.cta.secondary && (
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl transition-colors text-base sm:text-lg"
                >
                  {product.cta.secondary}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Por Que Escolher {product.title}?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
              Vantagens que fazem a diferença para você
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {product.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-600 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 md:py-24 bg-gray-100 dark:bg-gray-850 border-t border-gray-200 dark:border-gray-700">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Como Funciona
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
              Processo simples e transparente
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {product.howItWorks.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 items-start bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-600 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-400">
              Tire suas dúvidas sobre {product.title}
            </p>
          </div>

          <div className="space-y-4">
            {product.faq.map((item, index) => (
              <Accordion key={index} title={item.question}>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-green-600 to-emerald-600 border-t border-green-700">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Pronto Para Começar?
          </h2>
          <p className="text-lg sm:text-xl text-green-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Fale com nossos especialistas e descubra como {product.title} pode beneficiar você
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-green-700 font-bold rounded-xl transition-colors shadow-lg text-base sm:text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl transition-colors text-base sm:text-lg"
            >
              Voltar para Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
