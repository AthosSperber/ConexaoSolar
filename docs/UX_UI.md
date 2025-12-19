# 🎨 Padrões de UX/UI do ConectaSolar

Este documento define os princípios visuais e de interação que guiam o desenvolvimento do produto.

## Princípios Fundamentais

1. **Mobile-First:** Toda interface deve ser desenhada e implementada primeiro para dispositivos móveis e depois adaptada para telas maiores.

2. **Clareza e Conforto Visual:** A tipografia, o contraste e os espaçamentos devem priorizar a leitura fácil e uma experiência de uso agradável. O usuário nunca deve se sentir perdido ou sobrecarregado.

3. **Consistência:** Componentes devem ser reutilizáveis e manter um padrão visual e de comportamento em toda a plataforma. Classes utilitárias do Tailwind devem ser preferidas para manter a consistência.

4. **Feedback Imediato:** O usuário deve sempre receber feedback visual claro para suas ações (cliques, preenchimento de formulários, hover), utilizando transições suaves.

5. **Animações Funcionais:** Animações devem ser suaves, rápidas (200-300ms) e servir a um propósito (guiar o olho, indicar uma transição), nunca apenas por estética.

## 📣 Copy e Conformidade (APN Dez/2025)

Para conteúdos ligados ao **iGreen Club** (roleta, cashback, número da sorte, etc.), o texto deve seguir estas regras:

- Evitar promessas absolutas (ex.: “garantido”, “sem limites”, “até 100%” como regra fixa).
- Sempre condicionar a **regras/campanhas vigentes** e critérios de **indicação válida** (cliente indicado validado e ativo).
- Quando falar em cashback, deixar claro que o uso é **para abater na conta de energia** (conforme regras).
- Quando possível, oferecer um link neutro de referência: https://www.igreenenergy.com.br/igreenclub

Fonte viva do projeto: `docs/REGRAS_APN_2025.md`.

## 🔗 Branding — Link Preview (Open Graph)

- OG image padrão: `public/og-image.png` (1200×630).
- Deve ter alto contraste e legibilidade no mobile.
- Deve funcionar em fundos claros/escuros (a OG image é estática; priorizar legibilidade).
- `public/apple-touch-icon.png` (180×180) para iOS.

## 🌗 Dark Mode / Light Mode (OBRIGATÓRIO)
O sistema **deve** suportar os temas Dark (🌙) e Light (☀️).

- **Implementação Técnica:** A solução utiliza a biblioteca `next-themes` que adiciona a classe `dark` ao elemento `<html>`. Os estilos são gerenciados pelas classes de utilitário do Tailwind CSS (ex: `bg-white dark:bg-gray-900`).
- **Provedor:** A aplicação é encapsulada pelo `ThemeProvider`, configurado para usar a classe do sistema como padrão (`defaultTheme="system"`) e persistir a escolha do usuário no `localStorage`.
- **Controle:** Um botão `ThemeToggle` com ícones de sol e lua está posicionado no `Header`, permitindo ao usuário alternar manualmente entre 'Light', 'Dark' ou voltar para o modo 'System'.
- **Padrão de Cores (Base):**
  - **Light (atual):** Fundo `bg-emerald-50` e seções com `bg-emerald-50/..` (menos “branco chapado”). Texto `text-gray-900`.
  - **Dark (atual):** Fundo `dark:bg-gray-950` com superfícies `dark:bg-gray-900/..` e nuance `dark:to-emerald-950/..`. Texto `dark:text-gray-100`.

## Padrões de Layout Implementados

### Container Centralizado
Todas as seções devem usar:
```tsx
<div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
  {/* conteúdo */}
</div>
```

### Espaçamento Vertical
- Mobile: `py-16`
- Tablet: `md:py-20` ou `md:py-24`
- Desktop: `lg:py-32`

### Tipografia
- **Headings principais**: `text-3xl md:text-4xl lg:text-5xl font-bold`
- **Subtítulos**: `text-lg md:text-xl text-gray-600`
- **Corpo de texto**: `text-base leading-relaxed`

