import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Newspaper, TrendingUp, Globe } from 'lucide-react'
import pressBanner from '../assets/images/portfolio-banner.png'

const Press = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const pressArticles = [
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
    }
  ]

  const categories = ['Tümü', 'Kariyer & Freelance', 'Uluslararası & Diplomasi']

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
              Basın <span className="gradient-text">Köşesi</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">Medyada Yer Alan Çalışmalarım ve Yazılarım</p>
            <div className="flex justify-center gap-4 mt-8">
              <div className="glass-card px-6 py-4">
                <Newspaper className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">9+</div>
                <div className="text-sm text-gray-400">Haber & Makale</div>
              </div>
              <div className="glass-card px-6 py-4">
                <Globe className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-gray-400">Farklı Platform</div>
              </div>
              <div className="glass-card px-6 py-4">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">1M+</div>
                <div className="text-sm text-gray-400">Erişim</div>
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
            <h2 className="text-sm font-semibold text-primary mb-2">Medya İçeriklerim</h2>
            <h3 className="text-3xl font-display font-bold">Basında ve Dijital Platformlarda</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressArticles.map((article, index) => (
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
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.source}</span>
                </div>
                <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">{article.date}</span>
                  <span className="flex items-center gap-1 text-primary text-sm group-hover:underline">
                    <ExternalLink size={14} />
                    Aç
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
              Yayınlarım ve <span className="gradient-text">Makalelerim</span>
            </h3>
            <p className="text-gray-400">Dijital pazarlama, medya ve uluslararası ilişkiler üzerine yazılar</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-dark-800 via-dark-900 to-dark-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Basın ve Medya İşbirliği
            </h2>
            <p className="text-gray-400 mb-8">
              Röportaj, işbirliği veya medya içerikleri için iletişime geçebilirsiniz
            </p>
            <a
              href="mailto:press@batuhanates.com"
              className="inline-flex items-center gap-2 text-xl font-bold gradient-text hover:scale-105 transition-transform"
            >
              <ExternalLink size={24} />
              press@batuhanates.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Press