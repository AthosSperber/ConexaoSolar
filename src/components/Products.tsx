import { Zap, Sun, Home, Building2, Wifi } from 'lucide-react';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Products() {
  return (
    <section
      id="produtos"
      className="px-4 py-10 bg-gray-50"
    >
      {/* Título */}
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-3">
        Como você quer economizar hoje?
      </h2>

      {/* Subtítulo */}
      <p className="text-center text-gray-600 text-sm mb-8 max-w-md mx-auto">
        Escolha a opção que mais combina com sua situação.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
        <button
          onClick={() => scrollTo('green')}
          className="card flex items-center gap-3 text-left"
        >
          <Zap className="text-green-600 shrink-0" />
          <span>
            <strong className="block text-gray-900">
              Conta de luz alta todo mês
            </strong>
            <span className="text-sm text-gray-600">
              Economize sem mudar seus hábitos
            </span>
          </span>
        </button>

        <button
          onClick={() => scrollTo('solar')}
          className="card flex items-center gap-3 text-left"
        >
          <Sun className="text-green-600 shrink-0" />
          <span>
            <strong className="block text-gray-900">
              Energia solar sem gastar
            </strong>
            <span className="text-sm text-gray-600">
              Sem obra, sem instalação
            </span>
          </span>
        </button>

        <button
          onClick={() => scrollTo('placas')}
          className="card flex items-center gap-3 text-left"
        >
          <Home className="text-green-600 shrink-0" />
          <span>
            <strong className="block text-gray-900">
              Placas solares no imóvel
            </strong>
            <span className="text-sm text-gray-600">
              Valorize sua casa ou empresa
            </span>
          </span>
        </button>

        <button
          onClick={() => scrollTo('livre')}
          className="card flex items-center gap-3 text-left"
        >
          <Building2 className="text-green-600 shrink-0" />
          <span>
            <strong className="block text-gray-900">
              Empresa pagando energia cara
            </strong>
            <span className="text-sm text-gray-600">
              Reduza custos operacionais
            </span>
          </span>
        </button>

        <button
          onClick={() => scrollTo('telecom')}
          className="card flex items-center gap-3 text-left"
        >
          <Wifi className="text-green-600 shrink-0" />
          <span>
            <strong className="block text-gray-900">
              Internet ou celular caro
            </strong>
            <span className="text-sm text-gray-600">
              Planos mais baratos disponíveis
            </span>
          </span>
        </button>
      </div>
    </section>
  );
}
