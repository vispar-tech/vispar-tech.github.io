# AGENTS.md — правила работы над репо

Личный сайт-визитка Даниила Павловича (vispar-tech). Статика на Astro, деплой GitHub Pages.
Полный спек: `docs/spec.md`. Задачи по фазам: `docs/tasks/`.

## Команды

```bash
npm run dev       # dev-сервер localhost:4321
npm run build     # прод-сборка в dist/
npm run check     # astro check — типы и ошибки .astro файлов
npm run preview   # предпросмотр собранного сайта
```

Готово = `npm run build` И `npm run check` прошли без ошибок. Для UI-правок дополнительно
проверить визуально (dev-сервер + скриншот через playwright MCP) на ширине 375px и 1280px.

## Стек и жёсткие правила

- **Astro 7 + TypeScript strict + SCSS.** Tailwind запрещён решением владельца.
- **Дизайн-токены**: `src/styles/tokens.scss` — единственный источник цветов, шрифтов,
  радиусов. В стилях компонентов использовать только `var(--*)`; хардкод цветов и шрифтов не допускать.
- **i18n**: весь текст только в `src/content/ru.ts` / `src/content/en.ts` (типы в `types.ts`).
  В компонентах никакого текста вне контент-файлов. Новое поле контента добавлять сразу в оба
  языка и в типы. RU живёт в `/`, EN в `/en/`.
- **Без клиентского JS**: интерактив (typing-эффект) — маленький vanilla `<script>` в
  компоненте, никаких фреймворков и островов.
- **GitHub API**: только на этапе сборки (`src/lib/github.ts`), с таймаутом и fallback на
  статику из контента. Клиентские запросы к API запрещены.
- Стиль кода: существующие конвенции важнее личных предпочтений; правки хирургические,
  только по задаче.

## Рабочий процесс агентов

1. Прочитай `docs/tasks/00-roadmap.md`, выбери задачу, прочитай её файл целиком.
2. Веди resumable-стейт по скиллу `continue` (`.opencode/continue/<task-id>.md`).
3. Перед нетривиальной развилкой прогони скилл `nodumb` (ту ли задачу, тот ли масштаб).
4. При написании/рефакторинге следуй `karpathy-guidelines`: минимум кода, ничего
   спекулятивного, каждая изменённая строка отвечает на задачу.
5. UI-фазы (layout, hero, секции, полировка): используй скиллы `anti-ui-slop`,
   `ui-design` / `ui-radar` (UIZZE-референсы) и `frontend-design`. Не изобретай новую
   дизайн-систему — расширяй токены и существующие паттерны.
6. Тексты (RU и EN): после написания прогони через призму `stop-slop` — без канцелярита,
   пассивных конструкций, шаблонных AI-фраз; конкретика важнее пафоса.
7. Коммиты: conventional-commit (`feat:`, `fix:`, `docs:`, `style:`...). Не коммитить
   `.opencode/` и `.playwright-mcp/` (в .gitignore). Не пушить без явной просьбы владельца.

## Карта проекта

```
src/
  content/        # ru.ts, en.ts, types.ts — весь текст сайта
  styles/         # tokens.scss (токены), base.scss (сброс)
  layouts/        # Layout.astro — head, SEO, OG, hreflang, шапка+подвал
  components/
    Header.astro, Footer.astro, LanguageSwitcher.astro
    sections/     # Hero, About, Experience, Projects, Stack, Contacts
  lib/github.ts   # build-time звёзды репо + fallback
public/           # favicon.svg, og.png
docs/
  spec.md         # спек продукта (решения владельца)
  tasks/          # декомпозиция работ T02..T10
.github/workflows/deploy.yml
```

## Контактные данные владельца (не менять без прямого указания)

Telegram `@vispar_work` · GitHub `vispar-tech` · email `layred.dota2@mail.ru`
Аватар: `https://avatars.githubusercontent.com/u/85240536`
