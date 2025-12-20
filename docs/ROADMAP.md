# 🗺️ Roadmap do Projeto ConectaSolar

**Status:** ✅ **v1.0.0 - PRONTO PARA PRODUÇÃO** (15/12/2025)

---

## ✅ Concluído

- **Fase 0: Fundação**
  - [x] Setup inicial do projeto (Vite, React, TS, Tailwind).
  - [x] Criação de landing page e página de parcerias.
  - [x] Integração de formulário de contato com Supabase.
- **Fase 1: Estruturação e Arquitetura**
  - [x] Criação da estrutura de documentação na pasta `/docs`.
  - [x] Implementação de roteamento com `react-router-dom`.
  - [x] Implementação da arquitetura de Theming (Dark/Light Mode) com `next-themes`.
- **Fase 2: Refinamento de UX/UI**
  - [x] Dark Mode 100% implementado em todos os componentes e páginas.
  - [x] Responsividade Mobile-First completa com breakpoints Tailwind.
  - [x] Correção de bugs de layout (overflow de carrossel).
  - [x] Refatoração de componentes duplicados (remoção de ProductCarousel).
  - [x] Navegação por setas no carrossel de soluções.
  - [x] Auditoria completa de acessibilidade e usabilidade.

- **Fase 3: Otimização e Expansão**
  - [x] Sistema de modal de preview rápido para produtos (ProductModal).
  - [x] Estrutura de dados completa para produtos (productDetails.ts).
  - [x] Template de página dedicada por produto (ProductPage.tsx).
  - [x] Roteamento dinâmico para 6 produtos (/green, /solar, /placas, /livre, /telecom, /expansao).
  - [x] Seção de benefícios iGreen Club (IgreenBenefits).
  - [x] Correção de bugs de z-index nas setas de navegação.
  - [x] Dark mode completo em Products section.
  - [x] Fotos do consultor: placeholder versionado + fotos reais ignoradas por git.
  - [x] Seleção de consultor por ENV (`VITE_CONSULTANT_ID`) com fallback.
  - [x] Perfis por consultor em `public/consultant.<id>.json`.
  - [x] Navegação mobile no Header (menu hambúrguer + painel colapsável).
  - [x] A11y: foco do menu mobile (foco no 1º item ao abrir; retorna ao botão ao fechar).
  - [x] Separar vitrine B2B em rota /para-consultores (link discreto no Footer).
  - [x] CTA B2B (/para-consultores): WhatsApp fixo do proprietário.
  - [x] Copy do iGreen Club alinhado às regras APN (dez/2025) + fonte viva em `docs/REGRAS_APN_2025.md`.
  - [x] Suporte a navegação por hash para seções da Home (ex.: `/#contact`).
  - [x] Preview ao compartilhar (Open Graph/Twitter): `public/og-image.png` + meta tags no `index.html`.
  - [x] SEO sanity (sem SSR): runtime override via `public/consultant.json` + fallback de `canonical/og:url` por `location.origin`.

- **Fase 4: Kit de Fechamento (Proposta Comercial)**
  - [x] Criar `docs/PROPOSTA_COMERCIAL.md` (1-pager copiável para WhatsApp)
  - [x] Definir prazo padrão: 3 a 5 dias úteis (após materiais completos)
  - [x] Definir SLA mensalidade: 1 alteração simples/mês (SLA A)
  - [x] Blocos "copiar e colar no WhatsApp" (proposta + pedido de materiais)
  - [x] Referências para `docs/NEGOCIO.md` e `docs/CLIENTES.md`

## 🚧 Em Andamento

- **Fase 5: Analytics e Melhorias**
  - [ ] Implementar sistema de análise e métricas (Google Analytics/Plausible).
  - [ ] Otimização de performance (lazy loading de imagens, code splitting).
  - [ ] Testes de usabilidade com usuários reais.

- **Fase 5: Vendas e Conversão B2B**
  - [x] Playbook WhatsApp (vendas e follow-up)

## ⏭️ Próximo Passo Imediato

- **Fechar 3 clientes Promo** e coletar depoimentos (validação de produto)
- Implementar sistema de análise para tracking de conversões e comportamento do usuário.
- Avaliar necessidade de funcionalidades do backlog (Simulador de Economia, Área do Licenciado).
