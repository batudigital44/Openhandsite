import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, TrendingUp, Users, Award } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import aboutImage from '../assets/images/about-hero.png'

const AboutPreview = () => {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { number: '25+', label: t('aboutPreview.stats.brands'), icon: Target },
    { number: '10+', label: t('aboutPreview.stats.international'), icon: Users },
    { number: '95%', label: t('aboutPreview.stats.success'), icon: TrendingUp },
    { number: '1M+', label: t('aboutPreview.stats.engagement'), icon: Award },
  ]

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={aboutImage}
                alt="Batuhan Ateş"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-sm font-semibold text-primary mb-2">{t('aboutPreview.title')}</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
              {t('aboutPreview.subtitle')} <span className="gradient-text">{t('aboutPreview.subtitleHighlight')}</span>{t('aboutPreview.subtitleSuffix') && ' ' + t('aboutPreview.subtitleSuffix')}
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('aboutPreview.description1')}
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {t('aboutPreview.description2')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-4"
                >
                  <stat.icon className="w-5 h-5 text-primary mb-2" />
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Link to="/hakkimda" className="btn-primary inline-flex items-center gap-2">
              {t('aboutPreview.cta')}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview