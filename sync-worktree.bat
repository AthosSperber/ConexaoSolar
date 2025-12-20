@echo off
echo ========================================
echo ConectaSolar - Sync Worktree com Main
echo ========================================
echo.

echo [1/6] Verificando estado atual...
git status --porcelain
git branch --show-current
echo.

echo [2/6] Verificando arquivos docs atuais...
dir docs\*.md /b
echo.

echo [3/6] Buscando atualizacoes do repositorio principal...
git fetch origin
echo.

echo [4/6] Verificando se main tem PROPOSTA_COMERCIAL e NEGOCIO...
git ls-tree -r origin/main --name-only | findstr /C:"PROPOSTA_COMERCIAL.md" /C:"NEGOCIO.md"
echo.

echo [5/6] Mostrando ultimos 5 commits do main...
git log origin/main -n 5 --oneline
echo.

echo [6/6] Para atualizar este worktree:
echo   - Se houver mudancas locais: git stash
echo   - Atualizar: git pull origin main
echo   - Recuperar mudancas: git stash pop
echo.

echo Deseja ver o diff entre local e origin/main? (S/N)
set /p resposta=
if /i "%resposta%"=="S" (
    echo.
    echo Diferenca entre local e origin/main:
    git diff HEAD origin/main --stat
)

echo.
echo Pressione qualquer tecla para sair...
pause >nul
