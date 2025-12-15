import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { homeContent } from '../../data/texts';
import { ThemeToggle } from '../ui/ThemeToggle';

function scrollToId(id?: string) {
  if (!id) return;
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

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

  return (
    <header className="w-full bg-white dark:bg-gray-900 sticky top-0 z-40 border-b border-gray-100 dark:border-gray-800 transition-shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-bold">CS</div>
          <div>
            <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{homeContent.header.brand}</div>
            <div className="text-xs text-green-600 dark:text-green-400">{homeContent.header.tagline}</div>
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
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="md:hidden">
            <ThemeToggle />
          </div>
          {isHome ? (
            <button onClick={() => scrollToId('solucoes')} className="bg-green-600 text-white px-3 py-2 md:px-4 rounded-full text-xs md:text-sm font-semibold hover:bg-green-700 transition whitespace-nowrap">Simular</button>
          ) : (
            <Link to="/" className="bg-green-600 text-white px-3 py-2 md:px-4 rounded-full text-xs md:text-sm font-semibold hover:bg-green-700 transition inline-block whitespace-nowrap">Voltar</Link>
          )}
        </div>
      </div>
    </header>
  );
}
