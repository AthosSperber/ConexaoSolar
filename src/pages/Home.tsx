import { Suspense, lazy } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import SolutionsSection from '../components/sections/SolutionsSection';
import IgreenBenefits from '../components/sections/IgreenBenefits';
import BenefitsSection from '../components/sections/BenefitsSection';
import CTASection from '../components/sections/CTASection';

const Contact = lazy(() => import('../components/sections/Contact'));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SolutionsSection />
      <IgreenBenefits />
      <BenefitsSection />
      <CTASection />

      <Suspense fallback={<div className="py-16 text-center">Carregando conteúdo...</div>}>
        <Contact />
      </Suspense>
    </>
  );
}
