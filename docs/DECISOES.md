# ⚖️ Registro de Decisões do Projeto ConectaSolar

Este documento registra as decisões técnicas, de arquitetura e de UX/UI mais importantes.

---

### **2025-12-20: Padronizar Follow-ups de WhatsApp (Vendas B2B)**

- **Decisão:** Criar playbook estruturado de vendas via WhatsApp (`docs/WHATSAPP_VENDAS.md`) com 5 templates de mensagens (primeira abordagem, follow-ups 2h/24h/3 dias, fechamento) e respostas para 8 objeções comuns.
- **Justificativa:** Reduzir atrito e retrabalho comercial no processo de venda B2B (consultor → consultor), padronizar comunicação e aumentar conversão sem perder a personalização necessária.
- **Escopo do playbook:** Templates consistentes com `docs/CLIENTES.md` (preços, prazos, escopo de SLA), respostas diretas para objeções (preço, fidelidade, tecnologia, garantias), boas práticas de follow-up (máx. 3 toques, não ser insistente).
- **Motivo comercial:** Venda de setup (R$ 450–750) + mensalidade (R$ 79/mês) requer processo comercial eficiente e replicável; WhatsApp é canal principal de conversão B2B no segmento.

---

### **2025-12-19: Operação Comercial (Domínio do Cliente + Deploy Gerenciado)**

- **Decisão:** Operar o ConectaSolar como um produto vendável no formato **setup + mensalidade**, com **domínio do cliente** (ele compra e mantém) e **deploy/hospedagem gerenciados**.
- **Justificativa:** Reduz risco e custo (domínio não fica “preso” à operação), melhora previsibilidade (recorrência) e evita manutenção infinita sem contrato.
- **Hospedagem recomendada:** Vercel (simplicidade) ou Cloudflare Pages (custo/escala).

---

### **2025-12-19: Seleção de Consultor por ENV (VITE_CONSULTANT_ID)**

- **Decisão:** Permitir selecionar o consultor via variável de ambiente `VITE_CONSULTANT_ID`, carregando `public/consultant.<id>.json` em runtime com fallback automático para `public/consultant.json`.
- **Justificativa:** Aumenta portabilidade e simplifica deploy (Vercel/Netlify/etc.) sem precisar editar/commitar alterações só para trocar consultor.
- **Comportamento:** Se `consultant.<id>.json` não existir (404) ou for inválido, a aplicação loga um aviso e usa `consultant.json`.

---

### **2025-12-19: Fotos do Consultor (Placeholder no Repositório)**

- **Decisão:** Manter apenas um placeholder neutro versionado (`public/assets/consultant/profile.svg`) e ignorar fotos reais em `public/assets/consultant/*` (exceto o placeholder).
- **Motivo:** Privacidade + reuso do template sem risco de commitar fotos pessoais/indesejadas.
- **Padrão:** `photo.src` aponta para `/assets/consultant/profile.svg` nos JSONs e defaults.
- **Personalização (deploy):** Substituir/fornecer a foto real no ambiente de deploy e ajustar o JSON do consultor; o `.gitignore` evita que a imagem seja commitada no repositório.

---

### **2025-12-19: Header Mobile com Menu Colapsável (Hambúrguer)**

- **Decisão:** Implementar navegação mobile no `Header` com botão de menu (hambúrguer) e painel colapsável.
- **Motivo:** A navegação estava invisível no celular porque o `<nav>` desktop usa `hidden md:flex`.
- **Detalhes de comportamento:**
  - Fecha ao navegar entre rotas.
  - Fecha ao clicar em um item.
  - Fecha ao pressionar `Escape`.
  - Fecha automaticamente ao mudar para `md+` (evita estado inconsistente em resize/rotação).
- **Acessibilidade:** mantém `aria-expanded` e `aria-controls` no botão.

---

### **2025-12-19: Acessibilidade do Menu Mobile (Gerenciamento de Foco)**

