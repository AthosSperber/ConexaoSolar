import { Sun, Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                Conexão<span className="text-green-600">Solar</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Soluções inteligentes em energia solar para residências, comércios
              e propriedades rurais em Rio Claro - SP.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-green-600 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className="text-gray-400 hover:text-green-600 transition-colors"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-gray-400 hover:text-green-600 transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/conexaosolar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-green-600 p-3 rounded-lg transition-colors"
                aria-label="Instagram da ConexãoSolar"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/conexaosolar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-green-600 p-3 rounded-lg transition-colors"
                aria-label="Facebook da ConexãoSolar"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="mailto:contato@conexaosolar.com.br"
                className="bg-gray-800 hover:bg-green-600 p-3 rounded-lg transition-colors"
                aria-label="E-mail da ConexãoSolar"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} ConexãoSolar. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-sm">
            Energia Solar em Rio Claro - SP | Economia e Sustentabilidade
          </p>
        </div>
      </div>
    </footer>
  );
}
