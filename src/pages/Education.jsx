import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Send, Zap, Smartphone, TrendingUp, Target, Check, Calendar, Users, Award } from 'lucide-react'

const Education = () => {
  const scrollRef = useRef(null)
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'egitim',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const validateForm = () => {
    if (!formData.name.trim()) return 'Lütfen adınızı girin'
    if (!formData.phone.trim()) return 'Lütfen telefon numaranızı girin'
    if (!formData.email.trim()) return 'Lütfen e-posta adresinizi girin'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Geçerli bir e-posta adresi girin'
    return null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }
    
    setIsSubmitting(true)
    setError('')

    // Simulate successful submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', phone: '', email: '', subject: 'egitim', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  const trainingFeatures = [
    { icon: Zap, text: 'Yapay zeka ile profesyonel içerik üretimi' },
    { icon: Smartphone, text: 'Mobil içerik üretimi' },
    { icon: Target, text: 'Nokta atışı Meta reklam stratejileri' },
    { icon: TrendingUp, text: 'CRM ve otomatik müşteri yönetimi' },
  ]

  const trainings = [
    {
      title: 'Emlak Danışmanları için Yüz Yüze Dijital Dönüşüm Atölyesi',
      date: 'Yakında başlıyor',
      location: 'Teus Group Ofisi, Muratpaşa/Antalya',
      spots: '10 kişi',
      features: trainingFeatures
    },
    {
      title: 'Dijital Pazarlama Temel Eğitimi',
      date: 'Online - 4 Hafta',
      location: 'Zoom / Google Meet',
      spots: 'Sınırsız',
      features: [
        { icon: Target, text: 'Temel SEO ve SEM stratejileri' },
        { icon: Zap, text: 'Sosyal medya yönetimi' },
        { icon: TrendingUp, text: 'Performans pazarlaması' },
        { icon: Smartphone, text: 'İçerik stratejisi' },
      ]
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-900" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              <span className="gradient-text">Eğitimler</span> ve Atölyeler
            </h1>
            <p className="text-xl text-gray-300">Dijital dünyada kendinizi geliştirin</p>
          </motion.div>
        </div>
      </section>

      {/* Trainings List */}
      <section className="section-padding" ref={scrollRef}>
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {trainings.map((training, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="glass-card p-8"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-4 py-2 bg-primary/20 text-primary text-sm font-medium rounded-full">
                        {training.date}
                      </span>
                      <span className="flex items-center gap-2 text-gray-400 text-sm">
                        <MapPin size={16} />
                        {training.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{training.title}</h3>
                    <p className="text-gray-400 mb-6">Neler Kazanacaksınız?</p>
                    <ul className="space-y-3">
                      {training.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <feature.icon size={20} className="text-primary" />
                          <span className="text-gray-300">{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:w-1/3">
                    <div className="bg-dark-700/50 rounded-xl p-6 h-full flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-gray-400 mb-4">
                        <Users size={20} />
                        <span>Kontenjan: {training.spots}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mb-6">
                        <Calendar size={20} />
                        <span>{training.date}</span>
                      </div>
                      <a 
                        href="#basvuru-formu"
                        className="btn-primary text-center w-full"
                      >
                        Başvur
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="basvuru-formu" className="section-padding bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6">Başvuru Formu</h3>
                <p className="text-gray-400 mb-8">
                  Eğitim ve danışmanlık başvurusu için formu doldurun. En kısa sürede size dönüş yapacağım.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Başvurunuz Alındı!</h4>
                    <p className="text-gray-400">En kısa sürede {formData.email || 'e-posta adresinize'} dönüş yapacağım.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-sm">
                        {error}
                      </div>
                    )}
                    <div>
                      <label className="block text-sm font-medium mb-2">İsim *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl focus:border-primary focus:outline-none transition-colors"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Telefon *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl focus:border-primary focus:outline-none transition-colors"
                        placeholder="+90 5XX XXX XX XX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">E-posta *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl focus:border-primary focus:outline-none transition-colors"
                        placeholder="ornek@mail.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mesajınız</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Eğitim veya danışmanlık hakkında detayları yazabilirsiniz..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Başvuru Yap
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">E-posta</h4>
                    <a href="mailto:digital@batuhanates.com" className="text-primary hover:underline">
                      digital@batuhanates.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Konum</h4>
                    <p className="text-gray-400">Antalya, Türkiye</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h4 className="font-semibold mb-4">Sosyal Medya</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/batu.digital/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-700 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <span className="text-xl">📷</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/batuhan-ate%C5%9F/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-700 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <span className="text-xl">💼</span>
                  </a>
                </div>
              </div>

              <div className="glass-card p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30">
                <div className="flex items-center gap-4 mb-4">
                  <Award size={24} className="text-primary" />
                  <h4 className="font-semibold">Neden Eğitimlerim?</h4>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> 10+ yıllık sektör deneyimi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Uluslararası akreditasyon
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Uygulamalı ve güncel içerik
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Kişiye özel mentörlük
                  </li>
                </ul>
              </div>
            </motion.div>
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
              Sorularınız mı var?
            </h2>
            <p className="text-gray-400 mb-8">
              Eğitimler veya danışmanlık hakkında sormak istediğiniz bir şey varsa, bana ulaşın.
            </p>
            <a
              href="mailto:digital@batuhanates.com"
              className="inline-flex items-center gap-2 text-2xl font-bold gradient-text hover:scale-105 transition-transform"
            >
              <Mail size={28} />
              digital@batuhanates.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Education