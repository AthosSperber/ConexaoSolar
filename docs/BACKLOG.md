# 📋 Backlog - ConexãoSolar

## Sobre este Backlog

Este documento lista ideias, melhorias e funcionalidades futuras para o projeto ConexãoSolar. Itens aqui são **não priorizados** e servem como banco de ideias. Para planejamento oficial, consulte [ROADMAP.md](./ROADMAP.md).

---

## 🎨 UX/UI

### Design System
- [ ] Criar biblioteca de componentes documentada (Storybook)
- [ ] Implementar design tokens para facilitar customização
- [ ] Criar variações de tema (ex: tema escuro)
- [ ] Adicionar mais micro-animações com Framer Motion
- [ ] Implementar animações de entrada (fade-in, slide-up) nas seções

### Dark Mode
- [ ] Criar tema escuro completo
- [ ] Implementar toggle de tema (sol/lua)
- [ ] Persistir preferência no localStorage
- [ ] Respeitar prefers-color-scheme do sistema
- [ ] Adaptar imagens para modo escuro (filtros ou versões alternativas)

### Acessibilidade
- [ ] Implementar navegação por skip links
- [ ] Adicionar modo de alto contraste
- [ ] Melhorar suporte a leitores de tela (ARIA labels completos)
- [ ] Implementar modo de texto grande
- [ ] Adicionar legendas em vídeos (quando implementados)
- [ ] Teste com usuários reais com deficiências
- [ ] Certificação WCAG 2.1 AAA (atualmente AA)

### Loading States
- [ ] Skeleton screens para carregamento de seções
- [ ] Loading spinner customizado com marca iGreen
- [ ] Progress bar no topo durante navegação
- [ ] Shimmer effect em cards durante carregamento

---

## 🚀 Performance

### Otimizações de Imagem
- [ ] Implementar blur-up (placeholder blur enquanto carrega)
- [ ] Adicionar AVIF além de WebP (melhor compressão)
- [ ] Lazy loading mais inteligente (Intersection Observer threshold)
- [ ] Preload de imagens críticas above-the-fold
- [ ] Sprites SVG para ícones repetidos

### Core Web Vitals
- [ ] Otimizar Largest Contentful Paint (LCP) < 2.5s
- [ ] Reduzir First Input Delay (FID) < 100ms
- [ ] Minimizar Cumulative Layout Shift (CLS) < 0.1
- [ ] Implementar Resource Hints (preconnect, prefetch, preload)
- [ ] Otimizar font loading (font-display: swap)

### Caching
- [ ] Implementar Service Worker para cache offline
- [ ] Cache de API calls do Supabase (react-query ou SWR)
- [ ] HTTP/2 Server Push para assets críticos
- [ ] CDN para assets estáticos (Cloudflare, Vercel Edge)

### Bundle Size
- [ ] Análise de bundle com visualizer
- [ ] Remover dependências não utilizadas
- [ ] Considerar alternativas mais leves (ex: day.js em vez de moment)
- [ ] Dynamic imports mais granulares
- [ ] Tree-shaking manual de bibliotecas grandes

---

## 🔍 SEO

### On-Page SEO
- [ ] Schema.org structured data (LocalBusiness, Product, FAQPage)
- [ ] Rich snippets para produtos
- [ ] Breadcrumbs estruturados
- [ ] Meta tags Open Graph otimizadas
- [ ] Twitter Cards completas
- [ ] Canonical URLs
- [ ] Hreflang para multi-idioma (se aplicável)

### Technical SEO
- [ ] Sitemap XML dinâmico
- [ ] Robots.txt otimizado por ambiente
- [ ] Implementar Server-Side Rendering (SSR) ou Static Site Generation (SSG)
- [ ] Prerender para crawlers que não executam JS
- [ ] Otimizar velocidade de indexação (submit URLs via API)

