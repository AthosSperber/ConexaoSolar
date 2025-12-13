export default function Solar() {
  return (
    <section id="solar" className="section bg-white scroll-mt-24">
      <div className="container-mobile">
        <img
          src="/assets/images/solar-roof.jpg"
          className="w-full rounded-3xl shadow-sm mb-8"
          alt="Energia solar no imóvel"
        />

        <h2 className="text-2xl font-extrabold mb-2">
          Energia solar sem investimento inicial
        </h2>

        <p className="product-tag mb-4">Conexão Solar</p>

        <p className="text-gray-600 mb-6">
          Painéis solares são instalados no imóvel sem custo inicial,
          gerando economia mensal na conta de luz.
        </p>

        <ul className="space-y-3 mb-8">
          <li>✓ Sem compra de placas</li>
          <li>✓ Economia desde o início</li>
          <li>✓ Contrato claro e transparente</li>
        </ul>

        <div className="info-box mb-8">
          <p className="text-sm text-gray-600">
            Uma análise é feita antes para verificar se o imóvel se encaixa.
          </p>
        </div>

        <a href="https://wa.me/55SEUNUMEROAQUI" target="_blank" className="btn-primary block text-center">
          Ver se meu imóvel pode participar
        </a>
      </div>
    </section>
  );
}
