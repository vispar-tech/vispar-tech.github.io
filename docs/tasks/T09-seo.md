# T09 — SEO: og.png, sitemap, robots.txt

## Цель
Закрыть поисково-социальный контур: OG-картинка, sitemap, robots, аудит мета-тегов.

## Вход
`Layout.astro` уже отдаёт title/description/canonical/hreflang/OG-теги; `og.png` пока
заглушка (см. ниже) — заменить на настоящую.

## Шаги
1. `public/og.png` 1200×630: тёмный фон #191919, имя, роль, акцент #ff6200, шрифты Outfit/
   Chivo Mono. Сгенерировать скриншотом временной OG-страницы через playwright или
   canvas-скриптом. Не брать чужие картинки.
2. Sitemap: добавить `@astrojs/sitemap`, включить в конфиг (site уже задан).
3. `public/robots.txt`: Allow all + ссылка на sitemap.
4. Аудит: canonical обеих локалей, hreflang парность ru↔en + x-default, og:locale,
   отсутствие дублей title.

## Критерии приёмки
- OG-картинка открывается и выглядит брендированно (проверить через соцпревью-симулятор
  или просто размер/контент файла).
- `/sitemap-index.xml` генерируется; robots.txt отдаётся.
- `npm run build` + `npm run check` зелёные.

## Идеи вне скоупа
- JSON-LD Person schema (можно добавить сюда же, если пройдёт ревью владельца).
