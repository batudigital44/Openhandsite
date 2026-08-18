import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom'
import portfolioImage from '../assets/images/portfolio-banner.png'
import globalNetwork from '../assets/images/global-network.png'
import hotelResort from '../assets/images/hotel-resort.png'
import dubaiSkyline from '../assets/images/dubai-skyline.png'

const PortfolioPreview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const achievements = [
    {
      image: globalNetwork,
      title: t('portfolio.pma.title'),
      description: t('portfolio.pma.description'),
      tag: t('portfolio.pma.tag'),
      metrics: [t('portfolio.pma.metric1'), t('portfolio.pma.metric2'), t('portfolio.pma.metric3')]
    },
    {
      image: hotelResort,
      title: t('portfolio.conti.title'),
      description: t('portfolio.conti.description'),
      tag: t('portfolio.conti.tag'),
      metrics: [t('portfolio.conti.metric1'), t('portfolio.conti.metric2'), t('portfolio.conti.metric3')]
    },
    {
      image: dubaiSkyline,
      title: t('portfolio.dubai.title'),
      description: t('portfolio.dubai.description'),
      tag: t('portfolio.dubai.tag'),
      metrics: [t('portfolio.dubai.metric1'), t('portfolio.dubai.metric2'), t('portfolio.dubai.metric3')]
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

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/portfolyo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            {t('portfolioPreview.viewAll')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioPreview