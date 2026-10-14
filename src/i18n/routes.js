export const DEFAULT_LANG = 'tr'
export const SUPPORTED_LANGS = ['tr', 'en', 'de']

export const ROUTE_SLUGS = {
  home: { tr: '', en: 'en', de: 'de' },
  about: { tr: 'hakkimda', en: 'en/about', de: 'de/about' },
  portfolio: { tr: 'portfolyo', en: 'en/portfolio', de: 'de/portfolio' },
  education: { tr: 'egitimler', en: 'en/trainings', de: 'de/schulungen' },
  press: { tr: 'medya-basin', en: 'en/media-press', de: 'de/medien-presse' },
  contact: { tr: 'iletisim', en: 'en/contact', de: 'de/kontakt' },
}

export const HREFLANG_MAP = { tr: 'tr', en: 'en', de: 'de' }

export const localizedPath = (key, lang) => `/${ROUTE_SLUGS[key][lang] || ''}`

// URL yolundan aktif dili ve hangi içerik sayfası olduğunu çıkarır.
export const parsePath = (pathname) => {
  const clean = pathname.replace(/\/+$/, '') || '/'
  for (const lang of SUPPORTED_LANGS) {
    for (const [key, slugs] of Object.entries(ROUTE_SLUGS)) {
      if (lang === DEFAULT_LANG) continue
      const slug = slugs[lang]
      if (slug && clean === `/${slug}`) {
        return { lang, pageKey: key, isKnown: true }
      }
    }
  }
  for (const [key, slugs] of Object.entries(ROUTE_SLUGS)) {
    const slug = slugs[DEFAULT_LANG]
    if ((slug && clean === `/${slug}`) || (!slug && clean === '/')) {
      return { lang: DEFAULT_LANG, pageKey: key, isKnown: true }
    }
  }
  return { lang: DEFAULT_LANG, pageKey: null, isKnown: false }
}

// Tüm dil ve sayfa kombinasyonları: { lang, pageKey, path }
export const allRoutes = SUPPORTED_LANGS.flatMap((lang) =>
  Object.keys(ROUTE_SLUGS).map((pageKey) => ({
    lang,
    pageKey,
    path: localizedPath(pageKey, lang),
  }))
)