- **Decisão:** Ao abrir o menu mobile, mover foco para o primeiro item do painel; ao fechar, devolver o foco para o botão do menu.
- **Motivo:** Melhorar navegação por teclado e compatibilidade com leitores de tela, reduzindo “perda de contexto” ao abrir/fechar o menu.

---

### **2025-12-19: Tracking Neutro de Eventos (Sem Amarrar em Provedor)**

- **Decisão:** Instrumentar cliques importantes com uma função `track(event, params)` neutra no frontend.
- **Motivo:** Medir conversão (principalmente WhatsApp) e permitir otimização sem depender desde já de GA4/Umami/Plausible.
- **Comportamento:**
  - Em dev: loga no console.
  - Em prod: envia para `window.dataLayer` (se existir) ou `window.gtag` (se existir); caso contrário, não faz nada.
- **Padrão de eventos:**
  - Evento principal: `cta_click`
  - Parâmetros mínimos: `consultantId`, `placement`, `cta`, `pathname`

---

### **2025-12-19: Separar Vitrine B2B em Rota Dedicada (/para-consultores)**

- **Decisão:** Mover o conteúdo "Para consultores iGreen" para uma rota dedicada (`/para-consultores`), removendo da Home.
- **Motivo:** Evitar misturar públicos (B2C: lead solar/cliente final) e (B2B: consultor), preservando conversão do site principal.
- **Descoberta:** Link discreto no rodapé (Footer) com texto "Sou consultor iGreen".

---

### **2025-12-19: CTA B2B com WhatsApp do Proprietário (Número Fixo)**

- **Decisão:** Na rota `/para-consultores`, os CTAs de venda (ex.: "Quero meu site") sempre abrem o WhatsApp do proprietário (`5519996693018`), independente do consultor carregado via JSON.
- **Motivo:** Essa página vende o setup/serviço; evita que uma instalação do template redirecione o lead B2B para o WhatsApp de um consultor do cliente.
- **Implementação:** Forçar `buildWhatsAppUrl(message, SELLER_WHATSAPP_NUMBER)` no fluxo B2B.

---

### **2025-12-19: Copy do iGreen Club Alinhado às Regras APN (dez/2025)**

- **Decisão:** Evitar promessas absolutas (ex.: roleta/cashback “garantido”, “sem limites”, “até 100%” como regra fixa). Sempre condicionar benefícios a regras/campanhas vigentes, indicação válida e critérios de validação/ativação, e deixar claro que cashback é para abater na conta de energia.
- **Fonte viva:** `docs/REGRAS_APN_2025.md` + página oficial: https://www.igreenenergy.com.br/igreenclub
- **Motivo:** Reduzir risco de não conformidade e manter o discurso consistente entre páginas/CTAs.

---

### **2025-12-19: Preview ao Compartilhar (Open Graph / Twitter)**

- **Decisão:** Padronizar a prévia de compartilhamento (WhatsApp/Instagram/etc.) via meta tags Open Graph/Twitter no `index.html` e imagem estática em `public/og-image.png`.
- **Motivo:** Evitar fallback incorreto (ex.: “bolt.new”) quando o crawler não encontra OG image válida ou está cacheado; garantir consistência de branding.
- **Requisitos:** `og:image` deve ser público, HTTPS e retornar 200 OK; tamanho recomendado 1200×630.
- **Ícones:** `public/apple-touch-icon.png` para ícone no iOS.

- **Observação operacional (cache):** WhatsApp/Instagram/Meta cacheiam a prévia. Quando atualizar a imagem/tags, use o Facebook Sharing Debugger ("Scrape Again") em https://developers.facebook.com/tools/debug/.
- **Compatibilidade:** em alguns crawlers, prefira `og:image` com URL absoluta (ex.: `https://conexao-solar.vercel.app/og-image.png`). Ao migrar para domínio próprio, atualize `canonical`/`og:url`/`og:image` para o domínio final.
- **fb:app_id:** não vamos criar Meta App nem adicionar `fb:app_id` agora; warnings em ferramentas da Meta podem ser ignorados enquanto `og:image`/tags estiverem válidas.
- **Canonical/og:url (sem SSR):** o HTML pode ter valores padrão, mas em runtime (JS) usamos `seo.canonicalUrl` quando definido no `public/consultant.json`; caso contrário, usamos `location.origin` como fallback para o domínio atual do deploy.

