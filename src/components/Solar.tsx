export default function Solar() {
  return (
    <section
      id="solar"
      className="px-4 py-12 bg-gray-50"
    >
      <div className="max-w-md mx-auto text-center">
        {/* Título – problema/benefício */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Use energia solar e pague menos na conta
        </h2>

        {/* Subtítulo – nome oficial */}
        <p className="text-sm text-green-600 font-semibold mb-6">
          Conexão Solar
        </p>

        {/* Resumo direto */}
        <ul className="text-left text-gray-700 space-y-3 mb-8">
          <li>✔ Economia mensal direto na conta de luz</li>
          <li>✔ Não precisa instalar placas no imóvel</li>
          <li>✔ Energia limpa, segura e sem burocracia</li>
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/5519996693018?text=Olá!%20Vi%20o%20QR%20Code%20e%20quero%20entender%20como%20funciona%20a%20energia%20solar%20sem%20instalar%20placas."
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-600 text-white py-4 rounded-2xl font-semibold text-base hover:bg-green-700 transition"
        >
          Falar no WhatsApp e ver se posso usar
        </a>
      </div>
    </section>
  );
}
