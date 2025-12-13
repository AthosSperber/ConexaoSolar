export default function Green() {
  return (
    <section
      id="green"
      className="px-4 py-12 bg-white"
    >
      <div className="max-w-md mx-auto text-center">
        {/* Título principal – PROBLEMA / BENEFÍCIO */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Pague menos na conta de luz sem investir nada
        </h2>

        {/* Subtítulo – nome oficial */}
        <p className="text-sm text-green-600 font-semibold mb-6">
          Conexão Green
        </p>

        {/* Resumo direto */}
        <ul className="text-left text-gray-700 space-y-3 mb-8">
          <li>✔ Economia todo mês direto na conta de luz</li>
          <li>✔ Não precisa instalar nada no imóvel</li>
          <li>✔ Sem obras, sem dor de cabeça</li>
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/5519996693018?text=Olá!%20Vi%20o%20QR%20Code%20e%20quero%20entender%20como%20economizar%20na%20conta%20de%20luz%20sem%20investir."
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-600 text-white py-4 rounded-2xl font-semibold text-base hover:bg-green-700 transition"
        >
          Falar no WhatsApp e entender se funciona pra mim
        </a>
      </div>
    </section>
  );
}
