# 🎨 Diretrizes de UX e UI - ConexãoSolar

## 📐 Princípios de Design

### 1. Mobile-First
**"Design para o menor, enriqueça para o maior"**

- Todos os componentes são projetados inicialmente para mobile (320px+)
- Expansão progressiva para tablets (768px+) e desktops (1024px+)
- Touch targets mínimos de 44x44px
- Conteúdo priorizado e hierarquizado

### 2. Clareza e Simplicidade
**"Menos é mais, mas não minimalista demais"**

- Uma ação primária clara por seção
- Hierarquia visual através de tamanho, cor e espaçamento
- Textos concisos e diretos ao ponto
- Remoção de elementos desnecessários

### 3. Consistência Visual
**"Previsibilidade gera confiança"**

- Padrões visuais repetidos em todo o site
- Espaçamento baseado em múltiplos de 4px
- Componentes reutilizáveis
- Comportamentos interativos consistentes

---

## 🎨 Sistema de Cores

### Paleta Principal

#### Verde iGreen (Primária)
```css
/* Cor principal da marca */
#00A859 - rgb(0, 168, 89)

/* Variações Tailwind */
green-600: #00A859  /* Principal */
green-700: #008F4C  /* Hover states */
green-500: #10B981  /* Accents */
```

**Uso**:
- Botões primários
- Links e CTAs
- Ícones de destaque
- Badges e tags
- Elementos interativos

#### Neutros (Base)
```css
/* Backgrounds */
white:      #FFFFFF  /* Superfícies principais */
gray-50:    #F9FAFB  /* Backgrounds secundários */

/* Textos */
gray-900:   #111827  /* Texto principal */
gray-700:   #374151  /* Texto secundário */
gray-500:   #6B7280  /* Texto terciário/placeholders */

/* Borders */
gray-200:   #E5E7EB  /* Divisores e borders sutis */
gray-300:   #D1D5DB  /* Borders mais visíveis */
```

### Paleta Semântica

```css
/* Sucesso */
green-600: #00A859  /* Mensagens de sucesso, confirmações */

/* Atenção */
yellow-500: #F59E0B  /* Avisos, alertas não críticos */

/* Erro */
red-600: #DC2626  /* Erros, validações falhas */

/* Informação */
blue-600: #2563EB  /* Dicas, informações adicionais */
```

### Acessibilidade de Contraste

Todas as combinações seguem **WCAG 2.1 AA**:

| Combinação | Contraste | Status |
|------------|-----------|--------|
| `#111827` em `#FFFFFF` | 16.9:1 | ✅ AAA |
| `#00A859` em `#FFFFFF` | 2.9:1 | ⚠️ Apenas large text (≥18px) |
| `#FFFFFF` em `#00A859` | 3.5:1 | ✅ AA large text (≥18px) |
| `#374151` em `#F9FAFB` | 9.7:1 | ✅ AAA |

**Nota Importante**: O verde primário `#00A859` em fundo branco não atinge WCAG AA para texto normal (4.5:1). Use apenas para:
- Texto grande (≥18px ou ≥14px bold)
- Elementos não textuais (ícones, decorações)
- Backgrounds de botões (com texto branco por cima)

---

## 📏 Tipografia

### Fonte: System Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 
             'Fira Sans', 'Droid Sans', 'Helvetica Neue', 
             sans-serif;
