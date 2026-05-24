import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Code, Brain, TrendingUp, Globe, BookOpen } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Zap,
      title: 'Pazarlama Teknolojileri (MarTech) & Otomasyon',
      description: 'HubSpot ve Mautic ile omnichannel otomasyon kurulumları, Zapier ile sistem entegrasyonları ve CRM tabanlı satış hunisi (Sales Funnel) optimizasyonu.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Code,
      title: 'Web Geliştirme & Teknik SEO',
      description: 'HTML/CSS tabanlı web geliştirme, WordPress yönetimi ve arama motoru görünürlüğünü artıran teknik/içerik odaklı SEO stratejileri.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Üretken Yapay Zeka (Generative AI)',
      description: 'İleri düzey Prompt Mühendisliği, yapay zeka destekli içerik/tasarım iş akışları ve AI otomasyonları ile operasyonel verimlilik artışı.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Performans Pazarlaması',
      description: 'Meta, Google ve Yandex Ads platformlarında veri odaklı reklam yönetimi, A/B testleri ve yüksek dönüşümlü (High-Conversion) kampanya stratejileri.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Dijital Görünürlük & PR',
      description: 'Marka konumlandırma, kriz iletişimi yönetimi ve uluslararası medya akreditasyonu (IFJ) ile stratejik basın ilişkileri yönetimi.',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: BookOpen,
      title: 'Eğitim & Danışmanlık',
      description: 'Profesyonel ve kurumsal dijital pazarlama eğitimleri, stratejik danışmanlık ve mentörlük programları.',
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
          <h2 className="text-sm font-semibold text-primary mb-2">Hizmetlerim</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Kreatif ve <span className="gradient-text">Performans</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Güçlü mesleki alanlarım
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
                {service.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services