### Content SEO
- [ ] Blog integrado para marketing de conteúdo
- [ ] FAQ section com structured data
- [ ] Case studies / estudos de caso
- [ ] Calculadora de economia de energia solar (gerador de tráfego)
- [ ] Glossário de termos de energia solar

---

## 📊 Analytics & Tracking

### Eventos Personalizados
- [ ] Tracking de cliques em CTAs
- [ ] Tracking de scroll depth
- [ ] Tracking de tempo em cada seção
- [ ] Tracking de interações com carrossel
- [ ] Tracking de abandono de formulário
- [ ] Heatmaps (Hotjar, Microsoft Clarity)

### Conversão
- [ ] Funil de conversão detalhado
- [ ] A/B testing framework
- [ ] Testes de diferentes CTAs
- [ ] Testes de headlines
- [ ] Testes de cores de botões
- [ ] Otimização de formulário (reduzir campos?)

### Relatórios
- [ ] Dashboard de métricas em tempo real
- [ ] Relatórios semanais automáticos por email
- [ ] Alertas para quedas de tráfego ou conversão
- [ ] Integração com Data Studio / Looker

---

## 💬 Comunicação

### Chat & Suporte
- [ ] Chat ao vivo (Intercom, Zendesk, Tawk.to)
- [ ] Chatbot com FAQ automatizado
- [ ] Integração com WhatsApp Business API oficial
- [ ] Horário de atendimento visível
- [ ] Tempo médio de resposta

### Formulário de Contato
- [ ] Validação em tempo real (não apenas no submit)
- [ ] Sugestões de auto-complete
- [ ] Upload de arquivos (contas de luz para análise)
- [ ] CAPTCHA ou honeypot para anti-spam
- [ ] Multi-step form (wizard) para qualificação de leads
- [ ] Mensagem de confirmação por email automática

### Newsletter
- [ ] Form de inscrição na newsletter
- [ ] Integração com Mailchimp/SendGrid
- [ ] Lead magnet (ex: "Guia de Energia Solar PDF")
- [ ] Double opt-in
- [ ] Preferências de comunicação

---

## 📱 Mobile & PWA

### Progressive Web App
- [ ] Service Worker para funcionalidade offline
- [ ] Manifest.json para instalação
- [ ] App icons para iOS e Android
- [ ] Splash screen customizada
- [ ] Suporte a standalone mode

### Notificações Push
- [ ] Permissão de notificações
- [ ] Notificações de promoções
- [ ] Notificações de status de proposta
- [ ] Segmentação de notificações

### App Mobile Nativo (Futuro)
- [ ] Avaliar necessidade de app nativo
- [ ] React Native se necessário
- [ ] Deep linking entre web e app
- [ ] Sincronização de dados offline

---

## 🏆 iGreen Club & Gamificação

### Portal do Licenciado
- [ ] Dashboard personalizado
- [ ] Gráficos de performance
- [ ] Ranking de licenciados
- [ ] Sistema de badges e conquistas
- [ ] Histórico de comissões
- [ ] Projeções de ganhos

### Sistema de Indicações
- [ ] Link único de indicação
- [ ] QR Code para compartilhamento
- [ ] Tracking de indicações em tempo real
- [ ] Comissionamento automático
- [ ] Sistema de validação de indicações

### Gamificação
- [ ] Níveis e progressão (Bronze, Prata, Ouro, etc)
- [ ] Challenges e metas semanais/mensais
- [ ] Leaderboard
- [ ] Recompensas e bônus por conquistas
- [ ] Social features (comparar com amigos)

### Materiais de Marketing
- [ ] Biblioteca de imagens para download
- [ ] Modelos de post para redes sociais
- [ ] Vídeos explicativos
- [ ] Apresentações editáveis
- [ ] Email templates

---

## 🔗 Integrações

### CRM
- [ ] HubSpot integration
- [ ] Salesforce integration
- [ ] RD Station integration
- [ ] Pipedrive integration
- [ ] Sincronização bidirecional de leads

