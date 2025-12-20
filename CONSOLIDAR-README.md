# 🔧 CONSOLIDAÇÃO NECESSÁRIA - LEIA ANTES DE CONTINUAR

## 🚨 Situação Atual (20/12/2025 04:09 UTC)

Você está em um **worktree** que pode estar desatualizado com o `main`.

### O que aconteceu:
1. ✅ Background Agent criou `docs/WHATSAPP_VENDAS.md`
2. ✅ Atualizou `docs/README.md`, `docs/ROADMAP.md`, `docs/DECISOES.md`
3. ⚠️ **MAS**: O agent não encontrou `PROPOSTA_COMERCIAL.md` e `NEGOCIO.md`
4. ⚠️ **MOTIVO**: O worktree pode não estar sincronizado com o `main` atualizado

### Arquivos que DEVERIAM existir (segundo você):
- `docs/PROPOSTA_COMERCIAL.md` ← mergeado no PR #4 hoje
- `docs/NEGOCIO.md` ← mergeado no PR #4 hoje

### Arquivos que o agent CRIOU/EDITOU aqui:
- `docs/WHATSAPP_VENDAS.md` ← **NOVO** (criado usando CLIENTES.md como base)
- `docs/README.md` ← editado (link para WHATSAPP_VENDAS)
- `docs/ROADMAP.md` ← editado (Fase 5 + item concluído)
- `docs/DECISOES.md` ← editado (decisão 2025-12-20)

---

## ✅ SOLUÇÃO RÁPIDA (escolha uma)

### Opção A: Script Automático (RECOMENDADO)
```cmd
consolidar-tudo.bat
```
Este script faz TUDO automaticamente:
- Stash das mudanças locais
- Pull do main atualizado
- Pop do stash
- Roda lint + build
- Te guia no commit/push

### Opção B: Manual (passo a passo)
```cmd
# 1. Guardar mudanças
git stash push -m "WIP docs whatsapp vendas"

# 2. Atualizar com main
git fetch origin
git pull origin main --rebase

# 3. Verificar se agora existem os arquivos
dir docs\PROPOSTA_COMERCIAL.md
dir docs\NEGOCIO.md

# 4. Reaplicar mudanças
git stash pop

# 5. Validar
npm ci
npm run lint
npm run build

# 6. Commit
git add docs/WHATSAPP_VENDAS.md docs/README.md docs/ROADMAP.md docs/DECISOES.md
git commit -m "docs: playbook WhatsApp vendas e follow-up B2B"
git push origin main
```

---

## 🔍 VERIFICAÇÕES OBRIGATÓRIAS (após sincronizar)

### 1. Confirmar que os arquivos do PR #4 existem:
```cmd
dir docs\PROPOSTA_COMERCIAL.md
dir docs\NEGOCIO.md
```
**Esperado:** Ambos devem existir.

### 2. Validar consistência do WHATSAPP_VENDAS.md
Abra `docs/WHATSAPP_VENDAS.md` e verifique se os valores estão ALINHADOS com:
- `docs/PROPOSTA_COMERCIAL.md` (preços, copy de venda, prazo)
- `docs/NEGOCIO.md` (SLA, definições contratuais)

**IMPORTANTE:** Se houver divergência, precisamos ajustar WHATSAPP_VENDAS.md.

### 3. Conferir o diff antes do commit
```cmd
git diff docs/
```
Revise as mudanças para garantir que está tudo coerente.

---

## 📝 AJUSTE RECOMENDADO (após consolidar)

Adicione no topo de `docs/WHATSAPP_VENDAS.md`:

```markdown
> **Fontes de verdade:**  
> - Preços/Prazo/Copy: `docs/PROPOSTA_COMERCIAL.md`  
> - SLA/Limites/Contrato: `docs/NEGOCIO.md`  
> - Operação/Checklist: `docs/CLIENTES.md`
```

Isso deixa claro onde estão as definições "master" e evita inconsistência futura.

---

## ❓ SE DER CONFLITO NO STASH POP

Se ao rodar `git stash pop` aparecer conflitos:

1. Abra o VS Code (ele vai mostrar os conflitos com UI visual)
2. Resolva cada conflito escolhendo:
   - "Accept Incoming" (mudanças do main)
   - "Accept Current" (mudanças locais)
   - "Accept Both" (mesclar)
3. Depois:
   ```cmd
   git add docs/
   git stash drop
   ```

---

## 🎯 OBJETIVO FINAL

Ao final, você deve ter:
- ✅ `docs/PROPOSTA_COMERCIAL.md` (do PR #4)
- ✅ `docs/NEGOCIO.md` (do PR #4)
- ✅ `docs/WHATSAPP_VENDAS.md` (novo, consistente com os 2 acima)
- ✅ `docs/README.md`, `docs/ROADMAP.md`, `docs/DECISOES.md` (atualizados)
- ✅ `npm run lint` passando
- ✅ `npm run build` passando
- ✅ Tudo commitado e pushado para `main` (ou PR)

---

## 🆘 SE AINDA HOUVER DÚVIDA

Cole aqui a saída de:
```cmd
git status
git log -n 3 --oneline
dir docs\*.md
```

Com isso, te dou o comando exato para resolver.

---

**Criado em:** 2025-12-20T04:09 UTC  
**Por:** GitHub Copilot CLI (Background Agent)
