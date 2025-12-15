import Accordion from '../ui/Accordion';
import { CheckCircle2, TrendingUp } from 'lucide-react';

export default function Expansao() {
  return (
    <section id="expansao" className="scroll-snap-section bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <span className="product-tag text-emerald-600 dark:text-emerald-400 font-semibold text-xs sm:text-sm uppercase tracking-wide">Conexão Expansão</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-3 mb-4 md:mb-6">Multiplique sua rede e seus ganhos</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Indique novos licenciados, forme sua equipe e alcance bônus, prêmios, viagens e comissões em escala. É o caminho para quem quer crescer rápido e construir uma carreira de sucesso na iGreen.
          </p>
        </div>

        {/* Ganhos por Novo Licenciado */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 md:p-12 mb-12 border border-emerald-200">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Ganhe por Cada Novo Licenciado</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 dark:border dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Licenciado Direto</p>
              <div className="text-5xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-1">R$ 300</div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold mb-4">A cada novo licenciado</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">+ Royalties Expansão até R$300</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-3 italic">Conforme nível de qualificação</p>
            </div>

            <div className="bg-white dark:bg-gray-900 dark:border dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Licenciado Indireto (PRO)</p>
              <div className="text-5xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-1">R$ 100</div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold mb-4">A cada novo licenciado</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">+ Royalties Expansão até R$300</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-3 italic">Conforme nível de qualificação</p>
            </div>
          </div>
        </div>

        {/* Tabela de Comissões por Conexão */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Comissões por Tipo de Conexão</h3>
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="w-full text-xs sm:text-sm min-w-[600px]">
              <thead>
                <tr className="bg-emerald-100 dark:bg-emerald-900 border-b-2 border-emerald-600 dark:border-emerald-500">
                  <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white">Conexão</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700 dark:text-gray-300">GP (Própria)</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700 dark:text-gray-300">GI PRO (Indireta)</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700 dark:text-gray-300">RO (Royalties)</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700 dark:text-gray-300">Base</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900">
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-3 font-semibold text-emerald-600 dark:text-emerald-400">Green</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Até 4%</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Até 1%</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Até 1,5%</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">Sobre fatura</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-3 font-semibold text-yellow-600 dark:text-yellow-400">Solar</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">2% + Bônus</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">0,50%</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Até 0,75%</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">Sobre fatura</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-3 font-semibold text-blue-600 dark:text-blue-400">Placas</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">10%</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">1%</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Até 1,5%</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">Sobre projeto</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-3 font-semibold text-purple-600 dark:text-purple-400">Livre</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Até 2%</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Até 0,50%</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Até 0,75%</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">Sobre fatura</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-3 font-semibold text-indigo-600 dark:text-indigo-400">Telecom</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">R$ 7,00</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">R$ 1,00</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Até R$ 5,00</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">Por plano</td>
                </tr>
                <tr className="bg-emerald-50 dark:bg-emerald-900/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/50">
                  <td className="px-4 py-3 font-semibold text-emerald-700">Expansão (PRO)</td>
                  <td className="px-4 py-3 font-bold text-emerald-700">R$ 300</td>
                  <td className="px-4 py-3 font-bold text-emerald-700">R$ 100</td>
                  <td className="px-4 py-3 font-bold text-emerald-700">R$ 300</td>
                  <td className="px-4 py-3 text-gray-600 text-xs">Por licenciado</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 text-center mt-4">
            GP: Geração Própria | GI PRO: Geração Indireta PRO | RO: Royalties
          </p>
        </div>

        {/* Missão de 10 Dias */}
        <div className="space-y-4 mb-12">
          <Accordion title="⏱️ MISSÃO: Seu Investimento de Volta em 10 Dias">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border-2 border-emerald-300">
                <h4 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                  <span className="bg-emerald-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                  Conectar 5 Clientes Diretos
                </h4>
                <p className="text-sm text-gray-700 mb-3"><strong>Tipo:</strong> Conexão Green e/ou Telecom (com Portabilidade)</p>
                <p className="text-sm font-semibold text-emerald-600 mb-2">✓ Você garante: Recorrência IMEDIATA de cada cliente</p>
                <p className="text-xs text-gray-600 bg-white rounded px-3 py-2">Ao conectar os 5 clientes, você se qualifica como <strong>PRO</strong> → saiba mais em igreenenergy.com.br/licenciado-pro</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-300">
                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                  5 Clientes + 2 Licenciados (em 10 dias)
                </h4>
                <p className="text-sm text-gray-700 mb-3"><strong>Pré-requisito:</strong> Contratos assinados no sistema nos primeiros 10 dias</p>
                <p className="text-sm font-semibold text-blue-600 mb-2">✓ Garantias ao Concluir:</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Comissão das Conexão Green ou Telecom</li>
                  <li>• Comissão da Expansão (R$300 de cada Licenciado Direto)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-300">
                <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                  <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
                  Seus 2 Licenciados com 5 Clientes Cada
                </h4>
                <p className="text-sm text-gray-700 mb-3"><strong>Meta:</strong> Cada licenciado conectando 5 novos clientes diretos</p>
                <p className="text-sm font-semibold text-purple-600 mb-2">✓ MISSÃO CUMPRIDA - Garantias:</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Qualificação a S-EXPANSÃO (nível superior)</li>
                  <li>• Retorno do investimento da Licença atual</li>
                  <li>• Comissão das Conexão Green ou Telecom</li>
                  <li>• Comissão da Expansão (R$300 de cada Licenciado)</li>
                  <li>• Royalties desbloqueados</li>
                  <li>• Bônus Extra para completar R$ 1.997,00</li>
                </ul>
              </div>
            </div>
          </Accordion>

          <Accordion title="💡 Dicas para Expansão">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700 dark:text-gray-300">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-700">
                <p className="font-bold text-emerald-700 dark:text-emerald-400 mb-3">🚀 Para Licenciados Iniciantes:</p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>▸ Lista Inicial de 100 nomes</li>
                  <li>▸ 2 a 4 convites por dia</li>
                  <li>▸ Adicionar 3 novos prospectos em lista/dia</li>
                  <li>▸ Mostrar pelo menos 3 planos/dia</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                <p className="font-bold text-blue-700 dark:text-blue-400 mb-3">⭐ Para Licenciados PRO:</p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>▸ Praticar a metodologia</li>
                  <li>▸ Guiar seu time a ser PRO</li>
                  <li>▸ Participar treinamentos ao vivo</li>
                  <li>▸ Assistir vídeos + Material de Apoio</li>
                </ul>
              </div>
            </div>
          </Accordion>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
          <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h3 className="text-3xl font-extrabold mb-3">Pronto para Multiplicar seus Ganhos?</h3>
          <p className="text-lg text-emerald-50 mb-8 max-w-3xl mx-auto">Indique novos licenciados, forme sua equipe e alcance comissões em escala. Seu caminho para uma carreira de sucesso começa agora.</p>
          <a 
            href="https://wa.me/5519996693018?text=Quero%20ser%20Licenciado%20iGreen" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-block bg-white text-emerald-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 active:scale-[0.98] transition shadow-lg"
          >
            Quero ser Licenciado iGreen
          </a>
          <p className="text-sm text-emerald-100 mt-6">Mais informações: igreenenergy.com.br/manual-expansao-igreen</p>
        </div>
      </div>
    </section>
  );
}
