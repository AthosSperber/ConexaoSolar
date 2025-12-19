import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { homeContent } from '../../data/texts';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useConsultant } from '../../config/consultant';
import { track } from '../../lib/analytics';

function scrollToId(id?: string) {
  if (!id) return;
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!mq) return;

    const onChange = () => setReduced(mq.matches);
    onChange();

    // Safari fallback: addListener/removeListener
    if ('addEventListener' in mq) {
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    }

    // @ts-expect-error legacy
    mq.addListener(onChange);
    // @ts-expect-error legacy
    return () => mq.removeListener(onChange);
  }, []);

  return reduced;
}

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { consultant } = useConsultant();
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuPanelRef = useRef<HTMLDivElement | null>(null);
  const firstMobileNavItemRef = useRef<HTMLElement | null>(null);
  const shouldRestoreFocusRef = useRef(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuRendered, setIsMobileMenuRendered] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  function closeMobileMenu(options?: { restoreFocus?: boolean }) {
    const restoreFocus = options?.restoreFocus ?? true;
    shouldRestoreFocusRef.current = restoreFocus;
    setIsMobileMenuOpen(false);
  }

  const brandInitials = useMemo(() => {
    return consultant.brand.short
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0])
      .join('')
      .toUpperCase();
  }, [consultant.brand.short]);

  useEffect(() => {
    // add small shadow on scroll
    const onScroll = () => {
      const el = document.querySelector('header');
      if (!el) return;
      if (window.scrollY > 10) el.classList.add('shadow-sm');
      else el.classList.remove('shadow-sm');
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when navigating between pages.
    closeMobileMenu({ restoreFocus: false });
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuRendered(true);
      // Ensure we hit a second paint so transitions can run.
      requestAnimationFrame(() => setIsMobileMenuVisible(true));
      return;
    }

    setIsMobileMenuVisible(false);

    const delay = prefersReducedMotion ? 0 : 200;
    const timeout = window.setTimeout(() => {
      setIsMobileMenuRendered(false);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isMobileMenuOpen, prefersReducedMotion]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobileMenu({ restoreFocus: true });
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    // Close mobile menu when switching to desktop breakpoint.
    const mq = window.matchMedia?.('(min-width: 768px)'); // md
    if (!mq) return;

    const onChange = () => {
      if (mq.matches) closeMobileMenu({ restoreFocus: false });
    };

    onChange();

    if ('addEventListener' in mq) {
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    }

    // @ts-expect-error legacy
    mq.addListener(onChange);
    // @ts-expect-error legacy
    return () => mq.removeListener(onChange);
  }, []);

  const mobileMenuId = 'mobile-menu';

  function handleHomeNavClick(id?: string) {
    closeMobileMenu({ restoreFocus: true });
    scrollToId(id);
  }

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    if (!isMobileMenuRendered) return;
    if (!isMobileMenuVisible) return;

    const raf = requestAnimationFrame(() => {
      if (firstMobileNavItemRef.current) {
        firstMobileNavItemRef.current.focus();
        return;
      }

      // Fallback: focus the first focusable element inside the panel.
      const panel = mobileMenuPanelRef.current;
      if (!panel) return;
      panel
        .querySelector<HTMLElement>('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')
        ?.focus();
    });

    return () => cancelAnimationFrame(raf);
  }, [isMobileMenuOpen, isMobileMenuRendered, isMobileMenuVisible]);

  useEffect(() => {
    if (isMobileMenuOpen) return;
    if (!shouldRestoreFocusRef.current) return;

    shouldRestoreFocusRef.current = false;
    const raf = requestAnimationFrame(() => {
      menuButtonRef.current?.focus();
    });

    return () => cancelAnimationFrame(raf);
  }, [isMobileMenuOpen]);

  const motionClass = prefersReducedMotion
    ? 'motion-reduce:transition-none motion-reduce:transform-none'
    : 'transition duration-200 ease-out';

  return (
    <header className="w-full bg-white/80 dark:bg-gray-950/70 backdrop-blur sticky top-0 z-40 border-b border-emerald-100/70 dark:border-emerald-900/30 transition-shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold">
            {brandInitials || 'IG'}
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{consultant.brand.short}</div>
            <div className="text-xs text-green-600 dark:text-green-400">{consultant.brand.tagline}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-gray-700 dark:text-gray-300">
          {isHome && homeContent.header.links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToId(link.id)}
              className="hover:text-green-600 dark:hover:text-green-400 transition font-medium"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/parcerias"
            className="hover:text-green-600 dark:hover:text-green-400 transition font-medium"
          >
            Parcerias
          </Link>
          <Link
            to="/para-consultores"
            className="hover:text-green-600 dark:hover:text-green-400 transition font-medium"
          >
            Sou consultor iGreen
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="md:hidden">
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600/40"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls={mobileMenuId}
            ref={menuButtonRef}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>

          {isHome ? (
            <button
              onClick={() => {
                track('cta_click', {
                  consultantId: consultant.id,
                  placement: 'header',
                  cta: 'simulate',
                  action: 'scroll_to_solucoes',
                  pathname: location.pathname,
                });
                scrollToId('solucoes');
              }}
              className="bg-green-600 text-white px-3 py-2 md:px-4 rounded-full text-xs md:text-sm font-semibold hover:bg-green-700 transition whitespace-nowrap"
            >
              Simular
            </button>
          ) : (
            <Link to="/" className="bg-green-600 text-white px-3 py-2 md:px-4 rounded-full text-xs md:text-sm font-semibold hover:bg-green-700 transition inline-block whitespace-nowrap">Voltar</Link>
          )}
        </div>
      </div>

      {/* Overlay + panel */}
      {isMobileMenuRendered && (
        <div className="md:hidden">
          <div
            className={[
              'fixed inset-0 z-30 bg-black/30',
              motionClass,
              isMobileMenuVisible ? 'opacity-100' : 'opacity-0 pointer-events-none',
            ].join(' ')}
            aria-hidden="true"
            onClick={() => closeMobileMenu({ restoreFocus: true })}
          />
          <div
            id={mobileMenuId}
            ref={mobileMenuPanelRef}
            className={[
              'relative z-40 border-t border-emerald-100/70 dark:border-emerald-900/30 bg-white/90 dark:bg-gray-950/85 backdrop-blur',
              motionClass,
              isMobileMenuVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-2 pointer-events-none',
            ].join(' ')}
          >
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm text-gray-700 dark:text-gray-200">
              {isHome ? (
                <>
                  {homeContent.header.links.map((link, index) => (
                    <button
                      key={link.id}
                      ref={index === 0 ? (el) => { firstMobileNavItemRef.current = el; } : undefined}
                      onClick={() => handleHomeNavClick(link.id)}
                      className="text-left py-2 font-medium hover:text-green-600 dark:hover:text-green-400 transition"
                    >
                      {link.label}
                    </button>
                  ))}
                  <Link
                    to="/parcerias"
                    onClick={() => closeMobileMenu({ restoreFocus: true })}
                    className="py-2 font-medium hover:text-green-600 dark:hover:text-green-400 transition"
                  >
                    Parcerias
                  </Link>
                  <Link
                    to="/para-consultores"
                    onClick={() => closeMobileMenu({ restoreFocus: true })}
                    className="py-2 font-medium hover:text-green-600 dark:hover:text-green-400 transition"
                  >
                    Sou consultor iGreen
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    ref={(el) => { firstMobileNavItemRef.current = el; }}
                    onClick={() => closeMobileMenu({ restoreFocus: true })}
                    className="py-2 font-medium hover:text-green-600 dark:hover:text-green-400 transition"
                  >
                    Início
                  </Link>
                  <Link
                    to="/parcerias"
                    onClick={() => closeMobileMenu({ restoreFocus: true })}
                    className="py-2 font-medium hover:text-green-600 dark:hover:text-green-400 transition"
                  >
                    Parcerias
                  </Link>
                  <Link
                    to="/para-consultores"
                    onClick={() => closeMobileMenu({ restoreFocus: true })}
                    className="py-2 font-medium hover:text-green-600 dark:hover:text-green-400 transition"
                  >
                    Sou consultor iGreen
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}