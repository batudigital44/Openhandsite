import { SUPPORTED_LANGS, DEFAULT_LANG, localizedPath, parsePath } from '../i18n/routes'

export const SITE_URL = 'https://www.batuhanates.com'
export const OG_IMAGE = `${SITE_URL}/og-image.png`

// Her sayfa TR/EN/DE içeriğini kendi URL'inde sunar (/hakkimda, /en/about,
// /de/about). hreflang alternatifleri ilgili dil URL'ine, x-default varsayılana işaret eder.
export const pageMeta = {
  home: {
    tr: {
      title: 'Batuhan Ateş – Dijital Pazarlama & Uluslararası Medya Danışmanı',
      description:
        'Antalya merkezli dijital pazarlama ve yapay zekâ pazarlama uzmanı. Turizm teknolojileri, performans pazarlaması, SEO ve uluslararası PR alanlarında 25+ markaya hizmet.',
    },
    en: {
      title: 'Batuhan Ateş – Digital Marketing & International Media Consultant',
      description:
        'Digital marketing and AI marketing expert based in Antalya. Serving 25+ brands in tourism technology, performance marketing, SEO, and international PR.',
    },
    de: {
      title: 'Batuhan Ateş – Digitalmarketing & Internationaler Medienberater',
      description:
        'Experte für Digitalmarketing und KI-Marketing mit Sitz in Antalya. Über 25 Marken in Tourismustechnologie, Performance-Marketing, SEO und internationaler PR.',
    },
  },
  about: {
    tr: {
      title: 'Hakkımda – Batuhan Ateş',
      description:
        "Gazetecilikten dijital pazarlamaya: Kırgızistan, Almanya, İsveç ve Türkiye'de medya, turizm ve teknoloji markalarıyla çalışan Batuhan Ateş'in kariyeri.",
    },
    en: {
      title: 'About – Batuhan Ateş',
      description:
        'From journalism to digital marketing: the career of Batuhan Ateş, who has worked with media, tourism, and technology brands in Kyrgyzstan, Germany, Sweden, and Türkiye.',
    },
    de: {
      title: 'Über mich – Batuhan Ateş',
      description:
        'Vom Journalismus zum Digitalmarketing: die Karriere von Batuhan Ateş, der mit Medien-, Tourismus- und Technologiemarken in Kirgisistan, Deutschland, Schweden und der Türkei gearbeitet hat.',
    },
  },
  portfolio: {
    tr: {
      title: 'Portfolyo ve Projeler – Batuhan Ateş',
      description:
        'PMA Partner, TEUS Group, Conti Group ve Dubai emlak projelerinde ölçülebilir sonuçlar: satış dönüşümü, SEO büyümesi ve reklam performansı.',
    },
    en: {
      title: 'Portfolio and Projects – Batuhan Ateş',
      description:
        'Measurable results for PMA Partner, TEUS Group, Conti Group, and Dubai real estate projects: sales conversion, SEO growth, and ad performance.',
    },
    de: {
      title: 'Portfolio und Projekte – Batuhan Ateş',
      description:
        'Messbare Ergebnisse für PMA Partner, TEUS Group, Conti Group und Dubai-Immobilienprojekte: Verkaufskonversion, SEO-Wachstum und Anzeigenleistung.',
    },
  },
  education: {
    tr: {
      title: 'Dijital Pazarlama ve Yapay Zekâ Eğitimleri – Batuhan Ateş',
      description:
        'Emlak danışmanları, otelciler ve markalar için uygulamalı yapay zekâ ile içerik üretimi, Meta reklamları, CRM ve otomasyon eğitimleri.',
    },
    en: {
      title: 'Digital Marketing and AI Trainings – Batuhan Ateş',
      description:
        'Hands-on AI content production, Meta ads, CRM, and automation training for real estate agents, hoteliers, and brands.',
    },
    de: {
      title: 'Digitalmarketing- und KI-Schulungen – Batuhan Ateş',
      description:
        'Praxisnahe Schulungen zu KI-Content-Produktion, Meta-Anzeigen, CRM und Automatisierung für Immobilienmakler, Hoteliers und Marken.',
    },
  },
  press: {
    tr: {
      title: 'Medya ve Basın – Batuhan Ateş',
      description:
        "Uluslararası basın akreditasyonlu gazeteci Batuhan Ateş'in haberleri, röportajları ve basında yer alan çalışmaları.",
    },
    en: {
      title: 'Media and Press – Batuhan Ateş',
      description:
        'News, interviews, and published work by internationally press-accredited journalist Batuhan Ateş.',
    },
    de: {
      title: 'Medien und Presse – Batuhan Ateş',
      description:
        'Nachrichten, Interviews und veröffentlichte Arbeiten des international presseakkreditierten Journalisten Batuhan Ateş.',
    },
  },
  contact: {
    tr: {
      title: 'İletişim – Batuhan Ateş',
      description:
        'Dijital pazarlama, eğitim veya iş birliği için iletişime geçin: digital@batuhanates.com',
    },
    en: {
      title: 'Contact – Batuhan Ateş',
      description:
        'Get in touch for digital marketing, training, or a partnership: digital@batuhanates.com',
    },
    de: {
      title: 'Kontakt – Batuhan Ateş',
      description:
        'Kontaktieren Sie mich für Digitalmarketing, Schulungen oder eine Partnerschaft: digital@batuhanates.com',
    },
  },
}

export const getPageMeta = (pathname) => {
  const { lang, pageKey } = parsePath(pathname)
  const key = pageKey || 'home'
  const group = pageMeta[key]
  const meta = group[lang] || group[DEFAULT_LANG]
  const path = localizedPath(key, lang)
  return { ...meta, lang, pageKey: key, path, url: `${SITE_URL}${path === '/' ? '/' : path}` }
}

// Aktif sayfanın dil alternatifleri (hreflang) ve x-default.
export const getHreflang = (pageKey) => [
  ...SUPPORTED_LANGS.map((lang) => ({ hreflang: lang, href: `${SITE_URL}${localizedPath(pageKey, lang)}` })),
  { hreflang: 'x-default', href: `${SITE_URL}${localizedPath(pageKey, DEFAULT_LANG)}` },
]
