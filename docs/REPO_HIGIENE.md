# Higiene do repositório

Este documento define o que deve (ou não) ser versionado no GitHub para manter o projeto leve, reprodutível e fácil de manter.

## O que vai para o GitHub

- Código-fonte: `src/`
- Assets públicos: `public/`
- Documentação: `docs/`, `README.md`, `DEPLOY.md`, `CHANGELOG.md`
- Configurações: `package.json`, `tsconfig*.json`, `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`, `eslint.config.js`
- Scripts de apoio: `scripts/`

### Perfis de consultor (template)

- Produção (default): `public/consultant.json`.
- Modelo (referência): `public/consultant.example.json`.
- Se você vender o template para vários consultores, cada instalação pode:
  - editar apenas o `consultant.json` (mais simples), ou
  - criar `public/consultant.<id>.json` e configurar `VITE_CONSULTANT_ID=<id>` no deploy.

## O que NÃO vai para o GitHub (gerado/local)

- Dependências: `node_modules/`
- Build: `dist/`, `dist-ssr/`
- Logs: `*.log`, `logs/`
- Ambiente local: `.env`
- PDFs e extrações de texto: `*.pdf`, `*_EXTRACTED.txt`, `*_full.txt` (gera localmente)

### Fotos pessoais

- Evite versionar pastas com múltiplas fotos pessoais no template.
- Se precisar, mantenha somente o necessário em `public/assets/consultant/`.

## Onde guardar artefatos locais

Use a pasta `.local/` (ignorada pelo git) para:
- PDFs de referência (ex.: APN)
- TXT de extração
- notas/análises detalhadas (ex.: auditoria do conteúdo do PDF)
- dumps temporários

## Como extrair texto de um PDF (auditoria)

- Script: `scripts/extract-pdf-text.js`
- Exemplo (Windows):
  - `node scripts/extract-pdf-text.js ".local/APN Dezembro 2025.pdf" ".local/APN_DEZ_2025_EXTRACTED.txt"`

Observação: o TXT gerado serve para auditoria/grep e não deve ser versionado.
