import type { SiteContent } from "./types";

const en: SiteContent = {
  locale: "en",
  meta: {
    title: "Daniil Pavlovich — Fullstack / Backend Developer",
    description:
      "Fullstack developer with 4+ years of commercial experience: Python, FastAPI, Rust, Next.js. Marketplace CRM and WMS systems, algorithmic trading platform. Saint Petersburg.",
  },
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    stack: "Stack",
    contacts: "Contacts",
    menu: "Menu",
  },
  a11y: {
    skipToContent: "Skip to content",
  },
  hero: {
    prompt: "$ whoami",
    name: "Daniil Pavlovich",
    roles: ["Fullstack Developer", "Backend Developer", "Python · FastAPI · Rust"],
    location: "Saint Petersburg",
    photoAlt: "Photo of Daniil Pavlovich",
    ctaPrimary: { label: "Projects", href: "#projects" },
    ctaSecondary: { label: "Contact", href: "#contacts" },
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
            "justdo — crm + wms for wb & ozon (2021—2023)",
            "j-crypto — algo trading platform (2023—present)",
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
    heading: "About me",
    paragraphs: [
      "Fullstack developer with over 4 years of commercial experience. I focus on backend-oriented fullstack work, architecture design, and high-load systems.",
      "I work with distributed systems, real-time data processing, external API integrations, and asynchronous architecture. My core experience covers a suite of services for marketplaces and warehouse logistics (CRM + WMS) and an algorithmic crypto trading platform.",
      "I also build my own open-source projects: crypto exchange client libraries published on PyPI and crates.io, plus automation tooling.",
    ],
    stats: [
      { value: "4+", label: "years of commercial development" },
      { value: "3", label: "production systems shipped" },
      { value: "2", label: "marketplaces served: Wildberries, Ozon" },
    ],
  },
  experience: {
    heading: "Experience",
    items: [
      {
        company: "JUSTDO LLC",
        link: "https://justdo-service.ru",
        role: "Fullstack / Backend Developer",
        period: "Dec 2021 — Aug 2023",
        summary:
          "Two core products of the company: a CRM for marketplace sellers and a WMS for warehouse logistics and fulfillment.",
        preview: "/preview-wms.png",
        points: [
          "CRM for Wildberries and Ozon sellers: product, order, and inventory management; marketplace data sync; automation of routine workflows.",
          "WMS: goods tracking, stock movements, order picking, and real-time operation.",
          "Backend and frontend plus external API integrations: business logic, data synchronization, background jobs via queues.",
          "Designed event-driven architecture and realtime updates; built a warehouse operator interface with live data.",
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
        company: "Sagirov LLC",
        link: "https://j-crypto.ru",
        role: "Fullstack / Backend Developer",
        period: "Aug 2023 — Present",
        summary:
          "Algorithmic crypto trading platform: trading bots, real-time market data, strategy backtesting, exchange connectivity via API.",
        points: [
          "Built the backend of the trading platform: streaming data processing and trading logic.",
          "Developed the strategy execution system and exchange integrations.",
          "Trading engines: a Python backend plus high-performance Rust modules for real-time data — market data aggregation, order execution, and a candlestick service publishing to Redis, RabbitMQ, and WebSocket.",
          "Shipped a PyQt6 desktop app for market analysis and strategy backtesting.",
          "Built a Telegram bot for managing trading accounts and strategies.",
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
    heading: "Projects",
    subtitle: "Personal tools and open source on GitHub",
    viewAllLabel: "All repositories",
    viewAllUrl: "https://github.com/vispar-tech?tab=repositories",
    items: [
      {
        name: "aiotrade",
        url: "https://github.com/vispar-tech/aiotrade",
        description:
          "Async exchange API clients for 7 crypto exchanges in Python: session management, TTL cache, and 244+ API methods. Published on PyPI.",
        language: "Python",
      },
      {
        name: "trade-sdk",
        url: "https://github.com/vispar-tech/trade-sdk",
        description:
          "Async trading API client in Rust for BingX and Bybit: connection pooling, TTL cache, and 48+ methods. Published on crates.io.",
        language: "Rust",
      },
      {
        name: "klines-streamer",
        url: "https://github.com/vispar-tech/klines-streamer",
        description:
          "A Python service that streams market data from crypto exchange WebSocket APIs and aggregates trades into candlestick (kline) data at configurable intervals.",
        language: "Python",
      },
      {
        name: "klines-streamer-rs",
        url: "https://github.com/vispar-tech/klines-streamer-rs",
        description:
          "A Rust service that aggregates closed candles (klines) from multiple exchange trade streams: data normalization and publishing to Redis, RabbitMQ, and WebSocket.",
        language: "Rust",
      },
      {
        name: "openrot",
        url: "https://github.com/vispar-tech/openrot",
        description:
          "Local proxy rotator: one config defines profiles and nodes; traffic flows from Cloudflare WARP down the chain to the first alive node, auto-rotating when one dies.",
        language: "Python",
      },
      {
        name: "rtwi",
        url: "https://github.com/vispar-tech/rtwi",
        description:
          "Automatic sign-in to the Rostelecom commercial Wi-Fi captive portal (auth.wifi.rt.ru), with MAC roll when the portal blocks the device.",
        language: "Python",
      },
    ],
  },
  stack: {
    heading: "Stack",
    groups: [
      { name: "Languages", items: ["Python", "Rust", "TypeScript", "JavaScript"] },
      { name: "Backend", items: ["FastAPI", "Django", "Django REST Framework", "REST API", "WebSocket", "asyncio"] },
      { name: "Frontend", items: ["React", "Next.js", "PyQt6"] },
      { name: "Async & queues", items: ["Celery", "Taskiq", "RabbitMQ"] },
      { name: "Data", items: ["PostgreSQL", "Redis", "SQL", "SQLAlchemy", "pandas"] },
      { name: "Infrastructure", items: ["Docker", "Linux", "Nginx", "CI/CD", "event-driven architecture"] },
    ],
  },
  contacts: {
    heading: "Contacts",
    text: "Open to job offers and interesting projects. Telegram is the fastest way to reach me.",
    telegramUrl: "https://t.me/vispar_work",
    telegramLabel: "@vispar_work",
    githubUrl: "https://github.com/vispar-tech",
    githubLabel: "github.com/vispar-tech",
    email: "layred.dota2@mail.ru",
    copyLabel: "[copy]",
    copiedLabel: "[copied ✓]",
    footerNote: "Saint Petersburg · UTC+3",
  },
};

export default en;
