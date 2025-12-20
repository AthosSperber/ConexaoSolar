# ✅ CHECKLIST DE CONSOLIDAÇÃO

## Antes de Começar
- [ ] Li o START-HERE.md
- [ ] Entendi que estou em um worktree
- [ ] Sei que preciso sincronizar com main

---

## Fase 1: Diagnóstico
- [ ] Rodei `diagnostico.bat`
- [ ] Confirmei que faltam PROPOSTA_COMERCIAL.md e NEGOCIO.md
- [ ] Vi que tenho mudanças locais em docs/

---

## Fase 2: Consolidação
- [ ] Rodei `consolidar-tudo.bat` OU os comandos manuais
- [ ] O stash foi criado com sucesso
- [ ] O pull trouxe as mudanças do main
- [ ] O stash pop reaplicou minhas mudanças
- [ ] **Resolvi conflitos** (se houver)

---

## Fase 3: Verificação de Arquivos
Confirmar que TODOS existem agora:

- [ ] `docs/PROPOSTA_COMERCIAL.md` (do PR #4)
- [ ] `docs/NEGOCIO.md` (do PR #4)
- [ ] `docs/WHATSAPP_VENDAS.md` (criado pelo agent)
- [ ] `docs/README.md` (editado: + link WHATSAPP_VENDAS)
- [ ] `docs/ROADMAP.md` (editado: + Fase 5)
- [ ] `docs/DECISOES.md` (editado: + decisão 2025-12-20)

---

## Fase 4: Validação de Consistência
Abrir e conferir manualmente:

- [ ] `docs/WHATSAPP_VENDAS.md` usa os mesmos preços de PROPOSTA_COMERCIAL.md
- [ ] Os prazos (3-5 dias) batem entre os 3 arquivos
- [ ] O SLA (1 alteração/mês ≤30min) está igual em NEGOCIO.md e WHATSAPP_VENDAS.md
- [ ] Não há promessas de tráfego/SEO garantido
- [ ] Templates de follow-up estão profissionais e consistentes

---

## Fase 5: Validação Técnica
- [ ] `npm ci` rodou sem erros
- [ ] `npm run lint` passou ✅
- [ ] `npm run build` passou ✅

---

## Fase 6: Commit e Push

### Opção A: Push direto para main
- [ ] `git add docs/WHATSAPP_VENDAS.md docs/README.md docs/ROADMAP.md docs/DECISOES.md`
- [ ] `git commit -m "docs: playbook WhatsApp vendas e follow-up B2B"`
- [ ] `git push origin main`

### Opção B: Via Pull Request (recomendado)
- [ ] `git checkout -b docs/whatsapp-vendas`
- [ ] `git add docs/WHATSAPP_VENDAS.md docs/README.md docs/ROADMAP.md docs/DECISOES.md`
- [ ] `git commit -m "docs: playbook WhatsApp vendas e follow-up B2B"`
- [ ] `git push -u origin docs/whatsapp-vendas`
- [ ] Abrir PR no GitHub
- [ ] Pedir review (opcional)
- [ ] Merge do PR

---

## Fase 7: Limpeza (opcional)
- [ ] Deletei arquivos temporários (.bat, CONSOLIDAR-README.md, START-HERE.md, etc.)
- [ ] Rodei `git status` → deve estar limpo

---

## ✅ CONCLUÍDO!

Se todos os checkboxes acima estão marcados:
- ✅ Worktree sincronizado com main
- ✅ WHATSAPP_VENDAS.md criado e consistente
- ✅ Documentação atualizada (README, ROADMAP, DECISOES)
- ✅ Lint/Build passando
- ✅ Mudanças no repositório (main ou PR)

---

## 🆘 Se algo deu errado

Marque onde travou e cole aqui:
```cmd
git status
git log -n 3 --oneline
dir docs\*.md /b
```

---

**Última atualização:** 2025-12-20T04:09 UTC
