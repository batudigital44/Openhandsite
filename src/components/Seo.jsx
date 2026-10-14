import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { SITE_URL, OG_IMAGE, getPageMeta, getHreflang } from '../seo/pageMeta'

const Seo = () => {
  const { pathname } = useLocation()
  const { language } = useLanguage()
  const meta = getPageMeta(pathname)
  const isHome = meta.pageKey === 'home'

  const breadcrumb = isHome
    ? null
    : {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: meta.title.split('–')[0].trim(), item: meta.url },
        ],
      }

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content={language} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {getHreflang(meta.pageKey).map((alt) => (
        <link key={alt.hreflang} rel="alternate" hrefLang={alt.hreflang} href={alt.href} />
      ))}

      {breadcrumb && <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>}
    </Helmet>
  )
}

export default Seo
