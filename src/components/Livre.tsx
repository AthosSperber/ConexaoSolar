export default function Livre() {
  return (
    <section
      id="livre"
      className="px-4 py-12 bg-gray-50"
    >
      <div className="max-w-md mx-auto text-center">
        {/* Título – problema/benefício */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Reduza o custo de energia da sua empresa
        </h2>

        {/* Subtítulo – nome oficial */}
        <p className="text-sm text-green-600 font-semibold mb-6">
          Conexão Livre
        </p>

        {/* Resumo direto */}
        <ul className="text-left text-gray-700 space-y-3 mb-8">
          <li>✔ Economia significativa na conta de energia</li>
          <li>✔ Ideal para empresas com consumo elevado</li>
          <li>✔ Redução de custos fixos mês a mês</li>
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/5519996693018?text=Olá!%20Vi%20o%20QR%20Code%20e%20quero%20entender%20como%20minha%20empresa%20pode%20reduzir%20o%20custo%20com%20energia."
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-600 text-white py-4 rounded-2xl font-semibold text-base hover:bg-green-700 transition"
        >
          Falar no WhatsApp e analisar minha empresa
        </a>
      </div>
    </section>
  );
}