---

### **2025-12-15: Implementação de Páginas Dedicadas por Produto**

- **Decisão:** Criar sistema de páginas dedicadas para cada produto (Green, Solar, Placas, Livre, Telecom, Expansão) com template reutilizável e roteamento dinâmico.
- **Justificativa:** Os usuários precisam de informações detalhadas sobre cada produto antes de tomar decisão. O fluxo modal (preview rápido) → página dedicada (informações completas) oferece a melhor experiência: rápido para quem quer só uma visão geral, completo para quem quer decidir.
- **Componentes Criados:**
  - `ProductPage.tsx` - Template dinâmico que consome dados de `productDetails.ts`
  - `productDetails.ts` - Estrutura de dados completa com hero, benefits, howItWorks, faq, cta
- **Estrutura Implementada:**
  - Seção Hero com headline, description, tagline e CTAs
  - Seção Benefits com grid de cards (CheckCircle icons)
  - Seção How It Works com steps numerados
  - Seção FAQ com Accordion component
  - Seção Final CTA com gradiente verde
  - Roteamento dinâmico: `/:productId` consome parâmetro da URL
- **Alternativas Descartadas:** Página única com todas informações. Rejeitado por gerar sobrecarga cognitiva e não permitir links diretos para produtos específicos.

---

### **2025-12-15: Sistema de Modal de Preview para Produtos**

- **Decisão:** Implementar modal de preview rápido antes de navegar para página dedicada do produto.
- **Justificativa:** Permite ao usuário ter uma visão geral instantânea sem sair da home. O botão "Saiba Mais" dentro do modal leva para página completa, criando jornada progressiva de descoberta.
- **Componentes Criados:**
  - `ProductModal.tsx` - Modal com backdrop, animação scale-in, summary, benefits list, 2 CTAs
- **Integração:**
  - `SolutionsSection.tsx` atualizado para abrir modal ao clicar no card
  - Modal possui 2 CTAs: "Saiba Mais" (navega para página dedicada) e CTA específico do produto (WhatsApp)
- **Design Pattern:** Backdrop (z-50) + Dialog com pointer-events management para evitar clicks vazando
- **Alternativas Descartadas:** Navegação direta para página completa. Rejeitado por quebrar fluxo de navegação e não oferecer preview rápido.

---

### **2025-12-15: Correção de Bug Z-index nas Setas de Navegação**

- **Decisão:** Aumentar z-index das setas de navegação de z-10 para z-20 e implementar estratégia de pointer-events.
- **Justificativa:** Usuários reportaram que as setas às vezes clicavam no card atrás em vez de navegar. Problema causado por hierarquia z-index incorreta.
- **Solução Técnica:**
  - Container wrapper: `pointer-events-none` + `z-20`
  - Botões de navegação: `pointer-events-auto` + `z-20`
  - Carousel: `pointer-events-auto`
- **Hierarquia Z-index Final:** Buttons (z-20) < Modals/Backdrop (z-50)
- **Alternativas Descartadas:** Apenas aumentar z-index sem pointer-events. Rejeitado por não resolver problema em todos os cenários de overlap.

---

### **2025-12-15: Implementação Completa de Dark Mode em Products Section**

- **Decisão:** Adicionar suporte completo a dark mode na seção Products com todas variantes de cor.
- **Justificativa:** Usuário reportou inconsistência de fundos claros quando modo escuro ativado. Dark mode deve ser consistente em toda aplicação.
- **Implementação:**
  - Background gradients: `dark:from-gray-900 dark:to-black`
  - Color variants: 5 cores (green, yellow, blue, purple, indigo) com versões dark (`dark:from-color-900/10`)
  - Icon colors: `dark:text-color-400 dark:bg-color-900/30`
  - Text colors: `dark:text-white`, `dark:text-gray-400`, `dark:text-gray-300`
