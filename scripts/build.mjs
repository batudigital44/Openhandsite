// Build sarmalayici.
// 1) Prerender icin bir Chrome/Chromium saglar (yerelde sistem tarayicisi, bulutta indirir).
// 2) vite build calistirir.
// 3) Prerender sonucunu dogrular; bossa build'i basarisiz eder.
// vite-plugin-prerender hata durumunda build'i sessizce gecirdigi icin bu kontrol zorunlu.
import { existsSync, readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distIndex = path.join(root, 'dist', 'index.html')

function resolveChrome() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    process.env.CHROME_PATH,
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/opt/google/chrome/chrome',
  ].filter(Boolean)
  return candidates.find((candidate) => existsSync(candidate))
}

function installChrome() {
  console.log('[build] Chrome indiriliyor (puppeteer)...')
  const install = spawnSync('npx', ['--yes', 'puppeteer', 'browsers', 'install', 'chrome'], {
    stdio: 'inherit',
  })
  if (install.status !== 0) return null

  const located = spawnSync('npx', ['--yes', 'puppeteer', 'browsers', 'path', 'chrome'], {
    encoding: 'utf8',
  })
  return (located.stdout || '')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && existsSync(line))
    .pop()
}

let chromePath = resolveChrome()
if (!chromePath) chromePath = installChrome()
if (!chromePath) {
  console.error('[build] Chrome bulunamadi; prerender yapilamaz.')
  process.exit(1)
}
console.log(`[build] Chrome: ${chromePath}`)

const build = spawnSync('npx', ['vite', 'build'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    PUPPETEER_EXECUTABLE_PATH: chromePath,
    CHROME_PATH: chromePath,
  },
})
if (build.status !== 0) process.exit(build.status ?? 1)

const html = existsSync(distIndex) ? readFileSync(distIndex, 'utf8') : ''
const rootOpen = html.indexOf('<div id="root">')
const rendered = rootOpen !== -1 && html.length - rootOpen > 1000

if (!rendered) {
  console.error('[build] Prerender bos: dist/index.html icinde icerik yok. Build basarisiz.')
  process.exit(1)
}
console.log('[build] Prerender dogrulandi: dist/index.html icerik iceriyor.')
