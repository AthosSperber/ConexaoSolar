export default function Hero() {
  return (
    <section className="bg-white px-4 pt-12 pb-8 text-center">
      {/* Headline */}
      <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-4 max-w-xl mx-auto">
        Pague menos na conta de luz
        <br />
        <span className="text-green-600">sem instalar nada</span>
      </h1>

      {/* Subheadline */}
      <p className="text-gray-600 text-base mb-8 max-w-md mx-auto">
        Economize todos os meses com soluções simples e legais.
        Sem obras, sem burocracia e sem dor de cabeça.
      </p>

      {/* CTA */}
      <div className="flex flex-col gap-4 max-w-sm mx-auto">
        <a
          href="#produtos"
          className="bg-green-600 text-white py-4 rounded-2xl font-semibold text-base hover:bg-green-700 transition shadow-md"
        >
          Quero economizar agora
        </a>

        <a
          href="https://wa.me/5519996693018"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-green-600 text-green-600 py-4 rounded-2xl font-semibold text-base hover:bg-green-50 transition"
        >
          Falar com um especialista no WhatsApp
        </a>
      </div>

      {/* Trust / reassurance */}
      <div className="mt-8 text-sm text-gray-500">
        ✔ Sem fidelidade &nbsp; • &nbsp; ✔ Sem instalação &nbsp; • &nbsp; ✔ 100% legal
      </div>
    </section>
  );
}
