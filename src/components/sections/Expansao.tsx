import Accordion from '../ui/Accordion';
import { CheckCircle2, TrendingUp } from 'lucide-react';
import { buildWhatsAppUrl } from '../../config/whatsapp';

export default function Expansao() {
  return (
    <section id="expansao" className="scroll-snap-section bg-emerald-50/40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <span className="product-tag text-emerald-600 dark:text-emerald-400 font-semibold text-xs sm:text-sm uppercase tracking-wide">Conexão Expansão</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-3 mb-4 md:mb-6">Parceria comercial iGreen</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Atue como parceiro indicando as soluções iGreen. O comissionamento segue regras e condições definidas em contrato, com transparência e sem promessas de renda garantida.
          </p>
        </div>

        {/* Como funciona a parceria */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-900/70 dark:to-emerald-950/20 rounded-3xl p-8 md:p-12 mb-12 border border-emerald-200/80 dark:border-emerald-900/30">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Como funciona</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/90 dark:bg-gray-900/70 rounded-2xl p-6 shadow-md hover:shadow-lg transition border border-emerald-100/70 dark:border-emerald-900/30">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Indicação de clientes</p>
              <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-2">Você indica</div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold mb-4">As soluções iGreen que fazem sentido para cada perfil</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Nós apoiamos com materiais, atendimento e etapas do processo</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-3 italic">Elegibilidade e prazos variam por produto</p>
            </div>

            <div className="bg-white/90 dark:bg-gray-900/70 rounded-2xl p-6 shadow-md hover:shadow-lg transition border border-emerald-100/70 dark:border-emerald-900/30">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Comissionamento</p>
              <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-2">Conforme contrato</div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold mb-4">Regras e condições claras antes de formalizar</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sem promessa de renda garantida; resultados variam</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-3 italic">Política comercial pode mudar conforme campanha</p>
            </div>
          </div>
        </div>

        {/* Portfólio para indicar */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Soluções que você pode indicar</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm min-w-[520px]">
              <thead>
                <tr className="bg-emerald-100 dark:bg-emerald-900 border-b-2 border-emerald-600 dark:border-emerald-500">
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Produto</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700 dark:text-gray-300">Para quem</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700 dark:text-gray-300">Resumo</th>
                </tr>
              </thead>
              <tbody className="bg-white/90 dark:bg-gray-900/70">
                <tr className="border-b border-emerald-100/70 dark:border-emerald-900/30 hover:bg-emerald-50/70 dark:hover:bg-emerald-950/15">
                  <td className="px-4 py-3 font-semibold text-emerald-600 dark:text-emerald-400">Green</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Residencial/Comercial</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Créditos aplicados na fatura da distribuidora, sem instalação no imóvel</td>
                </tr>
                <tr className="border-b border-emerald-100/70 dark:border-emerald-900/30 hover:bg-emerald-50/70 dark:hover:bg-emerald-950/15">
                  <td className="px-4 py-3 font-semibold text-yellow-600 dark:text-yellow-400">Solar</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Imóvel com telhado</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Instalação com investimento iGreen (comodato), mediante viabilidade</td>
                </tr>
                <tr className="border-b border-emerald-100/70 dark:border-emerald-900/30 hover:bg-emerald-50/70 dark:hover:bg-emerald-950/15">
                  <td className="px-4 py-3 font-semibold text-blue-600 dark:text-blue-400">Placas</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Quem quer investir</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Projeto e instalação do sistema fotovoltaico com compra de equipamentos</td>
                </tr>
                <tr className="border-b border-emerald-100/70 dark:border-emerald-900/30 hover:bg-emerald-50/70 dark:hover:bg-emerald-950/15">
                  <td className="px-4 py-3 font-semibold text-purple-600 dark:text-purple-400">Livre</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Empresas (média/alta tensão)</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Migração assistida para o mercado livre de energia, com gestão e transparência</td>
                </tr>
                <tr className="border-b border-emerald-100/70 dark:border-emerald-900/30 hover:bg-emerald-50/70 dark:hover:bg-emerald-950/15">
                  <td className="px-4 py-3 font-semibold text-indigo-600 dark:text-indigo-400">Telecom</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Público geral</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Planos móveis com internet acumulada e iGreen Club incluso</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 text-center mt-4">
            A elegibilidade e as condições variam por produto e por região.
          </p>
        </div>

        {/* Orientações */}
        <div className="space-y-4 mb-12">
          <Accordion title="📌 O que você recebe ao começar">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border-2 border-emerald-300 dark:border-emerald-700">
                <h4 className="font-bold text-emerald-900 dark:text-emerald-200 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 dark:text-emerald-300" />
                  Materiais e suporte
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Você recebe materiais de apresentação e orientações sobre o processo de cada produto.</p>
                <p className="text-xs text-gray-600 dark:text-gray-300 bg-emerald-50/70 dark:bg-emerald-950/20 rounded px-3 py-2 border border-emerald-100/70 dark:border-emerald-900/30">Condições e regras são sempre informadas antes de qualquer compromisso.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-200 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-700 dark:text-blue-300" />
                  Processo comercial claro
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Você indica o cliente, nós ajudamos a qualificar e conduzir as etapas (proposta, documentação e implantação quando aplicável).</p>
                <p className="text-xs text-gray-600 dark:text-gray-300 bg-emerald-50/70 dark:bg-emerald-950/20 rounded px-3 py-2 border border-emerald-100/70 dark:border-emerald-900/30">Elegibilidade, prazos e comissionamento variam por produto e região.</p>
              </div>
            </div>
          </Accordion>

          <Accordion title="💡 Boas práticas (sem promessas)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700 dark:text-gray-300">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-700">
                <p className="font-bold text-emerald-700 dark:text-emerald-400 mb-3">Para começar bem:</p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>▸ Entenda o perfil do cliente antes de indicar</li>
                  <li>▸ Use os materiais oficiais e seja transparente</li>
                  <li>▸ Evite promessas de economia/ganhos sem simulação</li>
                  <li>▸ Priorize atendimento e acompanhamento</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                <p className="font-bold text-blue-700 dark:text-blue-400 mb-3">Para evoluir:</p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>▸ Acompanhe indicadores e retornos dos clientes</li>
                  <li>▸ Participe dos treinamentos e atualizações</li>
                  <li>▸ Organize seu funil com foco em qualidade</li>
                  <li>▸ Mantenha comunicação clara e ética</li>
                </ul>
              </div>
            </div>
          </Accordion>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
          <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h3 className="text-3xl font-extrabold mb-3">Quer entender como funciona a parceria?</h3>
          <p className="text-lg text-emerald-50 mb-8 max-w-3xl mx-auto">Fale com um especialista para conhecer regras, elegibilidade e condições de comissionamento, com total transparência.</p>
          <a 
            href={buildWhatsAppUrl('Quero conhecer a Conexão Expansão (parceria comercial) e entender as regras e condições')} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-block bg-emerald-50 text-emerald-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-100 active:scale-[0.98] transition shadow-lg"
          >
            Quero falar com um especialista
          </a>
          <p className="text-sm text-emerald-100 mt-6">Materiais e regras são apresentados antes da formalização.</p>
        </div>
      </div>
    </section>
  );
}
