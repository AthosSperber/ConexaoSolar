# ⚖️ Registro de Decisões do Projeto ConectaSolar

Este documento registra as decisões técnicas, de arquitetura e de UX/UI mais importantes.

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
