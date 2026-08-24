import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://vispar-tech.github.io",
  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "en"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
});