### ERP & Gestão
- [ ] Integração com sistema de propostas
- [ ] Integração com sistema de estoque
- [ ] Gestão de pedidos
- [ ] Tracking de instalações
- [ ] Integração com sistema financeiro

### Pagamentos
- [ ] Mercado Pago
- [ ] Stripe
- [ ] PayPal
- [ ] Pix (QR Code e copia-e-cola)
- [ ] Boleto bancário

### Email Marketing
- [ ] Mailchimp
- [ ] SendGrid
- [ ] ActiveCampaign
- [ ] Automações de email (drip campaigns)

### Calendário
- [ ] Calendly integration para agendamentos
- [ ] Google Calendar sync
- [ ] Lembretes automáticos de reunião
- [ ] Disponibilidade em tempo real

---

## 🛠️ Ferramentas de Vendas

### Simuladores
- [ ] Calculadora de economia de energia solar
- [ ] Simulador de ROI (retorno de investimento)
- [ ] Calculadora de dimensionamento de sistema
- [ ] Simulador de financiamento
- [ ] Comparador de tarifas (Mercado Livre vs Cativo)

### Gerador de Propostas
- [ ] PDF customizado com logo do cliente
- [ ] Cálculos automáticos baseados em consumo
- [ ] Inclusão de fotos de instalações anteriores
- [ ] Assinatura digital
- [ ] Tracking de propostas enviadas

### Comparadores
- [ ] Comparar produtos (Placas, inversores, etc)
- [ ] Comparar planos (Green vs Placas vs Livre)
- [ ] Tabela de vantagens e desvantagens

---

## 📸 Multimídia

### Galeria de Projetos
- [ ] Galeria de instalações realizadas
- [ ] Antes e depois
- [ ] Filtros por tipo de instalação
- [ ] Localização dos projetos no mapa
- [ ] Depoimentos de clientes

### Vídeos
- [ ] Vídeo institucional no Hero
- [ ] Tutoriais em vídeo
- [ ] Depoimentos em vídeo
- [ ] Virtual tour das instalações
- [ ] Webinars gravados

### Imagens 360°
- [ ] Tour virtual 360° de instalações
- [ ] Visualizador de produtos em 3D
- [ ] AR (Realidade Aumentada) para visualizar painéis no telhado

---

## 🌍 Internacionalização

### Multi-idioma
- [ ] Suporte a Português, Inglês e Espanhol
- [ ] i18n com react-i18next
- [ ] Seletor de idioma no header
- [ ] Detecção automática de idioma do navegador
- [ ] Persistência de preferência
- [ ] Tradução de conteúdo dinâmico

### Localização
- [ ] Formatação de datas por região
- [ ] Formatação de moeda
- [ ] Formatação de números
- [ ] Conteúdo adaptado por região (se expandir)

---

## 🔐 Segurança

### Autenticação
- [ ] Login com email e senha
- [ ] Login social (Google, Facebook)
- [ ] Two-factor authentication (2FA)
- [ ] Magic links (login sem senha)
- [ ] Recuperação de senha

### Autorização
- [ ] Roles (Admin, Licenciado, Cliente)
- [ ] Permissions granulares
- [ ] Auditoria de ações (logs)

### Compliance
- [ ] LGPD compliance completo
- [ ] Cookie consent banner
- [ ] Política de privacidade detalhada
- [ ] Termos de uso
- [ ] Opção de exportar/deletar dados pessoais

---

## 🧪 Qualidade de Código

### Testes
- [ ] Configurar Vitest para unit tests
- [ ] Testes de componentes com React Testing Library
- [ ] Testes de integração
- [ ] Testes E2E com Playwright
- [ ] Visual regression testing
- [ ] Cobertura mínima de 80%
- [ ] Pre-commit hooks para rodar testes

### CI/CD
- [ ] GitHub Actions workflow
- [ ] Testes automáticos em PRs
- [ ] Deploy automático em merge
- [ ] Ambientes de preview para PRs
- [ ] Rollback automático em caso de falha

