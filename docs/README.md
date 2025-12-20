# ☀️ ConectaSolar

## Visão Geral
O ConectaSolar é uma landing page em React/Vite para apresentar o portfólio de soluções iGreen (energia e telecom) com páginas dedicadas por produto, carrossel na home e CTAs diretos para WhatsApp.

## Objetivo (produto)

Além do uso para o consultor Athos, o projeto foi estruturado para ser um **template portável e vendável** (setup + mensalidade) para outros consultores (troca de consultor via JSON em `public/` + `VITE_CONSULTANT_ID`).

Este repositório é pensado para operar como **produto**: implantação rápida com escopo fechado + manutenção recorrente.

## Público-Alvo
- **Clientes Finais:** Proprietários de imóveis residenciais e comerciais interessados em reduzir custos com energia.
- **Parceiros Comerciais:** Pessoas/empresas interessadas em atuar como parceiros, com regras e condições definidas em contrato.

## Stack de Tecnologia
- **Framework:** React 18 com Vite
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Ícones:** Lucide React

## Documentação

- **Proposta Comercial (1-pager):** [PROPOSTA_COMERCIAL.md](PROPOSTA_COMERCIAL.md)
- Negócio (produto vendável): [NEGOCIO.md](NEGOCIO.md)
- Operação (SOP/checklist): [CLIENTES.md](CLIENTES.md)
- Arquitetura: [ARQUITETURA.md](ARQUITETURA.md)
- Padrões visuais: [UX_UI.md](UX_UI.md)
- Roadmap/Backlog: [ROADMAP.md](ROADMAP.md), [BACKLOG.md](BACKLOG.md)
- Higiene do repositório (o que versionar/ignorar): [REPO_HIGIENE.md](REPO_HIGIENE.md)

## Como Rodar o Projeto
1. Clone o repositório.
2. Instale as dependências: `npm install`
3. (Opcional) Configure o WhatsApp via env: copie `.env.example` para `.env.local` e ajuste `VITE_WHATSAPP_NUMBER`.
4. (Opcional) Trocar consultor (sem editar arquivos no deploy):
	- Crie `public/consultant.<id>.json` (use `public/consultant.example.json` como base)
	- Defina `VITE_CONSULTANT_ID=<id>` em `.env.local`
	- O app tenta carregar `/consultant.<id>.json` e cai para `/consultant.json` automaticamente
4. Rode o ambiente de desenvolvimento: `npm run dev`

## Analytics (tracking neutro)

O ConectaSolar possui um util neutro de tracking em `src/lib/analytics.ts`.

- Em **dev**: registra eventos no console (`console.debug`) para facilitar debug.
- Em **prod**: tenta enviar eventos para:
	- `window.dataLayer` (padrão GTM/GA4) via `dataLayer.push({ event, ...params })`
	- ou `window.gtag` (GA4) via `gtag('event', event, params)`
	- se nenhum existir, não faz nada (fail-safe).

### Eventos instrumentados

- Evento: `cta_click`
	- `consultantId`: ID do consultor carregado no site
	- `placement`: `'hero' | 'header' | 'for_consultants'`
	- `cta`: identificador do CTA (ex.: `'primary' | 'simulate' | 'whatsapp'`)
	- `action`: quando aplicável (ex.: `'scroll_to_solucoes'`)
	- `plan`: quando aplicável (`'promo' | 'padrao'`)
	- `pathname`: rota atual

### Onde dispara hoje

- Hero: clique no CTA principal (scroll para `#solucoes`)
- Header: clique em "Simular" (scroll para `#solucoes`)
- Para consultores iGreen: clique em "Quero meu site" (WhatsApp)
