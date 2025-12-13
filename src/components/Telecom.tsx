export default function Telecom() {
  return (
    <section
      id="telecom"
      className="px-4 py-12 bg-white"
    >
      <div className="max-w-md mx-auto text-center">
        {/* Título – problema/benefício */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Pague menos por internet e celular
        </h2>

        {/* Subtítulo – nome oficial */}
        <p className="text-sm text-green-600 font-semibold mb-6">
          Conexão Telecom
        </p>

        {/* Resumo direto */}
        <ul className="text-left text-gray-700 space-y-3 mb-8">
          <li>✔ Planos mais baratos e adequados ao seu uso</li>
          <li>✔ Economia mensal sem perder qualidade</li>
          <li>✔ Opções para casa e empresa</li>
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/5519996693018?text=Olá!%20Vi%20o%20QR%20Code%20e%20quero%20saber%20como%20pagar%20menos%20por%20internet%20e%20telefonia."
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-600 text-white py-4 rounded-2xl font-semibold text-base hover:bg-green-700 transition"
        >
          Falar no WhatsApp e ver as opções
        </a>
      </div>
    </section>
  );
}
