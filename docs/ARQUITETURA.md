# 🏗️ Arquitetura do Projeto - ConexãoSolar

## 📂 Estrutura de Diretórios

```
ConexaoSolar/
├── docs/                          # 📚 Documentação oficial do projeto
│   ├── README.md                  # Visão geral técnica e estratégica
│   ├── ROADMAP.md                 # Planejamento e fases do projeto
│   ├── DECISOES.md                # Registro de decisões arquiteturais (ADR)
│   ├── UX_UI.md                   # Diretrizes de design e interface
│   ├── ARQUITETURA.md             # Este arquivo - estrutura do código
│   └── BACKLOG.md                 # Melhorias futuras e ideias
│
├── public/                        # ⚡ Assets estáticos (servidos diretamente)
│   └── (vazio no momento)
│
├── scripts/                       # 🛠️ Scripts de utilidade
│   ├── convert-images.js          # Converte imagens para WebP com srcset
│   └── extract-images.js          # Extrai imagens de PDFs
│
├── src/                           # 💻 Código fonte principal
│   ├── assets/                    # 🖼️ Assets do projeto (imagens, etc)
│   │
│   ├── components/                # 🧩 Componentes React
│   │   ├── layout/                # Layout estrutural
│   │   │   ├── Header.tsx         # Navegação fixa no topo
│   │   │   └── Footer.tsx         # Rodapé com informações e links
│   │   │
│   │   ├── sections/              # Seções principais do site
│   │   │   ├── Hero.tsx           # Seção inicial (above-the-fold)
│   │   │   ├── About.tsx          # Seção "Sobre a empresa"
│   │   │   ├── SolutionsCarousel.tsx  # Carrossel de soluções
│   │   │   ├── Products.tsx       # Overview dos produtos
│   │   │   ├── ProductCarousel.tsx    # Carrossel de produtos
│   │   │   ├── Green.tsx          # Detalhes Conexão Green
│   │   │   ├── Solar.tsx          # Detalhes energia solar
│   │   │   ├── Placas.tsx         # Detalhes Conexão Placas
│   │   │   ├── Livre.tsx          # Detalhes Conexão Livre
│   │   │   ├── Telecom.tsx        # Detalhes Conexão Telecom
│   │   │   └── Contact.tsx        # Formulário de contato
│   │   │
│   │   └── ui/                    # Componentes de UI reutilizáveis
│   │       └── WhatsAppButton.tsx # Botão flutuante do WhatsApp
│   │
│   ├── data/                      # 📊 Dados estáticos tipados
│   │   ├── solutions.ts           # Dados das soluções/produtos
│   │   ├── texts.ts               # Textos e conteúdos do site
│   │   ├── partner.ts             # Informações de parceiros
│   │   └── mock.ts                # Dados mockados para desenvolvimento
│   │
│   ├── lib/                       # 🔧 Bibliotecas e configurações
│   │   └── supabase.ts            # Cliente Supabase configurado
│   │
│   ├── pages/                     # 📄 Páginas (futuras rotas)
│   │   └── Partnerships.tsx       # Página de parcerias
│   │
│   ├── App.tsx                    # 🎯 Componente raiz da aplicação
│   ├── main.tsx                   # 🚀 Entry point (renderiza App)
│   ├── index.css                  # 🎨 Estilos globais e Tailwind
│   └── vite-env.d.ts              # 📝 Type definitions do Vite
│
├── .git/                          # Git repository
├── .gitignore                     # Arquivos ignorados pelo Git
│
├── index.html                     # 📄 HTML principal (SPA root)
├── package.json                   # 📦 Dependências e scripts npm
├── package-lock.json              # 🔒 Lock de versões exatas
│
├── vite.config.ts                 # ⚙️ Configuração do Vite
├── tsconfig.json                  # ⚙️ Configuração TypeScript (base)
├── tsconfig.app.json              # ⚙️ Config TS para aplicação
├── tsconfig.node.json             # ⚙️ Config TS para scripts Node
│
├── tailwind.config.js             # 🎨 Configuração Tailwind CSS
├── postcss.config.js              # 🎨 Configuração PostCSS
├── eslint.config.js               # 🧹 Configuração ESLint
│
├── robots.txt                     # 🤖 Instruções para crawlers
├── sitemap.xml                    # 🗺️ Mapa do site para SEO
│
├── README.md                      # 📖 Documentação principal do projeto
├── ANALISE_PDF_CONEXAO_EXPANSAO_E_IGREENCLUB.md
├── DADOS_ESTRUTURADOS_PARA_REACT.md
├── EXPANSAO_EXTRACTED.txt
├── IGREENCLUB_EXTRACTED.txt
├── APN Outubro 2025.pdf           # Documento de referência
└── (outros arquivos de documentação e extração)
```