### Cores
- **Principal**: Verde (`green-600`, `green-700`)
- **Neutras**: Cinza (`gray-50` a `gray-900`)
- **Fundos**: Emerald suave no light (`emerald-50`) e nuance emerald no dark (`emerald-950/..`)

### Interações
- **Hover**: `hover:shadow-lg transition-all duration-300`
- **Active**: `active:scale-95`
- **Focus**: Sempre visível para acessibilidade

## 📱 Responsividade Mobile-First

Todos os componentes devem ser desenvolvidos primeiro para mobile e progressivamente melhorados para telas maiores.

### Breakpoints (Tailwind)
- **sm**: 640px (telefones grandes/pequenos tablets)
- **md**: 768px (tablets)
- **lg**: 1024px (desktops pequenos)
- **xl**: 1280px (desktops grandes)

### Padrões de Escalonamento

#### Títulos Principais (h1, h2)
```tsx
className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
```

#### Subtítulos (h3, p grandes)
```tsx
className="text-base sm:text-lg md:text-xl"
```

#### Paddings Verticais (sections)
```tsx
className="py-12 md:py-16 lg:py-24"
```

#### Margens (entre elementos)
```tsx
className="mb-8 md:mb-12"
```

#### Botões
```tsx
className="px-3 py-2 md:px-4 text-xs md:text-sm"
```

#### Grids Responsivos
```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
```

#### Gaps e Espaçamentos
```tsx
className="gap-2 sm:gap-3 md:gap-4 lg:gap-6"
```

### Tabelas em Mobile
Tabelas devem ter scroll horizontal em mobile:
```tsx
<div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
  <table className="w-full min-w-[600px]">
    {/* conteúdo */}
  </table>
</div>
```

### Elementos Ocultos/Visíveis por Breakpoint
- Ocultar em mobile, mostrar em desktop: `hidden md:block` ou `hidden md:flex`
- Mostrar em mobile, ocultar em desktop: `block md:hidden` ou `flex md:hidden`
- ThemeToggle móvel: Dentro de wrapper `<div className="md:hidden">`

### Header (mobile)

- Padrão: botão de menu (hambúrguer) em `md:hidden` + painel colapsável com links.
- Acessibilidade: `aria-expanded`, `aria-controls` e rótulo "Abrir/Fechar menu".
- Comportamento:
  - Fecha ao clicar em item.
  - Fecha ao navegar (troca de rota).
  - Fecha com `Escape`.
  - Fecha ao mudar para `md+` (resize/rotação) para evitar estado inconsistente.
- UX: usar transição sutil (200ms) e respeitar `prefers-reduced-motion`.
- Acessibilidade (teclado):
  - Ao abrir o menu: foco vai para o primeiro item.
  - Ao fechar o menu: foco retorna para o botão do menu.

## Fotos do consultor

Para manter performance e portabilidade sem aumentar a complexidade operacional, as fotos do consultor são gerenciadas como **assets prontos** na pasta pública.

> Importante: isso é diferente do pipeline de imagens gerais do site (catálogo/sections) em `src/assets/images/`, que pode usar `npm run images:convert` para gerar variações WebP e `srcset`.

### Padrão (manual)

 - Salvar a foto em: `public/assets/consultant/<id>.jpg` (ou `<id>.webp`)
 - Recomendado: 800x800 (ou ~800px no maior lado) e < 200KB (ideal < 150KB)
 - Enquadramento: busto/rosto, olhos no terço superior, fundo sem distrações

### Uso no perfil

Nos arquivos `public/consultant*.json`, configure `photo.src` apontando para `/assets/consultant/<id>.jpg` (ou `.webp`) e mantenha `alt` descritivo.

## Conteúdo B2B (consultores)

- Regra: conteúdo de venda para consultores (B2B) deve ficar fora do scroll principal da Home (B2C).
- Padrão: usar rota dedicada (`/para-consultores`) reutilizando a section existente.
- Descoberta: link discreto no Footer (ex.: "Sou consultor iGreen").
