import { Outlet, useLocation } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import Header from './components/layout/Header.tsx';
import Footer from './components/layout/Footer.tsx';
import WhatsAppButton from './components/ui/WhatsAppButton';
import { ConsultantProvider } from './config/consultant';
import { useEffect } from 'react';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Support hash links (e.g., /#contact) while keeping anchors effectively scoped to Home.
    if (location.pathname !== '/') return;
    const hash = location.hash?.trim();
    if (!hash || hash === '#') return;

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

      // Home sections may mount after navigation; retry a couple of times.
      if (attempt < 3) {
        window.setTimeout(() => tryScroll(attempt + 1), 120);
      }
    };

    // Defer to the next paint so Outlet content mounts.
    const raf = requestAnimationFrame(() => tryScroll(0));

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [location.pathname, location.hash]);

  return (
    <ConsultantProvider>
      <AppLayout>
        <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

        <Footer />
        <WhatsAppButton />
      </AppLayout>
    </ConsultantProvider>
  );
}
