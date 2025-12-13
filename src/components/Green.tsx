export default function Green() {
  return (
    <section id="green" className="section bg-gray-50 scroll-mt-24">
      <div className="container-mobile">
        <img
          src="/assets/images/green-lightbill.jpg"
          className="w-full rounded-3xl shadow-sm mb-8"
          alt="Economia na conta de luz"
        />

        <h2 className="text-2xl font-extrabold mb-2">
          Sua conta de luz pesa no orçamento?
        </h2>

        <p className="product-tag mb-4">Conexão Green</p>

        <p className="text-gray-600 mb-6">
          Uma alternativa simples para reduzir a conta de luz sem instalar nada
          no imóvel e sem mudar sua rotina.
        </p>

        <ul className="space-y-3 mb-8">
          <li>✓ Economia mensal direto na fatura</li>
          <li>✓ Sem obras ou equipamentos</li>
          <li>✓ Processo simples e seguro</li>
        </ul>

        <div className="info-box mb-8">
          <p className="text-sm text-gray-600">
            Ideal para quem quer economizar sem mexer na estrutura da casa.
          </p>
        </div>

        <a href="https://wa.me/55SEUNUMEROAQUI" target="_blank" className="btn-primary block text-center">
          Ver se posso participar
        </a>
      </div>
    </section>
  );
}