```

**Justificativa**: Performance, nativa de cada OS, sem download adicional.

### Escala Tipográfica

| Uso | Tamanho Mobile | Tamanho Desktop | Weight | Class Tailwind |
|-----|----------------|-----------------|--------|----------------|
| **Display** | 2.5rem (40px) | 3.75rem (60px) | 700 | text-4xl lg:text-6xl font-bold |
| **H1** | 2rem (32px) | 3rem (48px) | 700 | text-3xl lg:text-5xl font-bold |
| **H2** | 1.5rem (24px) | 2.25rem (36px) | 700 | text-2xl lg:text-4xl font-bold |
| **H3** | 1.25rem (20px) | 1.875rem (30px) | 600 | text-xl lg:text-3xl font-semibold |
| **Body Large** | 1.125rem (18px) | 1.25rem (20px) | 400 | text-lg lg:text-xl |
| **Body** | 1rem (16px) | 1rem (16px) | 400 | text-base |
| **Body Small** | 0.875rem (14px) | 0.875rem (14px) | 400 | text-sm |
| **Caption** | 0.75rem (12px) | 0.75rem (12px) | 400 | text-xs |

### Line Height
- **Headings**: 1.2 (tight)
- **Body text**: 1.6 (relaxed)
- **Captions**: 1.4 (normal)

---

## 🔲 Espaçamento

### Sistema de Espaçamento Tailwind (múltiplos de 4px)

| Token | Pixels | Uso Comum |
|-------|--------|-----------|
| `1` | 4px | Espaços mínimos |
| `2` | 8px | Gaps pequenos |
| `3` | 12px | Padding interno |
| `4` | 16px | Espaçamento padrão |
| `5` | 20px | Padding de cards |
| `6` | 24px | Margens entre elementos |
| `8` | 32px | Espaçamento entre seções |
| `12` | 48px | Gaps grandes |
| `16` | 64px | Separação de seções |
| `20` | 80px | Padding vertical de seções |

### Regras de Espaçamento

1. **Consistência vertical**: Padding de seções sempre `py-16` (64px) ou `py-20` (80px)
2. **Padding horizontal**: `px-4` (16px) em mobile, aumenta em breakpoints maiores
3. **Gaps em grids**: `gap-4` (16px) ou `gap-6` (24px)
4. **Margem entre parágrafos**: `mb-4` (16px)

---

## 🔘 Componentes

### Botões

#### Botão Primário (CTA)
```tsx
className="bg-green-600 text-white py-4 px-6 rounded-3xl 
           font-semibold text-lg shadow-md 
           transition-all duration-200
           hover:bg-green-700 hover:shadow-lg
           active:scale-[0.98]"
```

**Características**:
- Altura mínima: 56px (touch-friendly)
- Border radius: 24px (rounded-3xl)
- Sombra sutil: `shadow-md`
- Transição suave em hover
- Scale down em active (feedback tátil)

#### Botão Secundário
```tsx
className="bg-white text-green-600 py-4 px-6 rounded-3xl 
           font-semibold text-lg border-2 border-green-600
           transition-all duration-200
           hover:bg-green-50
           active:scale-[0.98]"
```

#### Botão Terciário (Link)
```tsx
className="text-green-600 font-semibold underline
           hover:text-green-700 transition-colors"
```

### Cards

#### Card Padrão
```tsx
className="bg-white p-5 rounded-3xl shadow-sm 
           transition-shadow duration-200
           hover:shadow-md active:scale-[0.98]"
```

**Características**:
- Background branco sobre fundo cinza
- Padding: 20px
- Border radius: 24px
- Sombra sutil que aumenta em hover
- Micro-interação de scale em click

#### Card CTA
```tsx
className="bg-green-600 text-white p-5 rounded-3xl 
           shadow-md transition-all duration-200
           hover:bg-green-700 hover:shadow-lg
           active:scale-[0.98]"
```

### Inputs de Formulário

```tsx
className="w-full px-4 py-3 border-2 border-gray-300 
           rounded-2xl text-base
           transition-colors duration-200
           focus:border-green-600 focus:outline-none 
           focus:ring-2 focus:ring-green-600/20"
```

**Características**:
- Border radius: 16px (rounded-2xl)
- Estados claros: default, focus, error
- Altura mínima: 48px
- Placeholder com cor `gray-500`

### Tags e Badges

```tsx
className="text-green-600 font-semibold text-sm 
           tracking-wide uppercase"