- **Pattern Estabelecido:** Uso de `/10` opacity para gradientes sutis em dark theme
- **Alternativas Descartadas:** Manter cores fixas. Rejeitado por prejudicar legibilidade e criar experiência inconsistente.

---

### **2025-12-15: Criação da Seção iGreen Club Benefits**

- **Decisão:** Criar seção dedicada para showcasing de benefícios do iGreen Club (prêmios, cruzeiro, cashback, descontos).
- **Justificativa:** Usuário solicitou destacar benefícios do clube com elementos visuais (roleta de prêmios, cruzeiro). Seção dedicada aumenta percepção de valor agregado.
- **Componentes Criados:**
  - `IgreenBenefits.tsx` - Seção com 4 benefit cards em grid responsivo
- **Design:**
  - 4 cards coloridos: Roleta (yellow), Sorteio Anual (purple), Cashback (green), Descontos (blue)
  - Icons: Gift, Star, TrendingUp, Smartphone (Lucide React)
  - Cada card: gradient background, icon em caixa colorida, título, highlight, descrição
  - CTA section: Gradient verde com links WhatsApp e site igreenclub
  - Grid: `grid-cols-1 md:grid-cols-2` para responsividade
- **Posicionamento:** Inserido entre SolutionsSection e BenefitsSection na Home
- **Alternativas Descartadas:** Adicionar como accordion dentro de outra seção. Rejeitado por não dar destaque visual necessário.

---

### **2025-12-15: Criação da Estrutura de Documentação**

- **Decisão:** Iniciar a formalização do projeto com uma estrutura de documentação robusta na pasta `/docs` antes de prosseguir com o desenvolvimento de novas funcionalidades.
- **Justificativa:** A ausência de um registro centralizado de decisões, arquitetura e roadmap gera risco de desalinhamento e perda de conhecimento estratégico. Esta estrutura serve como a "memória permanente" do projeto, essencial para a escalabilidade e manutenção a longo prazo.
- **Alternativas Descartadas:** Continuar o desenvolvimento sem documentação formal. Rejeitado por ser uma prática de alto risco para a sustentabilidade do projeto.

---

### **2025-12-15: Refatoração da Home com Arquitetura Profissional**

- **Decisão:** Implementar uma arquitetura de layout baseada em seções modulares e independentes, cada uma com container centralizado (`max-w-6xl`) e padding/spacing próprios.
- **Justificativa:** A página inicial estava com sensação de "scroll infinito" e conteúdo vazando para fora do viewport. A nova arquitetura cria "capítulos fechados" que melhoram a legibilidade e experiência do usuário.
- **Componentes Criados:**
  - `AppLayout.tsx` - Wrapper principal com flexbox
  - `SolutionsSection.tsx` - Carrossel de soluções com indicadores dinâmicos
  - `BenefitsSection.tsx` - Grid de 3 benefícios principais
  - `CTASection.tsx` - Call-to-action final elegante
  - `BenefitCard.tsx` - Componente reutilizável para benefícios
- **Impacto:** Melhoria significativa na organização visual, responsividade e manutenibilidade do código.

---

### **2025-12-15: Remoção de Informações Internas da Interface Pública**

- **Decisão:** Remover completamente qualquer menção a valores de comissão, ganhos ou incentivos financeiros da interface voltada ao cliente final.
- **Justificativa:** A interface pública deve focar exclusivamente nos benefícios para o cliente final (economia, sustentabilidade, praticidade). Informações sobre comissionamento são relevantes apenas para parceiros/licenciados e devem estar em áreas restritas.
- **Alternativas Descartadas:** Manter informações mistas. Rejeitado por gerar confusão e prejudicar a percepção de profissionalismo da marca.

---

### **2025-12-15: Implementação de Roteamento Centralizado**

