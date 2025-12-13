export default function Livre() {
  return (
    <section id="livre" className="section bg-white scroll-mt-24">
      <div className="container-mobile">
        <img
          src="/assets/images/company-energy.jpg"
          className="w-full rounded-3xl shadow-sm mb-8"
          alt="Energia para empresas"
        />

        <h2 className="text-2xl font-extrabold mb-2">
          Energia mais barata para empresas
        </h2>

        <p className="product-tag mb-4">Conexão Livre</p>

        <p className="text-gray-600 mb-6">
          Solução voltada para empresas que pagam caro na energia e buscam reduzir
          custos de forma legal.
        </p>

        <ul className="space-y-3 mb-8">
          <li>✓ Redução de custos operacionais</li>
          <li>✓ Processo regulamentado</li>
          <li>✓ Sem troca de equipamentos</li>
        </ul>

        <a href="https://wa.me/55SEUNUMEROAQUI" target="_blank" className="btn-primary block text-center">
          Avaliar minha empresa
        </a>
      </div>
    </section>
  );
}
