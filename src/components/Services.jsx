import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Code, Brain, TrendingUp, Globe, BookOpen } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Services = () => {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Zap,
      key: 'martech',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Code,
      key: 'webdev',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      key: 'ai',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      key: 'performance',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      key: 'pr',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: BookOpen,
      key: 'training',
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary mb-2">{t('services.title')}</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t('services.subtitle')} <span className="gradient-text">{t('services.subtitleHighlight')}</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-full h-full text-white" />
              </div>
              <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                {t(`services.items.${service.key}.title`)}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t(`services.items.${service.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services