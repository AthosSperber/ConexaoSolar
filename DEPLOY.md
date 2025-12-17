# 🚀 Guia de Deploy - ConectaSolar

## ✅ Checklist Pré-Deploy

- [x] Build de produção sem erros
- [x] Todas as páginas testadas
- [x] Dark mode funcionando
- [x] Responsividade validada
- [x] Links do WhatsApp corretos
- [x] Imagens otimizadas
- [x] SEO básico implementado
- [x] Documentação completa

---

## 📦 Deploy no Vercel (Recomendado)

### Método 1: Via CLI

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy (primeiro deploy)
vercel

# 4. Deploy para produção
vercel --prod
```

### Método 2: Via GitHub (Automático)

1. **Push para GitHub:**
```bash
git add .
git commit -m "feat: Release inicial v1.0.0"
git push origin main
```

2. **Conectar Vercel:**
- Acesse [vercel.com](https://vercel.com)
- Click em "New Project"
- Importe o repositório do GitHub
- Configure:
  - Framework Preset: **Vite**
  - Build Command: `npm run build`
  - Output Directory: `dist`
  - Install Command: `npm install`

3. **Deploy Automático:**
- Cada push na branch `main` = deploy automático
- Preview deployments em PRs

### Configurações Recomendadas (vercel.json)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## 🔧 Deploy no Netlify (Alternativa)

### Via Interface Web

1. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18` ou superior

2. **Redirects (_redirects file):**
```
/*    /index.html   200
```

### Via CLI

```bash
# Instalar
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

---

## 📊 Variáveis de Ambiente

Caso precise adicionar variáveis de ambiente no futuro (ex: API keys):

**.env.example**
```bash
# WhatsApp
VITE_WHATSAPP_NUMBER=5519996693018

# Analytics (futuro)
# VITE_GA_TRACKING_ID=
# VITE_PLAUSIBLE_DOMAIN=
```

**Vercel Dashboard:**
Settings → Environment Variables → Add

**Netlify Dashboard:**
Site settings → Environment → Environment variables

---

## 🌐 Domínio Customizado

### Vercel

1. **Adicionar Domínio:**
   - Project Settings → Domains
   - Add domain: `conectasolar.com.br`

2. **Configurar DNS:**
   - Tipo A: `76.76.21.21`
   - Tipo CNAME: `cname.vercel-dns.com`

### Netlify

1. **Adicionar Domínio:**
   - Domain settings → Add custom domain

2. **Configurar DNS:**
   - Netlify DNS (recomendado)
   - Ou apontar nameservers externos

---

## 📈 Monitoramento Pós-Deploy

### Verificações Imediatas

```bash
# 1. Testar build local
npm run build
npm run preview

# 2. Verificar todas as rotas
# http://localhost:4173/
# http://localhost:4173/green
# http://localhost:4173/solar
# http://localhost:4173/placas
# http://localhost:4173/livre
# http://localhost:4173/telecom
# http://localhost:4173/expansao
# http://localhost:4173/parcerias
```

### Ferramentas de Teste

1. **Lighthouse (Chrome DevTools)**
   - Performance
   - Accessibility
   - Best Practices
   - SEO

2. **PageSpeed Insights**
   - https://pagespeed.web.dev/

3. **WebPageTest**
   - https://www.webpagetest.org/

4. **Mobile-Friendly Test**
   - https://search.google.com/test/mobile-friendly

---

## 🔍 Analytics (Próximo Passo)

### Google Analytics 4

```bash
npm install @types/gtag.js
```

**src/main.tsx:**
```tsx
// Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

window.dataLayer = window.dataLayer || [];
function gtag(...args: any[]) {
  window.dataLayer.push(args);
}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');
```

### Plausible Analytics (Alternativa)

```html
<!-- index.html -->
<script defer data-domain="conectasolar.com.br" src="https://plausible.io/js/script.js"></script>
```

---

## 🐛 Troubleshooting

### Build Falhou

```bash
# Limpar cache
rm -rf node_modules dist
npm install
npm run build
```

### Rotas 404

- Verificar se o `_redirects` (Netlify) ou rewrites (Vercel) estão configurados
- React Router precisa de SPA fallback

### Imagens Não Carregam

- Verificar paths relativos vs absolutos
- Assets devem estar em `src/assets/` ou `public/`

### Dark Mode Não Funciona

- Verificar se `next-themes` está instalado
- ThemeProvider deve envolver toda a aplicação

---

## 📝 Comandos Úteis

```bash
# Build de produção
npm run build

# Preview do build
npm run preview

# Lint
npm run lint

# Type check
npx tsc --noEmit

# Tamanho do bundle
npm run build -- --mode=analyze
```

---

## 🔐 Segurança

### Headers Recomendados

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

---

## ✅ Deploy Checklist Final

- [ ] `npm run build` sem erros
- [ ] `npm run preview` testado
- [ ] Lighthouse score > 90
- [ ] Mobile testado
- [ ] Dark mode testado
- [ ] Todos os links funcionam
- [ ] WhatsApp abre corretamente
- [ ] Imagens carregam rápido
- [ ] Domínio configurado
- [ ] SSL ativo (https)
- [ ] Analytics configurado (opcional)

---

**Status:** ✅ Pronto para Deploy em Produção

**Última Atualização:** 15/12/2025
