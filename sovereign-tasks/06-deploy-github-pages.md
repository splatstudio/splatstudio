# TASK 06: Deploy GitHub Pages
- Создать .github/workflows/deploy.yml
- Триггер: push в main и feat/shark-install
- Шаг 1: setup-node 20, run node packages/core/test-all.js
- Шаг 2: deploy apps/web в gh-pages через peaceiris/actions-gh-pages@v3
- Проверка: workflow файл существует