---

## 🎯 Arquitetura de Componentes

### Hierarquia de Componentes

```
App.tsx
├── Header (layout)
│   └── Navigation links
│
├── main
│   ├── Hero (sections)
│   │   └── CTA Button
│   │
│   ├── About (sections)
│   │
│   ├── SolutionsCarousel (sections)
│   │   └── Solution Cards (loop)
│   │
│   ├── Products (sections) [lazy]
│   │
│   ├── ProductCarousel (sections) [lazy]
│   │   └── Product Cards (loop)
│   │
│   ├── Green (sections) [lazy]
│   ├── Solar (sections) [lazy]
│   ├── Placas (sections) [lazy]
│   ├── Livre (sections) [lazy]
│   ├── Telecom (sections) [lazy]
│   │
│   └── Contact (sections) [lazy]
│       └── Form + Supabase integration
│
├── Footer (layout)
│   ├── Links
│   ├── Social media
│   └── Contact info
│
└── WhatsAppButton (ui)
```

---

## 🔄 Fluxo de Dados

### Dados Estáticos (Compilados)

```
src/data/*.ts
    ↓
Import nos componentes
    ↓
Renderização no build time
    ↓
HTML estático final
```

**Exemplo**:
```typescript
// src/data/solutions.ts
export const solutions = [
  { id: 'green', name: 'Conexão Green', ... },
  // ...
];

// src/components/sections/SolutionsCarousel.tsx
import { solutions } from '@/data/solutions';

export default function SolutionsCarousel() {
  return solutions.map(solution => <Card {...solution} />);
}
```

### Dados Dinâmicos (Formulário)

```
User preenche formulário
    ↓
Submit → Contact.tsx
    ↓
Validação local
    ↓
POST → Supabase Client
    ↓
Supabase Database (PostgreSQL)
    ↓
Response → UI feedback
```

**Fluxo técnico**:
```typescript
// 1. User input
<form onSubmit={handleSubmit}>

// 2. Validação
if (!name || !email) return;

// 3. API call
const { data, error } = await supabase
  .from('contacts')
  .insert({ name, email, phone, message });

// 4. Feedback
if (error) setError(...);
else setSuccess(...);
```

---

## 🚀 Lifecycle e Rendering

### Build Time (Vite)

1. **Análise de dependências**
   - Entry point: `src/main.tsx`
   - Resolve imports recursivamente
   - Tree-shaking de código não utilizado

2. **Transformação**
   - TypeScript → JavaScript (via esbuild)
   - JSX → React.createElement
   - CSS → Processado por PostCSS/Tailwind
   - Imagens → Otimizadas e hasheadas

3. **Bundling**
   - Code splitting automático
   - Chunk vendors (React, etc)
   - Chunks dinâmicos (lazy components)
   - Geração de sourcemaps

4. **Output**
   ```
   dist/
   ├── index.html
   ├── assets/
   │   ├── index-[hash].js      # Bundle principal
   │   ├── vendor-[hash].js     # Bibliotecas
   │   ├── Contact-[hash].js    # Lazy chunk
   │   ├── Products-[hash].js   # Lazy chunk
   │   └── index-[hash].css     # Estilos compilados
   └── (outros assets)
   ```

