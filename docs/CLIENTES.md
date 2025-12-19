# Operação para vender sites ConectaSolar (consultores iGreen)

Este documento é um playbook simples para você operar o ConectaSolar como um **produto de site portátil** (consultor → consultor) com baixo atrito.

## Modelo recomendado (simples)

- **Domínio:** do cliente (ele compra e mantém)
- **Hospedagem/Deploy:** você gerencia (Vercel recomendado; Cloudflare Pages como alternativa custo/escala)
- **Cobrança:** **Setup + Mensalidade** (com limites de escopo)

### Pacotes (referência)

- **Promo (3 primeiros):** Setup **R$ 450** + **R$ 79/mês**
- **Padrão:** Setup **R$ 750** + **R$ 79/mês**

Observações:
- Sem fidelidade.
- Domínio é do cliente.

## Checklist de onboarding (o que o cliente precisa fornecer)

- Identificador do consultor (`id`): curto, sem espaços (ex.: `athos`, `pai`, `joao-silva`)
- Nome completo e nome curto (marca)
- Foto do consultor (padrão manual):
  - Arquivo em `public/assets/consultant/<id>.jpg` (ou `.webp`)
  - Recomendado: ~800px no maior lado e < 200KB (ideal < 150KB)
  - Enquadramento: busto/rosto, olhos no terço superior, fundo limpo
- WhatsApp:
  - `whatsapp.number` no formato somente dígitos (ex.: `55DDDNÚMERO`)
  - Mensagem padrão (`whatsapp.defaultMessage`)
- Copy mínima:
  - `hero.headline`, `hero.subheadline`, `about.title`, `about.description`
- SEO mínimo:
  - `seo.title`, `seo.description`, `seo.ogImage`, `seo.canonicalUrl`
- Domínio do cliente (ex.: `www.cliente.com.br`) e acesso ao DNS (ou disponibilidade para apontar registros)

## Como criar um perfil de consultor

1. Copie `public/consultant.example.json` para `public/consultant.<id>.json`
2. Preencha os campos e ajuste `photo.src` para `/assets/consultant/<id>.jpg`
3. Coloque a foto em `public/assets/consultant/<id>.jpg`

## Como selecionar o consultor (sem editar arquivos no deploy)

- Defina `VITE_CONSULTANT_ID=<id>` (em `.env.local` no dev, e nas env vars do provedor no deploy)
- O app tenta carregar:
  - `/consultant.<id>.json`
  - fallback automático para `/consultant.json` (se o arquivo específico não existir ou for inválido)

## Deploy (Vercel — recomendado)

1. Crie um projeto na Vercel apontando para o repositório.
2. Configure env vars:
   - `VITE_CONSULTANT_ID=<id>`
   - `VITE_WHATSAPP_NUMBER=<opcional>` (se não vier no JSON)
3. Build/Output:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
4. Domínio do cliente:
   - Adicione o domínio no projeto Vercel.
   - Aponte DNS conforme a Vercel pedir (CNAME/A).

## Deploy (Cloudflare Pages — alternativa custo/escala)

1. Crie um projeto no Cloudflare Pages conectado ao repositório.
2. Configure:
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Configure env vars no Pages:
   - `VITE_CONSULTANT_ID=<id>`
   - `VITE_WHATSAPP_NUMBER=<opcional>`
4. Domínio do cliente:
   - Adicione o domínio no Pages e siga as instruções de DNS.

## Escopo de manutenção (para evitar suporte infinito)

Sugestão de escopo para mensalidade (ajuste conforme seu posicionamento):

Inclui:
- Hospedagem + SSL + monitoramento básico
- Atualizações de dependências e correções pequenas
- **1 alteração simples/mês** (ex.: texto, WhatsApp, troca de foto)

Não inclui (cobrar à parte):
- Novas páginas/funcionalidades
- Integrações (CRM, automações, dashboards)
- A/B testing e experimentos avançados
- Design/branding completo

## Checklist de saída (quando o cliente parar)

- Domínio continua do cliente
- Você remove o domínio do projeto e encerra a hospedagem
- Entrega final do conteúdo (ex.: JSON e assets) se combinado
