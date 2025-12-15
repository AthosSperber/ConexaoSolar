# 📋 Registro de Decisões Arquiteturais (ADR)

## Contexto e Filosofia

Este documento registra as principais decisões técnicas e arquiteturais tomadas no desenvolvimento do projeto ConexãoSolar. Cada decisão está documentada com seu contexto, alternativas consideradas e justificativa.

---

## ADR-001: Escolha do React como Framework Principal

**Data**: Novembro 2024  
**Status**: ✅ Aceito  
**Decisores**: Equipe de Desenvolvimento

### Contexto
Precisávamos escolher um framework moderno para construir uma interface responsiva e performática para o site da ConexãoSolar.

### Decisão
Utilizar **React 18** como framework principal de UI.

### Alternativas Consideradas
1. **Vue.js**: Mais simples, mas menor ecossistema
2. **Angular**: Muito pesado para um site one-page
3. **Svelte**: Excelente performance, mas comunidade menor
4. **Vanilla JS**: Muito trabalho manual para reatividade

### Justificativa
- ✅ Ecossistema maduro e vasto
- ✅ Excelente performance com Virtual DOM otimizado
- ✅ Hooks modernos facilitam lógica de estado
- ✅ Grande comunidade e suporte
- ✅ Fácil integração com TypeScript
- ✅ Lazy loading nativo com Suspense
- ✅ Equipe já possui experiência com React

### Consequências
- **Positivas**: Desenvolvimento rápido, componentização eficiente, reusabilidade
- **Negativas**: Bundle size maior que Svelte (mitigado com code splitting)

---

## ADR-002: TypeScript como Linguagem de Desenvolvimento

**Data**: Novembro 2024  
**Status**: ✅ Aceito  
**Decisores**: Equipe de Desenvolvimento

### Contexto
Definir se o projeto seria desenvolvido em JavaScript puro ou TypeScript.

### Decisão
Utilizar **TypeScript 5.5+** como linguagem principal.

### Alternativas Consideradas
1. **JavaScript puro**: Mais rápido inicialmente, mas propenso a erros
2. **JSDoc**: Tipagem sem compilação, mas menos robusta

### Justificativa
- ✅ Detecção de erros em tempo de desenvolvimento
- ✅ IntelliSense e autocomplete aprimorados
- ✅ Refatoração mais segura
- ✅ Documentação implícita através de tipos
- ✅ Melhor manutenibilidade a longo prazo
- ✅ Interfaces claras para estruturas de dados

### Consequências
- **Positivas**: Menos bugs em produção, código autodocumentado, melhor DX
- **Negativas**: Curva de aprendizado inicial, tempo de build ligeiramente maior

---

## ADR-003: Vite como Build Tool

**Data**: Novembro 2024  
**Status**: ✅ Aceito  
**Decisores**: Equipe de Desenvolvimento

### Contexto
Escolher ferramenta de build e desenvolvimento para o projeto React.

### Decisão
Utilizar **Vite 5** como build tool e dev server.

### Alternativas Consideradas
1. **Create React App (CRA)**: Ultrapassado, desenvolvimento lento
2. **Webpack**: Configuração complexa, mais lento
3. **Parcel**: Menos controle sobre otimizações
4. **esbuild direto**: Requer muita configuração manual

### Justificativa
- ✅ Hot Module Replacement (HMR) instantâneo
- ✅ Dev server extremamente rápido
- ✅ Build otimizado com Rollup
- ✅ Configuração minimal out-of-the-box
- ✅ Suporte nativo a TypeScript
- ✅ Tree-shaking automático
- ✅ Code splitting inteligente

### Consequências
- **Positivas**: DX excepcional, builds rápidos, configuração simples
- **Negativas**: Menos plugins que webpack (não relevante para nosso caso)

---

## ADR-004: Tailwind CSS para Estilização

**Data**: Novembro 2024  
**Status**: ✅ Aceito  
**Decisores**: Equipe de Desenvolvimento e Design

### Contexto
Definir estratégia de estilização CSS para o projeto.

### Decisão
Utilizar **Tailwind CSS 3.4** como framework CSS utility-first.

### Alternativas Consideradas
1. **CSS Modules**: Mais verboso, menos produtivo
2. **Styled Components**: Runtime overhead
3. **Emotion**: Similar a styled-components
4. **SASS/SCSS**: Requer mais código customizado
5. **CSS puro**: Muito trabalho manual

### Justificativa
- ✅ Desenvolvimento extremamente rápido
- ✅ Design system consistente através de utilidades
- ✅ Purge CSS automático (bundle pequeno)
- ✅ Responsividade fácil com breakpoints
- ✅ Customização através de tailwind.config.js
- ✅ Classes autodocumentadas
- ✅ Sem preocupação com nomes de classes

### Consequências
- **Positivas**: Velocidade de desenvolvimento, consistência visual, bundle otimizado
- **Negativas**: HTML mais verboso (mitigado com componentes React)

---

## ADR-005: Dados Estáticos via Arquivos TypeScript

**Data**: Novembro 2024  
**Status**: ✅ Aceito  
**Decisores**: Equipe de Desenvolvimento

### Contexto
Definir como armazenar e gerenciar dados dos produtos e conteúdos do site.

### Decisão
Armazenar dados estáticos em arquivos **TypeScript modulares** na pasta `src/data/`.

### Alternativas Consideradas
1. **JSON files**: Sem tipagem, mais sujeito a erros
2. **CMS Headless**: Overhead desnecessário para MVP
3. **Database**: Overkill para conteúdo estático
4. **Markdown + Front Matter**: Mais complexo de manipular

### Justificativa
- ✅ Tipagem forte dos dados
- ✅ Autocomplete ao usar dados
- ✅ Validação em tempo de desenvolvimento
- ✅ Fácil versionamento com Git
- ✅ Sem necessidade de fetch/API calls
- ✅ Build-time validation
- ✅ Refatoração segura

### Estrutura Implementada
```
src/data/
├── solutions.ts    # Dados das soluções/produtos
├── texts.ts        # Textos estáticos
├── partner.ts      # Informações de parceiros
└── mock.ts         # Dados mockados para testes
```

### Consequências
- **Positivas**: Type safety, sem latência de rede, versionamento simples
- **Negativas**: Requer rebuild para atualizar conteúdo (aceitável para MVP)

---

## ADR-006: Supabase como Backend-as-a-Service

**Data**: Novembro 2024  
**Status**: ✅ Aceito  
**Decisores**: Equipe de Desenvolvimento

### Contexto
Necessidade de armazenar leads do formulário de contato sem desenvolver backend customizado.

### Decisão
Utilizar **Supabase** como BaaS para armazenamento e autenticação futura.

### Alternativas Consideradas
1. **Firebase**: Vendor lock-in maior, pricing menos previsível
2. **Backend Node.js customizado**: Mais trabalho, infraestrutura própria
3. **Serverless Functions**: Mais complexo de configurar
4. **Planilha Google**: Não profissional, sem escalabilidade

### Justificativa
- ✅ Open-source (PostgreSQL)
- ✅ SDK JavaScript oficial excelente
- ✅ Autenticação pronta para futuras fases
- ✅ Row Level Security (RLS)
- ✅ Real-time subscriptions (se necessário)
- ✅ Generoso free tier
- ✅ Fácil migração (PostgreSQL padrão)

### Consequências
- **Positivas**: Setup rápido, escalável, seguro, menos código backend
- **Negativas**: Dependência externa (mitigado por ser open-source)

---

## ADR-007: Abordagem Mobile-First

**Data**: Novembro 2024  
**Status**: ✅ Aceito  
**Decisores**: Equipe de Desenvolvimento e Design

### Contexto
Definir estratégia de responsividade considerando que a maioria dos usuários acessa via mobile.

### Decisão
Adotar design e desenvolvimento **Mobile-First**, expandindo para desktop.

### Justificativa
- ✅ >70% dos acessos esperados via mobile
- ✅ Força priorização de conteúdo essencial
- ✅ Performance melhor em dispositivos limitados
- ✅ Progressive Enhancement natural
- ✅ Alinhado com práticas modernas de web design

### Implementação
- Breakpoints Tailwind padrão (sm, md, lg, xl, 2xl)
- Classes base para mobile, modificadores para telas maiores
- Testes prioritários em dispositivos móveis

### Consequências
- **Positivas**: UX otimizada para maioria dos usuários, foco em essenciais
- **Negativas**: Desktop pode ter mais whitespace (aceitável)

---

## ADR-008: Scroll Snap para Navegação

**Data**: Novembro 2024  
**Status**: ✅ Aceito  
**Decisores**: Equipe de Design e Desenvolvimento

### Contexto
Definir experiência de navegação entre seções do site one-page.

### Decisão
Implementar **CSS Scroll Snap** para navegação fluida e magnética entre seções.

### Alternativas Consideradas
1. **Scroll livre**: Menos polido
2. **Biblioteca JS de scroll (fullPage.js)**: Overhead desnecessário
3. **Botões de navegação obrigatórios**: Menos intuitivo

### Justificativa
- ✅ Nativo do browser (sem JS)
- ✅ Performance excelente
- ✅ Experiência semelhante a app mobile
- ✅ Acessível (funcionam com teclado)
- ✅ Suporte amplo de navegadores modernos

### Implementação
```css
scroll-snap-type: y mandatory;
scroll-snap-align: start;
```

### Consequências
- **Positivas**: UX polida, performance nativa, sem dependências
- **Negativas**: Menos controle fino (aceitável para nosso caso)

---

## ADR-009: Lazy Loading de Componentes

**Data**: Novembro 2024  
**Status**: ✅ Aceito  
**Decisores**: Equipe de Desenvolvimento

### Contexto
Otimizar tempo de carregamento inicial do site, especialmente em mobile.

### Decisão
Implementar **lazy loading** de seções menos críticas usando React.lazy() e Suspense.

### Justificativa
- ✅ Reduz bundle inicial
- ✅ First Contentful Paint mais rápido
- ✅ Nativo do React (sem libs externas)
- ✅ Fácil de implementar e manter

### Componentes Lazy-Loaded
- ProductCarousel
- Products
- Green, Solar, Placas, Livre, Telecom (seções de produtos)
- Contact

### Componentes Eager-Loaded
- Header, Hero, About, SolutionsCarousel (above-the-fold)

### Consequências
- **Positivas**: Carregamento inicial mais rápido, melhor FCP
- **Negativas**: Pequeno delay ao scroll (imperceptível com prefetch)

---

## ADR-010: Estratégia de Otimização de Imagens

**Data**: Novembro 2024  
**Status**: ✅ Aceito  
**Decisores**: Equipe de Desenvolvimento

### Contexto
Imagens são o maior ativo do site em termos de tamanho. Precisamos otimizar sem perder qualidade visual.

### Decisão
Implementar sistema de **conversão automática para WebP** com múltiplas resoluções (srcset).

### Implementação
- Script `convert-images.js` usando Sharp
- Gera 3 tamanhos: 480px, 768px, 1200px
- Formato WebP com qualidade 85%
- Fallback para formato original

### Justificativa
- ✅ WebP tem 25-35% menos tamanho que JPEG/PNG
- ✅ Srcset permite navegador escolher melhor imagem
- ✅ Sharp é rápido e confiável
- ✅ Processo automatizado (npm run images:convert)

### Consequências
- **Positivas**: Carregamento mais rápido, menor uso de dados, melhor LCP
- **Negativas**: Requer processamento pré-build (aceitável)

---

## 📌 Decisões Pendentes (Para Discussão)

### DP-001: Implementar Dark Mode?
- **Prós**: Tendência moderna, economia de bateria em OLED
- **Contras**: Dobra trabalho de design, marca tem identidade verde vibrante
- **Status**: Em análise para Fase 3

### DP-002: Migrar para Next.js (SSR/SSG)?
- **Prós**: Melhor SEO, menor First Load
- **Contras**: Mais complexo, requer Node.js server ou Vercel
- **Status**: Avaliar após métricas de SEO do MVP

### DP-003: Implementar PWA?
- **Prós**: Instalável, funciona offline, notificações
- **Contras**: Service Worker complexo, manutenção adicional
- **Status**: Planejado para Fase 4 (iGreen Club)

---

## 🔄 Processo de Mudança

Para propor mudança em uma decisão existente:
1. Abrir issue documentando contexto e proposta
2. Discussão em equipe
3. Atualizar este documento com novo status
4. Implementar mudança se aprovada

---

**Última Atualização**: Dezembro 2024  
**Revisão**: Trimestral