```

---

## 🔄 Animações e Transições

### Princípios
- **Sutis e rápidas**: 150-300ms
- **Propósito claro**: Feedback ou guiar atenção
- **Respeitam prefers-reduced-motion**

### Transições Padrão

```css
/* Cores e backgrounds */
transition: background-color 200ms ease-in-out;

/* Sombras */
transition: box-shadow 200ms ease-in-out;

/* Transforms */
transition: transform 150ms ease-out;

/* Múltiplas propriedades */
transition: all 200ms ease-in-out;
```

### Micro-interações

1. **Hover em botões/cards**:
   - Escurecimento de cor: `hover:bg-green-700`
   - Aumento de sombra: `hover:shadow-lg`

2. **Active (clique)**:
   - Scale down: `active:scale-[0.98]`
   - Feedback imediato

3. **Focus em inputs**:
   - Border colorida: `focus:border-green-600`
   - Ring sutil: `focus:ring-2 focus:ring-green-600/20`

4. **Scroll Snap**:
   - Nativo do CSS: `scroll-behavior: smooth`

---

## 📱 Responsividade

### Breakpoints Tailwind

```js
{
  sm: '640px',   // Landscape phones
  md: '768px',   // Tablets
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px' // Extra large
}
```

### Abordagem Mobile-First

```tsx
// ❌ Errado (Desktop-first)
className="text-xl md:text-base"

// ✅ Correto (Mobile-first)
className="text-base md:text-xl"
```

### Container Responsivo

```tsx
className="px-4 max-w-md mx-auto        // Mobile
           md:max-w-2xl                 // Tablet
           lg:max-w-4xl                 // Desktop
           xl:max-w-6xl"                // Large desktop
```

---

## 🎯 Navegação e Scroll

### Scroll Snap

```css
/* Container */
.scroll-snap-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

/* Sections */
.scroll-snap-section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  min-height: 100vh;
}
```

**Comportamento**:
- Sections "grudam" no topo ao scroll
- Navegação suave entre seções
- Funciona com scroll de mouse, touch e teclado

### Header Fixo

```tsx
className="fixed top-0 left-0 right-0 z-50 
           bg-white/95 backdrop-blur-sm 
           shadow-sm"
```

**Características**:
- Sempre visível
- Background semi-transparente com blur
- Sombra sutil
- z-index alto (50)

### Âncoras de Navegação

```tsx
<a href="#contato" className="smooth-scroll">
  Contato
</a>
```

```css
html {
  scroll-behavior: smooth;
}
```

---

## ♿ Acessibilidade

### Cores e Contraste
- ✅ Contraste mínimo AA (4.5:1 para texto normal)
- ✅ Contraste AAA quando possível (7:1)
- ✅ Não usar apenas cor para transmitir informação

### Semântica HTML
```tsx
// ✅ Correto
<button onClick={handleClick}>Clique</button>

// ❌ Errado
<div onClick={handleClick}>Clique</div>
```

### Estados de Foco Visíveis
```tsx
className="focus:outline-none focus:ring-2 
           focus:ring-green-600 focus:ring-offset-2"
```

### Textos Alternativos
```tsx
<img src="solar.jpg" alt="Painéis solares instalados em telhado residencial" />
```

### ARIA Labels quando necessário
```tsx
<button aria-label="Fechar modal">
  <X />
</button>
```

---

## 📐 Layout Patterns

### Hero Section
```tsx
<section className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-b from-green-50 to-white 
                    px-4 py-20">
  <div className="max-w-2xl text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      {/* Título */}
    </h1>
    <p className="text-lg md:text-xl text-gray-700 mb-8">
      {/* Descrição */}
    </p>
    <button className="btn-primary">
      {/* CTA */}
    </button>
  </div>
</section>
```

### Cards Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                gap-6 px-4 py-16">
  {/* Cards */}
</div>
```

### Seção com Imagem e Texto
```tsx
<section className="py-16 px-4">
  <div className="max-w-6xl mx-auto 
                  grid md:grid-cols-2 gap-8 items-center">
    <div>
      {/* Conteúdo de texto */}
    </div>
    <div>
      <img className="rounded-3xl shadow-lg" />
    </div>
  </div>
</section>
```

---

## 🎨 Iconografia

### Biblioteca: Lucide React
```tsx
import { Sun, Phone, Mail, ChevronRight } from 'lucide-react';
```

**Características**:
- Stroke-based (outline style)
- Consistente com design limpo
- Leve e tree-shakeable

### Tamanhos Padrão
- **Small**: 16px (w-4 h-4)
- **Normal**: 24px (w-6 h-6)
- **Large**: 32px (w-8 h-8)
- **XL**: 48px (w-12 h-12)

### Cores
- Verde primário: `text-green-600`
- Cinza neutro: `text-gray-700`
- Branco em backgrounds escuros: `text-white`

---

## 📸 Imagens

### Formatos
1. **WebP**: Formato preferencial (85% quality)
2. **Fallback**: JPEG ou PNG original

### Responsive Images
```tsx
<picture>
  <source
    type="image/webp"
    srcSet="img-480.webp 480w, img-768.webp 768w, img-1200.webp 1200w"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
  <img src="img.jpg" alt="Descrição" loading="lazy" />
</picture>
```

### Lazy Loading
```tsx
<img loading="lazy" />
```

### Border Radius
- Cards de produto: `rounded-3xl` (24px)
- Imagens destacadas: `rounded-2xl` (16px)
- Avatares: `rounded-full`

---

## 🔔 Feedback e Estados

### Loading
```tsx
<div className="flex items-center justify-center py-16">
  <div className="animate-spin rounded-full h-12 w-12 
                  border-4 border-gray-200 
                  border-t-green-600" />
</div>
```

### Mensagens de Sucesso
```tsx
<div className="bg-green-50 border-l-4 border-green-600 
                p-4 rounded-r-lg">
  <p className="text-green-800">Mensagem enviada com sucesso!</p>
</div>
```

### Mensagens de Erro
```tsx
<div className="bg-red-50 border-l-4 border-red-600 
                p-4 rounded-r-lg">
  <p className="text-red-800">Ocorreu um erro. Tente novamente.</p>
</div>
```

### Estados de Input
```tsx
// Normal
"border-gray-300"

// Focus
"border-green-600 ring-2 ring-green-600/20"

// Error
"border-red-600 ring-2 ring-red-600/20"

// Success
"border-green-600"

// Disabled
"bg-gray-100 cursor-not-allowed opacity-60"
```

---

## 📋 Checklist de Revisão UX/UI

Antes de considerar uma feature "pronta", verificar:

### Visual
- [ ] Segue a paleta de cores definida
- [ ] Usa componentes reutilizáveis quando possível
- [ ] Bordas arredondadas consistentes (rounded-3xl ou rounded-2xl)
- [ ] Espaçamento segue sistema de 4px
- [ ] Tipografia segue escala definida

### Interação
- [ ] Feedback visual em hover
- [ ] Feedback tátil em click (active:scale)
- [ ] Transições suaves (200ms)
- [ ] Touch targets ≥ 44x44px
- [ ] Estados de loading quando aplicável

### Responsividade
- [ ] Funciona em 320px (mobile pequeno)
- [ ] Breakpoints intermediários testados
- [ ] Sem scroll horizontal indesejado
- [ ] Imagens responsivas com srcset

### Acessibilidade
- [ ] Contraste AA mínimo
- [ ] Semântica HTML correta
- [ ] Estados de foco visíveis
- [ ] Textos alternativos em imagens
- [ ] Navegável por teclado

### Performance
- [ ] Imagens otimizadas (WebP)
- [ ] Lazy loading quando apropriado
- [ ] Sem animações pesadas
- [ ] Código CSS purgado

---

**Última Atualização**: Dezembro 2024  
**Mantenedor**: Equipe de Design e Desenvolvimento
