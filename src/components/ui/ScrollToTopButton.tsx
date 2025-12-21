import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 240);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      aria-label="Voltar ao topo"
      onClick={handleClick}
      className={`fixed z-40 bottom-5 right-5 md:bottom-8 md:right-8 p-3 rounded-full shadow-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 ${visible ? 'opacity-90' : 'opacity-0 pointer-events-none'}`}
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