- **Decisão:** Refatorar a aplicação para usar `react-router-dom` como o sistema de gerenciamento de rotas, transformando o projeto de uma SPA monolítica para uma arquitetura de múltiplas páginas (MPA).
- **Justificativa:** A estrutura anterior, com uma página órfã (`Partnerships.tsx`) e um `App.tsx` sobrecarregado, não era escalável. A adoção de um roteador centralizado permite adicionar novas páginas de forma limpa e organizada, cria URLs semânticas para cada seção e estabelece uma base sólida para funcionalidades futuras, como áreas de login e dashboards.
- **Alternativas Descartadas:** Manter a estrutura de SPA com navegação por scroll e modais. Rejeitado por não ser ideal para conteúdo denso como a página de "Parcerias" e por limitar a capacidade de expansão do projeto.

---

### **2025-12-15: Implementação de Roteamento com React Router DOM**

- **Decisão:** Implementar sistema de roteamento usando `react-router-dom` com `createBrowserRouter` e arquitetura de layout compartilhado.
- **Justificativa:** O projeto precisa de múltiplas páginas (home, parcerias, futuras áreas de login/dashboard). A abordagem com `<Outlet />` permite manter Header/Footer compartilhados enquanto renderiza conteúdo específico de cada rota.
- **Estrutura Implementada:**
  - `App.tsx` - Layout pai com Header, Outlet, Footer
  - `pages/Home.tsx` - Landing page completa (todas as seções)
  - `pages/Partnerships.tsx` - Página de parcerias (já existente)
  - `main.tsx` - Configuração do roteador com rotas aninhadas
  - `Header.tsx` - Atualizado com `Link` e navegação condicional
- **Alternativas Descartadas:** 
  - Hash routing (`#/parcerias`) - Rejeitado por prejudicar SEO
  - Múltiplos HTML files - Rejeitado por não ser SPA
- **Impacto:** Preparação para futuras áreas autenticadas e melhor organização de código por página.

---

### **2025-12-15: Arquitetura de Temas (Dark/Light Mode)**

- **Decisão:** Implementar um sistema de temas utilizando a biblioteca `next-themes` em conjunto com a estratégia de `class` do Tailwind CSS. Um componente `ThemeProvider` foi criado para encapsular a aplicação, e um botão de toggle foi adicionado ao Header.
- **Justificativa:** `next-themes` é o padrão da indústria para aplicações React, gerenciando automaticamente a persistência em `localStorage` e a detecção de preferência do sistema (`prefers-color-scheme`). A estratégia de `class` do Tailwind é a mais flexível e poderosa, permitindo controle total sobre os estilos do modo escuro sem poluir o código com lógica condicional. Essa abordagem é robusta, escalável e de fácil manutenção.
- **Alternativas Descartadas:**
  - **CSS Variables Nativas:** Rejeitado por exigir mais código manual para o toggle e para a persistência, além de não se integrar tão fluidamente com o ecossistema React.
  - **Lógica condicional no JSX:** Rejeitado por ser verboso, difícil de manter e ir contra a filosofia de classes utilitárias do Tailwind.

---

### **2025-12-15: Implementação Completa de Dark Mode (100%)**

- **Decisão:** Realizar uma auditoria completa e implementar dark mode em TODOS os componentes, páginas e elementos da aplicação, incluindo casos extremos como tabelas complexas, gradientes e estados hover.
- **Justificativa:** Dark mode parcial cria uma experiência de usuário quebrada e não profissional. A implementação completa garante consistência visual, conforto em diferentes ambientes de iluminação e demonstra atenção aos detalhes.
- **Componentes Atualizados:**
  - `Partnerships.tsx` - Header com dark mode
  - `Expansao.tsx` - Tabela completa (incluindo linha Telecom que estava faltando), cards, accordion items
  - `iGreenClub.tsx` - Cards, rewards, depoimentos, CTAs, gradientes
  - `Hero.tsx`, `About.tsx`, `SolutionsSection.tsx`, `Contact.tsx` - Todos os elementos
  - `Footer.tsx`, `Header.tsx`, `BenefitsSection.tsx` - Backgrounds, textos, borders
- **Padrão Estabelecido:** `bg-white dark:bg-gray-900`, `text-gray-800 dark:text-gray-200`, `border-gray-200 dark:border-gray-700`
- **Impacto:** Experiência de usuário consistente e profissional em ambos os temas.

