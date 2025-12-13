export default function Placas() {
  return (
    <section id="placas" className="section bg-gray-50 scroll-mt-24">
      <div className="container-mobile">
        <img
          src="/assets/images/solar-install.jpg"
          className="w-full rounded-3xl shadow-sm mb-8"
          alt="Placas solares"
        />

        <h2 className="text-2xl font-extrabold mb-2">
          Gere sua própria energia
        </h2>

        <p className="product-tag mb-4">Conexão Placas</p>

        <p className="text-gray-600 mb-6">
          Sistema de energia solar com placas próprias, pensado para quem busca
          economia no longo prazo.
        </p>

        <ul className="space-y-3 mb-8">
          <li>✓ Sistema definitivo</li>
          <li>✓ Economia ao longo dos anos</li>
          <li>✓ Valorização do imóvel</li>
        </ul>

        <a href="https://wa.me/55SEUNUMEROAQUI" target="_blank" className="btn-primary block text-center">
          Solicitar orçamento
        </a>
      </div>
    </section>
  );
}
