import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * PageTransition: Aplica um fade suave entre trocas de rota.
 * Mobile first, responsivo, sem impactar performance.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [fade, setFade] = useState<'in' | 'out'>('in');

  useEffect(() => {
    setFade('out');
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setFade('in');
    }, 180); // duração do fade-out
    return () => clearTimeout(timeout);
  }, [location.pathname, children]);

  return (
    <div
      className={`transition-opacity duration-200 ease-in-out ${fade === 'in' ? 'opacity-100' : 'opacity-0'}`}
      style={{ minHeight: '100dvh' }}
    >
      {displayChildren}
    </div>
  );
}
