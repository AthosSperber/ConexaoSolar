# 🎨 Padrões de UX/UI do ConectaSolar

Este documento define os princípios visuais e de interação que guiam o desenvolvimento do produto.

## Princípios Fundamentais

1. **Mobile-First:** Toda interface deve ser desenhada e implementada primeiro para dispositivos móveis e depois adaptada para telas maiores.

2. **Clareza e Conforto Visual:** A tipografia, o contraste e os espaçamentos devem priorizar a leitura fácil e uma experiência de uso agradável. O usuário nunca deve se sentir perdido ou sobrecarregado.

3. **Consistência:** Componentes devem ser reutilizáveis e manter um padrão visual e de comportamento em toda a plataforma. Classes utilitárias do Tailwind devem ser preferidas para manter a consistência.

4. **Feedback Imediato:** O usuário deve sempre receber feedback visual claro para suas ações (cliques, preenchimento de formulários, hover), utilizando transições suaves.

5. **Animações Funcionais:** Animações devem ser suaves, rápidas (200-300ms) e servir a um propósito (guiar o olho, indicar uma transição), nunca apenas por estética.

## 🌗 Dark Mode / Light Mode (OBRIGATÓRIO)
O sistema **deve** suportar os temas Dark (🌙) e Light (☀️).

- **Implementação Técnica:** A solução utiliza a biblioteca `next-themes` que adiciona a classe `dark` ao elemento `<html>`. Os estilos são gerenciados pelas classes de utilitário do Tailwind CSS (ex: `bg-white dark:bg-gray-900`).
- **Provedor:** A aplicação é encapsulada pelo `ThemeProvider`, configurado para usar a classe do sistema como padrão (`defaultTheme="system"`) e persistir a escolha do usuário no `localStorage`.
- **Controle:** Um botão `ThemeToggle` com ícones de sol e lua está posicionado no `Header`, permitindo ao usuário alternar manualmente entre 'Light', 'Dark' ou voltar para o modo 'System'.
- **Padrão de Cores (Base):**
  - **Light:** Fundo `bg-gray-50` ou `bg-white`, Texto `text-gray-800` ou `text-gray-900`.
  - **Dark:** Fundo `dark:bg-gray-900` ou `dark:bg-black`, Texto `dark:text-gray-200` ou `dark:text-gray-50`.

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
- **Fundos**: Gradientes suaves (`from-white to-green-50`)

### Interações
- **Hover**: `hover:shadow-lg transition-all duration-300`
- **Active**: `active:scale-95`
- **Focus**: Sempre visível para acessibilidade
