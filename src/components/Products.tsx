import { Zap, Sun, Home, Building2, Wifi, MessageCircle } from 'lucide-react';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Products() {
  return (
    <section id="produtos" className="px-4 py-16 bg-gray-50">
      {/* Título */}
      <h2 className="text-center text-2xl font-extrabold text-gray-900 mb-3">
        Como você quer economizar hoje?
      </h2>

      {/* Subtítulo */}
      <p className="text-center text-gray-600 text-sm mb-10 max-w-sm mx-auto">
        Escolha a opção que mais combina com sua situação.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
        {/* Conexão Green */}
        <button
          onClick={() => scrollTo('green')}
          className="flex items-center gap-4 text-left p-5 rounded-3xl bg-white shadow-sm hover:shadow-md transition"
        >
          <div className="p-3 rounded-2xl bg-green-50">
            <Zap className="text-green-600" />
          </div>
          <span>
            <strong className="block text-gray-900">
              Conta de luz alta todo mês
            </strong>
            <span className="text-sm text-gray-600">
              Veja formas de economizar sem complicação
            </span>
          </span>
        </button>

        {/* Conexão Solar */}
        <button
          onClick={() => scrollTo('solar')}
          className="flex items-center gap-4 text-left p-5 rounded-3xl bg-white shadow-sm hover:shadow-md transition"
        >
          <div className="p-3 rounded-2xl bg-green-50">
            <Sun className="text-green-600" />
          </div>
          <span>
            <strong className="block text-gray-900">
              Energia solar sem investimento inicial
            </strong>
            <span className="text-sm text-gray-600">
              Descubra se seu imóvel pode participar
            </span>
          </span>
        </button>

        {/* Conexão Placas */}
        <button
          onClick={() => scrollTo('placas')}
          className="flex items-center gap-4 text-left p-5 rounded-3xl bg-white shadow-sm hover:shadow-md transition"
        >
          <div className="p-3 rounded-2xl bg-green-50">
            <Home className="text-green-600" />
          </div>
          <span>
            <strong className="block text-gray-900">
              Gerar sua própria energia
            </strong>
            <span className="text-sm text-gray-600">
              Solução definitiva com placas solares
            </span>
          </span>
        </button>

        {/* Conexão Livre */}
        <button
          onClick={() => scrollTo('livre')}
          className="flex items-center gap-4 text-left p-5 rounded-3xl bg-white shadow-sm hover:shadow-md transition"
        >
          <div className="p-3 rounded-2xl bg-green-50">
            <Building2 className="text-green-600" />
          </div>
          <span>
            <strong className="block text-gray-900">
              Empresa pagando energia cara
            </strong>
            <span className="text-sm text-gray-600">
              Avalie se sua empresa pode reduzir custos
            </span>
          </span>
        </button>

        {/* Conexão Telecom */}
        <button
          onClick={() => scrollTo('telecom')}
          className="flex items-center gap-4 text-left p-5 rounded-3xl bg-white shadow-sm hover:shadow-md transition"
        >
          <div className="p-3 rounded-2xl bg-green-50">
            <Wifi className="text-green-600" />
          </div>
          <span>
            <strong className="block text-gray-900">
              Internet ou celular caro
            </strong>
            <span className="text-sm text-gray-600">
              Veja planos mais vantajosos
            </span>
          </span>
        </button>

        {/* Consultor */}
        <a
          href="https://wa.me/55SEUNUMEROAQUI"
          target="_blank"
          className="flex items-center gap-4 p-5 rounded-3xl bg-green-600 text-white shadow-md hover:bg-green-700 transition"
        >
          <div className="p-3 rounded-2xl bg-white/20">
            <MessageCircle className="text-white" />
          </div>
          <span>
            <strong className="block">
              Quero falar com um consultor
            </strong>
            <span className="text-sm text-white/90">
              Tirar dúvidas sem compromisso
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
