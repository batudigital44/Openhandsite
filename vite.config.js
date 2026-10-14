import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { ROUTE_SLUGS, SUPPORTED_LANGS, DEFAULT_LANG } from './src/i18n/routes.js'

const require = createRequire(import.meta.url)
// vite-plugin-prerender'ın ESM çıktısı CommonJS require kullanıyor; CJS sürümünü yüklüyoruz.
const vitePrerender = require('vite-plugin-prerender')

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Prerender icin bir Chromium/Chrome ikilisi kullanilir. Oncelik: ortam degiskenleri
// (scripts/build.mjs tarafindan set edilir), sonra sistemdeki bilinen yollar.
const CHROMIUM_CANDIDATES = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  process.env.CHROME_PATH,
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/opt/google/chrome/chrome',
].filter(Boolean)
const executablePath = CHROMIUM_CANDIDATES.find((candidate) => fs.existsSync(candidate))

const SITE_URL = 'https://www.batuhanates.com'
// Tüm dil/sayfa kombinasyonları prerender edilir (TR/EN/DE ayrı URL'ler).
const ROUTES = SUPPORTED_LANGS.flatMap((lang) =>
  Object.keys(ROUTE_SLUGS).map((key) => `/${ROUTE_SLUGS[key][lang] || ''}`)
)
const LAST_MOD = new Date().toISOString().split('T')[0]
const PRIORITY = { home: '1.0', about: '0.8', portfolio: '0.8', education: '0.8', press: '0.7', contact: '0.7' }

// Tüm dil/sayfa kombinasyonları için hreflang alternatifli sitemap üretir.
function sitemapPlugin() {
  const locFor = (key, lang) => `${SITE_URL}/${ROUTE_SLUGS[key][lang] || ''}`
  const alternateLinks = (key) =>
    SUPPORTED_LANGS.map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${locFor(key, lang)}"/>`)
      .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${locFor(key, DEFAULT_LANG)}"/>`)

  return {
    name: 'batuhan-sitemap',
    apply: 'build',
    closeBundle() {
      const entries = Object.keys(ROUTE_SLUGS).flatMap((key) =>
        SUPPORTED_LANGS.map((lang) =>
          [
            '  <url>',
            `    <loc>${locFor(key, lang)}</loc>`,
            `    <lastmod>${LAST_MOD}</lastmod>`,
            `    <changefreq>monthly</changefreq>`,
            `    <priority>${PRIORITY[key] || '0.5'}</priority>`,
            ...alternateLinks(key),
            '  </url>',
          ].join('\n')
        )
      )

      const xml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
        ...entries,
        '</urlset>',
        '',
      ].join('\n')

      fs.writeFileSync(path.join(__dirname, 'dist', 'sitemap.xml'), xml)
      console.log(`[batuhan-sitemap] ${entries.length} URL written to dist/sitemap.xml`)
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    sitemapPlugin(),
    // Not: vite-ssg/react-snap yerine vite-plugin-prerender kullanılıyor.
    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      indexPath: path.join(__dirname, 'dist', 'index.html'),
      routes: ROUTES,
      renderer: new vitePrerender.PuppeteerRenderer({
        maxConcurrentRoutes: 1,
        renderAfterTime: 1000,
        ...(executablePath ? { executablePath } : {})
      })
    })
  ],
  base: '/',
  preview: {
    allowedHosts: ['.prod-runtime.all-hands.dev']
  },
  server: {
    allowedHosts: ['.prod-runtime.all-hands.dev']
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})