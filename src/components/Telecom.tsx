export default function Telecom() {
  return (
    <section id="telecom" className="section bg-gray-50 scroll-mt-24">
      <div className="container-mobile">
        <img
          src="/assets/images/mobile-internet.jpg"
          className="w-full rounded-3xl shadow-sm mb-8"
          alt="Planos de celular"
        />

        <h2 className="text-2xl font-extrabold mb-2">
          Seu plano de celular está caro?
        </h2>

        <p className="product-tag mb-4">Conexão Telecom</p>

        <p className="text-gray-600 mb-6">
          Planos mais vantajosos com internet, ligações e benefícios adicionais.
        </p>

        <ul className="space-y-3 mb-8">
          <li>✓ Planos flexíveis</li>
          <li>✓ Internet acumulativa</li>
          <li>✓ Atendimento simples</li>
        </ul>

        <a href="https://wa.me/55SEUNUMEROAQUI" target="_blank" className="btn-primary block text-center">
          Conhecer planos
        </a>
      </div>
    </section>
  );
}
