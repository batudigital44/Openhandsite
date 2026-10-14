// Build sarmalayici.
// 1) Prerender icin bir Chrome/Chromium saglar (yerelde sistem tarayicisi, bulutta indirir).
// 2) vite build calistirir.
// 3) Prerender sonucunu dogrular; bossa build'i basarisiz eder.
// vite-plugin-prerender hata durumunda build'i sessizce gecirdigi icin bu kontrol zorunlu.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import os from 'node:os'
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

// puppeteer onbellegi altinda indirilen chrome ikilisini bulur.
function findInPuppeteerCache() {
  const cacheRoot =
    process.env.PUPPETEER_CACHE_DIR || path.join(os.homedir(), '.cache', 'puppeteer')
  const targets = ['chrome', 'headless_shell']
  const found = []
  const walk = (dir, depth) => {
    if (depth > 6) return
    let entries
    try {
      entries = readdirSync(dir, { withFileTypes: true })
    } catch {
      return
    }
    for (const entry of entries) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(full, depth + 1)
      else if (targets.includes(entry.name)) {
        try {
          if (statSync(full).mode & 0o111) found.push(full)
        } catch {
          /* yok say */
        }
      }
    }
  }
  walk(cacheRoot, 0)
  return found.sort().pop()
}

function installChrome() {
  console.log('[build] Chrome indiriliyor (puppeteer)...')
  const install = spawnSync('npx', ['--yes', 'puppeteer', 'browsers', 'install', 'chrome'], {
    encoding: 'utf8',
  })
  const output = `${install.stdout || ''}\n${install.stderr || ''}`
  process.stdout.write(output)
  if (install.status !== 0) return null

  // Kurulum ciktisi "chrome@<surum> <yol>" biciminde yol icerir.
  const fromOutput = output
    .split('\n')
    .flatMap((line) => line.trim().split(/\s+/))
    .filter((token) => token.startsWith('/') && existsSync(token))
    .pop()
  return fromOutput || findInPuppeteerCache()
}

let chromePath = resolveChrome() || installChrome() || findInPuppeteerCache()
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
