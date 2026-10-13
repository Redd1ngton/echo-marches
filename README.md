# ECHO — Відлуння: Сірі марші

Клієнтська тактична RPG. Збереження лишається в браузері.

## Cloudflare

У панелі Workers залиш як є:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

`npm run build` збирає Nitro з пресетом Cloudflare у `.output/`. Прапор `nodejs_compat` уже в `wrangler.jsonc`. Ім’я воркера — `echo`.
