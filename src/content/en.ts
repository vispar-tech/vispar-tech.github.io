import type { SiteContent } from "./types";

const en: SiteContent = {
  locale: "en",
  meta: {
    title: "Daniil Pavlovich — Fullstack / Backend Developer",
    description:
      "Middle fullstack developer with 4+ years of commercial experience: Python, FastAPI, Rust, Next.js. Fulfillment WMS (Wildberries, Ozon, Chestny Znak), algorithmic trading platform. Saint Petersburg.",
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
          output: ["python/  rust/  typescript/  vue/  fastapi/  nextjs/  postgres/  redis/"],
        },
        {
          cmd: "cat experience.log",
          output: [
            "ip sagirov — marketplace service (2022—2023)",
            "j-crypto — algo trading platform (2023—2024)",
            "justdo — fulfillment wms (2024—present)",
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
      "Middle fullstack developer with over 4 years of commercial experience. I focus on backend-oriented fullstack work, architecture design, and high-load systems.",
      "My core experience is a fulfillment WMS: marketplace integrations with Wildberries and Ozon, FBO/FBS order picking, Chestny Znak. Plus a live algorithmic crypto trading platform. I take full ownership — from architecture to production.",
      "I work with AI agents as a development loop (MCP, AGENTS contracts, skills) and build autonomous automation services — like a desktop label-printing service for the WMS. I maintain my own open-source projects and speak at internal company meetups.",
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
        link: "https://wms.justdo-service.ru",
        role: "Lead Fullstack Developer",
        period: "Aug 2024 — Present",
        summary:
          "A full-fledged WMS for a fulfillment center: receiving, inventory, FBO/FBS order picking across marketplaces, shipping. I own the project end to end — combining developer, project manager, QA, and devops roles.",
        preview: "/preview-wms.png",
        points: [
          "Fulfillment WMS: receiving, inventory, stock movements, FBO/FBS order picking for Wildberries and Ozon, shipping.",
          "Wildberries and Ozon API integrations: product, stock, order, and shipment sync; Chestny Znak for labeled goods.",
          "Event-driven architecture with realtime updates over WebSocket for warehouse operators; operator UI built with React/Next.js.",
          "Marketplace data pipelines on Scrapy, browser automation (Camoufox, Selenium, Playwright) for monitoring external services.",
          "Internal utilities and admin tools for staff, some built with Vue.js; a desktop label-printing service (PySide6).",
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
        company: "Sagirov LLC",
        link: "https://j-crypto.ru",
        role: "Backend Developer",
        period: "Mar 2023 — Jun 2024",
        summary:
          "A live algorithmic crypto trading platform: trading bots, real-time market data, strategy backtesting, exchange connectivity via API. Joined as a junior and grew to middle.",
        points: [
          "Built the trading platform backend on FastAPI: streaming data processing and trading logic; realtime delivery over WebSocket.",
          "Exchange data streams processed with protobuf + gRPC for market data transfer.",
          "Backtester: historical data processing on pandas, strategy model training, parameter tuning; its backend on Node.js (Express → Nest.js).",
          "A high-performance Rust module for realtime data.",
          "A PyQt6 desktop app for market analysis, an aiogram Telegram bot, error monitoring with Sentry.",
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
        company: "IP Sagirov Aleksey Nikolaevich",
        role: "Junior Developer",
        period: "Feb 2022 — Mar 2023",
        summary:
          "My first commercial project: a marketplace service (e-commerce) — FBS/FBO stock and order management, data sync, and a Telegram bot.",
        points: [
          "Marketplace service for FBS/FBO stock and order management.",
          "Data sync between marketplaces and external sources.",
          "Telegram bot for notifications and operations management.",
          "Automation of internal routine operations.",
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
    heading: "Projects",
    subtitle: "Personal tools and open source on GitHub",
    viewAllLabel: "All repositories",
    viewAllUrl: "https://github.com/vispar-tech?tab=repositories",
    items: [
      {
        name: "aiotrade",
        url: "https://github.com/vispar-tech/aiotrade",
        description:
          "High-performance async API clients for 7 crypto exchanges in Python (BingX, Bybit, OKX, Bitget, Binance, KuCoin, Gate): smart session management, TTL cache, and 244+ API methods. Published on PyPI.",
        language: "Python",
      },
      {
        name: "klines-streamer",
        url: "https://github.com/vispar-tech/klines-streamer",
        description:
          "A multi-exchange Python service streaming market data over WebSocket: trade aggregation into candlesticks (klines) at configurable intervals, multi-container architecture, pluggable consumers (Redis, WebSocket, console, file).",
        language: "Python",
      },
      {
        name: "openrot",
        url: "https://github.com/vispar-tech/openrot",
        description:
          "Local proxy rotator: one config defines profiles and nodes; traffic flows from Cloudflare WARP down the chain to the first alive node, auto-rotating when one dies. Loopback bridge for OpenAI-compatible clients, test coverage >85%.",
        language: "Python",
      },
      {
        name: "rtwi",
        url: "https://github.com/vispar-tech/rtwi",
        description:
          "CLI for automatic sign-in to the Rostelecom commercial Wi-Fi captive portal (auth.wifi.rt.ru): SMS/callback login and automatic MAC roll to lift limits. Ships a standalone macOS arm64 binary.",
        language: "Python",
      },
    ],
  },
  stack: {
    heading: "Stack",
    groups: [
      { name: "Languages", items: ["Python", "Rust", "TypeScript", "JavaScript", "SQL"] },
      { name: "Backend", items: ["FastAPI", "Django", "Django REST Framework", "REST API", "WebSocket", "gRPC", "protobuf", "Node.js (Express, Nest.js)"] },
      { name: "Frontend", items: ["React", "Next.js", "Vue.js", "Redux Toolkit", "RTK Query", "Mantine", "PySide6", "PyQt6"] },
      { name: "Async & queues", items: ["Celery", "Taskiq", "RabbitMQ"] },
      { name: "Data", items: ["PostgreSQL", "Redis", "SQLAlchemy", "pandas"] },
      { name: "Automation & scraping", items: ["Scrapy", "Playwright", "Selenium", "Camoufox"] },
      { name: "Infrastructure", items: ["Docker", "Linux", "Nginx", "CI/CD", "Sentry", "YouTrack"] },
      { name: "AI agents", items: ["MCP", "AGENTS contracts", "subagents & skills"] },
    ],
  },
  contacts: {
    heading: "Contacts",
    text: "Open to job offers and interesting projects. Telegram is the fastest way to reach me.",
    telegramUrl: "https://t.me/vispar_work",
    telegramLabel: "@vispar_work",
    githubUrl: "https://github.com/vispar-tech",
    githubLabel: "github.com/vispar-tech",
    email: "vispar@vk.com",
    copyLabel: "[copy]",
    copiedLabel: "[copied ✓]",
    footerNote: "Saint Petersburg · UTC+3",
  },
};

export default en;
