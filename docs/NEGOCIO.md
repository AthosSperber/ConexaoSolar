# 💼 ConectaSolar — Negócio (template vendável)

> Objetivo: preparar o ConectaSolar para operar como produto de **venda de site (setup) + mensalidade**, com **escopo fechado** e baixa customização.

> Princípio: vender **produto + operação** (não agência). Tudo que foge do escopo vira upsell, com preço e prazo separados.

## Proposta de valor

O **ConectaSolar** é um site pronto (template) para consultores iGreen venderem e atenderem melhor via WhatsApp.

Entrega central:

- **Presença digital profissional** para colocar em bio, anúncios e encaminhar no WhatsApp
- **CTA para WhatsApp** como canal principal de conversão
- **SEO básico e preview social (Open Graph)** para aumentar conversão em links compartilhados
- **Operação simples**: setup rápido + mensalidade para manter site funcionando e atualizado

## ICP (Ideal Customer Profile)

Consultor iGreen que:

- Faz prospecção e fechamento principalmente por WhatsApp
- Quer “site no ar” rápido (sem processo de agência)
- Aceita template e **escopo fechado** em troca de preço/velocidade
- Valoriza manutenção e suporte técnico (mensalidade)

Não é ICP:

- Quem quer projeto sob medida (design exclusivo, páginas ilimitadas, integrações complexas)
- Quem busca gestão de tráfego/estratégia completa inclusa

## Pacotes (setup) e mensalidade

Modelo comercial: **setup (implantação)** + **mensalidade (operação)**.

### Pacote Promo (3 primeiros)

- **Setup:** R$ 450
- **Mensalidade:** R$ 79/mês

### Pacote Padrão

- **Setup:** R$ 750
- **Mensalidade:** R$ 79/mês

Regras:

- **Sem fidelidade**: cancelou, o site pode ser retirado do ar.
- **Domínio é do cliente** (recomendado). O cliente compra e mantém a posse.
- O ConectaSolar entrega e opera o site dentro do escopo descrito abaixo (setup + SLA mensal).

## Escopo fechado (inclui) + o que NÃO está incluso

### Setup (inclui)

- Configuração dos dados do consultor (conteúdo e contatos)
- Publicação com **SSL/HTTPS**
- CTA principal para WhatsApp
- SEO básico (título/descrição, meta tags essenciais)
- Preview para compartilhamento (Open Graph)
- Validação básica mobile/desktop

### Mensalidade (inclui)

- Hospedagem/infra + SSL
- Manutenção técnica (correções, pequenas melhorias e atualizações pontuais)
- **1 alteração simples/mês** (ex.: trocar link/telefone, texto curto, imagem)

Definição objetiva de “alteração simples” (para evitar suporte infinito):

- Até **30 minutos** de execução
- Sem criar novas seções/páginas
- Sem buscar/criar conteúdo (precisa vir pronto do cliente)
- Sem integrações/automação

#### SLA simples (mensalidade)

- **Primeira resposta:** até 1 dia útil
- **Incidente crítico (site fora do ar):** correção/contorno em até 2 dias úteis
- **Alteração simples incluída:** em até 5 dias úteis (a partir do envio de material)

Janela operacional sugerida:

- Atendimento em horário comercial (dias úteis)
- Demandas fora do SLA (ex.: urgência) podem ser cobradas como “prioridade”

### NÃO está incluso (fora do escopo)

- Layout novo do zero, identidade visual completa, novas seções “grandes” sob demanda
- Copywriting completo (roteiro e criação total de textos), múltiplas rodadas ilimitadas
- Gestão de tráfego (Meta/Google Ads), criativos, otimização contínua de campanhas
- Integrações complexas (CRM avançado, automações, webhooks)
- Blog, CMS, multilíngue, SSR e features “produto” fora do template
- Garantia de ranking/posicionamento SEO

## Upsells (aumentar ticket sem virar agência)

- Pacote de **4 alterações/mês** (em vez de 1)
- Página extra (ex.: depoimentos/prova social, parcerias, página de produto)
- Integração de formulário (captura de lead para e-mail/planilha)
- Setup de GA4/GTM e eventos (instrumentação)
- Revisão de copy com foco em conformidade (APN) e clareza

## Metas (execução e números)

Metas sugeridas para “virar a chave” (90 dias):

- **Vender os 3 primeiros no Promo** para criar prova social e playbook
- Chegar a **10 clientes ativos em 90 dias**
- Meta de operação: manter **churn baixo** (cancelamentos) com SLA claro e expectativa alinhada

Métrica simples para acompanhar semanalmente:

- Novos leads (WhatsApp)
- Propostas enviadas
- Fechamentos
- Sites entregues
- Pedidos de suporte e tempo de resposta

## Operação (onboarding → entrega → manutenção)

### 1) Onboarding (coleta)

Checklist mínimo:

- Nome do consultor
- WhatsApp e mensagem padrão
- Cidade/região de atendimento
- Links (Instagram, etc.)
- Foto/Imagem (opcional)
- Domínio (se já possui) ou decisão de compra

### 2) Implantação (setup)

- Preencher/validar arquivo de consultor (JSON)
- Ajustar CTAs e texto principal
- Publicar e validar (mobile, WhatsApp, preview)

Prazo sugerido (promessa de produto):

- **Site no ar em até 5 dias úteis** após receber materiais + domínio/DNS resolvido

### 3) Entrega

- Envio do link
- Orientação rápida de uso (bio, encaminhamentos, anúncios)

Entregáveis mínimos na entrega:

- URL final + checagem de HTTPS
- Teste do CTA WhatsApp
- Checagem do preview (Open Graph)
- Orientação de como trocar consultor via `VITE_CONSULTANT_ID` (quando aplicável)

### 4) Manutenção

- Canal único de suporte (WhatsApp)
- Execução da alteração simples mensal + correções técnicas

## Riscos e mitigação

### Copy e regras APN (2025)

Risco: comunicação com promessas/afirmações indevidas, fora das regras.

Mitigação:

- Manter copy conservadora e descritiva (sem promessas absolutas)
- Validar texto conforme [docs/REGRAS_APN_2025.md](REGRAS_APN_2025.md)

### Uso de marca, logos e materiais de terceiros

Risco: uso indevido de logo, imagens, marcas e assets sem autorização.

Mitigação:

- Usar apenas materiais autorizados (brandbook/aprovação)
- Preferir assets próprios/neutros quando houver dúvida

Recomendação comercial (para reduzir risco):

- Evitar usar “iGreen” como marca principal do produto; posicionar como “site para consultor iGreen” (nicho) e usar apenas referências permitidas

### Cache de preview (WhatsApp/Meta)

Risco: preview desatualizado ao trocar imagem/título.

Mitigação:

- Orientar uso do Sharing Debugger quando necessário
- Manter OG tags estáveis

### Dependências e estabilidade

Risco: quebra em build/deploy por dependências.

Mitigação:

- Rotina de `npm run lint` e `npm run build` antes de deploy
- Atualizações pequenas e frequentes dentro da mensalidade