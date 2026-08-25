import type { SiteContent } from "./types";

const ru: SiteContent = {
  locale: "ru",
  meta: {
    title: "Даниил Павлович — Fullstack / Backend разработчик",
    description:
      "Fullstack-разработчик с 4+ годами коммерческой разработки: Python, FastAPI, Rust, Next.js. CRM и WMS для маркетплейсов, платформа алготрейдинга. Санкт-Петербург.",
  },
  nav: {
    about: "Обо мне",
    experience: "Опыт",
    projects: "Проекты",
    stack: "Стек",
    contacts: "Контакты",
    menu: "Меню",
  },
  a11y: {
    skipToContent: "Перейти к содержимому",
  },
  hero: {
    prompt: "$ whoami",
    name: "Даниил Павлович",
    roles: ["Fullstack-разработчик", "Backend-разработчик", "Python · FastAPI · Rust"],
    location: "Санкт-Петербург",
    photoAlt: "Фото Даниила Павловича",
    ctaPrimary: { label: "Проекты", href: "#projects" },
    ctaSecondary: { label: "Связаться", href: "#contacts" },
    terminal: {
      title: "vispar@spb: ~",
      lines: [
        {
          cmd: "ls ~/stack",
          output: ["python/  rust/  typescript/  fastapi/  nextjs/  postgres/"],
        },
        {
          cmd: "cat experience.log",
          output: [
            "justdo — crm + wms для wb и ozon (2021—2023)",
            "j-crypto — платформа алготрейдинга (2023—2026)",
          ],
        },
        {
          cmd: "open contacts --fast",
          output: ["tg @vispar_work · gh vispar-tech · spb utc+3"],
        },
      ],
    },
  },
  about: {
    heading: "Обо мне",
    paragraphs: [
      "Fullstack-разработчик с опытом коммерческой разработки более 4 лет. Специализируюсь на backend-ориентированной fullstack-разработке, проектировании архитектуры и высоконагруженных системах.",
      "Работаю с распределёнными системами, real-time обработкой данных, интеграциями с внешними API и асинхронной архитектурой. Основной опыт — комплекс сервисов для маркетплейсов и складской логистики (CRM + WMS) и платформа алгоритмической торговли криптовалютами.",
      "Развиваю собственные проекты и утилиты на GitHub: инструменты для автоматизации и работы с криптобиржами.",
    ],
    stats: [
      { value: "4+", label: "лет коммерческой разработки" },
      { value: "3", label: "продакшен-системы выведены в прод" },
      { value: "2", label: "маркетплейса: Wildberries и Ozon" },
    ],
  },
  experience: {
    heading: "Опыт работы",
    items: [
      {
        company: "ООО «ДЖАСТ ДУ»",
        link: "https://justdo-service.ru",
        role: "Fullstack / Backend Developer",
        period: "декабрь 2021 — август 2023",
        summary:
          "Два ключевых продукта компании: CRM для продавцов маркетплейсов и WMS для складской логистики и фулфилмента.",
        preview: "/preview-wms.png",
        points: [
          "CRM для продавцов Wildberries и Ozon: управление товарами, заказами и остатками, синхронизация с маркетплейсами, автоматизация рутинных процессов.",
          "WMS: учёт товаров, перемещения, сборка заказов и работа в реальном времени.",
          "Backend и frontend, интеграции с внешними API: бизнес-логика, синхронизация данных, фоновые задачи через очереди.",
          "Проектирование event-driven архитектуры и realtime-обновлений; интерфейс оператора склада с актуальными данными.",
        ],
        stack: [
          "Python",
          "FastAPI",
          "Django",
          "DRF",
          "Next.js",
          "React",
          "TypeScript",
          "Celery",
          "Taskiq",
          "RabbitMQ",
          "PostgreSQL",
          "Redis",
          "Docker",
          "WebSocket",
        ],
      },
      {
        company: "ООО «Сагиров»",
        link: "https://j-crypto.ru",
        role: "Fullstack / Backend Developer",
        period: "август 2023 — июнь 2026",
        summary:
          "Платформа алгоритмической торговли криптовалютами: торговые боты, рыночные данные в реальном времени, тестирование стратегий, подключение к биржам через API.",
        points: [
          "Разработка backend торговой платформы: обработка потоковых данных и реализация торговой логики.",
          "Система исполнения стратегий и интеграции с биржами.",
          "Торговые движки на Python и высокопроизводительный модуль на Rust для real-time данных.",
          "Десктопное приложение на PyQt6 для анализа рынка и тестирования стратегий.",
          "Telegram-бот для управления торговыми аккаунтами и стратегиями.",
        ],
        stack: [
          "Python",
          "Rust",
          "FastAPI",
          "WebSocket",
          "Celery",
          "RabbitMQ",
          "PostgreSQL",
          "Redis",
          "Docker",
          "PyQt6",
          "aiogram",
        ],
        preview: "/preview-jcrypto.png",
      },
    ],
  },
  projects: {
    heading: "Проекты",
    subtitle: "Собственные инструменты и open-source на GitHub",
    viewAllLabel: "Все репозитории",
    viewAllUrl: "https://github.com/vispar-tech?tab=repositories",
    items: [
      {
        name: "klines-streamer",
        url: "https://github.com/vispar-tech/klines-streamer",
        description:
          "Python-сервис агрегации сделок из WebSocket API Bybit в свечи (klines) на настраиваемых интервалах.",
        language: "Python",
      },
      {
        name: "aiotrade",
        url: "https://github.com/vispar-tech/aiotrade",
        description:
          "Высокопроизводительные асинхронные клиенты API бирж для Python с управлением сессиями и кэшем.",
        language: "Python",
      },
      {
        name: "trade-sdk",
        url: "https://github.com/vispar-tech/trade-sdk",
        description:
          "Асинхронный клиент торговых API на Rust для бирж BingX и Bybit с управлением сессиями и кэшем.",
        language: "Rust",
      },
      {
        name: "icon-kitchen-gitlab-sync",
        url: "https://github.com/vispar-tech/icon-kitchen-gitlab-sync",
        description:
          "Генерация URL icon.kitchen, скачивание иконок и синхронизация их как аватаров проектов GitLab.",
        language: "Python",
      },
    ],
  },
  stack: {
    heading: "Стек",
    groups: [
      { name: "Языки", items: ["Python", "Rust", "TypeScript", "JavaScript"] },
      { name: "Backend", items: ["FastAPI", "Django", "Django REST Framework", "REST API", "WebSocket"] },
      { name: "Frontend", items: ["React", "Next.js", "PyQt6"] },
      { name: "Асинхронность и очереди", items: ["Celery", "Taskiq", "RabbitMQ"] },
      { name: "Данные", items: ["PostgreSQL", "Redis"] },
      { name: "Инфраструктура", items: ["Docker", "event-driven architecture"] },
    ],
  },
  contacts: {
    heading: "Контакты",
    text: "Открыт к предложениям по работе и интересным проектам. Быстрее всего отвечаю в Telegram.",
    telegramUrl: "https://t.me/vispar_work",
    telegramLabel: "@vispar_work",
    githubUrl: "https://github.com/vispar-tech",
    githubLabel: "github.com/vispar-tech",
    email: "layred.dota2@mail.ru",
    copyLabel: "[копировать]",
    copiedLabel: "[скопировано ✓]",
    footerNote: "Санкт-Петербург · UTC+3",
  },
};

export default ru;
