import { Suspense, lazy } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import SolutionsSection from '../components/sections/SolutionsSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import CTASection from '../components/sections/CTASection';

const ProductCarousel = lazy(() => import('../components/sections/ProductCarousel'));
const Products = lazy(() => import('../components/sections/Products'));
const Green = lazy(() => import('../components/sections/Green'));
const Solar = lazy(() => import('../components/sections/Solar'));
const Placas = lazy(() => import('../components/sections/Placas'));
const Livre = lazy(() => import('../components/sections/Livre'));
const Telecom = lazy(() => import('../components/sections/Telecom'));
const Contact = lazy(() => import('../components/sections/Contact'));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SolutionsSection />
      <BenefitsSection />
      <CTASection />

      <Suspense fallback={<div className="py-16 text-center">Carregando conteúdo...</div>}>
        <Products />
        <ProductCarousel />
        <Green />
        <Solar />
        <Placas />
        <Livre />
        <Telecom />
        <Contact />
      </Suspense>
    </>
  );
}
