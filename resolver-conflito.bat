@echo off
REM Script de resolucao do conflito de merge
REM Resolve o aviso do VS Code sobre sync-worktree.bat

echo ========================================
echo RESOLVENDO CONFLITO DE MERGE
echo ========================================
echo.

echo [1/3] Fazendo stash das mudancas locais...
git stash push -u -m "WIP: arquivos de consolidacao (pre-sync)"
echo.

echo [2/3] Atualizando com origin/main...
git fetch origin
git pull origin main --rebase
echo.

echo [3/3] Reaplicando mudancas locais...
git stash pop
echo.

echo ========================================
echo RESOLVIDO!
echo ========================================
echo.
echo Agora rode:
echo   npm ci
echo   npm run lint
echo   npm run build
echo.
echo E depois:
echo   git add docs/
echo   git commit -m "docs: playbook WhatsApp vendas e follow-up B2B"
echo   git push origin main
echo.

pause