---

### **2025-12-15: Correção de Bug de Layout (Overflow de Carrossel)**

- **Decisão:** Adicionar `overflow-hidden` nas seções que contêm carrosséis horizontais (SolutionsSection) para prevenir vazamento de conteúdo para fora do viewport.
- **Justificativa:** O carrossel estava causando scroll horizontal indesejado na página inteira, quebrando o layout em certas resoluções. A propriedade `overflow-hidden` no container pai resolve o problema sem afetar a funcionalidade do scroll dentro do carrossel.
- **Solução Técnica:** Section com `overflow-hidden` + carrossel interno com `overflow-x-auto scroll-smooth scrollbar-hide`
- **Alternativas Descartadas:** 
  - Limitar largura dos cards - Rejeitado por comprometer o design responsivo
  - Remover scroll horizontal - Rejeitado por prejudicar a experiência em mobile
- **Impacto:** Layout estável e profissional em todas as resoluções.

---

### **2025-12-15: Implementação de Responsividade Mobile-First Completa**

- **Decisão:** Auditar e refatorar todos os componentes seguindo a estratégia Mobile-First com breakpoints progressivos do Tailwind CSS.
- **Justificativa:** A maioria dos usuários acessa via dispositivos móveis. Uma experiência mobile mal otimizada resulta em alta taxa de rejeição. A abordagem mobile-first garante que o essencial funcione perfeitamente em telas pequenas antes de adicionar melhorias para desktop.
- **Padrões Implementados:**
  - Títulos: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
  - Subtítulos: `text-base sm:text-lg md:text-xl`
  - Paddings: `py-12 md:py-16 lg:py-24`
  - Margens: `mb-8 md:mb-12`
  - Botões: `px-3 py-2 md:px-4` com `text-xs md:text-sm`
  - Grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
  - Gaps: `gap-2 sm:gap-3 md:gap-4`
  - Header: ThemeToggle visível em mobile dentro de wrapper `md:hidden`
  - Tabelas: Scroll horizontal com `-mx-4 px-4 sm:mx-0` e `min-w-[600px]`
- **Componentes Otimizados:** Hero, About, SolutionsSection, BenefitsSection, Expansao (tabela), iGreenClub (grid de prêmios), Footer
- **Impacto:** Experiência fluida e profissional em qualquer dispositivo (mobile, tablet, desktop).

---

### **2025-12-15: Remoção de Componente Duplicado (ProductCarousel)**

- **Decisão:** Deletar o componente `ProductCarousel.tsx` e suas referências, mantendo apenas `SolutionsSection.tsx` como o carrossel oficial de produtos/soluções.
- **Justificativa:** Dois componentes fazendo essencialmente a mesma função (exibir cards em carrossel) representa dívida técnica, duplicação de código e risco de inconsistências. Manter um único componente bem feito facilita manutenção e evolução.
- **Alternativas Descartadas:**
  - Criar componente genérico unificado - Rejeitado por over-engineering neste momento; pode ser considerado no futuro se surgirem mais casos de uso
- **Impacto:** Código mais limpo, menos arquivos para manter, redução de complexidade.

---

### **2025-12-15: Navegação por Setas no Carrossel de Soluções**

- **Decisão:** Adicionar botões de navegação (ChevronLeft/ChevronRight) no carrossel de soluções com scroll suave programático.
- **Justificativa:** Melhorar a UX em desktop, onde usuários podem preferir clicar em setas ao invés de arrastar. Os botões ficam ocultos em mobile (`hidden md:flex`) para não poluir a interface em telas pequenas.
- **Solução Técnica:** `useRef<HTMLDivElement>` + `scrollTo({ left: newScrollPosition, behavior: 'smooth' })` + botões absolutamente posicionados com `z-10`
- **Padrão Visual:** Botões circulares brancos (dark: gray-800) com sombra, hover suave, ícones Lucide React
- **Impacto:** Melhor experiência de navegação em desktop sem prejudicar mobile.
