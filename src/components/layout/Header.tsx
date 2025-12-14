import { useEffect } from 'react';
import { homeContent } from '../../data/texts';

function scrollToId(id?: string) {
  if (!id) return;
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Header() {
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
    <header className="w-full bg-white sticky top-0 z-40 border-b border-gray-100 transition-shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={() => scrollToId('hero')} className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-bold">CS</div>
          <div>
            <div className="text-sm font-semibold text-gray-800">{homeContent.header.brand}</div>
            <div className="text-xs text-green-600">{homeContent.header.tagline}</div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          {homeContent.header.links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToId(link.id)}
              className="hover:text-green-600 transition font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="ml-4">
          <button onClick={() => scrollToId('hero')} className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition">Simule sua economia</button>
        </div>
      </div>
    </header>
  );
}
