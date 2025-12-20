@echo off
REM Script de consolidacao completa - ConectaSolar
REM Resolve sincronizacao do worktree + validacao + commit

echo ========================================
echo ConectaSolar - CONSOLIDACAO COMPLETA
echo ========================================
echo.

echo [1/8] Estado atual do worktree...
git branch --show-current
git status --short
echo.

echo [2/8] Guardando mudancas locais (stash)...
git stash push -m "WIP: docs whatsapp vendas (pre-sync main)"
echo.

echo [3/8] Buscando atualizacoes do origin...
git fetch origin
echo.

echo [4/8] Atualizando com main...
git pull origin main --rebase
echo.

echo [5/8] Verificando arquivos criticos...
echo Arquivos em docs/:
dir docs\*.md /b
echo.
echo Procurando PROPOSTA_COMERCIAL.md e NEGOCIO.md...
if exist "docs\PROPOSTA_COMERCIAL.md" (
    echo [OK] PROPOSTA_COMERCIAL.md encontrado
) else (
    echo [AVISO] PROPOSTA_COMERCIAL.md NAO encontrado
)
if exist "docs\NEGOCIO.md" (
    echo [OK] NEGOCIO.md encontrado
) else (
    echo [AVISO] NEGOCIO.md NAO encontrado
)
echo.

echo [6/8] Reaplicando mudancas locais (stash pop)...
git stash pop
echo.

echo [7/8] Rodando validacoes...
echo Instalando dependencias (se necessario)...
call npm ci
echo.
echo Rodando lint...
call npm run lint
echo.
echo Rodando build...
call npm run build
echo.

echo [8/8] Estado final...
git status --short
echo.

echo ========================================
echo CONSOLIDACAO CONCLUIDA!
echo ========================================
echo.
echo Proximos passos:
echo 1. Revisar mudancas: git diff
echo 2. Adicionar arquivos: git add docs/WHATSAPP_VENDAS.md docs/README.md docs/ROADMAP.md docs/DECISOES.md
echo 3. Commitar: git commit -m "docs: playbook WhatsApp vendas e follow-up B2B"
echo 4. Push: git push origin main
echo.
echo OU criar PR:
echo 1. git checkout -b docs/whatsapp-vendas
echo 2. git push -u origin docs/whatsapp-vendas
echo 3. Abrir PR no GitHub
echo.

pause
