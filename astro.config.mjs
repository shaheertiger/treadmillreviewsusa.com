import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.treadmillreviewsusa.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        const url = item.url.replace(/\/$/, '');
        const base = 'https://www.treadmillreviewsusa.com';

        if (url === base || url === `${base}/`) {
          item.changefreq = 'weekly';
          item.lastmod = new Date().toISOString();
          item.priority = 1.0;
        } else if (url === `${base}/best-of`) {
          item.changefreq = 'weekly';
          item.lastmod = new Date().toISOString();
          item.priority = 0.9;
        } else if (url === `${base}/best-treadmill-for-home-reviews`) {
          item.changefreq = 'monthly';
          item.lastmod = new Date().toISOString();
          item.priority = 0.9;
        } else if (url === `${base}/best-folding-treadmill-reviews`) {
          item.changefreq = 'monthly';
          item.lastmod = new Date().toISOString();
          item.priority = 0.9;
        } else if (url === `${base}/best-treadmill-under-1000-reviews`) {
          item.changefreq = 'monthly';
          item.lastmod = new Date().toISOString();
          item.priority = 0.9;
        } else {
          item.changefreq = 'monthly';
          item.lastmod = new Date().toISOString();
          item.priority = 0.5;
        }

        return item;
      },
    }),
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
