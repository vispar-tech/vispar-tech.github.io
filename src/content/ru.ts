import type { SiteContent } from "./types";

const ru: SiteContent = {
  locale: "ru",
  meta: {
    title: "Даниил Павлович — Fullstack / Backend разработчик",
    description:
      "Fullstack-разработчик уровня Middle с 4+ годами коммерческой разработки: Python, FastAPI, Rust, Next.js. WMS для фулфилмента (Wildberries, Ozon, Честный знак), платформа алготрейдинга. Санкт-Петербург.",
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
          output: ["python/  rust/  typescript/  vue/  fastapi/  nextjs/  postgres/  redis/"],
        },
        {
          cmd: "cat experience.log",
          output: [
            "ип сагиров — сервис маркетплейсов (2022—2023)",
            "j-crypto — платформа алготрейдинга (2023—2024)",
            "justdo — wms для фулфилмента (2024—наст.)",
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
      "Fullstack-разработчик уровня Middle с коммерческим опытом более 4 лет. Специализируюсь на backend-ориентированной fullstack-разработке, проектировании архитектуры и высоконагруженных системах.",
      "Основной опыт — WMS для складской логистики и фулфилмента: интеграции с маркетплейсами Wildberries и Ozon, сборка заказов FBO/FBS, Честный знак. Плюс живая платформа алгоритмической торговли криптовалютами. Привык отвечать за результат целиком — веду проект от архитектуры до продакшена.",
      "Работаю с AI-агентами как контуром разработки (MCP, AGENTS-контракты, скиллы), делаю автономные сервисы автоматизации — например, десктоп-сервис печати этикеток для WMS. Развиваю собственные open-source-проекты, делюсь опытом на внутренних митапах.",
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
        link: "https://wms.justdo-service.ru",
        role: "Ведущий Fullstack-разработчик",
        period: "август 2024 — настоящее время",
        summary:
          "Полноценный WMS для фулфилмент-центра: приёмка, учёт товаров, сборка заказов FBO/FBS по маркетплейсам, отгрузка. Веду проект целиком — совмещаю роли разработчика, project manager, QA и devops.",
        preview: "/preview-wms.png",
        points: [
          "WMS для фулфилмента: приёмка, учёт товаров, перемещения, сборка заказов FBO/FBS по Wildberries и Ozon, отгрузка.",
          "Интеграции с Wildberries и Ozon через API: синхронизация товаров, остатков, заказов и отгрузок; Честный знак для маркированных товаров.",
          "Event-driven архитектура и realtime-обновления через WebSocket для операторов склада; интерфейс оператора на React/Next.js.",
          "Парсеры данных маркетплейсов на Scrapy, браузерная автоматизация (Camoufox, Selenium, Playwright) для мониторинга внешних сервисов.",
          "Внутренние утилиты и админ-инструменты для сотрудников, в том числе на Vue.js; десктоп-сервис печати этикеток (PySide6).",
        ],
        stack: [
          "Python",
          "FastAPI",
          "Django",
          "DRF",
          "Next.js",
          "React",
          "Vue.js",
          "TypeScript",
          "Redux Toolkit",
          "RTK Query",
          "Mantine",
          "Celery",
          "Taskiq",
          "RabbitMQ",
          "PostgreSQL",
          "Redis",
          "Docker",
          "WebSocket",
          "Scrapy",
          "Playwright",
          "Selenium",
          "Camoufox",
          "YouTrack",
        ],
      },
      {
        company: "ООО «Сагиров»",
        link: "https://j-crypto.ru",
        role: "Backend-разработчик",
        period: "март 2023 — июнь 2024",
        summary:
          "Живая платформа алгоритмической торговли криптовалютами: торговые боты, рыночные данные в реальном времени, тестирование стратегий, подключение к биржам через API. Пришёл junior-разработчиком, вырос до middle.",
        points: [
          "Backend торговой платформы на FastAPI: обработка потоковых данных и торговая логика; real-time передача данных через WebSocket.",
          "Обработка потоков данных от бирж: protobuf + gRPC для передачи и обработки рыночных данных.",
          "Бэктестер: обработка исторических данных на pandas, обучение моделей стратегий, подбор параметров; backend бэктестера на Node.js (Express → Nest.js).",
          "Высокопроизводительный модуль на Rust для real-time данных.",
          "Десктопное приложение на PyQt6 для анализа рынка, Telegram-бот на aiogram, мониторинг ошибок через Sentry.",
        ],
        stack: [
          "Python",
          "Rust",
          "Node.js",
          "Express",
          "Nest.js",
          "FastAPI",
          "WebSocket",
          "gRPC",
          "protobuf",
          "Celery",
          "RabbitMQ",
          "PostgreSQL",
          "Redis",
          "Docker",
          "PyQt6",
          "aiogram",
          "pandas",
          "Sentry",
        ],
        preview: "/preview-jcrypto.png",
      },
      {
        company: "ИП «Сагиров Алексей Николаевич»",
        role: "Junior-разработчик",
        period: "февраль 2022 — март 2023",
        summary:
          "Первый коммерческий проект: сервис для работы с маркетплейсами (e-commerce) — управление остатками и заказами FBS/FBO, синхронизация данных, Telegram-бот.",
        points: [
          "Сервис управления остатками и заказами FBS/FBO по маркетплейсам.",
          "Синхронизация данных маркетплейсов и внешних источников.",
          "Telegram-бот для уведомлений и управления операциями.",
          "Автоматизация внутренних рутинных операций.",
        ],
        stack: [
          "Python",
          "FastAPI",
          "Django",
          "PostgreSQL",
          "Redis",
          "Docker",
          "Scrapy",
          "Telegram Bot API",
          "WebSocket",
        ],
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
        name: "aiotrade",
        url: "https://github.com/vispar-tech/aiotrade",
        description:
          "Высокопроизводительные асинхронные API-клиенты 7 криптобирж для Python (BingX, Bybit, OKX, Bitget, Binance, KuCoin, Gate): умное управление сессиями, TTL-кэш, 244+ метода API. Опубликован на PyPI.",
        language: "Python",
      },
      {
        name: "klines-streamer",
        url: "https://github.com/vispar-tech/klines-streamer",
        description:
          "Мульти-биржевой Python-сервис стриминга рыночных данных через WebSocket: агрегация сделок в свечи (klines) на настраиваемых интервалах, многоконтейнерная архитектура, расширяемые консюмеры (Redis, WebSocket, console, file).",
        language: "Python",
      },
      {
        name: "openrot",
        url: "https://github.com/vispar-tech/openrot",
        description:
          "Локальный ротатор прокси: один конфиг задаёт профили и узлы, трафик идёт от Cloudflare WARP вниз по цепочке до первого живого узла, при падении — авто-ротация. Loopback-мост для OpenAI-совместимых клиентов, покрытие тестами >85%.",
        language: "Python",
      },
      {
        name: "rtwi",
        url: "https://github.com/vispar-tech/rtwi",
        description:
          "CLI для авто-авторизации в коммерческом Wi-Fi Ростелекома (auth.wifi.rt.ru): вход по SMS/callback, автоматический MAC-ролл для снятия лимитов. Отдельный бинарь под macOS arm64.",
        language: "Python",
      },
    ],
  },
  stack: {
    heading: "Стек",
    groups: [
      { name: "Языки", items: ["Python", "Rust", "TypeScript", "JavaScript", "SQL"] },
      { name: "Backend", items: ["FastAPI", "Django", "Django REST Framework", "REST API", "WebSocket", "gRPC", "protobuf", "Node.js (Express, Nest.js)"] },
      { name: "Frontend", items: ["React", "Next.js", "Vue.js", "Redux Toolkit", "RTK Query", "Mantine", "PySide6", "PyQt6"] },
      { name: "Асинхронность и очереди", items: ["Celery", "Taskiq", "RabbitMQ"] },
      { name: "Данные", items: ["PostgreSQL", "Redis", "SQLAlchemy", "pandas"] },
      { name: "Автоматизация и парсинг", items: ["Scrapy", "Playwright", "Selenium", "Camoufox"] },
      { name: "Инфраструктура", items: ["Docker", "Linux", "Nginx", "CI/CD", "Sentry", "YouTrack"] },
      { name: "AI-агенты", items: ["MCP", "AGENTS-контракты", "субагенты и скиллы"] },
    ],
  },
  contacts: {
    heading: "Контакты",
    text: "Открыт к предложениям по работе и интересным проектам. Быстрее всего отвечаю в Telegram.",
    telegramUrl: "https://t.me/vispar_work",
    telegramLabel: "@vispar_work",
    githubUrl: "https://github.com/vispar-tech",
    githubLabel: "github.com/vispar-tech",
    email: "vispar@vk.com",
    copyLabel: "[копировать]",
    copiedLabel: "[скопировано ✓]",
    footerNote: "Санкт-Петербург · UTC+3",
  },
};

export default ru;
