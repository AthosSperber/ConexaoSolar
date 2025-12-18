import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { productDetails } from '../data/productDetails';
import Accordion from '../components/ui/Accordion';
import { buildWhatsAppUrl } from '../config/whatsapp';

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  
  const product = productId ? productDetails[productId] : null;

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const whatsappUrl = buildWhatsAppUrl(product.cta.whatsappMessage);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50/60 via-emerald-50/20 to-emerald-50/60 dark:from-gray-950 dark:via-emerald-950/15 dark:to-gray-950 border-b border-gray-200 dark:border-gray-700">
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
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/25 dark:hover:bg-emerald-950/35 text-emerald-900 dark:text-emerald-50 font-semibold rounded-xl transition-colors text-base sm:text-lg border border-emerald-200/60 dark:border-emerald-900/30"
                >
                  {product.cta.secondary}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 md:py-24 bg-emerald-50/40 dark:bg-gray-900">
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
                className="bg-white/90 dark:bg-gray-900/70 rounded-2xl p-6 sm:p-8 border border-emerald-100/70 dark:border-emerald-900/30 hover:border-green-500 dark:hover:border-green-600 transition-all duration-300 hover:shadow-lg"
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
      <section className="w-full py-16 md:py-24 bg-emerald-50/40 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
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
                className="flex gap-6 items-start bg-white/90 dark:bg-gray-900/70 rounded-2xl p-6 sm:p-8 border border-emerald-100/70 dark:border-emerald-900/30 hover:border-green-500 dark:hover:border-green-600 transition-all duration-300"
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
      <section className="w-full py-16 md:py-24 bg-emerald-50/40 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
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
      <section className="w-full py-12 md:py-16 bg-emerald-50/40 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 via-green-600 to-emerald-600 dark:from-green-700 dark:via-green-800 dark:to-emerald-800 p-8 sm:p-10 md:p-12 shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-300 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Pronto Para Começar?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-green-50 mb-8 max-w-2xl mx-auto leading-relaxed">
                Fale com nossos especialistas e descubra como {product.title} pode beneficiar você
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-50 hover:bg-emerald-100 text-green-800 font-bold rounded-xl transition-colors shadow-lg text-base sm:text-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/25 text-white font-semibold rounded-xl transition-colors text-base sm:text-lg border border-white/25"
                >
                  Voltar para Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