### Code Quality
- [ ] SonarQube para análise estática
- [ ] Husky + lint-staged para pre-commit
- [ ] Conventional Commits
- [ ] Semantic versioning
- [ ] Changelog automático

---

## 📚 Conteúdo

### Blog
- [ ] Sistema de blog (posts em Markdown)
- [ ] Categorias e tags
- [ ] Busca de posts
- [ ] Relacionados no final de cada post
- [ ] Comments (Disqus ou similar)
- [ ] RSS feed

### Recursos Educacionais
- [ ] Guias completos sobre energia solar
- [ ] Glossário de termos técnicos
- [ ] FAQ expandido
- [ ] Webinars e workshops online
- [ ] Ebooks para download

### Case Studies
- [ ] Estudos de caso detalhados
- [ ] Métricas de economia real
- [ ] Depoimentos em vídeo
- [ ] ROI documentado

---

## 🤝 Social & Comunidade

### Redes Sociais
- [ ] Social sharing fácil
- [ ] Social proof (contador de compartilhamentos)
- [ ] Feed do Instagram integrado
- [ ] Testimonials do Google Reviews
- [ ] Social login

### Comunidade
- [ ] Fórum para licenciados
- [ ] Grupo no WhatsApp/Telegram
- [ ] Eventos e meetups
- [ ] Programa de embaixadores

---

## 📈 Business Intelligence

### Dashboards
- [ ] Dashboard para gestores
- [ ] KPIs em tempo real
- [ ] Funil de vendas visual
- [ ] Previsão de receita (ML)
- [ ] Análise de churn

### Relatórios
- [ ] Relatórios customizáveis
- [ ] Exportação para Excel/PDF
- [ ] Agendamento de relatórios
- [ ] Alertas inteligentes

---

## 🎯 Marketing

### SEO Local
- [ ] Google My Business otimizado
- [ ] Reviews estruturadas
- [ ] Localizador de lojas/instaladores
- [ ] SEO para cidades específicas

### Campanhas
- [ ] Landing pages específicas por campanha
- [ ] UTM tracking automático
- [ ] Retargeting pixel (Facebook, Google)
- [ ] Integração com Google Ads
- [ ] Integração com Facebook Ads

### Growth Hacking
- [ ] Programa de referral (indique e ganhe)
- [ ] Pop-ups de intenção de saída
- [ ] Teste social (ex: "50 pessoas visualizando")
- [ ] Urgência e escassez (ofertas limitadas)

---

## 🔮 Futuro Distante

### Inteligência Artificial
- [ ] Chatbot com IA (GPT-4)
- [ ] Recomendação personalizada de produtos
- [ ] Previsão de consumo de energia
- [ ] Análise de imagens de telhado para viabilidade

### IoT
- [ ] Dashboard de monitoramento de sistemas instalados
- [ ] Alertas de manutenção preditiva
- [ ] App mobile para monitoramento em tempo real

### Blockchain (?)
- [ ] Tokenização de créditos de energia
- [ ] Smart contracts para comissionamento
- [ ] Marketplace descentralizado (?)

---

## 📝 Processo de Backlog

### Como Adicionar Itens
1. Descrever claramente o item
2. Adicionar à categoria apropriada
3. Marcar como `[ ]` (não iniciado)

### Priorização
Itens são movidos para [ROADMAP.md](./ROADMAP.md) quando:
- Alinhados com objetivos estratégicos
- Viabilidade técnica confirmada
- Recursos disponíveis alocados
- ROI estimado justifica esforço

### Estados
- `[ ]` Não iniciado
- `[~]` Em análise/discussão
- `[x]` Concluído (mover para ROADMAP)
- `[-]` Descartado (com justificativa)

---

**Última Atualização**: Dezembro 2024  
**Revisão**: Sempre que houver novas ideias ou itens concluídos

**Nota**: Este é um documento vivo. Sinta-se livre para adicionar ideias!
