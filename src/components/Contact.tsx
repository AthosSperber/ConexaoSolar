export default function Contact() {
  return (
    <section className="bg-white px-4 py-10 text-center">
      <h2 className="text-xl font-bold text-gray-900 mb-3">
        Ainda ficou alguma dúvida?
      </h2>

      <p className="text-gray-600 text-base mb-6 max-w-sm mx-auto">
        É normal. Cada casa e cada situação é diferente.
        Um especialista pode te explicar tudo de forma simples,
        sem compromisso.
      </p>

      <a
        href="https://wa.me/5519996693018"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl font-semibold text-base hover:bg-green-700 transition"
      >
        Conversar no WhatsApp
      </a>

      <p className="text-xs text-gray-500 mt-4">
        Atendimento rápido • Sem pressão • Sem obrigação
      </p>
    </section>
  );
}
