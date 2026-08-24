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
          output: ["python/  rust/  typescript/  fastapi/  postgres/"],
        },
        {
          cmd: "cat experience.log",
          output: [
            "justdo — crm + wms for wb & ozon (2021—2023)",
            "j-crypto — algo trading platform (2023—2026)",
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
      "I also build and maintain my own projects and utilities on GitHub: automation tools and crypto exchange libraries.",
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
        period: "Aug 2023 — Jun 2026",
        summary:
          "Algorithmic crypto trading platform: trading bots, real-time market data, strategy backtesting, exchange connectivity via API.",
        points: [
          "Built the backend of the trading platform: streaming data processing and trading logic.",
          "Developed the strategy execution system and exchange integrations.",
          "Created Python trading engines and a high-performance Rust module for real-time data.",
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
        name: "klines-streamer",
        url: "https://github.com/vispar-tech/klines-streamer",
        description:
          "A Python service that aggregates trades from Bybit's WebSocket API into candlestick (kline) data at configurable intervals.",
        language: "Python",
      },
      {
        name: "aiotrade",
        url: "https://github.com/vispar-tech/aiotrade",
        description:
          "High-performance async exchange API clients for Python with intelligent session and cache management.",
        language: "Python",
      },
      {
        name: "trade-sdk",
        url: "https://github.com/vispar-tech/trade-sdk",
        description:
          "Async trading API client in Rust for BingX and Bybit exchanges with session and cache management.",
        language: "Rust",
      },
      {
        name: "icon-kitchen-gitlab-sync",
        url: "https://github.com/vispar-tech/icon-kitchen-gitlab-sync",
        description:
          "Generates icon.kitchen URLs, downloads icons, and syncs them as GitLab project avatars.",
        language: "Python",
      },
    ],
  },
  stack: {
    heading: "Stack",
    groups: [
      { name: "Languages", items: ["Python", "Rust", "TypeScript", "JavaScript"] },
      { name: "Backend", items: ["FastAPI", "Django", "Django REST Framework", "REST API", "WebSocket"] },
      { name: "Frontend", items: ["React", "Next.js", "PyQt6"] },
      { name: "Async & queues", items: ["Celery", "Taskiq", "RabbitMQ"] },
      { name: "Data", items: ["PostgreSQL", "Redis"] },
      { name: "Infrastructure", items: ["Docker", "event-driven architecture"] },
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
