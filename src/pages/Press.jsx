import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Newspaper, TrendingUp, Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import pressBanner from '../assets/images/portfolio-banner.webp'

const Press = () => {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('Tümü')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const pressArticles = [
    {
      title: 'Schengen\'de Türkiye\'ye Özel Kapı Diplomasisi',
      source: 'Turizm Aktüel',
      date: '2025',
      excerpt: 'Avrupa havalimanlarında Türk yolcular için ayrı bir şerit önerisi ve diplomasi trafiği.',
      url: 'https://www.turizmaktuel.com/haber/schengen-de-turkiye-ye-ozel-kapi-diplomasisi',
      category: 'Uluslararası & Diplomasi'
    },
    {
      title: 'Avrupa Havalimanlarında Türk Yolcular İçin Ayrı Şerit Önerisi',
      source: 'Turizm Günlüğü',
      date: '2026',
      excerpt: 'Türk yolcuların Avrupa\'da karşılaştığı güçlükler ve yeni diplomatik öneriler hakkında.',
      url: 'https://www.turizmgunlugu.com/2026/05/31/avrupa-havalimanlarinda-turk-yolcular-icin-ayri-serit-onerisi/',
      category: 'Uluslararası & Diplomasi'
    },
    {
      title: 'Türk Yolcular Neden "Other" Kuyruğunda? Avrupa\'ya Yeni Çağrı',
      source: 'Antalya Hurriyet',
      date: '2025',
      excerpt: 'Avrupa havalimanlarındaki ayrımcı uygulamalar ve Türk vatandaşları için yeni diplomatik girişimler.',
      url: 'https://www.antalyahurses.com/turk-yolcular-neden-other-kuyrugunda-avrupaya-yeni-cagri/553574',
      category: 'Uluslararası & Diplomasi'
    },
    {
      title: 'Schengen Değilse Türkiye\'ye Özel Kapı Diplomasisi',
      source: 'Basın Antalya',
      date: '2025',
      excerpt: 'Türkiye\'nin AB ile ilişkilerinde yeni bir diplomasi stratejisi önerisi.',
      url: 'https://www.basinantalya.com/schengen-degilse-turkiyeye-ozel-kapi-diplomasisi',
      category: 'Uluslararası & Diplomasi'
    },
    {
      title: 'Schengen Değil, En Olası Çözüm: Türk Yolcular İçin Ayrı Şerit',
      source: 'Antalya Haber 7',
      date: '2025',
      excerpt: 'Türk vatandaşları için Avrupa\'da özel muamele ve kapı diplomasisi önerileri.',
      url: 'https://antalyahaber7.com/haber/schengen-degil-en-olasi-cozum-onerisiturk-yolcular-icin-ayri-serit-onerisi-21808',
      category: 'Uluslararası & Diplomasi'
    },
    {
      title: 'Schengen Değilse Türkiye\'ye Özel Kapı Diplomasisi',
      source: 'Turizm İnsesi',
      date: '2025',
      excerpt: 'Türkiye-AB ilişkilerinde yeni dönem ve diplomatik çözüm önerileri.',
      url: 'https://www.turizminsesi.com/haber/schengen-degilse-turkiyeye-ozel-kapi-diplomasisi-32966.htm',
      category: 'Uluslararası & Diplomasi'
    },
    {
      title: 'Ekstra İş Yapıyorum Diyenler Dikkat!',
      source: 'Ajans Bir',
      date: '2025',
      excerpt: 'Freelancer olarak çalışanların ve ek iş yapanların dikkat etmesi gereken önemli noktalar hakkında uzman görüşleri.',
      url: 'https://ajansbir.com/freelancer-is-yapiyorum-diyenler-dikkat/53128/',
      category: 'Kariyer & Freelance'
    },
    {
      title: 'Ekstra İş Yapıyorum Diyenler Dikkat!',
      source: 'Okur Medya',
      date: '2025',
      excerpt: 'Dijital dünyada ek gelir elde etmek isteyenler için kritik tavsiyeler ve uyarılar.',
      url: 'https://www.okurmedya.com/ekstra-is-yapiyorum-diyenler-dikkat-2364-haberi',
      category: 'Kariyer & Freelance'
    },
    {
      title: 'Ekstra İş Yapıyorum Diyenler Dikkat!',
      source: 'Adalya Medya',
      date: '2025',
      excerpt: 'Bağımsız çalışma ve freelance kariyer hakkında önemli bilgiler.',
      url: 'https://www.adalyamedya.com/haber/ekstra-is-yapiyorum-diyenler-dikkat-5789',
      category: 'Kariyer & Freelance'
    },
    {
      title: 'Ekstra İş Yapıyorum Diyenler Dikkat!',
      source: 'Tüm 1 Haber',
      date: '2025',
      excerpt: 'Modern iş dünyasında ek gelir kaynakları ve dikkat edilmesi gerekenler.',
      url: 'https://tum1haber.com/haber/ekstra_is_yapiyorum_diyenler_dikkat-201529.html',
      category: 'Kariyer & Freelance'
    },
    {
      title: 'Ekstra İş Yapıyorum Diyenler Dikkat!',
      source: 'Analiz Gazetesi',
      date: '2025',
      excerpt: 'Dijital pazarlama ve freelance çalışma konusunda uzman değerlendirmeleri.',
      url: 'https://www.analizgazetesi.com.tr/haber/ekstra-is-yapiyorum-diyenler-dikkat-7237/',
      category: 'Kariyer & Freelance'
    },
    {
      title: 'The Future Is Being Built Here: Dubai 2040',
      source: 'Gayrimenkul Haber',
      date: '2025',
      excerpt: 'Dubai 2040: Bir devletin dönüşüm manifestosu ve geleceğin inşası hakkında detaylı analiz.',
      url: 'https://www.gayrimenkulhaber.com/sektorden-gelismeler/%EF%BF%BCgelecek-burada-insa-ediliyor-dubai-2040-bir-devletin-donusum-manifestosu/',
      category: 'Uluslararası & Diplomasi'
    },
    {
      title: 'The Future Is Being Built Here: Dubai 2040',
      source: 'Batuhan Ateş - Substack',
      date: '2025',
      excerpt: 'Dubai\'nin gelecek vizyonu ve küresel şehirleşme trendleri üzerine kapsamlı bir değerlendirme.',
      url: 'https://batuhanates.substack.com/p/he-future-is-being-built-here-dubai?r=76bxlr',
      category: 'Uluslararası & Diplomasi'
    },
    {
      title: 'The Future Is Being Built Here: Dubai 2040',
      source: 'Medium',
      date: '2025',
      excerpt: 'Devlet dönüşümü ve gelecek inşası üzerine bir manifestonun analizi.',
      url: 'https://medium.com/@hanates4444/the-future-is-being-built-here-dubai-2040-as-a-state-transformation-manifesto-728da4d6a525',
      category: 'Uluslararası & Diplomasi'
    },
    {
      title: 'Dubai 2040: Gelecek Burada İnşa Ediliyor',
      source: 'Gayrimenkul Gündemi',
      date: '2025',
      excerpt: 'Dubai\'nin 2040 vizyonu: Bir devletin dönüşüm manifestosu ve gelecek şehirleşme.',
      url: 'https://www.gayrimenkulgundemi.com/gelecek-burada-insa-ediliyor-dubai-2040-bir-devletin-donusum-manifestosu',
      category: 'Uluslararası & Diplomasi'
    },
      {
        title: 'TEUS Group\'un Bali Adası\'ndaki Yeni Projesi: Amani Melasti',
        source: 'Tourism Today (Instagram)',
        date: '2025',
        excerpt: 'Avrupa ödüllü TEUS Group\'un Bali Adası\'ndaki yeni projesi Amani Melasti, Tourism Today sosyal medya hesaplarında paylaşıldı.',
        url: 'https://www.instagram.com/tourismtoday_official/p/DGz0SUbI7fv/',
        category: 'Turizm & Yatırım'
      },
      {
        title: 'Avrupa Ödüllü TEUS Group\'un Bali Adası\'ndaki Yeni Projesi: Amani Melasti',
        source: 'Tourism Today',
        date: '2025',
        excerpt: 'Avrupa ödüllü TEUS Group\'un Bali Adası\'ndaki yeni projesi Amani Melasti, turizm basınında geniş yer buldu.',
        url: 'https://www.tourismtoday.net/kategoriler/genel-haberler/avrupa-odullu-teus-groupun-bali-adasindaki-yeni-projesi-amani-melasti/',
        category: 'Turizm & Yatırım'
      },
      {
        title: 'TEUS Group, Bali Adası\'nda Otel Yapacak',
        source: 'Turizm Yatırım Haber',
        date: '2025',
        excerpt: 'TEUS Group\'un Bali Adası\'nda hayata geçireceği yeni otel projesi sektör basınında duyuruldu.',
        url: 'https://turizmyatirimhaber.com/teus-group-bali-adasinda-otel-yapacak/',
        category: 'Turizm & Yatırım'
      },
      {
        title: 'Antalya\'da Gayrimenkul Profesyonellerine Yönelik Sektörel Seminer Ses Getirdi',
        source: 'Tüm 1 Haber',
        date: '2025',
        excerpt: 'Antalya\'da gayrimenkul profesyonellerine yönelik düzenlenen sektörel seminer büyük ilgi gördü.',
        url: 'https://tum1haber.com/haber/antalyada_gayrimenkul_profesyonellerine_yonelik_sektorel_seminer_ses_getirdi-289326.html',
        category: 'Gayrimenkul & Yatırım'
      },
      {
        title: 'Antalya\'da Gayrimenkul Profesyonellerine Yönelik Sektörel Seminer Ses Getirdi',
        source: 'Gayrimenkul Haber',
        date: '2025',
        excerpt: 'Antalya\'da gayrimenkul profesyonellerine yönelik sektörel seminerin yankıları basına taşındı.',
        url: 'https://www.gayrimenkulhaber.com/bolgesel/antalyada-gayrimenkul-profesyonellerine-yonelik-sektorel-seminer-ses-getirdi/',
        category: 'Gayrimenkul & Yatırım'
      },
      {
        title: 'Gayrimenkul Yatırımında Kazandıran Stratejiler: Antalya ve Ötesi',
        source: 'İnşaat Rehberi',
        date: '2025',
        excerpt: 'Antalya ve ötesinde gayrimenkul yatırımında kazandıran stratejiler üzerine bir değerlendirme.',
        url: 'https://insaatrehberi.com.tr/gayrimenkul-yatiriminda-kazandiran-stratejiler-antalya-ve-otesi/',
        category: 'Gayrimenkul & Yatırım'
      },
      {
        title: 'Tercihini Gayrimenkulden Yana Kullanan Yatırımcılara Öneriler',
        source: 'Dünya Gazetesi',
        date: '2025',
        excerpt: 'Gayrimenkulü tercih eden yatırımcılar için strateji ve öneriler Dünya Gazetesi\'nde yer aldı.',
        url: 'https://www.dunya.com/ekonomi/tercihini-gayrimenkulden-yana-kullanan-yatirimcilara-oneriler-haberi-758232',
        category: 'Gayrimenkul & Yatırım'
      },
      {
        title: 'Desire Antalya: Avrupa\'nın En İyi Yeni Otel İnşaat ve Tasarım Ödülü',
        source: 'Tourism Today (Instagram)',
        date: '2024',
        excerpt: 'Desire Antalya, Avrupa\'nın en iyi yeni otel inşaat ve tasarım ödülüyle Tourism Today sosyal medya hesaplarında yer aldı.',
        url: 'https://www.instagram.com/tourismtoday_official/p/DDwYz2VtlCc/',
        category: 'Turizm & Yatırım'
      },
      {
        title: 'Desire Antalya\'ya Avrupa\'nın En İyi Yeni Otel İnşaat ve Tasarım Ödülü',
        source: 'GM Dergi',
        date: '2024',
        excerpt: 'Desire Antalya projesi, Avrupa\'nın en iyi yeni otel inşaat ve tasarım ödülüne layık görüldü.',
        url: 'https://www.gmdergi.com/aktuel/desire-antalyaya-avrupanin-en-iyi-yeni-otel-insaat-ve-tasarim-odulu/',
        category: 'Turizm & Yatırım'
      },
      {
        title: 'TEUS Group\'un "En İyi Yeni Küçük Otel İnşaatı ve Tasarımı" Ödüllü Projesi: DESIRE',
        source: 'Türk Emlak Haber Ajansı',
        date: '2024',
        excerpt: 'TEUS Group\'un DESIRE projesi, "En İyi Yeni Küçük Otel İnşaatı ve Tasarımı" ödülünü kazandı.',
        url: 'https://www.emlakhaberajansi.com/teus-groupun-en-iyi-yeni-kucuk-otel-insaati-ve-tasarimi-odullu-projesi-desire.html',
        category: 'Turizm & Yatırım'
      },
      {
        title: 'Antalya\'da Yüksek Getiri Potansiyeline Sahip Desire Antalya Rezidans Projesi',
        source: 'Ekonomi Life',
        date: '2024',
        excerpt: 'Antalya\'da yüksek getiri potansiyeli taşıyan Desire Antalya rezidans projesi incelendi.',
        url: 'https://ekonomilife.com/ekonomi/antalyda-yuksek-getiri-potansiyeline-sahip-desire-antalya-rezidans-projesi/',
        category: 'Gayrimenkul & Yatırım'
      }
,
  ]

  const categories = ['Tümü', 'Kariyer & Freelance', 'Uluslararası & Diplomasi', 'Turizm & Yatırım', 'Gayrimenkul & Yatırım']
  const filteredArticles = activeCategory === 'Tümü' ? pressArticles : pressArticles.filter((a) => a.category === activeCategory)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-900" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              {t('press.title').split(' ')[0]} <span className="gradient-text">{t('press.title').split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">{t('press.subtitle')}</p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">{t('press.summary')}</p>
            <div className="flex justify-center gap-4 mt-8">
              <div className="glass-card px-6 py-4">
                <Newspaper className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">25+</div>
                <div className="text-sm text-gray-400">{t('press.newsArticles')}</div>
              </div>
              <div className="glass-card px-6 py-4">
                <Globe className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">20+</div>
                <div className="text-sm text-gray-400">{t('press.platforms')}</div>
              </div>
              <div className="glass-card px-6 py-4">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">1M+</div>
                <div className="text-sm text-gray-400">{t('press.reach')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Articles */}
      <section className="section-padding" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-semibold text-primary mb-2">{t('press.mediaContent')}</h2>
            <h3 className="text-3xl font-display font-bold">{t('press.mediaPlatforms')}</h3>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActiveCategory(c)}
                className={
                  activeCategory === c
                    ? 'px-4 py-2 rounded-full text-sm font-semibold bg-primary text-white transition-colors'
                    : 'px-4 py-2 rounded-full text-sm font-semibold bg-white/5 text-gray-300 hover:bg-white/10 transition-colors'
                }
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <motion.a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-sm">{article.source}</span>
                </div>
                <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{article.date}</span>
                  <span className="flex items-center gap-1 text-primary text-sm group-hover:underline">
                    <ExternalLink size={14} />
                    {t('press.open')}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="section-padding bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-display font-bold mb-4">
              {t('press.publications').split(' ')[0]} ve <span className="gradient-text">{t('press.publications').split(' ').slice(1).join(' ')}</span>
            </h3>
            <p className="text-gray-400">{t('press.publicationsDesc')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.a
              href="https://batuhanates.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 hover:border-primary/50 transition-all flex items-center gap-4"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                <span className="text-3xl">📧</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">Substack</h4>
                <p className="text-gray-400 text-sm">Kişisel bülten ve analizler</p>
              </div>
            </motion.a>
            
            <motion.a
              href="https://medium.com/@hanates4444"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 hover:border-primary/50 transition-all flex items-center gap-4"
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center">
                <span className="text-3xl">✍️</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">Medium</h4>
                <p className="text-gray-400 text-sm">Teknik makaleler ve düşünceler</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.basinantalya.com/batuhan-ates"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 hover:border-primary/50 transition-all flex items-center gap-4"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center">
                <span className="text-3xl">📰</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">Basın Antalya</h4>
                <p className="text-gray-400 text-sm">Yerel medya ve haberler</p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* CTA removed - using Footer CTA */}
    </div>
  )
}

export default Press