### Runtime (Browser)

1. **Carregamento inicial**
   ```
   index.html carregado
       ↓
   vendor.js baixado e executado (React, ReactDOM)
       ↓
   index.js baixado e executado (App code)
       ↓
   index.css aplicado
       ↓
   React renderiza componentes eager (Header, Hero, About, etc)
   ```

2. **Lazy loading**
   ```
   User scrolla para seção Products
       ↓
   React detecta (Intersection Observer interno)
       ↓
   Products-[hash].js baixado dinamicamente
       ↓
   Componente renderizado
   ```

3. **Interações**
   ```
   Click em botão → Event handler
       ↓
   Estado atualizado (useState, form state)
       ↓
   React re-renderiza componentes afetados
       ↓
   DOM atualizado (reconciliação)
   ```

---

## 🧩 Padrões de Código

### Componentes Funcionais

```typescript
// ✅ Padrão adotado: Functional Component + Hooks
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // lógica
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* JSX */}
    </form>
  );
}
```

### Tipagem TypeScript

```typescript
// Interfaces para props
interface SolutionCardProps {
  id: string;
  name: string;
  description: string;
  icon: string;
}

// Componente tipado
export default function SolutionCard({ 
  id, 
  name, 
  description, 
  icon 
}: SolutionCardProps) {
  return <div>{/* ... */}</div>;
}
```

### Dados Tipados

```typescript
// src/data/solutions.ts
export interface Solution {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
}

export const solutions: Solution[] = [
  {
    id: 'green',
    name: 'Conexão Green',
    // ...
  },
];
```

### Lazy Loading

```typescript
// App.tsx
import { Suspense, lazy } from 'react';

const Products = lazy(() => import('./components/sections/Products'));

export default function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Products />
    </Suspense>
  );
}
```

---

## 🎨 CSS e Estilização

### Arquitetura CSS

```
Tailwind CSS (utility-first)
    ↓
index.css (configuração global)
    ↓
Componentes com classes inline
    ↓
Build time: PurgeCSS remove CSS não usado
    ↓
Output: CSS minificado e otimizado
```

### Camadas CSS

```css
/* src/index.css */

/* 1. Base do Tailwind */
@tailwind base;

/* 2. Componentes do Tailwind */
@tailwind components;

/* 3. Utilitários do Tailwind */
@tailwind utilities;

/* 4. Global custom */
html {
  scroll-behavior: smooth;
}

/* 5. Classes customizadas com @layer */
@layer components {
  .card {
    @apply bg-white p-5 rounded-3xl shadow-sm;
  }
  
  .btn-primary {
    @apply bg-green-600 text-white py-4 rounded-3xl;
  }
}
```

### Uso nos Componentes

```tsx
// ✅ Bom: Classes utilitárias inline
<button className="bg-green-600 text-white py-4 px-6 rounded-3xl 
                   hover:bg-green-700 transition-colors">
  Clique aqui
</button>

// ✅ Bom: Classes customizadas para padrões repetidos
<div className="card">
  <h3>Card Title</h3>
</div>

// ❌ Evitar: CSS inline (perde benefícios do Tailwind)
<div style={{ backgroundColor: '#00A859' }}>...</div>
```

---

## 🔌 Integrações Externas

### Supabase (Backend)

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

**Database Schema**:
```sql
-- Table: contacts
CREATE TABLE contacts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- RLS Policy
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow insert for all" 
  ON contacts FOR INSERT 
  WITH CHECK (true);
```

### WhatsApp Business

```typescript
// components/ui/WhatsAppButton.tsx
const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
```

---

## 🛡️ Segurança

### Variáveis de Ambiente

```bash
# .env
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxx...xxx
```

**Importante**: 
- Prefixo `VITE_` é obrigatório para exposição ao client
- Keys "anon" são seguras para exposição (RLS no Supabase)
- Nunca commitar `.env` (já está no `.gitignore`)

### Content Security Policy (Futuro)

