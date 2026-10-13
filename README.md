# ECHO — Відлуння: Сірі марші

Клієнтська тактична RPG. Збереження лишається в браузері.

## Cloudflare

```bash
npm install
npm run build:cf
npx wrangler deploy
```

`build:cf` збирає Nitro з пресетом `cloudflare-module`. Звичайний `npm run build` лишається під Vercel.

У панелі Cloudflare Workers потрібен compatibility flag `nodejs_compat` (він уже в `wrangler.jsonc`).
