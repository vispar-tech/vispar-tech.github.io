# vispar-landing

Личный сайт-визитка Даниила Павловича ([vispar-tech](https://github.com/vispar-tech)).
Статика на [Astro](https://astro.build), деплой на GitHub Pages →
<https://vispar-tech.github.io>.

## Команды

```bash
npm install      # один раз
npm run dev      # dev-сервер localhost:4321
npm run build    # прод-сборка в dist/
npm run check    # типы и ошибки .astro
npm run preview  # предпросмотр собранного
```

## Структура

- `src/content/{ru,en}.ts` — весь текст сайта (RU в `/`, EN в `/en/`)
- `src/styles/tokens.scss` — дизайн-токены (палитра ziit.app + нейтралы аватарки)
- `src/components/sections/` — секции страницы
- `docs/spec.md` — спек продукта, `docs/tasks/` — декомпозиция работ

Агентам: сначала прочитай `AGENTS.md`.

## Деплой

Push в `main` → GitHub Actions собирает и деплоит на GitHub Pages
(`.github/workflows/deploy.yml`).
