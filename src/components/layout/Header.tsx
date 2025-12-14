import { useEffect } from 'react';

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
    <header className="w-full bg-white sticky top-0 z-40 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-bold">CS</div>
          <div>
            <div className="text-sm font-semibold text-gray-800">Conecta Solar</div>
            <div className="text-xs text-green-600">Energia inteligente</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-4 text-sm text-gray-700">
          <button onClick={() => scrollToId('produtos')} className="hover:text-green-600">Soluções</button>
          <button onClick={() => scrollToId('green')} className="hover:text-green-600">Conta de luz</button>
          <button onClick={() => scrollToId('solar')} className="hover:text-green-600">Solar</button>
          <button onClick={() => scrollToId('placas')} className="hover:text-green-600">Placas</button>
          <button onClick={() => scrollToId('contact')} className="hover:text-green-600">Contato</button>
        </nav>

        <div className="ml-4">
          <a href="#contact" onClick={() => scrollToId('contact')} className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700">Simule sua economia</a>
        </div>
      </div>
    </header>
  );
}
