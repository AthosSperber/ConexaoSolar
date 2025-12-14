import { Suspense, lazy } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import Hero from './components/sections/Hero';

const ProductCarousel = lazy(() => import('./components/sections/ProductCarousel'));
const Products = lazy(() => import('./components/sections/Products'));
const Green = lazy(() => import('./components/sections/Green'));
const Solar = lazy(() => import('./components/sections/Solar'));
const Placas = lazy(() => import('./components/sections/Placas'));
const Livre = lazy(() => import('./components/sections/Livre'));
const Telecom = lazy(() => import('./components/sections/Telecom'));
const Contact = lazy(() => import('./components/sections/Contact'));

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Hero />

        <Suspense fallback={<div className="py-16 text-center">Carregando conteúdo...</div>}>
          <Products id="produtos" />
          <ProductCarousel />
          <Green />
          <Solar />
          <Placas />
          <Livre />
          <Telecom />
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton phone="5519996693018" />
    </div>
  );
}
