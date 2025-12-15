# ConexãoSolar - Documentação Técnica

## 📋 Visão Geral

**ConexãoSolar** é uma plataforma web moderna e otimizada, desenvolvida para apresentar os serviços e soluções da empresa iGreen Energy em Rio Claro – SP. O projeto consiste em um site one-page responsivo focado em energia solar, geração distribuída e serviços de telecomunicação.

## 🎯 Objetivo Estratégico

Proporcionar uma experiência digital moderna e mobile-first que:
- Apresente as soluções da iGreen Energy de forma clara e acessível
- Facilite o contato direto com potenciais clientes
- Demonstre os benefícios da energia solar e serviços relacionados
- Sirva como portal de informações sobre os produtos: Conexão Green, Conexão Placas, Conexão Livre, Conexão Telecom e Conexão Expansão

## 🏗️ Stack Tecnológica

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **React** | 18.3.1 | Framework UI principal |
| **TypeScript** | 5.5.3 | Tipagem estática e segurança |
| **Vite** | 5.4.2 | Build tool e dev server |
| **Tailwind CSS** | 3.4.1 | Framework CSS utility-first |
| **React Router** | 6.22.0 | Navegação (futuras expansões) |
| **Supabase** | 2.57.4 | Backend e armazenamento de contatos |
| **Lucide React** | 0.344.0 | Biblioteca de ícones SVG |

## 🎨 Identidade Visual

### Paleta de Cores Principal
- **Verde iGreen**: `#00A859` (Cor primária da marca)
- **Branco**: `#FFFFFF` (Backgrounds e contraste)
- **Cinza Claro**: `#F9FAFB` (Backgrounds secundários)
- **Cinza Escuro**: `#111827` (Textos principais)

### Princípios de Design
- **Mobile-First**: Desenvolvido prioritariamente para dispositivos móveis
- **Scroll Snap**: Navegação fluida entre seções
- **Cards com Bordas Arredondadas**: Design moderno (rounded-3xl)
- **Sombras Sutis**: Hierarquia visual através de elevação
- **Transições Suaves**: Feedback visual em interações

## 📦 Produtos e Soluções

### 1. Conexão Green
Sistema de geração distribuída de energia solar com créditos mensais.

### 2. Conexão Placas
Venda e instalação de painéis solares fotovoltaicos.

### 3. Conexão Livre
Acesso ao mercado livre de energia para empresas.

### 4. Conexão Telecom
Infraestrutura de telecomunicações e internet.

### 5. Conexão Expansão
Programa de licenciamento e expansão de rede através de indicações e comissões.

## 🔌 Integrações

### Supabase
- **Tabela**: `contacts`
- **Campos**: id (uuid), name, phone, email, message, created_at
- **Uso**: Armazenamento de leads do formulário de contato

### WhatsApp Business
- **Botão Flutuante**: Link direto para chat comercial
- **Número**: +55 19 99669-3018

## 📱 Funcionalidades Principais

1. **Hero Section**: Apresentação inicial com call-to-action
2. **Seção Sobre**: Contextualização da empresa
3. **Carrossel de Soluções**: Cards interativos dos produtos
4. **Páginas Detalhadas**: Uma seção para cada produto/solução
5. **Formulário de Contato**: Captura de leads integrada ao Supabase
6. **Footer Completo**: Links, informações e redes sociais
7. **WhatsApp Flutuante**: Acesso rápido ao atendimento

## 🌐 SEO e Performance

### Otimizações Implementadas
- Meta tags completas (Open Graph, Twitter Cards)
- Robots.txt e sitemap.xml configurados
- Lazy loading de componentes pesados (Suspense)
- Imagens otimizadas (WebP com srcset responsivo)
- Scroll suave e navegação por âncoras

### Palavras-chave Alvo
- Energia solar Rio Claro
- Painéis solares SP
- Geração distribuída
- Economia conta de luz
- Mercado livre energia

## 🚀 Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview da build
npm run preview

# Lint do código
npm run lint

# Type checking
npm run typecheck

# Converter imagens para WebP
npm run images:convert
```

## 📂 Estrutura de Dados

Os dados estáticos são organizados em arquivos TypeScript modulares na pasta `src/data/`:
- `solutions.ts`: Dados das soluções/produtos
- `texts.ts`: Textos estáticos e conteúdos
- `partner.ts`: Informações de parceiros
- `mock.ts`: Dados mockados para desenvolvimento

## 🔐 Variáveis de Ambiente

```env
VITE_SUPABASE_URL=sua_url_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima
```

## 📄 Licença

Projeto privado da iGreen Energy / ConexãoSolar.

---

**Última Atualização**: Dezembro 2024  
**Versão**: MVP 1.0  
**Desenvolvido por**: Equipe iGreen Energy
