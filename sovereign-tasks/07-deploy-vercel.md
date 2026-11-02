# TASK 07: Deploy Vercel Config
- Создать vercel.json для monorepo
- Builds: apps/web/index.html -> @vercel/static, apps/admin/server.js -> @vercel/node
- Routes: /api/* -> admin, /* -> web
- Создать apps/web/package.json с serve
- Проверка: vercel.json валидный JSON
