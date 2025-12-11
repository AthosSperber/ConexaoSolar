# ConexãoSolar - Website de Energia Solar

Site one-page moderno e otimizado para a empresa ConexãoSolar, especializada em Energia Solar em Rio Claro – SP.

## Características

- **Design Responsivo**: Mobile-first, otimizado para todos os dispositivos
- **Performance**: Build otimizado com Vite
- **SEO**: Meta tags completas e estrutura semântica
- **Acessibilidade**: Contraste AA e navegação por teclado
- **Formulário de Contato**: Integrado com Supabase para armazenamento
- **WhatsApp Flutuante**: Botão de contato direto

## Seções

1. **Home** (#home) - Hero section com apresentação
2. **Produtos** (#produtos) - 4 cards de produtos/serviços
3. **Contato** (#contato) - Formulário e informações de contato

## Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Supabase
- Lucide React (ícones)

## Configuração

1. Copie `.env.example` para `.env`
2. Configure as variáveis do Supabase
3. Instale as dependências: `npm install`

## Personalização

Para personalizar o site, você pode ajustar:

- **Número de WhatsApp**: Busque por `5519999999999` nos arquivos e substitua
- **E-mail**: Substitua `contato@conexaosolar.com.br`
- **Cores**: As cores principais estão no Tailwind (verde: `#00A859`)
- **Imagens**: URLs do Pexels podem ser substituídas por imagens próprias
- **Redes Sociais**: Links no Footer.tsx

## Paleta de Cores

- Verde Principal: `#00A859` (green-600)
- Branco: `#FFFFFF`
- Cinza Claro: `#F9FAFB` (gray-50)
- Cinza Escuro: `#111827` (gray-900)

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
