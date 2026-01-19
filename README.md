# Athos – Consultor iGreen | Energia e Economia

> Site pessoal de consultor iGreen com catálogo de soluções e CTA direto para WhatsApp

[![Status](https://img.shields.io/badge/status-production-success)](https://github.com/kalebe/conexaosolar)
[![Build](https://img.shields.io/badge/build-passing-success)](https://github.com/kalebe/conexaosolar)

Landing page pessoal com páginas dinâmicas por produto, dark mode completo e experiência mobile-first.

---

## ✨ Funcionalidades

- 🎨 **Design Moderno**: Interface limpa com gradientes e animações suaves
- 🌓 **Dark Mode**: Tema escuro/claro com persistência localStorage
- 📱 **Mobile-First**: 100% responsivo em todos os dispositivos
- ⚡ **Performance**: Build otimizado (285KB → 87KB gzip), lazy loading
- 🎯 **SEO Ready**: Meta tags, structured data, sitemap.xml
- ♿ **Acessível**: WCAG AA, aria-labels, focus states
- 🔄 **SPA**: React Router com rotas dinâmicas por produto
- 📦 **Produtos**: Páginas dedicadas + modal de preview
- 💬 **WhatsApp**: Integração direta com mensagens personalizadas
- 🎁 **iGreen Club**: Seção de benefícios com prêmios e descontos

---

## 📄 Páginas

- **/** - Home (Hero, Soluções, Benefícios, iGreen Club, CTA, Contato)
- **/parcerias** - Página de parcerias e licenciamento
- **/:productId** - Página dinâmica do produto (ex.: `/green`, `/solar`, `/placas`, `/livre`, `/telecom`, `/expansao`)

---

## 🚀 Stack Tecnológico

### Core
- ⚛️ **React 18.3.1** - UI Library
- 📘 **TypeScript 5.5.x** - Type Safety
- ⚡ **Vite 5.4.x** - Build Tool
- 🎨 **Tailwind CSS 3.4.1** - Utility-First CSS

### Bibliotecas
- 🧭 **React Router DOM 6.30.x** - Roteamento SPA
- 🎭 **next-themes 0.4.4** - Theme Management
- 🎯 **Lucide React 0.468.0** - Ícones SVG

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
npm run typecheck    # Type checking
```

---

## 🎨 Personalização

### Perfil do consultor (portabilidade consultor → consultor)
O perfil (nome, foto, selo, mensagens e SEO) é carregado em runtime via `public/consultant.json`.

- **Padrão (fallback):** `public/consultant.json`
- **Multi-consultor por ENV (recomendado):**
	- Crie `public/consultant.<id>.json` (use `public/consultant.example.json` como base)
	- Defina `VITE_CONSULTANT_ID=<id>` (copie `.env.example` para `.env.local`)
	- O app tenta carregar `/consultant.<id>.json` e cai para `/consultant.json` automaticamente

Foto do consultor:
- `photo.src` deve apontar para um arquivo direto em `public/assets/consultant/`.
	- Ex.: `/assets/consultant/athos.jpg` ou `/assets/consultant/athos.webp`
	- Recomendado: imagem quadrada (ex.: 800x800) e arquivo leve (ex.: < 200KB)

### WhatsApp
O número do WhatsApp é centralizado em `src/config/whatsapp.ts`.

- Para alterar sem mexer no código, defina `VITE_WHATSAPP_NUMBER`.
- Exemplo: crie um `.env.local` com:
  - `VITE_WHATSAPP_NUMBER=5519996693018`

> Observação: se `public/consultant.json` tiver `whatsapp.number`, ele tem prioridade para facilitar a troca de consultor.

### Dados dos Produtos
Edite `src/data/productDetails.ts` (fonte canônica das páginas) e `src/data/solutions.ts` (cards/carrossel).

---

## 🧭 Governed Snapshot (governanca-system)

Esta landing consome um snapshot governado publicado como artefato estático no GitHub Pages do projeto [AthosSperber/governanca-system](https://github.com/AthosSperber/governanca-system).

- **Pages demo:** https://athossperber.github.io/governanca-system/
- **JSON público:** https://athossperber.github.io/governanca-system/governed_snapshot_conexao_solar.json

### Configuração via ENV

Defina `VITE_GOVERNANCA_SNAPSHOT_URL` para sobrescrever a URL do snapshot (copie `.env.example` para `.env.local`):

```bash
VITE_GOVERNANCA_SNAPSHOT_URL=https://athossperber.github.io/governanca-system/governed_snapshot_conexao_solar.json
```

### Rodar localmente

```bash
npm install
npm run dev
```

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
| Background | `emerald-50` | `gray-950` |
| Superfícies | `white/90` + `emerald-50/..` | `gray-900/..` + `emerald-950/..` |
| Borders | `emerald-100/200` | `emerald-900` |
| Text | `gray-900` | `gray-100` |
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

**Consultor iGreen**
- 📱 WhatsApp: via `public/consultant.json` ou `VITE_WHATSAPP_NUMBER`

**Desenvolvido por:** Kalebe

---

<div align="center">

**⚡ ConectaSolar - Energia Inteligente ⚡**

[![Status](https://img.shields.io/badge/status-production-success)](https://github.com/kalebe/conexaosolar)
[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

Feito com ❤️ e ⚛️ React

</div>

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

O script `scripts/convert-images.js` gera arquivos `-480.webp`, `-768.webp` e `-1200.webp` ao lado das imagens originais em `src/assets/images/` (pipeline das imagens do site). Os componentes já usam `<picture>`/`srcset` para carregar o melhor formato/tamanho.

Observação: a conversão usa a biblioteca `sharp` (instalada como devDependency). Em algumas plataformas pode ser necessário instalar bibliotecas nativas (vcbuild/ prebuilt binaries). Se preferir, gere as WebP manualmente com `magick`.
