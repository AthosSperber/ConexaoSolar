import { Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 group"
          aria-label="ConexãoSolar - Página inicial"
        >
          <div className="bg-green-600 p-2 rounded-lg group-hover:bg-green-700 transition-colors">
            <Sun className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-800">
            Conexão<span className="text-green-600">Solar</span>
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('produtos')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Produtos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Contato
            </button>
          </li>
        </ul>

        <a
          href="https://wa.me/5519999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors hidden md:block"
        >
          Fale Conosco
        </a>

        <button
          onClick={() => scrollToSection('contato')}
          className="md:hidden bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
        >
          Contato
        </button>
      </nav>
    </header>
  );
}
