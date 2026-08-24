# Спек: личный сайт-визитка vispar-tech

Зафиксировано по итогам интервью с владельцем (grill-me, 2026-08-24). Этот документ —
источник правды. Изменения только через явное согласие владельца.

## Цель

Универсальная визитка: найм (HR/компании) + фриланс-заказчики. Одна страница, тёмная тема.

## Ключевые решения

| Решение | Значение |
|---|---|
| Домен | `https://vispar-tech.github.io` |
| Репо | `vispar-tech/vispar-tech.github.io` (локальная папка — `vispar-landing`) |
| Стек | Astro 7 + TypeScript strict + SCSS. Tailwind запрещён |
| Хостинг | GitHub Pages, деплой GitHub Actions из `main` |
| Языки | RU в корне `/`, EN в `/en/`, переключатель в хедере, hreflang |
| Аналитика | Нет |
| CV-кнопка | Нет |
| Возраст | Не показывать (вместо него «4+ лет коммерческой разработки») |

## Визуальный язык

Референс: [ziit.app](https://ziit.app). Только тёмная тема.

Токены (`src/styles/tokens.scss`):

```css
--background: #191919;   /* фон */
--element:    #2b2b2b;   /* карточки */
--border:     #ffffff1a; /* тонкие границы */
--accent:     #ff6200;   /* оранжевый акцент */
--text:       #e6e6e6;
--text-secondary: #a6a6a6;
--text-muted: #666666;
```

Нейтральная шкала из аватарки владельца: `#f0f0f0`, `#c0c0a8` (тёплый), `#303030–#787878`.
Шрифты: Outfit (санс, переменный) + Chivo Mono (моно, переменный) — самохостинг через
`@fontsource-variable/*`. Мотив терминала (`$ whoami`, моноширинные акценты) — часть ДНК.

## Структура страницы

1. **Hero** — аватар (GitHub, круглый), `$ whoami`, имя, ротация ролей typing-эффектом,
   локация, CTA «Проекты» / «Связаться».
2. **About** — 3 абзаца из резюме + цифры (4+ лет, 3 продакшен-системы, 2 маркетплейса).
3. **Experience** — две карточки с полными названиями компаний:
   - ООО «ДЖАСТ ДУ» (justdo-service.ru): CRM для WB/Ozon + WMS складской логистики.
   - ООО «Сагиров» (j-crypto.ru): платформа алгоритмической торговли криптовалютами.
4. **Projects** — 4 пиннед репо карточками (klines-streamer, aiotrade, trade-sdk,
   icon-kitchen-gitlab-sync) со звёздами и языком; ссылка на все репозитории.
5. **Stack** — группы: языки, backend, frontend, асинхронность/очереди, данные, инфраструктура.
6. **Contacts** — Telegram `@vispar_work`, GitHub `vispar-tech`,
   email `layred.dota2@mail.ru`; подвал с локацией.

## Технические правила

- GitHub API только на этапе сборки (`src/lib/github.ts`): таймаут 5с, при ошибке —
  статический fallback из контента. Клиентские вызовы API запрещены.
- Клиентский JS только для typing-эффекта: vanilla `<script>` в Hero, без фреймворков.
- Весь текст в `src/content/ru.ts` / `en.ts`, типы в `types.ts`. В компонентах текста нет.
- SEO: title/description per locale, canonical, hreflang ru/en/x-default, sitemap,
  robots.txt, OG-image 1200×630 (`public/og.png`).
- Доступность: контраст по WCAG AA, видимый фокус, семантические заголовки h1→h2→h3.

## Контактные данные владельца

Telegram `https://t.me/vispar_work` · GitHub `https://github.com/vispar-tech` ·
email `layred.dota2@mail.ru` · аватар `https://avatars.githubusercontent.com/u/85240536`