```html
<!-- index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline'; 
               style-src 'self' 'unsafe-inline';
               img-src 'self' data: https:;">
```

---

## 📊 Performance

### Code Splitting

**Chunks gerados**:
- `vendor.js`: React, ReactDOM, Supabase (~150KB gzipped)
- `index.js`: App principal + componentes eager (~30KB gzipped)
- `Contact.js`: Componente Contact (~10KB gzipped)
- `Products.js`: Componente Products (~15KB gzipped)
- Outros componentes lazy (~5-10KB cada)

### Lazy Loading Strategy

**Eager (carregado imediatamente)**:
- Header, Footer, Hero, About, SolutionsCarousel
- Componentes "above-the-fold"

**Lazy (carregado sob demanda)**:
- Products, ProductCarousel
- Seções de produtos individuais (Green, Solar, etc)
- Contact

### Otimização de Imagens

```bash
# Script: scripts/convert-images.js
Input: src/assets/images/produto.jpg (500KB)
    ↓
Output:
├── produto-480.webp   (30KB)  # Mobile
├── produto-768.webp   (50KB)  # Tablet
└── produto-1200.webp  (80KB)  # Desktop
```

---

## 🧪 Testing Strategy (Futuro)

### Estrutura Proposta

```
src/
├── components/
│   └── sections/
│       ├── Hero.tsx
│       └── Hero.test.tsx       # Unit tests
│
└── __tests__/
    ├── integration/             # Testes de integração
    └── e2e/                     # Testes E2E (Playwright)
```

### Stack de Testes Sugerida
- **Unit**: Vitest + React Testing Library
- **Integration**: Vitest
- **E2E**: Playwright

---

## 🚀 Deploy

### Build de Produção

```bash
npm run build
```

**Output**: `dist/` (pronto para deploy estático)

### Plataformas Recomendadas
- **Vercel**: Deploy automático, edge functions, analytics
- **Netlify**: Similar ao Vercel, excelente para sites estáticos
- **Cloudflare Pages**: Rápido, global, bom free tier
- **GitHub Pages**: Gratuito, mas sem edge functions

### Checklist pré-deploy
- [ ] `npm run build` executado com sucesso
- [ ] `npm run typecheck` sem erros
- [ ] `npm run lint` sem erros críticos
- [ ] Variáveis de ambiente configuradas na plataforma
- [ ] Domínio customizado configurado (se aplicável)
- [ ] Analytics configurado

---

## 📈 Monitoramento (Futuro)

### Ferramentas Sugeridas
- **Sentry**: Error tracking
- **Google Analytics 4**: Comportamento de usuários
- **Vercel Analytics**: Core Web Vitals
- **Hotjar**: Heatmaps e gravações de sessão

---

## 🔄 CI/CD (Futuro)

### Pipeline Proposto

```yaml
# .github/workflows/ci.yml
name: CI/CD

on: [push, pull_request]

jobs:
  test:
    - Checkout code
    - Install dependencies
    - Run typecheck
    - Run lint
    - Run tests
    - Build
  
  deploy:
    - Deploy to Vercel (if main branch)
```

---

## 📚 Documentação de Código

### JSDoc para Funções Complexas

```typescript
/**
 * Converte imagens para formato WebP em múltiplas resoluções
 * @param {string} inputPath - Caminho da imagem original
 * @param {number[]} sizes - Array de larguras desejadas
 * @returns {Promise<string[]>} Caminhos das imagens geradas
 */
async function convertToWebP(inputPath: string, sizes: number[]): Promise<string[]> {
  // implementação
}
```

### Comentários Estratégicos

```typescript
// ✅ Bom: Explicar "porquê", não "o quê"
// Usamos setTimeout para evitar race condition com Supabase RLS
setTimeout(() => fetchData(), 100);

// ❌ Evitar: Comentários óbvios
// Define a variável name como string vazia
const name = '';
```

---

**Última Atualização**: Dezembro 2024  
**Mantenedor**: Equipe de Desenvolvimento
