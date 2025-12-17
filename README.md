# ConectaSolar ⚡

> Plataforma web moderna para soluções em energia limpa e conectividade

[![Status](https://img.shields.io/badge/status-production-success)](https://github.com/kalebe/conexaosolar)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/kalebe/conexaosolar)
[![Build](https://img.shields.io/badge/build-passing-success)](https://github.com/kalebe/conexaosolar)

Landing page profissional com sistema de produtos, dark mode completo e experiência mobile-first otimizada.

---

## ✨ Funcionalidades

- 🎨 **Design Moderno**: Interface limpa com gradientes e animações suaves
- 🌓 **Dark Mode**: Tema escuro/claro com persistência localStorage
- 📱 **Mobile-First**: 100% responsivo em todos os dispositivos
- ⚡ **Performance**: Build otimizado (285KB → 87KB gzip), lazy loading
- 🎯 **SEO Ready**: Meta tags, structured data, sitemap.xml
- ♿ **Acessível**: WCAG AA, aria-labels, focus states
- 🔄 **SPA**: React Router com 8 páginas completas
- 📦 **6 Produtos**: Páginas dedicadas + modal de preview
- 💬 **WhatsApp**: Integração direta com mensagens personalizadas
- 🎁 **iGreen Club**: Seção de benefícios com prêmios e descontos

---

## 📄 Páginas

- **/** - Home (Hero, Soluções, Benefícios, iGreen Club, CTA, Contato)
- **/green** - Conexão Green (economia na conta de luz)
- **/solar** - Conexão Solar (energia solar por assinatura)
- **/placas** - Conexão Placas (instalação de painéis solares)
- **/livre** - Conexão Livre (mercado livre de energia)
- **/telecom** - Conexão Telecom (planos de telefonia)
- **/expansao** - Conexão Expansão (programa de licenciados)
- **/parcerias** - Página de parcerias e licenciamento

---

## 🚀 Stack Tecnológico

### Core
- ⚛️ **React 18.3.1** - UI Library
- 📘 **TypeScript 5.6.2** - Type Safety
- ⚡ **Vite 5.4.8** - Build Tool Ultra-Rápido
- 🎨 **Tailwind CSS 3.4.1** - Utility-First CSS

### Bibliotecas
- 🧭 **React Router DOM 6.28.0** - Roteamento SPA
- 🎭 **next-themes 0.4.4** - Theme Management
- 🎯 **Lucide React 0.468.0** - Ícones SVG
- 📝 **React Hook Form** - Validação de formulários

---

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Setup Local

```bash
# 1. Clone o repositório
git clone https://github.com/kalebe/conexaosolar.git
cd conexaosolar

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev

# 4. Abra no navegador
# http://localhost:5173
```

### Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento (Vite)
npm run build        # Build de produção
npm run preview      # Preview do build
npm run lint         # Lint com ESLint
npx tsc --noEmit     # Type checking
```

---

## 🎨 Personalização

### Cores (Tailwind)
```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      green: {
        600: '#10b981', // Verde primário ConectaSolar
      }
    }
  }
}
```

### WhatsApp
Busque por `5519996693018` e substitua pelo seu número.

### Dados dos Produtos
Edite `src/data/productDetails.ts` para customizar informações.

---

## 📦 Build e Deploy

### Build de Produção

```bash
npm run build

# Output: dist/
# - Minificado e otimizado
# - Assets com hash para cache
# - ~285KB JS (87KB gzip)
```

### Deploy Rápido

**Vercel (Recomendado):**
```bash
npm i -g vercel
vercel --prod
```

**Netlify:**
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

Veja [DEPLOY.md](./DEPLOY.md) para instruções completas.

---

## 🎨 Design System

### Paleta de Cores

| Uso | Claro | Escuro |
|-----|-------|--------|
| Background | `white` | `gray-900` |
| Cards | `white` | `gray-800` |
| Borders | `gray-200` | `gray-700` |
| Text | `gray-900` | `white` |
| Primary | `green-600` | `green-500` |

### Espaçamentos
- Seções: `py-16 md:py-20 lg:py-28`
- Cards: `p-8 md:p-10`
- Gap: `gap-6 lg:gap-8`

### Tipografia
- Heading: `text-3xl → 6xl` (responsivo)
- Body: `text-base → xl`
- Font: Inter (system fonts)

---

## 📁 Estrutura do Projeto

```
conexaosolar/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # Hero, About, Solutions, etc.
│   │   ├── ui/              # Button, Card, Modal, etc.
│   │   └── providers/       # ThemeProvider
│   ├── data/
│   │   ├── productDetails.ts    # Dados completos dos produtos
│   │   ├── solutions.ts         # Cards do carrossel
│   │   └── texts.ts             # Conteúdos textuais
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── ProductPage.tsx      # Template dinâmico
│   │   └── Partnerships.tsx
│   ├── assets/images/           # Imagens otimizadas WebP
│   ├── App.tsx
│   └── main.tsx
├── docs/                        # Documentação completa
├── CHANGELOG.md                # Histórico de versões
├── DEPLOY.md                   # Guia de deploy
└── README.md                   # Este arquivo
```

---

## 📚 Documentação

- 📖 [CHANGELOG.md](./CHANGELOG.md) - Histórico de versões detalhado
- 🚀 [DEPLOY.md](./DEPLOY.md) - Guia completo de deploy
- 🗺️ [docs/ROADMAP.md](./docs/ROADMAP.md) - Planejamento
- ⚖️ [docs/DECISOES.md](./docs/DECISOES.md) - Decisões técnicas
- 🏗️ [docs/ARQUITETURA.md](./docs/ARQUITETURA.md) - Arquitetura
- 📋 [docs/BACKLOG.md](./docs/BACKLOG.md) - Próximas features

---

## 📞 Contato

**ConectaSolar**
- 📱 WhatsApp: +55 (51) 9 9669-3018
- 🌐 Website: conectasolar.com.br
- 📧 Email: contato@conectasolar.com.br

**Desenvolvido por:** Kalebe

---

<div align="center">

**⚡ ConectaSolar - Energia Inteligente ⚡**

[![Status](https://img.shields.io/badge/status-production-success)](https://github.com/kalebe/conexaosolar)
[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

Feito com ❤️ e ⚛️ React

</div>

## Estrutura de Componentes

```
src/
├── components/
│   ├── Header.tsx          # Navegação fixa
│   ├── Hero.tsx            # Seção inicial
│   ├── Products.tsx        # Cards de produtos
│   ├── Contact.tsx         # Formulário
│   ├── Footer.tsx          # Rodapé
│   └── WhatsAppButton.tsx  # Botão flutuante
├── lib/
│   └── supabase.ts         # Cliente Supabase
├── App.tsx                 # Componente principal
└── main.tsx               # Entry point
```

## Database Schema

O projeto usa uma tabela `contacts` no Supabase com os seguintes campos:

- `id` (uuid)
- `name` (text)
- `phone` (text)
- `email` (text)
- `message` (text)
- `created_at` (timestamptz)

## SEO

O site está otimizado para os seguintes termos:
- Energia solar rio claro
- Energia solar sp
- Painéis solares rio claro
- Economia na conta de luz
- Instalação energia solar

## Otimização de Imagens e Extração de PDF

Se você tem um PDF com imagens (catálogo, materiais de marketing), siga estes passos para reutilizar as imagens no site:

1. Extraia imagens do PDF para `src/assets/images/`:
	- Recomendo usar `pdfimages` (do poppler) ou `magick` (ImageMagick).
	- Exemplo com `pdfimages`:

```bash
pdfimages -j path/to/document.pdf output_prefix
```

2. Renomeie as imagens para corresponder aos nomes usados no projeto (por exemplo `solar.png`, `placas.png`, `green-lightbill.jpg`, `telecom.png`, `livre.png`).

3. Instale dependências e gere versões WebP e `srcset` com o script incluído:

```bash
npm install
npm run images:convert
```

O script `scripts/convert-images.js` gera arquivos `-480.webp`, `-768.webp` e `-1200.webp` ao lado das imagens originais. Os componentes já usam `<picture>`/`srcset` para carregar o melhor formato/tamanho.

Observação: a conversão usa a biblioteca `sharp` (instalada como devDependency). Em algumas plataformas pode ser necessário instalar bibliotecas nativas (vcbuild/ prebuilt binaries). Se preferir, gere as WebP manualmente com `magick`.

