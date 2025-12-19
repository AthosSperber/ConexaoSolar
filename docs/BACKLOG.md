# 🗳️ Backlog de Funcionalidades do ConectaSolar

Este arquivo é o repositório para todas as ideias, funcionalidades futuras e melhorias que não estão no roadmap imediato, mas que fazem parte da visão de longo prazo do produto.

## Funcionalidades Futuras (Alto Impacto)

- [ ] **Área do Licenciado:**
  - [ ] Login/Autenticação para parceiros.
  - [ ] Dashboard para submeter e acompanhar leads.
  - [ ] Acesso a materiais de marketing e treinamento.
  - [ ] Visualização de comissões e ganhos.
  - [ ] Sistema de gamificação com níveis e recompensas.

- [ ] **Simulador de Economia Interativo:**
  - [ ] Formulário onde o usuário insere o valor da sua conta de luz e CEP.
  - [ ] O sistema calcula e exibe a economia potencial com cada tipo de "Conexão".
  - [ ] Comparação lado a lado entre diferentes soluções.
  - [ ] Gráficos de economia ao longo do tempo.

- [ ] **Área do Cliente:**
  - [ ] Login/Autenticação para clientes finais.
  - [ ] Dashboard para acompanhar o status da sua instalação ou a economia gerada.
  - [ ] Histórico de consumo e economia mensal.
  - [ ] Chat com suporte técnico.

- [ ] **Sistema de Avaliações e Depoimentos:**
  - [ ] Clientes podem avaliar e deixar feedback sobre o serviço.
  - [ ] Exibição de avaliações na home e páginas de produto.
  - [ ] Sistema de verificação de avaliações autênticas.

## Melhorias e Expansões

## Analytics / Conversão

- [ ] Escolher provedor de analytics (GA4 vs Umami vs Plausible).
- [ ] Dashboard mínimo: cliques em WhatsApp por seção (Hero / Para consultores iGreen) e cliques em "Simular".
- [ ] Capturar UTMs da URL e anexar na mensagem do WhatsApp (opcional).

- [ ] **Tracking de conversão (WhatsApp) + UTM:**
  - [ ] Capturar UTMs da URL e anexar na mensagem do WhatsApp.
  - [ ] Evento de clique no WhatsApp (para medir conversão por campanha).

- [ ] **Página de Depoimentos / Prova Social:**
  - [ ] Seção/página dedicada com depoimentos, antes/depois e perguntas comuns.
  - [ ] CTA para WhatsApp com contexto (ex.: “vim pelos depoimentos”).

- [ ] **Integração de formulário / CRM leve:**
  - [ ] Formulário opcional de lead (nome + WhatsApp + cidade/UF) com envio para e-mail/planilha/CRM.
  - [ ] Alternativa: integração com webhook (Zapier/Make) sem backend próprio.

- [ ] Refatorar os componentes `Expansao.tsx` e `iGreenClub.tsx` para serem mais dinâmicos e consumirem dados de uma estrutura mais robusta, em vez de estarem hard-coded.
- [ ] Criar uma página dedicada para cada "Conexão" (Green, Solar, Placas, Livre, Telecom, Expansão) com detalhes expandidos.
- [ ] Adicionar um blog ou seção de notícias com conteúdo sobre energia sustentável.
- [ ] Integração com APIs de geolocalização para personalizar a experiência do usuário.
- [ ] Sistema de notificações push para atualizações importantes.
- [ ] Chatbot inteligente para responder dúvidas frequentes.
- [ ] Vídeos explicativos sobre cada tipo de solução.
- [ ] Calculadora de impacto ambiental (CO2 economizado, árvores equivalentes).
- [ ] Integração com redes sociais para compartilhamento.
- [ ] Sistema de indicação com recompensas (gamificação).

## Otimizações Técnicas

- [ ] Implementar SSR (Server-Side Rendering) com Next.js para melhorar SEO.
- [ ] Adicionar testes unitários e de integração (Jest, React Testing Library).
- [ ] Implementar CI/CD pipeline automatizado.
- [ ] Otimização de imagens com compressão avançada e lazy loading.
- [ ] PWA (Progressive Web App) com suporte offline.
- [ ] Monitoramento de performance com ferramentas como Sentry ou LogRocket.
- [ ] Internacionalização (i18n) para suporte multi-idioma.

## UX/UI

- [ ] Implementação completa de Dark Mode / Light Mode.
- [ ] Animações mais sofisticadas com Framer Motion.
- [ ] Microinterações para melhorar feedback visual.
- [ ] Redesign do formulário de contato com validação em tempo real.
- [ ] Tooltips explicativos em campos técnicos.
- [ ] Tour guiado para novos usuários (onboarding).
