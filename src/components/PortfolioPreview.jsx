import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import portfolioImage from '../assets/images/portfolio-banner.png'
import dubaiSkyline from '../assets/images/dubai-skyline.png'
import hotelPool from '../assets/images/hotel-pool.png'
import hotelResort from '../assets/images/hotel-resort.png'
import germanyBerlin from '../assets/images/germany-berlin.jpg'
import whiteHouse from '../assets/images/white-house.jpg'
import kyrgyzstanDiplomacy from '../assets/images/kyrgyzstan-diplomacy.jpg'

const PortfolioPreview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const achievements = [
    {
      image: kyrgyzstanDiplomacy,
      title: 'Türkiye - Kırgızistan Diplomatik Dijital Dönüşüm',
      description: 'T.C. Bişkek Büyükelçiliği bünyesindeki TTEÖMER için ilk kurumsal dijital medya stratejisi.',
      tag: 'Diplomasi & Eğitim',
      metrics: ['Kurumsal Dijital Strateji', 'Multimedya Prodüksiyon']
    },
    {
      image: hotelResort,
      title: 'Teus Group - Ulusal ve Uluslararası Medya Görünürlüğü',
      description: 'Teus Group projeleri için ulusal ve uluslararası basında stratejik medya görünürlüğü.',
      tag: 'Turizm & Gayrimenkul',
      metrics: ['Desire Antalya', 'Avrupa Ödülü']
    },
    {
      image: germanyBerlin,
      title: 'Uluslararası Enerji Firması Dijital Dönüşümü',
      description: 'Mediawirt (Almanya) için dijital ekosistemi modern standartlara göre revize edildi.',
      tag: 'Enerji & B2B',
      metrics: ['B2B Lead Generation', 'E-Ticaret']
    },
    {
      image: whiteHouse,
      title: 'Uluslararası Medya Danışmanlığı',
      description: 'Trump\'ın medya danışmanına danışmanlık ve Beyaz Saray iletişim koordinasyonu.',
      tag: 'Uluslararası İletişim',
      metrics: ['Trump Danışmanlığı', 'Beyaz Saray']
    }
  ]

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-dark-900" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary mb-2">{t('portfolioPreview.subtitle')}</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t('portfolioPreview.title')}
          </h3>
          <img src={portfolioImage} alt="" className="mx-auto mt-8 max-w-md" />
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                {/* Metrics */}
                {item.metrics && (
                  <div className="flex flex-wrap gap-2">
                    {item.metrics.map((metric, i) => (
                      <span key={i} className="px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary text-xs font-medium rounded-full">
                        {metric}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioPreview