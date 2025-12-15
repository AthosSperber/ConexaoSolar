# 🏗️ Arquitetura do ConectaSolar

Este documento descreve a estrutura de pastas, a organização do código e a estratégia de arquitetura do sistema.

## Estrutura de Pastas (Atual)

A estrutura segue o padrão de um projeto Vite + React.

```
/
├── public/
├── scripts/              # Scripts de utilidade (conversão de imagem)
├── src/
│   ├── assets/           # Imagens e outros arquivos estáticos
│   ├── components/       # Componentes React reutilizáveis
│   │   ├── layout/       # AppLayout, Header, Footer
│   │   ├── sections/     # Hero, About, SolutionsSection, BenefitsSection, CTASection
│   │   └── ui/           # SolutionCard, BenefitCard, Button, Carousel
│   ├── data/             # Dados mockados ou estáticos (texts.ts, solutions.ts, partner.ts)
│   ├── lib/              # Configuração de clientes (ex: supabase.ts)
│   ├── pages/            # Componentes de página completos (ex: Partnerships.tsx)
│   └── App.tsx           # Ponto de entrada principal da aplicação
└── docs/                 # Documentação do projeto
```

## Front-end

- **Stack:** Vite, React 18, TypeScript, Tailwind CSS.
- **Roteamento:** O projeto utiliza `react-router-dom` para gerenciar a navegação, permitindo uma arquitetura de múltiplas páginas (MPA) escalável.
- **Estrutura de Layout:** Um componente `AppLayout.tsx` define a estrutura visual comum (Header, Footer) e utiliza um `<Outlet>` para renderizar a página correspondente à rota ativa.
- **Páginas:** Os componentes de página (como `Home.tsx` e `Partnerships.tsx`) residem em `src/pages` e são associados a rotas específicas no arquivo `main.tsx`.

## Arquitetura de Componentes

### AppLayout
Wrapper principal que garante:
- Flexbox vertical (`flex flex-col min-h-screen`)
- Footer sempre no fundo da página
- Estrutura semântica (Header → Main → Footer)

### Seções
Cada seção segue o padrão:
1. Container full-width (`w-full`)
2. Padding vertical responsivo (`py-20 md:py-24 lg:py-32`)
3. Container centralizado interno (`max-w-6xl mx-auto px-4`)
4. Fundo próprio (branco, cinza, gradiente)
5. Border-top sutil para separação visual

### Componentes UI
Componentes reutilizáveis que seguem os padrões de UX/UI documentados:
- SolutionCard: Card de solução com ícone, título, descrição
- BenefitCard: Card de benefício com emoji, título, descrição
- Carousel: Carrossel horizontal com indicadores dinâmicos

## Back-end

- **Atual:** O "back-end" se resume à integração com o **Supabase** para persistir dados do formulário de contato.
- **Futuro:** A arquitetura deve prever a criação de uma API dedicada (ex: Node.js, ou Serverless Functions) para lidar com lógica de negócio complexa, autenticação de usuários (clientes e licenciados) e gerenciamento de dados. O front-end deve ser desenvolvido pensando em consumir essa futura API.

## Princípios Arquiteturais

1. **Separação de Responsabilidades:** Dados em `/data`, UI em `/components/ui`, layout em `/components/layout`, seções em `/components/sections`.
2. **Container Centralizado:** Nenhum conteúdo deve vazar para fora do viewport. Overflow horizontal é permitido apenas dentro de carrosséis específicos.
3. **Mobile-First:** Breakpoints do Tailwind (`md:`, `lg:`) aplicados progressivamente.
4. **Lazy Loading:** Seções menos críticas carregadas sob demanda.
5. **TypeScript Strict:** Tipagem forte para prevenir erros em tempo de desenvolvimento.
