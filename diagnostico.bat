@echo off
REM Diagnostico rapido - mostra exatamente o estado atual

echo ==========================================
echo DIAGNOSTICO RAPIDO - ConectaSolar Worktree
echo ==========================================
echo.

echo [Branch atual]
git branch --show-current
echo.

echo [Mudancas pendentes]
git status --porcelain
echo.

echo [Ultimos 3 commits do seu branch]
git log -n 3 --oneline
echo.

echo [Ultimos 3 commits do origin/main]
git fetch origin >nul 2>&1
git log origin/main -n 3 --oneline
echo.

echo [Arquivos .md em docs/]
dir docs\*.md /b
echo.

echo [Verificando arquivos criticos]
if exist "docs\PROPOSTA_COMERCIAL.md" (
    echo [OK] PROPOSTA_COMERCIAL.md EXISTE
) else (
    echo [FALTA] PROPOSTA_COMERCIAL.md NAO ENCONTRADO
)

if exist "docs\NEGOCIO.md" (
    echo [OK] NEGOCIO.md EXISTE
) else (
    echo [FALTA] NEGOCIO.md NAO ENCONTRADO
)

if exist "docs\WHATSAPP_VENDAS.md" (
    echo [OK] WHATSAPP_VENDAS.md EXISTE (criado pelo agent)
) else (
    echo [FALTA] WHATSAPP_VENDAS.md NAO ENCONTRADO
)
echo.

echo [Diferenca entre seu branch e origin/main]
git diff --stat HEAD origin/main
echo.

echo ==========================================
echo RESUMO:
echo ==========================================
echo 1. Se PROPOSTA e NEGOCIO nao existem aqui:
echo    -> Rode: consolidar-tudo.bat
echo.
echo 2. Se existem mudancas locais (acima):
echo    -> Vai precisar stash/commit antes do pull
echo.
echo 3. Leia: CONSOLIDAR-README.md para detalhes
echo ==========================================
echo.

pause
