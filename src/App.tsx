import { Suspense, lazy } from 'react';
import Header from './components/layout/Header.tsx';
import Footer from './components/layout/Footer.tsx';
import WhatsAppButton from './components/ui/WhatsAppButton';
import Hero from './components/sections/Hero';

const ProductCarousel = lazy(() => import('./components/sections/ProductCarousel'));
const Products = lazy(() => import('./components/sections/Products.tsx'));
const Green = lazy(() => import('./components/sections/Green.tsx'));
const Solar = lazy(() => import('./components/sections/Solar.tsx'));
const Placas = lazy(() => import('./components/sections/Placas.tsx'));
const Livre = lazy(() => import('./components/sections/Livre.tsx'));
const Telecom = lazy(() => import('./components/sections/Telecom.tsx'));
const Contact = lazy(() => import('./components/sections/Contact.tsx'));

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
