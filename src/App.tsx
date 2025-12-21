import { Outlet, useLocation } from 'react-router-dom';
import PageTransition from './components/ui/PageTransition';
import { AppLayout } from './components/layout/AppLayout';
import Header from './components/layout/Header.tsx';
import Footer from './components/layout/Footer.tsx';
import WhatsAppButton from './components/ui/WhatsAppButton';
import ScrollToTopButton from './components/ui/ScrollToTopButton';
import { ConsultantProvider } from './config/consultant';
import { useEffect } from 'react';

export default function App() {
  const location = useLocation();

  // Scroll suave para o topo ao trocar de página (exceto hash links)
  useEffect(() => {
    const hash = location.hash?.trim();
    if (hash && hash !== '#') {
      // Hash navigation: scroll para o elemento com id
      const id = hash.startsWith('#') ? hash.slice(1) : hash;
      if (!id) return;
      let cancelled = false;
      const tryScroll = (attempt: number) => {
        if (cancelled) return;
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
        if (attempt < 3) {
          window.setTimeout(() => tryScroll(attempt + 1), 120);
        }
      };
      const raf = requestAnimationFrame(() => tryScroll(0));
      return () => {
        cancelled = true;
        cancelAnimationFrame(raf);
      };
    } else {
      // Mudança de página normal: scroll suave para o topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  return (
    <ConsultantProvider>
      <AppLayout>
        <Header />

      <main className="flex-grow">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

        <Footer />
        <ScrollToTopButton />
        <WhatsAppButton />
      </AppLayout>
    </ConsultantProvider>
  );
}
