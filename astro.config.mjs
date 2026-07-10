import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://www.mooz.top",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap()
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
