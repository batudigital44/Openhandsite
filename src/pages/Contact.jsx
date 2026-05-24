import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Send, Zap, Smartphone, TrendingUp, Target, Shield, Check } from 'lucide-react'

const Contact = () => {
  const scrollRef = useRef(null)
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" })
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
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
    if (!formData.subject) return 'Lütfen bir konu seçin'
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
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  const trainingFeatures = [
    { icon: Zap, text: 'Yapay zeka ile profesyonel içerik üretimi' },
    { icon: Smartphone, text: 'Mobil içerik üretimi' },
    { icon: Target, text: 'Nokta atışı Meta reklam stratejileri' },
    { icon: TrendingUp, text: 'CRM ve otomatik müşteri yönetimi' },
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
              Hadi <span className="gradient-text">Formu Doldur</span>
            </h1>
            <p className="text-xl text-gray-300">Eğitimlere Başlayalım</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding" ref={scrollRef}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6">Hadi Beraber Çalışalım</h3>
                <p className="text-gray-400 mb-8">
                  Aklınızda bir proje mi var? Fikirlerinizi dinlemek ve birlikte anlamlı bir şey yaratmak isterim. Hayalinizdeki projeyi hayata geçirelim.
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
                    <div className="grid md:grid-cols-2 gap-4">
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
                        <label className="block text-sm font-medium mb-2">Numaranız *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl focus:border-primary focus:outline-none transition-colors"
                          placeholder="+90 5XX XXX XX XX"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mail *</label>
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
                      <label className="block text-sm font-medium mb-2">Hangi konuda formu doldurmaktasınız? *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Seçiniz</option>
                        <option value="egitim">Eğitim</option>
                        <option value="danismanlik">Danışmanlık</option>
                        <option value="proje">Proje İşbirliği</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mesajınız</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Mesajınızı buraya yazabilirsiniz..."
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
                          Gönder
                        </>
                      )}
                    </button>
                  </form>
                )}

                <div className="mt-8 pt-8 border-t border-dark-600">
                  <p className="text-sm text-gray-400 mb-4">
                    Eğitimlerim ve danışmanlıklarım için lütfen ön başvuru formunu doldurunuz.
                  </p>
                  <a
                    href="mailto:digital@batuhanates.com"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Mail size={18} />
                    digital@batuhanates.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Training Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Upcoming Training */}
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold mb-6">Gelecek Eğitimler</h3>
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold mb-2">
                    Emlak Danışmanları için Yüz Yüze Dijital Dönüşüm Atölyesi Başlıyor!
                  </h4>
                  <p className="text-sm text-gray-400 mb-4">Neler Kazanacaksınız?</p>
                  <ul className="space-y-3">
                    {trainingFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm">
                        <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-sm text-yellow-400 mb-4">
                  <Shield className="w-4 h-4" />
                  <span>Kontenjan Kısıtlı: Verimlilik adına sadece 10 kişi kabul edilecektir.</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Formu doldur ya da hemen bana DM'den mesaj gönder
                </p>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Teus Group Ofisi, Muratpaşa/Antalya</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold mb-6">İletişim Bilgileri</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:digital@batuhanates.com"
                    className="flex items-center gap-4 p-4 bg-dark-700 rounded-xl hover:bg-primary/10 transition-colors group"
                  >
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <div className="text-sm text-gray-400">E-posta</div>
                      <div className="font-medium group-hover:text-primary transition-colors">digital@batuhanates.com</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-4 bg-dark-700 rounded-xl">
                    <MapPin className="w-6 h-6 text-primary" />
                    <div>
                      <div className="text-sm text-gray-400">Konum</div>
                      <div className="font-medium">Antalya, Türkiye</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold mb-6">Sosyal Medya</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.instagram.com/batu.digital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-dark-700 rounded-xl hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <span>@batu.digital</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/batuhan-ate%C5%9F/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-dark-700 rounded-xl hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <span>Batuhan Ateş</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact