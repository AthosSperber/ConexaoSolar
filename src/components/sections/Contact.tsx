export default function Contact() {
  return (
    <section id="contact" className="bg-white dark:bg-black px-4 py-10 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Ainda ficou alguma dúvida?</h2>

        <p className="text-gray-600 dark:text-gray-400 text-base mb-6">
          É normal. Cada casa e cada situação é diferente. Um especialista pode te explicar tudo de forma simples, sem compromisso.
        </p>

        <a
          href="https://wa.me/5519996693018"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 px-6 py-3 rounded-xl font-semibold text-base transition"
        >
          Conversar no WhatsApp
        </a>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">Atendimento rápido • Sem pressão • Sem obrigação</p>
      </div>
    </section>
  );
}
