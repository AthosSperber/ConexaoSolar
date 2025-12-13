export default function Placas() {
  return (
    <section
      id="placas"
      className="px-4 py-12 bg-white"
    >
      <div className="max-w-md mx-auto text-center">
        {/* Título – problema/benefício */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Gere sua própria energia e reduza drasticamente a conta de luz
        </h2>

        {/* Subtítulo – nome oficial */}
        <p className="text-sm text-green-600 font-semibold mb-6">
          Conexão Placas
        </p>

        {/* Resumo direto */}
        <ul className="text-left text-gray-700 space-y-3 mb-8">
          <li>✔ Economia muito maior ao longo do tempo</li>
          <li>✔ Ideal para quem é dono do imóvel</li>
          <li>✔ Valorização da casa ou empresa</li>
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/5519996693018?text=Olá!%20Vi%20o%20QR%20Code%20e%20quero%20entender%20se%20vale%20a%20pena%20instalar%20placas%20solares%20no%20meu%20imóvel."
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-600 text-white py-4 rounded-2xl font-semibold text-base hover:bg-green-700 transition"
        >
          Falar no WhatsApp e avaliar meu caso
        </a>
      </div>
    </section>
  );
}
